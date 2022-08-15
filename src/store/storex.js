import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

// Split large vuex into smaller chunks.


// TODO: This looks like a start attempt at redoing the Nav mess. Not done at all...
// Import my modules
// -----------------
import navigation from './modules/nav'
// -----------------


//import { format, add, sub, parseISO, isAfter, isBefore, isEqual } from 'date-fns'
// import { format, add, isBefore, parseISO } from 'date-fns'

Vue.use(Vuex)


const rawNavList = {
  'Start': false,
  'Time': false,
  'Info': false
}

const rawPassengerObj = {
  'id': null,
  'valid': false,
  'sex': null,
  'age': null,
  'name': '',
  'speed': -1,
  'weightKg': 0
}

const rawSlotPassengers = {
  'selectedDate': '',   // probably don't need this as redundant, but good for sanity at start.
  'slotsList': [],
}

const initPassengersInTimeSlot = function () {

  let slotPassObj = localStorage.slotPassengersObj ? JSON.parse(localStorage.slotPassengersObj) : {}
  let count = 0
  let passengersCountList = slotPassObj.slotsList
  if (passengersCountList !== undefined && passengersCountList !== null) {
    for (const slotInfo of passengersCountList){
      //console.log(slotInfo.passengers)
      if ( slotInfo !== null) {
        count = count + slotInfo.passengers
      }
    }
  }
  return count
}


