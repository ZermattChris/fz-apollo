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

    <p>Flight Date, Number of Passengers here...</p>

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

    async mounted() {

      // TODO Swap out the test key for the live key when ready.
      // VUE_APP_STRIPE_PUBLIC_KEY_TEST
      // VUE_APP_STRIPE_PUBLIC_KEY_LIVE

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

        // todo Disable screen until the Order Now call has completed (with animation)


        let me = this

        let id = this.$store.state.orderID
        //console.log(id)
        if (id === '' || id === undefined)  id = null

        const data = { 
          "orderId": id,
          "isTest": true,                             // TODO Change this for produciton!
          "email": this.$store.state.contactEmail,
          "phone": this.$store.state.contactPhone,
          //"gender": this.$store.getters.getSexById(0), 
          //"name": this.$store.getters.getNameById(0),    // 0 -> Contact passenger's name.
          "totalPassengers": this.$store.getters.getTotalPassengers,
          "flightDate": this.$store.state.flightDate,
          "dateRange": {"start": "1970-01-01", "end": "1970-01-01"},
          "flightId": this.$store.state.selectedFlight,
          "photos": this.$store.state.wantsPhotos,
          "passengerJSON": this.$store.state.passengerObjList,
          "slotJSON": this.$store.state.slotPassengersObj,
          "orderMessage": this.$store.state.orderMessage
        }



        fetch("https://bookings.simpleitsolutions.ch/api/createcheckout", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              data
            }),
        })
          .then(function (response) {
            return response.json();
          })
          .then(function (session) {
            // Save Tommy's OrderId
            if (session.orderId > 0) {
              me.$store.dispatch('setOrderId', session.orderId)
            }
            // Send user to the Stripe Checkout page.
            return me.stripe.redirectToCheckout({ sessionId: session.stripeSessionId });
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