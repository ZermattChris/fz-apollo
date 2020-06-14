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
    _flightsList: {},
  },

  mutations: {
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
  },

  actions: {
    async init(state) {
      var result = await axios.get("http://localhost:3000/init");
      let data = result.data;
      console.log(data);
      // Note to future self:
      // the preceeding + converts from String to Number before mutatiing.
      state.commit("MAX_PILOTS", +data["max-pilots"]);
      state.commit("BOOK_DAYS_OFFSET", +data["book-days-from-today"]);
      state.commit("BOOK_MONTS_OFFSET", +data["book-future-months"]);
      state.commit("VIDEO_PRICE", +data["video-cost"]);
    },
  },
});
