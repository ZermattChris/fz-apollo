<template>
  <div class="stepPay">
    
    <PageHeader title="4. Place Order">
      Using Stripe Elements to handle our online payments here. This is currently just a test environment.
    </PageHeader>

    <h4 class="mb-0"> There will be a simple line item listing of flights + photos and prices here.</h4>
    <v-skeleton-loader
      type="list-item-three-line"
    ></v-skeleton-loader>
    <v-skeleton-loader
      class="mt-n4 mb-6"
      type="list-item-three-line"
    ></v-skeleton-loader>




    <div id="card" ref="card"></div>
    <div id="card-errors" ref="card-errors"></div>

    <div id="payment-button-box" style="text-align:center;">
      <v-btn id="payment-button" ref="payment-button" type="submit"
        class="mt-8"
        @click="placeOrder"
      >
        Pay
      </v-btn>
    </div>

    <div class="mt-6 orange--text">
      {{message}}
    </div>


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

        let elements = this.stripe.elements({locale: 'auto'})

        // works a charme!
        let card = elements.create('card')
        card.mount(this.$refs.card)

      },

      placeOrder: async function () {
        this.message = "TODO: Send payment request via our internal payment handler to Stripe servers"
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