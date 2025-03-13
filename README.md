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
http://bookings.flyzermatt.com/onlinebooking/api/init

Flights available for a given date:
https://bookings.flyzermatt.com/onlinebooking/api/flightoptions/2020-06-08

FlightsDates
List of dates and timeslots:availability for a given date range.
http://localhost:3000/flightsdates




### Hosting on Netlify.com
#### Live
secure.flyzermatt.com

#### Staging
flyzermatt-staging.netlify.app


### CSP Joy!
Use the Mozilla Laboratory Firefox plugin to help generate. Video on how to use it:
[YouTube](https://youtu.be/Oan4J9kfy44)

[Mozilla Observatory test](https://observatory.mozilla.org/)


## SMS Gateway. eCall.ch
curl -H "Content-type: application/x-www-form-urlencoded"
     -d "Username=foo"
     -d "Password=bar"
     -d "Address=0041XXXXXXX"
     -d "Message=Hello eCall World"
     https://url.ecall.ch/api/SMS