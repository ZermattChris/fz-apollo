<template>
  <div class="timeSlot">
    <PageHeader :title="'2. ' + $t('step-timeslot.title')">

      {{$t('step-timeslot.description')}}
      <br /><br />
        ( <v-icon color="orange">{{iconIdea}}</v-icon> {{$t('step-timeslot.large-group-tip')}} )

      <br />
      <br />

      <span :class="(passengerTotal > 0) ? '' : 'hidden'">
        <v-btn
          fab
          outlined
          dark
          small
          id="passenger-btn"
        >
          {{ passengerTotal }}
        </v-btn>
        <span id="passenger-text" class="font-weight-bold">{{$tc('step-timeslot.total-passengers', passengerTotal)}}</span>
      </span>



      <span>
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
          <span>{{$t('step-timeslot.jump-original-date')}}</span>
        </v-tooltip>
      </span>

      <!-- <br/>
      Orig Date: {{usersCurrDate}} <br/>
      Active Date: {{$store.state._activeDate}} <br/> -->

      
    </PageHeader>

    <!-- ???? Simple loading icon from main page load... -->
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
      @slideChange="onSlideChanged"
    >
      <swiper-slide 
        v-for="(timeListerObj, key, index) in daysVisibleList" 
        :key="key"
        class="pb-2"
        :id="'SwiperSlide_' + index"
      >
      <!-- {{visibleSwiperSlidesList + ' Key: ' + key}} -->
        <TimeList
          :id="'TimeList_' + index"
          :date="key"
          :timesObj="timeListerObj"
          @row-selected="onRowSelected"
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

        visibleSlidesData: [],

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
              slidesPerView: 1,
              spaceBetween: 10
            }
          },
        },
      }
    },


    created() {
      this.$store.dispatch('flightOptions')   // ??

      // Set the ActiveDate to the same as FlightDate from step 1.
      this.$store.dispatch('setActiveDate', this.$store.state.flightDate)

      // Keep track of User's step 1 selected date.
      this.usersStep1Date = this.$store.state.flightDate

    },


    mounted() {
      // console.log("Swiper Init() ")
      this.loadVisibleSlides()
    },

    beforeUpdate() {

    },
    
    computed: {

      // test: function () {
      //   return this.visibleSwiperSlidesList
      // },

      passengerTotal() {
        const totalP = this.$store.state.totalPassengers
        // Pass along to the Nav button if user has 1+ passengers.
        let payload = {'Time': false}
        if (totalP > 0) {
          payload = {'Time': true}
        } else if (totalP < 0) {
          console.error("passengerTotal is less than 0. " + totalP)
        }
        this.$store.dispatch('setNavListItem', payload)
        return totalP
      },

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

      // timeListerHeaderStr: function () {
      //   if (this.isObjEmpty(this.$store.state._flightsList)) return
      //   return "2. How Many are Flying?"
      // }
    },

    // watch: {

    //   // 
    //   test: function() {
    //     console.log('Changed!: ',this.visibleSwiperSlidesList)
    //   }

    // }, []

    methods: {

      onSlideChanged: function () {
        // scroll Swiper to the currently selected date.
        // console.log("Slide changed ")
        // this.updateVirtualSlides()
      },
      
      
      loadVisibleSlides: function () {

        This bit is all rather wrong and poorly thought through. Must plan and redo properly

        console.log("- Update Slides. Active slide index: ", this.swiper.activeIndex, " Container Width:", this.swiper.width)
        // const myTimelist = "TimeList_" + this.swiper.activeIndex
        // this.$refs[myTimelist].show()

        const currSlideIndex = this.swiper.activeIndex
        const swiperWidth = this.swiper.width

        let renderSlideOffset = 1
        let visibleSlidesIndexes = [currSlideIndex]
        this.visibleSlidesData = []

        if (swiperWidth >= 700 && swiperWidth < 1260)  {
          renderSlideOffset = 1
        } else if (swiperWidth >= 1260)  {
          renderSlideOffset = 2
        } 

        if (swiperWidth >= 700)  {
          visibleSlidesIndexes = [] // clear.
          for (
            let x = (currSlideIndex - renderSlideOffset); 
            x < (currSlideIndex + renderSlideOffset); 
            x++
          ) {
            visibleSlidesIndexes.push(x)
          }
        }

        console.log("-> Visible slide Indexes: " + visibleSlidesIndexes)

      },

      // updateVirtualSlides: function () {
      //   console.log("- Update Slides", this.swiper.activeIndex, " Container Width:", this.swiper.width)
      //   // const myTimelist = "TimeList_" + this.swiper.activeIndex
      //   // this.$refs[myTimelist].show()

      //   const currSlideIndex = this.swiper.activeIndex
      //   const swiperWidth = this.swiper.width
      //   let renderSlideOffset = 1
      //   this.visibleSlides = []

      //   if (swiperWidth >= 700 && swiperWidth < 1260)  {
      //     renderSlideOffset = 2
      //   } else if (swiperWidth >= 1260)  {
      //     renderSlideOffset = 3
      //   } 

      //   for (
      //     let x = (currSlideIndex - renderSlideOffset); 
      //     x < (currSlideIndex + renderSlideOffset); 
      //     x++
      //   ) {
      //     this.visibleSlides.push(x)
      //   }

      //   //this.visibleSlides


      // },
      
      // onIntersect (entries) {
      //   //console.log(entries, observer)
      //   // More information about these options
      //   // is located here: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
      //   //this.isIntersecting = entries[0].isIntersecting

      //   // Need to see if entries[0].isIntersecting is true or false. Set visible for this element.
      //   //if (entries[0].isIntersecting) {
      //     //console.log(entries[0].target.id, entries[0].isIntersecting)
      //   //}

      //   this.visibleSwiperSlidesList[entries[0].target.id] = entries[0].isIntersecting

      //   console.log(this.visibleSwiperSlidesList)
      // },
  
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
  color: black !important;
  border-color: rgb(206, 86, 0);
  border-width: 3px;
  cursor: default;
}
#passenger-text {
  position: relative;
  top: 0.1em;
  left: 0.3em;
}

.hidden {
  visibility: hidden;
}

</style>