export default new Vuex.Store({

  modules: {
    navigation
  },

  state: {

    // STRIPE
    // Save Stripe error messages that we can display on the Pay page.
    // Needed in vuex as we're navigating from Thanks back to Pay to show
    stripeErrorMessage: '',
    // Stripe customer id and secret stored in localstorage.
    custClientId:     localStorage.custClientId || "",
    custClientSecret: sessionStorage.getItem('custClientSecret') || "",   // don't store to localstorage!
    setupIntentId: localStorage.setupIntentId || "",   

    // Now that we've released production code, need to dynamically set this,
    // so that "https://secure.flyzermatt.com/blabla" automatically runs the 
    // production code that goes to the Live payments. 
    // Everything else (localhost, etc) should set this flag to true.
    // Calling a simple helper function at end of storex.js
    _DEV: _isDev(),

    pageBlocker: false,

    locale: '',

    // Passenger 'expert' warnings. TODO Features on/off (allows putting code into live)
    expertWarnings: false,

    // User inputs.
    // Cached in browser's localStorage.
    orderID:     +localStorage.orderID || "",        // Connects to our db for this order. Created by the 'create-checkout' call to the Gateway.

    totalPassengers: initPassengersInTimeSlot(),     // This is to replace nrPeople below, as using multiple inputs over slots

    //nrPeople:      +localStorage.nrPeople || 0,   // deprecated. Use: totalPassengers
    arriveDate:     localStorage.arriveDate || "",
    flightDate:     localStorage.flightDate || "",    //'', // init to empty. The init API then sets a valid date when run below.
    departDate:     localStorage.departDate || "",
    selectedFlight: +localStorage.selectedFlight || "",    // Flight ID from Tommy.
    wantsPhotos:    localStorage.wantsPhotos ? JSON.parse(localStorage.wantsPhotos) : false,  // convert to bool if not undefined.
    
    // timeSlot:      +localStorage.selectedTimeslot || -1,
    timeSlotLabel:  localStorage.selectedTimeslotLabel || "",

    contactPhone:   localStorage.contactPhone || "",
    contactEmail:   localStorage.contactEmail || "",
    orderMessage:   localStorage.orderMessage || "",

    // Contains a list of (cloned) rawPassengerObj's -- one for each Passenger.
    passengerObjList: localStorage.passengerObjList ? JSON.parse(localStorage.passengerObjList) : [],

    // Holds a list of objects that relate to the chosen Time Slots on a given date.
    slotPassengersObj: localStorage.slotPassengersObj ? JSON.parse(localStorage.slotPassengersObj) : rawSlotPassengers,

    // Active Date is used by the TimeList / TimeSlot components
    // and is the date the user has clicked, but not made the FlightDate
    // yet, by adding passengers.
    _activeDate: "",

    // Settings - API call result
    // Using an Underscore to help make it clear that this isn't User Input.
    //_maxPilots: -1,
    _bookDaysOffset: 0,
    _bookMonthsOffset: 0,
    _videoPrice: +localStorage._videoPrice || -1,
    //_flightsList: null,
    _flightsList: localStorage._flightsList ? JSON.parse(localStorage._flightsList) : {},

    // EasyJet style of choosing a Date's Timeslot.
    //_timeListDates: null, // List of dates obj with time slots
    _timeListDates: localStorage._timeListDates ? JSON.parse(localStorage._timeListDates) : {},

    // Not sure any of these are really needed/used...
    // Loading values. Use to update UI to show various components are loading...
    _app_loading: true,          // defaults to true, as initial loading state of app.
    _flightsList_loading: false,
    _timeList_loading: true,

    // Nav Button controller
    // Holds the Router name and t/f for each Page's validity.
    _navList: localStorage._navList ? JSON.parse(localStorage._navList) : rawNavList,

    // Where we currently are in the Form Steps
    _currentStep: localStorage._currentStep || "",

    // this var when false, will open up the Review your Booking dialog.
    // Set to false again when data changes, to force them to re-Review.
    _hasReviewedData: false,
    _showReviewDialog: false,

    findOfficeDialog: false,

    // // Holds partner data after a Partner login is successful. Passed to Tommy to complete Partner order.
    // // TODO: This needs to go on the back end before next summer, as this is just a stop-gap.
    // partnerOrder: false,    // set to true to trigger a Partner Order
    // partnerData: {
    //   "name": "",
    //   "email": "", 
    //   "phone": ""
    // },

  },   // END STATE

  mutations: {

    PAGE_BLOCKER(state, flag) {
      state.pageBlocker = flag
    },

    // PARTNER_ORDER(state, orderBool) {
    //   state.partnerOrder = orderBool
    // },
    // PARTNER_DATA(state, data) {
    //   console.log(data)
    //   state.partnerData.name = data.name
    //   state.partnerData.email = data.email
    //   state.partnerData.phone = data.phone
    // },
    STRIPE_ERROR_MSG(state, errMsg) {
      state.stripeErrorMessage = errMsg
    },
    STRIPE_CUSTOMER_ID(state, id) {
      state.custClientId = id
      localStorage.custClientId = id
    },
    STRIPE_CUSTOMER_SECRET(state, secret) {
      state.custClientSecret = secret
      sessionStorage.setItem('custClientSecret', secret)
    },
    STRIPE_CUSTOMER_SETUPINTENT_ID(state, id) {
      state.setupIntentId = id
      localStorage.setupIntentId = id
    },

    

    LOCALE(state, localeStr) {
      state.locale = localeStr
    },

    SHOW_FIND_OFFICE_DIALOG(state, showBool) {
      state.findOfficeDialog = showBool
    },

    HAS_REVIEWED_DATA(state, reviewedBool) {
      state._hasReviewedData = reviewedBool
    },
    SHOW_REVIEW_DIALOG(state, showBool) {
      state._showReviewDialog = showBool
    },

    // UI Loading...
    APP_LOADING(state, isLoading) {
      state._app_loading = isLoading
    },
    FLIGHTSLIST_LOADING(state, isLoading) {
      state._flightsList_loading = isLoading
    },
    TIMELIST_LOADING(state, isLoading) {
      state._timeList_loading = isLoading
    },

    // APIs
    TIMELIST_DATES(state, obj) {
      state._timeListDates = obj;
      // Save the timeListDates data to localstorage, to prevent page
      // reloads for borking Step 2.
      localStorage._timeListDates = JSON.stringify(state._timeListDates)
    },

    BOOK_DAYS_OFFSET(state, daysOffset) {
      state._bookDaysOffset = daysOffset  // original date offset coming from Tommy's API
      //state._bookDaysOffset = 1   // over-ride for 1 day in future for bookings
    },
    BOOK_MONTS_OFFSET(state, monthsOffset) {
      state._bookMonthsOffset = monthsOffset
    },
    VIDEO_PRICE(state, price) {
      state._videoPrice = price
      localStorage._videoPrice = JSON.stringify(state._videoPrice)
    },

    ACTIVE_DATE(state, dateStr) {
      state._activeDate = dateStr
    },

    // User inputs, Local Storage Cached
    CHOSEN_DATE(state, dateStr) {
      state.flightDate = dateStr
    },
    CHOSEN_FLIGHT(state, flightStr) {
      state.selectedFlight = flightStr
    },
    CHOSEN_PHOTOS(state, photosBool) {
      state.wantsPhotos = photosBool
    },

    // CHOSEN_TIMESLOT(state, slotInt, slotLabel) {
    //   state.timeSlot = slotInt;
    //   state.timeSlotLabel = slotLabel
    // },

    CONTACT_PHONE(state, phoneNr) {
      state.contactPhone = phoneNr
    },
    CONTACT_EMAIL(state, email) {
      state.contactEmail = email
    },
    
    ORDER_MESSAGE(state, msg) {
      state.orderMessage = msg
    },

    ARRIVE_DATE(state, dateStr) {
      state.arriveDate = dateStr
    },
    DEPART_DATE(state, dateStr) {
      state.departDate = dateStr
    },
    
    
    

    // Local Storage Cached
    ORDER_ID(state, id) {
      state.orderID = id
      //console.log("Set orderID", state.orderID);
      localStorage.orderID = JSON.stringify(state.orderID)
    },

    FLIGHTS_LIST(state, obj) {
      //console.log("Flight Options for ", obj);
      state._flightsList = obj
      localStorage._flightsList = JSON.stringify(state._flightsList)
    },

    // Navigation 
    CLEAR_NAV_LIST(state) {
      //console.log("Mutating CLEAR_NAV_LIST", payload);
      state._navList = rawNavList
    },
    NAV_LIST(state, payload) {
      //console.log("Mutating NAV_LIST", payload);
      state._navList[Object.keys(payload)[0]] = Object.values(payload)[0]
    },
    CURRENT_STEP(state, stepName) {
      //console.log("Mutating CURRENT_STEP", stepName);
      state._currentStep = stepName
    },

    // --- Passenger Mutations ---

    PASSENGER_VALID(state, payload) {
      // Find matching passenger object
      let matchedPassengerObj = findPassengerObj(state, payload.passengerId)
      // Set the Name value.
      matchedPassengerObj.valid = payload.valid
    },

    PASSENGER_SEX(state, payload) {
      // Find matching passenger object
      let matchedPassengerObj = findPassengerObj(state, payload.passengerId)
      // Set the Name value.
      matchedPassengerObj.sex = payload.sexStr
    },
    PASSENGER_AGE(state, payload) {
      // Find matching passenger object
      let matchedPassengerObj = findPassengerObj(state, payload.passengerId)
      // Set the Name value.
      matchedPassengerObj.age = payload.ageInt
    },
    PASSENGER_NAME(state, payload) {
      //console.log("Mutating PASSENGER_NAME", payload);
      // Find matching passenger object
      let matchedPassengerObj = findPassengerObj(state, payload.passengerId)
      // Set the Name value.
      matchedPassengerObj.name = payload.nameStr
    },
    PASSENGER_SPEED(state, payload) {
      //console.log("Mutating PASSENGER_NAME", payload);
      // Find matching passenger object
      let matchedPassengerObj = findPassengerObj(state, payload.passengerId)
      // Set the Name value.
      matchedPassengerObj.speed = payload.speedInt
    },
    PASSENGER_WEIGHT(state, payload) {
      //console.log("Mutating PASSENGER_NAME", payload);
      // Find matching passenger object
      let matchedPassengerObj = findPassengerObj(state, payload.passengerId)
      // Set the Name value.
      matchedPassengerObj.weightKg = payload.weightInt
    },



    // This sets passenger number for the currently Selected Date.
    SLOT_SELECTED_DATE(state, dateStr) {
      if (state.slotPassengersObj.selectedDate !== state.flightDate) {
        state.slotPassengersObj.selectedDate = ''
        state.slotPassengersObj.slotsList = []
      }
      state.slotPassengersObj.selectedDate = dateStr
    },

    NUMBER_PASSENGERS(state, payload) {
      //console.log("Mutating NUMBER_PASSENGERS", payload);
      // If stored date and flightDate don't match, then reinstanciate slotPassengersObj
      if (state.slotPassengersObj.selectedDate !== state.flightDate) {
        state.slotPassengersObj = rawSlotPassengers
        state.slotPassengersObj.selectedDate = state.flightDate
      }

      // Set the Array entry.
      state.slotPassengersObj.slotsList[payload.index] = {"timeString":payload.timeString, "passengers":payload.passengers}
      //console.log("slotPassengersObj", state.slotPassengersObj);


      let count = 0
      for (const slot of state.slotPassengersObj.slotsList) {
        // Need to guard against 'unset' slots (ones with no entry set yet), 
        // as this resolves to 'undefined'. Just skip, should be okay.
        if (slot !== undefined && slot !== null) {
          //console.log('time: ' + slot.timeString + '  passengers: ' + slot.passengers)
          count = count + slot.passengers
        }
      }
      //console.log("Total Passengers: ", count)

      // Need to add up all passengers and set this reactive property.
      state.totalPassengers = count

    },

    CLEAR_PASSENGERS(state) {
      state.totalPassengers = 0
      state.slotPassengersObj = rawSlotPassengers
      localStorage.removeItem('slotPassengersObj')
    },

    RESET_PASSENGERS(state) {
      state.totalPassengers = 0
      state.slotPassengersObj = rawSlotPassengers
      localStorage.slotPassengersObj = JSON.stringify(state.slotPassengersObj)
    },


  },  // END MUTATIONS








  /** ========================================================================================================== 
   * ACTIONS.
   * 
   * 
   * ==========================================================================================================*/
  actions: {

    // setPartnerOrder(context, orderBool) {
    //   context.commit("PARTNER_ORDER", orderBool)
    // },
    // setPartnerData(context, data) {
    //   context.commit("PARTNER_DATA", data)
    // },
   
    // API CALLS.

    // ******************** API: Flight Options ********************
    // This needs to return a json object listing each flight's id, name and price in CHF.
    async flightOptions(context) {
      // Return if the date is not set/valid.
      const flDate = context.state.flightDate;
      if (flDate === '') return
      context.commit("FLIGHTSLIST_LOADING", true);


      // Setup dev/live API call to Tommy.
      let apiPath = "https://bookings.simpleitsolutions.ch/api/flightoptions/" + flDate
      if (context.state._DEV === true) apiPath = "https://bookings-dev.simpleitsolutions.ch/api/flightoptions/" + flDate

      //console.log("Loading Flight Options for drop menu Step 1 ->", flDate);
      return axios.get(apiPath)
        .then(response => {
          let data = response.data
          context.commit("FLIGHTS_LIST", data)
        })
        .catch(error => {
          // if (context.state._DEV) {
          //   console.log('Temp dev Flight name and price data being generated -> flightOptions(). ', error)
          //   context.commit("FLIGHTS_LIST", generateFlightsOptions())  // only loads temp.json data while in dev mode.
          // } else {
          //   console.log(error)
          // }
          console.log(error)
        })
        .finally(() => context.commit("FLIGHTSLIST_LOADING", false))
    },


    // ******************** API: TimeList Dates ********************
    async timeListDates(context) {
      context.commit("TIMELIST_LOADING", true); // Loading UI ON

      // Return if the date is not set/valid.
      const flDate = context.state.flightDate
      const flightId = context.state.selectedFlight
      if (flightId === "") return         // No flight has yet been chosen, don't call API,
      //console.log(flDate)


      // Setup dev/live API call to Tommy.
      let apiPath = "https://bookings.simpleitsolutions.ch/api/flightsavailable/" + flightId + "/" + flDate
      if (context.state._DEV === true) apiPath = "https://bookings-dev.simpleitsolutions.ch/api/flightsavailable/" + flightId + "/" + flDate


      return axios.get(apiPath)
        .then(response => {
          let data = response.data;
          context.commit("TIMELIST_DATES", data)
        })
        .catch(error => {
          // if (context.state._DEV) {
          //   // TODO Prob don't need this anymore. remove at some point.
          //   console.log('Temp dev data being generated for FlightDates in store -> timeListDates(). ', error)
          //   context.commit("TIMELIST_DATES", generateFlightsDates(flDate))  // only loads temp.json data while in dev mode.
          // } else {
          //   console.log(error)
          // }
          console.log(error)
        })
        .finally(() => 
          context.commit("TIMELIST_LOADING", false),
        )
    },



    // ******************** API: init App ********************
    async init(context) {

      // Setup dev/live API call to Tommy.
      let apiPath = "https://bookings.simpleitsolutions.ch/api/init"
      if (context.state._DEV === true) apiPath = "https://bookings-dev.simpleitsolutions.ch/api/init"


      return axios.get(apiPath)
        .then(response => {
          let data = response.data;
          // Note to future self:
          // the preceeding + converts from String to Number before mutatiing.

          // TODO Needs a future component/function to calculate allowed booking times to 06:00 Swiss time.
          // Overriding the incoming setting at moment to allow bookings from 
          // tomorrow. 
          context.commit("BOOK_DAYS_OFFSET", +data["book-days-from-today"])
          //context.commit("BOOK_DAYS_OFFSET", 1)

          context.commit("BOOK_MONTS_OFFSET", +data["book-future-months"])
          context.commit("VIDEO_PRICE", +data["video-cost"])
        })
        .catch(error => {
          console.log(error)
        })
        .finally(() => {
          context.commit("APP_LOADING", false)
          //initFlightDate(context)           // This will delete any invalid (old) flight date stored in localstorage
        }) // Loading UI OFF (starts off ON)
    },

    // This is used in the pilot availibility checker before Booking.
    // Pass in a newly downloaded _timeListDates object, with updated pilots/slots
    setTimesListDates(context, tldObj) {
      context.commit("TIMELIST_DATES", tldObj)
    },

    
    pageBlocker(context, flag) {
      context.commit("PAGE_BLOCKER", flag)
    },

    clearTimeListDates(context) {
      context.commit("TIMELIST_DATES", '')
    },

    setVideoPrice(context, vidPrice) {
      context.commit("VIDEO_PRICE", vidPrice)
    },

    setFlightsList(context, flightsListObj) {
      context.commit("FLIGHTS_LIST", flightsListObj)
    },

    hasReviewedData(context, reviewedBool) {
      context.commit("HAS_REVIEWED_DATA", reviewedBool)
    },
    showReviewDialog(context, showBool) {
      context.commit("SHOW_REVIEW_DIALOG", showBool)
    },
    showFindOfficeDialog(context, showBool) {
      context.commit("SHOW_FIND_OFFICE_DIALOG", showBool)
    },
    
    // ------ STRIPE ------
    // Stripe's returned order id.
    setOrderId(context, id) {
      context.commit("ORDER_ID", id)
    },
    setStripeCustId(context, id) {
      context.commit("STRIPE_CUSTOMER_ID", id)
    },
    setStripeCustSecret(context, secret) {
      context.commit("STRIPE_CUSTOMER_SECRET", secret)
    },
    setStripeSetupIntentId(context, id) {
      context.commit("STRIPE_CUSTOMER_SETUPINTENT_ID", id)
    },

    // ------ END: STRIPE ------


    // Database connector id.
    setStripeErrorMsg(context, msg) {
      context.commit("STRIPE_ERROR_MSG", msg)
    },

    // --- USER INPUTS ---

    setLocale(context, localeStr) {
      context.commit("LOCALE", localeStr)
    },

    setArriveDate(context, dateStr) {
      context.commit("ARRIVE_DATE", dateStr)
      localStorage.arriveDate = dateStr
    },
    setDepartDate(context, dateStr) {
      context.commit("DEPART_DATE", dateStr)
      localStorage.departDate = dateStr
    },
    setFlightDate(context, dateStr) {
      context.commit("CHOSEN_DATE", dateStr)
      localStorage.flightDate = dateStr
      // Also need to set the selectedDate to match, so this is always correct and
      // doesn't fall out of sync (or just remove it from the Passengers slot object altogether...)
      // const rawSlotPassengers = {
      //   'selectedDate': '',   // probably don't need this as redundant, but good for sanity at start.
      //   'slotsList': [0:{"timeString":"08:30", "passengers":3}],
      // }
      context.commit("SLOT_SELECTED_DATE", dateStr)
    },
    setActiveDate(context, dateStr) {
      context.commit("ACTIVE_DATE", dateStr)  // no localstorage for this. Set when entering TimeList step.
      //localStorage._activeDate = dateStr
    },

    setFlight(context, flightNameStr) {
      context.commit("CHOSEN_FLIGHT", flightNameStr)
      localStorage.selectedFlight = flightNameStr
    },
    setWantsPhotos(context, picsBool) {
      context.commit("CHOSEN_PHOTOS", picsBool)
      localStorage.wantsPhotos = picsBool
    },
    // setTimeSlot(context, payload) {
    //   //console.log('slotInt', payload.slot, payload.label)
    //   context.commit("CHOSEN_TIMESLOT", payload.slot, payload.label)
    //   localStorage.selectedTimeslot = payload.slot
    //   localStorage.selectedTimeslotLabel = payload.label
    // },

    // Nav Action.
    clearNavList(context) {
      context.commit("CLEAR_NAV_LIST")
      localStorage._navList = JSON.stringify(context.state._navList)
    },
    setNavListItem(context, payload) {
      context.commit("NAV_LIST", payload)
      localStorage._navList = JSON.stringify(context.state._navList)
    },
    setCurrentStep(context, stepName) {
      context.commit("CURRENT_STEP", stepName)
      localStorage._currentStep = stepName
      // // Call our Stale data (flightDate) handler here.
      // staleFlightDate(context)

    },

    setContactPhone(context, phoneNr) {
      context.commit("CONTACT_PHONE", phoneNr)
      localStorage.contactPhone = phoneNr
    },
    setContactEmail(context, email) {
      context.commit("CONTACT_EMAIL", email)
      localStorage.contactEmail = email
    },
    setOrderMessage(context, msg) {
      context.commit("ORDER_MESSAGE", msg)
      localStorage.orderMessage = msg
    },

    

    // ---- Passenger Sets -----

    setPassengerFormValid(context, payload) {
      //console.log('passengerId: ' + payload.passengerId + ' nameStr: ' + payload.nameStr)
      context.commit("PASSENGER_VALID", payload);
      //localStorage.passengerObjList = JSON.stringify(context.state.passengerObjList)
      savePassengerObjListToLocalStorage(context)
    },

    setPassengerSex(context, payload) {
      context.commit("PASSENGER_SEX", payload);
      savePassengerObjListToLocalStorage(context)
    },

    setPassengerAge(context, payload) {
      context.commit("PASSENGER_AGE", payload);
      savePassengerObjListToLocalStorage(context)
    },

    setPassengerName(context, payload) {
      context.commit("PASSENGER_NAME", payload);
      savePassengerObjListToLocalStorage(context)
    },

    setPassengerSpeed(context, payload) {
      context.commit("PASSENGER_SPEED", payload);
      savePassengerObjListToLocalStorage(context)
    },

    setPassengerWeight(context, payload) {
      context.commit("PASSENGER_WEIGHT", payload);
      savePassengerObjListToLocalStorage(context)
    },

    // ---- Complete Order -----
    // Reset all of our stored data after completing order.
    // orderCompletedReset() {      
    //   console.log("orderCompletedReset() called", this)
      // this.setCurrentStep(context, 'Start')

      // context.commit("ORDER_ID", '')
      
      // context.commit("STRIPE_CUSTOMER_ID", '')
      // context.commit("STRIPE_CUSTOMER_SECRET", '')
      // context.commit("STRIPE_CUSTOMER_SETUPINTENT_ID", '')
      
      // this.clearNavList(context)
      // this.setArriveDate(context, '')
      // this.setDepartDate(context, '')
      // this.setFlightDate(context, '')

      // this.clearNavList(context, '')
      // this.setFlightsList(context, '')
      // this.clearTimeListDates(context, '')

      // this.setWantsPhotos(context, '')
      // this.setVideoPrice(context, '')

      // this.setFlight(context, '')
      // this.setOrderMessage(context, '')

      // this.clearSlotsPassengers(context, '')

    // },
    // ---------

    // ---- TimeSlot Sets -----

    // Need this to 'reset' localStorage for testing.
    clearSlotsPassengers(context) {
      //console.log('slotIndex: ' + payload.index + ' TimeStr: ' + payload.timeString + ' Passengers: ' + payload.passengers)
      context.commit("CLEAR_PASSENGERS")
      localStorage.removeItem('slotPassengersObj')
    },
    setSlotPassengers(context, payload) {
      //console.log('slotIndex: ' + payload.index + ' TimeStr: ' + payload.timeString + ' Passengers: ' + payload.passengers)
      if (payload === null) {
        console.log("Payload is null")
      }
      context.commit("NUMBER_PASSENGERS", payload)
      localStorage.slotPassengersObj = JSON.stringify(context.state.slotPassengersObj)
    },

    // Calling this after failing a Pilot availability check before Booking a Flight
    // Need to reset this, so the Time step updates to show latest avail.
    resetSlotsPassengers(context) {
      //console.log('slotIndex: ' + payload.index + ' TimeStr: ' + payload.timeString + ' Passengers: ' + payload.passengers)
      context.commit("RESET_PASSENGERS")
      localStorage.removeItem('slotPassengersObj')
    },


  },  // END ACTIONS
  
  getters: {

    getCurrentStep: state => {
      return state._currentStep
    },

    startStepValid: state => {
      return state._navList.Start === true
    },
    timeStepValid: state => {
      return state._navList.Time === true
    },
    infoStepValid: state => {
      return state._navList.Info === true
    },
    infoPayValid: state => {
      return state._currentStep === 'Pay' && state.orderID !== ''
    },


    /**
     * Pass in a flight ID and get the name and price returned as an object.
     * "100": {
     *   "name": "Classic High",
     *   "price_CHF": "220"
     * }
     * @param {integer} id 
     * @returns object
     */
    getFlightFromID: (state) => (id) => {

      if (isObjEmpty(state._flightsList)) {
        //console.log('empty flight list')
        return {}
      }

      let flightDetailsObj = {}
      // for (const [key, value] of Object.entries(state._flightsList)) {
      //   if (key == id) {
      //     console.log(key, id, value)
      //     return flightDetailsObj = value
      //   }
      // }

      for (const prop in state._flightsList) {
        //console.log(state._flightsList[prop].id, id)
        if (state._flightsList[prop].id === id) {
          return flightDetailsObj = state._flightsList[prop]
        }
      }

      return flightDetailsObj
      
    },


    getStoredPassengersInSlot: (state) => (slotDate, slotIndex) => {

      if (slotDate != state.flightDate) {
        //console.log('Not todays Slot', slotDate, state.flightDate)
        return 0
      }

      let slotsList = state.slotPassengersObj.slotsList[slotIndex]
      if (slotsList === undefined || slotsList === null) {
        //console.log(' -> No passengers yet in this slot: ', slotIndex)
        return 0
      }
      
      //console.log('Found passengers in slot: ', slotsList, slotIndex)
      
      return slotsList.passengers
    },


    // Not sure I really need these like this. Each step is checking if valid and marking
    // it into the state._navList array. Just a single call to this to check if marked valid
    // should be enough...
    step_startValid: state => {
      const isValid = state.flightDate !== '' && state.selectedFlight !== ''
      //console.log('step_startValid? :', isValid)
      return isValid
    },

    step_timeValid: (state) => {
      const isValid = state.timeSlot > -1 && state.timeSlotLabel !== ''
      //console.log('step_timeValid? :', isValid)
      return isValid
    },


    //--------------------
    // Passenger Getters.  
    
    // Added this as we only want to return the passengers from the
    // state.passengerObjList up to the current state.totalPassengers (there can
    // be more than this in the passengerObjectList, as going say, from 4 to 2x
    // passengers will still leave all 4x in the passengerObjectList)
    getPassengersList: (state) => {

      let refinedPassengerObjList = []

      for (let i = 0; i < state.totalPassengers; i++) {
        let copiedPassenger = JSON.parse(JSON.stringify(state.passengerObjList[i]))
        refinedPassengerObjList[i] = copiedPassenger
      }
      //console.log(refinedPassengerObjList)
      return refinedPassengerObjList
    },
    

    getTotalPassengers: (state) => {
      return state.totalPassengers
    },


    getAllPassengersValid: (state) => {
      // Search for a matching entry in 'passengerObjList' for customer 'custNr'
      // if found, return the existing age from LocalStorage, otherwise
      // Add a new Passenger object to 'passengerObjList'
      // -> Using helper functions below to keep this clean.
      // let matchedPassengerObj = findPassengerObj(state, custNr)
      // return matchedPassengerObj.valid

      let isValid = true
      
      for (let i = 0; i < state.totalPassengers; i++) {
        if (state.passengerObjList[i] === undefined || state.passengerObjList[i].valid !== true) {
          isValid = false
          break
        }
      }

      return isValid
    },
    getIsValidById: (state) => (custNr) => {
      // Search for a matching entry in 'passengerObjList' for customer 'custNr'
      // if found, return the existing age from LocalStorage, otherwise
      // Add a new Passenger object to 'passengerObjList'
      // -> Using helper functions below to keep this clean.
      let matchedPassengerObj = findPassengerObj(state, custNr)
      return matchedPassengerObj.valid
    },
    getSexById: (state) => (custNr) => {
      let matchedPassengerObj = findPassengerObj(state, custNr)
      return matchedPassengerObj.sex
    },
    getAgeById: (state) => (custNr) => {
      let matchedPassengerObj = findPassengerObj(state, custNr)
      return matchedPassengerObj.age
    },
    getNameById: (state) => (custNr) => {
      let matchedPassengerObj = findPassengerObj(state, custNr)
      return matchedPassengerObj.name
    },
    getSpeedById: (state) => (custNr) => {
      let matchedPassengerObj = findPassengerObj(state, custNr)
      return matchedPassengerObj.speed
    },
    getWeightById: (state) => (custNr) => {
      let matchedPassengerObj = findPassengerObj(state, custNr)
      return matchedPassengerObj.weightKg
    },

    //*************************
    getUsersDayIndex: (state) => () => {
      
      let foundIndx = 0

      const usrDateStr = state.flightDate
      const tmpList = state._timeListDates

      if (tmpList === null) return foundIndx

      let index = 0
      Object.keys(tmpList).forEach(function(key) {
        // if (foundIndx === 0) {
          // console.log(key, tmpList[key]);
          if (key === usrDateStr) {
            // console.log("MATCH: " + index, key, tmpList[key]);
            foundIndx = index
          }
          index = index + 1
        // }
      })

      //this.swiper.slideTo(foundIndx, 500, false)
      return foundIndx

    },

    // Return the matching flight object, otherwise 'undefined'
    getFlightObjById: (state) => () => {
      let flightObj = state._flightsList.find(_flightsList => _flightsList.id === state.selectedFlight)
      return flightObj
    },

  }  // END GETTERS
  

});



