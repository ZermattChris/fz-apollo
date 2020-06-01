<template>
  <div class="page">

    <h1 class="">1. Get Started...</h1>
    <p class="pl-6">
      Why we ask you for all of this information?
      To help us make sure you get the best possible experience...
      To make sure that we provide the highest levels of safety...
    </p>

    <v-divider inset></v-divider>

    <p>
      <v-icon primary>{{ arrowRight }}</v-icon>
      Nr of People Flying
    </p>
    <!-- Nr People Slider - linked via data to the below Int Input -->
    <v-slider
      v-model="sliderNrPeople"
      class="align-center"
      :max="sliderNrPeopleMax"
      min="0"
      hide-details
    >
      <!-- Int Input: This needs to limit max number and give message when trying to exceed... -->
      <template v-slot:prepend>
        <v-text-field
          v-model="sliderNrPeople"
          class="mt-0 pt-0"
          hide-details
          single-line
          type="number"
          style="width: 60px"
        ></v-text-field>
      </template>
    </v-slider>

    <!-- Photos and Videos included? -->
    <v-switch v-model="switchPhotos" inset :label="`Include Photos &amp; Videos (+40.- CHF)`"></v-switch>

  </div>
</template>

<script>
// @ is an alias to /src

import { mdiArrowRightBoldCircleOutline } from '@mdi/js'

export default {
  name: 'Start',
  components: {
      
  },
  data () {
    return {
      sliderNrPeople: 0,
      sliderNrPeopleMax: 7, // This needs to come from an initial json API call at load.
      switchPhotos: false,

      arrowRight: mdiArrowRightBoldCircleOutline
    }
  }
}
</script>
