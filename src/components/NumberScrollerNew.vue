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
        @click="onClick(-1)"
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
        @click="onClick(1)"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </div>

</template>

    
<script>
// @ is an alias to /src

// import { mdiPlus, mdiMinus } from '@mdi/js';

export default {
  name: "NumberScrollerSmall",

  props: {

    value: {
      type: [String, Number],
      default: 0
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

      // iconPlus:  mdiPlusCircleOutline,
      // iconMinus: mdiMinusCircleOutline,

    }
  },

  methods: {
    onClick: function (val) {
      console.log('click ' + val)
      this.myVal = this.myVal + val
    },
  },


  
}

</script>

<style scoped>

.addPassengersBox {
  border: none;
}


</style>