<template>
  <div class="page" id="step-start" ref="stepStart">

    <PageHeader :title="'1. ' + $t('step-start.title')">
      {{$t('step-start.description')}}
    </PageHeader>

    <div id="steps-controls" class="ml-n2 ml-sm-2 ml-md-8 ml-lg-12 pt-sm-2" style="max-width:500px;">
      

         <!-- ***************** Flight Date ******************** -->
      <h3 id="chooseFlightDate" class="disable-select">
        <v-icon :color="flightDate ? 'success' : 'primary'">{{ flightDate ? stepIconCompleted : stepIcon }}</v-icon>
        {{$t('step-start.flightdate')}}
      </h3>
      
      <div class="controls mb-0 mb-sm-2 mb-md-4">

          <!-- Preferred Flight Date Calendar  -->
          <v-date-picker
            v-model="flightDate"
            first-day-of-week="0"
            show-current
            :landscape="this.$vuetify.breakpoint.name === 'xs' ? false : true"
            :locale="$i18n.locale" 
            :min="flightMinDate"
            :max="flightMaxDate"
            elevation="4"
            width="290"
            :color="flightDate === '' ? 'primary' : 'green'"
            @input="flightMenu = false"
            :events="calendarTripLength"
            class="disable-select"
          ></v-date-picker>




        <!-- Arriving in Zermatt pop up Calendar  -->
        <v-dialog
          v-model="arriveMenu"
          :nudge-right="0"
          transition="scale-transition"
          offset-y
          min-width="auto"
          max-width="300"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              :value="formatArriveDate"
              :label="$t('step-start.arrivingDate')"
              class="ml-10 mt-3"
              readonly
              :color="arriveDate === '' ? 'primary' : 'green'"
              v-bind="attrs"
              v-on="on"
              v-show="hasValidFlightDate"
            >
            
              <template v-slot:append>
                <v-hover v-slot="{}" >
                  <v-icon
                    :color="arriveDate === '' ? 'primary' : 'green'"
                    @click="arriveMenu = true"
                  >
                    mdi-calendar
                  </v-icon> 
                </v-hover>
              </template>
            
            </v-text-field>
          </template>
          <v-date-picker
            v-model="arriveDate"
            first-day-of-week="0"
            :locale="$i18n.locale" 
            :min="todaysDate"
            :max="flightDate"
            color="green"
            elevation="15"
            :events="showFlightDateColour"
            @input="arriveMenu = false"
          ></v-date-picker>
        </v-dialog>







        <!-- Departing Zermatt Calendar  -->
        <v-dialog
          v-model="departMenu"
          :nudge-right="0"
          :nudge-bottom="0"
          transition="scale-transition"
          offset-y
          min-width="auto"
          max-width="300"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="formatDepartDate"
              :label="$t('step-start.departingDate')"
              append-icon="mdi-calendar"
              class="ml-10 mt-n3 mb-2"
              readonly
              :color="departDate === '' ? 'primary' : 'green'"
              v-bind="attrs"
              v-on="on"
              v-show="hasValidFlightDate"
            >
            
              <template v-slot:append>
                <v-hover v-slot="{}" >
                  <v-icon
                    :color="departDate === '' ? 'primary' : 'green'"
                    @click="departMenu = true"
                  >
                    mdi-calendar
                  </v-icon> 
                </v-hover>
              </template>
            
            </v-text-field>
          </template>
          <v-date-picker
            v-model="departDate"
            first-day-of-week="0"
            :locale="$i18n.locale" 
            :min="flightDate"
            :max="flightMaxDate"
            elevation="15"
            color="green"
            :events="showFlightDateColour"
            @input="departMenu = false"
          ></v-date-picker>
        </v-dialog>


      </div>


      <!-- ***************** Which Flight? Flight List ******************** -->
      <h3 id="whichFlight" class="disable-select mt-6" >
        <v-icon  
          :color="flightChosen ? 'success' : 'primary'">{{ flightOptionsDropMenuList ? stepIconCompleted : stepIcon }}
        </v-icon>
        {{$t('step-start.whichflight')}}
      </h3>
      <div class="controls mb-0 mb-sm-6 mb-md-10">
        <v-select
          class="disable-select"
          style="max-width:330px;"
          v-model="flightChosen"
          :items="flightOptionsDropMenuList"
          item-text="name"
          item-value="id"
          :loading="flightOptionsLoaded"
          solo
          outlined
          :disabled="!isValidFlightDate"
          :hint="isValidFlightDate ? '' : $t('step-start.pleaseChooseFlightFirst')"
          persistent-hint
          @change="onFlightChanged"
        >
        </v-select>
      </div>

      <!-- This is an Info dialog that's shown to the user if they choose the Elite flight.  -->
      <v-dialog
        v-model="eliteDialog"
        width="500"
      >
        <template v-slot:activator="{}">
        </template>

        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
            Flight Infos - 
            <span v-if="isKlein" class="pl-1">
              Elite
            </span>
            <span v-if="isClassic" class="pl-1">
              Classic High
            </span>
            <span v-if="isScenic" class="pl-1">
              Scenic
            </span>
          </v-card-title>

          <v-card-text
            class="pt-4"
          >

            <div v-if="isKlein">
              <p>
                The Elite flight is the highest tandem take off in the Alps - this makes for an amazing flight,
                but also means that both weather and snow conditions have to be just right. Winds are often 
                strong at this altitude and our take off areas are on glacier/snow - because of this we try and do
                this flight early in the morning when conditions are the best.
              </p>
              <p>
                If you book the Elite, we ask that you are happy to do the Classic High flight as a back-up -
                in case the conditions don't allow us to fly from Klein Matterhorn.
              </p>
              <p>
                The Elite flight also requires passengers to be fairly fit, confident and not too heavy.
              </p>
            </div>

            <div v-if="isClassic">
              <p>
                The best time for the Classic High is in the mornings. It is often also possible to do 
                this flight in the afternoon, but it depends on the day's conditions.
              </p>
              <p>
                If you book the early morning (08:00) flight, we ask that you be be fairly fit, confident and not too heavy
              </p>
            </div>

            <div v-if="isScenic">
              <p>
                We fly the Scenic from both Blauherd and Riffelberg. We try and choose the location that 
                we feel will have the best conditions for your specific booking time.
              </p>
              <p>
                If you book the early morning (08:00) flight, we ask that you be be fairly fit, confident and not too heavy
              </p>
              <p>
                <v-icon small color="warning" class="">
                  mdi-information-outline
                </v-icon>
                It is also possible to meet you on the mountain, if you would like to combine 
                your flight with a day of hiking or sight seeing. IMPORTANT: Please add a "Booking Message", on the payment page 
                to let us know where you would like to meet. 
              </p>
              <p>
                <v-icon small color="warning" class="mr-1">
                  mdi-information-outline
                </v-icon>
                <strong>PLEASE NOTE</strong>: All times shown on your Booking are <strong>Office Meeting times</strong>!
                If you want to meet on the mountain, we will contact you, after you complete your online booking, with final times and details.
              </p>
            </div>

          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              elevation="2"
              outlined
              class="mb-2"
              @click="eliteDialog = false"
            >
              Got it!
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>


      <!-- ***************** Photos + Videos ******************** -->
      <h3 class="disable-select">
        <v-icon :color="switchPhotos ? 'success' : 'primary'">{{ cameraIcon }}</v-icon>
        {{$t('step-start.photosvideos')}}
      </h3>
      <div class="controls mb-0 mb-sm-6">
        <!-- Photos and Videos included? -->
        <v-switch 
          id="photosSwitch"
          v-model="switchPhotos" 
          class="ml-2"
          color="success"
          inset 
          :label="$t('step-start.photosvideos-description', { 'price': photosPrice })"
        ></v-switch>

        <p
          class="caption pl-8 ml-8 mt-n4 disable-select"
          style="position:relative; z-index:2;"
        >
          <span id="photosVidDetails" @click="photosVideoDialog = true" style="cursor:pointer;">
            (
              <v-icon tabindex="-1" @click="photosVideoDialog = true">
                {{infoIcon}} 
              </v-icon> 
                {{$t('step-start.clickForDetails')}}
              <!-- <a href="https://www.flyzermatt.com/photos-videos/" target="_blank">
                {{$t('step-start.clickForDetails')}}
              </a> -->
            )
          </span>
        </p>
      </div>



      <!-- This is an Info dialog that's shown to the user if they choose the Elite flight. -->
      <v-dialog
        v-model="photosVideoDialog"
        width="500"
      >
        <template v-slot:activator="{}">
        </template>

        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
            Photos + Videos Infos
          </v-card-title>

          <v-card-text
            class="pt-4"
          >
            <div>

              <!-- Test Photos  -->
              <v-carousel
                cycle
                height="250"
                hide-delimiter-background
                show-arrows-on-hover
                hide-delimiters
                interval="4500"
              >
                <v-carousel-item
                  v-for="(slide, i) in slides"
                  :key="i"
                >
                  <v-sheet
                    :color="colors[i]"
                    height="100%"
                  >
                    <v-row
                      class="fill-height"
                      align="center"
                      justify="center"
                    >
                      <v-img
                        v-if="i === 0"
                        class="mx-auto mb-2"
                        max-height="200"
                        max-width="250"
                        src="@/assets/MicroSD-and-adaptor.jpg"
                      ></v-img>
                      <div v-else class="text-h2">
                        {{ slide }} Slide
                      </div>
                    </v-row>
                  </v-sheet>
                </v-carousel-item>
              </v-carousel>


              <p>
                Select our {{photosPrice}}.- CHF Photos + Videos option, if you're sure you want to buy the MicroSD Card
                that your pilot will make of your flight. Buying them now just makes your fly day
                a little bit smoother and easier.
              </p>
              <p>
                There are usually 60-200 photos and a handful
                of video clips (for example from the take off, landing and if you're doing some actions
                over town).
              </p>
              <p>
                If you're not sure, you can also decide after you fly. We have tablets in our office to
                view them on. Hi Stu
              </p>
            </div>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              elevation="2"
              outlined
              class="mb-2"
              @click="photosVideoDialog = false"
            >
              Got it!
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

    </div>    <!-- end step controls -->

    
  </div>
