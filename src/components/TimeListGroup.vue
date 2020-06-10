<template>

  <!-- <TimeList
    date="2020-06-18"
    timesArray=""
  ></TimeList> -->

  <v-item-group mandatory>
    <v-container class="pa-0">
      <v-row class="myRow">
        <v-col
          class="myCol"

          v-for="n in tempDatesList"
          :key="n"

          cols="12"
          md="4"
          v-touch="{
            left: () => swipe('Left'),
            right: () => swipe('Right')
          }"
        >
        
          <TimeListX>
              {{n}}
          </TimeListX>

        </v-col>
      </v-row>

      {{ swipeDirection }}


      <v-btn
        color="primary"
        dark
        small
        absolute
        top
        left
        fab
        style="top:10px;"
        @click="onPrevDay"
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn>

      <v-btn
        color="primary"
        dark
        small
        absolute
        top
        right
        fab
        style="top:10px;"
        @click="onNextDay"
      >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    

    </v-container>

  </v-item-group>

</template>

<script>
  // import { gsap } from "gsap";
  import TimeListX from '@/components/TimeListX.vue'

  export default {
    name: "TimeListGroup",

    components: {
      TimeListX
    },
    props: {
      // currentDate: {
      //   type: String,
      //   required: true,
      // },
      // datesObject:  {
      //   type: [Object, Array],
      //   required: true,
      // },
    }, 

    data () {
      return {
        swipeDirection: 'None',

        // This correlates to the datesObject's date "id"
        tempDatesList: [1000, 1001, 1002]


        // currDate: this.currentDate,
        // datesObj: this.datesObject,
      }
    },


    methods: {
      swipe (direction) {
        this.swipeDirection = direction
        if (direction === 'Right') {
          this.onPrevDay()
        } else if (direction === 'Left') {
          this.onNextDay()
        }
      },
      onPrevDay: function () {
        //console.log("Load Previous day into TimeListGroup")
        this.fetchADay(-1)
      },
      onNextDay: function () {
        //console.log("Load Next day into TimeListGroup")
        this.fetchADay(1)
      },

      fetchADay: function (direction) {
        // Will be an API call at some point, to load another day
        // (or possibly a chunk of days to cache, so not thrashing the connection?)

        // --- At moment just return a dummy date, that increments the 'id' ---

        // grab the 'direction' date's id (one up or one down)
        let id = null
        let animSpeed = 50
        if (direction < 0) {
          // Prev
          id = this.tempDatesList[0] -1
          // Add a new one to start of array
          this.tempDatesList.unshift(id)
          // My fake animation solution. Simple, good enough!
          setTimeout( () => {
            // zap last array item...
            this.tempDatesList.pop()
            }, animSpeed
          );
        } else if (direction > 0) {
          // Next
          id = this.tempDatesList[this.tempDatesList.length-1] +1
          // Add a new one to end of array
          this.tempDatesList.push(id)
          // My fake animation solution. Simple, good enough!
          setTimeout( () => {
              // zap first array item...
              this.tempDatesList.shift()
            }, animSpeed
          );
        }
        //console.log("Date id: " + id)
        //console.log(this.tempDatesList)


      },
    },
  }

</script>

<style scoped>
 
 .myRow {
  margin: 0 auto;
  flex-wrap: nowrap;
  justify-content: center;
  overflow: hidden;
  /* outline: 1px solid black; */
 }
  .myCol {
    margin: 0 auto;
    padding: 0;
    /* outline: 1px solid blueviolet; */
  }



</style>