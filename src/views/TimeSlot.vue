<template>
  <div class="timeSlot">
    
    <PageHeader :title="timeListerHeaderStr">
      [TODO:awkward] The time of day can affect how your flight is for your 
      <span class="hilite-text text-no-wrap">Group of {{usersGroupSize}}</span> 
      &mdash; there are many variables, including
      which flight, time of year, weather, confidence and your fitness level.

      <br><br>
      How to choose the right time for you: <a href="#TODO"><span class="text-no-wrap">Flight Guidelines</span></a>
      
      <!-- <br><br>
      If you'd like to change your Group Size or Flight Date: 
      <strong class="hilite-link"><router-link to="/"><span class="text-no-wrap">1. Get Started</span></router-link></strong>
      (or hit the <span class="text-no-wrap">'&lt; Back'</span> button above) -->
      
    </PageHeader>

    <!-- I'm pushing all of the settings and functionality into this
    custom component 'TimeListGroup' which displays a number of 
    dynamic 'TimeLister' components. -->
    <div class="steps-controls">
      <TimeListGroup
        v-on="$listeners"
      />
    </div>

    <!-- This is required as I've position:absolute'd the steps-controls container,
    otherwise the Continue button would jump up. -->
    <div class="vSpacerForAbsolute"></div>

  </div>
</template>

<script>
  import { store } from "@/store/store.js";
  import PageHeader from '@/components/PageHeader.vue'
  import TimeListGroup from '@/components/TimeListGroup.vue'


  export default {
    name: "TimeSlot",
  
    components: {
      PageHeader,
      TimeListGroup
    },

    data () {
      return {
        // Holds the ISO date string '2020-06-18' for the chosen Date.
        // Need to update in the localStorage as well when changed.
        // Initially will be set to the date the User chose in Step 1
        //userTimeSlot: '',   
        
        //model: null,
      }
    },

    computed: {
      // dates: function () {
      //   // replace with an API call when its live...
      //   return jsonDates
      // },
      userFlightDate: function () {
        return store.flightDate
      },
      usersGroupSize: function () {
        return store.nrPeople
      },
      timeListerHeaderStr: function () {
        // console.log(this.capitaliseFirstLetter('whoop'))
        // return "2. Flight Time for: " + this.capitaliseFirstLetter(store.selectedFlight)
        // Need to return the matching Flight Description from store.flightsList object.store.
        const userFlightKey = store.selectedFlight
        const flightDesc = store.flightsList[userFlightKey]
        return "2. Flight Time for: <span class='hilite-text text-no-wrap'>" + flightDesc + "</span>"
      }
    },

    methods: {
      setUserDate: function (dateStr) {
        //console.log(dateStr)
        this.userTimeSlot = dateStr
        return dateStr
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
  margin: 0 auto;
  /* background-color: yellow; */
}
  .vSpacerForAbsolute {
    width: 100%;
    height: 590px;
  }

TimeListGroup {
  background-color: pink;
}

/* Trying to build a virtual date scroller */
/* .v-sheet {
  background-color: yellow;
}

div>>>.v-sheet {
  position: relative;
  padding: 0;
}
  div>>>.v-slide-group__next {
    position: absolute;
    right: -22px; top: 0; bottom: 0;
    width: 52px;
    min-width: 32px;
    outline: 1px maroon solid;
  } */


/* .v-sheet {
  position: absolute;
  left:0; right: 0;
  height: 560px;
  background-color: yellow;
}
  .v-slide-group {
    position: relative;
    left:0; right: 0;
    padding: 0 !important;
  } */


</style>