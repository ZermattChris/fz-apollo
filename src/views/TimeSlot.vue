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
    <div id="steps-controls">
      <ul id="v-for-object"> 
        <li v-for="(val, myDate) in dates" :key="myDate">
            <TimeLister 
              class="d-none d-md-inline-block"
              dense
              :date="myDate"
            />
            <!-- Check for match to selected User's date and if yes, make it the default, set CSS...  -->
            
        </li>
      </ul>
    </div>

<!-- <TimeLister 
class="d-none d-md-inline-block"
dense
/>
<TimeLister

/>
<TimeLister
class="d-none d-md-inline-block"
dense
/> -->


    <!-- This is required as I've position:absolute'd the steps-controls container,
    otherwise the Continue button would jump up. -->
    <div class="vSpacerForAbsolute"></div>

  </div>
</template>

<script>

  import PageHeader from '@/components/PageHeader.vue'
  import TimeLister from '@/components/TimeLister.vue'

  import jsonDates from "@/store/timeListerDates.json";

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
#steps-controls {
  position: absolute;
  left:0; right: 0;
  text-align: center;
  /* background-color: rgb(194, 194, 194); */
}
.vSpacerForAbsolute {
  width: 100%;
  height: 480px;
}
</style>