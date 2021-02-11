const init = require("./init.js")
const flightoptions = require("./flightsOnDate.js");
const flightsdates = require("./flightsdates.js");

module.exports = () => ({
  init,
  flightoptions,
  flightsdates,
});
