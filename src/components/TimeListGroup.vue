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
          }">
        
          <TimeListX>
              {{n}}
          </TimeListX>

        </v-col>
      </v-row>

      <!-- {{msg}}
      <br>
      Swipe Direction: {{ swipeDirection }} -->


      <!-- <v-btn v-if="mobile"
        color="transparent"
        class="scrollIcons bumpLeftMobile"
        absolute
        top
        left
        fab
        elevation="0"
        @click="onPrevDay"
      >
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn> -->

      <v-icon
        v-if="mobile"
         class="scrollIcons bumpLeftMobile"
      >mdi-chevron-left</v-icon>

      <v-btn v-if="!mobile"
        color="white" 
        class="scrollIcons"
        absolute
        top
        left
        fab
        @click="onPrevDay"
      >
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>

      <v-icon
        v-if="mobile"
         class="scrollIcons bumpRightMobile"
      >mdi-chevron-right</v-icon>

      <!-- <v-btn v-if="mobile"
        color="transparent"
        class="scrollIcons bumpRightMobile"
        absolute
        top
        right
        fab
        elevation="0"
        @click="onNextDay"
      >
      <v-icon>mdi-chevron-right</v-icon>
    </v-btn> -->
    
      <v-btn v-if="!mobile"
        color="white"
        class="scrollIcons"
        absolute
        top
        right
        fab
        @click="onNextDay"
      >
      <v-icon>mdi-chevron-right</v-icon>
    </v-btn>
    

    </v-container>

  </v-item-group>

</template>

<script>
  import { isMobile } from 'mobile-device-detect'
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
        mobile: isMobile,
        msg: isMobile ? 'Mobile device: Hide scroll buttons, enable Swipe.' : 'Desktop: Show scroll buttons. ',

        // This correlates to the datesObject's date "id"
        tempDatesList: [1000, 1001, 1002]


        // currDate: this.currentDate,
        // datesObj: this.datesObject,
      }
    },


    computed: {
      // dates: function () {
      //   // replace with an API call when its live...
      //   return jsonDates
      // },
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

.scrollIcons { 
  top: 50% !important; 
  margin-top: -30px !important;  
}
  .bumpLeftMobile {position:absolute; left:1px;}
  .bumpRightMobile {position:absolute; right:1px;}

</style>