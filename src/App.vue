<template>
  <v-app>

    <v-overlay 
      opacity="0.2"
      :value="overlay"
    />
      <v-progress-circular 
        v-if="overlay" 
        class=""
        style="position:absolute; z-index:500; top:30%; left:50%; margin-top:-32px; margin-left:-32px;"
        indeterminate 
        color="primary"
        size="64">
      </v-progress-circular>

    <v-app-bar
      app
      color="primary"
      dark
      hide-on-scroll
    >
      <!-- Back Btn -->
      <v-btn
        class="text-capitalize"
        :class="canGoBack ? '' : 'd-none'"
        style="position:absolute; left:-5px;"
        text
        @click="onBackBtnClick"
      >
        <v-icon left>{{iconPrevChevron}}</v-icon>
        Back
      </v-btn>
      
      <div 
        id="logo"
        class="d-flex align-center"
      >
        <v-img
          alt="FlyZermatt Logo"
          class="shrink mr-2"
          contain
          src="@/assets/FlyZermatt-logo-light.svg"
          transition="scale-transition"
          width="220"
        />
      </div>


      <!-- TEMP clear data btn -->
      <v-btn
        class="text-capitalize"
        style="position:absolute; right:5px;"
        text
        @click="onClearData"
      >
        <v-icon left>{{iconPrevChevron}}</v-icon>
        Clear
      </v-btn>

    </v-app-bar>

    <v-main>
      <v-row no-gutters>
        <v-col cols="12" md="1" lg="2"></v-col>
        <v-col class="pa-5 pa-sm-8 pa-md-12" cols="12" md="10" lg="8" >

          <!-- Router hooked up here -->
          <!-- <transition
            name="fade"
            mode="out-in"
          > -->
            <router-view
              @form-is-valid="onEnableContinueBtn"
            ></router-view>
          <!-- </transition> -->

          <div class="text-center mt-12 mb-6">
            <!-- Continue Btn -->
            <v-btn 
              rounded 
              color="primary" 
              elevation="4"
              :disabled="!canContinue"
              @click="onContinueBtnClick"
            >
              Continue
              <v-icon right>{{iconNextArrow}}</v-icon>
            </v-btn>
          </div>


        </v-col>
        <v-col cols="12" md="1" lg="2"></v-col>
      </v-row>
    </v-main>

    <v-footer
      class="justify-end pr-2"
      color="primary"
      dark
      app
      padless
    >
      <div class="white--text overline">© {{getCurrentYear}} - FlyZermatt</div>
    </v-footer>

  <v-overlay :value="isAppStillLoading" />

  </v-app>
</template>

<script>

import { format } from 'date-fns'
import { mdiArrowRightCircle, mdiChevronLeft } from '@mdi/js'


