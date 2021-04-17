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

    <v-textarea
      class="mt-6 mx-auto"
      style="max-width:600px;"
      v-model="message"
      name="booking-message"
      outlined
      label="Booking Message (optional)"
      auto-grow
      hint="Enter extra passenger infos or questions here."
      @blur="onMessageBlur"
    ></v-textarea>


    <div id="payment-button-box" class="" style="text-align:center;">
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
        message: this.$store.state.orderMessage,

        elements: undefined,
        card: undefined,
      }
    },

    created() {

        let me = this

        //console.log("TODO: take a close looks at OrderId passing and updating...")

        // Create a new (or update an existing) Order in the db.
            // 'order_id' => '102158',
            // 'is_test' => '1',
            // 'created_stamp' => '2021-04-14 14:11:47',
            // 'status' => 'deleted',
            // 'email' => NULL,
            // 'phone' => NULL,
            // 'first' => 'John',
            // 'last' => 'Doe',
            // 'total_passengers' => '0',
            // 'flight_date' => NULL,
            // 'flight_id' => NULL,
            // 'photos' => NULL,
            // 'passenger_json' => NULL,
            // 'slot_json' => NULL,
            // 'payment_stamp' => NULL,
            // 'payment_intent' => NULL

        
        let id = this.$store.state.orderID
        console.log(id)
        if (id === '' || id === undefined)  id = null

        const data = { 
          "orderId": id,
          "isTest": true,                             // TODO Change this for produciton!
          "email": this.$store.state.contactEmail,
          "phone": this.$store.state.contactPhone,
          "gender": this.$store.getters.getSexById(0), 
          "name": this.$store.getters.getNameById(0),    // 0 -> Contact passenger's name.
          "totalPassengers": this.$store.getters.getTotalPassengers,
          "flightDate": this.$store.state.flightDate,
          "flightId": this.$store.state.selectedFlight,
          "photos": this.$store.state.wantsPhotos,
          "passengerJSON": this.$store.state.passengerObjList,
          "slotJSON": this.$store.state.slotPassengersObj
        }

        fetch("https://gateway.flyzermatt.com/new-order", {
          method: 'POST', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),   // 1. Passing in 'data' to 'create-checkout'
        })
          .then(function (response) {
            return response.json()
          })
          .then(function (returnedJSON) {    // 2. Getting data in response in 'session' var.
            //console.log("Result of calling https://gateway.flyzermatt.com/new-order")
            //console.log(returnedJSON)
            // I think if the db record already exists, we're getting an id of 'zero' back.
            // Don't update the order id locally if this is the case, as it causes a new 
            // record to be created.
            if (returnedJSON.orderID > 0) {
              me.$store.dispatch('setOrderId', returnedJSON.orderID)
            }
          })
          .catch(function (error) {
            console.log("Getting an error back from fetch: https://gateway.flyzermatt.com/new-order")
            console.error("Error:", error)
          });




    },
    async mounted() {

        this.stripe = await loadStripe(process.env.VUE_APP_STRIPE_PUBLIC_KEY_TEST)

    },


    computed: {

      orderLineItems: function () {
        return this.$store.getters.getFlightFromID(300)
      },

    },

    methods: {

      onMessageBlur() {
        console.log('message: ', this.message)
        this.$store.dispatch('setOrderMessage', this.message)
      },

      onOrderBtn() {

        let me = this

        // Set up the Order button to send user to Stripe when clicked.
        fetch("https://gateway.flyzermatt.com/create-checkout", {
          method: 'POST', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            "email": this.$store.state.contactEmail,
            "orderId": this.$store.state.orderID,
            "orderMessage": this.$store.state.orderMessage,

            }),   // 1. Passing in 'data' to 'create-checkout'
        })
          .then(function (response) {
            return response.json();
          })
          .then(function (session) {    // 2. Getting data in response in 'session' var.
            // Send user to the Stripe Checkout page.
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