</template>

<script>
// @ is an alias to /src

import { format, add, sub, parseISO, isAfter, isBefore, isEqual } from 'date-fns'
import { mdiInformation, mdiArrowRightBoldCircleOutline, mdiCheckCircleOutline, mdiCameraPlusOutline, mdiCloudQuestion, mdiCloud, mdiCalendarMonth } from '@mdi/js'

import i18n from '@/i18n'

import PageHeader from '@/components/PageHeader.vue'
//const VueScrollTo = require('vue-scrollto');

export default {
  name: 'Start',
  components: {
    PageHeader
  },

  props: {}, 

  data () {
    return {
      stepIcon:           mdiArrowRightBoldCircleOutline,
      stepIconCompleted:  mdiCheckCircleOutline,
      cameraIcon:         mdiCameraPlusOutline,
      cloudQuestionIcon:  mdiCloudQuestion,
      cloudIcon:          mdiCloud,
      calendarIcon:       mdiCalendarMonth,
      infoIcon:           mdiInformation,

      flightOptionsDropMenuList: this.buildFlightList(),
      
      flightModal: false,

      nrPeopleExceedsMaxPilots: false,    // when true, shows "Booking Info:" message under Nr of People Flying input.

      nrPeopleEnabled: false,

      bigGroupDialog: false,
      eliteDialog: false,
      photosVideoDialog: false,

      isPageValid: this.$store.getters.step_startValid,

      // overlay: false,
      arriveMenu: false,  
      flightMenu: false,
      departMenu: false,

      isKlein: false,
      isClassic: false,
      isScenic: false,


      colors: [
          'white',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],

    }
  },

  // Lifecycle Hooks

  beforeMount() {
    // Need to build the Flights Menu list.
    this.$store.dispatch('flightOptions')
  },

  beforeUpdate() {
    // update the Continue btn if page is valid
    this.onValueChanged()
  },




  computed: {

    hasValidFlightDate: function () {
      if ( isAfter( sub(parseISO(this.flightDate), {days: -1}), Date.now() ) ) {
        return true
      }
      return false
    },

    photosPrice: function () {
      return this.$store.state._videoPrice
    },

    flightOptionsLoaded: function () {
      return this.$store.state._flightsList_loading
    },

    forWatchingBothFlightDateAndFlightType() {
      return `${this.flightDate}|${this.flightChosen}`;
    },

    flightDate: {
      get() {
        return this.$store.state.flightDate
      },
      set(dateStr) {
        // check if date has changed.
        if (dateStr === this.$store.state.flightDate) {
          // console.log('Date didnt change, not setting')
          return
        }
        // Trigger custom event that the main App can listen for,
        // that pulls down updated FlightsList from API and clears
        // the Which Flight menu if there's data that's out of sync.
        //this.$emit('flight-date-changed', dateStr)
        //console.log('Think need to load flightOptions list here. flightDate, set()')
        this.$store.dispatch('setFlightDate', dateStr)
        this.$store.dispatch('flightOptions')
        this.buildFlightList()
        this.$store.dispatch('clearSlotsPassengers')
        this.scrollToId("#chooseFlightDate")
      }
    },
    flightChosen: {
      get() {
        return parseInt(this.$store.state.selectedFlight)
      },
      set(flightStr) {
        //console.log('Set chosen flight', flightStr)
        return this.$store.dispatch('setFlight', flightStr)
      }
    },
    switchPhotos: {
      get() {
        return this.$store.state.wantsPhotos
      },
      set(photosBool) {
        return this.$store.dispatch('setWantsPhotos', photosBool)
      }
    },

    // Normal computed values
    flightMinDate: function () {
      const offsetDays = this.$store.state._bookDaysOffset
      return format( add(Date.now(), {days:offsetDays}), 'yyyy-MM-dd')
    },
    flightMaxDate: function () {
      const offsetMonths = this.$store.state._bookMonthsOffset
      return format( add(Date.now(), {months:offsetMonths}), 'yyyy-MM-dd')
    },


    flightsWatch: function () {
      //console.log('flightsWatch triggered.')
      return this.$store.state._flightsList
    },

    isValidFlightDate: function () {
      if (this.flightDate !== '' && this.flightDate !== null) {
        return true
      }
      return false
    },
    isValidFlightChosen: function () {
      if (this.flightDate !== '' && this.flightChosen !== '') {
        return true
      }
      return false
    },

    formatISODate: function () {
      if (this.flightDate === '') return '' // Guard against trying to parse an empty string as a Date.
      const myDate = parseISO(this.flightDate)
      //console.log(myDate)
      const myFormat = format(myDate, 'PPPP') // had some weird format issues here, this works.
      //console.log(myFormat)
      return myFormat
    },


    todaysDate: function () {
      return format(parseISO(new Date().toISOString()), 'yyyy-MM-dd')
    },
    formatArriveDate: function () {
      if (isAfter(parseISO(this.arriveDate), parseISO(this.flightDate))) {
        // return 'Arrival date must be on or before your Flight Date'
        return ''
      }
      return this.arriveDate ? format(parseISO(this.arriveDate), 'EEEE, MMMM do yyyy') : ''
    },
    arriveDate: {
      get() {
        if (this.$store.state.arriveDate === '') return this.$store.state.flightDate
        return this.$store.state.arriveDate
      },
      set(dateStr) {
        this.$store.dispatch('setArriveDate', dateStr)
      }
    },

    formatDepartDate: function () {
      if (isBefore(parseISO(this.departDate), parseISO(new Date().toISOString())  )) {
        // return 'Arrival date must be on or after your Flight Date'
        return ''
      }
      return this.departDate ? format(parseISO(this.departDate), 'EEEE, MMMM do yyyy') : ''
    },
    departDate: {
      get() {
        if (this.$store.state.departDate === '') return this.$store.state.flightDate
        return this.$store.state.departDate
      },
      set(dateStr) {
        this.$store.dispatch('setDepartDate', dateStr)
        this.scrollToId("#whichFlight")
      }
    },

    formatFlightDate: function () {
      return this.flightDate ? format(parseISO(this.flightDate), 'EEEE, MMMM do yyyy') : ''
    },




  },
  methods: {

    onFlightChanged () {

      // guard against the dialog opening when nothing has been selected.
      if (this.$store.state.selectedFlight === '') {
        return
      }

      // check if user selected the Elite flight and if yes, show info dialog.
      this.eliteDialog = true

      // Klein
      if (this.$store.state.selectedFlight === 40) {
        this.isKlein = true,
        this.isClassic = false,
        this.isScenic = false
      }
      // Classic
      if (this.$store.state.selectedFlight === 38) {
        this.isKlein = false,
        this.isClassic = true,
        this.isScenic = false
      }
      // Scenic
      if (this.$store.state.selectedFlight === 39) {
        this.isKlein = false,
        this.isClassic = false,
        this.isScenic = true
      }

    },

    gotoPhotosVideosWebPage () {
      window.open("https://www.flyzermatt.com/photos-videos/", "_blank")
    },


    showFlightDateColour (date) {
      if ( isEqual( parseISO(this.flightDate), parseISO(date)) ) { 
        //console.log(date, "Matched")
        return ['primary']
      }
    },

    calendarTripLength (date) {
      if ( 
        (isAfter( parseISO(date), sub(parseISO(this.arriveDate), {days: 1}) ) ) 
        &&
        (isBefore( parseISO(date), add(parseISO(this.departDate), {days: 1}) ) ) 
      ) {
        return ['yellow']
      }
    },

    // scrollToId: function (elIdToTarget = '') {
    //   setTimeout(() => { this.$scrollTo(elIdToTarget, 500) }, 100)
    // },
    
    // move this to updating a VueX state list, that the Continue button
    // can react to on its own.
    onValueChanged: function () {
      // if (this.areAllInputsValid) {
      if (this.$store.getters.step_startValid) {
        //console.log('onValueChanged -> areAllInputsValid()')
        const payload = {'Start': true}
        this.$store.dispatch('setNavListItem', payload)
        return
      }
      // this.$emit('form-is-valid', false)
      //console.log('onValueChanged -> inputs NOT VALID. Start = false')
      const payload = {'Start': false}
      this.$store.dispatch('setNavListItem', payload)
    },

    /**
     * Reads in flights available for chosen User date from Tommy's API, or
     * until he finishes that, a dummy text file "flightdata.js". Both return
     * a json object with flight ids, names and prices.
     */
    buildFlightList: function () {
      const obj = this.$store.state._flightsList
      //console.log('build flight list for drop menu', obj)

      if (this.isObjEmpty(obj)) return [{id:-1, name: i18n.t('step-start.noAvailableFlights')}]

      let newFlightsList = []

      // eslint-disable-next-line no-unused-vars
      for (const [key, value] of Object.entries(obj)) {
        //console.log(key, value['id'], value['name'], value['price'])
        const namePrice = value['name'] + ' ' + value['price'] + '.- CHF'
        const listItem = {id:value['id'], name:namePrice}
        newFlightsList.push(listItem)
      }

      return newFlightsList

    },

  },

  watch: {


    forWatchingBothFlightDateAndFlightType() {
      // const [oldPropertyA, oldProvertyB] = oldVal.split('|');
      // const [newPropertyA, newProvertyB] = newVal.split('|');
      //console.log('Both Flight Date and Type changed. PropA: ' + oldPropertyA + '!=' + newPropertyA + ' -- PropB: ' + oldProvertyB + '!=' + newProvertyB)
      
      // LOAD VueX - grab timesListDates from API.
      // Only fire if the Which Flight? isn't empty.
      if (this.flightChosen === '') return
      //console.log('Flight Date + Flight Type chnged. Preload TLGroup')
      this.$store.dispatch('timeListDates')
      this.onValueChanged()
    },
    flightsWatch: function () {
      // When this computed property (source data is: this.$store.flightsList)
      // and generate a new drop menu for Which Flight?
      this.flightOptionsDropMenuList = this.buildFlightList()
    },
    flightDate: function () {
      // enable nr people and which flight if valid date chosen.
      //this.nrPeopleEnabled = true
      //console.log('Chosen Date: ' + this.flightDate)
    },

  },



}

</script>

<style scoped>


#flightDropMenu {
  max-width: 400px;
}

.v-input__slot:hover {
  cursor: pointer !important;
}

#photosVidDetails {
  cursor: pointer;
}
  #photosVidDetails:hover {
    color: #2196F3;
  }


</style>