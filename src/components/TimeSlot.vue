<template>

  <div 
    id="slotContainer"
    @click="onClickedRow"
  >
<!-- {{selectedSlotIndex}} <br/>
{{ isExpanded() ? "Opened" : "Closed" }} -->
    <!-- Clock Icon -->
    <v-list-item-icon>
      <v-icon 
        class="clockIcon"
        v-text="getClockIcon(pilotsAvail, index)"
        :color="getClockColour(pilotsAvail, index)"
        size="28"
      ></v-icon>
    </v-list-item-icon>

    <!-- Pilots Avaliable. -->
    <v-list-item-content>
      <v-list-item-title>
          <span class="time" v-html="formatTime(timeStr)"></span>
          <v-chip
            class="availability" 
            :color="getSelectedColour()"
            v-html="pilotsAvail + ' Places free'"
            outlined
          />
      </v-list-item-title>
    </v-list-item-content>  

    <div id="passengerInputBox"
      :hidden="!isExpanded()"
    >
      <NumberScrollerNew
        :max="pilotsAvail"
        @changed="onChangedNrPassengers"
      />
    </div>
    
  </div>

</template>

<script>
  import { mdiClockOutline, mdiMinusCircleOutline, mdiClockCheck } from '@mdi/js'

  import NumberScrollerNew from "@/components/NumberScrollerNew.vue"

  export default {
    name: "TimeSlot",
    components: {
      NumberScrollerNew,
    },

    props: {
      index: {
        type: [Number],
        required: true,
        default: -1
      },
      selectedSlotIndex: {
        type: [Number],
        default: -1
      },
      pilotsAvail: {
        type: [Number],
        required: true,
        default: 0
      },
      timeStr: {
        type: String,
        required: true,
        default: ''
      }
    }, 

    data () {
      return {
        // Icons
        clockIcon: mdiClockOutline,
        clockIconOutline: mdiMinusCircleOutline,
        clockIconSelected: mdiClockCheck,

        // Data
        originalPilotsAvail: this.pilotsAvail,
        passengersInSlot: 0,
      }
    },


    methods: {

      onChangedNrPassengers: function ( val) {

        // TODO.
        // Just going to silently swap the date and passengers. Will make fancier at some point
        // if we really think this is needed.
        //
        // Need to check if we're still in the current flightDate or if we've changed to a different date.
        // if different, need to ask user if they want to change (clearing old passenger inputs)

        // Make sure we've set the flightDate to this TimeSlot's date.
        this.$store.dispatch('setFlightDate', this.$store.state._activeDate)

        this.passengersInSlot = val
        //console.log("Passengers in slot: " + this.passengersInSlot)
        // This looks like a good place to do the updating of the Passengers in the vuex helper
        // functions. Pass in the Slot's index, Date String and number of Passengers.
        const payload = {'index':this.index, 'timeString':this.timeStr, 'passengers':val}
        return this.$store.dispatch('setSlotPassengers', payload)
      },



      onClickedRow: function (event) {
        // fire event that TimeList can listen for that deselects all of the other TimeSlots
        this.$emit('selected', this.index)
        event.stopPropagation()   // Needed this otherwise the event was being swallowed by the TimeList.
      },


      isExpanded: function () {
        //console.log("Index " + this.index + ". selected slot's index: " + this.selectedSlotIndex)
        if (this.index === this.selectedSlotIndex) return true
        return false
      },
      

      getSelectedColour: function () {
        if (this.pilotsAvail == 0) return 'silver'
        return 'success darken-2'
      },
      getClockColour: function () {
        if (this.pilotsAvail == 0) return 'grey lighten-1'
        return 'success darken-2'
      },
      getClockIcon: function () {
        // TODO This needs to be updated when selecting a Slot works, to
        // TODO show a clock icon when there are passengers on this slot.
        if (this.pilotsAvail == 0) return this.clockIconOutline
        return this.clockIcon
      },

      formatTime: function (key) {
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

  #slotContainer {
    display: inline-flex;
    flex-wrap: wrap;
    width: 100%;
  }
  

  .clockIcon {
    position: relative;
    left: -0px;
    top: 2px;
    flex-basis: 50px;
  }

  /* Format pesky Time timeStr */
  .time {
    font-size: 1.25em;
    position: absolute;
    top: 1.1em;
    left: 50px;
    flex-basis: 60px;
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


  .availability {
    position: relative;
    left: 0px;
    cursor: pointer;
    margin-left: 20px;
    margin-bottom: 1px;    /* fixes odd 1px jump bug */
    flex-basis: 100px;
  }

.theme--light.v-chip {
  color:inherit
}

/* *********** */
#passengerInputBox  {
  min-height: 50px;
  flex-basis: 300px;
}

</style>