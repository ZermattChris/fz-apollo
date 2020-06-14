<template>
  <div class="page" id="step-start" ref="stepStart">

    <PageHeader title="1. Get Started...">
      Why we ask you for all of this information?
      To help us make sure you get the best possible experience...
      To make sure that we provide the highest levels of safety..
    </PageHeader>

    <div id="steps-controls" class="ml-n2 ml-sm-2 ml-md-8 ml-lg-12">
      


      <!-- ***************** Nr People ******************** -->
      <h3 class="disable-select">
        <v-icon :color="isValidNrPeople ? 'success' : 'primary'">{{ isValidNrPeople ? stepIconCompleted : stepIcon }}</v-icon>
        Nr of People Flying
      </h3>
      <div class="controls">
        <!-- Nr People Slider - linked via data to the below Int Input -->
        <NumberScroller
          ref="numberScroller"
          v-model="nrPeople"
          min="0"
          :max="getMaxPilots"
          min-message="Min per Booking is 1"
          :max-message="getMaxMessage"
          @at-max-value="showBigGroupWarning"
        />
      </div>



    </div>

    
  </div>
</template>

<script>
// @ is an alias to /src
// import { store, mutations } from "@/store/store.js";
// import { mapState } from 'vuex'

import { format, add, parseISO } from 'date-fns'
import { mdiArrowRightBoldCircleOutline, mdiCheckCircleOutline, mdiCameraPlusOutline, mdiCloudQuestion, mdiCloud } from '@mdi/js'

import PageHeader from '@/components/PageHeader.vue'
import NumberScroller from "@/components/NumberScroller.vue"
const VueScrollTo = require('vue-scrollto');

