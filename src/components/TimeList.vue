<template>

  <div
    class="timeListerBox mx-auto elevation-2 rounded"
  >

    <div 
      class="TLHeader white--text grey darken-2"
    >
      <h3 :class="'selectedTitleColour' : matchesUserDate">
        {{titleDate.abbreviation}}
      </h3>
      <div>{{titleDate.fullDate}}</div>

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
      v-model="selectedSlot"
      color="indigo"
      active-class="success--text text--darken-2"
    >
      <v-list-item
        v-for="(nrAvail, label, key) in items"
        :key="key"
        :ripple="false"
        class="listItem"
        dense
        @click="onSelectRow(nrAvail, label, key)"
      >
        <v-list-item-icon>
          <v-icon v-text="tmpIcon"></v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>
            <span class="time" v-html="formatTime(label)"></span>
            <v-chip
              class="availability" 
              v-html="formatAvail(nrAvail)"
              outlined
            ></v-chip>
            <span class="description">Available</span>
          </v-list-item-title>
        </v-list-item-content>

        <v-list-item-action>
          <v-switch 
            :input-value="isSelected(key)"
            inset 
            color="success"
          ></v-switch>
        </v-list-item-action>

      </v-list-item>

      
    </v-list-item-group>
Selected: {{matchesUserDate}}
  </div>

</template>

<script>
  import { parseISO, format } from 'date-fns'

  export default {
    name: "TimeList",

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
    }, 

    data () {
      return {
        tmpIcon: 'mdi-wifi',
        items: this.timesObj,
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
      
    },

    methods: {

      isSelected: function (key) {
        // Need to figure out if this Select is part of the selected row or not.
        //console.log('key', key)
        if (key !== this.selectedSlot) {
          return false
        }
        return true
      },

      onSelectRow: function (nrAvail, timeLabel, chosenSlot ) {
        this.selectedSlot = chosenSlot
        // User selected a Row or the Switch, fire event for parent
        //console.log("Selected a Row. NrAvail:", nrAvail, 'timeLabel', timeLabel, 'chosenSlot', chosenSlot)
        this.$emit('row-selected', this.date, this.selectedSlot, timeLabel )
      },
      onUnselectRows: function () {
        this.selectedSlot = -1
      },

      formatAvail: function (slotObj) {
        // Just grab the Observer object's value and return it.
        //const availStr = slotObj[key]
        return slotObj
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
    border-width: 1px !important;
    border-color: rgb(211, 211, 211) !important;
    /* background-color: rgb(248, 239, 255); */
  }
    /* .selectedBorder {
      padding: 0;
      border-style: solid !important;
      border-width: 4px !important;
      border-color: rgba(var(--fzselected-color), 0.3) !important;
    }  */
    .boxDisplaySize {
      
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

  .TLHeader {
    position: relative;
  }
    .TLHeader h3 {
      font-size: 1.6em;
      position: relative;
    }
    /* .usersDateIcon {
      display: none;
    } */
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


#usersDateAvatar {
  position: absolute; 
  top: 50%; 
  right: -6px; 
  margin-top: -18px;
  z-index: 100;
}

</style>