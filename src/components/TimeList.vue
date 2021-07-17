<template>

  <div
    class="timeListerBox mx-auto elevation-2 rounded"
  >

    <div
      :class="(date === usersDate) ? 'TLHeader orange' : 'TLHeader white--text grey darken-2'"
      @click="onClickedTimeList"
    >
      <h3 :class="getHeaderCSSClassName">
        {{titleDate.abbreviation}}
        <!-- {{$t('date-time.day-short.' + titleDate.abbreviation)}} -->
      </h3>
      <div
        :class="getHeaderCSSClassName"
      >
        {{titleDate.fullDate}}
      </div>

      <!-- <v-tooltip 
        top
        open-on-click
      >
        <template v-slot:activator="{ on, attrs }">
          <v-avatar 
            id="usersDateAvatar"
            v-if="isActiveDate"
            color="success" 
            size="36"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon 
              dark
              size="24"
            >{{iconCalendar}}</v-icon>
          </v-avatar>
        </template>
        <span>{{$t('step-timeslot.selected-date')}}</span>
      </v-tooltip> -->

    </div>

    <v-list 
      flat 
      class="pa-0"
    >
      <v-list-item-group 
        flat
        v-model="selectedSlot"
        color="indigo"
      >
        <v-list-item
          v-for="(pilotsAvail, timeStr, index) in items"
          :key="index"
          :ripple="false"
          class="listItem"
          dense
          :disabled="pilotsAvail == 0"
        >
          <TimeSlot 
            :slotDate="date"
            :index="index"
            :selectedSlotIndex="getSelectedSlotIndex()"
            :pilotsAvail="pilotsAvail"
            :timeStr="timeStr"
            @selected="onClikedTimeSlot"
          />

          <!-- <v-skeleton-loader
            class=""
            width="100%"
            type="list-item-avatar"
          ></v-skeleton-loader> -->

    
        </v-list-item>
      </v-list-item-group>
    </v-list>

  </div>

</template>

<script>
  import { parseISO } from 'date-fns'
  import { mdiClockOutline, mdiMinusCircleOutline, mdiClockCheck, mdiCalendarCheck } from '@mdi/js'

  import TimeSlot from "@/components/TimeSlot.vue"

  export default {
    name: "TimeList",
    components: {
      TimeSlot,
    },

    props: {
      // Using this to do virtual rendering. Only true if the component is visible in the scrolling Swiper.
      // visible: {
      //   type: Boolean,
      //   default: false
      // },
      date: {
        type: String,
        required: true,
      },
      timesObj: {
        type: [Array, Object],
        required: true,
      },
    }, 

    data () {
      return {
        clockIcon: mdiClockOutline,
        clockIconOutline: mdiMinusCircleOutline,
        clockIconSelected: mdiClockCheck,
        iconCalendar: mdiCalendarCheck,


        items: this.timesObj,
        selectedSlot: -1,   // keeps track of the currently open TimeSlot if there is one.
      }
    },

    computed: {

      usersDate() {
        return this.$store.state.flightDate
      },

      isActiveDate: function () {
        //console.log(this.usersDate, this.date)
        if (this.date === this.$store.state._activeDate) return true
        return false
      },
      getHeaderCSSClassName: function () {
        if (this.date === this.$store.state._activeDate && this.date !== this.usersDate) return 'selectedTitleColour'
        if (this.date === this.usersDate) return 'activeTitleColour'
        return ''
      },


      titleDate: function () {
        // replace with an API call when its live.
        //console.log(this.date)
        //const myDate = parseISO(this.date)
        //console.log(myDate)
        //const dayAbrvStr = format(myDate, 'ccc')
        //const fullDateStr = format(myDate, 'PPP')

        const myDate = parseISO(this.date)

        let options = { year: 'numeric', month: 'long', day: 'numeric' }
        const fullDateStr = new Intl.DateTimeFormat(this.$i18n.locale, options).format(myDate)
        options = { weekday: 'long' }
        const dayAbrvStr = new Intl.DateTimeFormat(this.$i18n.locale, options).format(myDate)

        return {abbreviation: dayAbrvStr, fullDate: fullDateStr}
      },
      
    },

    methods: {

      getSelectedSlotIndex: function () {
        if (this.isActiveDate === false ) return -1   // This TimeSlot isn't active, so close all the TiimeSlots.

        // We want to display the earliest available slot in the Open position.
        if (this.selectedSlot === -1) {
          let x = 0;
          let foundSlot = -1
          for (let key of Object.keys(this.items)) {
            const pilots = this.items[key]
            if (pilots > 0 && foundSlot === -1) {
              foundSlot = x
              //console.log("Slot index: " + foundSlot + " Time: " + key + " Pilots: " + this.items[key])
            }
            x++
          }
          this.selectedSlot = foundSlot
        }
        return this.selectedSlot
      },

      onClikedTimeSlot: function (slotIndex) {
        // console.log('slotIndex: '+slotIndex)
        this.selectedSlot = slotIndex
        this.onClickedTimeList()

        this.$emit('row-selected', slotIndex)
      },

      onClickedTimeList: function () {
        this.$store.dispatch('setActiveDate', this.date)
      },

    },

    

  }

</script>

<style scoped>
  .timeListerBox {
    display: inline-block;
    /* this needs to match the Selected Border width below. */
    border-style: solid !important;
    border-width: 1px !important;
    border-color: rgb(211, 211, 211) !important;
    /* background-color: rgb(248, 239, 255); */
  }
    .listItem {
      /* min-height: 55px; */
      min-width: 270px;
      padding-top: 0.15em;
      border-bottom: 1px solid rgb(218, 218, 218);
      background-color: white !important;
    }




  .darkTextShadow {
    text-shadow: 0px 0px 2px black, 0px 0px 1px black;
  }
  .whiteTextShadow {
    text-shadow: 0px 0px 2px rgb(255, 255, 255), 0px 0px 1px rgb(255, 255, 255);
  }

  .TLHeader {
    position: relative;
  }
    .TLHeader h3 {
      font-size: 1.6em;
      position: relative;
    }
    .selectedTitleColour {
      color: rgba(var(--fzselected-color), 1.0);
    }
    .activeTitleColour {
      /* color: #4CAF50; */
      color: black;
      
    }
    .selectedChip {
      border-color: rgba(var(--fzselected-color), 1.0);
    }



  /* Gives us a bit more left/right space */
  .v-list-item {
    padding: 0 14px;
  }


  /* Format pesky Time timeStr */
  .time {
    font-size: 1.25em;
    position: absolute;
    top: 1.1em;
    left: 50px;
  }
    span>>>.hour {
      font-size: larger;
      font-weight: bolder;
    }
    span>>>.minute {
      font-size: smaller;
      position: relative;
      top: -0.24em;
      left: 0.1em;
    }

  #usersDateAvatar {
    position: absolute; 
    top: 50%; 
    right: -6px; 
    margin-top: -18px;
    z-index: 100;
  }
</style>