import Vue from "vue";

export const store = Vue.observable({
  nrPeople: 0,
  flightDate: '',
  selectedFlight: '',
  wantsPhotos: false
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
  }
};