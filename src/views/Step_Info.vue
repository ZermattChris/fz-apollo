<template>
  <div class="stepInfo">
    
    <PageHeader :title="timeListerHeaderStr">
      [rough idea for text here] Explain why we need all of this info – safer flights, easier for us 
      to give the best possible experience and to ease the scheduling process on our end...
      <br>
    </PageHeader>

    <div class="mb-3 px-2 blue-grey lighten-5 rounded">Group Contact Infos:
    <v-row>
      <v-col
        cols="12"
        sm="6"
        class="pt-2 pb-0"
      >
        <v-text-field 
          label="Phone"
          background-color="white"
          :rules="[rules.required, rules.phone]" 
          hide-details="auto"
          outlined
          dense
          type="tel"
          name="tel"
          placeholder="(+Country Code) (Phone Number)"
          hint="Example: +1 203 456-7890"
          persistent-hint
        />
      </v-col>
      <v-col
        cols="12"
        sm="6"
        class="pt-2 pb-0 pt-xs-1 mb-6"
      >
        <v-text-field 
          label="Email"
          background-color="white"
          :rules="[rules.required, rules.email]"
          hide-details="auto"
          outlined
          dense
          type="email"
          name="email"
          placeholder="mail@you.com"
        />
      </v-col>
    </v-row>
    </div>

    <v-expansion-panels
      focusable
      :inset="!mobile"
    >
      <v-expansion-panel
        v-for="(item, i) in usersGroupSize"
        :key="i"
        disabled
      >
        <v-expansion-panel-header>Passenger {{i+1}}</v-expansion-panel-header>
        <v-expansion-panel-content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

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
        rules: {
          required: value => !!value || 'Required.',
          counter: value => value.length <= 20 || 'Max 20 characters',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail...'
          },
          phone: value => {
            const pattern = /^\+(?:[0-9] ?){6,14}[0-9]$/;
            return pattern.test(value) || 'Invalid Number...'
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
      setUserDate: function (dateStr) {
        //console.log(dateStr)
        this.userTimeSlot = dateStr
        return dateStr
      },
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