import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

// Dev only - remove once API is up.
// import tmp from "./temp3.json"
//const tempData = require("./flightsdates.js");
var faker = require("faker")    //temp
var dateUtils = require('date-fns')     // temp


Vue.use(Vuex)

const rawNavList = {
  'Start': false,
  'Time': false,
  'Info': false,
  'Next': false,
  'Pay': false,
  'Thanks': false
}

const rawPassengerObj = {
  'id': null,
  'valid': false,
  'sex': null,
  'age': null,
  'name': '',
  'speed': 6,
  'weightKg': 25
}

const rawSlotPassengers = {
  'selectedDate': '',   // probably don't need this as redundant, but good for sanity at start.
  'slotsList': [],
}

export default new Vuex.Store({
  state: {

    // Set to false for Release code.
    _DEV: true,

    // User inputs.
    // Cached in browser's localStorage.
    totalPassengers: 0,     // This is to replace nrPeople below, as using multiple inputs over slots

    nrPeople:      +localStorage.nrPeople || 0,   // deprecated. Use: totalPassengers
    flightDate:     localStorage.flightDate || "",
    selectedFlight: localStorage.selectedFlight || "",
    wantsPhotos:    localStorage.wantsPhotos ? JSON.parse(localStorage.wantsPhotos) : false,  // convert to bool if not undefined.
    
    timeSlot:      +localStorage.selectedTimeslot || -1,
    //timeSlotLabel:  localStorage.selectedTimeslotLabel || "",
    timeSlotLabel:  localStorage.selectedTimeslotLabel || "",

    contactPhone:   localStorage.contactPhone || "",
    contactEmail:   localStorage.contactEmail || "",

    // Contains a list of (cloned) rawPassengerObj's -- one for each Passenger.
    passengerObjList: localStorage.passengerObjList ? JSON.parse(localStorage.passengerObjList) : [],

    // Holds a list of objects that relate to the chosen Time Slots on a given date.
    slotPassengersObj: localStorage.SlotPassengers ? JSON.parse(localStorage.SlotPassengers) : rawSlotPassengers,

    // Active Date is used by the TimeList / TimeSlot components
    // and is the date the user has clicked, but not made the FlightDate
    // yet, by adding passengers.
    _activeDate: "",

    // Settings - API call result
    // Using an Underscore to help make it clear that this isn't User Input.
    _maxPilots: -1,
    _bookDaysOffset: -1,
    _bookMonthsOffset: -1,
    _videoPrice: -1,
    _flightsList: null,

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

  },   // END STATE

  mutations: {

    HAS_REVIEWED_DATA(state, reviewedBool) {
      state._hasReviewedData = reviewedBool;
    },
    SHOW_REVIEW_DIALOG(state, showBool) {
      state._showReviewDialog = showBool;
    },

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
      // Save the timeListDates data to localstorage, to prevent page
      // reloads for borking Step 2.
      localStorage._timeListDates = JSON.stringify(state._timeListDates)
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

    ACTIVE_DATE(state, dateStr) {
      state._activeDate = dateStr
    },

    // User inputs, Local Storage Cached
    CHOSEN_NR_PEOPLE(state, nr) {
      state.nrPeople = nr
    },
    CHOSEN_DATE(state, dateStr) {
      state.flightDate = dateStr
    },
    CHOSEN_FLIGHT(state, flightStr) {
      state.selectedFlight = flightStr
    },
    CHOSEN_PHOTOS(state, photosBool) {
      state.wantsPhotos = photosBool
    },

    CHOSEN_TIMESLOT(state, slotInt, slotLabel) {
      state.timeSlot = slotInt;
      state.timeSlotLabel = slotLabel
    },

    CONTACT_PHONE(state, phoneNr) {
      state.contactPhone = phoneNr
    },
    CONTACT_EMAIL(state, email) {
      state.contactEmail = email
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
    // const rawSlotPassengers = {
    //   'selectedDate': '',   // probably don't need this as redundant, but good for sanity at start.
    //   'slotsList': [0:{"timeString":"08:30", "passengers":3}],
    // }
    // slotPassengersObj
    SLOT_SELECTED_DATE(state, dateStr) {
      if (state.slotPassengersObj.selectedDate !== state.flightDate) {
        state.slotPassengersObj.selectedDate = ''
        state.slotPassengersObj.slotsList = []
      }
      state.slotPassengersObj.selectedDate = dateStr
    },
    NUMBER_PASSENGERS(state, payload) {
      //console.log("Mutating NUMBER_PASSENGERS", payload);
      // If stored date and flightDate don't match, then clear slotPassengersObj
      // TODO: This isn't clearing the old selected inputs properly when changing date!
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
        if (slot !== undefined) {
          //console.log('time: ' + slot.timeString + '  passengers: ' + slot.passengers)
          count = count + slot.passengers
        }
      }
      //console.log("Total Passengers: ", count)

      // Need to add up all passengers and set this reactive property.
      state.totalPassengers = count

    },



  },  // END MUTATIONS

  actions: {
    // API CALLS.






    // ******************** API: TimeList Dates ********************
    async timeListDates(context) {
      context.commit("TIMELIST_LOADING", true); // Loading UI ON

      // Return if the date is not set/valid.
      const flDate = context.state.flightDate;
      //console.log(flDate)
      // if (flDate === '') {
      //   console.log('flDate is empty, not pulling flights/date data from timeListDates() API')
      //   return
      // }
      // Temporarily disable the call to backend until Tommy builds it properly.
      return axios.get("https://XXXXXXXXX-bookings-dev.simpleitsolutions.ch/onlinebooking/flightschedules/" + flDate)
        .then(response => {
          let data = response.data;
          context.commit("TIMELIST_DATES", data)
        })
        .catch(error => {
          if (context.state._DEV) {
            console.log('Temp dev data being generated for FlightDates in store -> timeListDates(). ', error)
            context.commit("TIMELIST_DATES", generateFlightsDates(flDate))  // only loads temp.json data while in dev mode.
          }
        })
        .finally(() => 
          context.commit("TIMELIST_LOADING", false),
        )
    },








    // ******************** API: init App ********************
    async init(context) {
      // var result = await axios.get("http://localhost:3000/init");   // local JSON server for dev.
      // return axios.get("https://fz-backend.simpleitsolutions.ch/onlinebooking/api/init")
      return axios.get("https://bookings-dev.simpleitsolutions.ch/onlinebooking/init")
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
      context.commit("FLIGHTS_LIST", flightsListObj)
    },


    hasReviewedData(context, reviewedBool) {
      context.commit("HAS_REVIEWED_DATA", reviewedBool)
    },
    showReviewDialog(context, showBool) {
      context.commit("SHOW_REVIEW_DIALOG", showBool)
    },
    

    // --- USER INPUTS ---

    // setTotalPassengers(context, nr) {
    //   context.commit("PASSENGERS", +nr)
    //   localStorage.totalPassengers = nr
    // },

    setNrPeople(context, nr) {
      context.commit("CHOSEN_NR_PEOPLE", +nr)
      localStorage.nrPeople = nr
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

      //console.log("FlightDate Set in Store. " + dateStr)
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
    setTimeSlot(context, payload) {
      //console.log('slotInt', payload.slot, payload.label)
      context.commit("CHOSEN_TIMESLOT", payload.slot, payload.label)
      localStorage.selectedTimeslot = payload.slot
      localStorage.selectedTimeslotLabel = payload.label
    },

    // Nav Action.
    clearNavList(context) {
      //console.log('NAV_LIST', payload)
      context.commit("CLEAR_NAV_LIST")
      localStorage._navList = JSON.stringify(context.state._navList)
    },
    setNavListItem(context, payload) {
      //console.log('NAV_LIST', payload)
      context.commit("NAV_LIST", payload)
      localStorage._navList = JSON.stringify(context.state._navList)
    },
    setCurrentStep(context, stepName) {
      //console.log('NAV_LIST', payload)
      context.commit("CURRENT_STEP", stepName)
      localStorage._currentStep = stepName
    },

    setContactPhone(context, phoneNr) {
      //console.log('NAV_LIST', payload)
      context.commit("CONTACT_PHONE", phoneNr)
      localStorage.contactPhone = phoneNr
    },
    setContactEmail(context, email) {
      //console.log('NAV_LIST', payload)
      context.commit("CONTACT_EMAIL", email)
      localStorage.contactEmail = email
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


    // ---- TimeSlot Sets -----

    setSlotPassengers(context, payload) {
      //console.log('slotIndex: ' + payload.index + ' TimeStr: ' + payload.timeString + ' Passengers: ' + payload.passengers)
      context.commit("NUMBER_PASSENGERS", payload);
      localStorage.slotPassengersObj = JSON.stringify(context.state.slotPassengersObj)
      //savePassengerObjListToLocalStorage(context)
    },




  },  // END ACTIONS
  
  getters: {

    // const rawSlotPassengers = {
    //   'selectedDate': '',   // probably don't need this as redundant, but good for sanity at start.
    //   'slotsList': [],
    // }
    getStoredPassengersInSlot: (state) => (slotDate, slotIndex) => {

      if (slotDate != state.flightDate) {
        //console.log('Not todays Slot', slotDate, state.flightDate)
        return 0
      }

      let slotsList = state.slotPassengersObj.slotsList[slotIndex]
      if (slotsList === undefined) {
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
    getNumberPassengers: (state) => {
      // TODO
      return state.passengers
    },


    getAllPassengersValid: (state) => {
      // Search for a matching entry in 'passengerObjList' for customer 'custNr'
      // if found, return the existing age from LocalStorage, otherwise
      // Add a new Passenger object to 'passengerObjList'
      // -> Using helper functions below to keep this clean.
      // let matchedPassengerObj = findPassengerObj(state, custNr)
      // return matchedPassengerObj.valid
      let isValid = true
      for (let i = 0; i < state.passengerObjList.length; i++) {
        if (state.passengerObjList[i].valid !== true) {
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


// *****************************************************************
// TEMP: this is a temp helper function to build fake dates based upon 
// the user's chosen date, until Tommy has his backend API working.
// *****************************************************************
function generateFlightsDates (usersFlightDate) {

  //console.log('targetDate: ', targetDate)
  const nrDaysToGen = 14
  
  let prevDaysToShow = 7
  // users date minus today. if less than prevDaysToShow, then update.
  let testDateInt = dateUtils.differenceInDays(new Date(usersFlightDate), new Date() )
  //console.log('testDateInt: ', testDateInt)
  if (testDateInt < prevDaysToShow) {
    prevDaysToShow = testDateInt
  }
  // const nrDaysBeforeUserDateToDisplay = 7
  
  let dateObj = dateUtils.sub(new Date(usersFlightDate), { days: prevDaysToShow })
  //let dateObj = new Date(usersFlightDate)
  //let dateObj = dateUtils.add(usersDate, { days: 2 }); // today +2 days.
  // let currDayKey = dateUtils.getUnixTime(new Date(startDate));

  let flightsdates = {}

  for (let id = 0; id < nrDaysToGen; id++) {

    // console.log('Raw date string: ', dateObj)

    let currDayKey = dateUtils.format(dateObj, 'yyyy-MM-dd')    // this is fucking up! Working now, changed year from 'Y' to 'yyyy'
    // console.log('Formatted date string: ', currDayKey)

    let timesList = [
      "08:30",
      "10:15",
      "11:45",
      "13:15",
      "14:45",
      "16:15",
      "17:00",
      "19:00"
    ];
    let timeslots = {};
    
    // Loop and build this day's timeslots.
    timesList.forEach(function(time) {
      let slotAvail = faker.random.number({ min: 0, max: 7 });
      timeslots[time] = slotAvail
    })
    
    flightsdates[currDayKey] = timeslots

    dateObj = dateUtils.add(dateObj, { days: 1 })

  }

  return flightsdates;
}