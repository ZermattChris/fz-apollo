(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Thanks"],{"55d8":function(t,s,e){"use strict";e("c7ee")},c7ee:function(t,s,e){},ffb6:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"stepThanks"},[e("PageHeader",{attrs:{title:t.$t("step-thanks.title")}},[t._v(" "+t._s(t.$t("step-thanks.description"))+" ")]),e("div",{staticStyle:{"max-width":"600px",margin:"0 auto"}},[e("p",[t._v(" "+t._s(t.$t("step-thanks.transactionNr"))+" "),e("strong",{staticClass:"primary--text"},[t._v(t._s(t.$store.state.orderID))])]),e("p",[t._v(" "+t._s(t.$t("step-thanks.orderSentTo"))+" "),e("strong",{staticClass:"primary--text"},[t._v(t._s(t.orderEmail))])]),e("p",{staticClass:"rounded-lg white--text mt-6 mb-6 mx-4 px-2 py-1",staticStyle:{"background-color":"#c78b48"}},[e("v-icon",{attrs:{color:"white"}},[t._v(" mdi-at ")]),t._v(" "+t._s(t.$t("step-thanks.checkSpamStart"))+" "),e("strong",{staticClass:"black--text"},[t._v(t._s(t.$t("step-thanks.checkSpamJunk")))]),t._v(" "+t._s(t.$t("step-thanks.checkSpamEnd"))+" ")],1),e("p",{staticClass:"mt-12 primary--text"},[t._v(" "+t._s(t.$t("step-thanks.resendEmailIfNeeded"))+" ")]),e("div",{staticClass:"text-center mr-auto ml-auto",staticStyle:{"max-width":"400px"}},[e("v-text-field",{staticClass:"float-left pr-6",staticStyle:{width:"75%"},attrs:{label:t.$t("step-thanks.resendTo"),hint:t.resendEmailHint,"persistent-hint":""},model:{value:t.resendEmail,callback:function(s){t.resendEmail=s},expression:"resendEmail"}}),e("v-btn",{staticClass:"float-left mt-2",attrs:{elevation:"2"},on:{click:t.onResendEmailBtn}},[t._v(" "+t._s(t.$t("step-thanks.sendEmail"))+" ")])],1),t.stripeSuccess?e("div",[e("div",{staticClass:"pt-12 float-end"},[t._v(" "+t._s(t.$t("step-thanks.ifAnyProblems"))+" "),e("a",{attrs:{href:"mailto:info@flyzermatt.com"}},[t._v("info@flyzermatt.com")]),t._v(" "+t._s(t.$t("step-thanks.orCallUs"))+" "),e("a",{attrs:{href:"tel:+41796436808"}},[t._v("+41 79 643 6808")])]),e("div",{staticClass:"pt-12 float-end",staticStyle:{width:"100%","text-align":"center"}},[e("v-btn",{staticClass:"white--text",attrs:{rounded:"","x-large":"",color:"fzPink",elevation:"4"},on:{click:t.closeBookingSystem}},[t._v(" "+t._s(t.$t("nav.done"))+" ")])],1)]):t._e()])],1)},i=[],n=e("36ad"),r=e("bc3a"),o=e.n(r),c={name:"Step_Thanks",components:{PageHeader:n["a"]},data:function(){return{resendEmail:""}},beforeMount:function(){var t=this;this.$store.dispatch("setCurrentStep","Thanks"),window.addEventListener("beforeunload",(function(){t.closeBookingSystem()}))},beforeCreate:function(){},computed:{orderEmail:function(){return this.$store.state.contactEmail},resendEmailHint:function(){return this.$t("step-thanks.resendToStr")}},methods:{closeBookingSystem:function(){this.resetLocalStorage(),window.location.href="https://www.flyzermatt.com/"},onResendEmailBtn:function(){var t=this,s=this.$store.state.orderID;o.a.get("https://bookings.simpleitsolutions.ch/api/resendCustomerConfirmation/"+s+"/"+this.resendEmail).then((function(s){"success"==s.data&&(t.resendEmailHint=t.$t("step-thanks.successfullySentTO")+t.resendEmail,t.resendEmail="")})).catch((function(s){console.log(s),t.resendEmailHint=t.$t("step-thanks.failedToSentTO")+t.resendEmail}))},resetLocalStorage:function(){console.log("Thanks page is calling resetLocalStorage()!"),this.$store.dispatch("setOrderId",""),this.$store.dispatch("setCurrentStep","Start"),this.$store.dispatch("setFlightsList",""),this.$store.dispatch("clearNavList",""),this.$store.dispatch("clearTimeListDates"),this.$store.dispatch("setWantsPhotos",""),this.$store.dispatch("setVideoPrice",""),this.$store.dispatch("setArriveDate",""),this.$store.dispatch("setDepartDate",""),this.$store.dispatch("setFlightDate",""),this.$store.dispatch("setFlight",""),this.$store.dispatch("setOrderMessage",""),this.$store.dispatch("clearSlotsPassengers",""),this.$store.dispatch("setFlightsList","")}}},l=c,d=(e("55d8"),e("2877")),h=e("6544"),p=e.n(h),m=e("8336"),f=e("132d"),u=e("8654"),v=Object(d["a"])(l,a,i,!1,null,"118bf66b",null);s["default"]=v.exports;p()(v,{VBtn:m["a"],VIcon:f["a"],VTextField:u["a"]})}}]);
//# sourceMappingURL=Thanks.e2538258.js.map