<template>
  <div class="stepPay">

    
    <PageHeader :title="'4. ' + $t('step-pay.title')">
      {{$t('step-pay.description')}} 
    </PageHeader>

    <div style="max-width:600px; margin:0 auto;">

      <p class="ml-3">
        <v-icon color="primary">
          mdi-airplane-takeoff
        </v-icon>
        {{meetingTimesString}}
        {{flightDate}}
      </p>
      <p style="background-color: #c78b48;" class="rounded-lg white--text text-caption mt-n2 mb-9 mx-4 px-2 py-1">
        {{$t('step-pay.meetingTime')}}
        <strong><a
          class="white--text text-decoration-underline"
          @click="findOfficeDialog = true"
        >
          {{$t('findOffice.linkText')}}
          <v-icon color="white" x-small>
            mdi-open-in-new
          </v-icon>
        </a></strong>
      </p>

      <template>
        <v-simple-table 
          dense
          class="elevation-1"
          id="scrollTarget"
        >
          <template v-slot:default>
            <thead>
              <tr class="grey lighten-3">
                <th class="text-left">
                  {{$t('step-pay.qty')}}
                </th>
                <th class="text-left">
                  {{$t('step-pay.flightDescription')}}
                </th>
                <th class="text-right">
                  {{$t('step-pay.subtotalCHF')}}
                </th>
                <th class="text-left">
                </th>
              </tr>
            </thead>
            <tbody>
              <!-- List flights -->
              <tr>
                <td>{{ totalPassengers }}</td>
                <td><span style="font-weight:bold;">{{ flightDetails.name }} Flight</span> @ {{ flightDetails.price }}{{'\xa0'}}CHF</td>
                <td class="text-right">{{ totalPassengers * flightDetails.price }}.00</td>
                <td></td>
              </tr>
              <!-- List Photos and Videos -->
              <tr
                v-if="wantsPhotos"
              >
                <td>{{ totalPassengers }}</td>
                <td><span style="font-weight:bold;">{{$t('step-pay.photosVideos')}}</span> @ {{ videoPrice}}.00{{'\xa0'}}CHF</td>
                <td class="text-right">{{ totalPassengers * videoPrice }}.00</td>
                <td></td>
              </tr>

              <tr class="grey lighten-3">
                <td></td>
                <td style="text-align:right; font-weight:bold;">
                  {{$t('step-pay.totalCHF')}}
                </td>
                <td v-if="wantsPhotos" class="text-right"><span style="font-weight:bold;">{{ (totalPassengers * flightDetails.price) + (totalPassengers * videoPrice) }}.00</span></td>
                <td v-if="!wantsPhotos" class="text-right"><span style="font-weight:bold;">{{ (totalPassengers * flightDetails.price) }}.00</span></td>
                <td></td>
              </tr>
            </tbody>

          </template>

        </v-simple-table>
      </template>


      <template>
        <v-row justify="center" class="text-caption mx-1 mt-8 mb-10">
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-header
                disable-icon-rotate
                @click="focusBookingMessage()"
              >
                <strong>{{$t('step-pay.clickForSpecialRequests')}}</strong>
                <template v-slot:actions>
                  <v-icon color="warning">
                    mdi-information-outline
                  </v-icon>
                </template>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <!-- {{$t('step-pay.specialRequestsDesc')}} -->
                <p id="questionsTxt" class="text-caption mt-0 mx-4">
                  {{$t('step-pay.specialWishes')}}
                </p>
                <v-textarea
                  ref="bookingMessage"
                  class="mt-6 mx-auto"
                  style="max-width:600px;"
                  v-model="message"
                  name="booking-message"
                  outlined
                  :label="$t('step-pay.yourMsgHere')"
                  auto-grow
                  @blur="onMessageBlur"
                ></v-textarea>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-row>
      </template>





      <!-- Stripe Payment Element for Future Payments  -->
      <!-- Only show if in Debug at moment -->
      <div id="stripe-payment-box" class="">

        <v-skeleton-loader
          v-if="stripePaymentFormLoading"
          type="article, actions"
          style="min-height:360px;"
        ></v-skeleton-loader>

        <v-divider></v-divider>

        <form 
          id="stripe-payment-form" 
          v-show="!stripePaymentFormLoading"
          @submit.prevent="onOrderBtn"
        >


          <div id="stripe-payment-element" class="pt-4" style="min-height:210px;">
            <!-- Elements will create form elements here -->
          </div>


          <!-- Terms and Conditions Checkbox  -->
          <v-container
            class="px-0 pt-0"
            fluid
            style="max-width:400px; margin:0 auto; text-align:center;"
          >
            <v-checkbox
              v-model="termsCheckboxModel"
              color="orange darken-3"
            >
              <template v-slot:label>
                <div id="TCs-Box">
                  {{$t('step-pay.tc-text-start')}}
                  <v-tooltip top>
                    <template v-slot:activator="{ on }">
                      <a
                        target="_blank"
                        href="https://www.flyzermatt.com/terms-and-conditions#onlinepayments"
                        @click.stop
                        v-on="on"
                      >{{$t('step-pay.tc-text-link')}}</a>
                    </template>
                    {{$t('step-pay.openInNewPage')}}
                  </v-tooltip> 
                  {{$t('step-pay.tc-text-end')}}
                </div>
              </template>
            </v-checkbox>
          </v-container>


          <!-- Stripe controlled PAY NOW button  -->
          <div id="payment-button-box" class="" style="text-align:center;">
            <v-btn id="payment-button" ref="paymentButton" type="submit"
              color="orange darken-3"
              class="mt-0"
              :disabled="!payBtnValid"
            >
              {{$t('step-pay.bookFlight')}}
            </v-btn>
          </div>
          
          <div id="stripe-error-message" class="" style="color:maroon;">
            <!-- Display error message to your customers here -->
            {{StripeErrorMessage}}
          </div>
        </form>

      </div>


      <div v-if="$store.state._DEV == true">
          <br/><br/>
          <ul>
            <li>The card setup succeeds and doesn’t require authentication: 4242424242424242</li>
            <li>The card requires authentication for the initial setup, then succeeds for subsequent payments: 4000002500003155</li>
            <li>The card requires authentication for the initial setup and also requires authentication for subsequent payments: 4000002760003184</li>
            <li>The card is declined during setup: 4000000000009995</li>
          </ul>
      </div>

    </div>

    <!-- Failed Pilots available check before final booking  -->
    <v-dialog 
      v-model="pilotAvailDialog" 
      persistent
      width="500"
    >
      <template v-slot:activator="{}">
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          <v-icon color="fzPink" class="pr-1">
            {{alertIcon}}
          </v-icon>
          Ooops! Please change Time or Date...
        </v-card-title>

        <v-card-text class="pt-4">
          We are very sorry, but the Time Slot(s) you have chosen is no longer 
          available. Please return to Step 2 and change to an available Time Slot or different
          date.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="fzPink" class="mb-2 white--text" elevation="2" outlined @click="returnToDateTimeStep">
            <v-icon color="fzPink" class="pr-1">
              {{returnIcon}}
            </v-icon>
            <span class="pt-1">
              Change Time or Date...
            </span>
          </v-btn>
        </v-card-actions>
      </v-card>

    </v-dialog>

  </div>
