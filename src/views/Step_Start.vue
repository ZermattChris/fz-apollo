<template>
  <div class="page" id="step-start" ref="stepStart">

    <PageHeader :title="'1. ' + $t('step-start.title')">
      {{$t('step-start.description')}}
    </PageHeader>


    <div id="steps-controls" class="ml-n2 ml-sm-2 ml-md-8 ml-lg-12 pt-sm-2" style="max-width:500px;">
      

         <!-- ***************** Flight Date ******************** -->
      <h3 id="chooseFlightDate" class="disable-select">
        <v-icon :color="flightDate ? 'successBright' : 'primary'">{{ flightDate ? stepIconCompleted : stepIcon }}</v-icon>
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
            :color="flightDate === '' ? 'primary' : 'success'"
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
              id="arriveInput"
              :value="formatArriveDate"
              :label="$t('step-start.arrivingDate')"
              class="ml-10 mt-3"
              readonly
              :color="arriveDate === '' ? 'primary' : 'successBright'"
              v-bind="attrs"
              v-on="on"
              v-show="hasValidFlightDate"
              ref="arriveDateInput"
            >
            
              <template v-slot:append>
                <v-hover v-slot="{}" >
                  <v-icon
                    :color="arriveDate === '' ? 'primary' : 'successBright'"
                    @click="arriveMenu = true"
                  >
                    mdi-calendar
                  </v-icon> 
                </v-hover>
              </template>
            
            </v-text-field>
          </template>

          <v-card>
            <v-card-text>
              <h2 class="font-weight-black purple--text pt-4">{{$t('step-start.arrivingDatePopupTitle')}}</h2>
            </v-card-text>
            <v-date-picker
              v-model="arriveDate"
              first-day-of-week="0"
              :locale="$i18n.locale" 
              :min="todaysDate"
              :max="flightDate"
              persistent
              color="blue-grey darken-4"
              width="100%"
              style="padding:0 20px;"
              :events="showFlightDateColour"
              @input="arriveMenu = false"
            ></v-date-picker>
            <v-card-text>
              <div class="pt-4 caption">{{$t('step-start.arrivingDatePopupMsg')}}</div>
            </v-card-text>
          </v-card>
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
              id="departInput"
              v-model="formatDepartDate"
              :label="$t('step-start.departingDate')"
              append-icon="mdi-calendar"
              class="ml-10 mt-n3 mb-2"
              readonly
              :color="departDate === '' ? 'primary' : 'successBright'"
              v-bind="attrs"
              v-on="on"
              v-show="hasValidFlightDate"
            >
            
              <template v-slot:append>
                <v-hover v-slot="{}" >
                  <v-icon
                    :color="departDate === '' ? 'primary' : 'successBright'"
                    @click="departMenu = true"
                  >
                    mdi-calendar
                  </v-icon> 
                </v-hover>
              </template>
            
            </v-text-field>
          </template>

          <v-card>
            <v-card-text>
              <h2 class="font-weight-black purple--text pt-4">{{$t('step-start.departingDatePopupTitle')}}</h2>
            </v-card-text>
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
            <v-card-text>
              <div class="pt-4 caption">{{$t('step-start.arrivingDatePopupMsg')}}</div>
            </v-card-text>
          </v-card>
        </v-dialog>


      </div>


      <!-- ***************** Which Flight? Flight List ******************** -->
      <h3 id="whichFlight" class="disable-select mt-6" >
        <v-icon  
          :color="flightChosen ? 'successBright' : 'primary'">{{ flightOptionsDropMenuList ? stepIconCompleted : stepIcon }}
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
            {{$t('step-start.flightInfo')}} - 
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
                <span v-html="$t('step-start.kleinPopup.paragraphOne')" />
              </p>
              <p>
                <v-icon color="primary" class="">
                  mdi-map-marker
                </v-icon>
                <span v-html="$t('step-start.kleinPopup.paragraphTwo')" />
              </p>
              <p>
                <span v-html="$t('step-start.kleinPopup.paragraphThree')" />
              </p>
              <p>
                <v-icon color="warning" class="">
                  mdi-star
                </v-icon>
                <span v-html="$t('step-start.kleinPopup.paragraphFour')" />
              </p>
            </div>

            <div v-if="isClassic">
              <p>
                <span v-html="$t('step-start.classicPopup.paragraphOne')" />
              </p>

              <p>
                <v-icon color="primary" class="">
                  mdi-map-marker
                </v-icon>
                <span v-html="$t('step-start.classicPopup.paragraphTwo')" />
              </p>
              <p>
                <v-icon color="warning" class="">
                  mdi-star
                </v-icon>
                <span v-html="$t('step-start.classicPopup.paragraphThree')" />
              </p>
            </div>

            <div v-if="isScenic">
              <p>
                <span v-html="$t('step-start.scenicPopup.paragraphOne')" />
              </p>
              <p>
                <v-icon color="primary" class="">
                  mdi-map-marker
                </v-icon>
                <span v-html="$t('step-start.scenicPopup.paragraphTwo')" />
              </p>
              <p>
                <v-icon color="warning" class="">
                  mdi-star
                </v-icon>
                <span v-html="$t('step-start.scenicPopup.paragraphThree')" />
              </p>
              <p>
                <v-icon small color="warning" class="">
                  mdi-information-outline
                </v-icon>
                <span v-html="$t('step-start.scenicPopup.paragraphFour')" />
              </p>
              <p>
                <v-icon small color="warning" class="mr-1">
                  mdi-information-outline
                </v-icon>
                <span v-html="$t('step-start.scenicPopup.paragraphFive')" />
              </p>
            </div>

          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="fzPink" 
              class="mb-2 white--text"
              elevation="2"
              outlined
              @click="closeFlightDialog"
            >
              {{$t('nav.ok')}}
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
            {{$t('step-start.photosVideosPopup.title')}}
          </v-card-title>

          <v-card-text
            class="pt-4"
          >
            <div>

              <!-- Test Photos  -->
              <v-carousel
                :cycle="hoverPhotoVidsCarousel"
                height="240"
                hide-delimiters
                show-arrows-on-hover
                interval="4500"
              >

                <v-carousel-item
                  v-for="(slide, i) in slides"
                  :key="i"
                  @mouseover="onCarouselMouseOver"
                  @mouseout="onCarouselMouseOut"
                >
                  <v-sheet
                    height="100%"
                  >
                    <v-row
                      class="fill-height"
                      align="center"
                      justify="center"
                    >

                      <!-- Slide content goes here. show-if for each slide.  -->
                      <div 
                        class="text-h2"
                      >
                        <!-- slides/{{ slide }} -->
                        <v-img
                          height="240"
                          width="452"
                          :src="'/slides/' + slide"
                        ></v-img>
                      </div>

                      <!-- <iframe
                        v-if="i === 3"
                        style="overflow:hidden;width:100%;" 
                        src="https://player.vimeo.com/video/217390381?title=0&amp;byline=0&amp;portrait=0&amp;color=ff0179" 
                        frameborder="0" 
                        height="250"
                        webkitallowfullscreen 
                        mozallowfullscreen 
                        allowfullscreen 
                        allow="autoplay; fullscreen"
                      ></iframe> -->



                    </v-row>
                  </v-sheet>
                </v-carousel-item>

              </v-carousel>

              <p>
                {{$t('step-start.photosVideosPopup.paragraphOne', { price: photosPrice })}}
              </p>
              <v-img
                class="ml-2 mr-2 float-left"
                contain
                max-height="100"
                max-width="110"
                src="@/assets/MicroSD-and-adaptor.jpg"
              ></v-img>
              <p>
                {{$t('step-start.photosVideosPopup.paragraphTwo')}}
              </p>
              <p>
                {{$t('step-start.photosVideosPopup.paragraphThree')}}
              </p>
            </div>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="fzPink" 
              class="mb-2 white--text"
              elevation="2"
              outlined
              @click="photosVideoDialog = false"
            >
              {{$t('nav.ok')}}
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
import { enGB, de, ko } from 'date-fns/locale'

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
      hoverPhotoVidsCarousel: true,

      isPageValid: this.$store.getters.step_startValid,

      // overlay: false,
      arriveMenu: false,  
      // flightMenu: false,
      departMenu: false,

      isKlein: false,
      isClassic: false,
      isScenic: false,

      myLocal: enGB,    // default date-fns locale

      // temp slide show bits
      colors: [
          'white',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'Winter-in-flight-smiles-with-Matterhorn.jpg',
          'Funny-Take-off-picture.jpg',
          'FlyZermatt-wingover-and-Matterhorn.jpg',
          'Winter-FlyZermatt-wing-and-Matterhorn-over-Zermatt.jpg',
          'Funny-Korean-Smile-FlyZermatt-Paragliding.jpg',
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

    // This is how to add a locale to date-fns function calls.
    if (this.$i18n.locale === 'en') this.myLocal = enGB 
    if (this.$i18n.locale === 'de') this.myLocal = de 
    if (this.$i18n.locale === 'ko') this.myLocal = ko 
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

        const initFlightDate = this.$store.state.flightDate
        //console.log('initFlightDate', initFlightDate)

        const offsetDays = this.$store.state._bookDaysOffset    // currently 1 from Tommy API
        const todaysDateStr = format(new Date(), 'yyyy-MM-dd')
        const NowDate = parseISO(todaysDateStr)                           // Today

        const minValidDate = add(NowDate, {days:offsetDays})    // Today + 1
        const storedFlightDate = parseISO(localStorage.flightDate || "")

        // console.log('minValidDate', minValidDate)
        // console.log('storedFlightDate', storedFlightDate)

        if ( isBefore( storedFlightDate, minValidDate ) || initFlightDate == '' ) {
          console.log('Bad or empty date, resetting FlightDate, arriveDate and departDate to empty')
          this.$store.dispatch('setArriveDate', '')
          this.$store.dispatch('setDepartDate', '')
          this.$store.dispatch('setFlightDate', '')
          return ''
        }
        
        //console.log('Stored FlightDate is okay')

        return initFlightDate

      },
      set(dateStr) {
        // check if date has changed.
        if (dateStr === this.$store.state.flightDate) {
          // console.log('Date didnt change, not setting')
          return
        }

        // ----- This was where we were just setting the dates to the chosen
        // Flight date. Need to force users to choose an Arrive and Depart
        // date properly. ---
        // Make sure the Arrive and Depart dates get updated.
        // this.arriveDate = dateStr
        // this.departDate = dateStr
        // -----

        setTimeout(() => {
          document.querySelector('#arriveInput').click()
        })

        // This is where we need to block orders for today, if after 07:00
        // Swiss local time. Tricky!
        // UTC +2 is Swiss summer time
        // UTC +1 Swiss winter.



        // Trigger custom event that the main App can listen for,
        // that pulls down updated FlightsList from API and clears
        // the Which Flight menu if there's data that's out of sync.
        //this.$emit('flight-date-changed', dateStr)
        //console.log('Think need to load flightOptions list here. flightDate, set()')
        this.$store.dispatch('setFlightDate', dateStr)
        this.$store.dispatch('flightOptions')
        this.buildFlightList()
        this.$store.dispatch('clearSlotsPassengers')
        this.scrollToId("#headerDivider")
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
      // this block was the original 2x days offset coming from Tommy.
      const offsetDays = this.$store.state._bookDaysOffset
      return format( add(Date.now(), {days:offsetDays}), 'yyyy-MM-dd')

      // TODO: We're looking at blocking after 06:00, so not possible to book when
      // our office is open, so we don't get double bookings

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
      // , {locale: cs}
      return format(parseISO(new Date().toISOString()), 'yyyy-MM-dd')
    },
    formatArriveDate: function () {
      //console.log('this.arriveDate', this.arriveDate)
      if (isAfter(parseISO(this.arriveDate), parseISO(this.flightDate))) {
        // return 'Arrival date must be on or before your Flight Date'
        return ''
      }
      return this.arriveDate ? format(parseISO(this.arriveDate), 'EEEE, MMMM do yyyy', {locale: this.myLocal}) : ''
    },
    arriveDate: {
      get() {
        if (this.$store.state.arriveDate === '') return ''  //this.$store.state.flightDate
        return this.$store.state.arriveDate
      },
      set(dateStr) {

        setTimeout(() => {
          document.querySelector('#departInput').click()
        })

        this.$store.dispatch('setArriveDate', dateStr)
      }
    },

    formatDepartDate: function () {
      // if (isBefore(parseISO(this.departDate), parseISO(new Date().toISOString())  )) {
      if (isBefore(parseISO(this.departDate), parseISO(this.flightDate) )) {
        // return 'Arrival date must be on or after your Flight Date'
        return ''
      }
      return this.departDate ? format(parseISO(this.departDate), 'EEEE, MMMM do yyyy', {locale: this.myLocal}) : ''
    },
    departDate: {
      get() {
        if (this.$store.state.departDate === '') return ''  //this.$store.state.flightDate
        return this.$store.state.departDate
      },
      set(dateStr) {
        this.$store.dispatch('setDepartDate', dateStr)
        //this.scrollToId("#whichFlight")
      }
    },

    formatFlightDate: function () {
      return this.flightDate ? format(parseISO(this.flightDate), 'EEEE, MMMM do yyyy') : ''
    },

  },



  methods: {

    // onPlayingVideo () {
    //   console.log('Playing Video')
    // },

    onCarouselMouseOut () {
      this.hoverPhotoVidsCarousel = true
      //console.log('Run Carousel')
    },

    onCarouselMouseOver () {
      this.hoverPhotoVidsCarousel = false
      //console.log('Stop Carousel')
    },

    closeFlightDialog () {

      this.eliteDialog = false
      this.scrollToId('#arriveInput')

    },

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