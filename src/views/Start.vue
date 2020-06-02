<template>
  <div class="page ml-5 ml-sm-8 ml-md-10">

    <h1 class="ml-n5">1. Get Started...</h1>
    <p class="">
      Why we ask you for all of this information?
      To help us make sure you get the best possible experience...
      To make sure that we provide the highest levels of safety...
    </p>

    <v-divider></v-divider>

    <h3>
      <v-icon :color="isValidNrPeople ? 'teal' : 'primary'">{{ isValidNrPeople ? stepIconCompleted : stepIcon }}</v-icon>
      Nr of People Flying
    </h3>
    <div class="controls">
      <!-- Nr People Slider - linked via data to the below Int Input -->
      <v-slider
        v-model="sliderNrPeople"
        class="align-center"
        :max="sliderNrPeopleMax"
        min="0"
        hide-details
        thumb-label
        style="max-width:350px;"
      >
        <!-- Int Input: This needs to limit max number and give message when trying to exceed... -->
        <template v-slot:prepend>
          <span class="mr-4" style="padding:0 5px; background-color:rgb(240,240,240); border-bottom:1px gray solid">
            <v-text-field
              v-model="sliderNrPeople"
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
      <v-icon color="primary">{{ stepIcon }}</v-icon>
      Flight Date
    </h3>
    <div class="controls">
      <v-dialog
        ref="dialog"
        v-model="flightModal"
        :return-value.sync="flightDate"
        persistent
        width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="flightDate"
            prepend-inner-icon="event"
            readonly
            outlined
            v-on="on"
            style="width:250px;"
          ></v-text-field>
        </template>
        <v-date-picker v-model="flightDate" scrollable>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="flightModal = false">Cancel</v-btn>
          <v-btn text color="primary" @click="$refs.dialog.save(flightDate)">OK</v-btn>
        </v-date-picker>
      </v-dialog>
    </div>



    <h3>
      <v-icon color="primary">{{ stepIcon }}</v-icon>
      Which Flight?
    </h3>
    <div class="controls">
      <v-select
        style="max-width:550px;"
        :items="flightList"
        prepend-inner-icon="mdi-cloud-search-outline"
        solo
      ></v-select>
    </div>



    <h3>
      <v-icon color="primary">{{ stepIcon }}</v-icon>
      Photos + Videos (optional)
    </h3>
    <div class="controls">
      <!-- Photos and Videos included? -->
      <v-switch 
        v-model="switchPhotos" 
        inset 
        :label="`Filmed with GoPros on specially built sticks for some great memories!`"
      ></v-switch>
    </div>


    <div class="text-center mt-12 ml-n5 ml-sm-n8 ml-md-n10">
      <!-- Continue Btn -->
      <v-btn 
        rounded 
        color="primary" 
        elevation="4"
        disabled
      >
        Continue
        <v-icon right>mdi-arrow-right-bold-circle</v-icon>
      </v-btn>
    </div>


  </div>
</template>

<script>
// @ is an alias to /src

import { mdiArrowRightBoldCircleOutline, mdiCheckCircleOutline } from '@mdi/js'

export default {
  name: 'Start',
  components: {
      
  },
  data () {
    return {
      sliderNrPeople: 0,
      sliderNrPeopleMax: 7, // This needs to come from an initial json API call at load.
      switchPhotos: false,

      stepIcon: mdiArrowRightBoldCircleOutline,
      stepIconCompleted: mdiCheckCircleOutline,

      flightList: ['Classic High (220.- CHF)', 'Scenic (170.- CHF)', 'Elite (380.- CHF)'],

      flightDate: new Date().toISOString().substr(0, 7),
      flightMenu: false,
      flightModal: false,
    }
  },
  computed: {
    isValidNrPeople: function () {
      if (this.sliderNrPeople > 0 && this.sliderNrPeople <= this.sliderNrPeopleMax) {
        return true
      }
      return false
    }
  }
}
</script>

<style scoped>

/* .page {
  padding-left: 50px;
  padding-right: 20px;
} */

#flightDropMenu {
  max-width: 400px;
}

</style>