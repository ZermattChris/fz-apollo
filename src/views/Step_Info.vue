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
        focusable
        :inset="!mobile"
      >
        <v-expansion-panel
            v-for="(item, i) in usersGroupSize"
            :key="i"
            :disabled="contactValid ? false : true"
          >
            <v-expansion-panel-header>
              <span class="font-weight-bold" v-if="i === 0">Contact Passenger</span>
              <span class="font-weight-bold" v-if="i > 0">Passenger #{{i+1}}</span>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              
    <v-form
      ref="infosForm"
      v-model="contactValid"
      lazy-validation
    >
              <v-row>
                <v-col cols="2">
                  <!-- Sex -->
                  <v-btn-toggle
                    id="sexToggle"
                    v-model="sex_toggle"
                    rounded
                    :rules="[rules.required]"
                  >
                    <v-btn>
                      <v-icon>mdi-human-male</v-icon>
                    </v-btn>
                    <v-btn>
                      <v-icon>mdi-human-female</v-icon>
                    </v-btn>
                  </v-btn-toggle>
                </v-col>

                <v-col 
                  cols="12"
                  :sm="9"
                  :md="10"
                >
                  <!-- Name input -->
                  <v-text-field 
                    class="ml-sm-6 pt-sm-1"
                    background-color="white"
                    :rules="[rules.required]"
                    hide-details="auto"
                    outlined
                    dense
                    name="first-last"
                    :placeholder="firstLastNameHint(i)"
                  />
                </v-col>
              </v-row>

              <!-- Speed/fitness slider -->
              <v-row style="position:relative;">
                <div class="pt-1 pl-3 font-weight-light">Running Ability:</div>
                <div class="speed pt-0 font-weight-thin">{{runningDesc}}</div>
                <v-col cols="12">
                  <v-btn-toggle
                    class="d-flex justify-space-between"
                    rounded
                  >
                    <v-btn
                      @click="onUpdateSpeed(-2)"
                    >
                      <v-icon>mdi-tortoise</v-icon>
                    </v-btn>
                    <v-slider
                      class="pt-2 basicSlider"
                      v-model="fitnessSlider"
                      thumb-label="always"
                      :thumb-size="36"
                      :max="10"
                      :min="0"
                      :thumb-color="runningThumbColour"
                      step="2"
                      ticks="always"
                    ></v-slider>
                    <v-btn
                      id="rightBtn"
                      @click="onUpdateSpeed(2)"
                    >
                      <v-icon>mdi-rabbit</v-icon>
                    </v-btn>
                  </v-btn-toggle>
                </v-col>
              </v-row>

              <!-- Weight slider -->
              <v-row style="position:relative;">
                <div class="pt-1 pl-3 font-weight-light">Your Weight Kg:</div>
                <div class="weights pt-0 font-weight-thin"><span class="font-weight-medium">{{weightSlider}}&nbsp;Kilograms</span>, {{(weightSlider * 2.204621999990873).toFixed(0)}}{{ '\xa0' }}Pounds, {{(weightSlider * 0.157473).toFixed(1)}}{{ '\xa0' }}Stone</div>
                <v-col cols="12">
                  <v-btn-toggle
                  class="d-flex justify-space-between"
                    rounded
                  >
                    <v-btn
                      @click="onUpdateWeight(-5)"
                    >
                      <v-icon size="14">mdi-weight-kilogram</v-icon>
                    </v-btn>
                    <v-slider
                      class="pt-2 basicSlider"
                      v-model="weightSlider"
                      thumb-label="always"
                      thumb-size="36"
                      :max="100"
                      :min="10"
                      :thumb-color="weightThumbColour"
                      step="5"
                      ticks="always"
                    >
                      <template v-slot:thumb-label="{ value }">
                        {{ value }}kg
                      </template>
                    </v-slider>

                    <v-btn
                      id="rightBtn" 
                      class="fixedWidthBtn"
                      @click="onUpdateWeight(5)"
                    >
                      <v-icon size="36">mdi-weight-kilogram</v-icon>
                    </v-btn>
                  </v-btn-toggle>
                </v-col>
              </v-row>


    </v-form>

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

        enabledPanelsList: [],
        activePanelsList:  [],

        sex_toggle:    undefined,
        fitnessSlider: 6,         // scale of 1 (slow/needs help) - 10 (fast)
        weightSlider:  65,        // scale of 10kg - 100kg

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

      weightSliderLabel: function () {
        return this.fitnessSlider + 'kg'
      },
      weightThumbColour: function () {
         if (this.weightSlider >= 90 && this.weightSlider < 100) return 'warning'
         if (this.weightSlider === 100) return 'red'
         return 'green'      
      },


      runningThumbColour: function () {
         if (this.fitnessSlider === 2) return 'warning'
         if (this.fitnessSlider < 2) return 'red'
         return ''      
      },
      runningDesc: function () {
        let msg = "Bad Value"
        switch (this.fitnessSlider) {
          case 0:
            msg = "Assistance Required*"
            break
          case 2:
            msg = "Slow"
            break
          case 4:
            msg = "Slow-ish"
            break
          case 6:
            msg = "Average"
            break
          case 8:
            msg = "Quick"
            break
          case 10:
            msg = "Fast"
            break
        }
        return "Speed: " + msg    
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

      firstLastNameHint: function (index) {
        if (index === 0) return "First, Last Name"
        return "First Name"
      },

      onUpdateSpeed: function (speed) {
        console.log(speed)
        this.fitnessSlider = this.fitnessSlider + speed
      },
      onUpdateWeight: function (weight) {
        this.weightSlider = this.weightSlider + weight
      },


      // temp: function () {
      //   console.log(this.$refs.infoForm.validate())
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

    watch: {
      contactValid: function () {
        console.log('contactValid changed', this.contactValid)
        // if (this.contactValid === true) {
          
        // } else {
          
        // }
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

  #sexToggle button {
    color: rgba(var(--fzselected-color), 1.0);
  }

  .v-btn-toggle > .v-btn#rightBtn:last-child {
    border-left-width: 1px !important;
  }

  .basicSlider {
    z-index: 100;
  }

  .fixedWidthBtn {
    width: 50px;
  }

  .weights, .speed {
    position: absolute;
    top: 4.5em;
    z-index: 101;
    width: 100%;
    padding: 0 70px;
    text-align: center;
  }


</style>