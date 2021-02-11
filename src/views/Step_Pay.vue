<template>
  <div class="stepPay">
    
    <PageHeader title="5. Payment Gateway">
      This module will be added once we get our process fine tuned.
    </PageHeader>

  

    <stripe-checkout
      ref="checkoutRef"
      mode="payment"
      :pk="publishableKey"
      :line-items="lineItems"
      :success-url="successURL"
      :cancel-url="cancelURL"
      @loading="v => loading = v"
    />

    <v-btn id="checkout-button">Test Checkout</v-btn>

  </div>
</template>

// Use this, other stuff old, or odd...
// https://stripe.com/docs/checkout/integration-builder

// https://vuestripe.com/stripe-elements/getting-started
// https://codesandbox.io/s/7j4kj488yx?file=/src/App.vue
// https://testdriven.io/blog/accepting-payments-with-stripe-vuejs-and-flask/


<script>
  import PageHeader from '@/components/PageHeader.vue'

  import { StripeCheckout } from '@vue-stripe/vue-stripe'

  export default {
    name: "Step_Pay",
  
    components: {
      PageHeader,
      StripeCheckout
    },

    data () {
      this.publishableKey = process.env.STRIPE_PUBLISHABLE_KEY;
      return {
      loading: false,
      lineItems: [
        {
          price: 'some-price-id', // The id of the one-time price you created in your Stripe dashboard
          quantity: 1,
        },
      ],
      successURL: 'your-success-url',
      cancelURL: 'your-cancel-url',
      }
    },

    created() {


    },
    mounted() {
      // // Install Stripe.
      // // "https://js.stripe.com/v3/"
      // const plugin = document.createElement("script");
      // plugin.setAttribute(
      // "src",
      // "https://js.stripe.com/v3/"
      // );
      // plugin.async = true;
      // document.head.appendChild(plugin);
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
      onTestClick: function () {
        // You will be redirected to Stripe's secure checkout page
        this.$refs.checkoutRef.redirectToCheckout();

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