# apollo

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## JSON local server 
Run this in a separate console window to let us test/mock JSON API calls.
~/Projects/apollo/src/store$ json-server --watch db.js


## API endpoints
Init()
http://localhost:3000/init
http://fz-backend.simpleitsolutions.ch/onlinebooking/api/init

Flights available for a given date:
https://fz-backend.simpleitsolutions.ch/onlinebooking/api/flightoptions/2020-06-08

FlightsDates
List of dates and timeslots:availability for a given date range.
http://localhost:3000/flightsdates