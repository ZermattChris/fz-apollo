(function(t){function e(e){for(var a,s,r=e[0],c=e[1],l=e[2],u=0,f=[];u<r.length;u++)s=r[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&f.push(i[s][0]),i[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);h&&h(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,s=1;s<n.length;s++){var r=n[s];0!==i[r]&&(a=!1)}a&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},s={app:0},i={app:0},o=[];function r(t){return c.p+"js/"+({Info:"Info",Next:"Next",Pay:"Pay",Thanks:"Thanks",TimeSlot:"TimeSlot"}[t]||t)+"."+{Info:"127a8f66",Next:"0146f18b",Pay:"bcee15bc",Thanks:"266fd5a5",TimeSlot:"e1ab5c35"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={Info:1,Next:1,Pay:1,Thanks:1,TimeSlot:1};s[t]?e.push(s[t]):0!==s[t]&&n[t]&&e.push(s[t]=new Promise((function(e,n){for(var a="css/"+({Info:"Info",Next:"Next",Pay:"Pay",Thanks:"Thanks",TimeSlot:"TimeSlot"}[t]||t)+"."+{Info:"11c8c172",Next:"852eaf42",Pay:"7b0c3a3b",Thanks:"1d635b86",TimeSlot:"c3074ebe"}[t]+".css",i=c.p+a,o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var l=o[r],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===i))return e()}var f=document.getElementsByTagName("style");for(r=0;r<f.length;r++){l=f[r],u=l.getAttribute("data-href");if(u===a||u===i)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var a=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete s[t],h.parentNode.removeChild(h),n(o)},h.href=i;var g=document.getElementsByTagName("head")[0];g.appendChild(h)})).then((function(){s[t]=0})));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise((function(e,n){a=i[t]=[e,n]}));e.push(a[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=r(t);var f=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(h);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",f.name="ChunkLoadError",f.type=a,f.request=s,n[1](f)}i[t]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var f=0;f<l.length;f++)e(l[f]);var h=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"0996":function(t,e,n){},"191e":function(t,e,n){"use strict";n("ccc4")},"36ad":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"ml-n2 disable-select",domProps:{innerHTML:t._s(t.title)}}),n("p",[t._t("default",[t._v("Default Page Header text...")])],2),n("v-divider")],1)},s=[],i={name:"PageHeader",props:{title:{type:String,default:"Title Default"}}},o=i,r=n("2877"),c=n("6544"),l=n.n(c),u=n("ce7e"),f=Object(r["a"])(o,a,s,!1,null,"083faaa8",null);e["a"]=f.exports;l()(f,{VDivider:u["a"]})},"56d7":function(t,e,n){"use strict";n.r(e);n("fb6a"),n("b64b"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-overlay",{attrs:{opacity:"0.2",value:t.overlay}}),t.overlay?a("v-progress-circular",{staticStyle:{position:"absolute","z-index":"500",top:"30%",left:"50%","margin-top":"-32px","margin-left":"-32px"},attrs:{indeterminate:"",color:"primary",size:"64"}}):t._e(),a("v-app-bar",{attrs:{app:"",color:"primary",dark:"","hide-on-scroll":""}},[a("div",{staticClass:"d-flex align-center",attrs:{id:"logo"}},[a("v-img",{staticClass:"shrink ml-1",attrs:{alt:"FlyZermatt Logo",contain:"",src:n("e176"),transition:"scale-transition",width:"220"}})],1),a("LangMenu")],1),a("v-main",[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12",md:"1",lg:"2"}}),a("v-col",{staticClass:"pa-5 pa-sm-8 pa-md-12",attrs:{cols:"12",md:"10",lg:"8"}},[a("router-view")],1),a("v-col",{attrs:{cols:"12",md:"1",lg:"2"}})],1)],1),a("v-footer",{staticClass:"justify-end",staticStyle:{"min-height":"60px"},attrs:{color:"primary",dark:"",app:"",padless:""}},[a("v-btn",{staticClass:"text-capitalize",class:t.canGoBack?"":"hideBackBtn",staticStyle:{position:"absolute",left:"5px","z-index":"1000"},attrs:{text:""},on:{click:t.onBackBtnClick}},[a("v-icon",{attrs:{left:""}},[t._v(t._s(t.iconPrevChevron))]),t._v(" Back ")],1),a("div",{staticClass:"d-flex",staticStyle:{position:"absolute",width:"100%",height:"100%",top:"12px"}},[a("NavButton",{ref:"ContinueBtn",staticClass:"mx-auto"})],1),a("div",{staticClass:"hidden-xs-only white--text overline mr-2 text--secondary",staticStyle:{"text-align":"right"}},[t._v(" © "+t._s(t.getCurrentYear)+" - FlyZermatt ")]),a("div",{staticClass:"hidden-sm-and-up white--text overline mr-2 text-caption text--secondary",staticStyle:{"max-width":"140px","line-height":"1.2em","text-align":"right"}},[t._v(" © "+t._s(t.getCurrentYear)),a("br"),t._v(" FlyZermatt ")])],1),a("v-overlay",{attrs:{value:t.isAppStillLoading}})],1)},i=[],o=(n("b0c0"),n("96cf"),n("1da1")),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-btn",{attrs:{rounded:"",color:"white",elevation:"4",disabled:t.isDisabled},on:{click:t.navigate}},[t._v(" Continue "),n("v-icon",{attrs:{right:""}},[t._v(t._s(t.iconNextArrow))])],1)},c=[],l=n("94ed"),u={name:"NavButton",props:{},data:function(){return{isDisabled:!0,iconNextArrow:l["c"]}},created:function(){var t=this;this.$store.watch((function(t){return t._navList}),(function(){t.update()}),{deep:!0})},methods:{update:function(){var t=this.$route.name,e=this.$store.state._navList[t];this.isDisabled=!e},navigate:function(){var t=this.$store.state._currentStep;switch(t){case"Start":this.$store.dispatch("setCurrentStep","Time");break;case"Time":this.$store.dispatch("setCurrentStep","Info");break;case"Info":if(!1===this.$store.state._hasReviewedData)return void this.$store.dispatch("showReviewDialog",!0);this.$store.dispatch("setCurrentStep","Next");break;case"Next":this.$store.dispatch("setCurrentStep","Pay");break;case"Pay":this.$store.dispatch("setCurrentStep","Thanks");break;case"Thanks":return this.$store.dispatch("setCurrentStep","Completed"),void(window.location="http://www.flyzermatt.com")}var e=this.$store.state._currentStep;this.$router.push({path:e})}}},f=u,h=(n("7150"),n("2877")),g=n("6544"),d=n.n(g),p=n("8336"),m=n("132d"),v=Object(h["a"])(f,r,c,!1,null,"f05fa554",null),S=v.exports;d()(v,{VBtn:p["a"],VIcon:m["a"]});var b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-speed-dial",{attrs:{id:"language-menu",direction:"bottom",transition:"slide-y-transition"},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-btn",{staticClass:"white--text text-uppercase",attrs:{fab:"",small:""},model:{value:t.fabModel,callback:function(e){t.fabModel=e},expression:"fabModel"}},[t._v(" "+t._s(t.currentLangISO)+" ")])]},proxy:!0}]),model:{value:t.fabModel,callback:function(e){t.fabModel=e},expression:"fabModel"}},t._l(t.langISOList,(function(e,a){return n("v-btn",{key:a,staticClass:"primary--text text-uppercase",attrs:{hidden:e==t.currentLangISO,fab:"","x-small":"",color:"white"},on:{click:function(n){return t.onChooseLanguage(e)}}},[t._v(" "+t._s(e)+" ")])})),1)},_=[],O=(n("caad"),n("ac1f"),n("2532"),n("1276"),n("498a"),n("5530")),y={name:"LangMenu",props:{},data:function(){return{fabModel:!1,langISOList:["en","de","fr","kr"],currentLangISO:"en"}},mounted:function(){this.currentLangISO=this.getBroswerLangIfMatch(),console.log("Loaded default lang: ",this.currentLangISO)},methods:{onChooseLanguage:function(t){this.currentLangISO=t},getBroswerLangIfMatch:function(){var t=this.getBrowserLocale({countryCodeOnly:!0}),e=this.langISOList.includes(t);return e?t:"en"},getBrowserLocale:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e={countryCodeOnly:!1},n=Object(O["a"])(Object(O["a"])({},e),t),a=void 0!==navigator.languages?navigator.languages[0]:navigator.language;if(a){var s=n.countryCodeOnly?a.trim().split(/-|_/)[0]:a.trim();return s}}}},D=y,E=n("c73b"),L=Object(h["a"])(D,b,_,!1,null,"5f14c413",null),P=L.exports;d()(L,{VBtn:p["a"],VSpeedDial:E["a"]});var T=n("2230"),I=n("e3ee"),w=n("b166"),C={name:"App",components:{NavButton:S,LangMenu:P},data:function(){return{overlay:!1,overlayDelay:500,iconPrevChevron:l["i"],iconGarbageBin:l["o"],canGoBack:!1}},mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$store.dispatch("init");case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),console.error("My error",e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))()},beforeUpdate:function(){"Start"===this.$route.name?this.onEnableBackBtn(!1):this.onEnableBackBtn(!0)},beforeMount:function(){if(""!==this.flightDate){var t=Object(T["a"])(Date.now(),{days:this.$store.state._bookDaysOffset}),e=Object(I["a"])(this.$store.state.flightDate);t>e&&(this.$store.dispatch("setFlightDate",""),this.$store.dispatch("setFlight",""),this.$store.dispatch("setWantsPhotos",!1),this.$store.dispatch("clearSlotsPassengers"))}},updated:function(){this.$refs.ContinueBtn.update()},methods:{onEnableBackBtn:function(t){this.canGoBack=t},onBackBtnClick:function(){this.$router.go(-1)},onClearData:function(){if(!0===this.$store.state._DEV){this.$store.dispatch("setFlightDate",""),this.$store.dispatch("setFlight",""),this.$store.dispatch("setWantsPhotos",!1);var t={slot:-1,label:""};this.$store.dispatch("setTimeSlot",t),this.$store.dispatch("clearNavList"),this.$store.dispatch("setCurrentStep",""),this.$store.dispatch("setContactPhone",""),this.$store.dispatch("setContactEmail",""),this.$store.dispatch("clearSlotsPassengers"),"Start"!==this.$route.name&&this.$router.push("/"),window.location.reload()}}},computed:{_isDEV:function(){return this.$store.state._DEV},getCurrentYear:function(){return Object(w["a"])(Date.now(),"yyyy")},isAppStillLoading:function(){return this.$store.state._app_loading}},watch:{$route:function(t){document.title=t.meta.title||"Secure Booking at FlyZermatt Paragliding"}}},x=C,N=(n("034f"),n("7496")),k=n("40dc"),A=n("62ad"),j=n("553a"),$=n("adda"),F=n("f6c4"),M=n("a797"),V=n("490a"),R=n("0fd9"),B=Object(h["a"])(x,s,i,!1,null,null,null),G=B.exports;d()(B,{VApp:N["a"],VAppBar:k["a"],VBtn:p["a"],VCol:A["a"],VFooter:j["a"],VIcon:m["a"],VImg:$["a"],VMain:F["a"],VOverlay:M["a"],VProgressCircular:V["a"],VRow:R["a"]});n("d3b7");var H=n("8c4f"),W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"stepStart",staticClass:"page",attrs:{id:"step-start"}},[n("PageHeader",{attrs:{title:"1. Date and Flight"}},[t._v(" Why we ask you for all of this information? To help us make sure you get the best possible experience... To make sure that we provide the highest levels of safety.. ")]),n("div",{staticClass:"ml-n2 ml-sm-2 ml-md-8 ml-lg-12 pt-sm-2",staticStyle:{"max-width":"600px"},attrs:{id:"steps-controls"}},[n("h3",{staticClass:"disable-select",attrs:{id:"chooseFlightDate"}},[n("v-icon",{attrs:{color:t.flightDate?"success":"primary"}},[t._v(t._s(t.flightDate?t.stepIconCompleted:t.stepIcon))]),t._v(" Flight Date ")],1),n("div",{staticClass:"controls mb-0 mb-sm-2 mb-md-4"},[n("v-date-picker",{staticClass:"ml-10 mb-6 mb-sm-8 mb-md-10",staticStyle:{"min-width":"240px"},attrs:{scrollable:"","show-current":"",elevation:"4",min:t.flightMinDate,max:t.flightMaxDate,width:""},model:{value:t.flightDate,callback:function(e){t.flightDate=e},expression:"flightDate"}})],1),n("h3",{staticClass:"disable-select"},[n("v-icon",{attrs:{color:t.flightChosen?"success":"primary"}},[t._v(t._s(t.flightOptionsDropMenuList?t.stepIconCompleted:t.stepIcon)+" ")]),t._v(" Which Flight? ")],1),n("div",{staticClass:"controls mb-0 mb-sm-6 mb-md-10"},[n("v-select",{staticClass:"disable-select",staticStyle:{"max-width":"330px"},attrs:{items:t.flightOptionsDropMenuList,"item-text":"name","item-value":"id","prepend-icon":t.flightChosen?t.cloudIcon:t.cloudQuestionIcon,loading:t.flightOptionsLoaded,solo:"",outlined:"",disabled:!t.isValidFlightDate,hint:t.isValidFlightDate?"":"Please choose a Flight Date first...","persistent-hint":""},model:{value:t.flightChosen,callback:function(e){t.flightChosen=e},expression:"flightChosen"}})],1),n("h3",[n("v-icon",{attrs:{color:t.switchPhotos?"success":"primary"}},[t._v(t._s(t.cameraIcon))]),t._v(" Photos + Videos (optional) ")],1),n("div",{staticClass:"controls mb-0 mb-sm-6"},[n("v-switch",{staticClass:"ml-10",attrs:{id:"photosSwitch",color:"success",inset:"",label:"Filmed with GoPros on specially built sticks for some great memories!"},model:{value:t.switchPhotos,callback:function(e){t.switchPhotos=e},expression:"switchPhotos"}})],1)])],1)},J=[],X=(n("99af"),n("4fad"),n("3835")),K=n("36ad"),U={name:"Start",components:{PageHeader:K["a"]},props:{},data:function(){return{stepIcon:l["b"],stepIconCompleted:l["h"],cameraIcon:l["f"],cloudQuestionIcon:l["n"],cloudIcon:l["m"],calendarIcon:l["e"],infoIcon:l["u"],flightOptionsDropMenuList:this.buildFlightList(),flightMenu:!1,flightModal:!1,nrPeopleExceedsMaxPilots:!1,maxGroupSize:15,nrPeopleEnabled:!1,bigGroupDialog:!1,isPageValid:this.$store.getters.step_startValid}},beforeMount:function(){this.$store.dispatch("flightOptions")},beforeUpdate:function(){this.onValueChanged()},mounted:function(){return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},computed:{flightOptionsLoaded:function(){return this.$store.state._flightsList_loading},forWatchingBothFlightDateAndFlightType:function(){return"".concat(this.flightDate,"|").concat(this.flightChosen)},flightDate:{get:function(){return this.$store.state.flightDate},set:function(t){t!==this.$store.state.flightDate&&(this.$store.dispatch("setFlightDate",t),this.$store.dispatch("flightOptions"),this.buildFlightList(),this.$store.dispatch("clearSlotsPassengers"))}},flightChosen:{get:function(){return this.$store.state.selectedFlight},set:function(t){return this.$store.dispatch("setFlight",t)}},switchPhotos:{get:function(){return this.$store.state.wantsPhotos},set:function(t){return this.$store.dispatch("setWantsPhotos",t)}},flightMinDate:function(){var t=this.$store.state._bookDaysOffset;return Object(w["a"])(Object(T["a"])(Date.now(),{days:t}),"yyyy-MM-dd")},flightMaxDate:function(){var t=this.$store.state._bookMonthsOffset;return Object(w["a"])(Object(T["a"])(Date.now(),{months:t}),"yyyy-MM-dd")},flightsWatch:function(){return this.$store.state._flightsList},isValidFlightDate:function(){return""!==this.flightDate&&null!==this.flightDate},isValidFlightChosen:function(){return""!==this.flightDate&&""!==this.flightChosen},formatISODate:function(){if(""===this.flightDate)return"";var t=Object(I["a"])(this.flightDate),e=Object(w["a"])(t,"PPPP");return e}},methods:{scrollToFormTop:function(){var t=this;setTimeout((function(){t.$scrollTo("#chooseFlightDate",500)}),100)},onValueChanged:function(){if(this.$store.getters.step_startValid){var t={Start:!0};this.$store.dispatch("setNavListItem",t)}else{var e={Start:!1};this.$store.dispatch("setNavListItem",e)}},buildFlightList:function(){var t=this.$store.state._flightsList;if(!this.isObjEmpty(t)){for(var e=[],n=0,a=Object.entries(t);n<a.length;n++){var s=Object(X["a"])(a[n],2),i=s[0],o=s[1],r={id:"".concat(i),name:"".concat(o)};e.push(r)}return e}}},watch:{forWatchingBothFlightDateAndFlightType:function(){""!==this.flightChosen&&(this.$store.dispatch("timeListDates"),this.onValueChanged())},flightsWatch:function(){this.flightOptionsDropMenuList=this.buildFlightList()},flightDate:function(){console.log("Chosen Date: "+this.flightDate)}}},z=U,Z=(n("191e"),n("2e4b")),Y=n("b974"),q=n("b73d"),Q=Object(h["a"])(z,W,J,!1,null,"378e751e",null),tt=Q.exports;d()(Q,{VDatePicker:Z["a"],VIcon:m["a"],VSelect:Y["a"],VSwitch:q["a"]});n("7db0"),n("4160"),n("07ac"),n("4c53"),n("159b");var et=n("b85c"),nt=n("2f62"),at=n("bc3a"),st=n.n(at),it=n("6ff4");a["default"].use(nt["a"]);var ot={Start:!1,Time:!1,Info:!1,Next:!1,Pay:!1,Thanks:!1},rt={id:null,valid:!1,sex:null,age:null,name:"",speed:6,weightKg:25},ct={selectedDate:"",slotsList:[]},lt=function(){var t=localStorage.slotPassengersObj?JSON.parse(localStorage.slotPassengersObj):{},e=0,n=t.slotsList;if(void 0!==n&&null!==n){var a,s=Object(et["a"])(n);try{for(s.s();!(a=s.n()).done;){var i=a.value;null!==i&&(e+=i.passengers)}}catch(o){s.e(o)}finally{s.f()}}return e},ut=new nt["a"].Store({state:{_DEV:!0,totalPassengers:lt(),flightDate:localStorage.flightDate||"",selectedFlight:localStorage.selectedFlight||"",wantsPhotos:!!localStorage.wantsPhotos&&JSON.parse(localStorage.wantsPhotos),timeSlot:+localStorage.selectedTimeslot||-1,timeSlotLabel:localStorage.selectedTimeslotLabel||"",contactPhone:sessionStorage.contactPhone||"",contactEmail:sessionStorage.contactEmail||"",passengerObjList:localStorage.passengerObjList?JSON.parse(localStorage.passengerObjList):[],slotPassengersObj:localStorage.slotPassengersObj?JSON.parse(localStorage.slotPassengersObj):ct,_activeDate:"",_bookDaysOffset:0,_bookMonthsOffset:0,_videoPrice:-1,_flightsList:null,_timeListDates:localStorage._timeListDates?JSON.parse(localStorage._timeListDates):{},_app_loading:!0,_flightsList_loading:!1,_timeList_loading:!0,_navList:localStorage._navList?JSON.parse(localStorage._navList):ot,_currentStep:localStorage._currentStep||"",_hasReviewedData:!1,_showReviewDialog:!1},mutations:{HAS_REVIEWED_DATA:function(t,e){t._hasReviewedData=e},SHOW_REVIEW_DIALOG:function(t,e){t._showReviewDialog=e},APP_LOADING:function(t,e){t._app_loading=e},FLIGHTSLIST_LOADING:function(t,e){t._flightsList_loading=e},TIMELIST_LOADING:function(t,e){t._timeList_loading=e},TIMELIST_DATES:function(t,e){t._timeListDates=e,localStorage._timeListDates=JSON.stringify(t._timeListDates)},BOOK_DAYS_OFFSET:function(t,e){t._bookDaysOffset=e},BOOK_MONTS_OFFSET:function(t,e){t._bookMonthsOffset=e},VIDEO_PRICE:function(t,e){t._videoPrice=e},ACTIVE_DATE:function(t,e){t._activeDate=e},CHOSEN_DATE:function(t,e){t.flightDate=e},CHOSEN_FLIGHT:function(t,e){t.selectedFlight=e},CHOSEN_PHOTOS:function(t,e){t.wantsPhotos=e},CHOSEN_TIMESLOT:function(t,e,n){t.timeSlot=e,t.timeSlotLabel=n},CONTACT_PHONE:function(t,e){t.contactPhone=e},CONTACT_EMAIL:function(t,e){t.contactEmail=e},FLIGHTS_LIST:function(t,e){t._flightsList=e},CLEAR_NAV_LIST:function(t){t._navList=ot},NAV_LIST:function(t,e){t._navList[Object.keys(e)[0]]=Object.values(e)[0]},CURRENT_STEP:function(t,e){t._currentStep=e},PASSENGER_VALID:function(t,e){var n=ft(t,e.passengerId);n.valid=e.valid},PASSENGER_SEX:function(t,e){var n=ft(t,e.passengerId);n.sex=e.sexStr},PASSENGER_AGE:function(t,e){var n=ft(t,e.passengerId);n.age=e.ageInt},PASSENGER_NAME:function(t,e){var n=ft(t,e.passengerId);n.name=e.nameStr},PASSENGER_SPEED:function(t,e){var n=ft(t,e.passengerId);n.speed=e.speedInt},PASSENGER_WEIGHT:function(t,e){var n=ft(t,e.passengerId);n.weightKg=e.weightInt},SLOT_SELECTED_DATE:function(t,e){t.slotPassengersObj.selectedDate!==t.flightDate&&(t.slotPassengersObj.selectedDate="",t.slotPassengersObj.slotsList=[]),t.slotPassengersObj.selectedDate=e},NUMBER_PASSENGERS:function(t,e){t.slotPassengersObj.selectedDate!==t.flightDate&&(t.slotPassengersObj=ct,t.slotPassengersObj.selectedDate=t.flightDate),t.slotPassengersObj.slotsList[e.index]={timeString:e.timeString,passengers:e.passengers};var n,a=0,s=Object(et["a"])(t.slotPassengersObj.slotsList);try{for(s.s();!(n=s.n()).done;){var i=n.value;void 0!==i&&null!==i&&(a+=i.passengers)}}catch(o){s.e(o)}finally{s.f()}t.totalPassengers=a},RESET_PASSENGERS:function(t){t.totalPassengers=0,t.slotPassengersObj=ct,localStorage.removeItem("slotPassengersObj")}},actions:{timeListDates:function(t){return Object(o["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit("TIMELIST_LOADING",!0),n=t.state.flightDate,e.abrupt("return",st.a.get("https://XXXXXXXXX-bookings-dev.simpleitsolutions.ch/onlinebooking/flightschedules/"+n).then((function(e){var n=e.data;t.commit("TIMELIST_DATES",n)})).catch((function(e){t.state._DEV&&(console.log("Temp dev data being generated for FlightDates in store -> timeListDates(). ",e),t.commit("TIMELIST_DATES",dt(n)))})).finally((function(){return t.commit("TIMELIST_LOADING",!1)})));case 3:case"end":return e.stop()}}),e)})))()},init:function(t){return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",st.a.get("https://bookings-dev.simpleitsolutions.ch/onlinebooking/init").then((function(e){var n=e.data;t.commit("BOOK_DAYS_OFFSET",+n["book-days-from-today"]),t.commit("BOOK_MONTS_OFFSET",+n["book-future-months"]),t.commit("VIDEO_PRICE",+n["video-cost"])})).catch((function(t){console.log(t)})).finally((function(){return t.commit("APP_LOADING",!1)})));case 1:case"end":return e.stop()}}),e)})))()},flightOptions:function(t){return Object(o["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.state.flightDate,""!==n){e.next=3;break}return e.abrupt("return");case 3:return t.commit("FLIGHTSLIST_LOADING",!0),e.abrupt("return",st.a.get("https://fz-backend.simpleitsolutions.ch/onlinebooking/api/flightoptions/"+n).then((function(e){var n=e.data;t.commit("FLIGHTS_LIST",n)})).catch((function(t){console.log(t)})).finally((function(){return t.commit("FLIGHTSLIST_LOADING",!1)})));case 5:case"end":return e.stop()}}),e)})))()},setFlightsList:function(t,e){t.commit("FLIGHTS_LIST",e)},hasReviewedData:function(t,e){t.commit("HAS_REVIEWED_DATA",e)},showReviewDialog:function(t,e){t.commit("SHOW_REVIEW_DIALOG",e)},setFlightDate:function(t,e){t.commit("CHOSEN_DATE",e),localStorage.flightDate=e,t.commit("SLOT_SELECTED_DATE",e)},setActiveDate:function(t,e){t.commit("ACTIVE_DATE",e)},setFlight:function(t,e){t.commit("CHOSEN_FLIGHT",e),localStorage.selectedFlight=e},setWantsPhotos:function(t,e){t.commit("CHOSEN_PHOTOS",e),localStorage.wantsPhotos=e},setTimeSlot:function(t,e){t.commit("CHOSEN_TIMESLOT",e.slot,e.label),localStorage.selectedTimeslot=e.slot,localStorage.selectedTimeslotLabel=e.label},clearNavList:function(t){t.commit("CLEAR_NAV_LIST"),localStorage._navList=JSON.stringify(t.state._navList)},setNavListItem:function(t,e){t.commit("NAV_LIST",e),localStorage._navList=JSON.stringify(t.state._navList)},setCurrentStep:function(t,e){t.commit("CURRENT_STEP",e),localStorage._currentStep=e},setContactPhone:function(t,e){t.commit("CONTACT_PHONE",e),sessionStorage.contactPhone=e},setContactEmail:function(t,e){t.commit("CONTACT_EMAIL",e),sessionStorage.contactEmail=e},setPassengerFormValid:function(t,e){t.commit("PASSENGER_VALID",e),gt(t)},setPassengerSex:function(t,e){t.commit("PASSENGER_SEX",e),gt(t)},setPassengerAge:function(t,e){t.commit("PASSENGER_AGE",e),gt(t)},setPassengerName:function(t,e){t.commit("PASSENGER_NAME",e),gt(t)},setPassengerSpeed:function(t,e){t.commit("PASSENGER_SPEED",e),gt(t)},setPassengerWeight:function(t,e){t.commit("PASSENGER_WEIGHT",e),gt(t)},clearSlotsPassengers:function(t){t.commit("RESET_PASSENGERS"),localStorage.removeItem("slotPassengersObj")},setSlotPassengers:function(t,e){null===e&&console.log("Payload is null"),t.commit("NUMBER_PASSENGERS",e),localStorage.slotPassengersObj=JSON.stringify(t.state.slotPassengersObj)}},getters:{getStoredPassengersInSlot:function(t){return function(e,n){if(e!=t.flightDate)return 0;var a=t.slotPassengersObj.slotsList[n];return void 0===a||null===a?0:a.passengers}},step_startValid:function(t){var e=""!==t.flightDate&&""!==t.selectedFlight;return e},step_timeValid:function(t){var e=t.timeSlot>-1&&""!==t.timeSlotLabel;return e},getPassengersList:function(t){for(var e=[],n=0;n<t.totalPassengers;n++){var a=JSON.parse(JSON.stringify(t.passengerObjList[n]));e[n]=a}return e},getTotalPassengers:function(t){return t.totalPassengers},getAllPassengersValid:function(t){for(var e=!0,n=0;n<t.totalPassengers;n++)if(!0!==t.passengerObjList[n].valid){e=!1;break}return e},getIsValidById:function(t){return function(e){var n=ft(t,e);return n.valid}},getSexById:function(t){return function(e){var n=ft(t,e);return n.sex}},getAgeById:function(t){return function(e){var n=ft(t,e);return n.age}},getNameById:function(t){return function(e){var n=ft(t,e);return n.name}},getSpeedById:function(t){return function(e){var n=ft(t,e);return n.speed}},getWeightById:function(t){return function(e){var n=ft(t,e);return n.weightKg}},getUsersDayIndex:function(t){return function(){var e=0,n=t.flightDate,a=t._timeListDates;if(null===a)return e;var s=0;return Object.keys(a).forEach((function(t){t===n&&(e=s),s+=1})),e}}}});function ft(t,e){var n=t.passengerObjList.find((function(t){return t.id===e}));return"undefined"===typeof n&&(n=ht(e),t.passengerObjList.push(n)),n}function ht(t){var e=Object.assign({},rt);return e.id=t,e}function gt(t){localStorage.passengerObjList=JSON.stringify(t.state.passengerObjList)}function dt(t){var e=14,n=7,a=it.differenceInDays(new Date(t),new Date);a<n&&(n=a);for(var s=it.sub(new Date(t),{days:n}),i={},o=function(t){var e=it.format(s,"yyyy-MM-dd"),n=["08:30","10:15","11:45","13:15","14:45","16:15","17:00","19:00"],a={};n.forEach((function(t){var e=Math.floor(7*Math.random());a[t]=e})),i[e]=a,s=it.add(s,{days:1})},r=0;r<e;r++)o(r);return i}a["default"].use(H["a"]);var pt=[{path:"/",name:"Start",component:tt,meta:{title:"Book your Flight! Get Started"}},{path:"/time",name:"Time",component:function(){return n.e("TimeSlot").then(n.bind(null,"4cc7"))},meta:{title:"Choose the Time to fly"}},{path:"/info",name:"Info",component:function(){return n.e("Info").then(n.bind(null,"842f"))},meta:{title:"Contact Details & Passenger infos"}},{path:"/next",name:"Next",component:function(){return n.e("Next").then(n.bind(null,"fd7a"))},meta:{title:"What to do Next..."}},{path:"/pay",name:"Pay",component:function(){return n.e("Pay").then(n.bind(null,"2e0e"))},meta:{title:"Payment Gateway"}},{path:"/thanks",name:"Thanks",component:function(){return n.e("Thanks").then(n.bind(null,"ffb6"))},meta:{title:"Thanks for booking with FlyZermatt!"}}],mt=new H["a"]({mode:"history",base:"/",routes:pt,scrollBehavior:function(){return new Promise((function(t){setTimeout((function(){t({x:0,y:0})}),0)}))}});mt.afterEach((function(t){ut.dispatch("setCurrentStep",t.name)}));var vt=mt,St=(n("5363"),n("f309")),bt=n("fcf4");a["default"].use(St["a"]);var _t=new St["a"]({theme:{themes:{light:{primary:bt["a"].purple.darken3,secondary:bt["a"].grey.darken1,accent:bt["a"].shades.black,error:bt["a"].red.accent3},dark:{primary:bt["a"].blue.lighten3}}}}),Ot=n("353a"),yt=n.n(Ot),Dt=n("3181"),Et=n.n(Dt);yt.a.start({apiKey:"cb57aa27093fb50e11a5f5c1873a8923",plugins:[new Et.a]}),a["default"].config.productionTip=!1,a["default"].mixin({methods:{capitaliseFirstLetter:function(t){return"string"!==typeof t?"":t.charAt(0).toUpperCase()+t.slice(1)},isObjEmpty:function(t){return null==t||!(Object.keys(t).length>0)}}}),new a["default"]({router:vt,store:ut,vuetify:_t,render:function(t){return t(G)}}).$mount("#app"),yt.a.getPlugin("vue").installVueErrorHandler(a["default"]);var Lt=n("f13c");a["default"].use(Lt)},7150:function(t,e,n){"use strict";n("0996")},"85ec":function(t,e,n){},ccc4:function(t,e,n){},e176:function(t,e,n){t.exports=n.p+"img/FlyZermatt-logo-light.893e1f8e.svg"}});
//# sourceMappingURL=app.b26286c0.js.map