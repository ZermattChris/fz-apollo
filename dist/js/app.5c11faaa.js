(function(t){function e(e){for(var n,i,r=e[0],l=e[1],c=e[2],u=0,f=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&f.push(s[i][0]),s[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);h&&h(e);while(f.length)f.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,i=1;i<a.length;i++){var r=a[i];0!==s[r]&&(n=!1)}n&&(o.splice(e--,1),t=l(l.s=a[0]))}return t}var n={},i={app:0},s={app:0},o=[];function r(t){return l.p+"js/"+({"Info~Pay":"Info~Pay",Info:"Info",Pay:"Pay",Next:"Next",Thanks:"Thanks",TimeSlot:"TimeSlot"}[t]||t)+"."+{"Info~Pay":"10ee24a4",Info:"d74f1f38",Pay:"111c4b73",Next:"012a9753",Thanks:"48e928b2",TimeSlot:"dd06f91c"}[t]+".js"}function l(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={"Info~Pay":1,Info:1,Pay:1,Next:1,Thanks:1,TimeSlot:1};i[t]?e.push(i[t]):0!==i[t]&&a[t]&&e.push(i[t]=new Promise((function(e,a){for(var n="css/"+({"Info~Pay":"Info~Pay",Info:"Info",Pay:"Pay",Next:"Next",Thanks:"Thanks",TimeSlot:"TimeSlot"}[t]||t)+"."+{"Info~Pay":"ac85161c",Info:"a275af57",Pay:"6116840d",Next:"852eaf42",Thanks:"468c7556",TimeSlot:"3f69b65f"}[t]+".css",s=l.p+n,o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var c=o[r],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===s))return e()}var f=document.getElementsByTagName("style");for(r=0;r<f.length;r++){c=f[r],u=c.getAttribute("data-href");if(u===n||u===s)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var n=e&&e.target&&e.target.src||s,o=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete i[t],h.parentNode.removeChild(h),a(o)},h.href=s;var d=document.getElementsByTagName("head")[0];d.appendChild(h)})).then((function(){i[t]=0})));var n=s[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,a){n=s[t]=[e,a]}));e.push(n[2]=o);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=r(t);var f=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(h);var a=s[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",f.name="ChunkLoadError",f.type=n,f.request=i,a[1](f)}s[t]=void 0}};var h=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=n,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var f=0;f<c.length;f++)e(c[f]);var h=u;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"17ff":function(t,e,a){"use strict";a("d0d3")},"27be":function(t,e,a){},"36ad":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-header"},[a("h1",{staticClass:"ml-n2 disable-select",domProps:{innerHTML:t._s(t.title)}}),a("p",[t._t("default",[t._v("Default Page Header text...")])],2),a("v-divider")],1)},i=[],s={name:"PageHeader",props:{title:{type:String,default:"Title Default"}}},o=s,r=(a("98a6"),a("2877")),l=a("6544"),c=a.n(l),u=a("ce7e"),f=Object(r["a"])(o,n,i,!1,null,"6d826619",null);e["a"]=f.exports;c()(f,{VDivider:u["a"]})},"49f8":function(t,e,a){var n={"./de.json":"6ce2","./en.json":"edd4","./ko.json":"dd11"};function i(t){var e=s(t);return a(e)}function s(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}i.keys=function(){return Object.keys(n)},i.resolve=s,t.exports=i,i.id="49f8"},"56d7":function(t,e,a){"use strict";a.r(e);a("fb6a"),a("b64b"),a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-overlay",{attrs:{opacity:"0.2",value:t.overlay}}),t.overlay?n("v-progress-circular",{staticStyle:{position:"absolute","z-index":"500",top:"30%",left:"50%","margin-top":"-32px","margin-left":"-32px"},attrs:{indeterminate:"",color:"primary",size:"64"}}):t._e(),n("v-app-bar",{attrs:{app:"",color:"primary",dark:"","hide-on-scroll":""}},[n("div",{attrs:{id:"logo"}},[n("v-img",{staticClass:"shrink ml-1",attrs:{alt:"FlyZermatt Logo",contain:"",src:a("e176"),transition:"scale-transition",width:"220"}})],1)]),n("v-main",[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"12",md:"1",lg:"2"}}),n("v-col",{staticClass:"pa-5 pa-sm-8 pa-md-12",attrs:{cols:"12",md:"10",lg:"8"}},[n("router-view")],1),n("v-col",{attrs:{cols:"12",md:"1",lg:"2"}})],1)],1),n("v-footer",{staticClass:"justify-end",staticStyle:{"min-height":"60px"},attrs:{color:"primary",dark:"",app:"",padless:""}},[n("v-btn",{staticClass:"text-capitalize",class:t.canGoBack?"":"hideBackBtn",staticStyle:{position:"absolute",left:"5px","z-index":"1000"},attrs:{text:""},on:{click:t.onBackBtnClick}},[n("v-icon",{attrs:{left:""}},[t._v(t._s(t.iconPrevChevron))]),t._v(" "+t._s(t.$t("nav.back"))+" ")],1),n("div",{staticClass:"d-flex",staticStyle:{position:"absolute",width:"100%",height:"100%",top:"12px"}},[n("NavButton",{ref:"ContinueBtn",staticClass:"mx-auto"})],1),n("div",{staticClass:"hidden-xs-only white--text overline mr-2 text--secondary",staticStyle:{"text-align":"right"}},[t._v(" © "+t._s(t.getCurrentYear)+" - FlyZermatt ")]),n("div",{staticClass:"hidden-sm-and-up white--text overline mr-2 text-caption text--secondary",staticStyle:{"max-width":"140px","line-height":"1.2em","text-align":"right"}},[t._v(" © "+t._s(t.getCurrentYear)),n("br"),t._v(" FlyZermatt ")])],1),n("v-overlay",{attrs:{value:t.isAppStillLoading}})],1)},s=[],o=(a("b0c0"),a("96cf"),a("1da1")),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-btn",{attrs:{rounded:"",color:"white",elevation:"4",disabled:t.isDisabled},on:{click:t.navigate}},[t._v(" "+t._s(t.$t("nav.continue"))+" "),a("v-icon",{attrs:{right:""}},[t._v(t._s(t.iconNextArrow))])],1)},l=[],c=a("94ed"),u={name:"NavButton",props:{},data:function(){return{isDisabled:!0,iconNextArrow:c["c"]}},created:function(){var t=this;this.$store.watch((function(t){return t._navList}),(function(){t.update()}),{deep:!0})},methods:{update:function(){var t=this.$route.name,e=this.$store.state._navList[t];this.isDisabled=!e},navigate:function(){var t=this.$store.state._currentStep;switch(t){case"Start":this.$store.dispatch("setCurrentStep","Time");break;case"Time":this.$store.dispatch("setCurrentStep","Info");break;case"Info":if(!1===this.$store.state._hasReviewedData)return void this.$store.dispatch("showReviewDialog",!0);this.$store.dispatch("setCurrentStep","Pay");break;case"Pay":this.$store.dispatch("setCurrentStep","Thanks");break;case"Thanks":return this.$store.dispatch("setCurrentStep","Completed"),void(window.location="http://www.flyzermatt.com")}var e=this.$store.state._currentStep;this.$router.push({path:e})}}},f=u,h=(a("af96"),a("2877")),d=a("6544"),g=a.n(d),p=a("8336"),m=a("132d"),v=Object(h["a"])(f,r,l,!1,null,"3b83b619",null),S=v.exports;g()(v,{VBtn:p["a"],VIcon:m["a"]});var b=a("2230"),D=a("e3ee"),_=a("b166"),y={name:"App",components:{NavButton:S},data:function(){return{overlay:!1,overlayDelay:500,iconPrevChevron:c["i"],iconGarbageBin:c["o"],canGoBack:!1}},mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$store.dispatch("init");case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),console.error("My error",e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))()},beforeUpdate:function(){"Start"===this.$route.name?this.onEnableBackBtn(!1):this.onEnableBackBtn(!0)},beforeMount:function(){if(""!==this.flightDate){var t=Object(b["a"])(Date.now(),{days:this.$store.state._bookDaysOffset}),e=Object(D["a"])(this.$store.state.flightDate);t>e&&(this.$store.dispatch("setFlightDate",""),this.$store.dispatch("setFlight",""),this.$store.dispatch("setWantsPhotos",!1),this.$store.dispatch("clearSlotsPassengers"))}},updated:function(){this.$refs.ContinueBtn.update()},methods:{onEnableBackBtn:function(t){this.canGoBack=t},onBackBtnClick:function(){this.$router.go(-1)},onClearData:function(){if(!0===this.$store.state._DEV){this.$store.dispatch("setFlightDate",""),this.$store.dispatch("setFlight",""),this.$store.dispatch("setWantsPhotos",!1);var t={slot:-1,label:""};this.$store.dispatch("setTimeSlot",t),this.$store.dispatch("clearNavList"),this.$store.dispatch("setCurrentStep",""),this.$store.dispatch("setContactPhone",""),this.$store.dispatch("setContactEmail",""),this.$store.dispatch("clearSlotsPassengers"),"Start"!==this.$route.name&&this.$router.push("/"),window.location.reload()}}},computed:{progressBarPercent:function(){var t=4,e=this.$store.state._currentStep.toLowerCase(),a=0;switch(e){case"start":a=1;break;case"time":a=2;break;case"info":a=3;break;case"pay":a=4;break;default:console.error("Invalid Step name for progress bar in App.vue ".concat(e,"."))}return a*(100/t)},_isDEV:function(){return this.$store.state._DEV},getCurrentYear:function(){return Object(_["a"])(Date.now(),"yyyy")},isAppStillLoading:function(){return this.$store.state._app_loading}},watch:{$route:function(t){document.title=t.meta.title||"Secure Booking at FlyZermatt Paragliding"}}},O=y,P=(a("034f"),a("7496")),E=a("40dc"),T=a("62ad"),w=a("553a"),L=a("adda"),I=a("f6c4"),k=a("a797"),C=a("490a"),x=a("0fd9"),A=Object(h["a"])(O,i,s,!1,null,null,null),j=A.exports;g()(A,{VApp:P["a"],VAppBar:E["a"],VBtn:p["a"],VCol:T["a"],VFooter:w["a"],VIcon:m["a"],VImg:L["a"],VMain:I["a"],VOverlay:k["a"],VProgressCircular:C["a"],VRow:x["a"]});a("d3b7");var N=a("8c4f"),F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"stepStart",staticClass:"page",attrs:{id:"step-start"}},[a("PageHeader",{attrs:{title:"1. "+t.$t("step-info.title")}},[t._v(" "+t._s(t.$t("step-info.description"))+" ")]),a("div",{staticClass:"ml-n2 ml-sm-2 ml-md-8 ml-lg-12 pt-sm-2",staticStyle:{"max-width":"500px"},attrs:{id:"steps-controls"}},[a("h3",{staticClass:"disable-select",attrs:{id:"chooseFlightDate"}},[a("v-icon",{attrs:{color:t.flightDate?"success":"primary"}},[t._v(t._s(t.flightDate?t.stepIconCompleted:t.stepIcon))]),t._v(" "+t._s(t.$t("step-info.flightdate"))+" ")],1),a("div",{staticClass:"controls mb-0 mb-sm-2 mb-md-4"},[a("v-date-picker",{attrs:{"first-day-of-week":"0","show-current":"",landscape:"xs"!==this.$vuetify.breakpoint.name,locale:t.$i18n.locale,min:t.flightMinDate,max:t.flightMaxDate,elevation:"4",width:"290",color:""===t.flightDate?"primary":"green",events:t.calendarTripLength},on:{input:function(e){t.flightMenu=!1}},model:{value:t.flightDate,callback:function(e){t.flightDate=e},expression:"flightDate"}}),a("v-dialog",{attrs:{"nudge-right":0,transition:"scale-transition","offset-y":"","min-width":"auto","max-width":"300"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[a("v-text-field",t._g(t._b({directives:[{name:"show",rawName:"v-show",value:t.hasValidFlightDate,expression:"hasValidFlightDate"}],staticClass:"ml-10 mt-3",attrs:{value:t.formatArriveDate,label:t.$t("step-info.arrivingDate"),readonly:"",color:""===t.arriveDate?"primary":"green"},scopedSlots:t._u([{key:"append",fn:function(){return[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){return[a("v-icon",{attrs:{color:""===t.arriveDate?"primary":"green"},on:{click:function(e){t.arriveMenu=!0}}},[t._v(" mdi-calendar ")])]}}],null,!0)})]},proxy:!0}],null,!0)},"v-text-field",i,!1),n))]}}]),model:{value:t.arriveMenu,callback:function(e){t.arriveMenu=e},expression:"arriveMenu"}},[a("v-date-picker",{attrs:{"first-day-of-week":"0",locale:t.$i18n.locale,min:t.todaysDate,max:t.flightDate,color:"green",elevation:"15"},on:{input:function(e){t.arriveMenu=!1}},model:{value:t.arriveDate,callback:function(e){t.arriveDate=e},expression:"arriveDate"}})],1),a("v-dialog",{attrs:{"nudge-right":0,"nudge-bottom":0,transition:"scale-transition","offset-y":"","min-width":"auto","max-width":"300"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[a("v-text-field",t._g(t._b({directives:[{name:"show",rawName:"v-show",value:t.hasValidFlightDate,expression:"hasValidFlightDate"}],staticClass:"ml-10 mt-n3 mb-2",attrs:{label:t.$t("step-info.departingDate"),"append-icon":"mdi-calendar",readonly:"",color:""===t.departDate?"primary":"green"},scopedSlots:t._u([{key:"append",fn:function(){return[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){return[a("v-icon",{attrs:{color:""===t.departDate?"primary":"green"},on:{click:function(e){t.departMenu=!0}}},[t._v(" mdi-calendar ")])]}}],null,!0)})]},proxy:!0}],null,!0),model:{value:t.formatDepartDate,callback:function(e){t.formatDepartDate=e},expression:"formatDepartDate"}},"v-text-field",i,!1),n))]}}]),model:{value:t.departMenu,callback:function(e){t.departMenu=e},expression:"departMenu"}},[a("v-date-picker",{attrs:{"first-day-of-week":"0",locale:t.$i18n.locale,min:t.flightDate,max:t.flightMaxDate,elevation:"15",color:"green"},on:{input:function(e){t.departMenu=!1}},model:{value:t.departDate,callback:function(e){t.departDate=e},expression:"departDate"}})],1)],1),a("h3",{staticClass:"disable-select mt-6"},[a("v-icon",{attrs:{color:t.flightChosen?"success":"primary"}},[t._v(t._s(t.flightOptionsDropMenuList?t.stepIconCompleted:t.stepIcon)+" ")]),t._v(" "+t._s(t.$t("step-info.whichflight"))+" ")],1),a("div",{staticClass:"controls mb-0 mb-sm-6 mb-md-10"},[a("v-select",{staticClass:"disable-select",staticStyle:{"max-width":"330px"},attrs:{items:t.flightOptionsDropMenuList,"item-text":"name","item-value":"id","prepend-icon":t.flightChosen?t.cloudIcon:t.cloudQuestionIcon,loading:t.flightOptionsLoaded,solo:"",outlined:"",disabled:!t.isValidFlightDate,hint:t.isValidFlightDate?"":t.$t("step-info.pleaseChooseFlightFirst"),"persistent-hint":""},model:{value:t.flightChosen,callback:function(e){t.flightChosen=e},expression:"flightChosen"}})],1),a("h3",[a("v-icon",{attrs:{color:t.switchPhotos?"success":"primary"}},[t._v(t._s(t.cameraIcon))]),t._v(" "+t._s(t.$t("step-info.photosvideos"))+" ")],1),a("div",{staticClass:"controls mb-0 mb-sm-6"},[a("v-switch",{staticClass:"ml-10",attrs:{id:"photosSwitch",color:"success",inset:"",label:t.$t("step-info.photosvideos-description",{price:t.photosPrice})},model:{value:t.switchPhotos,callback:function(e){t.switchPhotos=e},expression:"switchPhotos"}}),a("p",{staticClass:"caption pl-16 ml-8 mt-n4",staticStyle:{position:"relative","z-index":"2"}},[t._v(" ( "),a("v-icon",{attrs:{tabindex:"-1"},on:{click:t.gotoPhotosVideosWebPage}},[t._v(" "+t._s(t.infoIcon)+" ")]),a("a",{attrs:{href:"https://www.flyzermatt.com/photos-videos/",target:"_blank"}},[t._v(" click here for detailed information ")]),t._v(") ")],1)],1)])],1)},$=[],M=(a("99af"),a("4fad"),a("3835")),R=a("1212"),V=a("ef06"),G=a("7677"),B=(a("4160"),a("ac1f"),a("466d"),a("159b"),a("ddb0"),a("a925"));function H(){var t=a("49f8"),e={};return t.keys().forEach((function(a){var n=a.match(/([A-Za-z0-9-_]+)\./i);if(n&&n.length>1){var i=n[1];e[i]=t(a)}})),e}n["default"].use(B["a"]);var W=new B["a"]({locale:"en",fallbackLocale:"en",messages:H()}),J=a("36ad"),z={name:"Start",components:{PageHeader:J["a"]},props:{},data:function(){return{stepIcon:c["b"],stepIconCompleted:c["h"],cameraIcon:c["f"],cloudQuestionIcon:c["n"],cloudIcon:c["m"],calendarIcon:c["e"],infoIcon:c["u"],flightOptionsDropMenuList:this.buildFlightList(),flightModal:!1,nrPeopleExceedsMaxPilots:!1,maxGroupSize:15,nrPeopleEnabled:!1,bigGroupDialog:!1,isPageValid:this.$store.getters.step_startValid,arriveMenu:!1,flightMenu:!1,departMenu:!1}},beforeMount:function(){this.$store.dispatch("flightOptions")},beforeUpdate:function(){this.onValueChanged()},mounted:function(){return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},computed:{hasValidFlightDate:function(){return!!Object(R["a"])(Object(V["a"])(Object(D["a"])(this.flightDate),{days:-1}),Date.now())},photosPrice:function(){return this.$store.state._videoPrice},flightOptionsLoaded:function(){return this.$store.state._flightsList_loading},forWatchingBothFlightDateAndFlightType:function(){return"".concat(this.flightDate,"|").concat(this.flightChosen)},flightDate:{get:function(){return this.$store.state.flightDate},set:function(t){t!==this.$store.state.flightDate&&(this.$store.dispatch("setFlightDate",t),this.$store.dispatch("flightOptions"),this.buildFlightList(),this.$store.dispatch("clearSlotsPassengers"))}},flightChosen:{get:function(){return parseInt(this.$store.state.selectedFlight)},set:function(t){return this.$store.dispatch("setFlight",t)}},switchPhotos:{get:function(){return this.$store.state.wantsPhotos},set:function(t){return this.$store.dispatch("setWantsPhotos",t)}},flightMinDate:function(){var t=this.$store.state._bookDaysOffset;return Object(_["a"])(Object(b["a"])(Date.now(),{days:t}),"yyyy-MM-dd")},flightMaxDate:function(){var t=this.$store.state._bookMonthsOffset;return Object(_["a"])(Object(b["a"])(Date.now(),{months:t}),"yyyy-MM-dd")},flightsWatch:function(){return this.$store.state._flightsList},isValidFlightDate:function(){return""!==this.flightDate&&null!==this.flightDate},isValidFlightChosen:function(){return""!==this.flightDate&&""!==this.flightChosen},formatISODate:function(){if(""===this.flightDate)return"";var t=Object(D["a"])(this.flightDate),e=Object(_["a"])(t,"PPPP");return e},todaysDate:function(){return Object(_["a"])(Object(D["a"])((new Date).toISOString()),"yyyy-MM-dd")},formatArriveDate:function(){return Object(R["a"])(Object(D["a"])(this.arriveDate),Object(D["a"])(this.flightDate))?"":this.arriveDate?Object(_["a"])(Object(D["a"])(this.arriveDate),"EEEE, MMMM do yyyy"):""},arriveDate:{get:function(){return this.$store.state.arriveDate},set:function(t){this.$store.dispatch("setArriveDate",t)}},formatDepartDate:function(){return Object(G["a"])(Object(D["a"])(this.departDate),Object(D["a"])(this.flightDate))?"":this.departDate?Object(_["a"])(Object(D["a"])(this.departDate),"EEEE, MMMM do yyyy"):""},departDate:{get:function(){return this.$store.state.departDate},set:function(t){this.$store.dispatch("setDepartDate",t)}},formatFlightDate:function(){return this.flightDate?Object(_["a"])(Object(D["a"])(this.flightDate),"EEEE, MMMM do yyyy"):""}},methods:{gotoPhotosVideosWebPage:function(){window.open("https://www.flyzermatt.com/photos-videos/","_blank")},calendarTripLength:function(t){if(Object(R["a"])(Object(D["a"])(t),Object(V["a"])(Object(D["a"])(this.arriveDate),{days:1}))&&Object(G["a"])(Object(D["a"])(t),Object(b["a"])(Object(D["a"])(this.departDate),{days:1})))return["yellow"]},scrollToFormTop:function(){var t=this;setTimeout((function(){t.$scrollTo("#chooseFlightDate",500)}),100)},onValueChanged:function(){if(this.$store.getters.step_startValid){var t={Start:!0};this.$store.dispatch("setNavListItem",t)}else{var e={Start:!1};this.$store.dispatch("setNavListItem",e)}},buildFlightList:function(){var t=this.$store.state._flightsList;if(this.isObjEmpty(t))return[{id:-1,name:W.t("step-info.noAvailableFlights")}];for(var e=[],a=0,n=Object.entries(t);a<n.length;a++){var i=Object(M["a"])(n[a],2),s=(i[0],i[1]),o=s["name"]+" "+s["price"]+".- CHF",r={id:s["id"],name:o};e.push(r)}return e}},watch:{forWatchingBothFlightDateAndFlightType:function(){""!==this.flightChosen&&(this.$store.dispatch("timeListDates"),this.onValueChanged())},flightsWatch:function(){this.flightOptionsDropMenuList=this.buildFlightList()},flightDate:function(){console.log("Chosen Date: "+this.flightDate)}}},Z=z,U=(a("17ff"),a("2e4b")),K=a("169a"),Y=a("ce87"),q=a("b974"),Q=a("b73d"),X=a("8654"),tt=Object(h["a"])(Z,F,$,!1,null,"d8674354",null),et=tt.exports;g()(tt,{VDatePicker:U["a"],VDialog:K["a"],VHover:Y["a"],VIcon:m["a"],VSelect:q["a"],VSwitch:Q["a"],VTextField:X["a"]});a("7db0"),a("07ac");var at=a("b85c"),nt=a("2f62"),it=a("bc3a"),st=a.n(it);n["default"].use(nt["a"]);var ot={Start:!1,Time:!1,Info:!1,Next:!1,Pay:!1,Thanks:!1},rt={id:null,valid:!1,sex:null,age:null,name:"",speed:6,weightKg:25},lt={selectedDate:"",slotsList:[]},ct=function(){var t=localStorage.slotPassengersObj?JSON.parse(localStorage.slotPassengersObj):{},e=0,a=t.slotsList;if(void 0!==a&&null!==a){var n,i=Object(at["a"])(a);try{for(i.s();!(n=i.n()).done;){var s=n.value;null!==s&&(e+=s.passengers)}}catch(o){i.e(o)}finally{i.f()}}return e},ut=new nt["a"].Store({state:{_DEV:!0,orderID:+localStorage.orderID||"",totalPassengers:ct(),arriveDate:localStorage.arriveDate||"",flightDate:localStorage.flightDate||"",departDate:localStorage.departDate||"",selectedFlight:+localStorage.selectedFlight||"",wantsPhotos:!!localStorage.wantsPhotos&&JSON.parse(localStorage.wantsPhotos),timeSlot:+localStorage.selectedTimeslot||-1,timeSlotLabel:localStorage.selectedTimeslotLabel||"",contactPhone:localStorage.contactPhone||"",contactEmail:localStorage.contactEmail||"",orderMessage:localStorage.orderMessage||"",passengerObjList:localStorage.passengerObjList?JSON.parse(localStorage.passengerObjList):[],slotPassengersObj:localStorage.slotPassengersObj?JSON.parse(localStorage.slotPassengersObj):lt,_activeDate:"",_bookDaysOffset:0,_bookMonthsOffset:0,_videoPrice:+localStorage._videoPrice||-1,_flightsList:localStorage._flightsList?JSON.parse(localStorage._flightsList):{},_timeListDates:localStorage._timeListDates?JSON.parse(localStorage._timeListDates):{},_app_loading:!0,_flightsList_loading:!1,_timeList_loading:!0,_navList:localStorage._navList?JSON.parse(localStorage._navList):ot,_currentStep:localStorage._currentStep||"",_hasReviewedData:!1,_showReviewDialog:!1},mutations:{HAS_REVIEWED_DATA:function(t,e){t._hasReviewedData=e},SHOW_REVIEW_DIALOG:function(t,e){t._showReviewDialog=e},APP_LOADING:function(t,e){t._app_loading=e},FLIGHTSLIST_LOADING:function(t,e){t._flightsList_loading=e},TIMELIST_LOADING:function(t,e){t._timeList_loading=e},TIMELIST_DATES:function(t,e){t._timeListDates=e,localStorage._timeListDates=JSON.stringify(t._timeListDates)},BOOK_DAYS_OFFSET:function(t,e){t._bookDaysOffset=e},BOOK_MONTS_OFFSET:function(t,e){t._bookMonthsOffset=e},VIDEO_PRICE:function(t,e){t._videoPrice=e,localStorage._videoPrice=JSON.stringify(t._videoPrice)},ACTIVE_DATE:function(t,e){t._activeDate=e},CHOSEN_DATE:function(t,e){t.flightDate=e},CHOSEN_FLIGHT:function(t,e){t.selectedFlight=e},CHOSEN_PHOTOS:function(t,e){t.wantsPhotos=e},CHOSEN_TIMESLOT:function(t,e,a){t.timeSlot=e,t.timeSlotLabel=a},CONTACT_PHONE:function(t,e){t.contactPhone=e},CONTACT_EMAIL:function(t,e){t.contactEmail=e},ORDER_MESSAGE:function(t,e){t.orderMessage=e},ARRIVE_DATE:function(t,e){t.arriveDate=e},DEPART_DATE:function(t,e){t.departDate=e},ORDER_ID:function(t,e){t.orderID=e,localStorage.orderID=JSON.stringify(t.orderID)},FLIGHTS_LIST:function(t,e){t._flightsList=e,localStorage._flightsList=JSON.stringify(t._flightsList)},CLEAR_NAV_LIST:function(t){t._navList=ot},NAV_LIST:function(t,e){t._navList[Object.keys(e)[0]]=Object.values(e)[0]},CURRENT_STEP:function(t,e){t._currentStep=e},PASSENGER_VALID:function(t,e){var a=ft(t,e.passengerId);a.valid=e.valid},PASSENGER_SEX:function(t,e){var a=ft(t,e.passengerId);a.sex=e.sexStr},PASSENGER_AGE:function(t,e){var a=ft(t,e.passengerId);a.age=e.ageInt},PASSENGER_NAME:function(t,e){var a=ft(t,e.passengerId);a.name=e.nameStr},PASSENGER_SPEED:function(t,e){var a=ft(t,e.passengerId);a.speed=e.speedInt},PASSENGER_WEIGHT:function(t,e){var a=ft(t,e.passengerId);a.weightKg=e.weightInt},SLOT_SELECTED_DATE:function(t,e){t.slotPassengersObj.selectedDate!==t.flightDate&&(t.slotPassengersObj.selectedDate="",t.slotPassengersObj.slotsList=[]),t.slotPassengersObj.selectedDate=e},NUMBER_PASSENGERS:function(t,e){t.slotPassengersObj.selectedDate!==t.flightDate&&(t.slotPassengersObj=lt,t.slotPassengersObj.selectedDate=t.flightDate),t.slotPassengersObj.slotsList[e.index]={timeString:e.timeString,passengers:e.passengers};var a,n=0,i=Object(at["a"])(t.slotPassengersObj.slotsList);try{for(i.s();!(a=i.n()).done;){var s=a.value;void 0!==s&&null!==s&&(n+=s.passengers)}}catch(o){i.e(o)}finally{i.f()}t.totalPassengers=n},RESET_PASSENGERS:function(t){t.totalPassengers=0,t.slotPassengersObj=lt,localStorage.removeItem("slotPassengersObj")}},actions:{flightOptions:function(t){return Object(o["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.state.flightDate,""!==a){e.next=3;break}return e.abrupt("return");case 3:return t.commit("FLIGHTSLIST_LOADING",!0),e.abrupt("return",st.a.get("https://bookings.simpleitsolutions.ch/api/flightoptions/"+a).then((function(e){var a=e.data;t.commit("FLIGHTS_LIST",a)})).catch((function(t){console.log(t)})).finally((function(){return t.commit("FLIGHTSLIST_LOADING",!1)})));case 5:case"end":return e.stop()}}),e)})))()},timeListDates:function(t){return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.commit("TIMELIST_LOADING",!0),a=t.state.flightDate,n=t.state.selectedFlight,""!==n){e.next=5;break}return e.abrupt("return");case 5:return e.abrupt("return",st.a.get("https://bookings.simpleitsolutions.ch/api/flightsavailable/"+n+"/"+a).then((function(e){var a=e.data;t.commit("TIMELIST_DATES",a)})).catch((function(t){console.log(t)})).finally((function(){return t.commit("TIMELIST_LOADING",!1)})));case 6:case"end":return e.stop()}}),e)})))()},init:function(t){return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",st.a.get("https://bookings.simpleitsolutions.ch/api/init").then((function(e){var a=e.data;t.commit("BOOK_DAYS_OFFSET",+a["book-days-from-today"]),t.commit("BOOK_MONTS_OFFSET",+a["book-future-months"]),t.commit("VIDEO_PRICE",+a["video-cost"])})).catch((function(t){console.log(t)})).finally((function(){return t.commit("APP_LOADING",!1)})));case 1:case"end":return e.stop()}}),e)})))()},setFlightsList:function(t,e){t.commit("FLIGHTS_LIST",e)},hasReviewedData:function(t,e){t.commit("HAS_REVIEWED_DATA",e)},showReviewDialog:function(t,e){t.commit("SHOW_REVIEW_DIALOG",e)},setOrderId:function(t,e){t.commit("ORDER_ID",e)},setArriveDate:function(t,e){t.commit("ARRIVE_DATE",e),localStorage.arriveDate=e},setDepartDate:function(t,e){t.commit("DEPART_DATE",e),localStorage.departDate=e},setFlightDate:function(t,e){t.commit("CHOSEN_DATE",e),localStorage.flightDate=e,t.commit("SLOT_SELECTED_DATE",e)},setActiveDate:function(t,e){t.commit("ACTIVE_DATE",e)},setFlight:function(t,e){t.commit("CHOSEN_FLIGHT",e),localStorage.selectedFlight=e},setWantsPhotos:function(t,e){t.commit("CHOSEN_PHOTOS",e),localStorage.wantsPhotos=e},setTimeSlot:function(t,e){t.commit("CHOSEN_TIMESLOT",e.slot,e.label),localStorage.selectedTimeslot=e.slot,localStorage.selectedTimeslotLabel=e.label},clearNavList:function(t){t.commit("CLEAR_NAV_LIST"),localStorage._navList=JSON.stringify(t.state._navList)},setNavListItem:function(t,e){t.commit("NAV_LIST",e),localStorage._navList=JSON.stringify(t.state._navList)},setCurrentStep:function(t,e){t.commit("CURRENT_STEP",e),localStorage._currentStep=e},setContactPhone:function(t,e){t.commit("CONTACT_PHONE",e),localStorage.contactPhone=e},setContactEmail:function(t,e){t.commit("CONTACT_EMAIL",e),localStorage.contactEmail=e},setOrderMessage:function(t,e){t.commit("ORDER_MESSAGE",e),localStorage.orderMessage=e},setPassengerFormValid:function(t,e){t.commit("PASSENGER_VALID",e),dt(t)},setPassengerSex:function(t,e){t.commit("PASSENGER_SEX",e),dt(t)},setPassengerAge:function(t,e){t.commit("PASSENGER_AGE",e),dt(t)},setPassengerName:function(t,e){t.commit("PASSENGER_NAME",e),dt(t)},setPassengerSpeed:function(t,e){t.commit("PASSENGER_SPEED",e),dt(t)},setPassengerWeight:function(t,e){t.commit("PASSENGER_WEIGHT",e),dt(t)},clearSlotsPassengers:function(t){t.commit("RESET_PASSENGERS"),localStorage.removeItem("slotPassengersObj")},setSlotPassengers:function(t,e){null===e&&console.log("Payload is null"),t.commit("NUMBER_PASSENGERS",e),localStorage.slotPassengersObj=JSON.stringify(t.state.slotPassengersObj)}},getters:{getFlightFromID:function(t){return function(e){if(gt(t._flightsList))return{};var a={};for(var n in t._flightsList)if(t._flightsList[n].id===e)return t._flightsList[n];return a}},getStoredPassengersInSlot:function(t){return function(e,a){if(e!=t.flightDate)return 0;var n=t.slotPassengersObj.slotsList[a];return void 0===n||null===n?0:n.passengers}},step_startValid:function(t){var e=""!==t.flightDate&&""!==t.selectedFlight;return e},step_timeValid:function(t){var e=t.timeSlot>-1&&""!==t.timeSlotLabel;return e},getPassengersList:function(t){for(var e=[],a=0;a<t.totalPassengers;a++){var n=JSON.parse(JSON.stringify(t.passengerObjList[a]));e[a]=n}return e},getTotalPassengers:function(t){return t.totalPassengers},getAllPassengersValid:function(t){for(var e=!0,a=0;a<t.totalPassengers;a++)if(void 0===t.passengerObjList[a]||!0!==t.passengerObjList[a].valid){e=!1;break}return e},getIsValidById:function(t){return function(e){var a=ft(t,e);return a.valid}},getSexById:function(t){return function(e){var a=ft(t,e);return a.sex}},getAgeById:function(t){return function(e){var a=ft(t,e);return a.age}},getNameById:function(t){return function(e){var a=ft(t,e);return a.name}},getSpeedById:function(t){return function(e){var a=ft(t,e);return a.speed}},getWeightById:function(t){return function(e){var a=ft(t,e);return a.weightKg}},getUsersDayIndex:function(t){return function(){var e=0,a=t.flightDate,n=t._timeListDates;if(null===n)return e;var i=0;return Object.keys(n).forEach((function(t){t===a&&(e=i),i+=1})),e}},getFlightObjById:function(t){return function(){var e=t._flightsList.find((function(e){return e.id===t.selectedFlight}));return e}}}});function ft(t,e){var a=t.passengerObjList.find((function(t){return t.id===e}));return"undefined"===typeof a&&(a=ht(e),t.passengerObjList.push(a)),a}function ht(t){var e=Object.assign({},rt);return e.id=t,e}function dt(t){localStorage.passengerObjList=JSON.stringify(t.state.passengerObjList)}function gt(t){return null==t||!(Object.keys(t).length>0)}n["default"].use(N["a"]);var pt=[{path:"/",name:"Start",component:et,meta:{title:"Book your Flight! Get Started"}},{path:"/time",name:"Time",component:function(){return a.e("TimeSlot").then(a.bind(null,"4cc7"))},meta:{title:"Choose the Time to fly"}},{path:"/info",name:"Info",component:function(){return Promise.all([a.e("Info~Pay"),a.e("Info")]).then(a.bind(null,"842f"))},meta:{title:"Contact Details & Passenger infos"}},{path:"/next",name:"Next",component:function(){return a.e("Next").then(a.bind(null,"fd7a"))},meta:{title:"What to do Next..."}},{path:"/pay",name:"Pay",component:function(){return Promise.all([a.e("Info~Pay"),a.e("Pay")]).then(a.bind(null,"2e0e"))},meta:{title:"Payment"}},{path:"/canceled",name:"Canceled",component:function(){return Promise.all([a.e("Info~Pay"),a.e("Pay")]).then(a.bind(null,"1e2d"))},meta:{title:"Payment Cancelled"}},{path:"/thanks",name:"Thanks",component:function(){return a.e("Thanks").then(a.bind(null,"ffb6"))},meta:{title:"Thanks for booking with FlyZermatt!"}}],mt=new N["a"]({mode:"history",base:"/",routes:pt,scrollBehavior:function(){return new Promise((function(t){setTimeout((function(){t({x:0,y:0})}),0)}))}});mt.afterEach((function(t){ut.dispatch("setCurrentStep",t.name)}));var vt=mt,St=(a("5363"),a("f309")),bt=a("fcf4");n["default"].use(St["a"]);var Dt=new St["a"]({theme:{themes:{light:{primary:bt["a"].purple.darken3,secondary:bt["a"].grey.darken1,accent:bt["a"].shades.black,error:bt["a"].red.accent3},dark:{primary:bt["a"].blue.lighten3}}}}),_t=a("353a"),yt=a.n(_t),Ot=a("3181"),Pt=a.n(Ot);yt.a.start({apiKey:"cb57aa27093fb50e11a5f5c1873a8923",plugins:[new Pt.a]}),n["default"].config.productionTip=!1,n["default"].mixin({methods:{capitaliseFirstLetter:function(t){return"string"!==typeof t?"":t.charAt(0).toUpperCase()+t.slice(1)},isObjEmpty:function(t){return null==t||!(Object.keys(t).length>0)}}}),new n["default"]({router:vt,store:ut,vuetify:Dt,i18n:W,render:function(t){return t(j)}}).$mount("#app"),yt.a.getPlugin("vue").installVueErrorHandler(n["default"]);var Et=a("f13c");n["default"].use(Et)},"6ce2":function(t){t.exports=JSON.parse('{"nav":{"continue":"Weiter","back":"Zurück"},"step-info":{"test":"Hallo i18n !!","title":"Datum & Flug","description":"TOTRANSLATE: Why we ask you for all of this information? To help us make sure you get the best possible experience... To make sure that we provide the highest levels of safety..","flightdate":"Flug Datum","whichflight":"Welcher Flug?","pleaseChooseFlightFirst":"Bitte wählen Sie zuerst ein Flugdatum aus...","photosvideos":"Fotos + Videos (optional)","photosvideos-description":"Gefilmt mit GoPros mit speziell gebauten Halterungen für einige tolle Erinnerungen!"},"step-timeslot":{"title":"Wie viele Personen fliegen?","description":"Klicken Sie auf eine Zeit um die Anzahl der Passagiere zu bestimmen die fliegen möchten.","large-group-tip":"Tipp: Bei grösseren Gruppen kann die Unterteilung über mehrere Zeiten erfolgen.","total-passengers":"Passagier insgesamt | Passagiere insgesamt","jump-original-date":"Zurück zum Originaldatum","selected-date":"Ausgewähltes Datum","places-free":"{n} Freie Plätze","passengers":"Passagiere"}}')},"85ec":function(t,e,a){},"98a6":function(t,e,a){"use strict";a("f12f")},af96:function(t,e,a){"use strict";a("27be")},d0d3:function(t,e,a){},dd11:function(t){t.exports=JSON.parse('{"nav":{"continue":"계속하다","back":"반환"},"step-info":{"test":"hello i18n !!","title":"날짜 및 항공편","description":"TO TRANSLATE: Why we ask you for all of this information? To help us make sure you get the best possible experience... To make sure that we provide the highest levels of safety..","flightdate":"비행 날짜","whichflight":"어느 항공편?","pleaseChooseFlightFirst":"Please choose a Flight Date first...","photosvideos":"사진 + 동영상 (선택 사항)","photosvideos-description":"특별한 추억을 위해 특별히 제작 된 스틱에 GoPro로 촬영했습니다!"},"step-timeslot":{"title":"얼마나 많은 사람들이 날고 있습니까?","description":"비행 할 승객 수를 선택하려면 시간을 클릭하십시오.","large-group-tip":"팁 : 더 큰 그룹은 두 번 이상으로 분할 될 수 있습니다.","total-passengers":"총 승객 | 총 승객","jump-original-date":"오리가 날 날짜로 이동","selected-date":"선택한 날짜","places-free":"{n} 개소 무료","passengers":"승객"}}')},e176:function(t,e,a){t.exports=a.p+"img/FlyZermatt-logo-light.893e1f8e.svg"},edd4:function(t){t.exports=JSON.parse('{"nav":{"continue":"Continue","back":"Back"},"step-info":{"test":"hello i18n !!","title":"Dates & Flight","description":"We need the following information to help us give you the best possible booking experience with the highest levels of safety.","flightdate":"Preferred Flight Date","arrivingDate":"Arriving in Zermatt?","departingDate":"Departing from Zermatt?","whichflight":"Which Flight?","pleaseChooseFlightFirst":"Please choose a Flight Date first...","noAvailableFlights":"No Schedule available for this date. Please call us.","photosvideos":"Photos + Videos (optional)","photosvideos-description":"Filmed with GoPros on specially built stcks for some great memories! (optional {price}.00 CHF per person)"},"step-timeslot":{"title":"How Many are Flying?","description":"Add the number of passengers to the times you would like to fly.","large-group-tip":"For larger groups, you can split your group over multiple times.","total-passengers":"Passenger in total | Passengers in total","jump-original-date":"Jump to Origanal Date","selected-date":"Selected Date","places-free":"{n} Place free | {n} Places free","passengers":"Passenger | Passengers"}}')},f12f:function(t,e,a){}});
//# sourceMappingURL=app.5c11faaa.js.map