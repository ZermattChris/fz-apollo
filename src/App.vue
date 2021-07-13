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

      <!-- Test i18n message. -->
      <!-- <div>{{ $t('step-info.message') }}</div> -->

      <div 
        id="logo"
      >
        <v-img
          alt="FlyZermatt Logo"
          class="shrink ml-1"
          contain
          src="@/assets/FlyZermatt-logo-light.svg"
          transition="scale-transition"
          width="220"
        />
      </div>

      <!-- Language Switch Menu -->
      <!-- Take the style out as soon as we want to activate the Lang menu again. -->
      <!-- <LangMenu style="" /> -->
      
      <!-- <v-progress-linear
        id="progressbar"
        :value="progressBarPercent"
        rounded
        color="deep-purple"
        height="7"
      ></v-progress-linear> -->

      <!-- Want to make a better Breadcrumbs than the prog bar...  -->
      <!-- <v-container
        class="width: 100%;"
        style="flex: 0 6 auto; outline: yellow solid 1px;"
      >
        <v-row
          style="height: 150px;"
        >
          <v-col><v-btn
            elevation="2"
            outlined
            raised
            small
            text
            x-small
          >
            {{'1. ' + $t('step-info.title')}}
          </v-btn>
          </v-col>
          <v-col></v-col>
          <v-col></v-col>
          <v-col></v-col>
        </v-row>
      </v-container> -->

    </v-app-bar>

    <v-main>
      <v-row no-gutters>
        <v-col cols="12" md="1" lg="2"></v-col>
        <v-col class="pa-5 pa-sm-8 pa-md-12" cols="12" md="10" lg="8" >

          <!-- Router hooked up here -->
          <router-view

          />

          <!-- <div class="text-center mt-12 mb-6"> -->
            <!-- Continue Btn -->
            <!-- <NavButton
              ref="ContinueBtn"
            /> -->
          <!-- </div> -->

        </v-col>
        <v-col cols="12" md="1" lg="2"></v-col>
      </v-row>
    </v-main>

    <v-footer
      class="justify-end"
      style="min-height:60px;"
      color="primary"
      dark
      app
      padless
    >
      <!-- Back Btn -->
      <v-btn
        class="text-capitalize"
        :class="canGoBack ? '' : 'hideBackBtn'"
        style="position:absolute; left:5px; z-index:1000;"
        text
        @click="onBackBtnClick"
      >
        <v-icon left>{{iconPrevChevron}}</v-icon>
        {{$t('nav.back')}}
      </v-btn>

      <!-- Continue Btn -->
      <div
        class="d-flex"
        style="position:absolute; width:100%; height:100%; top:12px;"
      >
        <NavButton
          class="mx-auto"
          ref="ContinueBtn"
        />
      </div>
      <div 
        style="text-align:right;"
        class="hidden-xs-only white--text overline mr-2 text--secondary"
      >
        © {{getCurrentYear}} - FlyZermatt
      </div>
      <div 
        style="max-width:140px; line-height:1.2em; text-align:right;"
        class="hidden-sm-and-up white--text overline mr-2 text-caption text--secondary"
      >
        © {{getCurrentYear}}<br/>
        FlyZermatt
      </div>
    </v-footer>

  <v-overlay :value="isAppStillLoading" />

  </v-app>
</template>

<script>
import NavButton from '@/components/NavButton.vue'
// import LangMenu from '@/components/LangMenu.vue'

import { format, add, parseISO } from 'date-fns'
import { mdiDeleteForever, mdiChevronLeft } from '@mdi/js'

