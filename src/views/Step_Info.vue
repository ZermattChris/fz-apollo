<template>
  <div class="stepInfo"
  
  >


    <PageHeader :title="'3. ' + $tc('step-info.title', usersGroupSize === 1)">
      {{$t('step-info.description')}}
    </PageHeader>

<!-- 
<InternationalTelInput>

</InternationalTelInput> -->
    

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
          disabled
        >

          <v-expansion-panel-header>
            <template v-slot:default="{}">

              <v-icon  
                v-if="i === 0"
                class="mailIcon"
              >
                {{iconMail}}
              </v-icon>

              <span class="pl-1 font-weight-bold">{{getPassengersNameForHeader(i)}}

              <!-- <span v-if="!open" class="overline text--disabled pl-4">Click to open...</span> -->
              
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
                >

                <div id="telWrapper" class="d-flex" style="" >

                  <!-- START of Country Code Listings pup-up -->
                  <v-card
                      class="excluded countryPopUp"
                      v-show="countriesListingDialog"
                    >
                      <!-- Start of table listing -->
                      <v-simple-table
                        scrollable
                        height="55vh"
                      >
                        <template v-slot:default>
                          <tbody @click="onCountryListingClickNew">
                            <tr
                              v-for="countryObj in filteredCountryCodes"
                              :key="countryObj.code"
                              @click="onCountryListingClick(countryObj.phoneCode, countryObj.map, countryObj.value)"
                            >

                              <td :style="countryObj.code != '' ? '' : 'height:5px; background-color:rgb(240,240,240);'">
                                <span v-show="countryObj.code != ''">+</span>
                                {{ countryObj.phoneCode }}
                              </td>
                              <td :style="countryObj.code != '' ? '' : 'height:5px; background-color:rgb(240,240,240);'">
                                {{ countryObj.map }}
                              </td>
                              <td :style="countryObj.code != '' ? '' : 'height:5px; background-color:rgb(240,240,240);'">
                                {{ countryObj.value }}
                              </td>
                            </tr>
                            
                          </tbody>
                        </template>
                      </v-simple-table>
                      <!-- End of table listing -->
                    </v-card>
                  <!-- END of Country Code Listings -->



                  <!-- Start of Country Code input field -->
                  <div id="flagWrapper" style="position:relative;">
                    <v-text-field 
                      ref="CountryCode"
                      id="CountryCode"
                      name="CountryCode"
                      v-model="countryCode"
                      class="pr-1"
                      style="width:110px; min-width:80px; flex-grow:0; text-align:center;"
                      background-color="white"
                      hide-details="auto"
                      outlined
                      dense
                      prefix="+"
                      label="Country"
                      :hint="countryName"
                      persistent-hint

                      v-click-outside="{
                        handler: onClickOutside,
                        include: include,
                      }"

                      @keyup="updateCountryCode"
                      @focus="onCountryCodeFocus"
                      @blur="onCountryCodeBlur"

                      :rules="[rules.required, rules.countryCodeCheck]" 
                    >
                    </v-text-field>
                    <div
                      id="flagIconHolder"
                      style="position:absolute; right:18px; top:6px; font-size:1.3em;"
                      @click="onCountryCodeFlagClick"
                    >
                      {{countryMap}}
                    </div>
                  </div>




                  <!-- Start of Phone input field -->
                  <v-text-field 
                    :label="$t('step-info.phone')"
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
                    persistent-hint
                    @keyup="updatePhoneCountryData"
                    @blur="stripPhoneJunkOnBlur"
                    @focus="scrollToId('#expand-panels')"
                  >
                  </v-text-field>
                </div>

              </v-col>   <!-- END of Phone input field -->

              <v-col
                cols="12"
                sm="6"
                class="pt-2 pb-3 pt-xs-1 pb-sm-0"
              >
                <v-text-field 
                  :label="$t('step-info.email')"
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
          {{$t('step-info.confirm.title')}}
        </v-card-title>

        <v-card-text class="lineHeight d-sm-flex">
          {{$t('step-info.confirm.description')}}
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
                    <td class="font-weight-bold">{{$t('step-info.confirm.people-flying')}}: </td>
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
                    <td class="font-weight-bold">{{$t('step-info.confirm.flight-date')}}:</td>
                    <td>{{bookingDate}}</td>
                  </tr>
                  <tr>
                    <td class="font-weight-bold">{{$t('step-info.confirm.meeting')}}:</td>
                    <td v-html="meetingTimesString"></td>
                  </tr>
                  <tr>
                    <!-- Flight Type/Name -->
                    <td class="font-weight-bold">{{$t('step-info.confirm.flight')}}:</td>
                    <td class="text-capitalize">{{bookingFlight}}</td>
                  </tr>
                  <tr>
                    <!-- Photos Option -->
                    <td class="font-weight-bold">{{$t('step-info.confirm.photos-videos')}}: </td>
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
              +{{countryCode + ' ' + contactPhone}}
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
                      {{$t('step-info.confirm.name')}}
                    </th>
                    <th class="text-left">
                      {{$t('step-info.confirm.m-f')}}
                    </th>
                    <th class="text-left">
                      {{$t('step-info.confirm.age')}}
                    </th>
                    <th class="text-left">
                      {{$t('step-info.confirm.confidence')}}
                    </th>
                    <th class="text-left">
                      {{$t('step-info.confirm.kg')}}
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



                    <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <td
                          v-bind="attrs"
                          v-on="on"
                          class=""
                        >
                          {{ speedLabel(passenger.speed) }}
                        </td>
                      </template>
                      <span>
                        {{$t('step-info.confirm.confidence-hover')}}
                      </span>
                    </v-tooltip>
                    


                    <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <td
                          v-bind="attrs"
                          v-on="on"
                          class=""
                        >
                          {{ passenger.weightKg }}{{ weightPlus(passenger.weightKg) }}
                        </td>
                      </template>
                      <span>
                        {{ (weight(passenger.id) * 2.204621999990873).toFixed(0) }}{{ '\xa0' }}{{$t('step-info.pounds')}}, 
                        {{ (weight(passenger.id) * 0.157473).toFixed(1) }}{{ '\xa0' }}{{$t('step-info.stones')}}
                      </span>
                    </v-tooltip>

                  </tr>
                </tbody>
              </template>
            </v-simple-table>

            <!-- <p 
              class="mt-6 red--text font-weight-bold"
              v-if="passenger.speed === 0"

              
              
            >
              <sup>*</sup>Assistance required. Please give us details on this passenger in 
              the Booking Message on the next page. We will be in contact with you to organise.
            </p> -->

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
            {{$t('step-info.confirm.cancel')}}
            <v-icon right>{{iconPrevArrow}}</v-icon>
          </v-btn>

          <v-spacer></v-spacer>

          <v-btn
            color="fzPink"
            elevation="2"
            rounded
            large
            class="px-4 mx-auto white--text"
            @click="confirmDetailsDialog = false; goToNextStep()"
          >
            {{$t('step-info.confirm.confirm')}}
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
  import { mdiHumanMale, mdiHumanFemale, mdiHumanMaleFemale, mdiHelpCircle, mdiEmailCheckOutline, mdiCheckCircle, mdiMinusCircleOutline, mdiPlus, mdiArrowRightCircle, mdiArrowLeftCircle, mdiClose } from '@mdi/js'
  
  import countrycodes from '@/store/countrycodes.js'

  // import InternationalTelInput from '@/components/InternationalTelInput.vue'

  import { format, parseISO } from 'date-fns'
  import { enGB, de, ko } from 'date-fns/locale'

  // import i18n from '@/i18n'

  export default {
    name: "Step_Info",
  
    components: {
      PageHeader,
      Passenger,
      // InternationalTelInput
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
        iconPrevArrow: mdiArrowLeftCircle,
        iconClose: mdiClose,
        iconPeople: mdiHumanMaleFemale,
        iconMale: mdiHumanMale,
        iconFemale: mdiHumanFemale,

        activePanelsList:  [],

        passengersName: '',

        cc: countrycodes,
        filteredCountryCodes: countrycodes,
        countryMap: '',
        userPhoneCountryObjList: [],
        userPhoneCountriesDisplay: '',
        userPhoneCountriesStrings: '',
        countriesListingDialog: false,
        countryPrefixCodeBuffer: '',

        myLocal: enGB,    // default date-fns locale

        rules: {
          required: value => !!value || this.$t('form.required'),
          counter: value => value.length <= 20 || this.$t('form.max-20-chars'),
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || this.$t('form.invalid-email')
          },
          phone: value => {
            const pattern = /^(?:[0-9-] ?){6,14}[0-9]$/
            return pattern.test(value) || this.$t('form.phone-hint')
          },
          countryCodeCheck: value => {
            const pattern = /[0-9]{1,3}/
            return pattern.test(value) || ''
          },

          
        }
      }
    },

    created() {

      // Find Country Flag that matches the CountryCode value.
      const foundCodes = countrycodes.filter( country => (country.value) === this.countryName )
      // console.log(this.countryName)
      // console.log(foundCodes)
      if ( foundCodes.length > 0 ) {    // Single match found. Update flag
        this.countryMap = foundCodes[0].map
      }

      // Filter values in Country Code drop menu, to match what's in the displayed input.
      this.updateCountryCode()

      // Open all the accordians
      for (let step = 0; step < this.usersGroupSize; step++) {
        // Runs 5 times, with values of step 0 through 4.
        this.activePanelsList.push(step)
      }


    },
    mounted() {
      

    },


    beforeUpdate() {
      // This is how to add a locale to date-fns function calls.
      if (this.$i18n.locale === 'en') this.myLocal = enGB 
      if (this.$i18n.locale === 'de') this.myLocal = de 
      if (this.$i18n.locale === 'ko') this.myLocal = ko 
    },




    computed: {


      // Build a display string showing the number of passengers for each 
      // chosen TimeSlot in the booking.
      meetingTimesString: function () {

        let result = ''
        const slotList = this.$store.state.slotPassengersObj.slotsList
        //console.log(slotList)

        slotList.forEach((element, index) => {
          //console.log(index)
          // Need to guard against null, as an empty timeSlot is added to list with a null.
          if (!this.isObjEmpty(element)) {
            //console.log(element.timeString)
            //console.log(element.passengers)
            //console.log(index)
            if (element.passengers > 0) {
              let lineBreak = ""
              if (index > 1) lineBreak = "<br/>"
              result += lineBreak + element.passengers + " " + this.$tc('step-pay.people', element.passengers) + " @ " + element.timeString
            }
          }
        })

        return result 
      },


      // weightPlus: function () {
      //    if (this.passenger.weightKg > 105) return '+' 
      //    return ''
      // },

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

      countryName: {
        get() {
          let rawStr = this.$store.state.contactCountryName
          return rawStr
        },
        set(name) {
          return this.$store.dispatch('setContactCountryName', name.trim())
        }
      },

      countryCode: {
        get() {
          let rawStr = this.$store.state.contactCountryCode
          return rawStr
        },
        set(code) {
          return this.$store.dispatch('setContactCountryCode', code)
        }
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
        return format(parseISO(this.$store.state.flightDate), 'PPPP', {locale: this.myLocal})
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
        //console.log(flightObj)
        if (flightObj === undefined) return
        return flightObj.name + " " + flightObj.price + " CHF"
      },
      bookingPhotosOption: function () {
        const wantsFotos = this.$store.state.wantsPhotos
        let formattedStr = this.$t("step-info.confirm.doesnt-want-photos-videos")
        if (wantsFotos) {
          formattedStr = this.$t("step-info.confirm.wants-photos-videos")
        }
        return formattedStr
      },
      

      userFlightDate: function () {
        return this.$store.state.flightDate
      },
      usersGroupSize: function () {
        return this.$store.getters.getTotalPassengers
      },
      // timeListerHeaderStr: function () {
      //   if (this.nrBookingPeople === 1) {
      //     return "3. Your Details"
      //   }
      //   return "3. Group Details"
      // }
    },

    methods: {


      weightPlus: function (weight) {
         if (weight > 105) return '+' 
         return ''
      },


      // scrollToId: function (elIdToTarget = '') {
      //   setTimeout(() => { this.$scrollTo(elIdToTarget, 500) }, 100)
      // },
      

      goToNextStep: function () {
        this.$store.dispatch('hasReviewedData', true)    // This store value triggers NavBtn to go to next step.
        const targetStep = 'Pay'
        //console.log('Nav to:', targetStep)
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
            msg = this.$t('step-info.confirm.speed-0')
            break
          case 2:
            msg = this.$t('step-info.confirm.speed-2')
            break
          case 4:
            msg = this.$t('step-info.confirm.speed-4')
            break
          case 6:
            msg = this.$t('step-info.confirm.speed-6')
            break
          case 8:
            msg = this.$t('step-info.confirm.speed-8')
            break
          case 10:
            msg = this.$t('step-info.confirm.speed-10')
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
            myName = this.$t('step-info.contact-passenger')
          } else {
            myName = this.$t('step-info.passenger-nr') + (passengerNumber +1)
          }
        } else {
          // Passenger has a name already, just add the number...
          if (passengerNumber === 0 ) {
            myName += ' (' + this.$t('step-info.contact-passenger') + ')'
          } else {
            myName = '#' + (passengerNumber +1) + " " + myName
          }
        }
        return myName
      },


      // Select the Country Code Prefix when a user clicks on a row in the 
      // Popup table's list
      handleCountryTableClick: function (clickedCodePrefix) {
        //console.log("clicked! " + clickedCodePrefix)
        this.contactCountryCode = clickedCodePrefix
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

      /**\
       * Only allow for 1-3 numeric inputs (Phone Country Code)
       * Trigger filtering of the list of Country Codes pop up.
       */
      updateCountryCode: function () {
        //console.log(this.countryCode)
        this.countryCode = (this.countryCode + '').replace(/[^0-9]/g, '')
        

        this.filteredCountryCodes = countrycodes.filter( country => (country.phoneCode + '').startsWith(this.countryCode + '') )
        //console.log('List of found countries: ', this.filteredCountryCodes)

        // if ( this.filteredCountryCodes.length === 0 ) return false  // found matching country 
        // return true         // no country found.
      },

      onCountryCodeBlur: function () {
        this.checkIfValidCountry()
        let self = this
        setTimeout(() => {
          self.countriesListingDialog = false
        }, 100)
      },

      onCountryCodeFlagClick: function () {
        //console.log(this.$refs.CountryCode[0].$el.childNodes[0].childNodes[0].childNodes[1].childNodes[2])
        //this.$refs.CountryCode[0].$el.click()
        //this.$nextTick(() => this.$refs.CountryCode[0].focus() ) 
        setTimeout(() => {
          this.$refs.CountryCode[0].$el.childNodes[0].childNodes[0].childNodes[1].childNodes[2].click()
          self.countriesListingDialog = true
        }, 130)
      },

      onCountryCodeFocus: function () {
        this.checkIfValidCountry()
        this.countriesListingDialog = true
      },

      onCountryListingClickNew: function (ev) {
        const childrenList = ev.target.parentNode.childNodes
        const cCode = childrenList[0].innerText.replace(/\D|^\++/g, "")   // strip out leading +
        const cFlag = childrenList[1].innerText
        const cCountry = childrenList[2].innerText
        //console.log(cCode, cFlag, cCountry)
        this.onCountryListingClick(cCode, cFlag, cCountry)
      },

      onCountryListingClick: function (code, mapChar, countryName) {
        //console.log(code, mapChar, countryName)
        this.countryCode = code
        this.countryMap = mapChar
        this.countryName = countryName
        this.countriesListingDialog = false
        this.$nextTick(() => this.$refs.Phone[0].focus() ) 
      },

      checkIfValidCountry: function () {
        // If the current value of the country code input doesn't match a
        // country in the countrycodes.js file, then delete entirely so it
        // will show an invalid code when leaving this input.
        const foundCodes = countrycodes.filter( country => (country.phoneCode + '') === this.countryCode + '' )
        if ( foundCodes.length === 0 ) {    // No match found
          this.countryCode = ''
          this.countryMap = ''
        } else if ( foundCodes.length >= 1 ) {   // 1x match found
          this.countryCode = foundCodes[0].phoneCode
          this.countryMap = foundCodes[0].map
        }

      },

      onClickOutside: function () {
        //console.log("Clicked outside")
        this.countriesListingDialog = false
      },
      include: function () {
        //console.log("calling excluded")
        return [document.querySelector('.excluded')]
      },


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

.countryPopUp {
  position: absolute;
  z-index: 1000;
  top: 50px;
}

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

div .theme--light.v-expansion-panels .v-expansion-panel--disabled {
	color: rgba(0,0,0,100) !important;
}

</style>