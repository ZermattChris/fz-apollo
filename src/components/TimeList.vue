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

    </div>

    <v-list-item-group 
      flat
      v-model="selectedSlot"
      color="indigo"
    >
      <v-list-item
        v-for="(nrAvail, label, key) in items"
        :key="key"
        :ripple="false"
        class="listItem"
        dense
        @click="onSelectRow(nrAvail, label, key)"
      >

<!-- This is where the new TimeSlot component needs to go in. -->

        <!-- Clock Icon -->
        <v-list-item-icon>
          <v-icon 
            class="clockIcon"
            v-text="getClockIcon(nrAvail, key)"
            :color="getClockColour(nrAvail, key)"
            size="28"
          ></v-icon>
        </v-list-item-icon>


        <v-list-item-content>
          <v-list-item-title>
            <span class="time" v-html="formatTime(label)"></span>
            <v-chip
              class="availability" 
              :color="getSelectedColour(nrAvail, key)"
              v-html="'xxx Pilots available'"
              outlined
            ></v-chip>
            
          </v-list-item-title>
        </v-list-item-content>

<!-- END: TimeSlot component -->

        <div style="min-width:15px; min-height:30px;"></div>

      </v-list-item>

      
    </v-list-item-group>

  </div>

</template>

<script>
  import { parseISO, format } from 'date-fns'
  import { mdiClockOutline, mdiMinusCircleOutline, mdiClockCheck } from '@mdi/js'

  //import NumberScrollerSmall from "@/components/NumberScrollerSmall.vue"

  export default {
    name: "TimeList",
    components: {
      //NumberScrollerSmall,
    },

    props: {
      usersDate: {
        type: String,
        default: ''
      },
      date: {
        type: String,
        required: true,
      },
      timesObj: {
        type: [Array, Object],
        required: true,
      },
      selected: {
        type: [Number],
        required: false,
        default: -1
      },
    }, 

    data () {
      return {
        clockIcon: mdiClockOutline,
        clockIconOutline: mdiMinusCircleOutline,
        clockIconSelected: mdiClockCheck,
        items: this.timesObj,
        selectedSlot: this.selected,
      }
    },

    computed: {

      matchesUserDate: function () {
        //console.log(this.usersDate, this.date)
        if (this.usersDate === this.date) return true
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

        onSelectRow: function (nrAvail, timeLabel, chosenSlot ) {
        //this.selectedSlot = chosenSlot
        // User selected a Row or the Switch, fire event for parent
        console.log("Selected a Row. NrAvail:", nrAvail, 'timeLabel', timeLabel, 'chosenSlot', chosenSlot)
        //this.$emit('row-selected', this.date, this.selectedSlot, timeLabel )

        // Show a pop-up allowing user to add/remove number of passengers
        // to this time slot.
        // Only show if there are greater than Zero pilots avialable for this slot.
        // (otherwise some sort of "shake" to imply no would be slick...)

        //


      },

      formatAvail: function () {
        // Just grab the Observer object's value and return it.
        //const availStr = slotObj[key]
        //return slotObj
      },

      getSelectedColour: function () {
        // if (this.notEnoughAvailability(nrAvail)) return 'silver'
        // if (key === this.selectedSlot) return 'success darken-2'
        return ''
      },
      getClockColour: function () {
        // if (this.notEnoughAvailability(nrAvail)) return 'grey lighten-1'
        // if (key === this.selectedSlot) return 'success darken-2'
        return ''
      },
      //getClockIcon: function (nrAvail, key) {
      getClockIcon: function () {
        // if (this.notEnoughAvailability(nrAvail)) return this.clockIconOutline
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

  .listItem {
    min-height: 55px;
    min-width: 270px;
    padding-top: 0.15em;
    border-bottom: 1px solid rgb(218, 218, 218);
    background-color: white !important;
  }

  /* Gives us a bit more left/right space */
  .v-list-item {
    padding: 0 14px;
  }


  /* Format pesky Time label */
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

</style>