export default {
  name: 'App',

  components: {
    NavButton,
    // LangMenu,
  },

  // Reactive data
  data: () => ({
    overlay: false,     // blocks UI until Settings API JSON returns.
    overlayDelay: 500,  // Milliseconds before loading block is shown...

    iconPrevChevron: mdiChevronLeft,
    iconGarbageBin: mdiDeleteForever,
    
    canGoBack:   false,

  }),
  // Lifecycle Hooks
  async mounted () {
    try {
      await this.$store.dispatch('init')
    } catch (ex) {
      console.error('My error', ex)
    }
  },


  beforeUpdate () {

    // Show/hide the Back Btn.
    if (this.$route.name === 'Start') {
      //console.log('ON HOME PAGE')
      this.onEnableBackBtn(false)
    } else {
      this.onEnableBackBtn(true)
    }
  },
  beforeMount () {

    /** TODO: Need to run some checks looking for stale data.
              It's possible that a User fills out everything, with a specific
              chosen date, then returns later and tries to continue with a
              date that is no longer valid. 
              Give some sort of popup message and clear the date - timeslot data.
              console.log("TODO: App Load -> Need to run some checks looking for stale localStorage data.")
              Need to check to see if each step is valid and mark it 'false' in _navList if not.
              Go back to the first Step that has clean data, and let the user know that there
              was old/stale data that needs to be reinput.
    */
    if (this.flightDate !== '') {
      //const earliestPossFlightDateISO = add(toDate(Date.now()), {days:+9})    // debug by hard coding the offset.
      const earliestPossFlightDateISO = add(Date.now(), {days:this.$store.state._bookDaysOffset})

      const flightDateISO = parseISO(this.$store.state.flightDate)
      if (earliestPossFlightDateISO > flightDateISO) {
        //console.log("Stale data, needs resetting of sorts! earliestPossFlightDateISO", earliestPossFlightDateISO, ". Stored flightDate: ", flightDateISO)
        this.$store.dispatch('setFlightDate', '')
        this.$store.dispatch('setFlight', '')
        this.$store.dispatch('setWantsPhotos', false)
        this.$store.dispatch('clearSlotsPassengers')
      }
    }
    
  },

  updated () {
    //console.log('this.$refs.ContinueBtn', this.$refs.ContinueBtn)
    // This needs to be called on updated() to allow the Step_Start to figure out
    // if the Step is valid and update the _navList in beforeUpdate().
    this.$refs.ContinueBtn.update()
  },


  // Methods
  methods: {
    
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
    // Is called by the < Clear button on header.
    // Remove for final release. (maybe put into a debug menu?)
    onClearData: function () {
      if (this.$store.state._DEV !== true) return
      //console.log('Clear all data:')
      this.$store.dispatch('setFlightDate', '')
      this.$store.dispatch('setFlight', '')
      this.$store.dispatch('setWantsPhotos', false)
      const payload = {'slot':-1, 'label':''}
      this.$store.dispatch('setTimeSlot', payload)
      this.$store.dispatch('clearNavList')
      this.$store.dispatch('setCurrentStep', '')
      this.$store.dispatch('setContactPhone', '')
      this.$store.dispatch('setContactEmail', '')

      this.$store.dispatch('clearSlotsPassengers')

      if (this.$route.name !== 'Start') {
        this.$router.push('/') // return to step 1
      }
      window.location.reload()
    },
  },

  computed: {

    progressBarPercent: function () {

      // This is a wee bit of a quick hack, needs manual updating to reflect
      // any changes in the way navigation works.
      const totalNrSteps = 4
      const currentStepString = this.$store.state._currentStep.toLowerCase()

      let counter = 0
      switch (currentStepString) {
        case 'start':
          counter = 1
          break
        case 'time':
          counter = 2
          break
        case 'info':
          counter = 3
          break
        case 'pay':
          counter = 4
          break
        default:
          console.error(`Invalid Step name for progress bar in App.vue ${currentStepString}.`)
      }

      return counter * (100 / totalNrSteps)
    },

    _isDEV: function () {
      return this.$store.state._DEV
    },
    getCurrentYear: function () {
      return format(Date.now(), 'yyyy')
    },
    isAppStillLoading: function () {
      return this.$store.state._app_loading
    }
  },
  
  watch: {
    '$route' (to) {
      document.title = to.meta.title || 'Secure Booking at FlyZermatt Paragliding'
    }
  },
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
.hideBackBtn {
  visibility: hidden;
}

#language-menuXXXß {
  position: absolute;
  right: 10px;
  top: 7px;
}

#progressbar {
  position: absolute;
  height: 8px;
  bottom: -15px;
  width: 93%;
  z-index: -1;
}

</style>
