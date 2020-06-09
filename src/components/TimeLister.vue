<template>

  <v-list
    class="timeListerBox mx-auto"
    :class="{ 'selectedBorder': selected }"
    max-width="320"
    min-width="290"
    elevation="2"
    tile
    :dense="isDense"
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
        v-for="(item, i) in items"
        :key="i"
        class="listItem"
      >
        <v-list-item-icon>
          <v-icon v-text="tmpIcon"></v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title v-text="item.time + ' X Places Available'"></v-list-item-title>
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
Selected: {{selected}}
  </v-list>

</template>

<script>
  import { parseISO, format } from 'date-fns'

  export default {
    name: "TimeLister",

    props: {
      dense: {
        type: [Boolean, String],
        required: false,
        default: false,
      },
      selected: {
        type: Boolean,
        default: false
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
      xxxxx: function () {
        
      }
    },

    mounted() {
      //console.log(this.dates)
      
    },


  }

</script>

<style scoped>
  .timeListerBox {
    display: inline-block;
    /* background-color: rgb(244, 240, 255); */
  }
  .v-list--dense {
    margin-left: 10px !important;
    margin-right: 10px !important;
    position: relative;
    top: -30px;
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
    /* padding-bottom: 1px; */
    border-bottom: 1px solid rgb(218, 218, 218);
  }

/* .v-application .grey.lighten-5 {
    border-radius: 4px;
    border: 4px solid lime !important;
} */

</style>