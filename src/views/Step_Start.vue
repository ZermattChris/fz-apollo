<template>
  <div class="page" id="step-start" ref="stepStart">

    <PageHeader title="1. Get Started...">
      Why we ask you for all of this information?
      To help us make sure you get the best possible experience...
      To make sure that we provide the highest levels of safety..
    </PageHeader>

    <div id="steps-controls" class="ml-n2 ml-sm-2 ml-md-8 ml-lg-12   pt-sm-2">
      



         <!-- ***************** Flight Date ******************** -->
      <h3 id="chooseFlightDate" class="disable-select">
        <v-icon :color="flightDate ? 'success' : 'primary'">{{ flightDate ? stepIconCompleted : stepIcon }}</v-icon>
        Flight Date
      </h3>
      
      <div class="controls mb-0 mb-sm-6 mb-md-10">
        <v-dialog
          ref="dialog"
          v-model="flightModal"
          :return-value.sync="flightDate"
          @input="scrollToFormTop"
          width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              style="width:300px;"
              v-model="formatISODate"
              :prepend-icon="calendarIcon"
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


      <!-- ***************** Nr People ******************** -->
      <h3 id="nrPeopleFlying" class="disable-select">
        <v-icon :color="isValidNrPeople ? 'success' : 'primary'">{{ isValidNrPeople ? stepIconCompleted : stepIcon }}</v-icon>
        Nr of People Flying
      </h3>
      <div class="controls mb-0 mb-sm-6 mb-md-10">
        <!-- Nr People Slider - linked via data to the below Int Input -->
        <NumberScroller
          ref="numberScroller"
          class="ml-10"
          v-model="nrPeople"
          min="0"
          :max="getMaxPilots"
          min-message="Min per Booking is 1"
          :max-message="getMaxMessage"
          @at-max-value="showBigGroupWarning"
        />
      </div>




      <!-- ***************** Which Flight? ******************** -->
      <h3 class="disable-select">
        <v-icon  
          :color="flightChosen ? 'success' : 'primary'">{{ flightOptionsDropMenuList ? stepIconCompleted : stepIcon }}
        </v-icon>
        Which Flight?
      </h3>
      <div class="controls mb-0 mb-sm-6 mb-md-10">
        <v-select
         class="disable-select"
          style="max-width:300px;"
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




      <!-- ***************** Popup Dialog for trying to exceed max number of people ******************** -->
      <div class="text-center ma-0" id="Big-Group-Dialog">
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
import { mdiArrowRightBoldCircleOutline, mdiCheckCircleOutline, mdiCameraPlusOutline, mdiCloudQuestion, mdiCloud, mdiCalendarMonth } from '@mdi/js'

import PageHeader from '@/components/PageHeader.vue'
import NumberScroller from "@/components/NumberScroller.vue"
//const VueScrollTo = require('vue-scrollto');

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
      calendarIcon:       mdiCalendarMonth,

      flightOptionsDropMenuList: this.buildFlightList(),
      
      flightMenu: false,
      flightModal: false,

      bigGroupDialog: false,

      isPageValid: this.$store.getters.step_startValid
    }
  },

  // Lifecycle Hooks
  beforeMount() {
    // Need to build the Flights Menu list.
    // move this to mounted?
    //this.flightOptionsDropMenuList = this.buildFlightList(this.flightsWatch)
    this.$store.dispatch('flightOptions')
  },
  mounted() {
    // Set focus to '+' button of NumberScroller compoennt.
    // setTimeout(() => {
    //   //console.log(this.$refs.numberScroller.$el.querySelector('#increment'))
    //   // only set the focus if Nr People is Zero.
    //   if (this.nrPeople == 0) {
    //     this.$refs.numberScroller.$el.querySelector('#increment').focus()
    //   }
    // })
    //this.onValueChanged()
  },
  beforeUpdate() {
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
        //this.$emit('flight-date-changed', dateStr)
        //console.log('Think need to load flightOptions list here. flightDate, set()')
        this.$store.dispatch('setFlightDate', dateStr)
        this.$store.dispatch('flightOptions')
        this.buildFlightList()
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
    showBigGroupWarning: function () {
      this.bigGroupDialog = true
    }
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
    flightDate: function (prev, old) {
      // Scroll page down when changed.
      if (prev != old) {
        //console.log('scroll bottom')
        //const scrollBottom = document.height() - window.height() - window.scrollTop()
        //this.$refs.stepStart.scrollBottom
        //VueScrollTo.scrollTo('#photosSwitch', 800)
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