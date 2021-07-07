<template>
  <div class="stepInfo"
  
  >


    <PageHeader :title="timeListerHeaderStr">
      We only ask for the passenger information that we need to help 
      make your flight fun, easy and enjoyable. We never share any 
      information with 3rd parties.
      <br>
    </PageHeader>

    

    <!-- START Passenger Forms -->
    <v-expansion-panels
      v-model="activePanelsList"
      multiple
      :disabled = !contactValid
      :inset="!mobile"
      ref="passengerPanels"
      id="expand-panels"
    >
      <v-expansion-panel
          v-for="(item, i) in usersGroupSize"
          :key="i"
          active-class="activePanel"
        >

          <v-expansion-panel-header
            @click="scrollToElement"
          >
            <template v-slot:default="{ open }">

              <v-icon  
                v-if="i === 0"
                class="mailIcon"
              >
                {{iconMail}}
              </v-icon>

              <span class="font-weight-bold">{{getPassengersNameForHeader(i)}}

              <span v-if="!open" class="overline text--disabled pl-4">Click to open...</span>
              </span>

              <v-icon 
                v-if="getIsFormValid(i)" 
                class="formValidIcon"
                color="success"
              >
                {{iconCheckmark}}
              </v-icon>
              <v-icon v-else
                class="formValidIcon"
                color="error"
              >
                {{iconMinusCircle}}
              </v-icon>

            </template>
          </v-expansion-panel-header>


          <!-- START: Contact form -->
          <v-form
            ref="contactForm"
            v-model="contactValid"
          >
            <v-row v-if="i === 0"
              class="py-4 px-4"
            >
              <v-col
                cols="12"
                sm="6"
                class="pt-2 pb-0 phoneInput"
              ><!-- Start of Phone input field -->
                <v-text-field 
                  label="Phone"
                  ref="Phone"
                  id="Phone"
                  v-model="contactPhone"
                  background-color="white"
                  :rules="[rules.required, rules.phone]" 
                  hide-details="auto"
                  outlined
                  dense
                  type="tel"
                  name="tel"
                  placeholder="Country Code &amp; Phone Number"
                  hint="Example: +1 203 456 7890"
                  persistent-hint
                  prefix="+"
                  @keyup="updatePhoneCountryData"
                  @blur="stripPhoneJunkOnBlur"
                >
                  <template v-slot:append-outer>
                    <v-tooltip
                      bottom
                    >
                      <template v-slot:activator="{ on }">
                        <v-icon 
                          v-on="on"
                          @click="listCountries"
                          tabindex="-1"
                        >
                          {{iconInfo}}
                        </v-icon>
                      </template>
                      Click for list of World's Country Code prefixes...
                    </v-tooltip>
                  </template>
                </v-text-field>
                
                <!-- FLAG Icon + Tooltip showing the matching Country Name(s) as a String -->
                <v-tooltip top >
                  <template v-slot:activator="{ on, attrs }">
                    <div
                      v-bind="attrs"
                      v-on="on"
                      class="countryFlags"
                    >
                      {{userPhoneCountriesDisplay}}
                    </div>
                  </template>
                  <span>{{userPhoneCountriesStrings}}</span>
                </v-tooltip>
                
              <!-- END of Phone input field -->
              </v-col>

              <v-col
                cols="12"
                sm="6"
                class="pt-2 pb-3 pt-xs-1 pb-sm-0"
              >
                <v-text-field 
                  label="Email"
                  ref="Email"
                  v-model="contactEmail"
                  background-color="white"
                  :rules="[rules.required, rules.email]"
                  hide-details="auto"
                  outlined
                  dense
                  type="email"
                  name="email"
                  placeholder="you@mail.com"
                />
              </v-col>
            </v-row>

        </v-form>
        <!-- END Contact Form -->
                
        <v-divider
          v-if="i === 0"
          class="mb-0"
        ></v-divider>

        <v-expansion-panel-content>
          <Passenger
            :passengerNr="i"
          />
        </v-expansion-panel-content>

      </v-expansion-panel>
      
    </v-expansion-panels>
    <!-- END Passenger Forms -->

    <!-- START of Country Code Listings dialog -->
    <v-dialog
      v-model="countriesListingDialog"
      max-width="400"
      class="noOverflow"
    >
      <v-card>
        <v-card-title>
          Country Phone Prefix Codes
        </v-card-title>

        <v-card-text>
          Here's a listing of valid Country Code prefixes for reference. Double-click to select a Prefix.
        </v-card-text>

        
        <!-- Start of table listing -->
        <v-simple-table
          scrollable
          height="55vh"
        >
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  Flag
                </th>
                <th class="text-left">
                  Country
                </th>
                <th class="text-left">
                  Prefix Code
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="countryObj in cc"
                :key="countryObj.code"
                @dblclick="handleCountryTableClick(countryObj.phoneCode)"
              >
                <td>{{ countryObj.map }}</td>
                <td>{{ countryObj.value }}</td>
                <td>+{{ countryObj.phoneCode }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <!-- End of table listing -->

        <v-card-actions class="dialogFooter">
          <v-spacer></v-spacer>

          <v-btn
            color="purple"
            text
            @click="countriesListingDialog = false"
          >
            Close
          </v-btn>

        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- END of Country Code Listings dialog -->






    <!-- START Confirm Passenger details dialog -->
    <v-dialog
      v-model="confirmDetailsDialog"
      max-width="800px"
      content-class="fullWidthDialog"
      overlay-opacity="0.8"
      persistent
      scrollable
    >
      <v-card height="auto">
        <v-card-title class="text-h5 font-weight-bold lineHeight">
          Please Review &amp; Confirm <br>your Booking Details
        </v-card-title>

        <v-card-text class="lineHeight d-none d-sm-flex">
          Please check that your Booking information is correct, especially
          your Phone Number and Email (otherwise we can't contact you if we need to 
          adjust your booking due to weather, etc.)
        </v-card-text>

        
        <!-- Start of table listing -->
        <v-simple-table
          scrollable
          height="55vh"
          dense
          class="outterTable mx-sm-auto"
        >
          <template v-slot:default>
            

            <v-simple-table
              class="mb-2 mb-sm-4 infoTable"
              dense
            >
              <template v-slot:default>
                <tbody>
                  <tr>
                    <!-- Number of People in booking -->
                    <td class="font-weight-bold">People flying: </td>
                    <td>
                      <v-chip
                        color="deep-orange"
                        class="pl-4 pr-6"
                        id="passenger-btn"
                      >
                        {{ nrBookingPeople }}
                      </v-chip>
                      <!-- <v-chip
                        color="deep-purple"
                        class="px-6 my-1 my-sm-2"
                        outlined
                      >
                        <strong class="">{{nrBookingPeople}}</strong>
                      </v-chip> -->
                  </td>
                  </tr>
                  <tr>
                    <!-- Flight Date -->
                    <td class="font-weight-bold">Flight Date:</td>
                    <td>{{bookingDate}}</td>
                  </tr>
                  <!-- <tr>
                    <td class="font-weight-bold">Flight Nr &amp; <br/>Meeting Time:  </td>
                    <td>#<strong>{{bookingFlightSlot}}</strong> — {{bookingFlightTime}}</td>
                  </tr> -->
                  <tr>
                    <!-- Flight Type/Name -->
                    <td class="font-weight-bold">Flight:</td>
                    <td class="text-capitalize">{{bookingFlight}}</td>
                  </tr>
                  <tr>
                    <!-- Photos Option -->
                    <td class="font-weight-bold">Photos + Videos: </td>
                    <td>{{bookingPhotosOption}}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>

            <!-- Phone Number -->
            <v-chip
              class="ml-6 mb-2"
              color="indigo darken-3"
              outlined
            >
              <v-icon left>
                mdi-phone
              </v-icon>
              +{{contactPhone}}
            </v-chip>

            <!-- Email -->
            <v-chip
              class="ml-6 mb-2"
              color="indigo darken-3"
              outlined
            >
              <v-icon left>
                mdi-email
              </v-icon>
              {{contactEmail}}
            </v-chip>


            
            <v-simple-table
              fixed-header
              height=""
              class="mt-1 mt-sm-4"
              dense
            >
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">
                      Name
                    </th>
                    <th class="text-left">
                      M/F
                    </th>
                    <th class="text-left">
                      Age
                    </th>
                    <th class="text-left">
                      Confidence
                    </th>
                    <th class="text-left">
                      Kg
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="passenger in passengersList"
                    :key="passenger.id"
                  >
                    <td class="text-capitalize">
                      {{passenger.id +1}}) 
                      {{ passenger.name }}
                    </td>
                    <td><v-icon :color="maleFemaleColour(passenger.sex)">{{maleFemaleIcon(passenger.sex)}}</v-icon></td>
                    <td>{{ passenger.age }}</td>
                    <td>{{ speedLabel(passenger.speed) }}</td>
                    
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <td
                          v-bind="attrs"
                          v-on="on"
                          class=""
                        >
                          {{ passenger.weightKg }}
                        </td>
                      </template>
                      <span>
                        {{ (weight(passenger.id) * 2.204621999990873).toFixed(0) }}{{ '\xa0' }}Pounds, 
                        {{ (weight(passenger.id) * 0.157473).toFixed(1) }}{{ '\xa0' }}Stone
                      </span>
                    </v-tooltip>

                  </tr>
                </tbody>
              </template>
            </v-simple-table>


                <!-- <div class="mt-8">
                  TODO: How to handle passengers spread over multiple time slots??
                </div> -->


          </template>
        </v-simple-table>
        <!-- End of table listing -->

        <v-card-actions class="pb-4 dialogFooter">
          <v-spacer></v-spacer>

          <v-btn
            color=""
            rounded
            outlined
            large
            class="px-4 mx-auto"
            style="background-color:white;"
            @click="confirmDetailsDialog = false"
          >
            Cancel
            <v-icon right>{{iconClose}}</v-icon>
          </v-btn>

          <v-spacer></v-spacer>

          <v-btn
            color="primary"
            elevation="2"
            rounded
            large
            class="px-4 mx-auto"
            @click="confirmDetailsDialog = false; goToNextStep()"
          >
            Confirm
            <v-icon right>{{iconNextArrow}}</v-icon>
          </v-btn>

          <v-spacer></v-spacer>

        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- END Confirm Passenger details dialog -->

  </div>
