(function(t){function e(e){for(var a,r,s=e[0],l=e[1],c=e[2],u=0,f=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);h&&h(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var l=n[r];0!==o[l]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},o={app:0},i=[];function r(t){return s.p+"js/"+({TimeSlot:"TimeSlot"}[t]||t)+"."+{TimeSlot:"63b04d15"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=o[t]=[e,a]}));e.push(n[2]=a);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=r(t);var c=new Error;i=function(e){l.onerror=l.onload=null,clearTimeout(u);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,n[1](c)}o[t]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var h=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("8a23"),o=n.n(a);o.a},2174:function(t,e,n){},5257:function(t,e,n){"use strict";var a=n("2174"),o=n.n(a);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-overlay",{attrs:{opacity:"0.2",value:t.overlay}}),t.overlay?a("v-progress-circular",{staticStyle:{position:"absolute","z-index":"500",top:"30%",left:"50%","margin-top":"-32px","margin-left":"-32px"},attrs:{indeterminate:"",color:"primary",size:"64"}}):t._e(),a("v-app-bar",{attrs:{app:"",color:"primary",dark:"","hide-on-scroll":""}},[a("v-btn",{staticClass:"text-capitalize",class:t.canGoBack?"":"d-none",staticStyle:{position:"absolute",left:"-5px"},attrs:{text:""},on:{click:t.onBackBtnClick}},[a("v-icon",{attrs:{left:""}},[t._v(t._s(t.iconPrevChevron))]),t._v(" Back ")],1),a("div",{staticClass:"d-flex align-center",attrs:{id:"logo"}},[a("v-img",{staticClass:"shrink mr-2",attrs:{alt:"FlyZermatt Logo",contain:"",src:n("e176"),transition:"scale-transition",width:"220"}})],1),a("v-btn",{staticClass:"text-capitalize",staticStyle:{position:"absolute",right:"5px"},attrs:{text:""},on:{click:t.onClearData}},[a("v-icon",{attrs:{left:""}},[t._v(t._s(t.iconPrevChevron))]),t._v(" Clear ")],1)],1),a("v-content",[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12",md:"1",lg:"2"}}),a("v-col",{staticClass:"pa-5 pa-sm-8 pa-md-12",attrs:{cols:"12",md:"10",lg:"8"}},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view",{on:{"form-is-valid":t.onEnableContinueBtn,"data-changed":t.saveLocalStorageValues}})],1),a("div",{staticClass:"text-center mt-12 mb-6"},[a("v-btn",{attrs:{rounded:"",color:"primary",elevation:"4",disabled:!t.canContinue},on:{click:t.onContinueBtnClick}},[t._v(" Continue "),a("v-icon",{attrs:{right:""}},[t._v(t._s(t.iconNextArrow))])],1)],1)],1),a("v-col",{attrs:{cols:"12",md:"1",lg:"2"}})],1)],1),a("v-footer",{staticClass:"justify-end pr-2",attrs:{color:"primary",dark:"",app:"",padless:""}},[a("div",{staticClass:"white--text overline"},[t._v("© "+t._s(t.getCurrentYear)+" - FlyZermatt")])])],1)},i=[],r=(n("b0c0"),n("d3b7"),n("96cf"),n("1da1")),s=a["a"].observable({nrPeople:0,flightDate:"",selectedFlight:"",wantsPhotos:!1,nrPeopleMax:5}),l={setNrPeople:function(t){s.nrPeople=t},setFlightDate:function(t){s.flightDate=t},setFlight:function(t){s.selectedFlight=t},setWantsPhotos:function(t){s.wantsPhotos=t},setMaxNrPeople:function(t){s.nrPeopleMax=t,console.log("Store MaxPilots is: "+s.nrPeopleMax)}},c=n("b166"),u=n("94ed"),h={name:"App",components:{},beforeUpdate:function(){"Start"===this.$route.name?this.onEnableBackBtn(!1):this.onEnableBackBtn(!0)},created:function(){this.loadLocalStorageValues(),this.loadSettings()},data:function(){return{overlay:!1,overlayDelay:500,iconNextArrow:u["b"],iconPrevChevron:u["e"],canGoBack:!1,canContinue:!1,apiHeaders:{"Content-Type":"application/json"},apiInitSettingsPath:"https://fz-backend.simpleitsolutions.ch/onlinebooking/api/init",apiInitSettings:{}}},methods:{loadSettings:function(){var t=this,e=!1;setTimeout((function(){!1===e&&(t.overlay=!0)}),this.overlayDelay),fetch(this.apiInitSettingsPath,this.apiHeaders).then(function(){var n=Object(r["a"])(regeneratorRuntime.mark((function n(a){var o,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,a.json();case 2:if(o=n.sent,a.ok){n.next=6;break}return i=o&&o.message||a.statusText,n.abrupt("return",Promise.reject(i));case 6:l.setMaxNrPeople(o["max-pilots"]),e=!0,t.overlay=!1;case 9:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()).catch((function(n){e=!0,t.overlay=!1,t.errorMessage=n,console.error("Error loading Form Settings: ",n)}))},onEnableContinueBtn:function(t){this.canContinue=t},onContinueBtnClick:function(){this.$router.push({name:"Time",path:"time"}),this.onEnableContinueBtn(!1),this.onEnableBackBtn(!0)},onEnableBackBtn:function(t){this.canGoBack=t},onBackBtnClick:function(){this.$router.go(-1)},onClearData:function(){l.setNrPeople(0),l.setFlightDate(""),l.setFlight(""),l.setWantsPhotos(!1)},loadLocalStorageValues:function(){if(localStorage.nrPeople&&l.setNrPeople(localStorage.nrPeople),localStorage.flightDate&&l.setFlightDate(localStorage.flightDate),localStorage.selectedFlight&&l.setFlight(localStorage.selectedFlight),localStorage.wantsPhotos){var t=localStorage.wantsPhotos;t="true"===t,l.setWantsPhotos(t)}},saveLocalStorageValues:function(){localStorage.nrPeople=s.nrPeople,localStorage.flightDate=s.flightDate,localStorage.selectedFlight=s.selectedFlight,localStorage.wantsPhotos=s.wantsPhotos}},computed:{getCurrentYear:function(){return Object(c["a"])(Date.now(),"yyyy")}}},f=h,p=(n("034f"),n("2877")),d=n("6544"),g=n.n(d),m=n("7496"),v=n("40dc"),y=n("8336"),b=n("62ad"),P=n("a75b"),V=n("553a"),x=n("132d"),C=n("adda"),k=n("a797"),S=n("490a"),w=n("0fd9"),D=Object(p["a"])(f,o,i,!1,null,null,null),_=D.exports;g()(D,{VApp:m["a"],VAppBar:v["a"],VBtn:y["a"],VCol:b["a"],VContent:P["a"],VFooter:V["a"],VIcon:x["a"],VImg:C["a"],VOverlay:k["a"],VProgressCircular:S["a"],VRow:w["a"]});var M=n("8c4f"),I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("h1",{staticClass:"ml-n2"},[t._v("1. Get Started...")]),n("p",{},[t._v(" Why we ask you for all of this information? To help us make sure you get the best possible experience... To make sure that we provide the highest levels of safety... ")]),n("v-divider"),n("h3",[n("v-icon",{attrs:{color:t.isValidNrPeople?"success":"primary"}},[t._v(t._s(t.isValidNrPeople?t.stepIconCompleted:t.stepIcon))]),t._v(" Nr of People Flying ")],1),n("div",{staticClass:"controls"},[n("NumberScroller",{attrs:{min:"0",max:t.getMaxPilots,"min-message":"Min per Booking is 1","max-message":t.getMaxMessage},model:{value:t.nrPeople,callback:function(e){t.nrPeople=e},expression:"nrPeople"}})],1),n("h3",[n("v-icon",{attrs:{color:t.flightDate?"success":"primary"}},[t._v(t._s(t.flightDate?t.stepIconCompleted:t.stepIcon))]),t._v(" Flight Date ")],1),n("div",{staticClass:"controls"},[n("v-dialog",{ref:"dialog",attrs:{"return-value":t.flightDate,width:"290px"},on:{"update:returnValue":function(e){t.flightDate=e},"update:return-value":function(e){t.flightDate=e},change:t.onValueChanged},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("v-text-field",t._g({staticStyle:{width:"300px"},attrs:{"prepend-icon":"event",readonly:"",outlined:"",hint:t.isValidFlightDate?"":"Click to choose your Flight Date","persistent-hint":""},on:{keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.flightModal=!0}},model:{value:t.formatISODate,callback:function(e){t.formatISODate=e},expression:"formatISODate"}},a))]}}]),model:{value:t.flightModal,callback:function(e){t.flightModal=e},expression:"flightModal"}},[n("v-date-picker",{attrs:{scrollable:"","show-current":"",min:t.flightMinDate,max:t.flightMaxDate},model:{value:t.flightDate,callback:function(e){t.flightDate=e},expression:"flightDate"}},[n("v-spacer"),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.flightModal=!1}}},[t._v("Cancel")]),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.dialog.save(t.flightDate)}}},[t._v("OK")])],1)],1)],1),n("h3",[n("v-icon",{attrs:{color:t.flightChosen?"success":"primary"}},[t._v(t._s(t.flightList?t.stepIconCompleted:t.stepIcon))]),t._v(" Which Flight? ")],1),n("div",{staticClass:"controls"},[n("v-select",{staticStyle:{"max-width":"300px"},attrs:{items:t.flightList,"prepend-icon":t.flightChosen?t.cloudIcon:t.cloudQuestionIcon,solo:"",outlined:"",disabled:!t.isValidFlightDate,hint:t.isValidFlightDate?"":"Please choose a Flight Date first...","persistent-hint":""},on:{change:t.onValueChanged},model:{value:t.flightChosen,callback:function(e){t.flightChosen=e},expression:"flightChosen"}})],1),n("h3",[n("v-icon",{attrs:{color:t.switchPhotos?"success":"primary"}},[t._v(t._s(t.cameraIcon))]),t._v(" Photos + Videos (optional) ")],1),n("div",{staticClass:"controls"},[n("v-switch",{attrs:{color:"success",inset:"",label:"Filmed with GoPros on specially built sticks for some great memories!"},on:{change:t.onValueChanged},model:{value:t.switchPhotos,callback:function(e){t.switchPhotos=e},expression:"switchPhotos"}})],1)],1)},F=[],O=n("2230"),j=n("e3ee"),B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-card",{staticClass:"scrollerContainer",class:{focused:t.focused},attrs:{flat:"",outlined:""}},[n("v-icon",{attrs:{size:"100%"},on:{click:t.onDown,focus:function(e){t.focused=!0},blur:function(e){t.focused=!1}}},[t._v(t._s(t.iconMinus))]),n("input",{ref:"numberInput",staticClass:"numberInput",domProps:{value:t.myVal},on:{input:function(e){return t.onInput(e.target.value)},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1}}}),n("v-icon",{attrs:{size:"100%"},on:{click:t.onUp,focus:function(e){t.focused=!0},blur:function(e){t.focused=!1}}},[t._v(t._s(t.iconPlus))])],1),n("div",{staticClass:"tweaker v-text-field__details"},[n("div",{staticClass:"v-messages theme--light"},[n("div",{staticClass:"v-messages__wrapper"},[t._v(" "+t._s(t.scrollerMessage)+" ")])])])],1)},N=[],T=(n("a9e3"),n("2b19"),{name:"NumberScroller",props:{value:{type:[String,Number],required:!0},min:{type:[String,Number],required:!0},max:{type:[String,Number],required:!0},minMessage:String,maxMessage:String},data:function(){return{myVal:this.value,prevVal:this.value,focused:!1,iconPlus:u["i"],iconMinus:u["h"],scrollerMessage:""}},methods:{onInput:function(t){var e=parseInt(t);!0!==Object.is(e,Number.NaN)?(this.myVal=e,this.myVal>=this.max&&this.atMaxVal(),this.myVal<=this.min&&this.atMinVal(),this.myVal>this.min&&this.myVal<this.max&&(this.scrollerMessage=""),this.prevVal=this.myVal,this.$emit("input",this.myVal)):this.myVal=this.prevVal},atMaxVal:function(){this.myVal=this.max,this.scrollerMessage=this.maxMessage},atMinVal:function(){this.myVal=this.min,this.scrollerMessage=this.minMessage},onDown:function(){this.myVal--,this.onInput(this.myVal)},onUp:function(){this.myVal++,this.onInput(this.myVal)}},watch:{value:function(t){this.myVal=t,this.prevVal=t}}}),E=T,$=(n("a003"),n("b0af")),L=Object(p["a"])(E,B,N,!1,null,"216ab036",null),A=L.exports;g()(L,{VCard:$["a"],VIcon:x["a"]});var z={name:"Start",components:{NumberScroller:A},props:{},data:function(){return{stepIcon:u["a"],stepIconCompleted:u["d"],cameraIcon:u["c"],cloudQuestionIcon:u["g"],cloudIcon:u["f"],flightList:["Classic High","Scenic","Elite"],flightMinDate:Object(c["a"])(Object(O["a"])(Date.now(),{days:2}),"yyyy-MM-dd"),flightMaxDate:Object(c["a"])(Object(O["a"])(Date.now(),{years:1}),"yyyy-MM-dd"),flightMenu:!1,flightModal:!1,isPageValid:this.areAllInputsValid}},mounted:function(){this.onValueChanged()},updated:function(){this.onValueChanged()},beforeUpdate:function(){this.$emit("data-changed")},computed:{getMaxPilots:function(){return s.nrPeopleMax},nrPeople:{get:function(){return s.nrPeople},set:function(t){return l.setNrPeople(t)}},flightDate:{get:function(){return s.flightDate},set:function(t){return l.setFlightDate(t)}},flightChosen:{get:function(){return s.selectedFlight},set:function(t){return l.setFlight(t)}},switchPhotos:{get:function(){return s.wantsPhotos},set:function(t){return l.setWantsPhotos(t)}},getMaxMessage:function(){return"Max per Booking is: "+s.nrPeopleMax},isValidNrPeople:function(){return this.nrPeople>0&&this.nrPeople<=s.nrPeopleMax},isValidFlightDate:function(){return""!==this.flightDate&&null!==this.flightDate},isValidFlightChosen:function(){return""!==this.flightDate&&null!==this.flightChosen},areAllInputsValid:function(){return!!(this.isValidNrPeople&&this.isValidFlightDate&&this.isValidFlightChosen)},formatISODate:function(){if(""===this.flightDate)return"";var t=Object(j["a"])(this.flightDate),e=Object(c["a"])(t,"PPPP");return e}},methods:{onValueChanged:function(){return this.areAllInputsValid?(this.$emit("form-is-valid",!0),!0):(this.$emit("form-is-valid",!1),!1)},onDateChnged:function(){}}},W=z,G=(n("5257"),n("2e4b")),q=n("169a"),U=n("ce7e"),H=n("b974"),R=n("2fa4"),Z=n("b73d"),J=n("8654"),Q=Object(p["a"])(W,I,F,!1,null,"6d4d7c1a",null),Y=Q.exports;g()(Q,{VBtn:y["a"],VDatePicker:G["a"],VDialog:q["a"],VDivider:U["a"],VIcon:x["a"],VSelect:H["a"],VSpacer:R["a"],VSwitch:Z["a"],VTextField:J["a"]}),a["a"].use(M["a"]);var K=[{path:"/",name:"Start",component:Y},{path:"/time",name:"Time",component:function(){return n.e("TimeSlot").then(n.bind(null,"543b"))}}],X=new M["a"]({mode:"history",base:"/",routes:K}),tt=X,et=(n("d1e78"),n("f309")),nt=n("fcf4");a["a"].use(et["a"]);var at=new et["a"]({theme:{themes:{light:{primary:nt["a"].purple.darken3,secondary:nt["a"].grey.darken1,accent:nt["a"].shades.black,error:nt["a"].red.accent3},dark:{primary:nt["a"].blue.lighten3}}}});a["a"].config.productionTip=!1,new a["a"]({router:tt,vuetify:at,render:function(t){return t(_)}}).$mount("#app")},"8a23":function(t,e,n){},a003:function(t,e,n){"use strict";var a=n("b1a2"),o=n.n(a);o.a},b1a2:function(t,e,n){},e176:function(t,e,n){t.exports=n.p+"img/FlyZermatt-logo-light.893e1f8e.svg"}});
//# sourceMappingURL=app.000339e5.js.map