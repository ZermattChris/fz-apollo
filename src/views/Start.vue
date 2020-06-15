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




         <!-- ***************** Flight Date ******************** -->
      <h3 class="disable-select">
        <v-icon :color="flightDate ? 'success' : 'primary'">{{ flightDate ? stepIconCompleted : stepIcon }}</v-icon>
        Flight Date
      </h3>
      <!-- DEBUG MSG TEMP -->
      <!-- <v-chip
        color="warning"
        text-color="white">
        <v-avatar left>
          <v-icon>mdi-bug</v-icon>
        </v-avatar>
        DEBUG: You need to choose <strong>June 18th, 2020</strong> to get next step to display properly
      </v-chip> -->
      
      <div class="controls">
        <v-dialog
          ref="dialog"
          v-model="flightModal"
          :return-value.sync="flightDate"

          width="290px"
          @change="onValueChanged"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              style="width:300px;"
              v-model="formatISODate"
              prepend-icon="event"
              readonly
              outlined
              v-on="on"
              :hint="isValidFlightDate ? '' : 'Click to choose your Flight Date'"
              persistent-hint
              @keydown.enter="flightModal=true"
            ></v-text-field>
          </template>
          <v-date-picker 
            v-model="flightDate" 
            scrollable
            show-current
            :min="flightMinDate"
            :max="flightMaxDate"
          >
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="flightModal = false">Cancel</v-btn>
            <v-btn text color="primary" @click="$refs.dialog.save(flightDate)">OK</v-btn>
          </v-date-picker>
        </v-dialog>
      </div>



      <!-- ***************** Which Flight? ******************** -->
      <h3 class="disable-select">
        <v-icon  
          :color="flightChosen ? 'success' : 'primary'">{{ formattedFlightsList ? stepIconCompleted : stepIcon }}
        </v-icon>
        Which Flight?
      </h3>
      <div class="controls">
        <v-select
         class="disable-select"
          style="max-width:300px;"
          v-model="flightChosen"
          :items="formattedFlightsList"
          item-text="name"
          item-value="id"
          :prepend-icon="flightChosen ? cloudIcon : cloudQuestionIcon"
          :loading="flightOptionsLoaded"
          solo
          outlined
          :disabled="!isValidFlightDate"
          :hint="isValidFlightDate ? '' : 'Please choose a Flight Date first...'"
          persistent-hint
          @change="onValueChanged"
        >
        </v-select>
      </div>



      <!-- ***************** Photos + Videos ******************** -->
      <h3>
        <v-icon :color="switchPhotos ? 'success' : 'primary'">{{ cameraIcon }}</v-icon>
        Photos + Videos (optional)
      </h3>
      <div class="controls">
        <!-- Photos and Videos included? -->
        <v-switch 
          id="photosSwitch"
          v-model="switchPhotos" 
          color="success"
          inset 
          :label="`Filmed with GoPros on specially built sticks for some great memories!`"
          @change="onValueChanged"
        ></v-switch>
      </div>




      <!-- ***************** Popup Dialog for trying to exceed max number of people ******************** -->
      <div class="text-center" id="Big-Group-Dialog">
        <v-dialog
          v-model="bigGroupDialog"
          width="400"
        >
          <v-card>
            <v-card-title
              class="primary"
              primary-title
            >
            <div class="white--text disable-select">
              Booking a Big Group
            </div>
              
            </v-card-title>

            <v-card-text class="pt-6 black--text">
              If your group contains more than {{getMaxPilots}} people...
              <br><br>
              ...you can either do 2 or more seperate Bookings here, 
              splitting your group amongst available times, or send
              us a <strong>Booking Message</strong> (later in this booking process) or
              just give us a ring at: Tel +41 79 643-6808
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                ref="closeBigGroupDialog"
                color="primary"
                text
                @click="bigGroupDialog = false"
              >
                Close
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>

    </div>

    
  </div>
</template>

<script>
// @ is an alias to /src

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
    this.formattedFlightsList = this.buildFlightList(this.flightsWatch)
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

    flightOptionsLoaded: function () {
      return this.$store.state._flightsList_loading
    },

    forWatchingBothFlightDateAndFlightType() {
      return `${this.flightDate}|${this.flightChosen}`;
    },

    // new VueX store...
    nrPeople: {
      get() {
        return this.$store.state.nrPeople
      },
      set(nr) {
        return this.$store.dispatch('setNrPeople', nr)
      }
    },
    getMaxPilots: function () {
      return this.$store.state._maxPilots
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
        this.$emit('flight-date-changed', dateStr)
        return this.$store.dispatch('setFlightDate', dateStr)
      }
    },
    flightChosen: {
      get() {
        return this.$store.state.selectedFlight
      },
      set(flightStr) {
        console.log('Set chosen flight', flightStr)
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
      return this.$store.state._flightsList
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
      if (this.flightDate !== '' && this.flightChosen !== '') {
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
    buildFlightList: function (obj) {
      if (this.isObjEmpty(obj)) return
      //console.log('build flight list for drop menu', obj)
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
    flightsWatch: function (newObj) {
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