<template>
  <v-card 
    class="scrollerContainer"
    :class="{ 'focused': focused }"
    flat
    outlined
    :ripple="false"
  >
    <v-icon
      size="100%"
      @click="onDown"
      @focus="focused = true"
      @blur="focused = false"
    >{{iconMinus}}</v-icon>

    <input 
      ref="numberInput"
      class="numberInput"
      :value="myVal" 
      @input="onInput($event.target.value)"
      @focus="focused = true"
      @blur="focused = false"
    >

    <v-icon
      size="100%"
      @click="onUp"
      @focus="focused = true"
      @blur="focused = false"
    >{{iconPlus}}</v-icon>

  </v-card>
</template>

    
<script>
// @ is an alias to /src

import { mdiPlusCircleOutline, mdiMinusCircleOutline } from '@mdi/js';

export default {
  name: "NumberScroller",

  props: ['value'], 

  data () {
    return {
      myVal: this.value,
      focused: false,

      iconPlus:  mdiPlusCircleOutline,
      iconMinus: mdiMinusCircleOutline,
    }
  },

  methods: {
    onInput: function (val) {
      this.myVal = val
      this.$emit('input', this.myVal)
      //console.log('Emit Event: ' + this.myVal)
    },
    onDown: function () {
      //console.log('decrement ' + inputsVal)
      this.myVal--
      this.onInput(this.myVal)
    },
    onUp: function () {
      // console.log('increment')
      // console.log('Before: ' + this.myVal)
      this.myVal++
      this.onInput(this.myVal)
      // console.log('After: ' + this.myVal)
    }
  }
}

</script>

<style scoped>

.scrollerContainer {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: stretch;
  box-sizing: border-box !important;
  padding: 7px !important;
  height: 56px;
  max-width: 200px;
  border-color: rgba(0, 0, 0, 0.4) !important;
  background-color: rgb(255, 255, 255) !important;
}
  .scrollerContainer.focused {
    border: 2px #6a1b9a solid !important;
    padding: 6px !important;
  }
  .scrollerContainer button {
    height: 100%;
  }

  input.numberInput {
    margin: 0;
    padding: 0 !important;
    text-align: center;
    width: 3em;
    font-size: 1.5em;
    font-weight: 600;
  }
    input:focus {
      /* remove the pesky box outline when selected */
      outline: white auto 0px !important;
    }


</style>