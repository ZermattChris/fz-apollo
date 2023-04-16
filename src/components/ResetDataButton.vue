<template>

      <v-img
        @click="onClickedBtn"
          alt="FlyZermatt Logo"
          class="shrink"
          contain
          src="@/assets/FlyZermatt-logo-light.svg"
          transition="scale-transition"
          max-width="200"
          max-height="130"
          ref="fzlogo"
      />

</template>

    
<script>
// @ is an alias to /src

// import { mdiPlusCircleOutline, mdiMinusCircleOutline } from '@mdi/js';

export default {
  name: "DataResetButton",

  props: {

  }, 

  data () {
    return {
      

    }
  },

  // Lifecycle Hooks
  mounted () {

  },


  methods: {

    onClickedBtn: function () {
      console.log("clicked reset button")
    },

    
  },


  
}

</script>

<style scoped>

  #reset {
    outline: 1px maroon solid;
    width: 100%;
    height: 100%;
    position: absolute;
    top:0; left:0;
  }



</style>