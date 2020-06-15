import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    _DEV: true,

    // User inputs.
    nrPeople: 0,
    flightDate: "",
    selectedFlight: "",
    wantsPhotos: false,

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

  },

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

    // Local Storage Cached
    FLIGHTS_LIST(state, obj) {
      //console.log("Flight Options for ", obj);
      state._flightsList = obj;
    },
  },

  actions: {
    // API CALLS.
    // ******************** API: TimeList Dates ********************
    async timeListDates(context) {
      context.commit("TIMELIST_LOADING", true); // Loading UI ON

      // Figure out the starting date (keep in mind that we only need
      // to load from Today()+_bookDaysOffset)

      // Return if the date is not set/valid.
      //const flDate = context.state.flightDate;
      //console.log(flDate);

      var result = await axios.get("http://localhost:3000/flightsdates/");
      let data = result.data;
      context.commit("TIMELIST_DATES", data);
      context.commit("TIMELIST_LOADING", false);   // Loading UI OFF
    },

    // ******************** API: init App ********************
    async init(context) {
      // var result = await axios.get("http://localhost:3000/init");   // local JSON server for dev.
      var result = await axios.get("http://fz-backend.simpleitsolutions.ch/onlinebooking/api/init");  // Live API
      let data = result.data;
      // Note to future self:
      // the preceeding + converts from String to Number before mutatiing.
      context.commit("MAX_PILOTS", +data["max-pilots"]);
      context.commit("BOOK_DAYS_OFFSET", +data["book-days-from-today"]);
      context.commit("BOOK_MONTS_OFFSET", +data["book-future-months"]);
      context.commit("VIDEO_PRICE", +data["video-cost"]);
      context.commit("APP_LOADING", false);   // Loading UI OFF (starts off ON)

    },
    // ******************** API: Flight Options ********************
    async flightOptions(context) {
      context.commit("FLIGHTSLIST_LOADING", true);

      // Return if the date is not set/valid.
      const flDate = context.state.flightDate;
      console.log("Loading Flight Options for drop menu Step 1.", flDate);

      var result = await axios.get("https://fz-backend.simpleitsolutions.ch/onlinebooking/api/flightoptions/" + flDate);
      let data = result.data;
      context.commit("FLIGHTS_LIST", data);

      context.commit("FLIGHTSLIST_LOADING", false);   // Loading UI OFF
    },

    // USER INPUTS.
    setNrPeople(context, nr) {
      context.commit("CHOSEN_NR_PEOPLE", +nr);
    },
    setFlightDate(context, dateStr) {
      context.commit("CHOSEN_DATE", dateStr);
    },
    setFlight(context, flightNameStr) {
      context.commit("CHOSEN_FLIGHT", flightNameStr);
    },
    setWantsPhotos(context, picsBool) {
      context.commit("CHOSEN_PHOTOS", picsBool);
    },

    setFlightsList(context, flightsListObj) {
      context.commit("FLIGHTS_LIST", flightsListObj);
    },
  },
});
