<template>
  <div>

    <v-card 
      class="scrollerContainer"
      :class="{ 'focused': focused }"
      flat
      outlined
      :disabled="!isEnabled"
    >
      <v-icon
        id="decrement"
        size="100%"
        @click="onDown"
        @focus="focused = true"
        @blur="focused = false"
      >{{iconMinus}}</v-icon>

      <input 
        ref="numberInput"
        class="nrInput"
        :value="myVal" 
        readonly
        @input="onInput($event.target.value)"
        @focus="focused = true"
        @blur="focused = false"
      >

      <v-icon
        id="increment"
        size="100%"
        @click="onUp"
        @focus="focused = true"
        @blur="focused = false"
      >{{iconPlus}}</v-icon>

    </v-card>

    <!-- <div class="tweaker v-text-field__details">
      <div class="v-messages theme--light">
        <div class="v-messages__wrapper">
          {{scrollerMessage}}
        </div>
      </div>
    </div> -->


</div>
</template>

    
<script>
// @ is an alias to /src

import { mdiPlusCircleOutline, mdiMinusCircleOutline } from '@mdi/js';

export default {
  name: "NumberScrollerSmall",

  props: {
    enabled: {
      type: Boolean,
      default: true,
    },
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
    minMessage: String,
    maxMessage: String
  }, 

  data () {
    return {
      myVal: this.value,
      prevVal: this.value,

      isEnabled: this.enabled,

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
        //console.log('NaN found! Prev Val: ' + this.prevVal)
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

      this.$emit('input', this.myVal) // This is the return of v-model 2-way binding.
      //this.$emit('change', this.myVal) // Standard 'change' event.
    },
    atMaxVal: function () {
      this.myVal = this.max
      this.scrollerMessage = this.maxMessage
      //console.log('Max msg: ' + this.scrollerMessage)
      this.$emit('at-max-value', this.myVal)
    },
    atMinVal: function () {
      this.myVal = this.min
      this.scrollerMessage = this.minMessage
      //console.log('Min msg: ' + this.scrollerMessage)
      this.$emit('at-min-value', this.myVal)
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

  watch: {
    value: function (val) {
      this.myVal = val
      this.prevVal = val
    },
  }
}

</script>

<style scoped>

.scrollerContainer {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: stretch;
  box-sizing: b  order-box !important;
  padding: 5px !important;
  height: 50px;
  border-color: rgba(0, 0, 0, 0.4) !important;
  background-color: rgb(255, 255, 255) !important;
}
  .tweaker {
    padding: 0 12px 0 0;
    min-height: 18px;
  }
  .scrollerContainer.focused {
    border: 2px #6a1b9a solid !important;
    padding: 6px !important;
  }
  .scrollerContainer button {
    height: 100%;
  }

  input.nrInput {
    margin: 0;
    padding: 0 !important;
    text-align: center;
    width: 3em;
    font-size: 1.5em;
    font-weight: 600;
  }
    yuoyinput.nrInput:focus {
      /* remove the pesky box outline when selected */
    }


</style>