(function(t){function e(e){for(var o,s,r=e[0],l=e[1],c=e[2],u=0,f=[];u<r.length;u++)s=r[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&f.push(n[s][0]),n[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);h&&h(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],o=!0,s=1;s<a.length;s++){var l=a[s];0!==n[l]&&(o=!1)}o&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var o={},n={app:0},i=[];function s(t){return r.p+"js/"+({TimeSlot:"TimeSlot"}[t]||t)+"."+{TimeSlot:"63b04d15"}[t]+".js"}function r(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise((function(e,o){a=n[t]=[e,o]}));e.push(a[2]=o);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=s(t);var c=new Error;i=function(e){l.onerror=l.onload=null,clearTimeout(u);var a=n[t];if(0!==a){if(a){var o=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",c.name="ChunkLoadError",c.type=o,c.request=i,a[1](c)}n[t]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(e)},r.m=t,r.c=o,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(a,o,function(e){return t[e]}.bind(null,o));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var h=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var o=a("8a23"),n=a.n(o);n.a},"2f7a":function(t,e,a){"use strict";var o=a("4ce8"),n=a.n(o);n.a},"4ce8":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("2b0e"),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("v-overlay",{attrs:{opacity:"0.2",value:t.overlay}}),t.overlay?o("v-progress-circular",{staticStyle:{position:"absolute","z-index":"500",top:"30%",left:"50%","margin-top":"-32px","margin-left":"-32px"},attrs:{indeterminate:"",color:"primary",size:"64"}}):t._e(),o("v-app-bar",{attrs:{app:"",color:"primary",dark:"","hide-on-scroll":""}},[o("v-btn",{staticClass:"text-capitalize",class:t.canGoBack?"":"d-none",staticStyle:{position:"absolute",left:"-5px"},attrs:{text:""},on:{click:t.onBackBtnClick}},[o("v-icon",{attrs:{left:""}},[t._v(t._s(t.iconPrevChevron))]),t._v(" Back ")],1),o("div",{staticClass:"d-flex align-center",attrs:{id:"logo"}},[o("v-img",{staticClass:"shrink mr-2",attrs:{alt:"FlyZermatt Logo",contain:"",src:a("e176"),transition:"scale-transition",width:"220"}})],1),o("v-btn",{staticClass:"text-capitalize",staticStyle:{position:"absolute",right:"5px"},attrs:{text:""},on:{click:t.onClearData}},[o("v-icon",{attrs:{left:""}},[t._v(t._s(t.iconPrevChevron))]),t._v(" Clear ")],1)],1),o("v-content",[o("v-row",{attrs:{"no-gutters":""}},[o("v-col",{attrs:{cols:"12",md:"1",lg:"2"}}),o("v-col",{staticClass:"pa-5 pa-sm-8 pa-md-12",attrs:{cols:"12",md:"10",lg:"8"}},[o("transition",{attrs:{name:"fade",mode:"out-in"}},[o("router-view",{on:{"form-is-valid":t.onEnableContinueBtn,"data-changed":t.saveLocalStorageValues,"flight-date-changed":t.loadFlightsList}})],1),o("div",{staticClass:"text-center mt-12 mb-6"},[o("v-btn",{attrs:{rounded:"",color:"primary",elevation:"4",disabled:!t.canContinue},on:{click:t.onContinueBtnClick}},[t._v(" Continue "),o("v-icon",{attrs:{right:""}},[t._v(t._s(t.iconNextArrow))])],1)],1)],1),o("v-col",{attrs:{cols:"12",md:"1",lg:"2"}})],1)],1),o("v-footer",{staticClass:"justify-end pr-2",attrs:{color:"primary",dark:"",app:"",padless:""}},[o("div",{staticClass:"white--text overline"},[t._v("© "+t._s(t.getCurrentYear)+" - FlyZermatt")])])],1)},i=[],s=(a("b0c0"),a("d3b7"),a("96cf"),a("1da1")),r=o["a"].observable({nrPeople:0,flightDate:"",selectedFlight:"",wantsPhotos:!1,nrPeopleMax:5,flightsList:{},bookDaysOffset:2,bookMonthsOffset:12,videoPrice:40}),l={setNrPeople:function(t){r.nrPeople=t},setFlightDate:function(t){r.flightDate=t},setFlight:function(t){r.selectedFlight=t},setWantsPhotos:function(t){r.wantsPhotos=t},setMaxNrPeople:function(t){r.nrPeopleMax=t},setFlightsList:function(t){r.flightsList=t},setBookDaysOffset:function(t){r.bookDaysOffset=t},setBookMonthsOffset:function(t){r.bookMonthsOffset=t},setVideoPrice:function(t){r.videoPrice=t}},c=a("b166"),u=a("94ed"),h={name:"App",components:{},beforeUpdate:function(){"Start"===this.$route.name?this.onEnableBackBtn(!1):this.onEnableBackBtn(!0)},created:function(){this.loadLocalStorageValues(),this.loadSettings()},data:function(){return{overlay:!1,overlayDelay:500,iconNextArrow:u["b"],iconPrevChevron:u["e"],canGoBack:!1,canContinue:!1,apiHeaders:{"Content-Type":"application/json"},apiInitSettingsPath:"https://fz-backend.simpleitsolutions.ch/onlinebooking/api/init",apiInitSettings:{},apiFlightsListPath:"https://fz-backend.simpleitsolutions.ch/onlinebooking/api/flightoptions/"}},methods:{loadSettings:function(){var t=this,e=!1;setTimeout((function(){!1===e&&(t.overlay=!0)}),this.overlayDelay),fetch(this.apiInitSettingsPath,this.apiHeaders).then(function(){var a=Object(s["a"])(regeneratorRuntime.mark((function a(o){var n,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,o.json();case 2:if(n=a.sent,o.ok){a.next=6;break}return i=n&&n.message||o.statusText,a.abrupt("return",Promise.reject(i));case 6:l.setMaxNrPeople(n["max-pilots"]),l.setBookDaysOffset(n["book-days-from-today"]),l.setBookMonthsOffset(n["book-future-months"]),l.setVideoPrice(n["video-cost"]),e=!0,t.overlay=!1;case 12:case"end":return a.stop()}}),a)})));return function(t){return a.apply(this,arguments)}}()).catch((function(a){e=!0,t.overlay=!1,t.errorMessage=a,console.error("Error loading Form Settings: ",a)}))},loadFlightsList:function(t){var e=this;console.log("Use Date for FlightsList API call: "+t);var a=this.apiFlightsListPath+t;console.log("FlightsList API path: "+a),fetch(a,this.apiHeaders).then(function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(a){var o,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a.json();case 2:if(o=t.sent,a.ok){t.next=6;break}return n=o&&o.message||a.statusText,t.abrupt("return",Promise.reject(n));case 6:l.setFlightsList(o),e.overlay=!1;case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.overlay=!1,e.errorMessage=t,console.error("Error loading Form Settings: ",t)}))},onEnableContinueBtn:function(t){this.canContinue=t},onContinueBtnClick:function(){this.$router.push({name:"Time",path:"time"}),this.onEnableContinueBtn(!1),this.onEnableBackBtn(!0)},onEnableBackBtn:function(t){this.canGoBack=t},onBackBtnClick:function(){this.$router.go(-1)},onClearData:function(){l.setNrPeople(0),l.setFlightDate(""),l.setFlight(""),l.setWantsPhotos(!1)},loadLocalStorageValues:function(){if(localStorage.nrPeople&&l.setNrPeople(localStorage.nrPeople),localStorage.flightDate&&l.setFlightDate(localStorage.flightDate),localStorage.selectedFlight&&l.setFlight(localStorage.selectedFlight),localStorage.wantsPhotos){var t=localStorage.wantsPhotos;t="true"===t,l.setWantsPhotos(t)}localStorage.flightsList&&l.setFlightsList(JSON.parse(localStorage.flightsList))},saveLocalStorageValues:function(){localStorage.nrPeople=r.nrPeople,localStorage.flightDate=r.flightDate,localStorage.selectedFlight=r.selectedFlight,localStorage.wantsPhotos=r.wantsPhotos,localStorage.flightsList=JSON.stringify(r.flightsList)}},computed:{getCurrentYear:function(){return Object(c["a"])(Date.now(),"yyyy")}}},f=h,d=(a("034f"),a("2877")),g=a("6544"),p=a.n(g),m=a("7496"),v=a("40dc"),b=a("8336"),y=a("62ad"),x=a("a75b"),P=a("553a"),k=a("132d"),C=a("adda"),V=a("a797"),D=a("490a"),w=a("0fd9"),M=Object(d["a"])(f,n,i,!1,null,null,null),S=M.exports;p()(M,{VApp:m["a"],VAppBar:v["a"],VBtn:b["a"],VCol:y["a"],VContent:x["a"],VFooter:P["a"],VIcon:k["a"],VImg:C["a"],VOverlay:V["a"],VProgressCircular:D["a"],VRow:w["a"]});var _=a("8c4f"),F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page",attrs:{id:"step-start"}},[a("h1",{staticClass:"ml-n2"},[t._v("1. Get Started...")]),a("p",[t._v(" Why we ask you for all of this information? To help us make sure you get the best possible experience... To make sure that we provide the highest levels of safety... ")]),a("v-divider"),a("div",{staticClass:"ml-n2 ml-sm-2 ml-md-8 ml-lg-12",attrs:{id:"steps-controls"}},[a("h3",[a("v-icon",{attrs:{color:t.isValidNrPeople?"success":"primary"}},[t._v(t._s(t.isValidNrPeople?t.stepIconCompleted:t.stepIcon))]),t._v(" Nr of People Flying ")],1),a("div",{staticClass:"controls"},[a("NumberScroller",{attrs:{min:"0",max:t.getMaxPilots,"min-message":"Min per Booking is 1","max-message":t.getMaxMessage},on:{"at-max-value":t.showBigGroupWarning},model:{value:t.nrPeople,callback:function(e){t.nrPeople=e},expression:"nrPeople"}})],1),a("h3",[a("v-icon",{attrs:{color:t.flightDate?"success":"primary"}},[t._v(t._s(t.flightDate?t.stepIconCompleted:t.stepIcon))]),t._v(" Flight Date ")],1),a("div",{staticClass:"controls"},[a("v-dialog",{ref:"dialog",attrs:{"return-value":t.flightDate,width:"290px"},on:{"update:returnValue":function(e){t.flightDate=e},"update:return-value":function(e){t.flightDate=e},change:t.onValueChanged},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[a("v-text-field",t._g({staticStyle:{width:"300px"},attrs:{"prepend-icon":"event",readonly:"",outlined:"",hint:t.isValidFlightDate?"":"Click to choose your Flight Date","persistent-hint":""},on:{keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.flightModal=!0}},model:{value:t.formatISODate,callback:function(e){t.formatISODate=e},expression:"formatISODate"}},o))]}}]),model:{value:t.flightModal,callback:function(e){t.flightModal=e},expression:"flightModal"}},[a("v-date-picker",{attrs:{scrollable:"","show-current":"",min:t.flightMinDate,max:t.flightMaxDate},model:{value:t.flightDate,callback:function(e){t.flightDate=e},expression:"flightDate"}},[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.flightModal=!1}}},[t._v("Cancel")]),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.dialog.save(t.flightDate)}}},[t._v("OK")])],1)],1)],1),a("h3",[a("v-icon",{attrs:{color:t.flightChosen?"success":"primary"}},[t._v(t._s(t.formattedFlightsList?t.stepIconCompleted:t.stepIcon))]),t._v(" Which Flight? ")],1),a("div",{staticClass:"controls"},[a("v-select",{staticStyle:{"max-width":"300px"},attrs:{items:t.formattedFlightsList,"item-text":"name","item-value":"id","prepend-icon":t.flightChosen?t.cloudIcon:t.cloudQuestionIcon,solo:"",outlined:"",disabled:!t.isValidFlightDate,hint:t.isValidFlightDate?"":"Please choose a Flight Date first...","persistent-hint":""},on:{change:t.onValueChanged},model:{value:t.flightChosen,callback:function(e){t.flightChosen=e},expression:"flightChosen"}})],1),a("h3",[a("v-icon",{attrs:{color:t.switchPhotos?"success":"primary"}},[t._v(t._s(t.cameraIcon))]),t._v(" Photos + Videos (optional) ")],1),a("div",{staticClass:"controls"},[a("v-switch",{attrs:{color:"success",inset:"",label:"Filmed with GoPros on specially built sticks for some great memories!"},on:{change:t.onValueChanged},model:{value:t.switchPhotos,callback:function(e){t.switchPhotos=e},expression:"switchPhotos"}})],1),a("div",{staticClass:"text-center"},[a("v-dialog",{attrs:{width:"400"},model:{value:t.bigGroupDialog,callback:function(e){t.bigGroupDialog=e},expression:"bigGroupDialog"}},[a("v-card",[a("v-card-title",{staticClass:"primary",attrs:{"primary-title":""}},[a("div",{staticClass:"white--text"},[t._v(" Booking a Big Group ")])]),a("v-card-text",{staticClass:"pt-6"},[t._v(" If your group contains more than "+t._s(t.getMaxPilots)+" people... "),a("br"),a("br"),t._v(" ...you can either do 2 or more seperate Bookings here, splitting your group amongst available times, or send us a "),a("strong",[t._v("Booking Message")]),t._v(" (later in this booking process) or just give us a ring at: Tel +41 79 643-6808 ")]),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.bigGroupDialog=!1}}},[t._v(" Close ")])],1)],1)],1)],1)])],1)},O=[],I=(a("4fad"),a("3835")),j=a("2230"),B=a("e3ee"),L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",{staticClass:"scrollerContainer",class:{focused:t.focused},attrs:{flat:"",outlined:""}},[a("v-icon",{attrs:{size:"100%"},on:{click:t.onDown,focus:function(e){t.focused=!0},blur:function(e){t.focused=!1}}},[t._v(t._s(t.iconMinus))]),a("input",{ref:"numberInput",staticClass:"numberInput",domProps:{value:t.myVal},on:{input:function(e){return t.onInput(e.target.value)},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1}}}),a("v-icon",{attrs:{size:"100%"},on:{click:t.onUp,focus:function(e){t.focused=!0},blur:function(e){t.focused=!1}}},[t._v(t._s(t.iconPlus))])],1),a("div",{staticClass:"tweaker v-text-field__details"},[a("div",{staticClass:"v-messages theme--light"},[a("div",{staticClass:"v-messages__wrapper"},[t._v(" "+t._s(t.scrollerMessage)+" ")])])])],1)},N=[],T=(a("a9e3"),a("2b19"),{name:"NumberScroller",props:{value:{type:[String,Number],required:!0},min:{type:[String,Number],required:!0},max:{type:[String,Number],required:!0},minMessage:String,maxMessage:String},data:function(){return{myVal:this.value,prevVal:this.value,focused:!1,iconPlus:u["i"],iconMinus:u["h"],scrollerMessage:""}},methods:{onInput:function(t){var e=parseInt(t);!0!==Object.is(e,Number.NaN)?(this.myVal=e,this.myVal>=this.max&&this.atMaxVal(),this.myVal<=this.min&&this.atMinVal(),this.myVal>this.min&&this.myVal<this.max&&(this.scrollerMessage=""),this.prevVal=this.myVal):this.myVal=this.prevVal},atMaxVal:function(){this.myVal=this.max,this.scrollerMessage=this.maxMessage,this.$emit("at-max-value",this.myVal)},atMinVal:function(){this.myVal=this.min,this.scrollerMessage=this.minMessage},onDown:function(){this.myVal--,this.onInput(this.myVal)},onUp:function(){this.myVal++,this.onInput(this.myVal)}},watch:{value:function(t){this.myVal=t,this.prevVal=t}}}),E=T,G=(a("efea"),a("b0af")),$=Object(d["a"])(E,L,N,!1,null,"326f13a1",null),A=$.exports;p()($,{VCard:G["a"],VIcon:k["a"]});var W={name:"Start",components:{NumberScroller:A},props:{},data:function(){return{stepIcon:u["a"],stepIconCompleted:u["d"],cameraIcon:u["c"],cloudQuestionIcon:u["g"],cloudIcon:u["f"],formattedFlightsList:[],flightMenu:!1,flightModal:!1,bigGroupDialog:!1,isPageValid:this.areAllInputsValid}},beforeMount:function(){this.formattedFlightsList=this.buildFlightList(this.flightsListModelObj)},mounted:function(){this.onValueChanged()},updated:function(){this.onValueChanged()},beforeUpdate:function(){this.$emit("data-changed")},computed:{getMaxPilots:function(){return r.nrPeopleMax},nrPeople:{get:function(){return r.nrPeople},set:function(t){return l.setNrPeople(t)}},flightDate:{get:function(){return r.flightDate},set:function(t){if(t!==this.flightDate)return this.$emit("flight-date-changed",t),l.setFlightDate(t)}},flightChosen:{get:function(){return r.selectedFlight},set:function(t){return l.setFlight(t)}},switchPhotos:{get:function(){return r.wantsPhotos},set:function(t){return l.setWantsPhotos(t)}},flightMinDate:function(){var t=r.bookDaysOffset;return Object(c["a"])(Object(j["a"])(Date.now(),{days:t}),"yyyy-MM-dd")},flightMaxDate:function(){var t=r.bookMonthsOffset;return Object(c["a"])(Object(j["a"])(Date.now(),{months:t}),"yyyy-MM-dd")},flightsListModelObj:function(){return r.flightsList},getMaxMessage:function(){return"Max per Booking is: "+r.nrPeopleMax},isValidNrPeople:function(){return this.nrPeople>0&&this.nrPeople<=r.nrPeopleMax},isValidFlightDate:function(){return""!==this.flightDate&&null!==this.flightDate},isValidFlightChosen:function(){return""!==this.flightDate&&null!==this.flightChosen},areAllInputsValid:function(){return!!(this.isValidNrPeople&&this.isValidFlightDate&&this.isValidFlightChosen)},formatISODate:function(){if(""===this.flightDate)return"";var t=Object(B["a"])(this.flightDate),e=Object(c["a"])(t,"PPPP");return e}},methods:{onValueChanged:function(){return this.areAllInputsValid?(this.$emit("form-is-valid",!0),!0):(this.$emit("form-is-valid",!1),!1)},buildFlightList:function(t){console.log("build flight list for drop menu");for(var e=[],a=0,o=Object.entries(t);a<o.length;a++){var n=Object(I["a"])(o[a],2),i=n[0],s=n[1],r={id:"".concat(i),name:"".concat(s)};e.push(r)}return e},onRule_whichFlight:function(){console.log('Date has changed, run rules to check that "Which Flight?" is still valid. (if not, then set to empty)')},showBigGroupWarning:function(){this.bigGroupDialog=!0}},watch:{flightsListModelObj:function(t){this.formattedFlightsList=this.buildFlightList(t)}}},z=W,R=(a("2f7a"),a("99d9")),U=a("2e4b"),q=a("169a"),J=a("ce7e"),H=a("b974"),Z=a("2fa4"),Q=a("b73d"),Y=a("8654"),K=Object(d["a"])(z,F,O,!1,null,"5916fb60",null),X=K.exports;p()(K,{VBtn:b["a"],VCard:G["a"],VCardActions:R["a"],VCardText:R["b"],VCardTitle:R["c"],VDatePicker:U["a"],VDialog:q["a"],VDivider:J["a"],VIcon:k["a"],VSelect:H["a"],VSpacer:Z["a"],VSwitch:Q["a"],VTextField:Y["a"]}),o["a"].use(_["a"]);var tt=[{path:"/",name:"Start",component:X},{path:"/time",name:"Time",component:function(){return a.e("TimeSlot").then(a.bind(null,"543b"))}}],et=new _["a"]({mode:"history",base:"/",routes:tt}),at=et,ot=(a("d1e78"),a("f309")),nt=a("fcf4");o["a"].use(ot["a"]);var it=new ot["a"]({theme:{themes:{light:{primary:nt["a"].purple.darken3,secondary:nt["a"].grey.darken1,accent:nt["a"].shades.black,error:nt["a"].red.accent3},dark:{primary:nt["a"].blue.lighten3}}}});o["a"].config.productionTip=!1,new o["a"]({router:at,vuetify:it,render:function(t){return t(S)}}).$mount("#app")},"8a23":function(t,e,a){},e176:function(t,e,a){t.exports=a.p+"img/FlyZermatt-logo-light.893e1f8e.svg"},e60d:function(t,e,a){},efea:function(t,e,a){"use strict";var o=a("e60d"),n=a.n(o);n.a}});
//# sourceMappingURL=app.3ad8d2b4.js.map