</template>


<script>
  import PageHeader from '@/components/PageHeader.vue'

  import { format, parseISO } from 'date-fns'  
  import { enGB, de, ko } from 'date-fns/locale'

  import {loadStripe} from '@stripe/stripe-js'

  import { mdiBackspace, mdiAlert } from '@mdi/js'



  export default {
    name: "Step_Pay",
  
    components: {
      PageHeader,
    },

    data () {
      return {

        returnIcon: mdiBackspace,
        alertIcon: mdiAlert,

        stripe: null,
        hasCardErrors: false,
        payLoading: false,
        message: this.$store.state.orderMessage,

        elements: undefined,
        paymentElement: undefined,
        card: undefined,

        flightDetails: this.$store.getters.getFlightFromID(this.$store.state.selectedFlight),
        totalPassengers: this.$store.state.totalPassengers,
        wantsPhotos: this.$store.state.wantsPhotos,
        videoPrice: this.$store.state._videoPrice,

        termsCheckboxModel: false,

        orderOverlay: false,    // Shown when the PAY NOW button is hit, while Stripe loads.

        myLocal: enGB,    // default date-fns locale

        tempClientSecret: '',

        stripePayFormValid: false,
        stripePaymentFormLoading: true,

        cardholderName: this.$store.getters.getNameById(0),
        cardholderEmail: this.$store.state.contactEmail,

        pilotAvailDialog: false,

        flightsAvailableJSON: {}
        
      }
    },


    async mounted() {

        if (this.$store.state._DEV === true) {
          // DEV
          console.log('Development Mode - Test Stripe Order.')
          this.stripe = await loadStripe(process.env.VUE_APP_STRIPE_PUBLIC_KEY_TEST)
        } else {
          // Live.
          this.stripe = await loadStripe(process.env.VUE_APP_STRIPE_PUBLIC_KEY_LIVE)
        }

        const options = {
          clientSecret: sessionStorage.getItem('custClientSecret'),
          locale: this.$i18n.locale,
          // Fully customizable with appearance API.
          //appearance: {}
        };

        // Set up Stripe.js and Elements to use in checkout form, passing the client secret obtained in step 2
        this.elements = this.stripe.elements(options)


        // Create and mount the Payment Element
        this.paymentElement = this.elements.create('payment')

        // remove the skeleton loader
        const me = this
        this.paymentElement.on('ready', function() {
          me.stripePaymentFormLoading = false
        })
        // Enable the PAY button
        this.paymentElement.on('change', function(event) {
          if (event.complete) {
            me.stripePayFormValid = true
          }
        })

        this.paymentElement.mount('#stripe-payment-element')

      
    },

    
    beforeUpdate() {
      // This is how to add a locale to date-fns function calls.
      if (this.$i18n.locale === 'en') this.myLocal = enGB 
      if (this.$i18n.locale === 'de') this.myLocal = de 
      if (this.$i18n.locale === 'ko') this.myLocal = ko 
    },

    computed: {

      // contactName: function () {
      //   return this.$store.getters.getNameById(0)
      // },
      // contactEmail: function () {
      //   return this.$store.state.contactEmail
      // },

      StripeErrorMessage: {
        get() {
          return this.$store.state.stripeErrorMessage
        },
        set(errMsg) {
          return this.$store.dispatch('setStripeErrorMsg', errMsg)
        }
          
      }, 

      payBtnValid: function () {
          if (this.stripePayFormValid === true && this.termsCheckboxModel === true) return true
          return false
      },

      isDev: function () {
          return this.$store.state._DEV
      },

      findOfficeDialog: {
        get() {
          return this.$store.state.findOfficeDialog
        },
        set(val) {
          return this.$store.dispatch('showFindOfficeDialog', val)
        }
      },

      // Build a display string showing the number of passengers for each 
      // chosen TimeSlot in the booking.
      meetingTimesString: function () {

        let result = ''
        const slotList = this.$store.state.slotPassengersObj.slotsList
        //console.log(slotList)

        slotList.forEach((element) => {
          // Need to guard against null, as an empty timeSlot is added to list with a null.
          if (!this.isObjEmpty(element)) {
            //console.log(element.timeString)
            //console.log(element.passengers)
            //console.log(index)
            if (element.passengers > 0) {
              result += element.passengers + " " + this.$tc('step-pay.people', element.passengers) + " @ " + element.timeString + ". "
            }
          }
        })

        return result 
      },


      flightDate: function () {
        if (this.isObjEmpty(this.$store.state.flightDate)) return ''                // Was getting bad date format from vuex.
        return format(parseISO(this.$store.state.flightDate), 'EE, MMMM do, yyyy', {locale: this.myLocal})
      },

    },

    methods: {

      returnToDateTimeStep() {

        // Update to latest dates/slots available.
        //console.log(this.flightsAvailableJSON)
        this.$store.dispatch('setTimesListDates', this.flightsAvailableJSON) 

        // Need to reset the Passenger objects and totals.
        this.$store.dispatch('resetSlotsPassengers')

        // return to step 2 to reselect date & time that is available.
        this.$router
          .push({ path: '/Time' })
          .then(() => { this.$router.go() })

      },



      async checkIfTimeSlotStillAvailable() {
        // just a quick test call to see if we can use existing API to discover
        // if user's flight+slot(s) is still available...

        const flDate = this.$store.state.flightDate
        const flightId = this.$store.state.selectedFlight



        // Setup dev/live API call to Tommy.
        let apiPath = "https://bookings.flyzermatt.com/api/flightsavailable/" + flightId + "/" + flDate
        if (this.$store.state._DEV === true) apiPath = "https://bookings-dev.simpleitsolutions.ch/api/flightsavailable/" + flightId + "/" + flDate

        
        const response = await fetch(
          apiPath, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          }
        )
        if (response.status !== 200) {
          console.error('Fatal Error => Not able to connect to ' + apiPath + ': ', response.status, response.statusText)
          return
        }

        this.flightsAvailableJSON = await response.json();
        //console.log(flightsAvailableJSON)

        // {
        //   "2022-07-16":{
        //      "07:40":-1,
        //      "09:30":2,
        //      "11:20":1,
        //      "13:10":0,
        //      "14:30":3,
        //      "16:10":0,
        //      "18:00":-1
        //   },
        //   "2022-07-17":{
        //      "07:40":-1,
        //      "09:30":0,
        //      "11:20":1,
        //      "13:10":1,
        //      "14:30":0,
        //      "16:10":3,
        //      "18:00":-1
        //   },

        let foundSlotObj = null

        // 1) Loop through the returned objects and check for selected Date.
        for (var key of Object.keys(this.flightsAvailableJSON)) {
            //console.log(key + " -> " + flightsAvailableJSON[key])

            // Grab the matching Slot object for User's selected flight date.
            if ( key === flDate ) {
              //console.log("Found! Date: " + key)
              foundSlotObj = this.flightsAvailableJSON[key]
              break
            }
        }

        //console.log("Slots: " + foundSlotObj)

        // 2) Loop through the User's TimeSlots and check if enough pilots available still.
        const usersSlotList = this.$store.state.slotPassengersObj.slotsList
        //console.log("User TimeSlots: " + usersSlotList)
        //for (var userSlotKey of Object.keys(usersSlotList)) {
        for (let index = 0; index < usersSlotList.length; index++) {
          if (usersSlotList[index] === null || usersSlotList[index] === undefined) continue
          //console.log("User userSlotKey: " + usersSlotList[index].timeString + " " + usersSlotList[index].passengers)
          let userSlotKeyTime = usersSlotList[index].timeString
          let userSlotKeyTimePassengers = usersSlotList[index].passengers

          // 2b) Loop through the returned objects and check for selected Date.
          for (var slotKeyTime of Object.keys(foundSlotObj)) {
              //console.log(slotKeyTime + " -> " + foundSlotObj[slotKeyTime])

              // We need to search each one of the User's slots and check if there's enough Pilots still available.
              // As soon as one fails, show a dialog box, swap out the _timeListDates for the above returned list
              // and send user back to the Date/TimeSlot step.

              // Found the matching slot time. Now need to check if there's enough pilots still available.
              if (slotKeyTime == userSlotKeyTime) {
                if (userSlotKeyTimePassengers > foundSlotObj[slotKeyTime]) {
                  console.log('Returned FALSE. TimeSlot already full! Choose new date/slot. [userPassengers], [availPilots]', userSlotKeyTimePassengers, foundSlotObj[slotKeyTime])
                  return false      // Not enough pilots available!
                }
              }

          }
        }

        console.log('Returned TRUE.')
        return true // still have enough pilots.

      },


      async onOrderBtn() {

        // Block page with spinner while processing...
        this.$store.dispatch('pageBlocker', true)



        // 1) Make sure Pilots avail for this slot still...
        // This is an async call, so needs await.
        if (await this.checkIfTimeSlotStillAvailable() === false) {
          //alert("Someone else has already booked this space. Please try again.")
          this.pilotAvailDialog = true
          // unblock page with spinner while processing...
          this.$store.dispatch('pageBlocker', false)
          return
        }
        

        // 2) Need to update the Customer details before completing Card Capture.
        //    - Contact Name, Phone and Email to Customer.
        const postData = { 
          "custId": this.$store.state.custClientId,
          "name": this.cardholderName,
          "email": this.cardholderEmail,
          "description": this.cardholderName + " has successfully pushed the 'BOOK FLIGHT' button.",
          "isDev": this.$store.state._DEV,
        }
        console.log('postData', postData)

        const response = await fetch(
          'https://gateway.flyzermatt.com/update-customer', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
              'Content-Type': 'application/json'
            }
          }
        )
        if (response.status !== 200) {
          console.log('Fatal Error => Not able to connect to Stripe: ', response.status, response.statusText)
          this.StripeErrorMessage = 'Fatal Error => Not able to connect to Stripe: ' + response.status + ' ' + response.statusText
          return
        }

        // const data = await response.json()
        // console.log('Update customer data returned: ', data)


        const elements = this.elements

        // Need to grab the current site's host to pass in (allows localhost, staging.flyzermatt.com, etc)
        const myHost = document.location.host
        const myHostProto = document.location.protocol


        // 3 Complete Card Capture with Stripe.
        const {error} = await this.stripe.confirmSetup({
          //`Elements` instance that was used to create the Payment Element
          elements,
          confirmParams: {
            return_url: myHostProto + '//' + myHost + '/thanks'
          }
        })

        if (error) {
          // This point will only be reached if there is an immediate error when
          // confirming the payment. Show error to your customer (for example, payment
          // details incomplete)
          // const messageContainer = document.querySelector('#error-message');
          // messageContainer.textContent = error.message;
          console.log("Stripe ConfirmSetup error: ", error)
          this.StripeErrorMessage = error.message

          // unblock page with spinner while processing...
          this.$store.dispatch('pageBlocker', false)

        } else {
          // Your customer will be redirected to your `return_url`. For some payment
          // methods like iDEAL, your customer will be redirected to an intermediate
          // site first to authorize the payment, then redirected to the `return_url`.

          // NOTE: This code is never called as the Promise returned by stripe.confirmSetup() is
          //       resolved before this runs.

        }


      },




      focusBookingMessage() {
        this.scrollToId("#scrollTarget")
        const me = this
        setTimeout(function() {
          me.$refs.bookingMessage.focus()
        }, 500);
        
      },

      onMessageBlur() {
        //console.log('message: ', this.message)
        this.$store.dispatch('setOrderMessage', this.message)
      },

    },


    watch: {

      '$store.state.locale': function(newLocale) {
        // Listen for changes in the Language menu and update the Stripe component's locale.
        // console.log("oldLocale:", oldLocale)
        // console.log("newLocale:", newLocale)
        this.elements.update({locale: newLocale})
      },

    }

  }



</script>

<style scoped>

.Input {
  display: block;
  min-width: 22em;
	padding: 12px;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 12px;
	background-color: white;
	border-radius: 5px;
	transition: background 0.15s ease, border 0.15s ease, box-shadow 0.15s ease, color 0.15s ease;
	border: 1px solid rgb(230, 230, 230);
	box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 6px rgba(0, 0, 0, 0.02);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
  .Input:focus, .p-Input--focused {
    outline: 3px solid hsla(210, 96%, 45%, 20%);
    border-color: hsla(210, 96%, 45%, 50%);
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 6px rgba(0, 0, 0, 0.02), hsla(210, 96%, 45%, 50%);
  }
  .Label {
    margin-bottom: 0.25rem;
    font-size: 0.93rem;
    /*font-weight: var(--fontWeightNormal);*/
    transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.5s cubic-bezier(0.19, 1, 0.22, 1);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

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

#TCs-Box:hover {
  color: black; 
}



</style>