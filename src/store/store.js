import Vue from "vue";

export const store = Vue.observable({
  // User Data
  nrPeople: 0,
  flightDate: '',
  selectedFlight: '',
  wantsPhotos: false,

  // Settings - API call result
  nrPeopleMax: 5,
  flightsList: {},    
  bookDaysOffset: 2,
  bookMonthsOffset: 12,
  videoPrice: 40.00,

  timeListDates: null
})

export const mutations = {
  // -------------- User Data ---------------
  setNrPeople(nrInt) {
    store.nrPeople = nrInt;
  },
  setFlightDate(dateStr) {
    store.flightDate = dateStr;
  },
  setFlight(flightStr) {
    store.selectedFlight = flightStr;
  },
  setWantsPhotos(photosBool) {
    store.wantsPhotos = photosBool;
  },
  // -------------- Settings ---------------
  setMaxNrPeople(maxInt) {
    store.nrPeopleMax = maxInt;
    //console.log('Store MaxPilots is: ' + store.nrPeopleMax)
  },
  setFlightsList(flightsObj) {
    store.flightsList = flightsObj;
  },
  setBookDaysOffset(daysInt) {
    store.bookDaysOffset = daysInt;
  },
  setBookMonthsOffset(monthsInt) {
    store.bookMonthsOffset = monthsInt;
  },
  setVideoPrice(price) {
    store.videoPrice = price;
  }, 
  setTimeListDates(obj) {
    store.timeListDates = obj;
    console.log(store.timeListDates)
  },
}

