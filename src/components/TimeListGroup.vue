<template>

  <!-- <TimeList
    date="2020-06-18"
    timesArray=""
  ></TimeList> -->

  <!-- :class="{'tl-1 hidden-md-and-down': index === 0, 'tl-2 mx-md-6 mx-lg-12': index === 1, 'tl-3 hidden-sm-and-down': index === 2, 'tl-4 hidden-sm-and-down': index === 3 }" -->

<div class="time-container-row" style="outline:1px solid maroon;">

  <div id="animateBox">

    <div
      class="myCol"
      v-for="(timeListerObj, key) in daysVisibleList"
      
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
  </div>


  <v-btn
    color="white" 
    class="scrollIcons"
    absolute
    top
    left
    :x-small="mobile"
    fab
    @click="onPrevDay"
  >
    <v-icon>mdi-chevron-left</v-icon>
  </v-btn>

  <v-btn
    color="white"
    class="scrollIcons"
    absolute
    top
    right
    :x-small="mobile"
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
  import anime from "animejs";
  
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
        daysVisibleList: {},

        model: null,

        nrDatesLoaded: 3
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
        const dateOffset = Math.floor(this.nrDatesLoaded / 2)
        //console.log('dateOffset', dateOffset)
        let loopDate = format( add(usersDate, { days: -dateOffset }), 'Y-MM-dd' )

        for (let x = 0; x < this.nrDatesLoaded; x++) { 
          this.$set( this.daysVisibleList, loopDate, this.$store.state._timeListDates[loopDate] )
          loopDate = format( add(parseISO(loopDate), { days: 1 }), 'Y-MM-dd' )
        }


        // const currDayKey = format(usersDate, 'Y-MM-dd')
        // const nextDayKey = format( add(usersDate, { days: 1 }), 'Y-MM-dd' )

        // Okay, found the corresponding docs in Vue. Need to use the Vue $set and $delete
        // to overcome mucking around with Observable Vue objects. (I hope!)
        // this.$set( this.daysVisibleList, prevDayKey, JSON.parse(JSON.stringify(this.$store.state._timeListDates[prevDayKey])))
        // console.log('Got first date')
        // this.$set( this.daysVisibleList, currDayKey, JSON.parse(JSON.stringify(this.$store.state._timeListDates[prevDayKey])))
        // console.log('Got 2nd date')
        // this.$set( this.daysVisibleList, nextDayKey, JSON.parse(JSON.stringify(this.$store.state._timeListDates[prevDayKey])))
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
          //console.log('FirstKey: ', myKey)

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
          //console.log('LastKey: ', myKey)

          const nextDay = this.getDayOffset(myKey, +1)
          //const firstDay = this.getDayOffset(myKey, -1)
          //console.log('nextDay to load: ', nextDay)

          // Let's do a check to see if this key exists before trying to add it 
          // and getting a "Cannot convert undefined or null to object"
          if (this.isObjEmpty(this.$store.state._timeListDates[nextDay])) {
            console.error("Ooops! At END of loaded days - can't continue...")
            return
          }

          // let tmpObj = {}
          // this.$set( tmpObj, firstDay, JSON.parse(JSON.stringify(this.$store.state._timeListDates[firstDay])))
          // this.$set( tmpObj, myKey, JSON.parse(JSON.stringify(this.$store.state._timeListDates[myKey])))
          // this.$set( this.daysVisibleList, nextDay, JSON.parse(JSON.stringify(this.$store.state._timeListDates[nextDay])))
          //console.log(tmpObj)
          // this.daysVisibleList = tmpObj

          let myThis = this
          const firstIndex = Object.keys(myThis.daysVisibleList)[0]
          console.log('firstIndex', firstIndex)
          let targetDate = add( parseISO(firstIndex), { days: myThis.nrDatesLoaded } )
          let newDateIndex = format( targetDate, 'Y-MM-dd' )
          myThis.$set( myThis.daysVisibleList, newDateIndex, myThis.$store.state._timeListDates[newDateIndex] )
          
          this.$nextTick(function () {
            anime({
              targets: '.myCol',
              duration: 1200,
              translateX: -292,
              complete: function() {
                // const len = Object.keys(myThis.daysVisibleList).length -1
                // const lastIndex = Object.keys(myThis.daysVisibleList)[len]
                myThis.$delete( myThis.daysVisibleList, firstIndex )
                anime({
                  targets: '.myCol',
                  duration: 0,
                  translateX: 0,
                })
              }
            })
          })

       

          // anime({
          //   targets: '.myCol',
          //   duration: 1200,
          //   translateX: -282,
          //   complete: function() {
          //     const firstIndex = Object.keys(myThis.daysVisibleList)[0]
          //     console.log('firstIndex', firstIndex)
          //     myThis.$delete( myThis.daysVisibleList, firstIndex )

          //     let targetDate = add( parseISO(firstIndex), { days: myThis.nrDatesLoaded } )
          //     console.log('targetDate', targetDate)
          //     let newDateIndex = format( targetDate, 'Y-MM-dd' )
          //     console.log('newDateIndex', newDateIndex)
          //     myThis.$set( myThis.daysVisibleList, newDateIndex, myThis.$store.state._timeListDates[newDateIndex] )
          //   }
          // })
          

            // begin: function() {
            //   // console.log('myThis', myThis)
            //   // console.log(anim)
            // },
            // complete: function() {
            //   // console.log(anim)
            // }


              // myThis.$set( myThis.daysVisibleList, nextDay, JSON.parse(JSON.stringify(myThis.$store.state._timeListDates[nextDay])))
              //myThis.$delete( myThis.daysVisibleList, firstDay )

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
 }

  #animateBox {
    position: relative;
    width: 875px;
    margin: 0 auto;
    display: flex;
    flex-wrap: nowrap;
    outline: 4px lime solid;
    /* justify-content: center !important; */
    /* overflow: hidden; */
  }
  
    .myCol {
      position: relative;
      padding: 0 4px;
      /* width: 314px; */
      /* background-color: rgb(207, 236, 233); */
    }

    

/* .slide-list-move {
  transition: transform 0.3s;
} */

.scrollIcons { 
  top: 50% !important; 
  margin-top: -30px !important;
  z-index: 2;
}
  .bumpLeftMobile {position:absolute; left:1px;}
  .bumpRightMobile {position:absolute; right:1px;}

</style>