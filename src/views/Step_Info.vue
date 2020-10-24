<template>
  <div class="stepInfo">


    <PageHeader :title="timeListerHeaderStr">
      [rough idea for text here] Explain why we need all of this info – safer flights, easier for us 
      to give the best possible experience and to ease the scheduling process on our end...
      <br>
    </PageHeader>

    <!-- START Contact Form -->
    <v-form
      ref="contactForm"
      v-model="contactValid"
    >
      <div class="mb-3 px-2 pt-1 blue-grey lighten-5 rounded">Booking Contact:
        <v-row>
          <v-col
            cols="12"
            sm="6"
            class="pt-2 pb-0 phoneInput"
          ><!-- Start of Phone input field -->
            <v-text-field 
              label="Phone"
              ref="Phone"
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
                    >
                      {{iconInfo}}
                    </v-icon>
                  </template>
                  Click for list of World's Country Code prefixes...
                </v-tooltip>
              </template>
            </v-text-field>
            
            <!-- Tooltip showing the matching Country Name(s) as a String -->
            <v-tooltip top>
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
              @blur="scrollToFirstUserIfValid"
            />
          </v-col>
        </v-row>
      </div>
    </v-form>
    <!-- END Contact Form -->
    

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
            <v-icon  
               v-if="i === 0"
              class="mailIcon"
            >
              {{iconMail}}
            </v-icon>

            <span class="font-weight-bold">{{getPassengersNameForHeader(i)}}</span>

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

          </v-expansion-panel-header>



          <v-expansion-panel-content>
            <Passenger
              :passengerNr="i"
              :disabled=contactValid
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
      class=""
      max-width="800px"
      persistent
    >
      <v-card>
        <v-card-title class="text-h5 font-weight-bold lineHeight">
          Please Review &amp; Confirm <br>your Booking Details
        </v-card-title>

        <v-card-text class="lineHeight">
          Please check that your Booking information is correct, especially
          your Phone Number and Email (otherwise we can't contact you if we need to 
          adjust your booking due to weather, etc.)
        </v-card-text>

        
        <!-- Start of table listing -->
        <v-simple-table
          scrollable
          height="35vh"
          dense
          class="outterTable mx-sm-auto "
        >
          <template v-slot:default>
            

            <v-simple-table
              class="mb-6 infoTable"
              dense
            >
              <template v-slot:default>
                <tbody>
                  <tr>
                    <!-- Number of People in booking -->
                    <td class="font-weight-bold">Number of People flying: </td>
                    <td>{{nrBookingPeople}}</td>
                  </tr>
                  <tr>
                    <!-- Flight Date -->
                    <td class="font-weight-bold">Flight Date:</td>
                    <td>{{bookingDate}}</td>
                  </tr>
                  <tr>
                    <!-- Flight Time -->
                    <td class="font-weight-bold">Flight Meeting Time:  </td>
                    <td>{{bookingFlightTime}}</td>
                  </tr>
                  <tr>
                    <!-- Flight Type/Name -->
                    <td class="font-weight-bold">Flight:</td>
                    <td>{{bookingFlight}}</td>
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
              class="ml-6"
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
              class="ml-6"
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
              class="mt-4 "
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
                      Speed
                    </th>
                    <th class="text-left">
                      Kg
                    </th>
                    <th class="text-left">
                      Icons
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="passenger in passengersList"
                    :key="passenger.id"
                  >
                    <td>{{ passenger.name }}</td>
                    <td>{{ passenger.sex }}</td>
                    <td>{{ passenger.age }}</td>
                    <td>{{ passenger.speed }}</td>
                    <td>{{ passenger.weightKg }}</td>
                    <td>(icons)</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>




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
            @click="confirmDetailsDialog = false"
          >
            Change Details
            <v-icon right>{{iconClose}}</v-icon>
          </v-btn>

          <v-spacer></v-spacer>

          <v-btn
            color="primary"
            elevation="2"
            rounded
            large
            class="px-4 mx-auto"
            @click="confirmDetailsDialog = false"
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
  import { mdiHelpCircle, mdiEmailCheckOutline, mdiCheckCircle, mdiMinusCircleOutline, mdiPlus, mdiArrowRightCircle, mdiClose } from '@mdi/js'
  
  import countrycodes from '@/store/countrycodes.js'

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
    },
    mounted() {
      // set focus to Phone Input if field is empty.
      if (this.contactPhone === '') {
        this.$refs.Phone.focus()
      }
    },


    computed: {


      passengersList: function () {
        return this.$store.state.passengerObjList
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
        return this.$store.state.nrPeople
      },
      bookingDate: function () {
        return this.$store.state.flightDate
      },
      bookingFlightSlot: function () {
        return this.$store.state.timeSlot
      },
      bookingFlightTime: function () {
        return this.$store.state.timeSlotLabel
      },
      bookingFlight: function () {
        return this.$store.state.selectedFlight
      },
      bookingPhotosOption: function () {
        return this.$store.state.wantsPhotos
      },
      

      userFlightDate: function () {
        return this.$store.state.flightDate
      },
      usersGroupSize: function () {
        return this.$store.state.nrPeople
      },
      timeListerHeaderStr: function () {
        if (this.$store.state.nrPeople === 1) {
          return "3. Your Details"
        }
        return "3. Group Details"
      }
    },

    methods: {
      
      // toTop: function () {
      //   this.$vuetify.goTo(0)
      // },

      getIsFormValid: function (passengerNr) {
        return this.$store.getters.getIsValidById(passengerNr)
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

      // onPhoneKeyPress: function (ev) {
      //   ev.target.value = this.stripPhoneJunkChars(ev.target.value)
      // },

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

      // Scroll down to the first, opened expander panel if Contact form is valid
      scrollToFirstUserIfValid: function () {
        if (this.contactValid === true) {
          setTimeout(() => { this.$scrollTo('#expand-panels', 500) }, 300)
        }
      },
      scrollToElement: function (ev) {
        let el = ev.currentTarget
        setTimeout(() => { this.$scrollTo(el, 500) }, 300)
      },

    },

    watch: {
      
      // stepxCompleted: function () {
      //   //console.log('Step3 Completed? ' + newVal)
      // },

      // This triggers the update of the NavButton component by causing the
      // computed stepCompleted to be triggered, updating the NavList in Store.
      stepCompleted: function () {
        //console.log('Step3 Completed? ' + newVal)
      },

      contactValid: function () {
        //console.log('contactValid changed', this.contactValid)
        if (this.contactValid === true && this.activePanelsList.length === 0) {
          //console.log('open first expansion', this.contactValid)
          this.activePanelsList = [0]
          //this.$scrollTo('#expand-panels', 500)
          // attempt to jump to opened Expansion panels if form valid.
          //this.scrollToFirstUserIfValid()
        } else {
          this.activePanelsList = []
        }
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

.v-expansion-panel-header--active::before {
  background-color: #4b4b4b;
  opacity: 0.1 !important;
  border-radius: 2px !important;
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
  max-width: 750px;
}
.infoTable {
  max-width: 400px;
}
</style>