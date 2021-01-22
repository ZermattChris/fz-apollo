<template>

  <div 
    id="slotContainer"
    @click="onClickedRow"
  >
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
            v-html="placesFree + ' Places free'"
            outlined
          />
      </v-list-item-title>
    </v-list-item-content>  

    <div id="passengerInputBox"
      :hidden="!isExpanded()"
    >
      <div
        class="addPassengersBox"
      >
        <v-btn
          class="ml-7"
          :class="(passengersInSlot == myMin) ? 'disabledButton' : ''"
          color="pink"
          dark
          small
          left
          fab
          absolute
          @click="onMinus"
        >
          <v-icon>mdi-minus</v-icon>
        </v-btn>

        <span style="position:relative; top:8px; max-width: 100px;" class="">
          Passengers {{passengersInSlot}}
        </span>

        <v-btn
          class="mr-7"
          :class="(passengersInSlot == myMax) ? 'disabledButton' : ''"
          color="pink"
          dark
          small
          right
          fab
          absolute
          @click="onPlus"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </div>
    </div>

    <!-- Total number of passengers selected in this slot (hidden if 0) -->
    <v-btn
      id="slotPassengersTotalBtn"
      v-show="(passengersInSlot > 0)"
      fab
      small
    >
      {{ passengersInSlot }}
    </v-btn>
    
  </div>

</template>

<script>
  import { mdiClockOutline, mdiPlusCircleOutline, mdiMinusCircleOutline, mdiClockCheck } from '@mdi/js'

  // import NumberScrollerNew from "@/components/NumberScrollerNew.vue"

  export default {
    name: "TimeSlot",
    components: {
      // NumberScrollerNew,
    },

    props: {
      slotDate: {
        type: String,
        required: true,
      },
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
      iconPlus:  mdiPlusCircleOutline,
      iconMinus: mdiMinusCircleOutline,

        // Data
        originalPilotsAvail: this.pilotsAvail,
        passengersInSlot: this.$store.getters.getStoredPassengersInSlot(this.slotDate, this.index),

        myMin: 0,
        myMax: this.pilotsAvail,
      }
    },

    // created() {
    //   this.$store.getters.getStoredPassengersInSlot(this.slotDate, this.index)
    // },

    computed: {

      storedPassengers () {
        return this.originalPilotsAvail - this.passengersInSlot
      },
      placesFree () {
        return this.originalPilotsAvail - this.passengersInSlot
      },


      flightDateChanged () {
        return this.$store.state.flightDate
      },

    },

    watch: {

      // Whooop! This works! I've finally remembered how to handle this reactive shit.
      flightDateChanged: function(newVal) {
        //console.log('newVal',newVal, 'oldVal',oldVal)
        if (newVal !== this.slotDate) {
          // Clear everything shown visually on this slot.
          this.passengersInSlot = 0
        }
      }

    },

    methods: {

      onMinus: function () {
        if (this.passengersInSlot > this.myMin) {
          this.passengersInSlot--
          this.onChangedNrPassengers()
        }
        //console.log('clicked minus. Val: ' + this.passengersInSlot)
      },
      onPlus: function () {
        if (this.passengersInSlot < this.myMax) {
          this.passengersInSlot++
          this.onChangedNrPassengers()
        }
        //console.log('clicked plus. Val: ' + this.passengersInSlot)
      },



      onChangedNrPassengers: function () {
        // Make sure we've set the flightDate to this TimeSlot's date.
        this.$store.dispatch('setFlightDate', this.$store.state._activeDate)

        //console.log("Passengers in slot: " + this.passengersInSlot)
        // This looks like a good place to do the updating of the Passengers in the vuex helper
        // functions. Pass in the Slot's index, Date String and number of Passengers.
        const payload = {'index':this.index, 'timeString':this.timeStr, 'passengers':this.passengersInSlot}
        return this.$store.dispatch('setSlotPassengers', payload)
      },



      onClickedRow: function (ev) {
        // fire event that TimeList can listen for that deselects all of the other TimeSlots
        this.$emit('selected', this.index)
        ev.stopPropagation()   // Needed this otherwise the event was being swallowed by the TimeList.
      },


      isExpanded: function () {
        //console.log("Index " + this.index + ". selected slot's index: " + this.selectedSlotIndex)
        if (this.index === this.selectedSlotIndex) return true
        return false
      },
      

      // these can all be computed props.
      getSelectedColour: function () {
        if (this.pilotsAvail === 0) return 'silver'
        if (this.placesFree === 0) return 'silver'
        return 'success darken-2'
      },
      getClockColour: function () {
        if (this.pilotsAvail == 0) return 'grey lighten-1'
        return 'success darken-2'
      },
      getClockIcon: function () {
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

#slotPassengersTotalBtn {
  position: absolute;
  z-index: 20;
  right: -10px;
  top: 3px;
  font-size: 1.2em;
  font-weight: bold;
  color: black !important;
  background-color: white;
  border: 3px rgb(206, 86, 0) solid !important;
}


.addPassengersBox {
  border: none;
}
.disabledButton {
  color: silver;
  box-shadow: none;
  background-color: white !important;
  border: 1px grey solid !important;
}

</style>