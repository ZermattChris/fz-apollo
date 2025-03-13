<template>
  <div class="stepThanks">

    <!-- Show this block if the Stripe Capture has worked. -->
    <div v-if="stripeSuccess"> 
      
      <PageHeader :title="$t('step-thanks.title')">
        {{$t('step-thanks.description')}}
      </PageHeader>

      <div style="max-width:600px; margin:0 auto;">

        <p>
          {{$t('step-thanks.transactionNr')}} <strong class="primary--text">{{orderId}}</strong> 
        </p>
        <p>
          {{$t('step-thanks.orderSentTo')}} <strong class="primary--text">{{orderEmail}}</strong>
        </p>

        <p style="background-color: #c78b48;" class="rounded-lg white--text mt-6 mb-6 mx-4 px-2 py-1">
          <v-icon color="white">
            mdi-at
          </v-icon>
          {{$t('step-thanks.checkSpamStart')}}
          <strong class="black--text">{{$t('step-thanks.checkSpamJunk')}}</strong>
          {{$t('step-thanks.checkSpamEnd')}}
        </p>

        <p class="mt-12 primary--text">
          {{$t('step-thanks.resendEmailIfNeeded')}}
        </p>

        <div class="text-center mr-auto ml-auto" style="max-width:400px;">

          <!-- Enter email to resend order to.  -->
          <v-text-field 
            :label="$t('step-thanks.resendTo')"
            v-model="resendEmail"
            :hint="resendEmailHint"
            persistent-hint
            class="float-left pr-6"
            style="width:75%;"
          >
          </v-text-field>
          <v-btn
            elevation="2"
            @click="onResendEmailBtn"
            class="float-left mt-2"
          >
            {{$t('step-thanks.sendEmail')}}
          </v-btn>
        </div>

        

        <div class="pt-12 float-end">
          {{$t('step-thanks.ifAnyProblems')}}
          <a href="mailto:info@flyzermatt.com">info@flyzermatt.com</a>
          {{$t('step-thanks.orCallUs')}}
          <a href="tel:+41796436808">+41 79 643 6808</a>
        </div>




        <div 
          class="pt-12 float-end"
          style="width:100%; text-align:center;"
        >
          <v-btn 
            rounded 
            x-large
            color="fzPink" 
            elevation="4"
            class="white--text"
            @click="onCloseBookingSystem"
          >
            {{$t('nav.done')}}
            <!-- <v-icon right>{{iconNextArrow}}</v-icon> -->
          </v-btn>
        </div>
      </div>

    </div>

    <!-- This will be displayed if stripe returns an error during card capture. -->
    <!-- Actually, going to capture this error and send user back to Pay to display it. -->
    <div v-else>
      {{stripeMessage}}
    </div>

  </div>
</template>

