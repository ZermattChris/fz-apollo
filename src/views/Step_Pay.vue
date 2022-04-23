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
          @click="onOrderBtn"
          :disabled="!termsCheckboxModel"
        >
          {{$t('step-pay.payNow')}}
        </v-btn>
      </div>

      <a 
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
      </a>

      <div v-if="$store.state._DEV == true">

          <br/><br/>

          <ul>
            <!-- <li>NOTE: A TEST Credit Card number has been copied to the Clipboard. Just "paste" it into the CC field in the Stripe form. <br/></li> -->
            <li>Normal with success: 4000007560000009</li>
            <li>3D Secure with success: 4000002500003155</li>
            <li>Fail, insuffecient funds: 4000000000009995</li>
            <li>Fail, card has expired: 4000000000000069</li>
          </ul>
          <!-- <input style="color:white;" id="cc_success" name="cc_success" type="text" value="4000007560000009"> -->
      </div>


    </div>

    <!-- Order Overlay  -->
    <v-overlay :value="orderOverlay">
      <v-progress-circular
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>





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
        payEnabled: false,
        payLoading: false,
        message: this.$store.state.orderMessage,

        elements: undefined,
        card: undefined,

        flightDetails: this.$store.getters.getFlightFromID(this.$store.state.selectedFlight),
        totalPassengers: this.$store.state.totalPassengers,
        wantsPhotos: this.$store.state.wantsPhotos,
        videoPrice: this.$store.state._videoPrice,

        termsCheckboxModel: false,

        orderOverlay: false,    // Shown when the PAY NOW button is hit, while Stripe loads.

        myLocal: enGB,    // default date-fns locale


      }
    },

    async mounted() {

      // VUE_APP_STRIPE_PUBLIC_KEY_TEST
      // VUE_APP_STRIPE_PUBLIC_KEY_LIVE

      if (this.$store.state._DEV === true) {
        console.log('Development Mode, will create a TEST order via Stripe')
        this.stripe = await loadStripe(process.env.VUE_APP_STRIPE_PUBLIC_KEY_TEST)
        return
      }

      // Live Stripe call.
      this.stripe = await loadStripe(process.env.VUE_APP_STRIPE_PUBLIC_KEY_LIVE)

    },

    
    beforeUpdate() {
      // This is how to add a locale to date-fns function calls.
      if (this.$i18n.locale === 'en') this.myLocal = enGB 
      if (this.$i18n.locale === 'de') this.myLocal = de 
      if (this.$i18n.locale === 'ko') this.myLocal = ko 
    },

    computed: {

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

      onOrderBtn() {

        // Disable screen until the Order Now call has completed (with animation)
        this.orderOverlay = true

        let me = this

        let id = this.$store.state.orderID
        if (id === '' || id === undefined)  id = null

        let usrLang = this.$i18n.locale
        //console.log("Current user language: ", lang)

        const data = { 
          "orderId": id,
          "isTest": this.$store.state._DEV,
          "email": this.$store.state.contactEmail,
          "phone": this.$store.state.contactPhone,
          "totalPassengers": this.$store.state.totalPassengers,
          "flightDate": this.$store.state.flightDate,
          "dateRange": {"start": this.$store.state.arriveDate, "end": this.$store.state.departDate},
          "flightId": this.$store.state.selectedFlight,
          "photos": this.$store.state.wantsPhotos,
          "passengerJSON": this.$store.state.passengerObjList,
          "slotJSON": this.$store.state.slotPassengersObj,
          "orderMessage": this.$store.state.orderMessage,
          "usersLanguage": usrLang
        }

        //console.log("Order data sent to Tommy.", data)


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
            return me.stripe.redirectToCheckout({ sessionId: session.stripeSessionId })
          })
          .then(function (result) {
            // If redirectToCheckout fails due to a browser or network
            // error, you should display the localized error message to your
            // customer using error.message.
            if (result.error) {
              console.error(result.error.message);
            }
          })
          .catch(function (error) {
            console.log("Getting an error back in the 'catch'")
            console.error("Error:", error)
          })

      },

    },


    // watch: {

    //   '$store.state.partnerOrder': function() {
    //     const triggerPartnerOrder = this.$store.state.partnerOrder
    //     console.log("Partner Order triggered")
    //     if (triggerPartnerOrder === false) {
    //       console.log("Not a Partner Order, cancel.")
    //       return
    //     }

    //     // Is a Partner order, call the onOrderButton()
    //     console.log("IS a Partner Order.")
    //     this.onOrderBtn(true)

    //   },

    // }

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