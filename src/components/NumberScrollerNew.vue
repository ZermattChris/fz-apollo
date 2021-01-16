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
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn>

      <span>
        
      </span>

      <v-btn
        color="pink"
        dark
        small
        right
        fab
        absolute
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
      required: true,
    },
    min: {
      type: [String, Number],
      required: true,
    },
    max: {
      type: [String, Number],
      required: true,
    },
  }, 

  data () {
    return {
      myVal: this.value,

      iconPlus:  mdiPlusCircleOutline,
      iconMinus: mdiMinusCircleOutline,

    }
  },

  methods: {
    onDown: function () {
      //console.log('decrement ' + inputsVal)
      this.myVal--
    },
    onUp: function () {
      // console.log('increment')
      // console.log('Before: ' + this.myVal)
      this.myVal++
      // console.log('After: ' + this.myVal)
    }
  },


  
}

</script>

<style scoped>

.addPassengersBox {
  border: none;
}


</style>