/*****************************************************
// helper functions for working with Passenger Objects.
 *****************************************************/
function findPassengerObj (state, passengerId) {
  let matchedPassengerObj = state.passengerObjList.find(passengerObjList => passengerObjList.id === passengerId)
  if (typeof matchedPassengerObj === 'undefined') {
    matchedPassengerObj = createNewPassengerObj(passengerId)
    // Add to 'passengerObjList'
    state.passengerObjList.push(matchedPassengerObj)
  }
  return matchedPassengerObj
}

function createNewPassengerObj (id) {
  let newPassengerObj = Object.assign({}, rawPassengerObj)
  // Set the id for the newly created Pass obj.
  newPassengerObj.id = id
  return newPassengerObj
}

function savePassengerObjListToLocalStorage (context) {
  localStorage.passengerObjList = JSON.stringify(context.state.passengerObjList)
}



// // *****************************************************************
// // TEMP: this is a temp helper function to build fake dates based upon 
// // the user's chosen date, until Tommy has his backend API working.
// // *****************************************************************
// function generateFlightsOptions () {
//   return flightdata   // imported from flightdata.js
// }




// // *****************************************************************
// // TEMP: this is a temp helper function to build fake dates based upon 
// // the user's chosen date, until Tommy has his backend API working.
// // *****************************************************************
// function generateFlightsDates (usersFlightDate) {

