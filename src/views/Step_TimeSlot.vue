<template>
  <div class="timeSlot">
    <PageHeader 
      :title="'2. ' + $t('step-timeslot.title')"
    >
      {{$t('step-timeslot.description')}}

      <v-sheet
        rounded="lg"
        color="grey lighten-3"
        class="mx-auto mt-3 px-5 py-2 disable-select"
        style="max-width:400px;"
        id="bigGroupTipBox"
      >
        <v-icon 
          color="orange"
        >
          {{iconIdea}}
        </v-icon>
      
        {{$t('step-timeslot.large-group-tip')}}
      </v-sheet>

      <div
        class="my-3"
        style="text-align:center;"
          @click="onToOrigDateClick"
      >
        <v-btn
          fab
          outlined
          dark
          small
          disabled
          id="passenger-btn"
        >
          {{ passengerTotal }}
        </v-btn>
        <span id="passenger-text" class="font-weight-bold">{{$tc('step-timeslot.total-passengers', passengerTotal)}}</span>
      </div>


      <!-- <span>
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
      </span> -->

      <!-- <br/>
      Orig Date: {{usersCurrDate}} <br/>
      Active Date: {{$store.state._activeDate}} <br/> -->

      
    </PageHeader>

    <!-- ???? Simple loading icon from main page load... -->
    <!-- <div class="text-center pt-6" v-if="!daysVisibleList">
      <v-progress-circular
        :size="70"
        :width="7"
        color="amber"
        indeterminate
      ></v-progress-circular>
    </div> -->



    <div class="mySwiperWrapper" >

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
          class="swiper-slide pb-2"
          :id="'SwiperSlide_' + index"
        >
          <TimeList
            :id="'TimeList_' + index"
            :date="key"
            :timesObj="timeListerObj"
            @row-selected="onRowSelected"
          ></TimeList>

          <div 
            class="font-weight-light pt-4" 
            v-if="mobile"
          >
            {{$t('step-timeslot.swipeRightLeft')}}
          </div>

          <div class="vSpacerForFooter" ></div>

        </swiper-slide>


      </swiper>

      <div 
        v-show="$vuetify.breakpoint.name == 'xs' || $vuetify.breakpoint.name == 'sm'" 
        class="swiper-button-prev"
        @click="onPrevDayBtn">
      </div>
      <div 
        v-show="$vuetify.breakpoint.name == 'xs' || $vuetify.breakpoint.name == 'sm' " 
        class="swiper-button-next"
        @click="onNextDayBtn">
      </div>

    </div>





    <!-- Changed date outside of given Arrive + Depart values Dialog box -->
    <v-dialog
      v-model="changedDateDialog"
      persistent
      width="500"
    >
      <v-card class="pb-2">
        <v-card-title class="text-h5 grey lighten-2">
          <v-icon color="fzPink" class="mr-2">{{iconWarning}}</v-icon> {{$t('step-timeslot.confirmDateChangeDialogHeader')}}
        </v-card-title>

        <v-card-text
          class="pt-4"
        >

          {{$t('step-timeslot.confirmDateChangeDialog')}}
          
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <!-- <v-btn
            text
            style="padding: 2px 10px 0; margin-right: 10px;"
            @click="changedDateDialog = false; dontNagDateDialog = true"
          >
            Cancel
          </v-btn>  -->
          <v-btn
            rounded 
            color="fzPink" 
            elevation="4"
            class="white--text"
            style="padding: 2px 16px 0; margin-right: 10px;"
            @click="onChangedDateDialogContinueBtn"
          >
            <v-icon right>{{iconPrevArrow}}</v-icon>
            {{$t('step-timeslot.confirmDateChangeDialogConfirmBtn')}}...
          </v-btn>
        </v-card-actions>

      </v-card>
    </v-dialog>



  </div>
</template>

