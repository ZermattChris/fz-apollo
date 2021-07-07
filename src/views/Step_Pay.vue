<template>
  <div class="stepPay">
    
    <PageHeader title="4. Place Order">
      Using Stripe checkout to handle our online payments here. This is currently just a test environment.
    </PageHeader>

    <!-- <h4 class="mb-0">Line item of flights + photos prices</h4> -->
    <!-- <v-skeleton-loader
      type="list-item-three-line"
    ></v-skeleton-loader> -->


    <!-- {{flightDetails}} -->

    <p>
      <v-chip
        color="deep-orange"
        class="pl-4 pr-6"
        id="passenger-btn"
      >
        {{ totalPassengers }}
      </v-chip>
      {{ totalPassengers == 1 ? 'Person' : 'People' }} flying - {{ flightDate }}
    </p>

    <template>
      <v-simple-table 
        dense
        class="elevation-1"
      >
        <template v-slot:default>
          <thead>
            <tr class="grey lighten-3">
              <th class="text-left">
                Qty
              </th>
              <th class="text-left">
                Description
              </th>
              <th class="text-right">
                Subtotal in CHF
              </th>
              <th class="text-left">
              </th>
            </tr>
          </thead>
          <tbody>
            <!-- List flights -->
            <tr>
              <td>{{ totalPassengers }}</td>
              <td><span style="font-weight:bold;">{{ flightDetails.name }} Flight</span> @ {{ flightDetails.price }}&nbsp;CHF</td>
              <td class="text-right">{{ totalPassengers * flightDetails.price }}.00</td>
              <td></td>
            </tr>
            <!-- List Photos and Videos -->
            <tr
              v-if="wantsPhotos"
            >
              <td>{{ totalPassengers }}</td>
              <td><span style="font-weight:bold;">Photos &amp; Videos</span> @ {{ videoPrice}}.00&nbsp;CHF</td>
              <td class="text-right">{{ totalPassengers * videoPrice }}.00</td>
              <td></td>
            </tr>

            <tr class="grey lighten-3">
              <td></td>
              <td style="text-align:right; font-weight:bold;">Total CHF</td>
              <td class="text-right"><span style="font-weight:bold;">{{ (totalPassengers * flightDetails.price) + (totalPassengers * videoPrice) }}.00</span></td>
              <td></td>
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

  import { format, parseISO } from 'date-fns'  
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

        flightDetails: this.$store.getters.getFlightFromID(this.$store.state.selectedFlight),
        totalPassengers: this.$store.state.totalPassengers,
        wantsPhotos: this.$store.state.wantsPhotos,
        videoPrice: this.$store.state._videoPrice,
      }
    },

    async mounted() {

      // TODO Swap out the test key for the live key when ready.
      // VUE_APP_STRIPE_PUBLIC_KEY_TEST
      // VUE_APP_STRIPE_PUBLIC_KEY_LIVE

        this.stripe = await loadStripe(process.env.VUE_APP_STRIPE_PUBLIC_KEY_TEST)

    },


    computed: {

      flightDate: function () {
        return format(parseISO(this.$store.state.flightDate), 'EEEE, MMMM do, yyyy')
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
          "totalPassengers": this.totalPassengers,
          "flightDate": this.$store.state.flightDate,
          "dateRange": {"start": this.$store.state.arriveDate, "end": this.$store.state.departDate},
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

#passenger-btn {
  height: 24px;
  width: 24px;
  font-size: 1.3em;
  font-weight: bold;
  color: white !important;
  border-color: rgb(255, 255, 255) !important;
  border-width: 3px !important;
  cursor: default;
  text-shadow: 0 0 3px black !important;
  text-align: center;
  margin-top: -4px;
  position: relative;
}





</style>