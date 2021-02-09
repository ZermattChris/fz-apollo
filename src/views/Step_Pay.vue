<template>
  <div class="stepPay">
    
    <PageHeader title="5. Payment Gateway">
      This module will be added once we get our process fine tuned.

      <v-btn id="checkout-button">Test Checkout</v-btn>
      
    </PageHeader>

  </div>
</template>

<script>
  import PageHeader from '@/components/PageHeader.vue'

  export default {
    name: "Step_Pay",
  
    components: {
      PageHeader
    },

    data () {
      return {
        
      }
    },

    created() {


    },
    mounted() {
      // "https://js.stripe.com/v3/"
      const plugin = document.createElement("script");
      plugin.setAttribute(
      "src",
      "https://js.stripe.com/v3/"
      );
      plugin.async = true;
      document.head.appendChild(plugin);
    },


    computed: {
      
      userFlightDate: function () {
        return this.$store.state.flightDate
      },
      usersGroupSize: function () {
        return this.$store.getters.getTotalPassengers
      },
      
    },

    methods: {
      onTestClick: function () {

      },

      setUserDate: function (dateStr) {
        //console.log(dateStr)
        this.userTimeSlot = dateStr
        return dateStr
      }
    },
  }

</script>

<style scoped>
.steps-controls {
  position: absolute;
  left:0; right: 0;
  text-align: center;
  margin: 0 auto;
}


</style>