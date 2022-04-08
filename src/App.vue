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
    >

      <!-- Test i18n message. -->
      <!-- <div>{{ $t('step-start.message') }}</div> -->
      <!-- <LangMenu
        style="visibility:hidden;"
      />  -->
      <div 
        id="leftSpacer"
        style="width:40px; height:40px;"
        @click="onClearData"
      ></div>

      <div 
        id="logo"
        class="pl-4"
      >
        <v-img
          alt="FlyZermatt Logo"
          class="shrink"
          contain
          src="@/assets/FlyZermatt-logo-light.svg"
          transition="scale-transition"
          max-width="200"
          max-height="130"
          ref="fzlogo"
          
        />
      </div>

      <!-- LIVE: Language Switch Menu -->
      <LangMenu
        class=""
      />
      <!-- DEV: currently only shown when app is running in state._DEV mode.  -->
      <!-- <LangMenu
        class=""
        v-show="this.$store.state._DEV === true"
      /> -->

    </v-app-bar>

    <v-main>

      <v-stepper 
        v-model="stepper"
        flat
        class="mx-auto"
        style="font-size: 0.7em; max-width:600px;"
      >
        <v-stepper-header>
          <v-stepper-step 
            step="1" 
            class="disable-select"
            :complete="stepDateComplete"
            :color="stepDateComplete ? 'success' : 'primary'"
          >
            {{$t('nav.breadcrumb-date')}}
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step 
            step="2" 
            class="disable-select"
            :complete="stepTimeComplete"
            :color="stepTimeComplete ? 'success' : 'primary'"
          >
            {{$t('nav.breadcrumb-time')}}
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step 
            step="3" 
            class="disable-select"
            :complete="stepInfoComplete"
            :color="stepInfoComplete ? 'success' : 'primary'"
          >
            {{$t('nav.breadcrumb-info')}}
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step 
            step="4" 
            class="disable-select"
            :complete="stepPayComplete"
            :color="stepPayComplete ? 'success' : 'primary'"
          >
            {{$t('nav.breadcrumb-pay')}}
          </v-stepper-step>

        </v-stepper-header>
      </v-stepper>



      <v-row no-gutters>
        <v-col cols="12" md="1" lg="2"></v-col>
        <v-col class="px-5 pb-5 pt-6 pa-sm-8 pa-md-12" cols="12" md="10" lg="8" >

          <!-- *********************** Router hooked up here *********************** -->
          <router-view/>
          <!-- *********************** Router hooked up here *********************** -->

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
        v-if="continueBtnVisible"
      >
        <NavButton
          class="mx-auto"
          ref="ContinueBtn"
          v-show="!isPayStep"
        />
      </div>

      <!-- If we're viewing the Pay page, put in an invisible click for Partner Login here.  -->
      <div 
        @click="showPartnerLoginDialog" 
        style="z-index:100;"
      >
        <div 
          style="text-align:right; "
          class="hidden-xs-only white--text overline mr-2 text--secondary disable-select"
        >
          © {{getCurrentYear}} - bSoftware
        </div>
        <div 
          style="max-width:140px; line-height:1.2em; text-align:right;"
          class="hidden-sm-and-up white--text overline mr-2 text-caption text--secondary disable-select"
        >
          © {{getCurrentYear}}<br/>
          bSoftware
        </div>
      </div>

    </v-footer>

    <v-overlay :value="isAppStillLoading" />


    <!-- Global "Find our Office" pop up dialog -->
    <v-dialog
      v-model="findOfficeDialog"
      v-if="findOfficeDialog"
      width="500"
    >
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          {{$t('findOffice.title')}}
        </v-card-title>

        <v-card-text
          class="pt-4"
        >
          <iframe
            style="overflow:hidden;width:100%;" 
            src="https://player.vimeo.com/video/217390381?title=0&amp;byline=0&amp;portrait=0&amp;color=ff0179" 
            frameborder="0" 
            height="250"
            webkitallowfullscreen 
            mozallowfullscreen 
            allowfullscreen 
            allow="autoplay; fullscreen"
          ></iframe>
        </v-card-text>
      </v-card>
    </v-dialog>


    <!-- Parnter login pop up dialog -->
    <v-dialog
      v-model="partnerLogin"
      persistent
      width="500"
    >
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          <v-icon class="mr-2">{{iconLock}}</v-icon> Partner Login &amp; Order
        </v-card-title>

        <v-card-text
          class="pt-4"
        >

          <v-form
            ref="contactForm"
            v-model="partnerLoginForm"
          >

            <v-row >
              <v-col
                cols="12"
                sm="10"
                class=""
              >
                <v-text-field 
                  label="User Name"
                  ref="partnerUserName"
                  v-model="partnerUserName"
                  background-color="white"
                  hide-details="auto"
                  outlined
                  dense
                  type="text"
                  name="partnerUserName"
                  placeholder="User Name"
                />
              </v-col>
            </v-row>

            <v-row >
              <v-col
                cols="12"
                sm="10"
                class=""
              >
                <v-text-field 
                  label="Password"
                  ref="partnerPass"
                  v-model="partnerPass"
                  background-color="white"
                  hide-details="auto"
                  outlined
                  dense
                  type="password"
                  name="partnerPass"
                  placeholder="Password"
                />
              </v-col>
            </v-row>

          </v-form>

        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            text
            style="padding: 2px 10px 0; margin-right: 10px;"
            @click="partnerLogin = false"
          >
            Cancel
          </v-btn>
          <v-btn
            rounded 
            color="fzPink" 
            elevation="4"
            class="white--text"
            style="padding: 2px 16px 0;"
            @click="onPartnerLogin"
          >
            Order...
            <v-icon right>{{iconNextArrow}}</v-icon>
          </v-btn>
        </v-card-actions>

      </v-card>
    </v-dialog>


  </v-app>
