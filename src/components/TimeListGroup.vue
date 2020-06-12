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

          v-for="(timeListerObj, key) in daysVisibleList"
          :key="key"


          v-touch="{
            left: () => swipe('Left'),
            right: () => swipe('Right')
          }">
          
          {{key}}
          <!-- <br>
          {{timeListerObj}} -->

          <br>

          <TimeList
            :date="convertEpocSecsToISODateStr(key)"
            :timesArray="Object.values(timeListerObj)"
            :usersDate="userSelectedDate"
          ></TimeList>

        </v-col>
      </v-row>



      <!-- {{msg}}
      <br>
      Swipe Direction: {{ swipeDirection }} -->

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

  // temp til Tommy gets this API working.
  // import timeListerDates_TEMPJSONFILE from "@/store/timeListerDatesx.json";

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


    created() {
      // Check if the list of corresponding flights has been loaded,
      // and if not, fire off the event to get them from the App.vue object.
      

    },

    mounted() {
      // Load the 3x Visible days from timeListDates array from API
      this.loadVisibleDays()

      // if (store.timeListDates === null) {

      //   console.warn('TEMP DEBUG: Loading local data into TimeListGroup.vue -> mounted()')

      //   let fetchedFlightsListObj = timeListerDates_TEMPJSONFILE
      //   console.log(fetchedFlightsListObj)
      //   mutations.setTimeListDates(fetchedFlightsListObj)

        // fetch('/timeListerDatesx.json', { "Content-Type": "application/json" })
        //   .then(async response => {
        //     const data = await response.json()
        //     // check for error response
        //     if (!response.ok) {
        //       // get error message from body or default to response statusText
        //       const error = (data && data.message) || response.statusText
        //       return Promise.reject(error)
        //     }
        //     mutations.setTimeListDates(data)
        //     this.daysVisibleList = {} // Set to empty object!!!
        //     this.loadVisibleDays()
        //   })
        //   .catch(error => {
        //     console.error("Error JSON data timeLister: ", error)
        //   })
        // return
      // } 
      
      // this.loadVisibleDays()
      
    },

    computed: {
    },

    methods: {
      loadVisibleDays: function () {
        // We need to pull out the 3x matching Dates from this preload list,
        // that are used for the actual display.
        // if (this.daysVisibleList === null) return
     
        //console.log(getUnixTime(new Date('2020-06-19')))
        let oneDaysSeconds = 86400
        let currDayKey = getUnixTime(new Date(this.userSelectedDate))
        let prevDayKey = currDayKey - oneDaysSeconds
        let nextDayKey = currDayKey + oneDaysSeconds
        console.log(currDayKey, prevDayKey, nextDayKey)
        // let currDateTimeslotsObj = timeListDates[currDayKey]
        // console.log("Curr Date Timeslots: " + currDateTimeslotsObj)

        // God, f**king js objects, how ugly!
        // Okay, found the corresponding docs in Vue. Need to use the Vue $set and $delete
        // to overcome mucking around with Observable Vue objects. (I hope!)
        this.$set( this.daysVisibleList, prevDayKey, store.timeListDates[prevDayKey] )
        this.$set( this.daysVisibleList, currDayKey, store.timeListDates[prevDayKey] )
        this.$set( this.daysVisibleList, nextDayKey, store.timeListDates[prevDayKey] )
        
        console.log("=======")

      },

      convertEpocSecsToISODateStr: function (epocSecs) {
        // As we're storing the date as a JSON key, convert
        // it before passing it into the TimeList date prop.
        //console.log(epocSecs)
        let thisDate = fromUnixTime(epocSecs)
        let ISODateStr = format(thisDate, 'Y-MM-dd')
        //console.log("ISODateStr: " + ISODateStr)
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