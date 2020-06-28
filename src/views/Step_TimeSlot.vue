<template>
  <div class="timeSlot">
    
    <PageHeader :title="timeListerHeaderStr">
      [TODO:awkward] The time of day can affect how your flight is for your 
      <span class="hilite-text text-no-wrap">Group of {{usersGroupSize}}</span> 
      &mdash; there are many variables, including
      which flight, time of year, weather, confidence and your fitness level.

      <br><br>
      How to choose the right time for you: <a href="#TODO"><span class="text-no-wrap">Flight Guidelines</span></a>
            
    </PageHeader>

    <div class="steps-controls">
      <TimeListGroup/>
    </div>

    <!-- This is required as I've position:absolute'd the steps-controls container,
    otherwise the Continue button would jump up. -->
    <div class="vSpacerForAbsolute"></div>

  </div>
</template>

<script>
  // import { store } from "@/store/store.js";
  import PageHeader from '@/components/PageHeader.vue'
  import TimeListGroup from '@/components/TimeListGroup.vue'


  export default {
    name: "Step_TimeSlot",
  
    components: {
      PageHeader,
      TimeListGroup
    },

    data () {
      return {
        
      }
    },

    created() {


      
      this.$store.dispatch('flightOptions')
      this.$store.dispatch('timeListDates')
    },


    computed: {
      // dates: function () {
      //   // replace with an API call when its live...
      //   return jsonDates
      // },
      userFlightDate: function () {
        return this.$store.state.flightDate
      },
      usersGroupSize: function () {
        return this.$store.state.nrPeople
      },
      timeListerHeaderStr: function () {
        if (this.isObjEmpty(this.$store.state._flightsList)) return
        // Need to return the matching Flight Description from store.flightsList object.store.
        const userFlightKey = this.$store.state.selectedFlight
        //console.log('userFlightKey in list?: ', this.$store.state._flightsList)
        const flightDesc = this.$store.state._flightsList[userFlightKey]
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
  }

</script>

<style scoped>
.steps-controls {
  position: absolute;
  left:0; right: 0;
  text-align: center;
  margin: 0 auto;
}
  .vSpacerForAbsolute {
    width: 100%;
    height: 500px;
  }

TimeListGroup {
  background-color: pink;
}

</style>