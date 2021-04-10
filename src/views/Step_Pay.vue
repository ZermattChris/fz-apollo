<template>
  <div class="stepPay">
    
    <PageHeader title="4. Place Order">
      Using Stripe checkout to handle our online payments here. This is currently just a test environment.
    </PageHeader>

    <!-- <h4 class="mb-0">Line item of flights + photos prices</h4> -->
    <!-- <v-skeleton-loader
      type="list-item-three-line"
    ></v-skeleton-loader> -->


    <!-- {{orderLineItems}} -->

    <template>
      <v-simple-table 
        dense
        class="elevation-1"
      >
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">
                Qty
              </th>
              <th class="text-left">
                Description
              </th>
              <th class="text-left">
                Price in CHF
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2</td>
              <td>{{ orderLineItems.name }} Flight</td>
              <td>{{ orderLineItems.price_CHF }}.-</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Photos &amp; Videos</td>
              <td>40.-</td>
            </tr>
            <tr>
              <td 
                colspan="3"
                class="grey--text text-caption"
                style="text-align:center;"
              >
                This row will display total prices
              </td>
            </tr>
          </tbody>

        </template>

      </v-simple-table>
    </template>


    <div id="payment-button-box" class="mt-4" style="text-align:center;">
      <v-btn id="payment-button" ref="paymentButton" type="submit"
        color="warning darken-1"
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

<br/><br/>

  <p>
    Copy one of the numbers below to test payment on the Stripe page. <br/> <br/>
    Use any email, card date (in future), CVC and Name on card.
  </p>

    <ul>
      <li>Visa standard card with success: 4000007560000009 <br/></li>
      <li>3D Secure with success: 4000002500003155</li>
      <li>Fail, insuffecient funds: 4000000000009995</li>
      <li>Fail, card has expired: 4000000000000069</li>
    </ul>

  </div>
</template>


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

        //this.stripe = await loadStripe(process.env.VUE_APP_STRIPE_PUBLIC_KEY_TEST)
        this.stripe = await loadStripe('pk_test_51IGntPLZ4REFUmfdjQL7LCGwclVtgzurrVvVhr5P8htOMohzdfAQke3p0Dd3zFsKcLuWtiFXK2x2RnXOCRQt1x8j00XqKkjnx2')

        

    },


    computed: {

      orderLineItems: function () {
        return this.$store.getters.getFlightFromID(300)
      },

    },

    methods: {

      onOrderBtn() {

        let me = this

        // Here we can pass required data to the backend to create the actual
        // order being sent to Stripe, using real data from Tommy's backend.
        const data = { 
          "email": this.$store.state.contactEmail,
          "orderId": this.$store.state.orderID,
          "flightId": this.$store.state.selectedFlight,
          "photos": this.$store.state.wantsPhotos,

        }

        fetch("https://gateway.flyzermatt.com/create-checkout", {
          method: 'POST', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),   // 1. Passing in 'data' to 'create-checkout'
        })
          .then(function (response) {
            return response.json();
          })
          .then(function (session) {    // 2. Getting data in response in 'session' var.

            // Update the returned OrderId in StoreX
            //me.$store.dispatch('setOrderId', session.orderId)


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