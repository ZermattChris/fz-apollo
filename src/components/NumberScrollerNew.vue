<template>

    <div
      class="addPassengersBox"
    >
      <v-btn
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

      <span style="max-width: 100px;">
        Passengers {{myVal}}
      </span>

      <v-btn
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

</template>

    
<script>
// @ is an alias to /src

import { mdiPlusCircleOutline, mdiMinusCircleOutline } from '@mdi/js';

export default {
  name: "NumberScrollerSmall",

  props: {

    value: {
      type: [String, Number],
      default: 0,
    },
    min: {
      type: [String, Number],
      default: 0,
    },
    max: {
      type: [String, Number],
      required: true,
    },
  }, 

  data () {
    return {
      myVal: this.value,
      myMin: this.min,
      myMax: this.max,

      iconPlus:  mdiPlusCircleOutline,
      iconMinus: mdiMinusCircleOutline,

    }
  },

  methods: {
    onMinus: function () {
      if (this.myVal > this.myMin) this.myVal--
      //this.myVal--
      //console.log('clicked minus. Val: ' + this.myVal)
    },
    onPlus: function () {
      if (this.myVal < this.myMax) this.myVal++
      //this.myVal++
      //console.log('clicked plus. Val: ' + this.myVal)
    },
  },


  
}

</script>

<style scoped>

.addPassengersBox {
  border: none;
}


</style>