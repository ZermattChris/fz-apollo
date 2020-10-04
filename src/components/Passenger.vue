<template>

  <v-form
    ref="infosForm"
    v-model="passengerForm"
    lazy-validation
  >
    <v-row>
      <v-col 
        cols="3"
        :sm="2"
        :md="1"
        class="pb-0"
        style="min-height:120px"
      >
        <!-- Sex -->
        <v-radio-group 
          class="pl-2"
          v-model="sex" 
          :rules="[rules.required]"
          :disabled="!disabled"
        >
          <v-radio label="Male" value="male"></v-radio>
          <v-radio label="Female" value="female"></v-radio>
        </v-radio-group>
      </v-col>

      <v-col 
        cols="4"
        :sm="3"
        :md="2"
        class="mt-6 ml-12"
      >
        <!-- Age Number input -->
        <v-text-field 
          v-model="age"
          :disabled="!disabled"
          background-color="white"
          :rules="[rules.required]"
          hide-details="auto"
          outlined
          dense
          type="number"
          id="age"
          name="age"
          placeholder="Age"
          hint="Your age"
          min="2"
          max="99"
          oninput="if(Number(this.value) > Number(this.max)) this.value = this.max; if(Number(this.value) < Number(this.min)) this.value = this.min;"
        />
      </v-col>

      <v-col 
        cols="11"
        :md="8"
        class="mt-0 mt-md-6 ml-md-n6 mt-n2 mt-md-0"
      >
        <!-- Name input -->
        <v-text-field 
          v-model="name"
          :disabled="!disabled"
          class="ml-sm-6"
          background-color="white"
          :rules="[rules.required]"
          hide-details="auto"
          outlined
          dense
          :hint="firstLastNameHint(passengerNr)"
          name="first-last"
          :placeholder="firstLastNameHint(passengerNr)"
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
            :disabled="!disabled"
            @click="onUpdateSpeed(-2)"
          >
            <v-icon>{{iconTortoise}}</v-icon>
          </v-btn>
          <v-slider
            v-model="speed"
            :disabled="!disabled"
            class="pt-2 basicSlider"
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
            :disabled="!disabled"
            @click="onUpdateSpeed(2)"
          >
            <v-icon>{{iconRabbit}}</v-icon>
          </v-btn>
        </v-btn-toggle>
      </v-col>
    </v-row>

    <!-- Weight slider -->
    <v-row style="position:relative;">
      <div class="pt-1 pl-3 font-weight-light">Your Weight:</div>
      <div class="weights pt-0 font-weight-thin"><span class="font-weight-medium">{{weight}}&nbsp;Kilograms</span>, {{(weight * 2.204621999990873).toFixed(0)}}{{ '\xa0' }}Pounds, {{(weight * 0.157473).toFixed(1)}}{{ '\xa0' }}Stone</div>
      <v-col 
        cols="12"
        class="pb-8 pb-sm-2"
      >
        <v-btn-toggle
          class="d-flex justify-space-between"
          rounded
        >
          <v-btn
            :disabled="!disabled"
            @click="onUpdateWeight(-5)"
          >
            <v-icon size="14">{{iconWeightKg}}</v-icon>
          </v-btn>
          <v-slider
            v-model="weight"
            :disabled="!disabled"
            class="pt-2 basicSlider"
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
            :disabled="!disabled"
            class="fixedWidthBtn"
            @click="onUpdateWeight(5)"
          >
            <v-icon size="36">{{iconWeightKg}}</v-icon>
          </v-btn>
        </v-btn-toggle>

  {{passengerForm}}
      </v-col>
    </v-row>


  </v-form>


</template>

<script>
  import { mdiWeightKilogram, mdiRabbit, mdiTortoise, mdiRadioboxBlank, mdiRadioboxMarked } from '@mdi/js'

  export default {
    name: "Passenger",


    props: {
      passengerNr: {
        type: [Number],
        required: true,
      },
      disabled: {
        type: [Boolean],
        default: true
      },
    }, 

    data () {
      return {
        iconRabbit: mdiRabbit,
        iconTortoise: mdiTortoise,
        iconWeightKg: mdiWeightKilogram,
        iconRadioBlank: mdiRadioboxBlank,
        iconRadioMarked: mdiRadioboxMarked,

        passengerNumber: this.passengerNr,

        passengerForm: false,

        //sex_toggle:    undefined,
        // radios: undefined,
        // fitnessSlider: 6,         // scale of 1 (slow/needs help) - 10 (fast)
        // weightSlider:  65,        // scale of 10kg - 100kg

        rules: {
          required: value => !!value || 'Required.',
        }
        
      }
    }, // * -- END DATA --

    created () {
      
    },

    computed: {
      
      sex: {
        get() {
          return this.$store.getters.getSexById(this.passengerNumber)
        },
        set(sexStr) {
          const payload = {'passengerId':this.passengerNumber, 'sexStr':sexStr}
          return this.$store.dispatch('setPassengerSex', payload)
        }
      },
      age: {
        get() {
          return this.$store.getters.getAgeById(this.passengerNumber)
        },
        set(ageInt) {
          console.log('ageInt: ', ageInt)
          return null
        }
      },
      name: {
        get() {
          return this.$store.getters.getNameById(this.passengerNumber)
        },
        set(nameStr) {
          //return this.$store.dispatch('setContactPhone', phone)
          const payload = {'passengerId':this.passengerNumber, 'nameStr':nameStr}
          //console.log('passengerId: ' + payload.passengerId + ' nameStr: ' + payload.nameStr)
          return this.$store.dispatch('setPassengerName', payload)
        }
      },
      speed: {
        get() {
          return this.$store.getters.getSpeedById(this.passengerNumber)
        },
        set(speedInt) {
          console.log('speedInt: ', speedInt)
          return null
        }
      },
      weight: {
        get() {
          return this.$store.getters.getWeightById(this.passengerNumber)
        },
        set(weightInt) {
          console.log('weightInt: ', weightInt)
          return null
        }
      },




      weightSliderLabel: function () {
        return this.speed + 'kg'
      },
      weightThumbColour: function () {
        //  if (this.weightSlider >= 90 && this.weightSlider <= 100) return 'warning'
        //  if (this.weightSlider === 100) return 'red'
         return 'green'      
      },


      runningThumbColour: function () {
         if (this.speed === 2) return 'warning'
         if (this.speed < 2) return 'red'
         return 'green'      
      },
      runningDesc: function () {
        let msg = "Bad Value"
        switch (this.speed) {
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

    },

    watch: {
      '$store.state._currentStep': function() {
        //console.log(this.$store.state._currentStep)
        this.update()
      }
    },

    methods: {
     
      firstLastNameHint: function (index) {
        if (index === 0) return "First, Last Name"
        return "First Name"
      },

      onUpdateSpeed: function (newSpeed) {
        //console.log(speed)
        this.speed = this.speed + newSpeed
      },
      onUpdateWeight: function (newWeight) {
        this.weight = this.weight + newWeight
      },



    }, // * -- END METHODS --

  }


</script>

<style scoped>
  
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

  input#age {
    width: 100px !important;
  }

  .weights, .speed {
    position: absolute;
    top: 4.5em;
    z-index: 101;
    width: 100%;
    padding: 0 70px;
    text-align: center;
  }
</style>>
