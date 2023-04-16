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

      if (!window.confirm( this.$t('nav.reset-data') )) {
        return
      }

      this.$store.dispatch('setFlightDate', '')
      this.$store.dispatch('setArriveDate', '')
      this.$store.dispatch('setDepartDate', '')
      this.$store.dispatch('setFlight', '')
      this.$store.dispatch('setWantsPhotos', false)

      this.$store.dispatch('clearSlotsPassengers')


      window.localStorage.clear()
      window.sessionStorage.clear()    // this should reset all of the Stripe data as well.

      //return to the Start page and reload. Fingers crossed.
      if (this.$route.name !== 'Start') {
        this.$router.push('/') // return to step 1
      }

      window.location.reload()

    },

    
  },


  
}

</script>

<style scoped>

  #reset {
    width: 100%;
    height: 100%;
    position: absolute;
    top:0; left:0;
  }



</style>