</template>

<script>
import NavButton from '@/components/NavButton.vue'
import LangMenu from '@/components/LangMenu.vue'

import partnersData from "/.partner-passwords.json"
import bcrypt from 'bcryptjs'

import { format } from 'date-fns'
import { mdiDeleteForever, mdiChevronLeft, mdiArrowRightCircle, mdiLock } from '@mdi/js'
//import { format, add, sub, parseISO, isAfter, isBefore, isEqual } from 'date-fns'
import { add, parseISO, isAfter, isBefore, set } from 'date-fns'

export default {
  name: 'App',

  components: {
    NavButton,
    LangMenu,
  },

  // Reactive data
  data: () => ({
    overlay: false,     // blocks UI until Settings API JSON returns.
    overlayDelay: 500,  // Milliseconds before loading block is shown...

    iconPrevChevron: mdiChevronLeft,
    iconGarbageBin: mdiDeleteForever,
    iconNextArrow: mdiArrowRightCircle,
    iconLock: mdiLock,

    partnerLoginForm: false,
    partnerUserName: '',
    partnerPass: '',
    partnersData: partnersData,
    
    continueBtnVisible:   true,
    canGoBack:   false,

    stepper: 1,
    stepDateComplete: false,
    stepTimeComplete: false,
    stepInfoComplete: false,
    stepPayComplete: false,
    currStep: 'Start',

    // Popup visible on Pay page for Partner login when clicking the (c) symbol in footer.
    partnerLogin: false,

  }),
  // Lifecycle Hooks

  created() {
    
    console.log('Running in _DEV mode?: ', this.$store.state._DEV)


    // this.handleStaleStorageData()
    this.$store.watch(
      (state)=>{
        // What to watch in store.
        //console.log('Watched -> state._navList', state._navList)
        return state._navList + state._currentStep
      },
      ()=>{
        // How to react to the watch
        //console.log('Reacted to watched -> state._navList')
        // this.update()
        // console.log("start valid: ", this.$store.getters.startStepValid)
        this.stepDateComplete = this.$store.getters.startStepValid
        this.stepTimeComplete = this.$store.getters.timeStepValid
        this.stepInfoComplete = this.$store.getters.infoStepValid
        this.stepPayComplete = this.$store.getters.infoPayValid
      },
      {
        // Need this to see into objects and arrays.
        deep:true
      }
    )
  },

  async mounted () {
    try {
      await this.$store.dispatch('init')
    } catch (ex) {
      console.error('My error', ex)
    }
  },


  beforeUpdate () {

    // Shows the editable icon in the Steppers
    this.currStep = this.$store.state._currentStep


    // Show/hide the Back Btn.
    //console.log(this.$route.name)
    if (this.$route.name === 'Start' || this.$route.name === 'Thanks') {
      //console.log('ON HOME PAGE')
      this.onEnableBackBtn(false)
    } else {
      this.onEnableBackBtn(true)
    }


  },


  /*****************************************************
  // Doing all data checks for each step here now.
  // Can remove all the old tangled Nav stuff from vuex
  // at some point when cleaning up.
  *****************************************************/
  beforeMount () {

    this.validateAllSteps()
    
  },




  updated () {

    // Update the Stepper icons to show valid steps.
    // this.updateSteppersSteps()

    //console.log('this.$refs.ContinueBtn', this.$refs.ContinueBtn)
    // This needs to be called on updated() to allow the Step_Start to figure out
    // if the Step is valid and update the _navList in beforeUpdate().

    //this.validateAllSteps()

    this.$refs.ContinueBtn.update()
  },


  // Methods
  methods: {

    onPartnerLogin: function () {

      // TODO: This all needs to be rebuilt. First get a new Tommy API for this.

      // 1. Toss up a page blocker, with a spinner

      // 2. Make fetch() call to Tommy's API

      // 3. Show error (in dialog box) if bad password

      // 4. Go to success screen for Parnter.

      

      // Use the given User Name to pull in the stored hash from partner passwords file
      const partnerNameInput = this.partnerUserName.toLowerCase()
      //console.log(partnerNameInput)
      const partnerData = partnersData.partners[partnerNameInput]
      //console.log(partnerData)
      const myHash = partnerData.hash
      //console.log(myHash)
      // const myEmail = partnerData.email
      // //console.log(myEmail)
      // const myPhone = partnerData.phone
      // //console.log(myPhone)



      bcrypt.compare(this.partnerPass, myHash, (err, res) => {
        if (err) {
          //console.error(err)
          console.log('User Name and/or Password are incorrect.')
          return
        }
        // If res is true, then logged in successfully, complete order without going
        // to Stripe payments. Probably good to send an email here directly as a backup
        // to us if any issues.
        if (res === true) {
          this.processPartnerOrder(this.partnerUserName)
          // close dialog
          this.partnerLogin = false 
        } else {
          // do some type of warning message here.
          console.error('User Name and/or Password are incorrect.')
        }
        // console.log(res) //true or false
      })


      this.partnerPass =  '' // clear password input field.

    },

    processPartnerOrder: function (partnerName) {
      // Send confirm emails.
      // Trigger order directly via Tommy's API ???
      console.log('Login Success!  TODO: Call Tommy API to place order without Stripe', partnerName)


      let me = this

      let id = this.$store.state.orderID
      if (id === '' || id === undefined)  id = null

      let usrLang = this.$i18n.locale
      //console.log("Current user language: ", lang)

      //console.log("totalPassengers", this.$store.state.totalPassengers)

      const data = { 
        "partnerName": partnerName,
        "nonce":"$2a$10$QLByQXc8pJ0l80AI9/Y2XeWW4ABODvIRQuzc0l7jIEcDs2nGqYVna",
        "orderId": id,
        "isTest": this.$store.state._DEV,
        "email": this.$store.state.contactEmail,
        "phone": this.$store.state.contactPhone,
        "totalPassengers": this.$store.state.totalPassengers,
        "flightDate": this.$store.state.flightDate,
        "dateRange": {"start": this.$store.state.arriveDate, "end": this.$store.state.departDate},
        "flightId": this.$store.state.selectedFlight,
        "photos": this.$store.state.wantsPhotos,
        "passengerJSON": this.$store.state.passengerObjList,
        "slotJSON": this.$store.state.slotPassengersObj,
        "orderMessage": this.$store.state.orderMessage,
        "usersLanguage": usrLang
      }

      //console.log("Order data sent to Tommy.", data)


      fetch("https://bookings.simpleitsolutions.ch/api/createPartnerOrder", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            data
          }),
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (session) {
          // Save Tommy's OrderId
          if (session.orderId > 0) {
            me.$store.dispatch('setOrderId', session.orderId)
          }
          
          console.log("DIRECT PARTNER ORDER SUCCESS - Go to Thanks page...")


          // TODO: Create a Partner success payment page, instead of this normal Thanks.
          me.$router.push({
            path: 'Thanks'
          })
        })
        // .then(function (status) {
        //   // If redirectToCheckout fails due to a browser or network
        //   // error, you should display the localized error message to your
        //   // customer using error.message.
        //   if (status != 'success') {
        //     alert(result.error.message);
        //   }
        // })
        .catch(function (error) {
          console.log("Getting an error back in the Partner Order 'catch'")
          console.error("Error:", error)
        })

    },





    showPartnerLoginDialog: function () {

      // Only show on the "Pay" page.
      //console.log(this.$router.history.current.path)
      if (this.$router.history.current.path !== '/Pay') return
      
      this.partnerLogin = true  // Show the dialog.

      // // test out bcrypt
      // let myHash = this.encryptPassword('xxxxxx')
      // console.log(myHash)

    },
    encryptPassword: function (password) {         
      const salt = bcrypt.genSaltSync(10)
      return bcrypt.hashSync(password, salt)
    },





    /*****************************************************
    // Called from Mount and BeforeUpdate
    *****************************************************/
    validateAllSteps: function () {

      if (this.$store.state._DEV === true) {
        console.log("In _DEV mode, not doing page validity checks.")
        return    // let me work on any page when in Dev mode.
      }

      // App-wide check for missing or stale data here.
      // TODO: move to the generic Start Step check below.
      if (this.isStaleFlightDate()) {
        // console.log("isStaleFlightDate")
        if (this.$router.history._startLocation !== '/') this.$router.push('/')    // only nav if not on Start page already.
        return
      }

      // Start Step checks
      if (this.isInvalid_StartStep()) {
        // console.log("isInvalid_StartStep")
        if (this.$router.history._startLocation !== '/') this.$router.push('/')
        return
      }

      console.log("Start/Date Step is Valid")

      // Time Step checks
      if (this.isInvalid_TimeStep()) {
        if (this.$router.history._startLocation.toLowerCase() === '/') return
        if (this.$router.history._startLocation.toLowerCase() !== '/time') this.$router.push('/time')
        return
      }

      console.log("Time Step is Valid")

      // Info Step checks
      if (this.isInvalid_InfoStep()) {
        if (this.$router.history._startLocation.toLowerCase() === '/') return
        if (this.$router.history._startLocation.toLowerCase() === '/time') return
        if (this.$router.history._startLocation.toLowerCase() !== '/info') this.$router.push('/info')
        return
      }

      console.log("Info Step is Valid")

      // Pay Step checks - none. // Pay has no data that must pass validity checks.

      // Thanks Step checks
      if (this.isInvalid_ThanksStep()) {
        if (this.$router.history._startLocation.toLowerCase() === '/') return
        if (this.$router.history._startLocation.toLowerCase() === '/time') return
        if (this.$router.history._startLocation.toLowerCase() === '/info') return
        // if (this.$router.history._startLocation.toLowerCase() === '/pay') return  // Pay has no data that must pass validity checks.
        
        if (this.$router.history._startLocation.toLowerCase() === '/thanks') this.$router.push('/pay')
        return
      }

    },

    /*****************************************************
    // See if all the data for the Thanks Step is valid.
    *****************************************************/
    isInvalid_ThanksStep: function () {

      // also check that we're coming from the Stripe payment page.
      // console.log('TODO: finish checking for referrer coming from Stripe.', document.referrer)
      // https://checkout.stripe.com/

      // Check that the Contact Passenger is valid.
      if ( this.$store.state.orderID === '' || document.referrer !== "https://checkout.stripe.com/") {
        console.log('INVALID DATA: orderID (Transaction Nr) not valid yet or not coming from the Stripe Checkout page. Return to "Pay" page.')
        return true
      }
      return false
    },

    /*****************************************************
    // See if all the data for the Info Step is valid.
    *****************************************************/
    isInvalid_InfoStep: function () {

      // Check that the Contact Passenger is valid.
      if ( this.$store.state.passengerObjList[0].valid === false ) {
        console.log('INVALID DATA: passengerObjList not valid yet. Return to "Info" page.')
        return true
      }
      return false
    },

    /*****************************************************
    // See if all the data for the Time Step is valid.
    *****************************************************/
    isInvalid_TimeStep: function () {

      // Slots, Times and Nr Passengers
      if ( this.$store.state.slotPassengersObj.slotsList.length === 0 || this.isObjEmpty(this.$store.state.slotPassengersObj) ) {
        console.log('INVALID DATA: slotPassengersObj is empty (Slots, Times and Nr Passengers). Return to "Time" page.')
        return true
      }
      return false
    },

    /*****************************************************
    // See if all the data for the Start Step is valid.
    *****************************************************/
    isInvalid_StartStep: function () {

      // flightDate
      // TODO: Add checks for Arrive and Depart dates here. 
      // if ( isAfter( parseISO(this.userFlightDate), parseISO(this.departDate)) || 
      //        isBefore( parseISO(this.userFlightDate), parseISO(this.arriveDate)) ){ 
      if (
        this.$store.state.flightDate === '' ||
        this.$store.state.arriveDate === '' ||
        this.$store.state.departDate === '' ||
        isAfter( parseISO(this.userFlightDate), parseISO(this.departDate)) ||
        isBefore( parseISO(this.userFlightDate), parseISO(this.arriveDate))
      ) {
        console.log('INVALID DATA: flightDate is empty. Return to "Start" page.')
        return true
      }

      // selectedFlight
      if (this.$store.state.selectedFlight === '' ) {
        console.log('INVALID DATA: selectedFlight is empty. Return to "Start" page.')
        return true
      }

      // Flights List (returned from API when a flightDate is selected.)
      if (this.$store.state._flightsList === '' || this.isObjEmpty(this.$store.state._flightsList) ) {
        console.log('INVALID DATA: _flightsList is empty. Return to "Start" page.')
        return true
      }
      return false

    },

    /*****************************************************
    // Check for Stale data on Nav.
    // If stale, clear out related date storage and send user
    // back to the Start page.
    *****************************************************/
    isStaleFlightDate: function () {

        let earliestPossFlightDateISO = add(Date.now(), {days: this.$store.state._bookDaysOffset})
        const flightDateISO = parseISO(this.$store.state.flightDate)
        let transformedToMidnight = set(earliestPossFlightDateISO, { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 })
        //console.log(transformedToMidnight)
        if (  isAfter(transformedToMidnight, flightDateISO) ) {
          console.log('STALE DATA: flightDate is before allowed date.')
          this.$store.dispatch('setFlightDate', '')
          this.$store.dispatch('setArriveDate', '')
          this.$store.dispatch('setDepartDate', '')
          this.$store.dispatch('setFlight', '')
          this.$store.dispatch('setWantsPhotos', false)
          this.$store.dispatch('clearSlotsPassengers')
          return true
        }
      return false

    },




    
    onEnableBackBtn: function (show) {
      //console.log('Enable Btn: ' + valid)
      this.canGoBack = show
    },
    onBackBtnClick: function () {
      //console.log('Clicked Back Btn:')
      
      // Guard against non-set current Step.
      if ( this.isObjEmpty(this.$store.state._currentStep) ) {
        this.$router.push('/') 
        return
      }

      // We need a bit more logic on the back button, to keep Stripe out of the navigation loop
      if (this.$store.state._currentStep.toLowerCase() === 'time') {
        this.$router.push('/') 
        return
      }
      if (this.$store.state._currentStep.toLowerCase() === 'info') {
        this.$router.push('/time') 
        return
      }
      if (this.$store.state._currentStep.toLowerCase() === 'pay') {
        this.$router.push('/info') 
        return
      }
      if (this.$store.state._currentStep.toLowerCase() === 'canceled') {
        this.$router.push('/pay') 
        return
      }
      if (this.$store.state._currentStep.toLowerCase() === 'thanks') {
        this.$router.push('/') 
        return
      }


    },


    // This is just a _DEV function for quick testing
    // Is called by the < Clear button on header.
    // Remove for final release. (maybe put into a debug menu?)
    onClearData: function () {

      if (this.$store.state._DEV !== true) return

      if (confirm("DEBUG: Clear all stored data?") !== true) return

      localStorage.clear()

      if (this.$route.name !== 'Start') {
        this.$router.push('/') // return to step 1
      }
      window.location.reload()

    },
  },

  computed: {

    findOfficeDialog: {
      get() {
        return this.$store.state.findOfficeDialog
      },
      set(val) {
        return this.$store.dispatch('showFindOfficeDialog', val)
      }
    },


    // // Setup a computed prop that aggragates all of the user's inputs, so we can watch
    // // for any change and set the this.$store.dispatch('hasReviewedData', false), which
    // // will re-show the Dialog box before going to the next step.
    // watchForValidStepsChange() {
    //   return `${this.$store.startStepValid}`
    // },

    isPayStep: function () {
      const result = this.$store.state._currentStep.toLowerCase() === 'pay'
      //console.log(result)
      return result
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
    
    // // See above computed prop for description.
    // watchForValidStepsChange: function () {
    //   this.stepDateComplete = this.$store.startStepValid
    // },

    // '$store.state._navList': function() {
    //   console.log("Nav state changed: ", this.$store.state._navList)
    //   // stepDateComplete: false,
    //   // stepTimeComplete: false,
    //   // stepInfoComplete: false,
    //   // stepPayComplete: false
    // },

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

div #logo {
  margin: 0 auto;
}

div #logo .v-image__image {
  filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.4));
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

.v-stepper__step {
  max-width: 135px;
}
div .v-stepper__header {
  height:45px;
	flex-wrap: nowrap;
}
.v-stepper__header .v-divider {
  visibility: hidden;
}

.v-stepper__step .v-stepper__label {
	display: block !important;
}

.v-stepper__header div.v-stepper__label {
	padding-left: 0.3em;
}

</style>
