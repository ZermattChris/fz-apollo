<template>
  <div class="page" id="step-start" ref="stepStart">

    <PageHeader title="1. Get Started...">
      Why we ask you for all of this information?
      To help us make sure you get the best possible experience...
      To make sure that we provide the highest levels of safety..
    </PageHeader>

    <div id="steps-controls" class="ml-n2 ml-sm-2 ml-md-8 ml-lg-12 pt-sm-2" style="max-width:600px;">
      

         <!-- ***************** Flight Date ******************** -->
      <h3 id="chooseFlightDate" class="disable-select">
        <v-icon :color="flightDate ? 'success' : 'primary'">{{ flightDate ? stepIconCompleted : stepIcon }}</v-icon>
        Flight Date
      </h3>
      
      <div class="controls mb-0 mb-sm-2 mb-md-4">

        <v-date-picker 
          v-model="flightDate" 
          scrollable
          show-current
          elevation="4"
          :min="flightMinDate"
          :max="flightMaxDate"
          class="ml-10 mb-6 mb-sm-8 mb-md-10"
          width=""
          style="min-width:240px;"
        >
        </v-date-picker>

      </div>


      <!-- ***************** Which Flight? ******************** -->
      <h3 class="disable-select" >
        <v-icon  
          :color="flightChosen ? 'success' : 'primary'">{{ flightOptionsDropMenuList ? stepIconCompleted : stepIcon }}
        </v-icon>
        Which Flight?
      </h3>
      <div class="controls mb-0 mb-sm-6 mb-md-10">
        <v-select
         class="disable-select"
          style="max-width:330px;"
          v-model="flightChosen"
          :items="flightOptionsDropMenuList"
          item-text="name"
          item-value="id"
          :prepend-icon="flightChosen ? cloudIcon : cloudQuestionIcon"
          :loading="flightOptionsLoaded"
          solo
          outlined
          :disabled="!isValidFlightDate"
          :hint="isValidFlightDate ? '' : 'Please choose a Flight Date first...'"
          persistent-hint
        >
        </v-select>
      </div>


      <!-- ***************** Photos + Videos ******************** -->
      <h3>
        <v-icon :color="switchPhotos ? 'success' : 'primary'">{{ cameraIcon }}</v-icon>
        Photos + Videos (optional)
      </h3>
      <div class="controls mb-0 mb-sm-6">
        <!-- Photos and Videos included? -->
        <v-switch 
          id="photosSwitch"
          v-model="switchPhotos" 
          class="ml-10"
          color="success"
          inset 
          :label="`Filmed with GoPros on specially built sticks for some great memories!`"
        ></v-switch>
      </div>


    </div>

    
  </div>
</template>

<script>
// @ is an alias to /src

import { format, add, parseISO } from 'date-fns'
import { mdiInformation, mdiArrowRightBoldCircleOutline, mdiCheckCircleOutline, mdiCameraPlusOutline, mdiCloudQuestion, mdiCloud, mdiCalendarMonth } from '@mdi/js'

