<template>

    <div
      class="addPassengersBox"
    >
      <v-btn
        class="ml-7"
        :class="(myVal == myMin) ? 'disabledButton' : ''"
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
        Passengers {{myVal}}
      </span>

      <v-btn
        class="mr-7"
        :class="(myVal == myMax) ? 'disabledButton' : ''"
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
      if (this.myVal > this.myMin) {
        this.myVal--
        this.$emit('changed', this.myVal)
      }
      //console.log('clicked minus. Val: ' + this.myVal)
    },
    onPlus: function () {
      if (this.myVal < this.myMax) {
        this.myVal++
        this.$emit('changed', this.myVal)
      }
      //console.log('clicked plus. Val: ' + this.myVal)
    },
  },


  
}

</script>

<style scoped>

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