<template>
  <div>

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

    <div class="tweaker v-text-field__details">
      <div class="v-messages theme--light">
        <div class="v-messages__wrapper">
          {{scrollerMessage}}
        </div>
      </div>
    </div>


</div>
</template>

    
<script>
// @ is an alias to /src

import { mdiPlusCircleOutline, mdiMinusCircleOutline } from '@mdi/js';

export default {
  name: "NumberScroller",

  props: {
    value: String,
    min: String,
    max: String,
    minMessage: String,
    maxMessage: String
  }, 

  data () {
    return {
      myVal: this.value,
      prevVal: this.value,

      focused: false,

      iconPlus:  mdiPlusCircleOutline,
      iconMinus: mdiMinusCircleOutline,

      scrollerMessage: ''
    }
  },

  methods: {
    onInput: function (val) {
      // If user's typed in random garbage, needs to be reset to prev Number val.
      let cleanedVal = parseInt(val)
      //console.log(Object.is(val, Number.NaN))
      if (Object.is(cleanedVal, Number.NaN) === true) {
        console.log('NaN found! Prev Val: ' + this.prevVal)
        this.myVal = this.prevVal
        return
      }

      this.myVal = cleanedVal

      // Check that we're in range.
      // Maybe do some sort of animation to show we've hit the end?
      if (this.myVal >= this.max) this.atMaxVal()
      if (this.myVal <= this.min) this.atMinVal()
      if (this.myVal > this.min && this.myVal < this.max) this.scrollerMessage = ''
      //console.log('Emit Event: ' + this.myVal + ' Min: ' + this.min + ' Max: ' + this.max)
      
      this.prevVal = this.myVal

      this.$emit('input', this.myVal)
    },
    atMaxVal: function () {
      this.myVal = this.max
      this.scrollerMessage = this.maxMessage
      console.log('Max msg: ' + this.scrollerMessage)
    },
    atMinVal: function () {
      this.myVal = this.min
      this.scrollerMessage = this.minMessage
      console.log('Min msg: ' + this.scrollerMessage)
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
  },

  // computed: {
  //   getMessage: {
  //     return 'hello'
  //   },
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
  margin-bottom: 8px;
  height: 56px;
  max-width: 200px;
  border-color: rgba(0, 0, 0, 0.4) !important;
  background-color: rgb(255, 255, 255) !important;
}
  .tweaker {
    padding: 0 12px 0 0;
    min-height: 17px;
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