</template>

<script>
  // import Vue from 'vue'
  import PageHeader from '@/components/PageHeader.vue'
  import Passenger from '@/components/Passenger.vue'
  import { isMobile } from 'mobile-device-detect'
  import { mdiHumanMale, mdiHumanFemale, mdiHumanMaleFemale, mdiHelpCircle, mdiEmailCheckOutline, mdiCheckCircle, mdiMinusCircleOutline, mdiPlus, mdiArrowRightCircle, mdiClose } from '@mdi/js'
  
  import countrycodes from '@/store/countrycodes.js'

  import { format, parseISO } from 'date-fns'

  export default {
    name: "Step_Info",
  
    components: {
      PageHeader,
      Passenger
    },

    data () {
      return {
        mobile: isMobile,
        contactValid: false,
        
        iconInfo: mdiHelpCircle,
        iconMail: mdiEmailCheckOutline,
        iconCheckmark: mdiCheckCircle,
        iconMinusCircle: mdiMinusCircleOutline,
        iconPlus: mdiPlus,
        iconNextArrow: mdiArrowRightCircle,
        iconClose: mdiClose,
        iconPeople: mdiHumanMaleFemale,
        iconMale: mdiHumanMale,
        iconFemale: mdiHumanFemale,

        activePanelsList:  [],

        passengersName: '',

        cc: countrycodes,
        userPhoneCountryObjList: [],
        userPhoneCountriesDisplay: '',
        userPhoneCountriesStrings: '',
        countriesListingDialog: false,
        countryPrefixCodeBuffer: '',

        rules: {
          required: value => !!value || 'Required.',
          counter: value => value.length <= 20 || 'Max 20 characters',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid Email...'
          },
          phone: value => {
            const pattern = /^(?:[0-9-] ?){6,14}[0-9]$/;
            return pattern.test(value) || 'hint: [countryCode] + Number (no leading Zeros)'
          },
        }
      }
    },

    created() {
      // Show Phone country flags and Tooltip if matching.
      this.updatePhoneCountryData()

      // Open all the accordians
      for (let step = 0; step < this.usersGroupSize; step++) {
        // Runs 5 times, with values of step 0 through 4.
        this.activePanelsList.push(step)
      }


    },
    mounted() {
      // set focus to Phone Input if field is empty.
      if (this.contactPhone === '') {
        this.$refs.Phone[0].focus()
      }

      
      
    },


    computed: {

      getAllPassengersValid: function () {
        return this.$store.getters.getAllPassengersValid
      },

      passengersList: function () {
        return this.$store.getters.getPassengersList
      },

      confirmDetailsDialog: {
        get() {
          return this.$store.state._showReviewDialog
        },
        set(boolVal) {
          this.$store.dispatch('showReviewDialog', boolVal)
        }
      },

      stepCompleted: function () {

        // I think this can all go into the Store's '' getter call. Then just need to 
        // do a watch to see if this Step is valid...

        // Ask the Store if Step 3 is completed (Booking Contact, plus valid for all Passengers)
        // Add a watch on this and update the Store if this returns true.
        // // Set 'Time' to true in the store _navList
        // const payload = {'Info': true}
        // this.$store.dispatch('setNavListItem', payload)
        let allPassengerFormsValid = this.$store.getters.getAllPassengersValid
        let payload = {}
        let valid = false
        if (allPassengerFormsValid && this.contactValid) {
          //console.log('Info Step COMPLETED')
          payload = {'Info': true}
          valid = true
        } else {
          //console.log('Info Step Not complete yet...')
          payload = {'Info': false}
          valid = false
        }
        this.$store.dispatch('setNavListItem', payload)
        return valid
        // return this.$store.getters.step_infoValid
      },


      contactPhone: {
        get() {
          let rawStr = this.$store.state.contactPhone
          return rawStr
        },
        set(phone) {
          return this.$store.dispatch('setContactPhone', phone)
        }
      },
      contactEmail: {
        get() {
          return this.$store.state.contactEmail
        },
        set(email) {
          return this.$store.dispatch('setContactEmail', email)
        }
      },

      nrBookingPeople: function () {
        return this.$store.getters.getTotalPassengers
      },
      bookingDate: function () {
        return format(parseISO(this.$store.state.flightDate), 'PPPP')
      },
      bookingFlightSlot: function () {
        return this.$store.state.timeSlot
      },
      bookingFlightTime: function () {
        //console.log(this.$store.state.timeSlotLabel)
        //return this.$store.state.timeSlotLabel

        return localStorage.selectedTimeslotLabel
      },
      bookingFlight: function () {
        const flightObj = this.$store.getters.getFlightObjById()
        console.log(flightObj)
        if (flightObj === undefined) return
        return flightObj.name + " " + flightObj.price + " CHF"
      },
      bookingPhotosOption: function () {
        const wantsFotos = this.$store.state.wantsPhotos
        let formattedStr = 'No Photos'
        if (wantsFotos) {
          formattedStr = 'Yes, want Photos'
        }
        return formattedStr
      },
      

      userFlightDate: function () {
        return this.$store.state.flightDate
      },
      usersGroupSize: function () {
        return this.$store.getters.getTotalPassengers
      },
      timeListerHeaderStr: function () {
        if (this.nrBookingPeople === 1) {
          return "3. Your Details"
        }
        return "3. Group Details"
      }
    },

    methods: {

      goToNextStep: function () {
        this.$store.dispatch('hasReviewedData', true)    // This store value triggers NavBtn to go to next step.
        const targetStep = 'Pay'
        console.log('Nav to:', targetStep)
        this.$router.push({
          path: targetStep
        })
      },
      
      weight: function (id) {
        return this.$store.getters.getWeightById(id)
      },

      speedLabel: function (speedString) {
        let msg = "Bad Value"
        switch (speedString) {
          case 0:
            msg = "Assistance*"
            break
          case 2:
            msg = "Low"
            break
          case 4:
            msg = "Nervous"
            break
          case 6:
            msg = "Okay-ish"
            break
          case 8:
            msg = "Confident"
            break
          case 10:
            msg = "Very Confident!"
            break
        }
        return msg  
      },
      maleFemaleColour: function (mfString) {
        if (mfString === 'male') { return "blue" }
        return "pink"
      },
      maleFemaleIcon: function (mfString) {
        if (mfString === 'male') { return this.iconMale }
        return this.iconFemale
      },

      getIsFormValid: function (passengerNr) {

        // See if we can figure out how to expand next passenger once
        // a passenger is marked as valid.
        // activePanelsList:  [0]
        const isThisPassengerValid = this.$store.getters.getIsValidById(passengerNr)

        // // add next passengerNr to activePanelsList, which should make it expand.
        // if (this.activePanelsList.indexOf(passengerNr + 1) === -1) {
        //   this.activePanelsList.push(passengerNr + 1)
        // }

        return isThisPassengerValid
      },

      getPassengersNameForHeader: function (passengerNumber) {
      
        // Ask this passenger for their name.
        let myName = this.$store.getters.getNameById(passengerNumber)
        //console.log(passengerNumber + " :: " + myName)

        // If empty, diplay default string
        if (myName === '') {
          // New Booking, no Passenger Name yet entered. Show default.
          if (passengerNumber === 0 ) {
            myName = 'Contact Passenger'
          } else {
            myName = 'Passenger #' + (passengerNumber +1)
          }
        } else {
          // Passenger has a name already, just add the number...
          if (passengerNumber === 0 ) {
            myName += ' (Contact)'
          } else {
            myName = '#' + (passengerNumber +1) + " " + myName
          }
        }
        return myName
      },


      // Select the Country Code Prefix when a user clicks on a row in the 
      // Popup table's list
      handleCountryTableClick: function (clickedCodePrefix) {
        //alert("clicked! " + clickedCodePrefix)
        this.countryPrefixCodeBuffer = clickedCodePrefix
        //if (this.contactPhone === '' || this.contactPhone === '+') {
        this.contactPhone = this.countryPrefixCodeBuffer
        this.countriesListingDialog = false // close dialog box
        //}
      },

      stripPhoneJunkOnBlur: function (ev) {
        // kill off trailing spaces and replace multiple spaces with a single one.
        let cleanedStr = ev.target.value.replace(/[ ]+$/, '')
        cleanedStr = cleanedStr.replace(/\s\s+/g, ' ')
        // kill off trailing '-' and replace multiple '---' with a single one.
        cleanedStr = cleanedStr.replace(/[-]+$/, '')
        cleanedStr = cleanedStr.replace(/-+/g, '-')
        this.contactPhone = cleanedStr

        //this.scrollToFirstUserIfValid()
      },

      stripPhoneJunkChars: function (stringToStrip) {
        let cleanedStr = stringToStrip.replace(/^[ ]+/, '')
        cleanedStr = cleanedStr.replace(/^0+/, '')
        cleanedStr = cleanedStr.replace(/[^\d -]/, '')  // remove all non numeric and space chars
        return cleanedStr
      },

      // Pull this into a Method, so we can both load it when the page is first
      // displayed and also when the user changes input via the watch contactPhone

      // Trying to handle leading Zeros in string (after the '+' symbol). 
      // Have removed all the Country Codes that start with Zero (Antacrtica, etc)
      //
      updatePhoneCountryData: function () {
        let userInputStr = this.contactPhone + ''   // convert to String
        // split into 2x strings, the first is the '+' and the rest of the number as a String
        // if (userInputStr.charAt(0) === '+') {
        //   userInputStr = userInputStr.substring(1)
        // }
        // Remove all leading Zeros from number string and then recombine.
        // userInputStr = userInputStr.replace(/^0+/, '')
        // userInputStr = userInputStr.replace(/[^\d ]/, '')  // remove all non numeric and space chars
        userInputStr = this.stripPhoneJunkChars(userInputStr)

        const searchInt = parseInt(userInputStr)
        if (isNaN(searchInt) === true) {
          this.userPhoneCountriesDisplay = ''
          this.userPhoneCountriesStrings = ''
          this.contactPhone = userInputStr
          return
        }
        var results = this.cc.filter(function (obj) { return obj.phoneCode === searchInt });
        if (results.length === 0 && this.userPhoneCountriesDisplay !== '') return
        this.userPhoneCountriesDisplay = ''
        this.userPhoneCountriesStrings = ''
        for (let i = 0; i < results.length; i++) {
          //console.log(results[i].map)
          this.userPhoneCountriesDisplay = this.userPhoneCountriesDisplay + results[i].map + " "
          // format Tooltip sting to use commas to sep values.
          if (i === 0) {
            this.userPhoneCountriesStrings = this.userPhoneCountriesStrings + results[i].value
          } else {
            this.userPhoneCountriesStrings = this.userPhoneCountriesStrings  + ", " + results[i].value
          }
        }
        this.contactPhone = userInputStr
      },


      listCountries: function () {
        //alert('click:append')
        this.countriesListingDialog = true
      },

      // // Scroll down to the first, opened expander panel if Contact form is valid
      // scrollToFirstUserIfValid: function () {
      //   if (this.contactValid === true) {
      //     setTimeout(() => { this.$scrollTo('#expand-panels', 500) }, 300)
      //   }
      // },
      scrollToElement: function (ev) {
        let el = ev.currentTarget
        setTimeout(() => { this.$scrollTo(el, 500) }, 300)
      },

    },

    watch: {
      
      getAllPassengersValid: function () {
        //console.log('Step3 Completed? ' + newVal)
      },

      // This triggers the update of the NavButton component by causing the
      // computed stepCompleted to be triggered, updating the NavList in Store.
      stepCompleted: function () {
        //console.log('Step3 Completed? ' + newVal)
      },

      contactValid: function () {

      },

    }

  }

