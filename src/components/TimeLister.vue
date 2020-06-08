<template>
    
  <v-list
    class="timeListerBox mx-auto"
    max-width="320"
    min-width="290"
    :dense="isDense"
  >

    <div class="TLHeader">
      <h3>{{titleDate.abbreviation}}</h3>
      <div>{{titleDate.fullDate}}</div>
    </div>

    <v-list-item-group 
      v-model="model" 
      mandatory 
      color="indigo"
    >
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
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
      date: {
        type: String,
        required: true,
      },
    }, 

    data () {
      return {
        isDense: this.dense,
        tmpIcon: 'mdi-wifi',
        items: [
          { id: 1, time: '08:30', avail: 6 },
          { id: 2, time: '10:15', avail: 1 },
          { id: 3, time: '11:45', avail: 0 },
          { id: 4, time: '13:15', avail: 4 },
          { id: 5, time: '14:45', avail: 2 },
          { id: 6, time: '16:15', avail: 5 },
          { id: 7, time: '17:00', avail: 6 },
          { id: 8, time: '19:00', avail: 2 },
        ],
        model: 1,
      }
    },

    computed: {
      titleDate: function () {
        // replace with an API call when its live.
        console.log(this.date)
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
    background-color: rgb(244, 240, 255);
  }
  .v-list--dense {
    margin-left: 10px !important;
    margin-right: 10px !important;
    position: relative;
    top: -30px;
  }

  .TLHeader h3 {
    font-size: 1.6em;
  }
</style>