# apollo
[![Netlify Status](https://api.netlify.com/api/v1/badges/53661768-2891-4a91-aca6-905373c53da4/deploy-status)](https://app.netlify.com/sites/fz-apollo/deploys)

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

## Check build file sizes
npm run build -- --report
## API endpoints
Init()
http://localhost:3000/init
http://fz-backend.simpleitsolutions.ch/onlinebooking/api/init

Flights available for a given date:
https://fz-backend.simpleitsolutions.ch/onlinebooking/api/flightoptions/2020-06-08

FlightsDates
List of dates and timeslots:availability for a given date range.
http://localhost:3000/flightsdates




### Hosting on Netlify.com
secure.flyzermatt.com


### CSP Joy!
Use the Mozilla Laboratory Firefox plugin to help generate. Video on how to use it:
[YouTube](https://youtu.be/Oan4J9kfy44)

default-src 'self'; connect-src https://*.simpleitsolutions.ch https://sessions.bugsnag.com; font-src 'self' data: https://cdn.jsdelivr.net https://fonts.gstatic.com; frame-src https://js.stripe.com; img-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://js.stripe.com/v3; style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/ https://fonts.googleapis.com/