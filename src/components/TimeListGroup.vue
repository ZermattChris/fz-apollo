<template>

  <!-- <TimeList
    date="2020-06-18"
    timesArray=""
  ></TimeList> -->

  <div class="time-container-row">
    <div
      class="myCol"
      v-for="(timeListerObj, key, index) in daysVisibleList"
      :class="{'tl-1 hidden-md-and-down': index === 0, 'tl-2 mx-md-6 mx-lg-12': index === 1, 'tl-3 hidden-sm-and-down': index === 2 }"
      :key="key"
      v-touch="{
        left: () => swipe('Left'),
        right: () => swipe('Right')
      }">
      <TimeList
        :date="key"
        :timesObj="timeListerObj"
        :usersDate="userSelectedDate"
      ></TimeList>

    </div>

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

  </div>

</template>

<script>
  import { isMobile } from 'mobile-device-detect'
  import TimeList from '@/components/TimeList.vue'
  
  import {format, add, parseISO } from 'date-fns'


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
      //console.log('after load', this.$store.state._timeListDates)
      this.loadVisibleDays()
      
    },

    computed: {
      isLoading: function () {
        return this.$store.state._timeList_loading
      },
    },

    methods: {
      loadVisibleDays: function () {

        if (this.$store.state._timeListDates === null) return  // wait for the API to finish loading...

        const usersDate = new Date(this.userSelectedDate)
        const prevDayKey = format( add(usersDate, { days: -1 }), 'Y-MM-dd' )
        const currDayKey = format(usersDate, 'Y-MM-dd')
        const nextDayKey = format( add(usersDate, { days: 1 }), 'Y-MM-dd' )

        // Okay, found the corresponding docs in Vue. Need to use the Vue $set and $delete
        // to overcome mucking around with Observable Vue objects. (I hope!)
        this.$set( this.daysVisibleList, prevDayKey, JSON.parse(JSON.stringify(this.$store.state._timeListDates[prevDayKey])))
        // console.log('Got first date')
        this.$set( this.daysVisibleList, currDayKey, JSON.parse(JSON.stringify(this.$store.state._timeListDates[prevDayKey])))
        // console.log('Got 2nd date')
        this.$set( this.daysVisibleList, nextDayKey, JSON.parse(JSON.stringify(this.$store.state._timeListDates[prevDayKey])))
        // console.log('Got 3rd date')
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

      // origDateStr: '2020-06-18'
      // offset: -1 (previous 1x day)
      getDayOffset: function (origDateStr, offset) {
        //console.log("Load Next day into TimeListGroup")
        return format(add(parseISO(origDateStr), { days: offset }), 'Y-MM-dd')
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

        if (direction < 0) {
          // Prev

          // grab first visible list key '2020-06-18'
          myKey = Object.keys(this.daysVisibleList)[0]
          console.log('FirstKey: ', myKey)

          const prevDay = this.getDayOffset(myKey, -1)
          const lastDay = this.getDayOffset(myKey, +1)
          //console.log('PrevDay to load: ', prevDay)

          // Let's do a check to see if this key exists before trying to add it 
          // and getting a "Cannot convert undefined or null to object"
          if (this.isObjEmpty(this.$store.state._timeListDates[prevDay])) {
            console.error("Ooops! At start of loaded days - can't continue...")
            return
          }

          let tmpObj = {}
          this.$set( tmpObj, prevDay, JSON.parse(JSON.stringify(this.$store.state._timeListDates[prevDay])))
          this.$set( tmpObj, myKey, JSON.parse(JSON.stringify(this.$store.state._timeListDates[myKey])))
          this.$set( tmpObj, lastDay, JSON.parse(JSON.stringify(this.$store.state._timeListDates[lastDay])))
          //console.log(tmpObj)
          this.daysVisibleList = tmpObj


        } else if (direction > 0) {
          // Next

          // grab first visible list key '2020-06-18'
          const len = Object.keys(this.daysVisibleList).length -1
          myKey = Object.keys(this.daysVisibleList)[len]
          console.log('LastKey: ', myKey)

          const nextDay = this.getDayOffset(myKey, +1)
          const firstDay = this.getDayOffset(myKey, -1)
          //console.log('nextDay to load: ', nextDay)

          // Let's do a check to see if this key exists before trying to add it 
          // and getting a "Cannot convert undefined or null to object"
          if (this.isObjEmpty(this.$store.state._timeListDates[nextDay])) {
            console.error("Ooops! At END of loaded days - can't continue...")
            return
          }

          let tmpObj = {}
          this.$set( tmpObj, firstDay, JSON.parse(JSON.stringify(this.$store.state._timeListDates[firstDay])))
          this.$set( tmpObj, myKey, JSON.parse(JSON.stringify(this.$store.state._timeListDates[myKey])))
          this.$set( tmpObj, nextDay, JSON.parse(JSON.stringify(this.$store.state._timeListDates[nextDay])))
          //console.log(tmpObj)
          this.daysVisibleList = tmpObj


        }
        
      },
    },
  }

</script>

<style scoped>
 
 .time-container-row {
    margin: 0 auto;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center !important;
    overflow: hidden;
 }
  .myCol {
    padding-top: 4px;
    padding-left: 0;
    padding-right: 0;
    width: 314px;
    /* background-color: rgb(207, 236, 233); */
  }
    /* .tl-1, .tl-3 {
      
    }
    .tl-2 {
      margin-left: 5px !important;
      margin-right: 5px !important;
    } */





.scrollIcons { 
  top: 50% !important; 
  margin-top: -30px !important;  
}
  .bumpLeftMobile {position:absolute; left:1px;}
  .bumpRightMobile {position:absolute; right:1px;}

</style>