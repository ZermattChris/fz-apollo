<template>

  <v-list
    class="timeListerBox mx-auto"
    :class="{ 'selectedBorder': matchesUserDate, 'boxDisplaySize': !isDense }"
    elevation="2"
    tile
    :dense="!matchesUserDate"
  >

    <div 
      class="TLHeader"
      :class="{ 'white--text grey darken-2': !isDense, 'black--text grey lighten-1': isDense }"
    >
      <h3
      :class="{ 'whiteTextShadow': isDense, 'darkTextShadow': !isDense }">
        {{titleDate.abbreviation}}
      </h3>
      <div>{{titleDate.fullDate}}</div>
    </div>

    <v-list-item-group 
      v-model="selectedSlot"
      color="indigo"
      active-class="success--text text--darken-2"
    >
      <v-list-item
        v-for="(slotObj, key) in items"
        :key="key"
        :ripple="false"
        class="listItem"
        @click="onClickedRow(key+1)"
      >
        <v-list-item-icon>
          <v-icon v-text="tmpIcon"></v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>
            <span class="time" v-html="formatTime(slotObj)"></span>
            <v-chip
              class="availability" 
              v-html="formatAvail(slotObj)"
              outlined
            ></v-chip>
            <span class="description">Available</span>
          </v-list-item-title>
        </v-list-item-content>

        <v-list-item-action>
          <v-switch 
            inset 
            :dense="isDense"
            color="success"
          ></v-switch>
        </v-list-item-action>

      </v-list-item>

      
    </v-list-item-group>
Selected: {{matchesUserDate}}
  </v-list>

</template>

<script>
  import { parseISO, format } from 'date-fns'

  export default {
    name: "TimeList",

    props: {
      dense: {
        type: [Boolean, String],
        required: false,
        default: false,
      },
      usersDate: {
        type: String,
        default: ''
      },
      date: {
        type: String,
        required: true,
      },
      timesArray: {
        type: [Array, Object],
        required: true,
      },
    }, 

    data () {
      return {
        isDense: this.dense,
        tmpIcon: 'mdi-wifi',
        items: this.timesArray,
        selectedSlot: -1,
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
      // returnTimeKey: function (slotObj) {
      //    return this.formatTime(Object.keys(slotObj)[0])
      // }
      
    },

    methods: {

      onClickedRow: function (ev, chosenSlot) {
        this.selectedSlot = chosenSlot
        // User selected a Row or the Switch, fire event for parent
        console.log("Selected a Row.", ev)
      },

      formatAvail: function (slotObj) {
        // Just grab the Observer object's value and return it.
        const availStr = Object.values(slotObj)[0]
        return availStr
      },
      formatTime: function (slotObj) {
        // format into nice html for display.
        const timeKey = Object.keys(slotObj)[0]
        const htmlSnippet = "<span class='hour'>" + this.getHours(timeKey) + "</span><span class='minute'>:" + this.getMins(timeKey) + "</span>"
        return htmlSnippet
      },
        getHours: function (timeStr) {
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

    mounted() {
      //console.log(this.dates)
      
    },


  }

</script>

<style scoped>
  .timeListerBox {
    display: inline-block;
    /* this needs to match the Selected Border width below. */
    border-style: solid !important;
    border-width: 4px !important;
    border-color: white !important;
  }
    .selectedBorder {
      border-style: solid !important;
      border-width: 4px !important;
      border-color: rgba(var(--fzselected-color), 0.3) !important;
    } 
    .boxDisplaySize {
      min-width: 330px;
    }

  .v-list--dense {
    margin-left: 10px !important;
    margin-right: 10px !important;
    position: relative;
  }

  .darkTextShadow {
    text-shadow: 0px 0px 2px black, 0px 0px 1px black;
  }
  .whiteTextShadow {
    text-shadow: 0px 0px 2px rgb(255, 255, 255), 0px 0px 1px rgb(255, 255, 255);
  }

  .TLHeader h3 {
    font-size: 1.6em;
  }
  /* .TLHeader div {
    text-shadow: 0px 0px 2px black, 0px 0px 1px black;
  } */
  .listItem {
    padding-top: 0.15em;
    border-bottom: 1px solid rgb(218, 218, 218);
  }

  /* Format pesky Time label */
  .time {
    font-size: larger;
    position: absolute;
    top: 0.8em;
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

  .v-chip.v-chip--outlined {
    border-width: 3px;
    font-size: larger;
    font-weight: bolder;
    margin-left: 2em;
  }

  .description {
    padding-left: 0.5em;
  }


</style>