//   //console.log('targetDate: ', targetDate)
//   const nrDaysToGen = 14
  
//   let prevDaysToShow = 7
//   // users date minus today. if less than prevDaysToShow, then update.
//   let testDateInt = dateUtils.differenceInDays(new Date(usersFlightDate), new Date() )
//   //console.log('testDateInt: ', testDateInt)
//   if (testDateInt < prevDaysToShow) {
//     prevDaysToShow = testDateInt
//   }
  
//   let dateObj = dateUtils.sub(new Date(usersFlightDate), { days: prevDaysToShow })

//   let flightsdates = {}

//   for (let id = 0; id < nrDaysToGen; id++) {

//     // console.log('Raw date string: ', dateObj)

//     let currDayKey = dateUtils.format(dateObj, 'yyyy-MM-dd')    // this is fucking up! Working now, changed year from 'Y' to 'yyyy'
//     // console.log('Formatted date string: ', currDayKey)

//     let timesList = [
//       "08:30",
//       "10:15",
//       "11:45",
//       "13:15",
//       "14:45",
//       "16:15",
//       "17:00",
//       "19:00"
//     ];
//     let timeslots = {};
    
//     // Loop and build this day's timeslots.
//     timesList.forEach(function(time) {
//       let slotAvail = Math.floor(Math.random() * 7)
//       timeslots[time] = slotAvail
//     })
    
