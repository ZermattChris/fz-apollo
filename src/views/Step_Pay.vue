<template>
  <div class="stepPay">
    
    <PageHeader title="5. Payment Gateway">
      This module will be added once we get our process fine tuned.
    </PageHeader>

    <div ref="card"></div>




    <!-- <v-btn 
      id="checkout-button"
      @click="onTestClick"
    >Test Checkout</v-btn>

    <div class="mt-6">
      {{message}}
    </div> -->

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
        message: ' - - ',

        card: undefined,
      }
    },

    created() {


    },
    async mounted() {

      this.stripe = await loadStripe(process.env.VUE_APP_STRIPE_PUBLIC_KEY_TEST)
      
      this.createAndMountFormElements()

    },


    computed: {
      
    },

    methods: {

      createAndMountFormElements() {

        let elements = this.stripe.elements()

        // works a charme!
        let card = elements.create('card')
        card.mount(this.$refs.card)

      },



  //  handleClick = async (event) => {
  //   // Get Stripe.js instance
  //   const stripe = await stripePromise;

  //   // Call your backend to create the Checkout Session
  //   const response = await fetch('/create-checkout-session', { method: 'POST' });

  //   const session = await response.json();

  //   // When the customer clicks on the button, redirect them to Checkout.
  //   const result = await stripe.redirectToCheckout({
  //     sessionId: session.id,
  //   });

  //   if (result.error) {
  //     // If `redirectToCheckout` fails due to a browser or network
  //     // error, display the localized error message to your customer
  //     // using `result.error.message`.
  //   }
  // }



      
      onTestClick: async function () {
        this.message = 'Clicked the Test Checkout button.'
        
        // // Get Stripe.js instance
        // const stripe = await stripePromise;

        // // Call your backend to create the Checkout Session
        // const response = await fetch('/create-checkout-session', { method: 'POST' });

        // const session = await response.json();

        // // When the customer clicks on the button, redirect them to Checkout.
        // const result = await stripe.redirectToCheckout({
        //   sessionId: session.id,
        // });

        // if (result.error) {
        //   // If `redirectToCheckout` fails due to a browser or network
        //   // error, display the localized error message to your customer
        //   // using `result.error.message`.
        // }
      },

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