<template>
  <div class="timeSlot">
    
    <PageHeader :title="timeListerHeaderStr">
      [TODO:awkward] The time of day can affect how your flight is for your Group of 
      <span class="hilite-text">{{usersGroupSize}}</span> 
      &mdash; there are many variables, including
      which flight, time of year, weather, confidence and your fitness level.

      <br><br>
      How to choose the right time for you: <a href="#TODO"><span class="text-no-wrap">Flight Guidelines</span></a>
      
      <br><br>
      If you'd like to change your Group Size or Flight Date: 
      <strong class="hilite-link"><router-link to="/"><span class="text-no-wrap">1. Get Started</span></router-link></strong>
      (or hit the <span class="text-no-wrap">'&lt; Back'</span> button above)
      
    </PageHeader>


  <!-- <v-sheet
    class="mx-auto"
    elevation="0"
  >
    <v-slide-group
      v-model="model"
      class="pa-4"
      prev-icon="mdi-minus"
      next-icon="mdi-plus"
      show-arrows
      center-active
    >
      <v-slide-item
        v-for="n in 3"
        :key="n"
        v-slot:default="{ active, toggle }"
      >
        <v-card
          :color="active ? 'primary' : 'grey lighten-1'"
          class="mx-1"
          width="312"
          height="585"
          @click="toggle"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <v-scale-transition>
              <v-icon
                v-if="active"
                color="white"
                size="48"
                v-text="'mdi-close-circle-outline'"
              ></v-icon>
            </v-scale-transition>
          </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet> -->




    <!-- Fantastic how it was possible to create the visuals for multi-column
    TimeLister displaying, just with css. Kool. -->
    <div id="v-for-object" class="steps-controls">
      <div 
        class="d-inline-block"
        v-for="(val, myDate) in dates" :key="myDate">
          <!-- Check for match to selected User's date and if yes, make it the default, set CSS...  -->
          <!-- <TimeLister
            v-if="myDate.date === userFlightDate"
            selected
            date="setUserDate('2020-06-18')"
            :timesArray="val.slots"
          /> -->
          <TimeLister
            class="d-none d-md-inline-block"
            dense
            date="2020-06-19"
            :timesArray="val.slots"
          />
      </div>
    </div>



  <!-- <v-sheet
    id="v-for-object"
    class="steps-controls"
    elevation="0"
  >
    <v-slide-group
      v-model="userTimeSlot"
      class="d-inline-block"
      center-active
      show-arrows
    >
      <v-slide-item
        v-for="(val, myDate) in dates" 
        :key="myDate.id"
        v-slot:default="{ active, toggle }"
      >
        <v-card
          :color="active ? 'primary' : 'grey lighten-1'"
          height="auto"
          width="auto"
          @click="toggle"
        > -->
        <!-- <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
          <TimeLister
            v-if="myDate.date === userFlightDate"
            selected
            date="setUserDate('2020-06-18')"
            :timesArray="val.slots"
          />
          <TimeLister 
            v-else
            class="d-none d-md-inline-block"
            dense
            date="2020-06-19"
            :timesArray="val.slots"
          />
          {{myDate.date}}
          </v-row>
        </v-card> -->
<!-- 
        <v-card
          :color="active ? 'primary' : 'grey lighten-1'"
          class="ma-4"
          height="200"
          width="100"
          @click="toggle"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
              <v-icon
                v-if="active"
                color="white"
                size="48"
                v-text="'mdi-close-circle-outline'"
              ></v-icon>

          <TimeLister 
            v-else
            class="d-none d-md-inline-block"
            dense
            :date="myDate"
            :timesArray="val"
          />
          </v-row>
        </v-card>


      </v-slide-item>
    </v-slide-group> -->
  <!-- </v-sheet> -->


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
      TimeLister
    },

    data () {
      return {
        // Holds the ISO date string '2020-06-18' for the chosen Date.
        // Need to update in the localStorage as well when changed.
        // Initially will be set to the date the User chose in Step 1
        userTimeSlot: '',   
        
        model: null,
      }
    },

    computed: {
      dates: function () {
        // replace with an API call when its live.
        return jsonDates
      },
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
  background-color: yellow;
}
.vSpacerForAbsolute {
  width: 100%;
  height: 570px;
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