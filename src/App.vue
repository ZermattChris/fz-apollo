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

    <v-content>
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
              @data-changed="saveLocalStorageValues"

              @flight-date-changed="loadFlightsListAPI"
              @preload-timelister-dates="loadTimeListerDatesAPI"
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
    </v-content>

    <v-footer
      class="justify-end pr-2"
      color="primary"
      dark
      app
      padless
    >
      <div class="white--text overline">© {{getCurrentYear}} - FlyZermatt</div>
    </v-footer>
  </v-app>
</template>

<script>
import { store, mutations } from "@/store/store.js";
import { format } from 'date-fns'
import { mdiArrowRightCircle, mdiChevronLeft } from '@mdi/js'


export default {
  name: 'App',

  components: {
    
  },

  // Lifecycle Hooks
  beforeUpdate() {
    // Show/hide the Back Btn.
    if (this.$route.name === 'Start') {
      //console.log('ON HOME PAGE')
      this.onEnableBackBtn(false)
    } else {
      this.onEnableBackBtn(true)
    }
  },
  created() {
    // Load LocalStorage if available.
    this.loadLocalStorageValues()
    // Load Settings in via Ajax API call.
    this.loadSettingsAPI()
    // Flag any conflicting data from the above
    // tow processes -- User's Date + Flights
    // might no longer be valid.

  },

  // Reactive data
  data: () => ({

    overlay: false,     // blocks UI until Settings API JSON returns.
    overlayDelay: 500,  // Milliseconds before loading block is shown...

    iconNextArrow:   mdiArrowRightCircle,
    iconPrevChevron: mdiChevronLeft,
    
    canGoBack:   false,
    canContinue: false,

    // API endpoints
    apiHeaders: { "Content-Type": "application/json" },
    // Initial Settings
    apiInitSettingsPath: "https://fz-backend.simpleitsolutions.ch/onlinebooking/api/init",
    apiInitSettings: {},
    apiFlightsListPath: "https://fz-backend.simpleitsolutions.ch/onlinebooking/api/flightoptions/",

  }),

  // Methods
  methods: {
    loadSettingsAPI: function () {
      let hasLoaded = false
      setTimeout(() => { if (hasLoaded===false) this.overlay = true }, this.overlayDelay) // Show loading blocker if longer than 200 milliseconds
      fetch(this.apiInitSettingsPath, this.apiHeaders)
        .then(async response => {
          const data = await response.json()
          // check for error response
          if (!response.ok) {
            // get error message from body or default to response statusText
            const error = (data && data.message) || response.statusText
            return Promise.reject(error)
          }
          //this.apiInitSettings = data.total
          //console.log('Init Settings obj: ' + data["max-pilots"])
          // Load settings into our data Store, for access throughout.
          mutations.setMaxNrPeople(data["max-pilots"])
          mutations.setBookDaysOffset(data["book-days-from-today"])
          mutations.setBookMonthsOffset(data["book-future-months"])
          mutations.setVideoPrice(data["video-cost"])
          hasLoaded = true
          this.overlay = false
        })
        .catch(error => {
          hasLoaded = true
          this.overlay = false
          this.errorMessage = error
          console.error("Error loading Form Settings: ", error)
        })
    },
    loadFlightsListAPI: function (dateStr) {
      //console.log('Use Date for FlightsList API call: ' + dateStr)
      let path = this.apiFlightsListPath + dateStr
      //console.log('FlightsList API path: ' + path)
      fetch(path, this.apiHeaders)
        .then(async response => {
          const data = await response.json()
          // check for error response
          if (!response.ok) {
            // get error message from body or default to response statusText
            const error = (data && data.message) || response.statusText
            return Promise.reject(error)
          }
          mutations.setFlightsList(data)
          this.overlay = false
        })
        .catch(error => {
          this.overlay = false
          this.errorMessage = error
          console.error("Error loading Form Settings: ", error)
        })
    },
    loadTimeListerDatesAPI: function () {
      // This is called when either the Flight Date or Which Flight? are changed
      // (but only if Which Flight? isn't empty).
      //console.log(fetchedFlightsListObj)
        console.warn('TEMP DEBUG: Loading local data into App.vue -> loadTimeListerDatesAPI()')
        let fetchedFlightsListObj = {}
        mutations.setTimeListDates(fetchedFlightsListObj)
      // Need to do proper API call here, return true once data has loaded
      // so calling component can update its display (TimeListGroup...)
      
    },

    onEnableContinueBtn: function (valid) {
      //console.log('Enable Btn: ' + valid)
      this.canContinue = valid
    },
    onContinueBtnClick: function () {
      //console.log('Clicked Continue Btn:')

      //------------- Leaving Step 1 logic here -------------
      if (this.isObjEmpty(store.timeListDates)) {
        console.log('Clicked Continue from Step 1, timeListDates is empty, load data...')
        this.loadTimeListerDatesAPI()
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
    onClearData: function () {
      //console.log('Clear all data:')
      mutations.setNrPeople(0)
      mutations.setFlightDate('')
      mutations.setFlight('')
      mutations.setWantsPhotos(false)
    },

    loadLocalStorageValues: function () {
      //console.log('Read local storage')
      if (localStorage.nrPeople) {
        mutations.setNrPeople(localStorage.nrPeople)
      }
      if (localStorage.flightDate) {
        mutations.setFlightDate(localStorage.flightDate)
      }
      if (localStorage.selectedFlight) {
        mutations.setFlight(localStorage.selectedFlight)
      }
      if (localStorage.wantsPhotos) {
        let convertStrToBool = localStorage.wantsPhotos
        if (convertStrToBool === 'true') {
           convertStrToBool = true
        } else {
          convertStrToBool = false
        }
        mutations.setWantsPhotos(convertStrToBool)
      }
      if (localStorage.flightsList) {
        mutations.setFlightsList(JSON.parse(localStorage.flightsList))
      }
    },
    saveLocalStorageValues: function () {
      //console.log('Wrote to local storage')
      localStorage.nrPeople = store.nrPeople
      localStorage.flightDate = store.flightDate
      localStorage.selectedFlight = store.selectedFlight
      localStorage.wantsPhotos = store.wantsPhotos
      localStorage.flightsList = JSON.stringify(store.flightsList)
    }
  },

  computed: {
    getCurrentYear: function () {
      return format(Date.now(), 'yyyy')
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
