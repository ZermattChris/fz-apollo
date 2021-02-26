<template>
  <div class="stepPay">
    
    <PageHeader title="4. Place Order">
      Using Stripe Elements to handle our online payments here. This is currently just a test environment.
    </PageHeader>

    <h4 class="mb-0">Line item of flights + photos prices</h4>
    <v-skeleton-loader
      type="list-item-three-line"
    ></v-skeleton-loader>




    <!-- Credit Card input - Stripe -->
    <!-- <v-sheet 
      id="payment-inputs-box" 
      class="mt-2 py-2 px-2 rounded" 
      style="position:relative; margin:0 auto; max-width:450px; text-align:center; background-color:#f7f7f7; border: 1px rgb(220,220,220) solid;" 
      elevation="0" 
    >
      <label for="card" style="font-size:0.7em; position:absolute; top:-15px; left:0px;">
        Credit or Debit card
      </label>
      <div 
        id="card" 
        ref="card" 
        style="width:98%; margin:0 auto;"
      ></div>
      <p class="font-weight-thin" style="font-size:0.7em; text-align:right; position:absolute; right:5px; bottom:-33px;">Payments by Stripe</p>
    </v-sheet> -->

    <div id="payment-button-box" style="text-align:center;">
      <v-btn id="payment-button" ref="paymentButton" type="submit"
        class="mt-4"
        @click="onOrderBtn"
      >
        Pay Now
      </v-btn>
    </div>

    <!-- <div class="mt-4 warning--text" style="font-size:0.6em;">
      {{message}}
    </div> -->

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


  // // ----------- Card custom style ----------
  // let cardStyle = {
  //   style: {
  //     base: {
  //       iconColor: '#464646',
  //       color: 'black',
  //       backgroundColor: '#f7f7f7',
  //       fontWeight: '500',
  //       fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
  //       fontSize: '14px',
  //       fontSmoothing: 'antialiased',
  //       ':-webkit-autofill': {
  //         color: '#fce883',
  //       },
  //       '::placeholder': {
  //         color: '#43097d',
  //       },
  //     },
  //     invalid: {
  //       iconColor: 'maroon',
  //       color: 'maroon',
  //     },
  //   },
  //   iconStyle: 'solid'
  // }

  export default {
    name: "Step_Pay",
  
    components: {
      PageHeader,
    },

    data () {
      return {
        stripe: null,
        hasCardErrors: false,
        payEnabled: false,
        payLoading: false,
        message: ' - - ',

        elements: undefined,
        card: undefined,
      }
    },

    created() {


    },
    async mounted() {

        this.stripe = loadStripe(process.env.VUE_APP_STRIPE_PUBLIC_KEY_TEST)

    },


    computed: {

      // myLocale: function () {
      //   return this.$i18n.locale
      // },

    },

    methods: {

      onOrderBtn() {

        let me = this

        fetch("https://gateway.flyzermatt.com/create-checkout", {
          method: "POST",
        })
          .then(function (response) {
            return response.json();
          })
          .then(function (session) {
            return me.stripe.redirectToCheckout({ sessionId: session.id });
          })
          .then(function (result) {
            // If redirectToCheckout fails due to a browser or network
            // error, you should display the localized error message to your
            // customer using error.message.
            if (result.error) {
              alert(result.error.message);
            }
          })
          .catch(function (error) {
            console.log("Getting an error back in the 'catch'")
            console.error("Error:", error);
          });           
      },

        // this.elements = this.stripe.elements({locale: this.myLocale})

        // // Create and display the Card input field from Stripe.
        // this.card = this.elements.create('card', cardStyle)
        // this.card.mount(this.$refs.card)

        // // Need to setup event handler on the elements.card as can't access directly.
        // this.card.on("change", this.onChange)
     


      // Check to see if we should enable the Pay button or not.
      // onChange(ev) {
      //   this.payEnabled = ev.complete
      // },


      // onPlaceOrder(ev) {
      //   ev.preventDefault()
      //   this.payLoading = true
      //   let me = this
      //   this.stripe.createToken(this.card).then(function(result) {
      //     // Access the token with result.token
      //     if (result.error) {
      //       me.message = result.error.message
      //       me.hasCardErrors = true
      //       me.$forceUpdate()    // Forcing the DOM to update so the Stripe Element can update.
      //       me.payLoading = false
      //       return
      //     }
      //     // Call our API to handle token
      //     console.log("Created Token: " + result.token)
      //     me.message = "Created Token: " + result.token.id
      //     me.payLoading = false
      //     me.payEnabled = false     // disable Pay button, to stop multiple clicks... Ronnie...
      //     console.log(result.token)

      //   })


      //   // stripe.confirmCardSetup(
      //   //   clientSecret,
      //   //   {
      //   //     payment_method: {
      //   //       card: cardElement,
      //   //       billing_details: {
      //   //         name: cardholderName.value,
      //   //       },
      //   //     },
      //   //   }
      //   // ).then(function(result) {
      //   //   if (result.error) {
      //   //     // Display error.message in your UI.
      //   //   } else {
      //   //     // The setup has succeeded. Display a success message.
      //   //   }
      //   // })

      // },

    },




    watch: {

      // myLocale: function () {
      //   // this.elements = this.stripe.elements({locale: this.myLocale})
      //   //this.message = "Changed lang: " + this.myLocale
      //   this.createAndMountFormElements()
      //   // this.stripe.$forceUpdate() 
      // },


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