(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Thanks"],{"1f73":function(t,e,s){"use strict";s("ec7e")},ec7e:function(t,e,s){},ffb6:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"stepThanks"},[s("PageHeader",{attrs:{title:"Thank you!"}},[t._v(" Your payment succeeded & your order is complete. ")]),s("p",[t._v(" Transaction Nr: "),s("strong",{staticClass:"primary--text"},[t._v(t._s(t.$store.state.orderID))])]),s("p",[t._v(" Your order confirmation has been sent to "),s("strong",{staticClass:"primary--text"},[t._v(t._s(t.orderEmail))])]),s("p",{staticClass:"rounded-lg white--text text-caption mt-6 mb-6 mx-4 px-2 py-1",staticStyle:{"background-color":"#c78b48"}},[s("v-icon",{attrs:{color:"white"}},[t._v(" mdi-at ")]),t._v(" Please make sure to check your email "),s("strong",[t._v("Spam/Junk")]),t._v(" folders if your order confirmation doesn't arrive (emails can take a bit to arrive sometimes) ")],1),t._m(0),s("p",{staticClass:"text-center mt-12 mr-auto ml-auto",staticStyle:{"max-width":"300px"}},[s("v-text-field",{attrs:{label:"Resend confirmation email to:"},model:{value:t.orderEmail,callback:function(e){t.orderEmail=e},expression:"orderEmail"}})],1),s("p",{staticClass:"text-center"},[s("v-btn",{attrs:{elevation:"2"},on:{click:t.onResendEmailBtn}},[t._v(" SEND ")])],1)],1)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"text-caption"},[t._v(" If you have any problems with your order, please contact us at: "),s("a",{attrs:{href:"mailto:info@flyzermatt.com"}},[t._v("info@flyzermatt.com")]),t._v(" or give us a call at: "),s("a",{attrs:{href:"tel:+41796436808"}},[t._v("+41 79 643 6808")])])}],o=s("36ad"),i={name:"Step_Thanks",components:{PageHeader:o["a"]},data:function(){return{}},destroyed:function(){this.resetLocalStorage()},computed:{orderEmail:function(){return this.$store.state.contactEmail}},methods:{onResendEmailBtn:function(){alert("TODO: Call Tommy API that resends this order's email, using the email entered here (allows for correction of mistaken email entry earlier).")},resetLocalStorage:function(){console.log("Thanks page is calling resetLocalStorage()!"),this.$store.dispatch("setOrderId",""),this.$store.dispatch("setCurrentStep","Start"),this.$store.dispatch("setFlightsList",""),this.$store.dispatch("clearNavList",""),this.$store.dispatch("clearTimeListDates"),this.$store.dispatch("setWantsPhotos",""),this.$store.dispatch("setArriveDate",""),this.$store.dispatch("setDepartDate",""),this.$store.dispatch("setFlightDate",""),this.$store.dispatch("setFlight",""),this.$store.dispatch("setOrderMessage",""),this.$store.dispatch("clearSlotsPassengers","")}}},n=i,c=(s("1f73"),s("2877")),l=s("6544"),d=s.n(l),h=s("8336"),m=s("132d"),p=s("8654"),u=Object(c["a"])(n,a,r,!1,null,"2078bf8c",null);e["default"]=u.exports;d()(u,{VBtn:h["a"],VIcon:m["a"],VTextField:p["a"]})}}]);
//# sourceMappingURL=Thanks.afc74650.js.map