</script>

<style>
  .fullWidthDialog {
    width: 100%;
    margin-left: 6px;
    margin-right: 6px;
  }
</style>

<style scoped>

.stepInfo {
  max-width: 1100px;
}

  .steps-controls {
    position: absolute;
    left:0; right: 0;
    text-align: center;
    margin: 0 auto;
  }
/* Header background colour */


.v-expansion-panel-header--active::before {
  background: rgb(75,75,75);
  background: linear-gradient(90deg, rgba(75,75,75,1) 10%, rgba(75,75,75,0.08585441012342432) 75%, rgba(106,27,154,0.3379552504595589) 100%) !important;
  opacity: 0.1 !important;
  border-radius: 2px !important;
  border: 2px solid indigo;
}


.activePanel {
  border-color: rgba(var(--fzselected-color), 1.0) !important;
  border-width: 2px !important;
  border-radius: 5px !important;
  border-style: solid !important;
}

.phoneInput {
  position: relative;
}
  .phoneInput .countryFlags {
    position: absolute;
    right: 60px;
    top: 10px;
    font-size: 1.5em;
    color: black;
    cursor: default;
  }

.fixedPos {
  position: fixed;
  height: 150px;
}
.noOverflow {
  overflow: hidden;
}

.mailIcon {
  max-width: 50px;
  color: #6A1B9A;
}

.formValidIcon {
  align-self: flex-end;
  width: 55px;
  justify-content: flex-end;
  padding-right: 10px;
}

.lineHeight {
  line-height: 1.2em;
}

.outterTable {
  max-width: 850px;
}
.infoTable {
  max-width: 600px;
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
}

</style>