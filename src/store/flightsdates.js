var faker = require("faker")
var dateUtils = require('date-fns')

function generateFlightsDates() {

  //console.log('targetDate: ', targetDate)
  const nrDaysToGen = 30;
  //let oneDaySeconds = 86400;

  // Date stamp incorrect. Need to return +2 days from now(), but with 
  // 00:00:00 (midnight), not when this function was generated!
  

  let dateObj = dateUtils.add(Date.now(), { days: 2 }); // today +2 days.
  // let currDayKey = dateUtils.getUnixTime(new Date(startDate));


  // const dateBits = this.userSelectedDate.split('-')
  // console.log(dateBits)
  // if (dateBits.length !== 3) console.error('User Date invalid format. TimeListGroup method -> loadVisibleDays()', this.userSelectedDate)
  // const yearBit = dateBits[0]
  // const monthBit = dateBits[1] - 1
  // const dayBit = dateBits[2]

  let flightsdates = [];

  for (let id = 0; id < nrDaysToGen; id++) {

    dateObj = dateUtils.add(dateObj, { days: 1 })
    let currDayKey = dateUtils.format(dateObj, 'Y-MM-dd')

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
    //currDayKey += oneDaySeconds;
  }
  return flightsdates;
}

module.exports = generateFlightsDates()
