
// JSON Payload send with each 'fetch' to your API

const data = { 

  // Returned OrderId from API - you can use to check that this order attempt isn't a dupe. If not previously set, is null.
  'orderID':           null | 'int',

  // TODO Change this for produciton! I think this is passed to Stripe to tell it that this is just a test order - I need to check that.
  'isTest':            true,

  'contactEmail':      'customer@test.com',

  'contactPhone':      '+41786092034',

  'flightDate':        '2021-06-23',

  // TODO - I still need to add the User Interface for this on the first step, but this is the data format that I'll send.
  //        If the customer is only here for the above 'flightDate', then this will be null.
  'dateRange':         null | {'start': '1970-01-01', 'end': '1970-01-01'},

  // Id from your system. Should i also pass along the string name of the flight to make sure it doesn't get 
  // mucked up (for example if someone changes the flight in the Admin)?
  'selectedFlight':     '2',
  // 'selectedFlightName': 'Elite 380.00.- CHF',

  'wantsPhotos':        true,

  // The passenger with the id == 0 is the 'Contact Passenger'. Should be listed together with phone and email.
  'passengerObjList':   [{'id':0,'valid':true,'sex':'male','age':'57','name':'Chris Banford','speed':10,'weightKg':100},{'id':1,'valid':true,'sex':'female','age':'31','name':'Mirji','speed':6,'weightKg':60},{'id':2,'valid':true,'sex':'male','age':'53','name':'Ronnie','speed':10,'weightKg':60}],
  
  // Passengers are not assigned a specific slot/time. Just add them in the order they appear above.
  'slotPassengersObj':  {'selectedDate':'2021-06-23','slotsList':[{'timeString':'09:00','passengers':2},{'timeString':'11:00','passengers':1}]},

  'orderMessage':       'Test message for booking, i.e. I want to fly Scenic from Riffelberg and meet on the mountain.'

}



fetch('https://bookings-dev.simpleitsolutions.ch/api/createcheckout', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
      data
    }),
})
  .then(function (response) {
    return response.json();
  })
  .then(function (session) {
    // Save Tommy's OrderId
    if (session.orderId > 0) {
      me.$store.dispatch('setOrderId', session.orderId)
    }
    // Send user to the Stripe Checkout page.
    return me.stripe.redirectToCheckout({ sessionId: session.stripeSessionId });
  })
  .then(function (result) {
    // If redirectToCheckout fails due to a browser or network
    // error, you should display the localized error message to your
    // customer using error.message.
    if (result.error) {
      alert(result.error.message);
    }
  })
  .catch(function (error) {
    console.log('Getting an error back in the catch')
    console.error('Error:', error);
  })
