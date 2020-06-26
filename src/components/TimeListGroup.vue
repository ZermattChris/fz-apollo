<template>

<div class="time-container-row">

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
        :selected="userSelectedSlot"
        @row-selected="onUpdated"
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

        //userSelectedDate: this.$store.state.flightDate,
        // userSelectedSlot: this.$store.state.timeSlot,
        slotLabel: '',

        daysVisibleList: {},

        // model: null,

        nrDatesLoaded: 3,
        isAnimating: false,
        animateMillisecs: 100
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
      userSelectedSlot: {
        get() {
          return this.$store.state.timeSlot
        },
        set(int) {
          // Pass along the slot's label as a sanity check for booking time.
          //console.log('slotLabel', this.slotLabel)
          const payload = {'slot':int, 'label':this.slotLabel}
          return this.$store.dispatch('setTimeSlot', payload)
        }
      },

      userSelectedDate: {
        get() {
          return this.$store.state.flightDate
        },
        set(dateStr) {
          return this.$store.dispatch('setFlightDate', dateStr)
        }
      },
      
      isLoading: function () {
        return this.$store.state._timeList_loading
      },
    },

    methods: {
      onUpdated: function (chosenDate, chosenSlot, chosenSlotLabel) {
        // chosenSlot is zero based.
        //console.log('chosenDate', chosenDate, 'chosenSlot', chosenSlot, 'timeLabel', timeLabel)
        this.slotLabel = chosenSlotLabel
        this.$store.state.timeSlot = chosenSlot
        this.userSelectedSlot = chosenSlot
        this.$store.state.flightDate = chosenDate
        this.userSelectedDate = chosenDate
      },

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

        if (this.isAnimating === true) return

        if (this.isObjEmpty(this.daysVisibleList)) {
          console.error("Ooops! No Days loaded, can't scroll to [" + direction + "] Day.")
          return
        }

        this.isAnimating = true

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
          //console.log('PrevDay', prevDay, 'firstVisDay', myKey, 'lastDay', lastDay)


          const len = Object.keys(this.daysVisibleList).length -1
          const dayToDelete = Object.keys(this.daysVisibleList)[len]

          // Let's do a check to see if this key exists before trying to add it 
          // and getting a "Cannot convert undefined or null to object"
          if (this.isObjEmpty(this.$store.state._timeListDates[prevDay])) {
            console.log("Ooops! At start of loaded days - can't continue...")
            this.isAnimating = false
            return
          }


          // ---------------- ANIMATION PREV DAY --------------------
          let myThis = this
          this.daysVisibleList = {}   // clear list, as we need to add in specific order.
          // Add the day that will scroll into visibility, but translateX -292 before 
          // staring animation, so it scrolls smoothly into place.
          this.$set( this.daysVisibleList, prevDay, this.$store.state._timeListDates[prevDay] )
          this.$set( this.daysVisibleList, myKey, this.$store.state._timeListDates[myKey] )
          this.$set( this.daysVisibleList, lastDay, this.$store.state._timeListDates[lastDay] )
          this.$set( this.daysVisibleList, dayToDelete, this.$store.state._timeListDates[dayToDelete] )
          
          // Took a combo of $nextTick() and setTimeout() to get all to sync properly!. Works!!!

          this.$nextTick(() => {
            const moveTheseElsLeft = document.getElementsByClassName('myCol')
            for (var i=0, myLen=moveTheseElsLeft.length|0; i<myLen; i=i+1|0) {
              //moveTheseElsLeft[i].classList.add('shiftLeftForAnim')
              moveTheseElsLeft[i].style.transform = 'translateX(-292px)'
              //console.log(moveTheseElsLeft[i])
            }

            setTimeout(() => { 
              anime({
                targets: '.myCol',
                duration: myThis.animateMillisecs,
                translateX: 0,
                easing: 'linear',
                complete: function() {
                  myThis.$delete( myThis.daysVisibleList, dayToDelete )
                  myThis.isAnimating = false
                }
              })
            }, 1)
            
          })
          // ---------------- ANIMATION PREV DAY --------------------
          
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
            console.log("Ooops! At END of loaded days - can't continue...")
            this.isAnimating = false
            return
          }

          // ---------------- ANIMATION NEXT DAY --------------------
          let myThis = this
          const firstIndex = Object.keys(myThis.daysVisibleList)[0]
          //console.log('firstIndex', firstIndex)
          let targetDate = add( parseISO(firstIndex), { days: myThis.nrDatesLoaded } )
          let newDateIndex = format( targetDate, 'Y-MM-dd' )
          myThis.$set( myThis.daysVisibleList, newDateIndex, myThis.$store.state._timeListDates[newDateIndex] )
          
          this.$nextTick(function () {
            anime({
              targets: '.myCol',
              duration: myThis.animateMillisecs,
              translateX: -292,
              easing: 'linear',
              complete: function() {
                // const len = Object.keys(myThis.daysVisibleList).length -1
                // const lastIndex = Object.keys(myThis.daysVisibleList)[len]
                myThis.$delete( myThis.daysVisibleList, firstIndex )
                anime({
                  targets: '.myCol',
                  duration: 0,
                  translateX: 0,
                })
                myThis.isAnimating = false
              }
            })
          })
          // ---------------- ANIMATION NEXT DAY -------------------- 


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
    /* outline: 4px lime solid; */
    /* justify-content: center !important; */
    overflow: hidden;
  }
  
    .myCol {
      position: relative;
      padding: 0 4px;
      /* width: 314px; */
      /* background-color: rgb(207, 236, 233); */
    }
    /* .shiftLeftForAnim {
      transform: translateX(-292px);
    } */

    
.scrollIcons { 
  top: 50% !important; 
  margin-top: -30px !important;
  z-index: 2;
}
  .bumpLeftMobile {position:absolute; left:1px;}
  .bumpRightMobile {position:absolute; right:1px;}

</style>