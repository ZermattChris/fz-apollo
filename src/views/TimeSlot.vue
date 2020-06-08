<template>
  <div class="timeSlot">
    
    <PageHeader title="2. Choose a Flight Time...">
      The time of day can make a big difference to what type of 
      flight you get &mdash; there are many variables, including
      which flight, time of year, confidence and your fitness level.

      <br><br>

      Check our Guidelines for details: <a href="#TODO">Flight Guidelines</a>
    </PageHeader>

    <!-- Fantastic how it was possible to create the visuals for multi-column
    TimeLister displaying, just with css. Kool. -->
    <div id="v-for-object" class="steps-controls"> 
      <div 
        class="d-inline-block"
        v-for="(val, myDate) in dates" :key="myDate">
          <!-- Check for match to selected User's date and if yes, make it the default, set CSS...  -->
          <TimeLister 
            v-if="myDate === userFlightDate"
            :date="myDate"
            :timesArray="val"
          />
          <TimeLister 
            v-else
            class="d-none d-md-inline-block"
            dense
            :date="myDate"
            :timesArray="val"
          />
      </div>
    </div>

    <!-- This is required as I've position:absolute'd the steps-controls container,
    otherwise the Continue button would jump up. -->
    <div class="vSpacerForAbsolute"></div>

  </div>
</template>

<script>
  import { store } from "@/store/store.js";
  import jsonDates from "@/store/timeListerDates.json";
  import PageHeader from '@/components/PageHeader.vue'
  import TimeLister from '@/components/TimeLister.vue'


  export default {
    name: "TimeSlot",
  
    components: {
      PageHeader,
      TimeLister,
    },

    computed: {
      dates: function () {
        // replace with an API call when its live.
        return jsonDates
      },
      userFlightDate: function () {
        return store.flightDate
      }
    },

    methods: {
      xxxxx: function () {
        
      }
    },

    mounted() {
      //console.log(this.dates)
    },

  }

</script>

<style scoped>
.steps-controls {
  position: absolute;
  left:0; right: 0;
  text-align: center;
  /* background-color: rgb(194, 194, 194); */
}
.vSpacerForAbsolute {
  width: 100%;
  height: 530px;
}
</style>