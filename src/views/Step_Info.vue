<template>
  <div class="stepInfo">


    <PageHeader :title="timeListerHeaderStr">
      [rough idea for text here] Explain why we need all of this info – safer flights, easier for us 
      to give the best possible experience and to ease the scheduling process on our end...
      <br>
    </PageHeader>

    <v-form
      ref="infoForm"
      v-model="contactValid"
      lazy-validation
    >
      <div class="mb-3 px-2 blue-grey lighten-5 rounded">Contact Details:
        <v-row>
          <v-col
            cols="12"
            sm="6"
            class="pt-2 pb-0"
          >
            <v-text-field 
              label="Phone"
              ref="Phone"
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
            class="pt-2 pb-0 pt-xs-1"
          >
            <v-text-field 
              label="Email"
              ref="Email"
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
      focusable
      :inset="!mobile"
    >
      <v-expansion-panel
        v-for="(item, i) in usersGroupSize"
        :key="i"
        :disabled="i === 0 ? !contactValid : false"
      >
        <v-expansion-panel-header>Passenger {{i+1}}</v-expansion-panel-header>
        <v-expansion-panel-content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
  import { isMobile } from 'mobile-device-detect'

  export default {
    name: "Step_Info",
  
    components: {
      PageHeader
    },

    data () {
      return {
        mobile: isMobile,
        contactValid: false,
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

      temp: function () {
        console.log(this.$refs.infoForm.validate())
      },

      setUserDate: function (dateStr) {
        //console.log(dateStr)
        this.userTimeSlot = dateStr
        return dateStr
      },
    },

    watch: {
      // contactValid: function () {
      //   console.log('Contact Valid:', this.$refs.infoForm.validate())
      //   // Enable the first of the accordian steps for input.
      // },
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


</style>