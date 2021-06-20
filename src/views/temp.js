

const data = { 
    "orderId": id,
    "isTest": true,                             // TODO Change this for produciton!
    "email": this.$store.state.contactEmail,
    "phone": this.$store.state.contactPhone,
    //"gender": this.$store.getters.getSexById(0), 
    //"name": this.$store.getters.getNameById(0),    // 0 -> Contact passenger's name.
    "totalPassengers": this.$store.getters.getTotalPassengers,
    "flightDate": this.$store.state.flightDate,
    "dateRange": {"start": "1970-01-01", "end": "1970-01-01"},
    "flightId": this.$store.state.selectedFlight,
    "photos": this.$store.state.wantsPhotos,
    "passengerJSON": [{"id":0,"valid":true,"sex":"male","age":"55","name":"CB","speed":8,"weightKg":100},{"id":1,"valid":false,"sex":null,"age":null,"name":"","speed":6,"weightKg":25}],
    "slotJSON": this.$store.state.slotPassengersObj,
    "orderMessage": "A message the customer can add on the 'Pay' page"
  }