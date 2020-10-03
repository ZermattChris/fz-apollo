<template>
  <div class="stepInfo">


    <PageHeader :title="timeListerHeaderStr">
      [rough idea for text here] Explain why we need all of this info – safer flights, easier for us 
      to give the best possible experience and to ease the scheduling process on our end...
      <br>
    </PageHeader>

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
          >
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
              placeholder="(+Country Code) Phone Number"
              hint="Example: +1 203 456-7890"
              persistent-hint
              :append-outer-icon="iconInfo"
              @click:append-outer="listCountries"
            />
            
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
      </div>
    </v-form>
    
  
    <v-expansion-panels
      v-model="activePanelsList"
      multiple
      :disabled = !contactValid
      :inset="!mobile"
      ref="passengerPanels"
    >
      <v-expansion-panel
          v-for="(item, i) in usersGroupSize"
          :key="i"
          active-class="activePanel"
        >
          <v-expansion-panel-header>
            <span class="font-weight-bold" v-if="i === 0">Contact Passenger</span>
            <span class="font-weight-bold" v-if="i > 0">Passenger #{{i+1}}</span>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            
            <Passenger
              :passengerNr="i"
              :disabled=contactValid
            />

          </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>

    <!-- <v-btn rounded color="primary" dark
      :disabled="!contactValid"
      @click="temp"
    >TEMP</v-btn> -->

  </div>
</template>

<script>
  import PageHeader from '@/components/PageHeader.vue'
  import Passenger from '@/components/Passenger.vue'
  import { isMobile } from 'mobile-device-detect'
  import { mdiHelpCircle } from '@mdi/js'

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

        activePanelsList:  [],

        cc: countrycodes,
        userPhoneCountryObjList: [],
        userPhoneCountriesDisplay: '',
        userPhoneCountriesStrings: '',
        iconInfo: mdiHelpCircle,

        rules: {
          required: value => !!value || 'Required.',
          counter: value => value.length <= 20 || 'Max 20 characters',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid Email...'
          },
          phone: value => {
            const pattern = /^\+(?:[0-9] ?){6,14}[0-9]$/;
            return pattern.test(value) || 'hint: [+countryCode] & your number'
          },
        }
      }
    },

    created() {
      // Show Phone country flags and Tooltip if matching.
      this.updatePhoneCountryData()
    },


    computed: {

      contactFormData: function () {
        return this.contactPhone + this.contactEmail
      },

      contactPhone: {
        get() {
          return this.$store.state.contactPhone
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

      // Pull this into a Method, so we can both load it when the page is first
      // displayed and also when the user changes input via the watch contactPhone
      updatePhoneCountryData: function () {
        let userInputStr = this.contactPhone
        const searchInt = parseInt(userInputStr)
        if (isNaN(searchInt) === true) {
          this.userPhoneCountriesDisplay = ''
          this.userPhoneCountriesStrings = ''
          return
        }
        var results = this.cc.filter(function (obj) { return obj.phoneCode === searchInt });
        if (results.length === 0 && this.userPhoneCountriesDisplay !== '') return
        this.userPhoneCountriesDisplay = ''
        this.userPhoneCountriesStrings = ''
        for (let i = 0; i < results.length; i++) {
          console.log(results[i].map)
          this.userPhoneCountriesDisplay = this.userPhoneCountriesDisplay + results[i].map + " "
          // format Tooltip sting to use commas to sep values.
          if (i === 0) {
            this.userPhoneCountriesStrings = this.userPhoneCountriesStrings + results[i].value
          } else {
            this.userPhoneCountriesStrings = this.userPhoneCountriesStrings  + ", " + results[i].value
          }
        }
      },

      addInfoComplete: function (passengerIndex) {
        console.log(passengerIndex)
        
      },
      removeInfoComplete: function (passengerIndex) {
        console.log(passengerIndex)
        
      },

      setUserDate: function (dateStr) {
        //console.log(dateStr)
        this.userTimeSlot = dateStr
        return dateStr
      },


      listCountries: function () {
        alert('click:append')
      },

    },

    watch: {
      contactValid: function () {
        console.log('contactValid changed', this.contactValid)
        if (this.contactValid === true && this.activePanelsList.length === 0) {
          console.log('open first expansion', this.contactValid)
          this.activePanelsList = [0]
        } else {
          this.activePanelsList = []
        }
      },
      // This is setting up the country flags and Tooltip whenever the user 
      // changes the value of the Phone field.
      contactPhone: function () {
        this.updatePhoneCountryData()
      }
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
/* .v-expansion-panel-content {
  background-color: white;
} */
.activePanel {
  border-color: rgb(255,187,0) !important;
  border-width: 2px !important;
  border-radius: 5px !important;
  border-style: solid !important;
}

.phoneInput {
  position: relative;
}
  .phoneInput .countryFlags {
    position: absolute;
    right: 70px;
    top: 10px;
    font-size: 1.5em;
  }


</style>