<script>
  import PageHeader from '@/components/PageHeader.vue'

  import axios from "axios"

  import {loadStripe} from '@stripe/stripe-js'


  export default {
    name: "Step_Thanks",
  
    components: {
      PageHeader
    },

    data () {
      return {

        // orderId: this.$store.state.orderID,
        
        stripeMessage: '',
        stripeSuccess: false,
        
        originalOrderId: '',
        originalEmail: '',
        resendEmail: '',
        resendEmailHint: this.$t('step-thanks.resendToStr'),

        url_setup_intent: '',
        url_setup_intent_client_secret: '',
        tmpStripeSuccessChip: false,
        tmpStripeFailChip: false,
        stripeCompleteOrderBtnDisabled: false,
        stripeCancelOrderBtnDisabled: false
      }
    },

    beforeMount () {
      this.$store.dispatch('setCurrentStep', "Thanks")
      window.addEventListener('beforeunload', () => {
          this.onCloseBookingSystem()
      })
    },



    async mounted() {

      let stripe = null

      if (this.$store.state._DEV === true) {
        // DEV
        //console.log('Development Mode - Complete Test Stripe Order.')
        stripe = await loadStripe(process.env.VUE_APP_STRIPE_PUBLIC_KEY_TEST)
      } else {
        // Live.
        stripe = await loadStripe(process.env.VUE_APP_STRIPE_PUBLIC_KEY_LIVE)
      }

      // Retrieve the "setup_intent_client_secret" query parameter appended to
      // your return_url by Stripe.js
      const clientSecret = new URLSearchParams(window.location.search).get(
        'setup_intent_client_secret'
      );

      // Retrieve the SetupIntent
      stripe.retrieveSetupIntent(clientSecret).then(({setupIntent}) => {
        

        // Inspect the SetupIntent `status` to indicate the status of the payment
        // to your customer.
        //
        // Some payment methods will [immediately succeed or fail][0] upon
        // confirmation, while others will first enter a `processing` state.
        //
        // [0]: https://stripe.com/docs/payments/payment-methods#payment-notification
        console.log("Thanks! setupIntent.status: ", setupIntent)
        switch (setupIntent.status) {
          case 'succeeded': {
            this.stripeSuccess = true
            this.stripeMessage = 'Success! Your payment method has been saved.';


            // Integrate into Tommy's system.
            this.bookWithTommy()

            // Send SMS to the Beast
            this.onSendSMSToGateway()

            this.resetLocalStorage()

            //START Added TOM 13.01.24 :: Remove the Stripe Information so this Stripe Customer cannot be referred to again.
            this.resetSessionStorage()
            //END Added TOM 13.01.24

            break;
          }

          case 'processing': {
            this.stripeSuccess = true
            this.stripeMessaget = "Processing payment details. We'll update you when processing is complete.";
            this.resetLocalStorage()
            break;
          }

          case 'requires_payment_method': {
            this.stripeSuccess = false
            this.stripeMessage = 'Failed to process payment details. Please try another payment method.';
            this.$store.dispatch('setStripeErrorMsg', this.stripeMessage)

            // Redirect your user back to your payment page to attempt collecting
            // payment again

            // Maybe store error message into a storex var and just redirect back to Pay, and show message in a pop-up of some sort?
            const myHost = document.location.host
            const proto = document.location.protocol
            const payPage = proto + '://' + myHost + '/Pay'
            window.location.href = payPage

            break;
          }
        }

        // temp info stuff
        this.url_setup_intent = setupIntent.id
        this.url_setup_intent_client_secret = clientSecret

      });

    },


    computed: {
      
      orderId: function () {
        return this.$store.state.orderID
      },

      orderEmail: function () {
        return this.originalEmail
      },


      // resendEmailHint: {
      //   get() {
      //     return this.$t('step-thanks.resendToStr')
      //   },
      //   set(val) {
      //     return val
      //   }
      // },
      
    },

    methods: {


      async onSendSMSToGateway () {
        console.log('Calling SMS Gateway')

        let passengers = this.$store.getters.getPassengersList
        const contactName = passengers[0].name

        let testMsg = ''

        if (this.$store.state._DEV === true) testMsg = 'TEST. '

        const postData = { 
          "isTest": this.$store.state._DEV,
          "Message": testMsg + 'New Online Order. Passengers: ' + this.$store.state.totalPassengers + ' Date: ' + this.$store.state.flightDate + ' Name: ' + contactName + ', Phone: ' + this.$store.state.contactPhone + ' Email: ' + this.$store.state.contactEmail,
        }
        console.log('SMS Message', postData)

        const response = await fetch(
          'https://gateway.flyzermatt.com/send-sms', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
              'Content-Type': 'application/json'
            }
          }
        )
        if (response.status !== 200) {
          console.log('Fatal Error => Not able to connect to SMS Gateway: ', response.status, response.statusText)
          return
        }

      },

      // Place a booking with Tommy's backend -- use existing API call to send data...
      async bookWithTommy() {

        let me = this

        let id = this.$store.state.orderID
        if (id === '' || id === undefined)  id = null

        const data = { 
          "orderId": id,
          "isTest": this.$store.state._DEV,
          "email": this.$store.state.contactEmail,
          "phone": this.$store.state.contactCountryCode + ' ' + this.$store.state.contactPhone + ' (' + this.$store.state.contactCountryName + ')',
          "totalPassengers": this.$store.state.totalPassengers,
          "flightDate": this.$store.state.flightDate,
          "dateRange": {"start": this.$store.state.arriveDate, "end": this.$store.state.departDate},
          "flightId": this.$store.state.selectedFlight,
          "photos": this.$store.state.wantsPhotos,
          "passengerJSON": this.$store.state.passengerObjList,
          "slotJSON": this.$store.state.slotPassengersObj,
          "orderMessage": this.$store.state.orderMessage,
          "usersLanguage": this.$i18n.locale,
          "custClientId": this.$store.state.custClientId,
          "setupIntentId": this.$store.state.setupIntentId,
        }

        // Setup dev/live API call to Tommy.
        // let apiPath = "https://bookings.flyzermatt.com/api/createcheckout"
        // if (this.$store.state._DEV === true) apiPath = "https://bookings-dev.simpleitsolutions.ch/api/createcheckout"

        let apiPath = "https://bookings.flyzermatt.com/api/createCustomerOrder"
        if (this.$store.state._DEV === true) apiPath = "https://bookings-dev.simpleitsolutions.ch/api/createCustomerOrder"
        //alert("Calling Make Booking with Tommy: ", apiPath)

        fetch(apiPath, {
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
              me.originalOrderId = session.orderId
            }
          })
          .catch(function (error) {
            console.log("Getting an error back in the bookWithTommy() 'catch'")
            console.error("Error:", error)
            // TODO show the user that an error occured when completing the booking
            // and that they should contact us.
            // Could use a timeout, ca 3 seconds, and try again 3-4 times, before
            // failing. A final fail should send us an FAILURE email to bookings@flyzermatt.com
          })

      },

      onCloseBookingSystem() {
        window.location.href = "https://www.flyzermatt.com/"
      },

      onResendEmailBtn() {

        
        //const orderID = this.originalOrderId



        // Setup dev/live API call to Tommy.
        let apiPath = "https://bookings.flyzermatt.com/api/resendCustomerConfirmation/" + this.originalOrderId + "/" + this.resendEmail
        if (this.$store.state._DEV === true) apiPath = "https://bookings-dev.simpleitsolutions.ch/api/resendCustomerConfirmation/" + this.originalOrderId + "/" + this.resendEmail

        axios.get(apiPath)
        .then(response => {
          // let data = response.data;
          // console.log(data)
          if (response.data == 'success') {
            this.resendEmailHint = this.$t('step-thanks.successfullySentTO') + this.resendEmail 
            this.resendEmail = ''
          }
        })
        .catch(error => {
          console.log(error)
          this.resendEmailHint = this.$t('step-thanks.failedToSentTO') + this.resendEmail 
        })

      },

      resetLocalStorage() {
        console.log('resetLocalStorage()!')

        // Save Cust email to display here on this page.
        // this.originalOrderId = this.$store.state.orderID
        this.originalEmail = this.$store.state.contactEmail

        // console.log('0.1setStripeCustId current value:'+this.$store.state.custClientId)
        this.$store.dispatch('setStripeCustId', '')
        // console.log('0.2setStripeCustId current value:'+this.$store.state.custClientId)
        localStorage.custClientId = ''
        // console.log('0.3setStripeCustId current value:'+this.$store.state.custClientId)
        this.$store.dispatch('setStripeCustSecret', '')
        this.$store.dispatch('setStripeSetupIntentId', '')   
        localStorage.setupIntentId = ''

        this.$store.dispatch('setContactPhone', '')   
        this.$store.dispatch('setContactEmail', '')   

        this.$store.dispatch('setOrderId', '')
        this.$store.dispatch('setCurrentStep', 'Start')
        this.$store.dispatch('setFlightsList', '')
        this.$store.dispatch('clearNavList', '')
        this.$store.dispatch('clearTimeListDates')

        this.$store.dispatch('setWantsPhotos', '')
        this.$store.dispatch('setVideoPrice', '')

        this.$store.dispatch('setArriveDate', '')
        this.$store.dispatch('setDepartDate', '')
        this.$store.dispatch('setFlightDate', '')

        this.$store.dispatch('setFlight', '')
        this.$store.dispatch('setOrderMessage', '')

        this.$store.dispatch('clearSlotsPassengers', '')
      },

      //START Added TOM 13.01.24
      resetSessionStorage() {
        console.log('resetSessionStorage()!')
        // window.localStorage.clear()
        window.sessionStorage.clear()    // this should reset all of the Stripe data as well.
      }
      //END Added TOM 13.01.24

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