export default {
  name: 'Start',
  components: {
    NumberScroller,
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

      formattedFlightsList: [],
      
      flightMenu: false,
      flightModal: false,

      bigGroupDialog: false,

      isPageValid: this.areAllInputsValid
    }
  },

  // Lifecycle Hooks
  beforeMount() {
    // Need to build the Flights Menu list.
    this.formattedFlightsList = this.buildFlightList(this.flightsListModelObj)
  },
  mounted() {
    // Set focus to '+' button of NumberScroller compoennt.
    setTimeout(() => {
      //onsole.log(this.$refs.numberScroller.$el.querySelector('#increment'))
      // only set the focus if Nr People is Zero.
      if (this.nrPeople == 0) {
        this.$refs.numberScroller.$el.querySelector('#increment').focus()
      }
    })
    this.onValueChanged()
  },
  beforeUpdate() {
    this.$emit('data-changed')  // use this to save changed data to localStorage in App
  },
  updated() {
    // update the Continue btn if page is valid
    this.onValueChanged()
  },



  computed: {

    // new VueX store...

    nrPeople: {
      get() {
        return this.$store.state.nrPeople
      },
      set(nr) {
        return this.$store.dispatch('setNrPeople', nr)
      }
    },



    forWatchingBothFlightDateAndFlightType() {
      return `${this.flightDate}|${this.flightChosen}`;
    },

    


    // old store...
    getMaxPilots: function () {
      return this.$store.state._maxPilots
    },

    flightDate: function () {
      return this.$store.state.flightDate
      // move all of this into the store's setter...
      // set(dateStr) {
      //   // check if date has changed.
      //   if (dateStr === this.$store.state.flightDate) {
      //     // console.log('Date didnt change, not setting')
      //     return
      //   }
      //   // Trigger custom event that the main App can listen for,
      //   // that pulls down updated FlightsList from API and clears
      //   // the Which Flight menu if there's data that's out of sync.
      //   this.$emit('flight-date-changed', dateStr)
      //   //this.onDateChnged() // hmmm... probably need to do this after the FlightsList loads from API

      //   return this.$store.dispatch('setFlightDate', dateStr)
      // }
    },
    flightChosen: {
      get() {
        return this.$store.selectedFlight
      },
      set(flightStr) {

        // If flightStr has changed User's choice of flights,
        // then we need to go preload the TimeListerDates for 
        // the next step (2. Flight Time for:)
        // if (this.$store.selectedFlight !== flightStr) this.$emit('preload-timelister-dates')

        return this.$store.dispatch('setFlight', flightStr)
      }
    },
    switchPhotos: {
      get() {
        return this.$store.wantsPhotos
      },
      set(photosBool) {
        return this.$store.dispatch('setWantsPhotos', photosBool)
      }
    },

    // Normal computed values
    flightMinDate: function () {
      const offsetDays = this.$store.bookDaysOffset
      return format( add(Date.now(), {days:offsetDays}), 'yyyy-MM-dd')
    },
    flightMaxDate: function () {
      const offsetMonths = this.$store.bookMonthsOffset
      return format( add(Date.now(), {months:offsetMonths}), 'yyyy-MM-dd')
    },


    flightsListModelObj: function () {
      return this.$store._flightsList
    },

    getMaxMessage: function () {
      return "Max per Booking is: " + this.$store.state._maxPilots
    },

    isValidNrPeople: function () {
      if (this.nrPeople > 0 && this.nrPeople <= this.$store.state._maxPilots) {
        return true
      }
      return false
    },
    isValidFlightDate: function () {
      if (this.flightDate !== '' && this.flightDate !== null) {
        return true
      }
      return false
    },
    isValidFlightChosen: function () {
      if (this.flightDate !== '' && this.flightChosen !== null) {
        return true
      }
      return false
    },
    areAllInputsValid: function () {
      if (this.isValidNrPeople && this.isValidFlightDate && this.isValidFlightChosen) {
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
    }
  },
  methods: {
    onValueChanged: function () {
      if (this.areAllInputsValid) {
        // trigger an event that the Continue button can listen for.
        //console.log('Would activate the Contine btn here...')
        this.$emit('form-is-valid', true)
        return true
      }
      this.$emit('form-is-valid', false)
      return false
    },
    buildFlightList: function () {
      //console.log('build flight list for drop menu', obj)
      let newFlightsList = []
      // for (let [key, value] of Object.entries(obj)) {
      //   //console.log(`${key}: ${value}`);
      //   const listItem = {id:`${key}`, name:`${value}`}
      //   // item-text="name"
      //   // item-value="id"
      //   newFlightsList.push(listItem)
      // }
      return newFlightsList
    },
    // onRule_whichFlight: function () {
    //   console.log('Date has changed, run rules to check that "Which Flight?" is still valid. (if not, then set to empty)')
    // },
    showBigGroupWarning: function () {
      this.bigGroupDialog = true
    }
  },

  watch: {
    forWatchingBothFlightDateAndFlightType() {
      // const [oldPropertyA, oldProvertyB] = oldVal.split('|');
      // const [newPropertyA, newProvertyB] = newVal.split('|');
      //console.log('Both Flight Date and Type changed. PropA: ' + oldPropertyA + '!=' + newPropertyA + ' -- PropB: ' + oldProvertyB + '!=' + newProvertyB)
      
      // Only fire if the Which Flight? isn't empty.
      if (this.flightChosen === '') return
      this.$emit('preload-timelister-dates')
    },
    flightsListModelObj: function (newObj) {
      // When this computed property (source data is: this.$store.flightsList)
      // and generate a new drop menu for Which Flight?
      this.formattedFlightsList = this.buildFlightList(newObj)
    },
    flightDate: function (prev, old) {
      // Scroll page down when changed.
      if (prev != old) {
        //console.log('scroll bottom')
        //const scrollBottom = document.height() - window.height() - window.scrollTop()
        //this.$refs.stepStart.scrollBottom
        VueScrollTo.scrollTo('#photosSwitch', 800)
      }
    },
    bigGroupDialog: function (val) {
      // set focus to Close button when the dialog is displayed.
      if (val === true) {
        setTimeout(() => {
          this.$refs.closeBigGroupDialog.$el.focus()
        })
      }
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