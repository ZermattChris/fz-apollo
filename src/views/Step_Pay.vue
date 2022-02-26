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

        <form 
          id="stripe-payment-form" 
          v-show="!stripePaymentFormLoading"
          @submit.prevent="onOrderBtn"
        >
          <div id="stripe-payment-element" style="min-height:210px;">
            <!-- Elements will create form elements here -->
          </div>
          <!-- <button id="stripe-submit">Submit</button> -->


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
          
          <div id="stripe-error-message">
            <!-- Display error message to your customers here -->
            <!-- {{isDev ? 'TRUE' : 'FALSE'}} -->
            {{StripeErrorMessage}}
          </div>
        </form>

      </div>


      <!-- Stripe controlled PAY NOW button  -->
      <!-- <div id="payment-button-box" class="" style="text-align:center;">
        <v-btn id="payment-button" ref="paymentButton" type="submit"
          color="orange darken-3"
          class="mt-0"
          @click="onOrderBtn"
          :disabled="!termsCheckboxModel"
        >
          {{$t('step-pay.payNow')}}
        </v-btn>
      </div> -->

      <!-- <a 
        href="https://stripe.com"
        target="_blank"
        class="mx-auto mt-10"
        style="display:block; width:100px; height:30px;"
      >
        <v-img
          contain
          width="100"
          height="30"
          src="Powered by Stripe - blurple.svg"
        ></v-img>
      </a> -->

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

    <!-- Order Overlay  -->
    <!-- <v-overlay :value="orderOverlay">
      <v-progress-circular
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay> -->





  </div>
</template>


<script>
  import PageHeader from '@/components/PageHeader.vue'

  import { format, parseISO } from 'date-fns'  
  import { enGB, de, ko } from 'date-fns/locale'

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
        stripePaymentFormLoading: true
      }
    },


    async beforeMount() {

        console.log('Development Mode - Test Stripe Order.')
        this.stripe = await loadStripe(process.env.VUE_APP_STRIPE_PUBLIC_KEY_TEST)

        // We want to send the user's name and email to the create Stripe customer server call.
        // const postData = { 
        //   name: this.$store.getters.getNameById(0),  // Grab the Contact person's name
        //   email: this.$store.state.contactEmail
        // }
        const postData = { 
          name: "Test Name",
          email: "test@test.com"
        }

        const response = await fetch(
          'https://gateway.flyzermatt.com/create-customer', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
              'Content-Type': 'application/json'
            }
          }
        )
        const data = await response.json()
        this.tempClientSecret = data.clientSecret
        // console.log('this.tempClientSecret', this.tempClientSecret)
        // console.log('custId', data.customerId)


        const options = {
          clientSecret: this.tempClientSecret,
          locale: this.$i18n.locale,
          // Fully customizable with appearance API.
          //appearance: {}
        };

        // Set up Stripe.js and Elements to use in checkout form, passing the client secret obtained in step 2
        this.elements = this.stripe.elements(options)


        // Create and mount the Payment Element
        this.paymentElement = this.elements.create('payment')

        const me = this
        // remove the skeleton loader
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




      async onOrderBtn() {

        const elements = this.elements

        // Need to grab the current site's host to pass in (allows localhost, staging.flyzermatt.com, etc)
        const myHost = document.location.host

        const {error} = await this.stripe.confirmSetup({
          //`Elements` instance that was used to create the Payment Element
          elements,
          confirmParams: {
            return_url: 'https://' + myHost + '/thanks',
          }
        })

        if (error) {
          // This point will only be reached if there is an immediate error when
          // confirming the payment. Show error to your customer (for example, payment
          // details incomplete)
          // const messageContainer = document.querySelector('#error-message');
          // messageContainer.textContent = error.message;
          // console.log(error.message)
          this.StripeErrorMessage = error.message
        } else {
          // Your customer will be redirected to your `return_url`. For some payment
          // methods like iDEAL, your customer will be redirected to an intermediate
          // site first to authorize the payment, then redirected to the `return_url`.
        }

        this.paymentElement.clear()

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