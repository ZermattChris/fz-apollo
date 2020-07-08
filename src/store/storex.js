import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

// Dev only - remove once API is up.
import tmp from "./temp.json"

Vue.use(Vuex)

const rawNavList = {
  'Start': false,
  'Time': false,
  'Info': false,
  'Next': false,
  'Pay': false,
  'Thanks': false
}

export default new Vuex.Store({
  state: {

    // Set to false for Release code.
    _DEV: true,

    // User inputs.
    // Cached in browser's localStorage.
    nrPeople:      +localStorage.nrPeople || 0,
    flightDate:     localStorage.flightDate || "",
    selectedFlight: localStorage.selectedFlight || "",
    wantsPhotos:    localStorage.wantsPhotos ? JSON.parse(localStorage.wantsPhotos) : false,  // convert to bool if not undefined.
    
    timeSlot:      +localStorage.selectedTimeslot || -1,
    timeSlotLabel:  localStorage.selectedTimeslotLabel || "",

    contactPhone:   localStorage.contactPhone || "",
    contactEmail:   localStorage.contactEmail || "",


    // Settings - API call result
    // Using an Underscore to help make it clear that this isn't User Input.
    _maxPilots: -1,
    _bookDaysOffset: -1,
    _bookMonthsOffset: -1,
    _videoPrice: -1,
    _flightsList: null,
    // EasyJet style of choosing a Date's Timeslot.
    _timeListDates: null, // List of dates obj with time slots

    // Loading values. Use to update UI to show various components are loading...
    _app_loading: true,          // defaults to true, as initial loading state of app.
    _flightsList_loading: false,
    _timeList_loading: true,

    // Nav Button controller
    // Holds the Router name and t/f for each Page's validity.
    _navList: localStorage._navList ? JSON.parse(localStorage._navList) : rawNavList,

      // Where we currently are in the Form Steps
    _currentStep: localStorage._currentStep || "",  

  },   // END STATE

  mutations: {
    // UI Loading...
    APP_LOADING(state, isLoading) {
      state._app_loading = isLoading;
    },
    FLIGHTSLIST_LOADING(state, isLoading) {
      state._flightsList_loading = isLoading;
    },
    TIMELIST_LOADING(state, isLoading) {
      state._timeList_loading = isLoading;
    },

    // APIs
    TIMELIST_DATES(state, obj) {
      state._timeListDates = obj;
    },

    MAX_PILOTS(state, nr) {
      state._maxPilots = nr;
    },
    BOOK_DAYS_OFFSET(state, daysOffset) {
      state._bookDaysOffset = daysOffset;
    },
    BOOK_MONTS_OFFSET(state, monthsOffset) {
      state._bookMonthsOffset = monthsOffset;
    },
    VIDEO_PRICE(state, price) {
      state._videoPrice = price;
    },

    // User inputs, Local Storage Cached
    CHOSEN_NR_PEOPLE(state, nr) {
      state.nrPeople = nr;
    },
    CHOSEN_DATE(state, dateStr) {
      state.flightDate = dateStr;
    },
    CHOSEN_FLIGHT(state, flightStr) {
      state.selectedFlight = flightStr;
    },
    CHOSEN_PHOTOS(state, photosBool) {
      state.wantsPhotos = photosBool;
    },

    CHOSEN_TIMESLOT(state, slotInt, slotLabel) {
      state.timeSlot = slotInt;
      state.timeSlotLabel = slotLabel;
    },

    CONTACT_PHONE(state, phoneNr) {
      state.contactPhone = phoneNr;
    },
    CONTACT_EMAIL(state, email) {
      state.contactEmail = email;
    },
    
    

    // Local Storage Cached
    FLIGHTS_LIST(state, obj) {
      //console.log("Flight Options for ", obj);
      state._flightsList = obj;
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


  },  // END MUTATIONS

  actions: {
    // API CALLS.
    // ******************** API: TimeList Dates ********************
    async timeListDates(context) {
      context.commit("TIMELIST_LOADING", true); // Loading UI ON

      // TODO: Figure out the starting date (keep in mind that we only need
      // to load from Today()+_bookDaysOffset)

      // Return if the date is not set/valid.
      //const flDate = context.state.flightDate;
      //console.log(flDate);

      return axios.get("http://localhost:3000/flightsdates/")
        .then(response => {
          let data = response.data;
          context.commit("TIMELIST_DATES", data)
        })
        .catch(error => {
          console.log(error)
          if (context.state._DEV) {
            context.commit("TIMELIST_DATES", tmp)
          }
        })
        .finally(() => context.commit("TIMELIST_LOADING", false))
    },

    // ******************** API: init App ********************
    async init(context) {
      // var result = await axios.get("http://localhost:3000/init");   // local JSON server for dev.
      return axios.get("https://fz-backend.simpleitsolutions.ch/onlinebooking/api/init")
        .then(response => {
          let data = response.data;
          // Note to future self:
          // the preceeding + converts from String to Number before mutatiing.
          context.commit("MAX_PILOTS", +data["max-pilots"]);
          context.commit("BOOK_DAYS_OFFSET", +data["book-days-from-today"]);
          context.commit("BOOK_MONTS_OFFSET", +data["book-future-months"]);
          context.commit("VIDEO_PRICE", +data["video-cost"]);
        })
        .catch(error => {
          console.log(error)
        })
        .finally(() => context.commit("APP_LOADING", false)) // Loading UI OFF (starts off ON)
    },
    // ******************** API: Flight Options ********************
    async flightOptions(context) {
      // Return if the date is not set/valid.
      const flDate = context.state.flightDate;
      if (flDate === '') return
      context.commit("FLIGHTSLIST_LOADING", true);
      //console.log("Loading Flight Options for drop menu Step 1 ->", flDate);
      return axios.get("https://fz-backend.simpleitsolutions.ch/onlinebooking/api/flightoptions/" + flDate)
        .then(response => {
          let data = response.data;
          context.commit("FLIGHTS_LIST", data);
        })
        .catch(error => {
          console.log(error)
        })
        .finally(() => context.commit("FLIGHTSLIST_LOADING", false))
    },


    setFlightsList(context, flightsListObj) {
      context.commit("FLIGHTS_LIST", flightsListObj);
    },

    // --- USER INPUTS ---
    setNrPeople(context, nr) {
      context.commit("CHOSEN_NR_PEOPLE", +nr);
      localStorage.nrPeople = nr
    },
    setFlightDate(context, dateStr) {
      context.commit("CHOSEN_DATE", dateStr);
      localStorage.flightDate = dateStr
    },
    setFlight(context, flightNameStr) {
      context.commit("CHOSEN_FLIGHT", flightNameStr);
      localStorage.selectedFlight = flightNameStr
    },
    setWantsPhotos(context, picsBool) {
      context.commit("CHOSEN_PHOTOS", picsBool);
      localStorage.wantsPhotos = picsBool
    },
    setTimeSlot(context, payload) {
      //console.log('slotInt', payload.slot, payload.label)
      context.commit("CHOSEN_TIMESLOT", payload.slot, payload.label);
      localStorage.selectedTimeslot = payload.slot
      localStorage.selectedTimeslotLabel = payload.label
    },

    // Nav Action.
    clearNavList(context) {
      //console.log('NAV_LIST', payload)
      context.commit("CLEAR_NAV_LIST");
      localStorage._navList = JSON.stringify(context.state._navList)
    },
    setNavListItem(context, payload) {
      //console.log('NAV_LIST', payload)
      context.commit("NAV_LIST", payload);
      localStorage._navList = JSON.stringify(context.state._navList)
    },
    setCurrentStep(context, stepName) {
      //console.log('NAV_LIST', payload)
      context.commit("CURRENT_STEP", stepName);
      localStorage._currentStep = stepName
    },

    setContactPhone(context, phoneNr) {
      //console.log('NAV_LIST', payload)
      context.commit("CONTACT_PHONE", phoneNr);
      localStorage.contactPhone = phoneNr
    },
    setContactEmail(context, email) {
      //console.log('NAV_LIST', payload)
      context.commit("CONTACT_EMAIL", email);
      localStorage.contactEmail = email
    },

  },  // END ACTIONS
  
  getters: {

    step_startValid: state => {
      const isValid = state.nrPeople && state.flightDate !== '' && state.selectedFlight !== ''
      //console.log('step_startValid? :', isValid)
      return isValid
    },

    step_timeValid: (state, getters) => {
      const isValid = state.timeSlot > -1 && state.timeSlotLabel !== '' && getters.step_startValid
      //console.log('step_timeValid? :', isValid)
      return isValid
    },

    step_infoValid: (state, getters) => {
      const isValid = state.contactPhone !== '' && state.contactEmail !== '' && getters.step_startValid && getters.step_timeValid
      //console.log('step_infoValid? :', isValid)
      return isValid
    }


  }  // END GETTERS
  

});
