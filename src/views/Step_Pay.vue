<template>
  <div class="stepPay">
    
    <PageHeader title="4. Place Order">
      Using Stripe Elements to handle our online payments here. This is currently just a test environment.
    </PageHeader>

    <h4 class="mb-0">Line item of flights + photos prices</h4>
    <v-skeleton-loader
      type="list-item-three-line"
    ></v-skeleton-loader>




    <v-sheet id="payment-inputs-box" class="py-2 px-1 rounded" style="text-align:center; background-color:rgb(240,240,240); border: 1px rgb(220,220,220) solid;" elevation="0" >
      <div id="card" ref="card" style="width:98%; margin:0 auto; background-color:white"></div>
      <div id="card-errors" ref="card-errors"></div>
    </v-sheet>
    <p class="font-weight-thin" style="font-size:0.6em;">Payments by Stripe</p>

    <div id="payment-button-box" style="text-align:center;">
      <v-btn id="payment-button" ref="payment-button" type="submit"
        class="mt-8"
        @click="placeOrder"
      >
        Pay
      </v-btn>
    </div>

    <div class="mt-6 warning--text">
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


  // ----------- Card custom style ----------
  let cardStyle = {
    style: {
      base: {
        iconColor: '#464646',
        color: 'black',
        backgroundColor: '#f7f7f7',
        fontWeight: '500',
        fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
        fontSize: '14px',
        fontSmoothing: 'antialiased',
        ':-webkit-autofill': {
          color: '#fce883',
        },
        '::placeholder': {
          color: '#43097d',
        },
      },
      invalid: {
        iconColor: 'maroon',
        color: 'maroon',
      },
    },
    iconStyle: 'solid'
  }

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

        // Create and display the Card input field from Stripe.
        this.card = elements.create('card', cardStyle)
        this.card.mount(this.$refs.card)

      },

      placeOrder() {
        this.message = "Create Token..."
        let me = this
        this.stripe.createToken(this.card).then(function(result) {
          // Access the token with result.token
          if (result.error) {
            me.message = result.error.message
            me.hasCardErrors = true
            me.$forceUpdate()    // Forcing the DOM to update so the Stripe Element can update.
            return
          }
          // Call our API to handle token
          console.log(result.token)
        })
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