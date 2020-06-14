var faker = require("faker")
var dateUtils = require('date-fns')

function generateFlightsDates() {

  const nrDaysToGen = 30;
  let oneDaySeconds = 86400;

  let startDate = dateUtils.add(Date.now(), { days: 2 }); // today +2 days.
  let currDayKey = dateUtils.getUnixTime(new Date(startDate));

  let flightsdates = [];

  for (let id = 0; id < nrDaysToGen; id++) {

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
    let timeslots = [];
    
    // Loop and build this day's timeslots.
    timesList.forEach(function(time) {
      let slotAvail = faker.random.number({ min: 0, max: 7 });
      timeslots.push({ 
        [time]: slotAvail 
      });
    });
    
    flightsdates.push({
      [currDayKey]: timeslots
    });

    // Increment our Epoch based date Key +1 Day's worth of seconds.
    currDayKey += oneDaySeconds;
  }
  return flightsdates;
}

module.exports = generateFlightsDates()
