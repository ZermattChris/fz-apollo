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
          style="background-color:yellow; border:1px maroon solid;"

          v-for="(timeSlots, key) in daysVisibleList"
          :key="key"


          v-touch="{
            left: () => swipe('Left'),
            right: () => swipe('Right')
          }">
          
          <!-- {{key}}
          <br>
          {{timeSlots}} -->

          <br>

          <TimeList
            :date="convertEpocSecsToISODateStr(key)"
            :timesArray="timeSlots"
            :usersDate="userSelectedDate"
          ></TimeList>

        </v-col>
      </v-row>



      {{msg}}
      <br>
      Swipe Direction: {{ swipeDirection }}

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
  import TimeList from '@/components/TimeList.vue'
  import { store } from "@/store/store.js";
  import {format, fromUnixTime, getUnixTime} from 'date-fns'

  export default {
    name: "TimeListGroup",

    components: {
      TimeList
    },
    props: {
      
    }, 

    data () {
      return {
        swipeDirection: 'None',
        mobile: isMobile,
        msg: isMobile ? 'Mobile device: Hide scroll buttons, enable Swipe.' : 'Desktop: Show scroll buttons. ',

        userSelectedDate: store.flightDate,
        daysVisibleList: {}
      }
    },


    mounted() {
      // Load the 3x Visible days from timeListDates array from API
      this.loadVisibleDays()

    },

    computed: {
    },

    methods: {
      loadVisibleDays: function () {


        //console.log(store.timeListDates)
        // We need to pull out the 3x matching Dates from this preload list,
        // that are used for the actual display.
        const timeListDates = JSON.parse(JSON.stringify(store.timeListDates))   // unwrap Observer obj.
        //console.log(timeListDates)

        //console.log(getUnixTime(new Date('2020-06-19')))
        let oneDaysSeconds = 86400
        let currDayKey = getUnixTime(new Date(this.userSelectedDate))
        let prevDayKey = currDayKey - oneDaysSeconds
        let nextDayKey = currDayKey + oneDaysSeconds
        //console.log(currDateKey)
        // let currDateTimeslotsObj = timeListDates[currDayKey]
        // console.log("Curr Date Timeslots: " + currDateTimeslotsObj)

        // Make daysVisibleList of 3x dates, with User's selected date in the middle.
        this.daysVisibleList[prevDayKey] = timeListDates[prevDayKey]
        this.daysVisibleList[currDayKey] = timeListDates[currDayKey]
        this.daysVisibleList[nextDayKey] = timeListDates[nextDayKey]
        // .push( '"' + currDateKey + '":' + ' [' + currDateTimeslotsObj + ']')
        console.log(this.daysVisibleList)
      },

      convertEpocSecsToISODateStr: function (epocSecs) {
        // As we're storing the date as a JSON key, convert
        // it before passing it into the TimeList date prop.
        //console.log(epocSecs)
        let thisDate = fromUnixTime(epocSecs)
        let ISODateStr = format(thisDate, 'Y-MM-dd')
        console.log("ISODateStr: " + ISODateStr)
        return ISODateStr
      },
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
    padding: 2px;
    /* outline: 1px solid blueviolet; */
  }

.scrollIcons { 
  top: 50% !important; 
  margin-top: -30px !important;  
}
  .bumpLeftMobile {position:absolute; left:1px;}
  .bumpRightMobile {position:absolute; right:1px;}

</style>