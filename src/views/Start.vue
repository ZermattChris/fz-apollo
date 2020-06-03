<template>
  <div class="page ml-5 ml-sm-8 ml-md-10">

    <h1 class="ml-n5">1. Get Started...</h1>
    <p class="">
      Why we ask you for all of this information?
      To help us make sure you get the best possible experience...
      To make sure that we provide the highest levels of safety...
    </p>

    <v-divider></v-divider>

    <h3 >
      <v-icon :color="isValidNrPeople ? 'success' : 'primary'">{{ isValidNrPeople ? stepIconCompleted : stepIcon }}</v-icon>
      Nr of People Flying
    </h3>
    <div class="controls">
      <!-- Nr People Slider - linked via data to the below Int Input -->
      <v-slider
        v-model="nrPeople"
        class="align-center"
        :max="sliderNrPeopleMax"
        min="0"
        hide-details
        thumb-label
        style="max-width:350px;"
        @change="onValueChanged"
      >
        <!-- Int Input: This needs to limit max number and give message when trying to exceed... -->
        <template v-slot:prepend>
          <span class="mr-4" style="padding:0 5px; background-color:rgb(240,240,240); border-bottom:1px gray solid">
            <v-text-field
              v-model="nrPeople"
              class="mt-0 pt-0"
              hide-details
              single-line
              type="number"
              style="width:50px;"
            ></v-text-field>
          </span>
        </template>
      </v-slider>
    </div>



    <h3>
      <v-icon :color="flightDate ? 'success' : 'primary'">{{ flightDate ? stepIconCompleted : stepIcon }}</v-icon>
      Flight Date
    </h3>
    <div class="controls">
      <v-dialog
        ref="dialog"
        v-model="flightModal"
        :return-value.sync="flightDate"
        persistent
        width="290px"
        @change="onValueChanged"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="formatISODate"
            prepend-inner-icon="event"
            readonly
            outlined
            v-on="on"
            style="width:300px;"
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



    <h3>
      <v-icon :color="flightChosen ? 'success' : 'primary'">{{ flightList ? stepIconCompleted : stepIcon }}</v-icon>
      Which Flight?
    </h3>
    <div class="controls">
      <v-select
        style="max-width:300px;"
        v-model="flightChosen"
        :items="flightList"
        :prepend-inner-icon="flightChosen ? cloudIcon : cloudQuestionIcon"
        solo
        outlined
        :disabled="!isValidFlightDate"
        :hint="isValidFlightDate ? '' : 'Please choose a Flight Date first...'"
        persistent-hint
        @change="onValueChanged"
      >
      </v-select>
    </div>



    <h3>
      <v-icon :color="switchPhotos ? 'success' : 'primary'">{{ cameraIcon }}</v-icon>
      Photos + Videos (optional)
    </h3>
    <div class="controls">
      <!-- Photos and Videos included? -->
      <v-switch 
        v-model="switchPhotos" 
        color="success"
        inset 
        :label="`Filmed with GoPros on specially built sticks for some great memories!`"
        @change="onValueChanged"
      ></v-switch>
    </div>


  </div>
</template>

<script>
// @ is an alias to /src
import { store, mutations } from "@/store/store.js";
import { format, add, parseISO } from 'date-fns'
import { mdiArrowRightBoldCircleOutline, mdiCheckCircleOutline, mdiCameraPlusOutline, mdiCloudQuestion, mdiCloud } from '@mdi/js'

export default {
  name: 'Start',
  components: {
      
  },
  data () {
    return {
      //sliderNrPeople: 0,
      sliderNrPeopleMax: 7, // This needs to come from an initial json API call at load.
      //switchPhotos: false,

      stepIcon:           mdiArrowRightBoldCircleOutline,
      stepIconCompleted:  mdiCheckCircleOutline,
      cameraIcon:         mdiCameraPlusOutline,
      cloudQuestionIcon:  mdiCloudQuestion,
      cloudIcon:          mdiCloud,

      flightList: ['Classic High', 'Scenic', 'Elite'],
      //flightChosen: '',

      //flightDate: '',
      flightMinDate: format( add(Date.now(), {days:2}), 'yyyy-MM-dd'),    // "2021-03-20"    
      flightMaxDate: format( add(Date.now(), {years:1}), 'yyyy-MM-dd'),
      flightMenu: false,
      flightModal: false,

      isPageValid: this.areAllInputsValid
    }
  },

  // Lifecycle Hooks
  created() {
  },
  updated() {
    // update the Continue btn if page is valid
    this.onValueChanged()
  },
  beforeUpdate() {
    this.$emit('data-changed')  // use this to save changed data to localStorage in App
  },


  computed: {
    // Store Data
    nrPeople: {
      get() {
        return store.nrPeople
      },
      set(nr) {
        return mutations.setNrPeople(nr)
      }
    },
    flightDate: {
      get() {
        return store.flightDate
      },
      set(dateStr) {
        return mutations.setFlightDate(dateStr)
      }
    },
    flightChosen: {
      get() {
        return store.selectedFlight
      },
      set(flightStr) {
        return mutations.setFlight(flightStr)
      }
    },
    switchPhotos: {
      get() {
        return store.wantsPhotos
      },
      set(photosBool) {
        return mutations.setWantsPhotos(photosBool)
      }
    },

    // Normal computed values
    isValidNrPeople: function () {
      if (this.nrPeople > 0 && this.nrPeople <= this.sliderNrPeopleMax) {
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
    }
  }
}
</script>

<style scoped>

#flightDropMenu {
  max-width: 400px;
}


</style>