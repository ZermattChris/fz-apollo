<template>
  <div class="page" id="step-start" ref="stepStart">

    <PageHeader :title="'1. ' + $t('step-info.title')">
      {{$t('step-info.description')}}
    </PageHeader>

    <div id="steps-controls" class="ml-n2 ml-sm-2 ml-md-8 ml-lg-12 pt-sm-2" style="max-width:500px;">
      

         <!-- ***************** Flight Date ******************** -->
      <h3 id="chooseFlightDate" class="disable-select">
        <v-icon :color="flightDate ? 'success' : 'primary'">{{ flightDate ? stepIconCompleted : stepIcon }}</v-icon>
        {{$t('step-info.flightdate')}}
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
              :label="$t('step-info.arrivingDate')"
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
              :label="$t('step-info.departingDate')"
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
            @input="departMenu = false"
          ></v-date-picker>
        </v-dialog>


      </div>


      <!-- ***************** Which Flight? Flight List ******************** -->
      <h3 id="whichFlight" class="disable-select mt-6" >
        <v-icon  
          :color="flightChosen ? 'success' : 'primary'">{{ flightOptionsDropMenuList ? stepIconCompleted : stepIcon }}
        </v-icon>
        {{$t('step-info.whichflight')}}
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
          :hint="isValidFlightDate ? '' : $t('step-info.pleaseChooseFlightFirst')"
          persistent-hint
        >
        </v-select>
      </div>


      <!-- ***************** Photos + Videos ******************** -->
      <h3 class="disable-select">
        <v-icon :color="switchPhotos ? 'success' : 'primary'">{{ cameraIcon }}</v-icon>
        {{$t('step-info.photosvideos')}}
      </h3>
      <div class="controls mb-0 mb-sm-6">
        <!-- Photos and Videos included? -->
        <v-switch 
          id="photosSwitch"
          v-model="switchPhotos" 
          class="ml-2"
          color="success"
          inset 
          :label="$t('step-info.photosvideos-description', { 'price': photosPrice })"
        ></v-switch>

        <p
          class="caption pl-16 ml-8 mt-n4 disable-select"
          style="position:relative; z-index:2;"
        >
          (
          <v-icon tabindex="-1" @click="gotoPhotosVideosWebPage">
            {{infoIcon}} 
          </v-icon> 
          <a href="https://www.flyzermatt.com/photos-videos/" target="_blank">
            click here for detailed information
          </a>)
        </p>
      </div>


    </div>

    
  </div>
</template>

<script>
// @ is an alias to /src

import { format, add, sub, parseISO, isAfter, isBefore } from 'date-fns'
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

      isPageValid: this.$store.getters.step_startValid,

      // overlay: false,
      arriveMenu: false,  
      flightMenu: false,
      departMenu: false
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
        return this.$store.state.arriveDate
      },
      set(dateStr) {
        this.$store.dispatch('setArriveDate', dateStr)
      }
    },

    formatDepartDate: function () {
      if (isBefore(parseISO(this.departDate), parseISO(this.flightDate))) {
        // return 'Arrival date must be on or after your Flight Date'
        return ''
      }
      return this.departDate ? format(parseISO(this.departDate), 'EEEE, MMMM do yyyy') : ''
    },
    departDate: {
      get() {
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

    gotoPhotosVideosWebPage () {
      window.open("https://www.flyzermatt.com/photos-videos/", "_blank")
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

    scrollToId: function (elIdToTarget = '') {
      setTimeout(() => { this.$scrollTo(elIdToTarget, 500) }, 100)
    },
    
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

      if (this.isObjEmpty(obj)) return [{id:-1, name: i18n.t('step-info.noAvailableFlights')}]

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
      console.log('Chosen Date: ' + this.flightDate)
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

</style>