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

  <swiper 
    class="swiperBox steps-controls"
    ref="mySwiper" 
    :options="swiperOptions"
  >
    <swiper-slide
      v-for="(timeListerObj, key) in daysVisibleList"
      :key="key"
    >
      <TimeList
        class=""
        :date="key"
        :timesObj="timeListerObj"
        :usersDate="userSelectedDate"
        :selected="userSelectedSlot"
        @row-selected="clickedRow"
      ></TimeList>
    </swiper-slide>
  </swiper>



</div>
</template>

<script>
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
  // import style (>= Swiper 6.x)
  import 'swiper/css/swiper.css'
  import TimeList from '@/components/TimeList.vue'

  import PageHeader from '@/components/PageHeader.vue'


  export default {
    name: "Step_TimeSlot",
  
    components: {
      PageHeader,
      Swiper,
      SwiperSlide,
      TimeList
    },
    directives: {
      swiper: directive
    },

    data () {
      return {
        model: 7,
        swiperOptions: {
          breakpoints: {
            1700: {
              slidesPerView: 5,
              spaceBetween: 40
            },
            1260: {
              slidesPerView: 4,
              spaceBetween: 40
            },
            950: {
              slidesPerView: 3,
              spaceBetween: 20
            },
            700: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            220: {
              slidesPerView: 1,
              spaceBetween: 10
            }
          },
          centeredSlides: true,
          autoHeight: true,
          slideToClickedSlide: true,
        },
        //daysVisibleList: this.$store.state._timeListDates,
      }
    },

    created() {
      this.$store.dispatch('flightOptions')
      //this.$store.dispatch('timeListDates')
    },
    async mounted() {
      // console.log('Current Swiper instance object', this.swiper)
      // this.swiper.slideTo(3, 1000, false)
      
      await this.$store.dispatch('timeListDates')
      //console.log('after load', this.$store.state._timeListDates)
      this.centerUsersDay()
      
    },
    
    computed: {
      daysVisibleList() {
        return this.$store.state._timeListDates
      },
      swiper() {
        return this.$refs.mySwiper.$swiper
      },
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
      clickedRow: function (chosenDate, chosenSlot, chosenSlotLabel) {
        // chosenSlot is zero based.
        //console.log('chosenDate', chosenDate, 'chosenSlot', chosenSlot, 'timeLabel', timeLabel)
        this.slotLabel = chosenSlotLabel
        // this.$store.state.timeSlot = chosenSlot
        this.userSelectedSlot = chosenSlot
        // this.$store.state.flightDate = chosenDate
        this.userSelectedDate = chosenDate
        // Set 'Time' to true in the store _navList
        const payload = {'Time': true}
        this.$store.dispatch('setNavListItem', payload)

      },

      setUserDate: function (dateStr) {
        //console.log(dateStr)
        this.userTimeSlot = dateStr
        return dateStr
      },

      centerUsersDay: function () {

        this.$refs.mySwiper.$swiper.slideTo(7, 1000, false)

      },

    },
  }

</script>

<style scoped>


.steps-controls {
  position: absolute;
  left:0; right: 0;
  text-align: center;
  margin: 0 auto;
  max-width: 1820px;

}
  /* .vSpacerForAbsolute {
    width: 100%;
    height: 300px;
  } */

/* TimeListGroup {
  background-color: pink;
} */

/* .swiper-slide {
  margin-bottom: 60px;
} */


</style>