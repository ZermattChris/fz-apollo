(function(t){function e(e){for(var a,s,r=e[0],c=e[1],l=e[2],u=0,h=[];u<r.length;u++)s=r[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&h.push(i[s][0]),i[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);f&&f(e);while(h.length)h.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,s=1;s<n.length;s++){var r=n[s];0!==i[r]&&(a=!1)}a&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},s={app:0},i={app:0},o=[];function r(t){return c.p+"js/"+({Info:"Info",Next:"Next",Pay:"Pay",Thanks:"Thanks",TimeSlot:"TimeSlot"}[t]||t)+"."+{Info:"caea80b7",Next:"da7d542f",Pay:"e72e8426",Thanks:"388ccf32",TimeSlot:"d58eba88"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={Info:1,Next:1,Pay:1,Thanks:1,TimeSlot:1};s[t]?e.push(s[t]):0!==s[t]&&n[t]&&e.push(s[t]=new Promise((function(e,n){for(var a="css/"+({Info:"Info",Next:"Next",Pay:"Pay",Thanks:"Thanks",TimeSlot:"TimeSlot"}[t]||t)+"."+{Info:"a2447e3c",Next:"852eaf42",Pay:"7b0c3a3b",Thanks:"1d635b86",TimeSlot:"2c15aa26"}[t]+".css",i=c.p+a,o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var l=o[r],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===i))return e()}var h=document.getElementsByTagName("style");for(r=0;r<h.length;r++){l=h[r],u=l.getAttribute("data-href");if(u===a||u===i)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete s[t],f.parentNode.removeChild(f),n(o)},f.href=i;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){s[t]=0})));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise((function(e,n){a=i[t]=[e,n]}));e.push(a[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=r(t);var h=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(f);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;h.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",h.name="ChunkLoadError",h.type=a,h.request=s,n[1](h)}i[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var h=0;h<l.length;h++)e(l[h]);var f=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),s=n.n(a);s.a},"1f1e":function(t,e,n){"use strict";var a=n("5261"),s=n.n(a);s.a},3516:function(t,e,n){},"36ad":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"ml-n2 disable-select",domProps:{innerHTML:t._s(t.title)}}),n("p",[t._t("default",[t._v("Default Page Header text...")])],2),n("v-divider")],1)},s=[],i={name:"PageHeader",props:{title:{type:String,default:"Title Default"}}},o=i,r=n("2877"),c=n("6544"),l=n.n(c),u=n("ce7e"),h=Object(r["a"])(o,a,s,!1,null,"083faaa8",null);e["a"]=h.exports;l()(h,{VDivider:u["a"]})},5261:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("fb6a"),n("b64b"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-overlay",{attrs:{opacity:"0.2",value:t.overlay}}),t.overlay?a("v-progress-circular",{staticStyle:{position:"absolute","z-index":"500",top:"30%",left:"50%","margin-top":"-32px","margin-left":"-32px"},attrs:{indeterminate:"",color:"primary",size:"64"}}):t._e(),a("v-app-bar",{attrs:{app:"",color:"primary",dark:"","hide-on-scroll":""}},[a("div",{staticClass:"d-flex align-center",attrs:{id:"logo"}},[a("v-img",{staticClass:"shrink mr-2",attrs:{alt:"FlyZermatt Logo",contain:"",src:n("e176"),transition:"scale-transition",width:"220"}})],1),t._isDEV?a("v-btn",{staticClass:"text-uppercase ",staticStyle:{position:"absolute",right:"5px"},attrs:{text:""},on:{click:t.onClearData}},[a("v-icon",{attrs:{left:""}},[t._v(t._s(t.iconGarbageBin))]),t._v(" Reset ")],1):t._e()],1),a("v-main",[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12",md:"1",lg:"2"}}),a("v-col",{staticClass:"pa-5 pa-sm-8 pa-md-12",attrs:{cols:"12",md:"10",lg:"8"}},[a("router-view")],1),a("v-col",{attrs:{cols:"12",md:"1",lg:"2"}})],1)],1),a("v-footer",{staticClass:"justify-end",staticStyle:{"min-height":"60px"},attrs:{color:"primary",dark:"",app:"",padless:""}},[a("v-btn",{staticClass:"text-capitalize",class:t.canGoBack?"":"hideBackBtn",staticStyle:{position:"absolute",left:"5px","z-index":"1000"},attrs:{text:""},on:{click:t.onBackBtnClick}},[a("v-icon",{attrs:{left:""}},[t._v(t._s(t.iconPrevChevron))]),t._v(" Back ")],1),a("div",{staticClass:"d-flex",staticStyle:{position:"absolute",width:"100%",height:"100%",top:"12px"}},[a("NavButton",{ref:"ContinueBtn",staticClass:"mx-auto"})],1),a("div",{staticClass:"hidden-xs-only white--text overline mr-2 text--secondary",staticStyle:{"text-align":"right"}},[t._v(" © "+t._s(t.getCurrentYear)+" - FlyZermatt ")]),a("div",{staticClass:"hidden-sm-and-up white--text overline mr-2 text-caption text--secondary",staticStyle:{"max-width":"140px","line-height":"1.2em","text-align":"right"}},[t._v(" © "+t._s(t.getCurrentYear)),a("br"),t._v(" FlyZermatt ")])],1),a("v-overlay",{attrs:{value:t.isAppStillLoading}})],1)},i=[],o=(n("b0c0"),n("96cf"),n("1da1")),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-btn",{attrs:{rounded:"",color:"white",elevation:"4",disabled:t.isDisabled},on:{click:t.navigate}},[t._v(" Continue "),n("v-icon",{attrs:{right:""}},[t._v(t._s(t.iconNextArrow))])],1)},c=[],l=n("94ed"),u={name:"NavButton",props:{},data:function(){return{isDisabled:!0,iconNextArrow:l["c"]}},created:function(){var t=this;this.$store.watch((function(t){return t._navList}),(function(){t.update()}),{deep:!0})},methods:{update:function(){var t=this.$route.name,e=this.$store.state._navList[t];this.isDisabled=!e},navigate:function(){var t=this.$store.state._currentStep;switch(t){case"Start":this.$store.dispatch("setCurrentStep","Time");break;case"Time":this.$store.dispatch("setCurrentStep","Info");break;case"Info":if(!1===this.$store.state._hasReviewedData)return void this.$store.dispatch("showReviewDialog",!0);this.$store.dispatch("setCurrentStep","Next");break;case"Next":this.$store.dispatch("setCurrentStep","Pay");break;case"Pay":this.$store.dispatch("setCurrentStep","Thanks");break;case"Thanks":return this.$store.dispatch("setCurrentStep","Completed"),void(window.location="http://www.flyzermatt.com")}var e=this.$store.state._currentStep;this.$router.push({path:e})}}},h=u,f=(n("1f1e"),n("2877")),d=n("6544"),g=n.n(d),p=n("8336"),m=n("132d"),v=Object(f["a"])(h,r,c,!1,null,"62a82ac8",null),S=v.exports;g()(v,{VBtn:p["a"],VIcon:m["a"]});var b=n("b166"),_={name:"App",components:{NavButton:S},mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$store.dispatch("init");case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),console.error("My error",e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))()},beforeUpdate:function(){"Start"===this.$route.name?this.onEnableBackBtn(!1):this.onEnableBackBtn(!0)},beforeCreate:function(){},updated:function(){this.$refs.ContinueBtn.update()},data:function(){return{overlay:!1,overlayDelay:500,iconPrevChevron:l["i"],iconGarbageBin:l["o"],canGoBack:!1}},methods:{onEnableBackBtn:function(t){this.canGoBack=t},onBackBtnClick:function(){this.$router.go(-1)},onClearData:function(){if(!0===this.$store.state._DEV){this.$store.dispatch("setNrPeople",0),this.$store.dispatch("setFlightDate",""),this.$store.dispatch("setFlight",""),this.$store.dispatch("setWantsPhotos",!1);var t={slot:-1,label:""};this.$store.dispatch("setTimeSlot",t),this.$store.dispatch("clearNavList"),this.$store.dispatch("setCurrentStep",""),this.$store.dispatch("setContactPhone",""),this.$store.dispatch("setContactEmail",""),this.$store.dispatch("clearSlotsPassengers"),this.$router.push("/"),window.location.reload()}}},computed:{_isDEV:function(){return this.$store.state._DEV},getCurrentYear:function(){return Object(b["a"])(Date.now(),"yyyy")},isAppStillLoading:function(){return this.$store.state._app_loading}},watch:{$route:function(t){document.title=t.meta.title||"Secure Booking at FlyZermatt Paragliding"}}},E=_,O=(n("034f"),n("7496")),P=n("40dc"),y=n("62ad"),D=n("553a"),T=n("adda"),L=n("f6c4"),I=n("a797"),C=n("490a"),w=n("0fd9"),N=Object(f["a"])(E,s,i,!1,null,null,null),x=N.exports;g()(N,{VApp:O["a"],VAppBar:P["a"],VBtn:p["a"],VCol:y["a"],VFooter:D["a"],VIcon:m["a"],VImg:T["a"],VMain:L["a"],VOverlay:I["a"],VProgressCircular:C["a"],VRow:w["a"]});n("d3b7");var A=n("8c4f"),k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"stepStart",staticClass:"page",attrs:{id:"step-start"}},[n("PageHeader",{attrs:{title:"1. Get Started..."}},[t._v(" Why we ask you for all of this information? To help us make sure you get the best possible experience... To make sure that we provide the highest levels of safety.. ")]),n("div",{staticClass:"ml-n2 ml-sm-2 ml-md-8 ml-lg-12 pt-sm-2",staticStyle:{"max-width":"600px"},attrs:{id:"steps-controls"}},[n("h3",{staticClass:"disable-select",attrs:{id:"chooseFlightDate"}},[n("v-icon",{attrs:{color:t.flightDate?"success":"primary"}},[t._v(t._s(t.flightDate?t.stepIconCompleted:t.stepIcon))]),t._v(" Flight Date ")],1),n("div",{staticClass:"controls mb-0 mb-sm-2 mb-md-4"},[n("v-date-picker",{staticClass:"ml-10 mb-6 mb-sm-8 mb-md-10",staticStyle:{"min-width":"240px"},attrs:{scrollable:"","show-current":"",elevation:"4",min:t.flightMinDate,max:t.flightMaxDate,width:""},model:{value:t.flightDate,callback:function(e){t.flightDate=e},expression:"flightDate"}})],1),n("h3",{staticClass:"disable-select"},[n("v-icon",{attrs:{color:t.flightChosen?"success":"primary"}},[t._v(t._s(t.flightOptionsDropMenuList?t.stepIconCompleted:t.stepIcon)+" ")]),t._v(" Which Flight? ")],1),n("div",{staticClass:"controls mb-0 mb-sm-6 mb-md-10"},[n("v-select",{staticClass:"disable-select",staticStyle:{"max-width":"330px"},attrs:{items:t.flightOptionsDropMenuList,"item-text":"name","item-value":"id","prepend-icon":t.flightChosen?t.cloudIcon:t.cloudQuestionIcon,loading:t.flightOptionsLoaded,solo:"",outlined:"",disabled:!t.isValidFlightDate,hint:t.isValidFlightDate?"":"Please choose a Flight Date first...","persistent-hint":""},model:{value:t.flightChosen,callback:function(e){t.flightChosen=e},expression:"flightChosen"}})],1),n("h3",[n("v-icon",{attrs:{color:t.switchPhotos?"success":"primary"}},[t._v(t._s(t.cameraIcon))]),t._v(" Photos + Videos (optional) ")],1),n("div",{staticClass:"controls mb-0 mb-sm-6"},[n("v-switch",{staticClass:"ml-10",attrs:{id:"photosSwitch",color:"success",inset:"",label:"Filmed with GoPros on specially built sticks for some great memories!"},model:{value:t.switchPhotos,callback:function(e){t.switchPhotos=e},expression:"switchPhotos"}})],1)])],1)},j=[],F=(n("99af"),n("4fad"),n("3835")),$=n("2230"),V=n("e3ee"),R=n("36ad"),G={name:"Start",components:{PageHeader:R["a"]},props:{},data:function(){return{stepIcon:l["b"],stepIconCompleted:l["h"],cameraIcon:l["f"],cloudQuestionIcon:l["n"],cloudIcon:l["m"],calendarIcon:l["e"],infoIcon:l["u"],flightOptionsDropMenuList:this.buildFlightList(),flightMenu:!1,flightModal:!1,nrPeopleExceedsMaxPilots:!1,maxGroupSize:15,nrPeopleEnabled:!1,bigGroupDialog:!1,isPageValid:this.$store.getters.step_startValid}},beforeMount:function(){this.$store.dispatch("flightOptions")},beforeUpdate:function(){this.onValueChanged()},mounted:function(){return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},computed:{flightOptionsLoaded:function(){return this.$store.state._flightsList_loading},forWatchingBothFlightDateAndFlightType:function(){return"".concat(this.flightDate,"|").concat(this.flightChosen)},flightDate:{get:function(){return this.$store.state.flightDate},set:function(t){t!==this.$store.state.flightDate&&(this.$store.dispatch("setFlightDate",t),this.$store.dispatch("flightOptions"),this.buildFlightList(),this.$store.dispatch("clearSlotsPassengers"))}},flightChosen:{get:function(){return this.$store.state.selectedFlight},set:function(t){return this.$store.dispatch("setFlight",t)}},switchPhotos:{get:function(){return this.$store.state.wantsPhotos},set:function(t){return this.$store.dispatch("setWantsPhotos",t)}},flightMinDate:function(){var t=this.$store.state._bookDaysOffset;return Object(b["a"])(Object($["a"])(Date.now(),{days:t}),"yyyy-MM-dd")},flightMaxDate:function(){var t=this.$store.state._bookMonthsOffset;return Object(b["a"])(Object($["a"])(Date.now(),{months:t}),"yyyy-MM-dd")},flightsWatch:function(){return this.$store.state._flightsList},isValidFlightDate:function(){return""!==this.flightDate&&null!==this.flightDate},isValidFlightChosen:function(){return""!==this.flightDate&&""!==this.flightChosen},formatISODate:function(){if(""===this.flightDate)return"";var t=Object(V["a"])(this.flightDate),e=Object(b["a"])(t,"PPPP");return e}},methods:{scrollToFormTop:function(){var t=this;setTimeout((function(){t.$scrollTo("#chooseFlightDate",500)}),100)},onValueChanged:function(){if(this.$store.getters.step_startValid){var t={Start:!0};this.$store.dispatch("setNavListItem",t)}else{var e={Start:!1};this.$store.dispatch("setNavListItem",e)}},buildFlightList:function(){var t=this.$store.state._flightsList;if(!this.isObjEmpty(t)){for(var e=[],n=0,a=Object.entries(t);n<a.length;n++){var s=Object(F["a"])(a[n],2),i=s[0],o=s[1],r={id:"".concat(i),name:"".concat(o)};e.push(r)}return e}}},watch:{forWatchingBothFlightDateAndFlightType:function(){""!==this.flightChosen&&(this.$store.dispatch("timeListDates"),this.onValueChanged())},flightsWatch:function(){this.flightOptionsDropMenuList=this.buildFlightList()},flightDate:function(){console.log("Chosen Date: "+this.flightDate)}}},B=G,M=(n("cb79"),n("2e4b")),H=n("b974"),W=n("b73d"),J=Object(f["a"])(B,k,j,!1,null,"6a37421a",null),X=J.exports;g()(J,{VDatePicker:M["a"],VIcon:m["a"],VSelect:H["a"],VSwitch:W["a"]});n("7db0"),n("4160"),n("07ac"),n("4c53"),n("159b");var K=n("b85c"),U=n("2f62"),z=n("bc3a"),Z=n.n(z),Y=n("359c"),q=n("6ff4");a["default"].use(U["a"]);var Q={Start:!1,Time:!1,Info:!1,Next:!1,Pay:!1,Thanks:!1},tt={id:null,valid:!1,sex:null,age:null,name:"",speed:6,weightKg:25},et={selectedDate:"",slotsList:[]},nt=function(){var t=localStorage.slotPassengersObj?JSON.parse(localStorage.slotPassengersObj):{},e=0,n=t.slotsList;if(void 0!==n&&null!==n){var a,s=Object(K["a"])(n);try{for(s.s();!(a=s.n()).done;){var i=a.value;null!==i&&(e+=i.passengers)}}catch(o){s.e(o)}finally{s.f()}}return e},at=new U["a"].Store({state:{_DEV:!0,totalPassengers:nt(),nrPeople:+localStorage.nrPeople||0,flightDate:localStorage.flightDate||"",selectedFlight:localStorage.selectedFlight||"",wantsPhotos:!!localStorage.wantsPhotos&&JSON.parse(localStorage.wantsPhotos),timeSlot:+localStorage.selectedTimeslot||-1,timeSlotLabel:localStorage.selectedTimeslotLabel||"",contactPhone:localStorage.contactPhone||"",contactEmail:localStorage.contactEmail||"",passengerObjList:localStorage.passengerObjList?JSON.parse(localStorage.passengerObjList):[],slotPassengersObj:localStorage.slotPassengersObj?JSON.parse(localStorage.slotPassengersObj):et,_activeDate:"",_maxPilots:-1,_bookDaysOffset:-1,_bookMonthsOffset:-1,_videoPrice:-1,_flightsList:null,_timeListDates:localStorage._timeListDates?JSON.parse(localStorage._timeListDates):{},_app_loading:!0,_flightsList_loading:!1,_timeList_loading:!0,_navList:localStorage._navList?JSON.parse(localStorage._navList):Q,_currentStep:localStorage._currentStep||"",_hasReviewedData:!1,_showReviewDialog:!1},mutations:{HAS_REVIEWED_DATA:function(t,e){t._hasReviewedData=e},SHOW_REVIEW_DIALOG:function(t,e){t._showReviewDialog=e},APP_LOADING:function(t,e){t._app_loading=e},FLIGHTSLIST_LOADING:function(t,e){t._flightsList_loading=e},TIMELIST_LOADING:function(t,e){t._timeList_loading=e},TIMELIST_DATES:function(t,e){t._timeListDates=e,localStorage._timeListDates=JSON.stringify(t._timeListDates)},MAX_PILOTS:function(t,e){t._maxPilots=e},BOOK_DAYS_OFFSET:function(t,e){t._bookDaysOffset=e},BOOK_MONTS_OFFSET:function(t,e){t._bookMonthsOffset=e},VIDEO_PRICE:function(t,e){t._videoPrice=e},ACTIVE_DATE:function(t,e){t._activeDate=e},CHOSEN_NR_PEOPLE:function(t,e){t.nrPeople=e},CHOSEN_DATE:function(t,e){t.flightDate=e},CHOSEN_FLIGHT:function(t,e){t.selectedFlight=e},CHOSEN_PHOTOS:function(t,e){t.wantsPhotos=e},CHOSEN_TIMESLOT:function(t,e,n){t.timeSlot=e,t.timeSlotLabel=n},CONTACT_PHONE:function(t,e){t.contactPhone=e},CONTACT_EMAIL:function(t,e){t.contactEmail=e},FLIGHTS_LIST:function(t,e){t._flightsList=e},CLEAR_NAV_LIST:function(t){t._navList=Q},NAV_LIST:function(t,e){t._navList[Object.keys(e)[0]]=Object.values(e)[0]},CURRENT_STEP:function(t,e){t._currentStep=e},PASSENGER_VALID:function(t,e){var n=st(t,e.passengerId);n.valid=e.valid},PASSENGER_SEX:function(t,e){var n=st(t,e.passengerId);n.sex=e.sexStr},PASSENGER_AGE:function(t,e){var n=st(t,e.passengerId);n.age=e.ageInt},PASSENGER_NAME:function(t,e){var n=st(t,e.passengerId);n.name=e.nameStr},PASSENGER_SPEED:function(t,e){var n=st(t,e.passengerId);n.speed=e.speedInt},PASSENGER_WEIGHT:function(t,e){var n=st(t,e.passengerId);n.weightKg=e.weightInt},SLOT_SELECTED_DATE:function(t,e){t.slotPassengersObj.selectedDate!==t.flightDate&&(t.slotPassengersObj.selectedDate="",t.slotPassengersObj.slotsList=[]),t.slotPassengersObj.selectedDate=e},NUMBER_PASSENGERS:function(t,e){t.slotPassengersObj.selectedDate!==t.flightDate&&(t.slotPassengersObj=et,t.slotPassengersObj.selectedDate=t.flightDate),t.slotPassengersObj.slotsList[e.index]={timeString:e.timeString,passengers:e.passengers};var n,a=0,s=Object(K["a"])(t.slotPassengersObj.slotsList);try{for(s.s();!(n=s.n()).done;){var i=n.value;void 0!==i&&null!==i&&(a+=i.passengers)}}catch(o){s.e(o)}finally{s.f()}t.totalPassengers=a},RESET_PASSENGERS:function(t){t.totalPassengers=0,t.slotPassengersObj=et,localStorage.removeItem("slotPassengersObj")}},actions:{timeListDates:function(t){return Object(o["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit("TIMELIST_LOADING",!0),n=t.state.flightDate,e.abrupt("return",Z.a.get("https://XXXXXXXXX-bookings-dev.simpleitsolutions.ch/onlinebooking/flightschedules/"+n).then((function(e){var n=e.data;t.commit("TIMELIST_DATES",n)})).catch((function(e){t.state._DEV&&(console.log("Temp dev data being generated for FlightDates in store -> timeListDates(). ",e),t.commit("TIMELIST_DATES",rt(n)))})).finally((function(){return t.commit("TIMELIST_LOADING",!1)})));case 3:case"end":return e.stop()}}),e)})))()},init:function(t){return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Z.a.get("https://bookings-dev.simpleitsolutions.ch/onlinebooking/init").then((function(e){var n=e.data;t.commit("MAX_PILOTS",+n["max-pilots"]),t.commit("BOOK_DAYS_OFFSET",+n["book-days-from-today"]),t.commit("BOOK_MONTS_OFFSET",+n["book-future-months"]),t.commit("VIDEO_PRICE",+n["video-cost"])})).catch((function(t){console.log(t)})).finally((function(){return t.commit("APP_LOADING",!1)})));case 1:case"end":return e.stop()}}),e)})))()},flightOptions:function(t){return Object(o["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.state.flightDate,""!==n){e.next=3;break}return e.abrupt("return");case 3:return t.commit("FLIGHTSLIST_LOADING",!0),e.abrupt("return",Z.a.get("https://fz-backend.simpleitsolutions.ch/onlinebooking/api/flightoptions/"+n).then((function(e){var n=e.data;t.commit("FLIGHTS_LIST",n)})).catch((function(t){console.log(t)})).finally((function(){return t.commit("FLIGHTSLIST_LOADING",!1)})));case 5:case"end":return e.stop()}}),e)})))()},setFlightsList:function(t,e){t.commit("FLIGHTS_LIST",e)},hasReviewedData:function(t,e){t.commit("HAS_REVIEWED_DATA",e)},showReviewDialog:function(t,e){t.commit("SHOW_REVIEW_DIALOG",e)},setNrPeople:function(t,e){t.commit("CHOSEN_NR_PEOPLE",+e),localStorage.nrPeople=e},setFlightDate:function(t,e){t.commit("CHOSEN_DATE",e),localStorage.flightDate=e,t.commit("SLOT_SELECTED_DATE",e)},setActiveDate:function(t,e){t.commit("ACTIVE_DATE",e)},setFlight:function(t,e){t.commit("CHOSEN_FLIGHT",e),localStorage.selectedFlight=e},setWantsPhotos:function(t,e){t.commit("CHOSEN_PHOTOS",e),localStorage.wantsPhotos=e},setTimeSlot:function(t,e){t.commit("CHOSEN_TIMESLOT",e.slot,e.label),localStorage.selectedTimeslot=e.slot,localStorage.selectedTimeslotLabel=e.label},clearNavList:function(t){t.commit("CLEAR_NAV_LIST"),localStorage._navList=JSON.stringify(t.state._navList)},setNavListItem:function(t,e){t.commit("NAV_LIST",e),localStorage._navList=JSON.stringify(t.state._navList)},setCurrentStep:function(t,e){t.commit("CURRENT_STEP",e),localStorage._currentStep=e},setContactPhone:function(t,e){t.commit("CONTACT_PHONE",e),localStorage.contactPhone=e},setContactEmail:function(t,e){t.commit("CONTACT_EMAIL",e),localStorage.contactEmail=e},setPassengerFormValid:function(t,e){t.commit("PASSENGER_VALID",e),ot(t)},setPassengerSex:function(t,e){t.commit("PASSENGER_SEX",e),ot(t)},setPassengerAge:function(t,e){t.commit("PASSENGER_AGE",e),ot(t)},setPassengerName:function(t,e){t.commit("PASSENGER_NAME",e),ot(t)},setPassengerSpeed:function(t,e){t.commit("PASSENGER_SPEED",e),ot(t)},setPassengerWeight:function(t,e){t.commit("PASSENGER_WEIGHT",e),ot(t)},clearSlotsPassengers:function(t){t.commit("RESET_PASSENGERS"),localStorage.removeItem("slotPassengersObj")},setSlotPassengers:function(t,e){null===e&&console.log("Payload is null"),t.commit("NUMBER_PASSENGERS",e),localStorage.slotPassengersObj=JSON.stringify(t.state.slotPassengersObj)}},getters:{getStoredPassengersInSlot:function(t){return function(e,n){if(e!=t.flightDate)return 0;var a=t.slotPassengersObj.slotsList[n];return void 0===a||null===a?0:a.passengers}},step_startValid:function(t){var e=""!==t.flightDate&&""!==t.selectedFlight;return e},step_timeValid:function(t){var e=t.timeSlot>-1&&""!==t.timeSlotLabel;return e},getTotalPassengers:function(t){return t.totalPassengers},getAllPassengersValid:function(t){for(var e=!0,n=0;n<t.passengerObjList.length;n++)if(!0!==t.passengerObjList[n].valid){e=!1;break}return e},getIsValidById:function(t){return function(e){var n=st(t,e);return n.valid}},getSexById:function(t){return function(e){var n=st(t,e);return n.sex}},getAgeById:function(t){return function(e){var n=st(t,e);return n.age}},getNameById:function(t){return function(e){var n=st(t,e);return n.name}},getSpeedById:function(t){return function(e){var n=st(t,e);return n.speed}},getWeightById:function(t){return function(e){var n=st(t,e);return n.weightKg}},getUsersDayIndex:function(t){return function(){var e=0,n=t.flightDate,a=t._timeListDates;if(null===a)return e;var s=0;return Object.keys(a).forEach((function(t){t===n&&(e=s),s+=1})),e}}}});function st(t,e){var n=t.passengerObjList.find((function(t){return t.id===e}));return"undefined"===typeof n&&(n=it(e),t.passengerObjList.push(n)),n}function it(t){var e=Object.assign({},tt);return e.id=t,e}function ot(t){localStorage.passengerObjList=JSON.stringify(t.state.passengerObjList)}function rt(t){var e=14,n=7,a=q.differenceInDays(new Date(t),new Date);a<n&&(n=a);for(var s=q.sub(new Date(t),{days:n}),i={},o=function(t){var e=q.format(s,"yyyy-MM-dd"),n=["08:30","10:15","11:45","13:15","14:45","16:15","17:00","19:00"],a={};n.forEach((function(t){var e=Y.random.number({min:0,max:7});a[t]=e})),i[e]=a,s=q.add(s,{days:1})},r=0;r<e;r++)o(r);return i}a["default"].use(A["a"]);var ct=[{path:"/",name:"Start",component:X,meta:{title:"Book your Flight! Get Started"}},{path:"/time",name:"Time",component:function(){return n.e("TimeSlot").then(n.bind(null,"4cc7"))},meta:{title:"Choose the Time to fly"}},{path:"/info",name:"Info",component:function(){return n.e("Info").then(n.bind(null,"842f"))},meta:{title:"Contact Details & Passenger infos"}},{path:"/next",name:"Next",component:function(){return n.e("Next").then(n.bind(null,"fd7a"))},meta:{title:"What to do Next..."}},{path:"/pay",name:"Pay",component:function(){return n.e("Pay").then(n.bind(null,"2e0e"))},meta:{title:"Payment Gateway"}},{path:"/thanks",name:"Thanks",component:function(){return n.e("Thanks").then(n.bind(null,"ffb6"))},meta:{title:"Thanks for booking with FlyZermatt!"}}],lt=new A["a"]({mode:"history",base:"/",routes:ct,scrollBehavior:function(){return new Promise((function(t){setTimeout((function(){t({x:0,y:0})}),0)}))}});lt.afterEach((function(t){at.dispatch("setCurrentStep",t.name)}));var ut=lt,ht=(n("5363"),n("f309")),ft=n("fcf4");a["default"].use(ht["a"]);var dt=new ht["a"]({theme:{themes:{light:{primary:ft["a"].purple.darken3,secondary:ft["a"].grey.darken1,accent:ft["a"].shades.black,error:ft["a"].red.accent3},dark:{primary:ft["a"].blue.lighten3}}}}),gt=n("353a"),pt=n.n(gt),mt=n("3181"),vt=n.n(mt);pt.a.start({apiKey:"cb57aa27093fb50e11a5f5c1873a8923",plugins:[new vt.a]}),a["default"].config.productionTip=!1,a["default"].mixin({methods:{capitaliseFirstLetter:function(t){return"string"!==typeof t?"":t.charAt(0).toUpperCase()+t.slice(1)},isObjEmpty:function(t){return null==t||!(Object.keys(t).length>0)}}}),new a["default"]({router:ut,store:at,vuetify:dt,render:function(t){return t(x)}}).$mount("#app"),pt.a.getPlugin("vue").installVueErrorHandler(a["default"]);var St=n("f13c");a["default"].use(St)},"85ec":function(t,e,n){},cb79:function(t,e,n){"use strict";var a=n("3516"),s=n.n(a);s.a},e176:function(t,e,n){t.exports=n.p+"img/FlyZermatt-logo-light.893e1f8e.svg"}});
//# sourceMappingURL=app.581e5a47.js.map