<script>
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
  // import style (>= Swiper 6.x)
  // import 'swiper/css/swiper.css'
  import 'swiper/swiper-bundle.css'
  import TimeList from '@/components/TimeList.vue'

  import PageHeader from '@/components/PageHeader.vue'
  import { isMobile } from 'mobile-device-detect'

  
  import { mdiLightbulbOnOutline, mdiArrowDownCircle, mdiArrowLeftCircle, mdiAlertOctagram } from '@mdi/js'
  import { parseISO, isAfter, isBefore } from 'date-fns'


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

        mobile: isMobile,

        iconIdea: mdiLightbulbOnOutline,
        iconArrowDown: mdiArrowDownCircle,
        iconPrevArrow: mdiArrowLeftCircle,
        iconWarning: mdiAlertOctagram,

        // Keep track of the user's initally chosen date from Step 1, and 
        // offer them a UI to return to that date easily.
        // usersStep1Date: '',

        visibleSlidesData: [],

        swiperOptions: {
          centeredSlides: true,
          initialSlide: this.usersDayIndex(),
          autoHeight: true,
          slideToClickedSlide: true,
          threshold: 9,
          spaceBetween: 40,
          // Navigation arrows
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
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

        // swiperPrevEnabled: true,
        // swiperNextEnabled: '',

        changedDateDialog: false

      }
    },


    created() {
      this.$store.dispatch('flightOptions')   // ??

      // Set the ActiveDate to the same as FlightDate from step 1.
      this.$store.dispatch('setActiveDate', this.$store.state.flightDate)

      // Keep track of User's step 1 selected date.
      // this.usersStep1Date = this.$store.state.flightDate


    },


    mounted() {
      // console.log("Swiper Init() ")
      this.loadVisibleSlides()

      // setup Swiper events
      // swiper.isBeginning
      // const me = this
      //this.swiperNavButtonEnabler(this.swiper)
      //this.swiper.on('progress', () => {this.swiperNavButtonEnabler(this.swiper)})

    },

    beforeUpdate() {

    },
    
    computed: {

      passengerTotal() {
        const totalP = this.$store.state.totalPassengers
        // Pass along to the Nav button if user has 1+ passengers.
        let payload = {'Time': false}
        if (totalP > 0) {
          payload = {'Time': true}
        // } else if (totalP < 0) {
        //   console.error("passengerTotal is less than 0. " + totalP)
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



      arriveDate() {
        return this.$store.state.arriveDate
      },
      departDate() {
        return this.$store.state.departDate
      },

      userSelectedSlot: {
        get() {
          return this.$store.state.timeSlot
        },
        set(payload) {

          // Pass along the slot's label as a sanity check for booking time.
          //console.log(payload)
          //this.scrollToId("#bigGroupTipBox")
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


    },



    methods: {

      onChangedDateDialogContinueBtn: function () {
        
        this.$store.dispatch('setArriveDate', this.$store.state._activeDate)
        this.$store.dispatch('setDepartDate', this.$store.state._activeDate)

        this.changedDateDialog = false  // close dialog box

        this.$router.push({ name: 'Start' })
          
      },

      // Not working -- causes a icky infinite loop bug when trying to change
      // visibility of Prev Next buttons. Will have to wait for big rewrite to
      // Vue 3 and latest native Swiper.
      // swiperNavButtonEnabler: function (swiper) {

      //   console.log('swiperNavButtonEnabler')
      //   this.swiperPrevEnabled = true
      //   // me.swiperNextEnabledClass = ''

      //   if (swiper.isBeginning) {
      //     console.log('Swiper Start')
      //     this.swiperPrevEnabled = false
      //   }
      //   if (swiper.isEnd) {
      //     console.log('Swiper End')
      //     // me.swiperNextEnabledClass = 'disableBtnClass'
      //   }

      // },

      onPrevDayBtn: function () {
        //console.log('Clicked Prev')
        this.swiper.slidePrev(300)
      },
      onNextDayBtn: function () {
        //console.log('Clicked Next')
        this.swiper.slideNext(300)
      },

      onSlideChanged: function () {
        // scroll Swiper to the currently selected date.
        // console.log("Slide changed ")
        // this.updateVirtualSlides()
      },
      
      // scrollToId: function (elIdToTarget = '') {
      //   setTimeout(() => { this.$scrollTo(elIdToTarget, 500) }, 100)
      // },
      
      
      loadVisibleSlides: function () {

        // This bit is all rather wrong and poorly thought through. Must plan and redo properly

        //console.log("- Update Slides. Active slide index: ", this.swiper.activeIndex, " Container Width:", this.swiper.width)
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

        //console.log("-> Visible slide Indexes: " + visibleSlidesIndexes)

      },

  
      onToOrigDateClick: function () {
        // Not working correctly, needs to go to current flight date.
        // scroll Swiper to the currently selected date.
        //this.swiper.slideTo(this.swiperOptions.initialSlide)
      },

      usersDayIndex: function () {
        return this.$store.getters.getUsersDayIndex()
      },

      onRowSelected: function () {
        //clickedRow: function (chosenDate, chosenSlot, chosenSlotLabel) {

        if ( this.departDate === '' || this.arriveDate === '' ) {
          this.changedDateDialog = true
          return
        }


        if ( isAfter( parseISO(this.userFlightDate), parseISO(this.departDate)) || 
             isBefore( parseISO(this.userFlightDate), parseISO(this.arriveDate)) ){ 
         
          this.changedDateDialog = true
          return

        }

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


#passenger-btn-disabled {
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

/* Arrow size for the Swiper component */

/* this controls the disabled state of the Swiper Nav buttons  */
.disableBtnClass {
  cursor: pointer;
  opacity: 50%;
}

.swiper-button-next, .swiper-button-prev {
  top: 395px;
}
.swiper-button-next::after, .swiper-button-prev::after {
  font-size: 22px;
}
.swiper-button-prev::after {
  position: relative;
  left: -7px;
}
.swiper-button-next::after {
  position: relative;
  right: -7px;
}

.hidden {
  visibility: hidden;
}

</style>