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
            v-html="pilotsAvail + ' Pilots available'"
            outlined
          />
      </v-list-item-title>
    </v-list-item-content>

    <div 
      id="passengerInputBox"
      :hidden="!isSelected"
    >
      asdf
    </div>
    
  </div>

</template>

<script>
  import { mdiClockOutline, mdiMinusCircleOutline, mdiClockCheck } from '@mdi/js'

  //import NumberScrollerSmall from "@/components/NumberScrollerSmall.vue"

  export default {
    name: "TimeSlot",
    components: {
      //NumberScrollerSmall,
    },

    props: {
      index: {
        type: [Number],
        required: true,
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
      },
      // selectedSlot: {
      //   type: [Number],
      //   required: true,
      // },
    }, 

    data () {
      return {
        // Icons
        clockIcon: mdiClockOutline,
        clockIconOutline: mdiMinusCircleOutline,
        clockIconSelected: mdiClockCheck,
        // Data
        nrPassengersThisSlot: 0,
        isSelected: false,
      }
    },

    computed: {

      initSelected: function () {
        if (this.index === this.selectedSlot) return true
        return false
      },
      
    },

    methods: {

      onClickedRow: function () {
        //console.log("Clicked Row " + this.index + ". isSelected: " + this.isSelected)
        // toggle Passenger input box
        this.isSelected = true
        // fire event that TimeList can listen for that deselects all of the other TimeSlots
        //this.$emit('timeSlot-selected', this.index)
      },

      deselect: function () {
        this.isSelected = false
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


  .availability {
    position: relative;
    left: 0px;
    cursor: pointer;
    margin-left: 20px;
    margin-bottom: 1px;    /* fixes odd 1px jump bug */
  }

.theme--light.v-chip {
  color:inherit
}

/* *********** */
#passengerInputBox  {
  background-color: pink;
  width: 100%;
}

</style>