export default {
  name: 'App',

  components: {
    
  },

  // Lifecycle Hooks
  async mounted() {
      try {
      await this.$store.dispatch('init')
    } catch (ex) {
      console.error('My error', ex)
    }
  },


  beforeUpdate() {
    // Show/hide the Back Btn.
    if (this.$route.name === 'Start') {
      //console.log('ON HOME PAGE')
      this.onEnableBackBtn(false)
    } else {
      this.onEnableBackBtn(true)
    }
  },
  // created() {
  //   // Load LocalStorage if available.
  //   // this.loadLocalStorageValues()
  //   // Load Settings in via Ajax API call.
  //   //this.loadSettingsAPI()
  //   // Flag any conflicting data from the above
  //   // tow processes -- User's Date + Flights
  //   // might no longer be valid.

  // },

  // Reactive data
  data: () => ({
    overlay: false,     // blocks UI until Settings API JSON returns.
    overlayDelay: 500,  // Milliseconds before loading block is shown...

    iconNextArrow:   mdiArrowRightCircle,
    iconPrevChevron: mdiChevronLeft,
    
    canGoBack:   false,
    canContinue: false,

  }),

  // Methods
  methods: {
    
    // async loadFlightsListAPI () {
    //   try {
    //     await this.$store.dispatch('flightOptions')
    //   } catch (ex) {
    //     console.error('My error', ex)
    //   }
    // },

    onEnableContinueBtn: function (valid) {
      //console.log('Enable Btn: ' + valid)
      this.canContinue = valid
    },
    onContinueBtnClick: function () {
      //console.log('Clicked Continue Btn:')

      //------------- Leaving Step 1 logic here -------------
      if (this.isObjEmpty(this.$store.state.timeListDates)) {
        console.log('Clicked Continue from Step 1.')
        this.$store.dispatch('timeListDates')
      }
      this.$router.push({
        name: 'Time',
        path: 'time'
      })
      // END: ----------- Leaving Step 1 logic --------------
      // disable Continue btn
      this.onEnableContinueBtn(false)
      this.onEnableBackBtn(true)
    },

    onEnableBackBtn: function (show) {
      //console.log('Enable Btn: ' + valid)
      this.canGoBack = show
    },
    onBackBtnClick: function () {
      //console.log('Clicked Back Btn:')
      this.$router.go(-1)
    },

    // ************************** Storage workers **************************. 
    // This is just a _DEV function for quick testing
    onClearData: function () {
      if (this.$store.state._DEV !== true) return
      //console.log('Clear all data:')
      this.$store.dispatch('setNrPeople', 0)
      this.$store.dispatch('setFlightDate', '')
      this.$store.dispatch('setFlight', '')
      this.$store.dispatch('setWantsPhotos', false)
      this.$store.dispatch('setTimeSlot', 0)
      // this.$store.dispatch('setFlightsList', null)
      // this.saveLocalStorageValues()
    },
    // Move local storage calls to VueX too me thinks... TODO.
    // loadLocalStorageValues: function () {
      //console.log('Read local storage')
      // if (localStorage.nrPeople) {
      //   this.$store.dispatch('setNrPeople', localStorage.nrPeople)
      // }
      // if (localStorage.flightDate) {
      //   this.$store.dispatch('setFlightDate', localStorage.flightDate)
      // }
      // if (localStorage.selectedFlight) {
      //   this.$store.dispatch('setFlight', localStorage.selectedFlight)
      // }
      // if (localStorage.wantsPhotos) {
      //   let convertStrToBool = localStorage.wantsPhotos
      //   if (convertStrToBool === 'true') {
      //      convertStrToBool = true
      //   } else {
      //     convertStrToBool = false
      //   }
      //   this.$store.dispatch('setWantsPhotos', convertStrToBool)
      // }
      // if (localStorage.selectedTimeslot) {
      //   this.$store.dispatch('setTimeSlot', localStorage.selectedTimeslot)
      // }
      // if (localStorage._flightsList) {
      //   this.$store.dispatch('setFlightsList', JSON.parse(localStorage._flightsList))
      // }
    // },
    // saveLocalStorageValues: function () {
      //console.log('Wrote to local storage')
      // localStorage.nrPeople = this.$store.state.nrPeople
      // localStorage.flightDate = this.$store.state.flightDate
      // localStorage.selectedFlight = this.$store.state.selectedFlight
      // localStorage.wantsPhotos = this.$store.state.wantsPhotos
      // localStorage.selectedTimeslot = this.$store.state.timeSlot
      // localStorage._flightsList = JSON.stringify(this.$store.state._flightsList)
    // }
  },

  computed: {
    getCurrentYear: function () {
      return format(Date.now(), 'yyyy')
    },
    isAppStillLoading: function () {
      return this.$store.state._app_loading
    }
  }
};


</script>

<style>

/* My custom CSS variable */
:root {
  --fzselected-color: 255, 187, 0;
  --fz-link-hilite-color: var(--v-primary-base);
}


/* Stop the pull-down to reload screen. */
html,
body {
  overscroll-behavior-y: contain;
}
.disable-select {
    user-select: none; /* supported by Chrome and Opera */
   -webkit-user-select: none; /* Safari */
   -khtml-user-select: none; /* Konqueror HTML */
   -moz-user-select: none; /* Firefox */
   -ms-user-select: none; /* Internet Explorer/Edge */
}

.hilite-text {
  padding: 0 4px;
  background-color: rgba(var(--fzselected-color), 0.3);
  border-radius: 6px;
}
.hilite-link {
  padding: 2px 4px !important;
  background-color: rgba(170, 170, 170, 0.1) !important;
  border-radius: 6px !important;
}

.page {
  margin-left: auto;
  margin-right: auto;
  max-width: 800px;
}

#logo {
  margin: 0 auto;
}

.v-divider {
  margin-bottom: 20px;
}
.controls {
  margin-top: 10px;
  margin-left: 30px;
  margin-bottom: 30px;
}
h3 > .v-icon {
  position: relative;
  margin-top: -7px;
  margin-right: 3px;
}
.v-input__icon {
  margin-right: 5px !important;
}


</style>
