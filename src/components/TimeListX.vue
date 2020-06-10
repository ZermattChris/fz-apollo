<template>

  <v-sheet 
    class="myDummy d-flex align-center justify-center"
    
  >
    Dummy <slot></slot>
  </v-sheet>

</template>

<script>

  export default {
    name: "TimeListX",

    data () {
      return {
        
      }
    },

  }

</script>

<style scoped>
  .myDummy {
    margin: 0 auto;
    padding: 0;
    width:100%;
    /* iPhone 5 screen size is 320 */
    max-width: 320px;   
    height:585px;
    background-color: rgb(238, 220, 240);
    /* outline: 1px solid lime; */
    border-radius: 0;
  }
</style>