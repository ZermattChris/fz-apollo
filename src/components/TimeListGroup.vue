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
          style="background-color:yellow; border:1px maroon solid; min-height: 610px !important;"

          v-for="(timeListerObj, key) in daysVisibleList"
          :key="key"


          v-touch="{
            left: () => swipe('Left'),
            right: () => swipe('Right')
          }">
          
          {{key}}
          <br>
          {{timeListerObj}}

          <br>

          <TimeList
            :date="key"
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
    
      <v-overlay :value="isLoading" absolute />
    </v-container>



  </v-item-group>

</template>

<script>
  import { isMobile } from 'mobile-device-detect'
  import TimeList from '@/components/TimeList.vue'
  
  import {format, add } from 'date-fns'


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

        userSelectedDate: this.$store.state.flightDate,
        daysVisibleList: {}
      }
    },


    created() {

    },

    async mounted() {

      await this.$store.dispatch('timeListDates')
      console.log('after load', this.$store.state._timeListDates)
      this.loadVisibleDays()
      

      // if (this.$store.state._timeListDates === null) {
      //   console.log('TimeListDates (slots) object is not loaded in TimeListGroup.')
      //   // If there is a valid User selected nrPeople + selectedFlight, then
      //   // we can just load the missing dateslist from the API., otherwise
      //   // send back to step #1.
      //   if (this.$store.state.nrPeople == 0 || this.$store.state.selectedFlight == '') {
      //     // go back to step 1 for User Inputs.
      //     console.log('NrPeople and/or SelectedFlight are empty. Go back to Step 1')
      //     return
      //   } else {
      //     console.log('Should load the timeListDates in TimeListGroup created hook')
      //     this.$store.dispatch('timeListDates')

      //     try {
      //       await this.$store.dispatch('timeListDates')
      //     } catch (ex) {
      //       console.error('My error', ex)
      //     } finally {
      //       console.log('Awaited timeListDates load', this.$store.state._timeListDates)
      //       this.loadVisibleDays()
      //     }


      //   }
      // } else {
      //   // Need to wait for the above call to finish before loading on a null obj.
      //   // Load the 3x Visible days from timeListDates array from API
      //   console.log('timeListDates loaded already', this.$store.state._timeListDates)
      //   this.loadVisibleDays()
      // }

    },

    computed: {
      isLoading: function () {
        return this.$store.state._timeList_loading
      },
    },

    methods: {
      loadVisibleDays: function () {
console.log('loadVisibleDays()')
        if (this.$store.state._timeListDates === null) return  // wait for the API to finish loading...

        // We need to pull out the 3x matching Dates from this preload list,
        // that are used for the actual display.
        // if (this.daysVisibleList === null) return
     
        //console.log(getUnixTime(new Date('2020-06-19')))
        //let oneDaysSeconds = 86400

        // Was having an issue where my getUnixTime() was returning User's selected
        // Date correctly, but with current timestamp for hours:mins:secs, which then
        // didn't match the APIs date, which uses Midnight 00:00:00
        // const dateBits = this.userSelectedDate.split('-')
        // console.log(dateBits)
        // if (dateBits.length !== 3) console.error('User Date invalid format. TimeListGroup method -> loadVisibleDays()', this.userSelectedDate)
        // const yearBit = dateBits[0]
        // const monthBit = dateBits[1] -1
        // const dayBit = dateBits[2]

        const usersDate = new Date(this.userSelectedDate)


        const prevDayKey = format( add(usersDate, { days: -1 }), 'Y-MM-dd' )
console.log(prevDayKey)
        const currDayKey = format(usersDate, 'Y-MM-dd')
console.log(currDayKey)
        const nextDayKey = format( add(usersDate, { days: 1 }), 'Y-MM-dd' )
console.log(nextDayKey)


        // let currDayKey = getUnixTime(new Date(yearBit, monthBit, dayBit, 0, 0 ,0))
        // let prevDayKey = currDayKey - oneDaysSeconds
        // let nextDayKey = currDayKey + oneDaysSeconds
        // console.log(prevDayKey, currDayKey, nextDayKey)
        // // let currDateTimeslotsObj = timeListDates[currDayKey]
        // // console.log("Curr Date Timeslots: " + currDateTimeslotsObj)

        // Okay, found the corresponding docs in Vue. Need to use the Vue $set and $delete
        // to overcome mucking around with Observable Vue objects. (I hope!)
        this.$set( this.daysVisibleList, prevDayKey, this.$store.state._timeListDates[prevDayKey] )
        // console.log('Got first date')
        this.$set( this.daysVisibleList, currDayKey, this.$store.state._timeListDates[prevDayKey] )
        // console.log('Got 2nd date')
        this.$set( this.daysVisibleList, nextDayKey, this.$store.state._timeListDates[prevDayKey] )
        // console.log('Got 3rd date')
      },

      // convertEpocSecsToISODateStr: function (epocSecs) {
      //   // As we're storing the date as a JSON key, convert
      //   // it before passing it into the TimeList date prop.
      //   //console.log(epocSecs)
      //   let thisDate = fromUnixTime(epocSecs)
      //   let ISODateStr = format(thisDate, 'Y-MM-dd')
      //   //console.log("ISODateStr: " + ISODateStr)
      //   return ISODateStr
      // },
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

        if (this.isObjEmpty(this.daysVisibleList)) {
          console.error("Ooops! No Days loaded, can't scroll to [" + direction + "] Day.")
          return
        }

        // Will be an API call at some point, to load another day
        // (or possibly a chunk of days to cache, so not thrashing the connection?)

        // grab the 'direction' date's id (one up or one down)
        let myKey = null
        let animSpeed = 50
        let oneEpochDaySecs = 86400
        //console.log(myKey, animSpeed) // stop linter

        if (direction < 0) {
          // Prev

          // grab first visible list key (Epoch date in secs)
          myKey = Object.keys(this.daysVisibleList)[0]
          //console.log('FirstKey: ', myKey)

          let targetKey = myKey - oneEpochDaySecs
          // Let's do a check to see if this key exists before trying to add it 
          // and getting a "Cannot convert undefined or null to object"
          if (this.isObjEmpty(this.$store.state.timeListDates[targetKey])) {
            console.error("Ooops! At start of loaded days - can't continue...")
            return
          }
          this.$set( this.daysVisibleList, targetKey, this.$store.state.timeListDates[targetKey] )
          setTimeout( () => {
            // zap last array item...
            let len = Object.keys(this.daysVisibleList).length - 1
            console.log( len )
            myKey = Object.keys(this.daysVisibleList)[len]
            this.$delete(this.daysVisibleList, myKey)
            }, animSpeed
          );

        } else if (direction > 0) {
          // Next

          // grab last visible list key (Epoch date in secs)
          let len = Object.keys(this.daysVisibleList).length
          myKey = Object.keys(this.daysVisibleList)[len -1]
          //console.log('LastKey: ', myKey) 

          let targetKey = (oneEpochDaySecs*1) + (myKey*1)
          //console.log('Next DayKey: ', targetKey) 
          // Let's do a check to see if this key exists before trying to add it 
          // and getting a "Cannot convert undefined or null to object"
          if (this.isObjEmpty(this.$store.state.timeListDates[targetKey])) {
            console.error("Ooops! At end of loaded days - can't continue...")
            return
          }
          this.$set( this.daysVisibleList, targetKey, this.$store.state.timeListDates[targetKey] )

          setTimeout( () => {
            // zap first array item...
            myKey = Object.keys(this.daysVisibleList)[0]
            this.$delete(this.daysVisibleList, myKey)
            }, animSpeed
          );

        }
        //console.log("Date id: " + id)
        //console.log(this.daysVisibleList)


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
  /* this is temp -- adjust when final layout of TimeList elements is completed. */
  
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