//     flightsdates[currDayKey] = timeslots

//     dateObj = dateUtils.add(dateObj, { days: 1 })

//   }

//   return flightsdates;
// }


// *****************************************************************
// TEMP: this is a temp helper function to build fake dates based upon 
// the user's chosen date, until Tommy has his backend API working.
// *****************************************************************
function isObjEmpty (obj) {
  //console.log('Object empty test: ', Object.keys(obj).length)
  if (obj == null) return true
  if (Object.keys(obj).length > 0) return false
  return true
}


// // for https://my.company.website.com,
// const subdomain = window.location.hostname.split('.').slice(0, -2).join('.');
// console.log(subdomain); // "my.company"

// *****************************************************************
  // Now that we've released production code, need to dynamically set this,
  // so that "https://secure.flyzermatt.com/blabla" automatically runs the 
  // production code that goes to the Live payments. 
  // Everything else (localhost, etc) should set this flag to true.
  //_DEV: true,
  // -----
  // Adding either ?dev or ?live overrides and lets us test more effectively.
// *****************************************************************
function _isDev () {

  // for https://my.company.website.com,
  // const subdomain = window.location.hostname.split('.').slice(0, -2).join('.')
  // console.log(subdomain); // "my.company"

  // old code that just checks if is secure.flyzermatt.com -- weak.
  // const subdomain = window.location.hostname.split('.').slice(0, -2).join('.')
  // console.log(subdomain)
  // if (subdomain == 'secure') return false
  // return true

  const subdomain = window.location.hostname.split('.').slice(0, -2).join('.')
  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)

  const DEV_flagValue = urlParams.has('dev')
  const LIVE_flagValue = urlParams.has('live')
  
  //console.log('_DEV?: ', DEV_flagValue)
  //console.log('_LIVE?: ', LIVE_flagValue)

  if (DEV_flagValue === true) return true
  if (LIVE_flagValue === true) return false

  if (subdomain == 'secure') return false

  return true   // defaults to _DEV -> true

}




// /* -----------------------------------------------------------------------
// This function reads in flightDate from localStorage and if the date is 
// invalid, sets an empty date. Possibly also remove the arrive and depart 
// dates as well  
// -------------------------------------------------------------------------*/
// function initFlightDate (context) {

//   //console.log(context)

//   const offsetDays = context.state._bookDaysOffset    // currently 1 from Tommy API
//   const todaysDateStr = format(new Date(), 'yyyy-MM-dd')
//   const NowDate = parseISO(todaysDateStr)                           // Today

//   const minValidDate = add(NowDate, {days:offsetDays})    // Today + 1
//   const storedFlightDate = parseISO(localStorage.flightDate || "")

//   console.log('minValidDate', minValidDate)
//   console.log('storedFlightDate', storedFlightDate)


//   if ( isBefore( storedFlightDate, minValidDate )) {
//     console.log('Bad date, resetting FlightDate to empty')
//     //context.dispatch('setFlightDate', '')
//   } else {
//     console.log('Stored FlightDate is okay')
//     //context.dispatch('setFlightDate', todaysDateStr)
//   }


// }