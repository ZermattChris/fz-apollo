<template>
  <div class="timeSlot">
    <PageHeader :title="timeListerHeaderStr">

      Click on a Time to choose how many passengers would like to fly.
      <br />
        ( <v-icon
        
        color="orange"
      >
        {{iconIdea}}
      </v-icon> Tip: you can split larger groups up over multiple time slots on a single day)

      <br /><br />
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
      <span id="passenger-text">Passengers in total.</span>
      
      
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
      <swiper-slide v-for="(timeListerObj, key) in daysVisibleList" :key="key">
        <TimeList
          class=""
          :date="key"
          :timesObj="timeListerObj"
          :usersDate="userSelectedDate"
          :selected="userSelectedSlot"
          @row-selected="clickedRow"
        ></TimeList>

 <!-- <br/>
    userOriginalDate Step 1: {{usersStep1Date}} <br/>
    userSelectedDate: {{userSelectedDate}} <br/>
    swiper: {{usersDayIndex}} <br/> -->

        <div class="vSpacerForFooter"></div>

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

  
  import { mdiLightbulbOnOutline } from '@mdi/js'


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

        // Keep track of the user's initally chosen date from Step 1, and 
        // offer them a UI to return to that date easily.
        usersStep1Date: '',

        //getUsersTimeListerDay: 0,
        //swiper: null,
        swiperOptions: {
          centeredSlides: true,
          initialSlide: this.usersDayIndex(),
          //autoHeight: true,
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
      // Keep track of User's step 1 selected date.
      this.usersStep1Date = this.$store.state.flightDate
    },
    async mounted() {
      // We're going to pre-load this in Step 1, to allow
      // checking number of people against how many max pilots are available
      // for the chosen day. 
      // Means we just need to check if this is null (not yet set) and handle this
      // as an error (navigating directly to this step would cause this)

      // TODO

      // this.Swiper.initialSlide = this.$store.getters.getUsersDayIndex()

      //await this.$store.dispatch('timeListDates').catch((err) => { console.error(err); })
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
        //const userFlightKey = this.$store.state.selectedFlight
        //console.log('userFlightKey in list?: ', this.$store.state._flightsList)
        //const flightDesc = this.$store.state._flightsList[userFlightKey]
        return "2. How Many are Flying?"
      }
    },

    methods: {
  
      usersDayIndex: function () {
        return this.$store.getters.getUsersDayIndex()
      },

      scrollToTimeSlotTop: function () {
        setTimeout(() => { this.$scrollTo('#timeSlotSwiper', 500) }, 200)
      },
      
      clickedRow: function (chosenDate, chosenSlot, chosenSlotLabel) {
        // chosenSlot is zero based.
        //console.log('chosenDate', chosenDate, 'chosenSlot', chosenSlot, 'timeLabel', timeLabel)
        //this.slotLabel = chosenSlotLabel
        // this.$store.state.timeSlot = chosenSlot
        let payload = {'slot':chosenSlot, 'label':chosenSlotLabel}
        this.userSelectedSlot = payload
        // this.$store.state.flightDate = chosenDate
        this.userSelectedDate = chosenDate
        // Set 'Time' to true in the store _navList
        payload = {'Time': true}
        this.$store.dispatch('setNavListItem', payload)

        // Push the TimeSlot Swiper to top of screen
        this.scrollToTimeSlotTop()
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
  height: 100px;
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