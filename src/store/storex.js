import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // User inputs.
    nrPeople: 0,
    flightDate: "",
    selectedFlight: "",
    wantsPhotos: false,

    // Settings - API call result
    _maxPilots: -1,
    _bookDaysOffset: -1,
    _bookMonthsOffset: -1,
    _videoPrice: -1,
    _flightsList: null,

    timeListDates: null,
  },

  mutations: {
    // APIs
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

    // User inputs
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
    FLIGHTS_LIST: (state, obj) => {
      //console.log("Flight Options for ", obj);
      state._flightsList = obj;
    },
  },

  actions: {
    // API CALLS.
    async init(state) {
      var result = await axios.get("http://localhost:3000/init");
      let data = result.data;
      //console.log(data);
      // Note to future self:
      // the preceeding + converts from String to Number before mutatiing.
      state.commit("MAX_PILOTS", +data["max-pilots"]);
      state.commit("BOOK_DAYS_OFFSET", +data["book-days-from-today"]);
      state.commit("BOOK_MONTS_OFFSET", +data["book-future-months"]);
      state.commit("VIDEO_PRICE", +data["video-cost"]);
    },
    async flightOptions(state, dateStr) {
      var result = await axios.get(
        "https://fz-backend.simpleitsolutions.ch/onlinebooking/api/flightoptions/" + dateStr
      );
      let data = result.data;
      state.commit("FLIGHTS_LIST", data);
    },

    // USER INPUTS.
    setNrPeople(state, nr) {
      state.commit("CHOSEN_NR_PEOPLE", +nr);
    },
    setFlightDate(state, dateStr) {
      state.commit("CHOSEN_DATE", dateStr);
    },
    setFlight(state, flightNameStr) {
      state.commit("CHOSEN_FLIGHT", flightNameStr);
    },
    setWantsPhotos(state, picsBool) {
      state.commit("CHOSEN_PHOTOS", picsBool);
    },

    setFlightsList(state, flightsListObj) {
      state.commit("FLIGHTS_LIST", flightsListObj);
    },
  },
});
