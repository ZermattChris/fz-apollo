<template>
  <div class="stepInfo">


    <PageHeader :title="timeListerHeaderStr">
      [rough idea for text here] Explain why we need all of this info – safer flights, easier for us 
      to give the best possible experience and to ease the scheduling process on our end...
      <br>
    </PageHeader>

  {{contactValid}}

    <v-form
      ref="contactForm"
      v-model="contactValid"
    >
      <div class="mb-3 px-2 pt-1 blue-grey lighten-5 rounded">Booking Contact:
        <v-row>
          <v-col
            cols="12"
            sm="6"
            class="pt-2 pb-0"
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
            />
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

        rules: {
          required: value => !!value || 'Required.',
          counter: value => value.length <= 20 || 'Max 20 characters',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid Email...'
          },
          phone: value => {
            const pattern = /^\+(?:[0-9] ?){6,14}[0-9]$/;
            return pattern.test(value) || 'Invalid Phone Number...'
          },
        }
      }
    },

    created() {


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
      
      // accordianControler: function () {
      //   return [0,2]
      // },

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

      // checkContactValid: function (isValid) {
      //   //console.log("Contact Form valid: ", isValid)
      //   this.$refs.passengerPanels.disabled = !isValid
      // },

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
    },

    // watch: {
    //   contactValid: function () {
    //     console.log('contactValid changed', this.contactValid)
    //     // if (this.contactValid === true) {
          
    //     // } else {
          
    //     // }
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

.v-expansion-panel-header--active::before {
  background-color: #4A148C;
  opacity: 0.5 !important;
}
/* .v-expansion-panel-content {
  background-color: white;
} */
/* .activePanel {
  border: 4px black solid !important;
} */


</style>