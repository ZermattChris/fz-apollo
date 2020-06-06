import Vue from "vue";

export const store = Vue.observable({
  nrPeople: 0,
  flightDate: '',
  selectedFlight: '',
  wantsPhotos: false,

  // Settings
  nrPeopleMax: 5,   // default.
});

export const mutations = {
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
  // Settings
  setMaxNrPeople(maxInt) {
    store.nrPeopleMax = maxInt;
    console.log('Store MaxPilots is: ' + store.nrPeopleMax)
  },
};