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

    <!-- <div class="steps-controls">
      <TimeListGroup/>
    </div> -->

    <!-- This is required as I've position:absolute'd the steps-controls container,
    otherwise any contents after the TLG would jump up. -->
    <!-- <div class="vSpacerForAbsolute"></div> -->




<!-- start of new timelist object test -->


  <!-- <v-sheet
    class="mx-auto steps-controls"
    max-width="1200"
  >
    <v-slide-group
      v-model="model"
      center-active
    >
      <v-slide-item
        v-for="n in 15"
        :key="n"
        v-slot:default="{ active, toggle }"
      >
        <v-card
          :color="active ? 'primary' : 'grey lighten-1'"
          class="mx-1"
          min-height="200"
          width="290"
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
          </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group>

    <v-expand-transition>
      <v-sheet
        height="200"
        tile
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <h3 class="title">
            Selected {{ model }}
          </h3>
        </v-row>
      </v-sheet>
    </v-expand-transition>
  </v-sheet> -->

  <swiper 
    class="swiperBox steps-controls"
    ref="mySwiper" 
    :options="swiperOptions"
  >
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
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
  import 'swiper/swiper-bundle.css'
  import TimeList from '@/components/TimeList.vue'
  import {format, add, parseISO } from 'date-fns'  

  // import { store } from "@/store/store.js";
  import PageHeader from '@/components/PageHeader.vue'
  // import TimeListGroup from '@/components/TimeListGroup.vue'


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
          effect: 'coverflow',        
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
          },
          centeredSlides: true,
          slidesPerView: 3,
          spaceBetween: 10,
          slidesPerGroup: 3,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        daysVisibleList: {},
        nrDatesLoaded: 14,
      }
    },

    created() {
      this.$store.dispatch('flightOptions')
      this.$store.dispatch('timeListDates')
    },
    async mounted() {
      // console.log('Current Swiper instance object', this.swiper)
      // this.swiper.slideTo(3, 1000, false)
      
      await this.$store.dispatch('timeListDates')
      //console.log('after load', this.$store.state._timeListDates)
      this.loadVisibleDays()
      
    },
    
    computed: {
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

    },
  }

</script>

<style scoped>


.steps-controls {
  position: absolute;
  left:0; right: 0;
  text-align: center;
  margin: 0 auto;
}
  .vSpacerForAbsolute {
    width: 100%;
    height: 300px;
  }

TimeListGroup {
  background-color: pink;
}




</style>