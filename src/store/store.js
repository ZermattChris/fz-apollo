import Vue from "vue";

// import timeListerDates_TEMPJSONFILE from "@/store/timeListerDatesx.json";

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

// ************ API Calls ************
export const API = {

  apiHeaders: { "Content-Type": "application/json" },

}

// export const API = {

//   apiHeaders: { "Content-Type": "application/json" },

//   settingsPath:    "https://fz-backend.simpleitsolutions.ch/onlinebooking/api/init",
//   flightsListPath: "https://fz-backend.simpleitsolutions.ch/onlinebooking/api/flightoptions",
//   datesTimesPath:   "https://fz-backend.simpleitsolutions.ch/onlinebooking/api/datelist/2020-06-18?offset=4",
  
//   load: {
//     settings: function () {
//       console.log('load settings called')
//       console.log(API.settingsPath)
//       // console.log(store.nrPeople)
//     },
//     flightsList: function () {
//       console.log('load flights called')
//       console.log(API.flightsListPath)
//     },
//     // timeListerDates: function (offset=4) {
//     //   console.log('load flights called')
//     //   console.log('User Date: ' + store.flightDate)
//     //   console.log('Dates offset: ' + offset)
//     //   // Grab data from Tommy's server API, if not found, then use a local stub.
//     //   mutations.setTimeListDates(timeListerDates_TEMPJSONFILE)
//     // },

//     timeListerDates: (offset = 4) => ({
//       return new Promise(function (resolve, reject) {
//         console.log('Dates offset: ' + offset, reject)  // stops linter errors
//         import('@/store/timeListerDatesx.json')
//         resolve (
//           mutations.setTimeListDates(timeListerDates_TEMPJSONFILE),
//         )
//       })
//     }),

//     // timeListerDates: function (offset = 4) {
//     //   console.log('Dates offset: ', offset)
//       // // Production code, when Tommy's API works.
//       // fetch(API.datesTimesPath, API.apiHeaders)
//       //   .then(async response => {
//       //     const data = await response.json()
//       //     // check for error response
//       //     if (!response.ok) {
//       //       // get error message from body or default to response statusText
//       //       const error = (data && data.message) || response.statusText
//       //       return Promise.reject(error)
//       //     }
//       //     mutations.setFlightsList(data)
//       //   })
//       //   .catch(error => {
//       //     console.error("Error: store.timeListerDates() ", error)
//       //   })
//     // }
//   },  // END load.
// }

