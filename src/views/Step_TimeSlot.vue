<template>
  <div class="timeSlot">
    <PageHeader :title="timeListerHeaderStr">

      Click on a Time to choose how many passengers would like to fly.
      <br />
        ( <v-icon color="orange">{{iconIdea}}</v-icon> Tip: you can split larger groups up over multiple time slots on a single day)

      <br />
      <br />

      <span v-show="usersGroupSize > 0">
        <v-btn
          color="orange"
          fab
          dark
          small
          class="black--text"
          id="passenger-btn"
        >
          {{ usersGroupSize }}
        </v-btn>
        <span id="passenger-text">Passengers</span>
      </span>



      <span v-show="usersGroupSize > 0">
        <v-tooltip bottom open-delay="700">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              outlined
              x-small
              fab
              right
              style="z-index:2; float:right;"
              color="green"
              dark
              class="ml-6 mt-2"
              v-bind="attrs"
              v-on="on"
              @click="onToOrigDateClick"
            >
              <v-icon small>{{iconArrowDown}}</v-icon>
            </v-btn>
          </template>
          <span>Jump to Origanal Date</span>
        </v-tooltip>
      </span>

      <!-- <br/>
      Orig Date: {{usersCurrDate}} <br/>
      Active Date: {{$store.state._activeDate}} <br/> -->

      
    </PageHeader>

    <!-- Simple loading icon from main page load... -->
    <div class="text-center pt-6" v-if="!daysVisibleList">
      <v-progress-circular
        :size="70"
        :width="7"
        color="amber"
        indeterminate
      ></v-progress-circular>
    </div>

    <swiper
      id="timeSlotSwiper"
      class="swiperBox steps-controls"
      ref="mySwiper"
      :options="swiperOptions"
    >
      <swiper-slide 
        v-for="(timeListerObj, key) in daysVisibleList" 
        :key="key"
        class="pb-2"
      >
        <TimeList
          class=""
          :date="key"
          :timesObj="timeListerObj"
          @row-selected="onRowSelected"
          @click="console.log('Clicked a Swiper Slide')"
        ></TimeList>

        <div class="vSpacerForFooter" ></div>

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

  
  import { mdiLightbulbOnOutline, mdiArrowDownCircle } from '@mdi/js'


  export default {
    name: "Step_TimeSlot",
  
    components: {
      PageHeader,
      TimeList,
      Swiper,
      SwiperSlide,
    },
    directives: {
      swiper: directive
    },

    data () {
      //var self = this;
      return {

        iconIdea: mdiLightbulbOnOutline,
        iconArrowDown: mdiArrowDownCircle,

        // Keep track of the user's initally chosen date from Step 1, and 
        // offer them a UI to return to that date easily.
        usersStep1Date: '',

        //getUsersTimeListerDay: 0,
        //swiper: null,
        swiperOptions: {
          centeredSlides: true,
          initialSlide: this.usersDayIndex(),
          autoHeight: true,
          slideToClickedSlide: true,
          threshold: 9,
          spaceBetween: 40,
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
        },
      }
    },


    created() {
      this.$store.dispatch('flightOptions')
      // Set the ActiveDate to the same as FlightDate from step 1.
      this.$store.dispatch('setActiveDate', this.$store.state.flightDate)

      // Keep track of User's step 1 selected date.
      this.usersStep1Date = this.$store.state.flightDate
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
        set(payload) {
          // Pass along the slot's label as a sanity check for booking time.
          //console.log(payload)
          // const payload = {'slot':int, 'label':this.slotLabel}
          return this.$store.dispatch('setTimeSlot', payload)
        }
      },
      usersCurrDate: {
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
        //const userFlightKey = this.$store.state.selectedFlight
        //console.log('userFlightKey in list?: ', this.$store.state._flightsList)
        //const flightDesc = this.$store.state._flightsList[userFlightKey]
        return "2. How Many are Flying?"
      }
    },

    methods: {
  
      onToOrigDateClick: function () {
        // scroll Swiper to the currently selected date.
        this.swiper.slideTo(this.swiperOptions.initialSlide)
      },

      usersDayIndex: function () {
        return this.$store.getters.getUsersDayIndex()
      },

      scrollToTimeSlotTop: function () {
        setTimeout(() => { this.$scrollTo('#timeSlotSwiper', 500) }, 200)
      },
      
      onRowSelected: function () {
      //clickedRow: function (chosenDate, chosenSlot, chosenSlotLabel) {

        // update the autoheight on Swiper to allow for TimeSlot height changes
        // when toggling passenger inputs. Needs a timeout to work.
        setTimeout(() => {
          this.swiper.updateAutoHeight()
        }, 50)

        
        //this.swiper.update()

        // chosenSlot is zero based.
        //console.log('Step_TimeSlot -> clickedRow().  chosenDate', chosenDate, 'chosenSlot', chosenSlot, chosenSlotLabel)
        //this.slotLabel = chosenSlotLabel
        // this.$store.state.timeSlot = chosenSlot
        // let payload = {'slot':chosenSlot, 'label':chosenSlotLabel}
        // this.userSelectedSlot = payload
        // // this.$store.state.flightDate = chosenDate
        // this.usersCurrDate = chosenDate
        // // Set 'Time' to true in the store _navList
        // payload = {'Time': true}
        // this.$store.dispatch('setNavListItem', payload)

        // Push the TimeSlot Swiper to top of screen
        //this.scrollToTimeSlotTop()
      },

      setUserDate: function (dateStr) {
        //console.log(dateStr)
        this.userTimeSlot = dateStr
        return dateStr
      },

    },
  }

</script>

<style scoped>
.steps-controls {
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
  margin: 0 auto;
  max-width: 1820px;
}

.vSpacerForFooter {
  width: 100%;
  height: 70px;
}

#passenger-btn {
  font-size: 1.2em;
  font-weight: bold;
}
#passenger-text {
  position: relative;
  top: 0.1em;
  left: 0.3em;
}

</style>