import PageHeader from '@/components/PageHeader.vue'
// import NumberScroller from "@/components/NumberScroller.vue"
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
      
      flightMenu: false,
      flightModal: false,

      nrPeopleExceedsMaxPilots: false,    // when true, shows "Booking Info:" message under Nr of People Flying input.
      maxGroupSize: 15,                   // Just some sort of limit -- call us if bigger group (sucks inputting that many people's names...)


      nrPeopleEnabled: false,

      bigGroupDialog: false,

      isPageValid: this.$store.getters.step_startValid
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

  async mounted() {

    // setTimeout(() => {
    //   this.$refs.flightDateInput.focus()
    // }, 500)


    // //await this.$store.dispatch('timeListDates').catch((err) => { console.error(err) })
    // // Run code to see what the max nr of pilots available in a time slot for this day are.
    // const maxAvailPilotsOnDay = this.getMaxPilotsForDay()
    // // if Nr People chosen is over the above value, then display the too many pilots
    // // message below the Nr People input.
    // // If no Max nr of pilots yet available (User hasn't selected a date yet),
    // // then this.getMaxPilotsForDay() returns 0, so treat that as valid.

    // // If no User Date has been selected yet, then we can't know how many Max Pilots
    // // are available for a given date. Just set the Info message to hidden and return.
    // if ( this.$store.state.flightDate !== '' ) {
    //   this.nrPeopleExceedsMaxPilots = false
    //   return
    // }


    // if (maxAvailPilotsOnDay === 0 ) {
    //   this.nrPeopleExceedsMaxPilots = false
    // } else if  (maxAvailPilotsOnDay < this.nrPeople ) {
    //   this.nrPeopleExceedsMaxPilots = true
    // } else {
    //   this.nrPeopleExceedsMaxPilots = false
    // }
  },



  computed: {

    flightOptionsLoaded: function () {
      return this.$store.state._flightsList_loading
    },

    forWatchingBothFlightDateAndFlightType() {
      return `${this.flightDate}|${this.flightChosen}`;
    },

    // new VueX store...
    // Not used here anymore. Deprecated.
    // nrPeople: {
    //   get() {
    //     return this.$store.getters.getTotalPassengers
    //   },
    //   set(nr) {

    //     // If no User Date has been selected yet, then we can't know how many Max Pilots
    //     // are available for a given date. Just set the Info message to hidden and return.
    //     if ( this.$store.state.flightDate !== '' ) {
          
    //       // Run code to see what the max nr of pilots available in a time slot for this day are.
    //       const maxAvailPilotsOnDay = this.getMaxPilotsForDay()
    //       // if Nr People chosen is over the above value, then display the too many pilots
    //       // message below the Nr People input.
    //       if (maxAvailPilotsOnDay < nr) {
    //         this.nrPeopleExceedsMaxPilots = true
    //       } else {
    //         this.nrPeopleExceedsMaxPilots = false
    //       }

    //     } else {
    //         this.nrPeopleExceedsMaxPilots = false
    //     }

    //     return this.$store.dispatch('setNrPeople', nr)
    //   }
    // },
    // getMaxPilots: function () {
    //   return this.maxGroupSize
    // },

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
      }
    },
    flightChosen: {
      get() {
        return this.$store.state.selectedFlight
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

    // getMaxMessage: function () {
    //   return "Maximum per Booking is: " + this.maxGroupSize
    // },

    // isValidNrPeople: function () {
    //   // this needs to come out for new logic...
    //   if (this.nrPeople > 0 && this.nrPeople <= this.maxGroupSize) {
    //     return true
    //   }
    //   return false
    // },
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
    // areAllInputsValid: function () {
    //   if (this.isValidNrPeople && this.isValidFlightDate && this.isValidFlightChosen) {
    //     return true
    //   }
    //   return false
    // },
    formatISODate: function () {
      if (this.flightDate === '') return '' // Guard against trying to parse an empty string as a Date.
      const myDate = parseISO(this.flightDate)
      //console.log(myDate)
      const myFormat = format(myDate, 'PPPP') // had some weird format issues here, this works.
      //console.log(myFormat)
      return myFormat
    }
  },
  methods: {

    // async onFlightDateDialogClose() {

    //   // Save the User's date value.
    //   this.$refs.dialog.save(this.flightDate)

    //   await this.$store.dispatch('timeListDates').catch((err) => { console.error(err); })
    //   //console.log("Loaded Dates and Times for: " + this.flightDate)


    //   // Run code to see what the max nr of pilots available in a time slot for this day are.
    //   const maxAvailPilotsOnDay = this.getMaxPilotsForDay()
    //   // if Nr People chosen is over the above value, then display the too many pilots
    //   // message below the Nr People input.
    //   if (maxAvailPilotsOnDay < this.nrPeople) {
    //     this.nrPeopleExceedsMaxPilots = true
    //   } else {
    //     this.nrPeopleExceedsMaxPilots = false
    //   }

    // },

    // // Look up the max number of avail pilots for the User's selected date.
    // getMaxPilotsForDay: function () {
      
    //   if (this.$store.state._timeListDates === null) return 0

    //   for (const [key, value] of Object.entries(this.$store.state._timeListDates)) {
    //     //console.log(`${key}: ${value}`);
    //     if (key === this.flightDate) {
    //       // found it!
    //       let maxNrPilotsFound = 0
    //       // eslint-disable-next-line
    //       for (const [key2, value2] of Object.entries(value)) {
    //         if (value2 > maxNrPilotsFound) maxNrPilotsFound = value2
    //       }
    //       return maxNrPilotsFound
    //     }
    //   }

    // },


    scrollToFormTop: function () {
      setTimeout(() => { this.$scrollTo('#chooseFlightDate', 500) }, 100)
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

    buildFlightList: function () {
      const obj = this.$store.state._flightsList
      //console.log('build flight list for drop menu', obj)
      if (this.isObjEmpty(obj)) return
      let newFlightsList = []
      for (let [key, value] of Object.entries(obj)) {
        //console.log(`${key}: ${value}`);
        const listItem = {id:`${key}`, name:`${value}`}
        // item-text="name"
        // item-value="id"
        newFlightsList.push(listItem)
      }
      return newFlightsList
    },
    // onRule_whichFlight: function () {
    //   console.log('Date has changed, run rules to check that "Which Flight?" is still valid. (if not, then set to empty)')
    // },
    // showBigGroupWarning: function () {
    //   this.bigGroupDialog = true
    // }
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
    // bigGroupDialog: function (val) {
    //   // set focus to Close button when the dialog is displayed.
    //   if (val === true) {
    //     setTimeout(() => {
    //       this.$refs.closeBigGroupDialog.$el.focus()
    //     })
    //   }
    // },
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