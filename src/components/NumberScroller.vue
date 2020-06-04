<template>
  <v-card class="grey lighten-5" style="max-width:300px;">
    <v-icon
        large
        @click="onDown"
    >
        {{iconMinus}}
    </v-icon>

    <v-input>
        <v-text-field 
            v-model="value"
            style="max-width:50px;"
        />
    </v-input>

    <v-icon
        large
        @click="onUp"
    >
        {{iconPlus}}
    </v-icon>
  </v-card>
</template>

    
<script>
// @ is an alias to /src

import { mdiPlusCircleOutline, mdiMinusCircleOutline } from '@mdi/js';

export default {
  name: "NumberScroller",
  components: {
      
  },
  data () {
    return {
      value: 0,

      iconPlus:  mdiPlusCircleOutline,
      iconMinus: mdiMinusCircleOutline,

    }
  },


  methods: {
    onDown: function () {
      console.log('decrement')
      this.value--
    },
    onUp: function () {
      console.log('increment')
      this.value++
    }
  }
}

</script>

<style scoped>
v-text-field {
    width:100px;
}
v-card {
    width: 300px !important;
}
</style>