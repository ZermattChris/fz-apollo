<template>

  <div
    class="timeListerBox mx-auto elevation-2 rounded"
  >

    <div 
      class="TLHeader white--text grey darken-2"
    >
      <h3 
        :class="{'selectedTitleColour' : matchesUserDate}">
        {{titleDate.abbreviation}}
      </h3>
      <div
        :class="{'selectedTitleColour' : matchesUserDate}"
      >
        {{titleDate.fullDate}}
      </div>

      <v-tooltip 
        top
        open-on-click
      >
        <template v-slot:activator="{ on, attrs }">
          <v-avatar 
            id="usersDateAvatar"
            v-if="matchesUserDate"
            color="success" 
            size="36"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon 
              dark
            >mdi-calendar-check</v-icon>
          </v-avatar>
        </template>
        <span>Your selected Date from Step 1.</span>
      </v-tooltip>

    </div>

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
        @click="onSelectRow(pilotsAvail, timeStr, index)"
      >
        <TimeSlot 
          :index="index"
          :isActive="matchesUserDate"
          :pilotsAvail="pilotsAvail"
          :timeStr="timeStr"
        />
      </v-list-item>

      
    </v-list-item-group>

  </div>

</template>

<script>
  import { parseISO, format } from 'date-fns'
  import { mdiClockOutline, mdiMinusCircleOutline, mdiClockCheck } from '@mdi/js'

  import TimeSlot from "@/components/TimeSlot.vue"

  //import NumberScrollerSmall from "@/components/NumberScrollerSmall.vue"

  export default {
    name: "TimeList",
    components: {
      TimeSlot,
    },

    props: {
      // usersDate: {
      //   type: String,
      //   default: ''
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
        items: this.timesObj,
        selectedSlot: -1,   // keeps track of the currently open TimeSlot if there is one.
      }
    },

    computed: {


      usersDate() {
        return this.$store.state.flightDate
      },


      // TODO - change this function to a more accurate name when updating for
      // new system.
      matchesUserDate: function () {
        //console.log(this.usersDate, this.date)
        if (this.date === this.usersDate || this.date === this.$store.state._activeDate) return true
        return false
      },
      titleDate: function () {
        // replace with an API call when its live.
        //console.log(this.date)
        const myDate = parseISO(this.date)
        //console.log(myDate)
        const dayAbrvStr = format(myDate, 'ccc')
        const fullDateStr = format(myDate, 'PPP')
        return {abbreviation: dayAbrvStr, fullDate: fullDateStr}
      },
      
    },

    methods: {

      onSelectRow: function (pilotsAvail, timeLabel, chosenSlot ) {


        this.$store.state._activeDate = this.date



        //this.selectedSlot = chosenSlot

        // // deselect previous opened slot if there is one.
        // if (this.selectedSlot !== chosenSlot && this.selectedSlot > -1 ) {
        //   console.log('Need to close slot: ' + this.selectedSlot)
        // }

        // User selected a Row or the Switch, fire event for parent
        //console.log("Selected a Row. pilotsAvail:", pilotsAvail, 'timeLabel', timeLabel, 'chosenSlot', chosenSlot)
        this.$emit('row-selected', this.date, chosenSlot, timeLabel )

        


      },

      formatAvail: function (slotObj) {
        // Just grab the Observer object's value and return it.
        //const availStr = slotObj[key]
        return slotObj
      },

      getSelectedColour: function () {
        // if (this.notEnoughAvailability(pilotsAvail)) return 'silver'
        // if (key === this.selectedSlot) return 'success darken-2'
        return ''
      },
      getClockColour: function () {
        // if (this.notEnoughAvailability(pilotsAvail)) return 'grey lighten-1'
        // if (key === this.selectedSlot) return 'success darken-2'
        return ''
      },
      //getClockIcon: function (pilotsAvail, key) {
      getClockIcon: function () {
        // if (this.notEnoughAvailability(pilotsAvail)) return this.clockIconOutline
        // if (key === this.selectedSlot) return this.clockIconSelected
        return this.clockIcon
      },

      formatTime: function (key) {
          //console.log("key, slotObj", key, slotObj)
        // format into nice html for display.
        // const timeKey = slotObj[key]
        const htmlSnippet = "<span class='hour'>" + this.getHours(key) + "</span><span class='minute'>:" + this.getMins(key) + "</span>"
        return htmlSnippet
      },
        getHours: function (timeStr) {
          //console.log("timeStr", timeStr)
          // split timeStr on the colon ':' or throw error.
          let items = timeStr.split(':')
          if (items.length !== 2) {
            throw new Error('Time String data (timeSlots array) must be in the format of "10:45". Was passed:' + timeStr)
          }
          return items[0]
        },
        getMins: function (timeStr) {
          // split timeStr on the colon ':' or throw error.
          let items = timeStr.split(':')
          if (items.length !== 2) {
            throw new Error('Time String data (timeSlots array) must be in the format of "10:45". Was passed:' + timeStr)
          }
          return items[1]
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