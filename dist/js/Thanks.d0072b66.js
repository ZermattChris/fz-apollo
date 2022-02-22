(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Thanks"],{"3ae2":function(t,e,s){},"87b0":function(t,e,s){"use strict";s("3ae2")},bf8a:function(t,e,s){"use strict";s.d(e,"a",(function(){return m}));var n="https://js.stripe.com/v3",a=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,r="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",i=function(){for(var t=document.querySelectorAll('script[src^="'.concat(n,'"]')),e=0;e<t.length;e++){var s=t[e];if(a.test(s.src))return s}return null},o=function(t){var e=t&&!t.advancedFraudSignals?"?advancedFraudSignals=false":"",s=document.createElement("script");s.src="".concat(n).concat(e);var a=document.head||document.body;if(!a)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return a.appendChild(s),s},c=function(t,e){t&&t._registerWrapper&&t._registerWrapper({name:"stripe-js",version:"1.16.0",startTime:e})},l=null,d=function(t){return null!==l||(l=new Promise((function(e,s){if("undefined"!==typeof window)if(window.Stripe&&t&&console.warn(r),window.Stripe)e(window.Stripe);else try{var n=i();n&&t?console.warn(r):n||(n=o(t)),n.addEventListener("load",(function(){window.Stripe?e(window.Stripe):s(new Error("Stripe.js not available"))})),n.addEventListener("error",(function(){s(new Error("Failed to load Stripe.js"))}))}catch(a){return void s(a)}else e(null)}))),l},p=function(t,e,s){if(null===t)return null;var n=t.apply(void 0,e);return c(n,s),n},u=Promise.resolve().then((function(){return d(null)})),h=!1;u["catch"]((function(t){h||console.warn(t)}));var m=function(){for(var t=arguments.length,e=new Array(t),s=0;s<t;s++)e[s]=arguments[s];h=!0;var n=Date.now();return u.then((function(t){return p(t,e,n)}))}},ffb6:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"stepThanks"},[t.stripeSuccess?s("div",[s("PageHeader",{attrs:{title:t.$t("step-thanks.title")}},[t._v(" "+t._s(t.$t("step-thanks.description"))+" ")]),s("div",{staticStyle:{"max-width":"600px",margin:"0 auto"}},[s("p",[t._v(" "+t._s(t.$t("step-thanks.transactionNr"))+" "),s("strong",{staticClass:"primary--text"},[t._v(t._s(t.$store.state.orderID))])]),s("p",[t._v(" "+t._s(t.$t("step-thanks.orderSentTo"))+" "),s("strong",{staticClass:"primary--text"},[t._v(t._s(t.orderEmail))])]),s("p",{staticClass:"rounded-lg white--text mt-6 mb-6 mx-4 px-2 py-1",staticStyle:{"background-color":"#c78b48"}},[s("v-icon",{attrs:{color:"white"}},[t._v(" mdi-at ")]),t._v(" "+t._s(t.$t("step-thanks.checkSpamStart"))+" "),s("strong",{staticClass:"black--text"},[t._v(t._s(t.$t("step-thanks.checkSpamJunk")))]),t._v(" "+t._s(t.$t("step-thanks.checkSpamEnd"))+" ")],1),s("p",{staticClass:"mt-12 primary--text"},[t._v(" "+t._s(t.$t("step-thanks.resendEmailIfNeeded"))+" ")]),s("div",{staticClass:"text-center mr-auto ml-auto",staticStyle:{"max-width":"400px"}},[s("v-text-field",{staticClass:"float-left pr-6",staticStyle:{width:"75%"},attrs:{label:t.$t("step-thanks.resendTo"),hint:t.resendEmailHint,"persistent-hint":""},model:{value:t.resendEmail,callback:function(e){t.resendEmail=e},expression:"resendEmail"}}),s("v-btn",{staticClass:"float-left mt-2",attrs:{elevation:"2"},on:{click:t.onResendEmailBtn}},[t._v(" "+t._s(t.$t("step-thanks.sendEmail"))+" ")])],1),s("div",{staticClass:"pt-12 float-end"},[t._v(" "+t._s(t.$t("step-thanks.ifAnyProblems"))+" "),s("a",{attrs:{href:"mailto:info@flyzermatt.com"}},[t._v("info@flyzermatt.com")]),t._v(" "+t._s(t.$t("step-thanks.orCallUs"))+" "),s("a",{attrs:{href:"tel:+41796436808"}},[t._v("+41 79 643 6808")])]),s("div",{staticClass:"pt-12 float-end",staticStyle:{width:"100%","text-align":"center"}},[s("v-btn",{staticClass:"white--text",attrs:{rounded:"","x-large":"",color:"fzPink",elevation:"4"},on:{click:t.closeBookingSystem}},[t._v(" "+t._s(t.$t("nav.done"))+" ")])],1)])],1):s("div",[t._v(" "+t._s(t.stripeMessage)+" ")])])},a=[],r=s("1da1"),i=(s("96cf"),s("d3b7"),s("3ca3"),s("ddb0"),s("2b3d"),s("ac1f"),s("841c"),s("36ad")),o=s("bc3a"),c=s.n(o),l=s("bf8a"),d={name:"Step_Thanks",components:{PageHeader:i["a"]},data:function(){return{stripeMessage:"",stripeSuccess:!1,resendEmail:""}},beforeMount:function(){var t=this;this.$store.dispatch("setCurrentStep","Thanks"),window.addEventListener("beforeunload",(function(){t.closeBookingSystem()}))},mounted:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var s,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(l["a"])("pk_test_51ION3qE6VjXXKzJ2c9Lxf0eoYCe6BuizG3Q7OrsNIEOWA4NMlpP3ycbEW7KwaFpJYlA4MFOeosbDuyJuIWMS5xn200GcQxogOw");case 2:s=e.sent,n=new URLSearchParams(window.location.search).get("setup_intent_client_secret"),s.retrieveSetupIntent(n).then((function(e){var s=e.setupIntent;switch(s.status){case"succeeded":t.stripeSuccess=!0,t.stripeMessage="Success! Your payment method has been saved.";break;case"processing":t.stripeSuccess=!0,t.stripeMessaget="Processing payment details. We'll update you when processing is complete.";break;case"requires_payment_method":t.stripeSuccess=!1,t.stripeMessage="Failed to process payment details. Please try another payment method.",t.$store.dispatch("setStripeErrorMsg",t.stripeMessage);var n=document.location.host,a=document.location.protocol,r=a+"://"+n+"/Pay";window.location.href=r;break}}));case 5:case"end":return e.stop()}}),e)})))()},computed:{orderEmail:function(){return this.$store.state.contactEmail},resendEmailHint:function(){return this.$t("step-thanks.resendToStr")}},methods:{closeBookingSystem:function(){this.resetLocalStorage(),window.location.href="https://www.flyzermatt.com/"},onResendEmailBtn:function(){var t=this,e=this.$store.state.orderID;c.a.get("https://bookings.simpleitsolutions.ch/api/resendCustomerConfirmation/"+e+"/"+this.resendEmail).then((function(e){"success"==e.data&&(t.resendEmailHint=t.$t("step-thanks.successfullySentTO")+t.resendEmail,t.resendEmail="")})).catch((function(e){console.log(e),t.resendEmailHint=t.$t("step-thanks.failedToSentTO")+t.resendEmail}))},resetLocalStorage:function(){console.log("Thanks page is calling resetLocalStorage()!"),this.$store.dispatch("setOrderId",""),this.$store.dispatch("setCurrentStep","Start"),this.$store.dispatch("setFlightsList",""),this.$store.dispatch("clearNavList",""),this.$store.dispatch("clearTimeListDates"),this.$store.dispatch("setWantsPhotos",""),this.$store.dispatch("setVideoPrice",""),this.$store.dispatch("setArriveDate",""),this.$store.dispatch("setDepartDate",""),this.$store.dispatch("setFlightDate",""),this.$store.dispatch("setFlight",""),this.$store.dispatch("setOrderMessage",""),this.$store.dispatch("clearSlotsPassengers",""),this.$store.dispatch("setFlightsList","")}}},p=d,u=(s("87b0"),s("2877")),h=s("6544"),m=s.n(h),f=s("8336"),v=s("132d"),w=s("8654"),g=Object(u["a"])(p,n,a,!1,null,"03ddf94e",null);e["default"]=g.exports;m()(g,{VBtn:f["a"],VIcon:v["a"],VTextField:w["a"]})}}]);
//# sourceMappingURL=Thanks.d0072b66.js.map