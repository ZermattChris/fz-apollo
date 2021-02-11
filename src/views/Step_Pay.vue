<template>
  <div class="stepPay">
    
    <PageHeader title="5. Payment Gateway">
      This module will be added once we get our process fine tuned.
    </PageHeader>

    <v-btn 
      id="checkout-button"
      @click="onTestClick"
    >Test Checkout</v-btn>

    <div class="mt-6">
      {{message}}
    </div>

  </div>
</template>

// Use this, other stuff old, or odd...
// https://stripe.com/docs/checkout/integration-builder

// https://vuestripe.com/stripe-elements/getting-started
// https://codesandbox.io/s/7j4kj488yx?file=/src/App.vue
// https://testdriven.io/blog/accepting-payments-with-stripe-vuejs-and-flask/


<script>
  import PageHeader from '@/components/PageHeader.vue'

  import {loadStripe} from '@stripe/stripe-js'

  export default {
    name: "Step_Pay",
  
    components: {
      PageHeader,
    },

    data () {
      return {
        stripe: null,
        message: ' - - '
      }
    },

    created() {


    },
    async mounted() {

      this.stripe = await loadStripe(process.env.VUE_APP_STRIPE_PUBLIC_KEY_TEST)
      this.createAndMountFormElements()

    },


    computed: {
      
      // userFlightDate: function () {
      //   return this.$store.state.flightDate
      // },
      // usersGroupSize: function () {
      //   return this.$store.getters.getTotalPassengers
      // },
      
    },

    methods: {

      createAndMountFormElements() {

      },


      onTestClick: function () {
        this.message = 'Clicked the Test Checkout button.'
      },

      // setUserDate: function (dateStr) {
      //   //console.log(dateStr)
      //   this.userTimeSlot = dateStr
      //   return dateStr
      // }
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