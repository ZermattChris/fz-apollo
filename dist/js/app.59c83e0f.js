(function(t){function e(e){for(var n,s,r=e[0],l=e[1],c=e[2],u=0,f=[];u<r.length;u++)s=r[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&f.push(i[s][0]),i[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);h&&h(e);while(f.length)f.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var r=a[s];0!==i[r]&&(n=!1)}n&&(o.splice(e--,1),t=l(l.s=a[0]))}return t}var n={},s={app:0},i={app:0},o=[];function r(t){return l.p+"js/"+({Info:"Info",Next:"Next",Pay:"Pay",Thanks:"Thanks",TimeSlot:"TimeSlot"}[t]||t)+"."+{Info:"0fbf5e05",Next:"012a9753",Pay:"cb02e571",Thanks:"48e928b2",TimeSlot:"6476f2a7"}[t]+".js"}function l(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={Info:1,Next:1,Pay:1,Thanks:1,TimeSlot:1};s[t]?e.push(s[t]):0!==s[t]&&a[t]&&e.push(s[t]=new Promise((function(e,a){for(var n="css/"+({Info:"Info",Next:"Next",Pay:"Pay",Thanks:"Thanks",TimeSlot:"TimeSlot"}[t]||t)+"."+{Info:"7fbfbca3",Next:"852eaf42",Pay:"9693e4e1",Thanks:"468c7556",TimeSlot:"5f652db5"}[t]+".css",i=l.p+n,o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var c=o[r],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===i))return e()}var f=document.getElementsByTagName("style");for(r=0;r<f.length;r++){c=f[r],u=c.getAttribute("data-href");if(u===n||u===i)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var n=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete s[t],h.parentNode.removeChild(h),a(o)},h.href=i;var d=document.getElementsByTagName("head")[0];d.appendChild(h)})).then((function(){s[t]=0})));var n=i[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,a){n=i[t]=[e,a]}));e.push(n[2]=o);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=r(t);var f=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(h);var a=i[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+n+": "+s+")",f.name="ChunkLoadError",f.type=n,f.request=s,a[1](f)}i[t]=void 0}};var h=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=n,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var f=0;f<c.length;f++)e(c[f]);var h=u;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"27be":function(t,e,a){},"36ad":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",{staticClass:"ml-n2 disable-select",domProps:{innerHTML:t._s(t.title)}}),a("p",[t._t("default",[t._v("Default Page Header text...")])],2),a("v-divider")],1)},s=[],i={name:"PageHeader",props:{title:{type:String,default:"Title Default"}}},o=i,r=a("2877"),l=a("6544"),c=a.n(l),u=a("ce7e"),f=Object(r["a"])(o,n,s,!1,null,"083faaa8",null);e["a"]=f.exports;c()(f,{VDivider:u["a"]})},"49f8":function(t,e,a){var n={"./de.json":"6ce2","./en.json":"edd4","./ko.json":"dd11"};function s(t){var e=i(t);return a(e)}function i(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}s.keys=function(){return Object.keys(n)},s.resolve=i,t.exports=s,s.id="49f8"},"56d7":function(t,e,a){"use strict";a.r(e);a("fb6a"),a("b64b"),a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-overlay",{attrs:{opacity:"0.2",value:t.overlay}}),t.overlay?n("v-progress-circular",{staticStyle:{position:"absolute","z-index":"500",top:"30%",left:"50%","margin-top":"-32px","margin-left":"-32px"},attrs:{indeterminate:"",color:"primary",size:"64"}}):t._e(),n("v-app-bar",{attrs:{app:"",color:"primary",dark:"","hide-on-scroll":""}},[n("div",{staticClass:"d-flex align-center",attrs:{id:"logo"}},[n("v-img",{staticClass:"shrink ml-1",attrs:{alt:"FlyZermatt Logo",contain:"",src:a("e176"),transition:"scale-transition",width:"220"}})],1),n("LangMenu",{staticStyle:{display:"none"}}),n("v-progress-linear",{attrs:{id:"progressbar",value:t.progressBarPercent,rounded:"",color:"deep-purple",height:"7"}})],1),n("v-main",[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"12",md:"1",lg:"2"}}),n("v-col",{staticClass:"pa-5 pa-sm-8 pa-md-12",attrs:{cols:"12",md:"10",lg:"8"}},[n("router-view")],1),n("v-col",{attrs:{cols:"12",md:"1",lg:"2"}})],1)],1),n("v-footer",{staticClass:"justify-end",staticStyle:{"min-height":"60px"},attrs:{color:"primary",dark:"",app:"",padless:""}},[n("v-btn",{staticClass:"text-capitalize",class:t.canGoBack?"":"hideBackBtn",staticStyle:{position:"absolute",left:"5px","z-index":"1000"},attrs:{text:""},on:{click:t.onBackBtnClick}},[n("v-icon",{attrs:{left:""}},[t._v(t._s(t.iconPrevChevron))]),t._v(" "+t._s(t.$t("nav.back"))+" ")],1),n("div",{staticClass:"d-flex",staticStyle:{position:"absolute",width:"100%",height:"100%",top:"12px"}},[n("NavButton",{ref:"ContinueBtn",staticClass:"mx-auto"})],1),n("div",{staticClass:"hidden-xs-only white--text overline mr-2 text--secondary",staticStyle:{"text-align":"right"}},[t._v(" © "+t._s(t.getCurrentYear)+" - FlyZermatt ")]),n("div",{staticClass:"hidden-sm-and-up white--text overline mr-2 text-caption text--secondary",staticStyle:{"max-width":"140px","line-height":"1.2em","text-align":"right"}},[t._v(" © "+t._s(t.getCurrentYear)),n("br"),t._v(" FlyZermatt ")])],1),n("v-overlay",{attrs:{value:t.isAppStillLoading}})],1)},i=[],o=(a("b0c0"),a("96cf"),a("1da1")),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-btn",{attrs:{rounded:"",color:"white",elevation:"4",disabled:t.isDisabled},on:{click:t.navigate}},[t._v(" "+t._s(t.$t("nav.continue"))+" "),a("v-icon",{attrs:{right:""}},[t._v(t._s(t.iconNextArrow))])],1)},l=[],c=a("94ed"),u={name:"NavButton",props:{},data:function(){return{isDisabled:!0,iconNextArrow:c["c"]}},created:function(){var t=this;this.$store.watch((function(t){return t._navList}),(function(){t.update()}),{deep:!0})},methods:{update:function(){var t=this.$route.name,e=this.$store.state._navList[t];this.isDisabled=!e},navigate:function(){var t=this.$store.state._currentStep;switch(t){case"Start":this.$store.dispatch("setCurrentStep","Time");break;case"Time":this.$store.dispatch("setCurrentStep","Info");break;case"Info":if(!1===this.$store.state._hasReviewedData)return void this.$store.dispatch("showReviewDialog",!0);this.$store.dispatch("setCurrentStep","Pay");break;case"Pay":this.$store.dispatch("setCurrentStep","Thanks");break;case"Thanks":return this.$store.dispatch("setCurrentStep","Completed"),void(window.location="http://www.flyzermatt.com")}var e=this.$store.state._currentStep;this.$router.push({path:e})}}},f=u,h=(a("af96"),a("2877")),d=a("6544"),g=a.n(d),p=a("8336"),m=a("132d"),v=Object(h["a"])(f,r,l,!1,null,"3b83b619",null),S=v.exports;g()(v,{VBtn:p["a"],VIcon:m["a"]});var b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-speed-dial",{attrs:{id:"language-menu",direction:"bottom",transition:"slide-y-transition"},scopedSlots:t._u([{key:"activator",fn:function(){return[a("v-btn",{staticClass:"white--text text-uppercase",attrs:{fab:"",small:""},model:{value:t.fabModel,callback:function(e){t.fabModel=e},expression:"fabModel"}},[t._v(" "+t._s(t.currentLangISO)+" ")])]},proxy:!0}]),model:{value:t.fabModel,callback:function(e){t.fabModel=e},expression:"fabModel"}},t._l(t.langISOList,(function(e,n){return a("v-btn",{key:n,staticClass:"primary--text text-uppercase",attrs:{hidden:e==t.currentLangISO,fab:"","x-small":"",color:"white"},on:{click:function(a){return t.onChooseLanguage(e)}}},[t._v(" "+t._s(e)+" ")])})),1)},_=[],O=(a("4160"),a("caad"),a("ac1f"),a("2532"),a("1276"),a("498a"),a("159b"),a("5530")),D={name:"LangMenu",props:{},data:function(){return{fabModel:!1,langISOList:[],currentLangISO:"en"}},mounted:function(){var t=this,e=Object.keys(this.$i18n.messages);e.forEach((function(e){t.langISOList.push(e)})),this.currentLangISO=this.getBroswerLangIfMatch(),this.$i18n.locale=this.currentLangISO},methods:{onChooseLanguage:function(t){this.currentLangISO=t,this.$i18n.locale=t},getBroswerLangIfMatch:function(){var t=this.getBrowserLocale({countryCodeOnly:!0}),e=this.langISOList.includes(t);return e?t:"en"},getBrowserLocale:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e={countryCodeOnly:!0},a=Object(O["a"])(Object(O["a"])({},e),t),n=void 0!==navigator.languages?navigator.languages[0]:navigator.language;if(n){var s=a.countryCodeOnly?n.trim().split(/-|_/)[0]:n.trim();return s}}}},y=D,E=a("c73b"),P=Object(h["a"])(y,b,_,!1,null,"53e0f0a5",null),L=P.exports;g()(P,{VBtn:p["a"],VSpeedDial:E["a"]});var I=a("2230"),T=a("e3ee"),k=a("b166"),w={name:"App",components:{NavButton:S,LangMenu:L},data:function(){return{overlay:!1,overlayDelay:500,iconPrevChevron:c["i"],iconGarbageBin:c["o"],canGoBack:!1}},mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$store.dispatch("init");case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),console.error("My error",e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))()},beforeUpdate:function(){"Start"===this.$route.name?this.onEnableBackBtn(!1):this.onEnableBackBtn(!0)},beforeMount:function(){if(""!==this.flightDate){var t=Object(I["a"])(Date.now(),{days:this.$store.state._bookDaysOffset}),e=Object(T["a"])(this.$store.state.flightDate);t>e&&(this.$store.dispatch("setFlightDate",""),this.$store.dispatch("setFlight",""),this.$store.dispatch("setWantsPhotos",!1),this.$store.dispatch("clearSlotsPassengers"))}},updated:function(){this.$refs.ContinueBtn.update()},methods:{onEnableBackBtn:function(t){this.canGoBack=t},onBackBtnClick:function(){this.$router.go(-1)},onClearData:function(){if(!0===this.$store.state._DEV){this.$store.dispatch("setFlightDate",""),this.$store.dispatch("setFlight",""),this.$store.dispatch("setWantsPhotos",!1);var t={slot:-1,label:""};this.$store.dispatch("setTimeSlot",t),this.$store.dispatch("clearNavList"),this.$store.dispatch("setCurrentStep",""),this.$store.dispatch("setContactPhone",""),this.$store.dispatch("setContactEmail",""),this.$store.dispatch("clearSlotsPassengers"),"Start"!==this.$route.name&&this.$router.push("/"),window.location.reload()}}},computed:{progressBarPercent:function(){var t=4,e=this.$store.state._currentStep.toLowerCase(),a=0;switch(e){case"start":a=1;break;case"time":a=2;break;case"info":a=3;break;case"pay":a=4;break;default:console.error("Invalid Step name for progress bar in App.vue ".concat(e,"."))}return a*(100/t)},_isDEV:function(){return this.$store.state._DEV},getCurrentYear:function(){return Object(k["a"])(Date.now(),"yyyy")},isAppStillLoading:function(){return this.$store.state._app_loading}},watch:{$route:function(t){document.title=t.meta.title||"Secure Booking at FlyZermatt Paragliding"}}},C=w,A=(a("034f"),a("7496")),N=a("40dc"),x=a("62ad"),j=a("553a"),M=a("adda"),F=a("f6c4"),$=a("a797"),V=a("490a"),R=a("8e36"),B=a("0fd9"),G=Object(h["a"])(C,s,i,!1,null,null,null),H=G.exports;g()(G,{VApp:A["a"],VAppBar:N["a"],VBtn:p["a"],VCol:x["a"],VFooter:j["a"],VIcon:m["a"],VImg:M["a"],VMain:F["a"],VOverlay:$["a"],VProgressCircular:V["a"],VProgressLinear:R["a"],VRow:B["a"]});a("d3b7");var J=a("8c4f"),W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"stepStart",staticClass:"page",attrs:{id:"step-start"}},[a("PageHeader",{attrs:{title:"1. "+t.$t("step-info.title")}},[t._v(" "+t._s(t.$t("step-info.description"))+" ")]),a("div",{staticClass:"ml-n2 ml-sm-2 ml-md-8 ml-lg-12 pt-sm-2",staticStyle:{"max-width":"600px"},attrs:{id:"steps-controls"}},[a("h3",{staticClass:"disable-select",attrs:{id:"chooseFlightDate"}},[a("v-icon",{attrs:{color:t.flightDate?"success":"primary"}},[t._v(t._s(t.flightDate?t.stepIconCompleted:t.stepIcon))]),t._v(" "+t._s(t.$t("step-info.flightdate"))+" ")],1),a("div",{staticClass:"controls mb-0 mb-sm-2 mb-md-4"},[a("v-menu",{attrs:{"nudge-right":0,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,s=e.attrs;return[a("v-text-field",t._g(t._b({staticClass:"ml-10 mt-4",attrs:{value:t.formatArriveDate,label:"When do you arrive in Zermatt?","prepend-icon":"mdi-calendar",readonly:""}},"v-text-field",s,!1),n))]}}]),model:{value:t.arriveMenu,callback:function(e){t.arriveMenu=e},expression:"arriveMenu"}},[a("v-date-picker",{attrs:{"first-day-of-week":"0",locale:t.$i18n.locale,min:t.todaysDate,max:t.flightDate,color:"green"},on:{input:function(e){t.arriveMenu=!1}},model:{value:t.arriveDate,callback:function(e){t.arriveDate=e},expression:"arriveDate"}})],1),a("v-date-picker",{staticClass:"ml-10 mb-6 mb-sm-8 mb-md-10",staticStyle:{"min-width":"240px"},attrs:{"first-day-of-week":"0",locale:t.$i18n.locale,"show-current":"",elevation:"4",color:"green","header-color":"primary",min:t.flightMinDate,max:t.flightMaxDate,width:""},model:{value:t.flightDate,callback:function(e){t.flightDate=e},expression:"flightDate"}}),a("v-menu",{attrs:{"nudge-right":50,"nudge-bottom":-50,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,s=e.attrs;return[a("v-text-field",t._g(t._b({staticClass:"ml-10 mt-n8 mb-6",attrs:{label:"When are you leaving Zermatt?","prepend-icon":"mdi-calendar",readonly:""},model:{value:t.formatDepartDate,callback:function(e){t.formatDepartDate=e},expression:"formatDepartDate"}},"v-text-field",s,!1),n))]}}]),model:{value:t.departMenu,callback:function(e){t.departMenu=e},expression:"departMenu"}},[a("v-date-picker",{attrs:{"first-day-of-week":"0",locale:t.$i18n.locale,min:t.flightDate,max:t.flightMaxDate,color:"green"},on:{input:function(e){t.departMenu=!1}},model:{value:t.departDate,callback:function(e){t.departDate=e},expression:"departDate"}})],1)],1),a("h3",{staticClass:"disable-select"},[a("v-icon",{attrs:{color:t.flightChosen?"success":"primary"}},[t._v(t._s(t.flightOptionsDropMenuList?t.stepIconCompleted:t.stepIcon)+" ")]),t._v(" "+t._s(t.$t("step-info.whichflight"))+" ")],1),a("div",{staticClass:"controls mb-0 mb-sm-6 mb-md-10"},[a("v-select",{staticClass:"disable-select",staticStyle:{"max-width":"330px"},attrs:{items:t.flightOptionsDropMenuList,"item-text":"name","item-value":"id","prepend-icon":t.flightChosen?t.cloudIcon:t.cloudQuestionIcon,loading:t.flightOptionsLoaded,solo:"",outlined:"",disabled:!t.isValidFlightDate,hint:t.isValidFlightDate?"":"Please choose a Flight Date first...","persistent-hint":""},model:{value:t.flightChosen,callback:function(e){t.flightChosen=e},expression:"flightChosen"}})],1),a("h3",[a("v-icon",{attrs:{color:t.switchPhotos?"success":"primary"}},[t._v(t._s(t.cameraIcon))]),t._v(" "+t._s(t.$t("step-info.photosvideos"))+" ")],1),a("div",{staticClass:"controls mb-0 mb-sm-6"},[a("v-switch",{staticClass:"ml-10",attrs:{id:"photosSwitch",color:"success",inset:"",label:t.$t("step-info.photosvideos-description")},model:{value:t.switchPhotos,callback:function(e){t.switchPhotos=e},expression:"switchPhotos"}})],1)])],1)},z=[],U=(a("99af"),a("4fad"),a("3835")),K=a("1212"),Z=a("7677"),Y=a("36ad"),X={name:"Start",components:{PageHeader:Y["a"]},props:{},data:function(){return{stepIcon:c["b"],stepIconCompleted:c["h"],cameraIcon:c["f"],cloudQuestionIcon:c["n"],cloudIcon:c["m"],calendarIcon:c["e"],infoIcon:c["u"],flightOptionsDropMenuList:this.buildFlightList(),flightMenu:!1,flightModal:!1,nrPeopleExceedsMaxPilots:!1,maxGroupSize:15,nrPeopleEnabled:!1,bigGroupDialog:!1,isPageValid:this.$store.getters.step_startValid,arriveMenu:!1,departMenu:!1}},beforeMount:function(){this.$store.dispatch("flightOptions")},beforeUpdate:function(){this.onValueChanged()},mounted:function(){return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},computed:{flightOptionsLoaded:function(){return this.$store.state._flightsList_loading},forWatchingBothFlightDateAndFlightType:function(){return"".concat(this.flightDate,"|").concat(this.flightChosen)},flightDate:{get:function(){return this.$store.state.flightDate},set:function(t){t!==this.$store.state.flightDate&&(this.$store.dispatch("setFlightDate",t),this.$store.dispatch("flightOptions"),this.buildFlightList(),this.$store.dispatch("clearSlotsPassengers"))}},flightChosen:{get:function(){return this.$store.state.selectedFlight},set:function(t){return console.log("Set chosen flight",t),this.$store.dispatch("setFlight",t)}},switchPhotos:{get:function(){return this.$store.state.wantsPhotos},set:function(t){return this.$store.dispatch("setWantsPhotos",t)}},flightMinDate:function(){var t=this.$store.state._bookDaysOffset;return Object(k["a"])(Object(I["a"])(Date.now(),{days:t}),"yyyy-MM-dd")},flightMaxDate:function(){var t=this.$store.state._bookMonthsOffset;return Object(k["a"])(Object(I["a"])(Date.now(),{months:t}),"yyyy-MM-dd")},flightsWatch:function(){return this.$store.state._flightsList},isValidFlightDate:function(){return""!==this.flightDate&&null!==this.flightDate},isValidFlightChosen:function(){return""!==this.flightDate&&""!==this.flightChosen},formatISODate:function(){if(""===this.flightDate)return"";var t=Object(T["a"])(this.flightDate),e=Object(k["a"])(t,"PPPP");return e},todaysDate:function(){return Object(k["a"])(Object(T["a"])((new Date).toISOString()),"yyyy-MM-dd")},formatArriveDate:function(){return Object(K["a"])(Object(T["a"])(this.arriveDate),Object(T["a"])(this.flightDate))?"":this.arriveDate?Object(k["a"])(Object(T["a"])(this.arriveDate),"EEEE, MMMM do yyyy"):""},arriveDate:{get:function(){return this.$store.state.arriveDate},set:function(t){this.$store.dispatch("setArriveDate",t)}},formatDepartDate:function(){return Object(Z["a"])(Object(T["a"])(this.departDate),Object(T["a"])(this.flightDate))?"":this.departDate?Object(k["a"])(Object(T["a"])(this.departDate),"EEEE, MMMM do yyyy"):""},departDate:{get:function(){return this.$store.state.departDate},set:function(t){this.$store.dispatch("setDepartDate",t)}}},methods:{scrollToFormTop:function(){var t=this;setTimeout((function(){t.$scrollTo("#chooseFlightDate",500)}),100)},onValueChanged:function(){if(this.$store.getters.step_startValid){var t={Start:!0};this.$store.dispatch("setNavListItem",t)}else{var e={Start:!1};this.$store.dispatch("setNavListItem",e)}},buildFlightList:function(){var t=this.$store.state._flightsList;if(console.log("build flight list for drop menu",t),!this.isObjEmpty(t)){for(var e=[],a=0,n=Object.entries(t);a<n.length;a++){var s=Object(U["a"])(n[a],2),i=(s[0],s[1]),o=i["name"]+" "+i["price"]+".- CHF",r={id:i["id"],name:o};e.push(r)}return e}}},watch:{forWatchingBothFlightDateAndFlightType:function(){""!==this.flightChosen&&(this.$store.dispatch("timeListDates"),this.onValueChanged())},flightsWatch:function(){this.flightOptionsDropMenuList=this.buildFlightList()},flightDate:function(){console.log("Chosen Date: "+this.flightDate)}}},q=X,Q=(a("6d69"),a("2e4b")),tt=a("e449"),et=a("b974"),at=a("b73d"),nt=a("8654"),st=Object(h["a"])(q,W,z,!1,null,"3de875b3",null),it=st.exports;g()(st,{VDatePicker:Q["a"],VIcon:m["a"],VMenu:tt["a"],VSelect:et["a"],VSwitch:at["a"],VTextField:nt["a"]});a("7db0"),a("07ac");var ot=a("b85c"),rt=a("2f62"),lt=a("bc3a"),ct=a.n(lt);n["default"].use(rt["a"]);var ut={Start:!1,Time:!1,Info:!1,Next:!1,Pay:!1,Thanks:!1},ft={id:null,valid:!1,sex:null,age:null,name:"",speed:6,weightKg:25},ht={selectedDate:"",slotsList:[]},dt=function(){var t=localStorage.slotPassengersObj?JSON.parse(localStorage.slotPassengersObj):{},e=0,a=t.slotsList;if(void 0!==a&&null!==a){var n,s=Object(ot["a"])(a);try{for(s.s();!(n=s.n()).done;){var i=n.value;null!==i&&(e+=i.passengers)}}catch(o){s.e(o)}finally{s.f()}}return e},gt=new rt["a"].Store({state:{_DEV:!0,orderID:+localStorage.orderID||"",totalPassengers:dt(),arriveDate:localStorage.arriveDate||"",flightDate:localStorage.flightDate||"",departDate:localStorage.departDate||"",selectedFlight:localStorage.selectedFlight||"",wantsPhotos:!!localStorage.wantsPhotos&&JSON.parse(localStorage.wantsPhotos),timeSlot:+localStorage.selectedTimeslot||-1,timeSlotLabel:localStorage.selectedTimeslotLabel||"",contactPhone:localStorage.contactPhone||"",contactEmail:localStorage.contactEmail||"",orderMessage:localStorage.orderMessage||"",passengerObjList:localStorage.passengerObjList?JSON.parse(localStorage.passengerObjList):[],slotPassengersObj:localStorage.slotPassengersObj?JSON.parse(localStorage.slotPassengersObj):ht,_activeDate:"",_bookDaysOffset:0,_bookMonthsOffset:0,_videoPrice:-1,_flightsList:localStorage._flightsList?JSON.parse(localStorage._flightsList):{},_timeListDates:localStorage._timeListDates?JSON.parse(localStorage._timeListDates):{},_app_loading:!0,_flightsList_loading:!1,_timeList_loading:!0,_navList:localStorage._navList?JSON.parse(localStorage._navList):ut,_currentStep:localStorage._currentStep||"",_hasReviewedData:!1,_showReviewDialog:!1},mutations:{HAS_REVIEWED_DATA:function(t,e){t._hasReviewedData=e},SHOW_REVIEW_DIALOG:function(t,e){t._showReviewDialog=e},APP_LOADING:function(t,e){t._app_loading=e},FLIGHTSLIST_LOADING:function(t,e){t._flightsList_loading=e},TIMELIST_LOADING:function(t,e){t._timeList_loading=e},TIMELIST_DATES:function(t,e){t._timeListDates=e,localStorage._timeListDates=JSON.stringify(t._timeListDates)},BOOK_DAYS_OFFSET:function(t,e){t._bookDaysOffset=e},BOOK_MONTS_OFFSET:function(t,e){t._bookMonthsOffset=e},VIDEO_PRICE:function(t,e){t._videoPrice=e},ACTIVE_DATE:function(t,e){t._activeDate=e},CHOSEN_DATE:function(t,e){t.flightDate=e},CHOSEN_FLIGHT:function(t,e){t.selectedFlight=e},CHOSEN_PHOTOS:function(t,e){t.wantsPhotos=e},CHOSEN_TIMESLOT:function(t,e,a){t.timeSlot=e,t.timeSlotLabel=a},CONTACT_PHONE:function(t,e){t.contactPhone=e},CONTACT_EMAIL:function(t,e){t.contactEmail=e},ORDER_MESSAGE:function(t,e){t.orderMessage=e},ARRIVE_DATE:function(t,e){t.arriveDate=e},DEPART_DATE:function(t,e){t.departDate=e},ORDER_ID:function(t,e){t.orderID=e,localStorage.orderID=JSON.stringify(t.orderID)},FLIGHTS_LIST:function(t,e){t._flightsList=e,localStorage._flightsList=JSON.stringify(t._flightsList)},CLEAR_NAV_LIST:function(t){t._navList=ut},NAV_LIST:function(t,e){t._navList[Object.keys(e)[0]]=Object.values(e)[0]},CURRENT_STEP:function(t,e){t._currentStep=e},PASSENGER_VALID:function(t,e){var a=pt(t,e.passengerId);a.valid=e.valid},PASSENGER_SEX:function(t,e){var a=pt(t,e.passengerId);a.sex=e.sexStr},PASSENGER_AGE:function(t,e){var a=pt(t,e.passengerId);a.age=e.ageInt},PASSENGER_NAME:function(t,e){var a=pt(t,e.passengerId);a.name=e.nameStr},PASSENGER_SPEED:function(t,e){var a=pt(t,e.passengerId);a.speed=e.speedInt},PASSENGER_WEIGHT:function(t,e){var a=pt(t,e.passengerId);a.weightKg=e.weightInt},SLOT_SELECTED_DATE:function(t,e){t.slotPassengersObj.selectedDate!==t.flightDate&&(t.slotPassengersObj.selectedDate="",t.slotPassengersObj.slotsList=[]),t.slotPassengersObj.selectedDate=e},NUMBER_PASSENGERS:function(t,e){t.slotPassengersObj.selectedDate!==t.flightDate&&(t.slotPassengersObj=ht,t.slotPassengersObj.selectedDate=t.flightDate),t.slotPassengersObj.slotsList[e.index]={timeString:e.timeString,passengers:e.passengers};var a,n=0,s=Object(ot["a"])(t.slotPassengersObj.slotsList);try{for(s.s();!(a=s.n()).done;){var i=a.value;void 0!==i&&null!==i&&(n+=i.passengers)}}catch(o){s.e(o)}finally{s.f()}t.totalPassengers=n},RESET_PASSENGERS:function(t){t.totalPassengers=0,t.slotPassengersObj=ht,localStorage.removeItem("slotPassengersObj")}},actions:{flightOptions:function(t){return Object(o["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.state.flightDate,""!==a){e.next=3;break}return e.abrupt("return");case 3:return t.commit("FLIGHTSLIST_LOADING",!0),e.abrupt("return",ct.a.get("https://bookings.simpleitsolutions.ch/api/flightoptions/"+a).then((function(e){var a=e.data;t.commit("FLIGHTS_LIST",a)})).catch((function(t){console.log(t)})).finally((function(){return t.commit("FLIGHTSLIST_LOADING",!1)})));case 5:case"end":return e.stop()}}),e)})))()},timeListDates:function(t){return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit("TIMELIST_LOADING",!0),a=t.state.flightDate,n=t.state.selectedFlight,e.abrupt("return",ct.a.get("https://bookings-dev.simpleitsolutions.ch/api/flightsavailable/"+n+"/"+a).then((function(e){var a=e.data;t.commit("TIMELIST_DATES",a)})).catch((function(t){console.log(t)})).finally((function(){return t.commit("TIMELIST_LOADING",!1)})));case 4:case"end":return e.stop()}}),e)})))()},init:function(t){return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",ct.a.get("https://bookings.simpleitsolutions.ch/api/init").then((function(e){var a=e.data;t.commit("BOOK_DAYS_OFFSET",+a["book-days-from-today"]),t.commit("BOOK_MONTS_OFFSET",+a["book-future-months"]),t.commit("VIDEO_PRICE",+a["video-cost"])})).catch((function(t){console.log(t)})).finally((function(){return t.commit("APP_LOADING",!1)})));case 1:case"end":return e.stop()}}),e)})))()},setFlightsList:function(t,e){t.commit("FLIGHTS_LIST",e)},hasReviewedData:function(t,e){t.commit("HAS_REVIEWED_DATA",e)},showReviewDialog:function(t,e){t.commit("SHOW_REVIEW_DIALOG",e)},setOrderId:function(t,e){t.commit("ORDER_ID",e)},setArriveDate:function(t,e){t.commit("ARRIVE_DATE",e),localStorage.arriveDate=e},setDepartDate:function(t,e){t.commit("DEPART_DATE",e),localStorage.departDate=e},setFlightDate:function(t,e){t.commit("CHOSEN_DATE",e),localStorage.flightDate=e,t.commit("SLOT_SELECTED_DATE",e)},setActiveDate:function(t,e){t.commit("ACTIVE_DATE",e)},setFlight:function(t,e){t.commit("CHOSEN_FLIGHT",e),localStorage.selectedFlight=e},setWantsPhotos:function(t,e){t.commit("CHOSEN_PHOTOS",e),localStorage.wantsPhotos=e},setTimeSlot:function(t,e){t.commit("CHOSEN_TIMESLOT",e.slot,e.label),localStorage.selectedTimeslot=e.slot,localStorage.selectedTimeslotLabel=e.label},clearNavList:function(t){t.commit("CLEAR_NAV_LIST"),localStorage._navList=JSON.stringify(t.state._navList)},setNavListItem:function(t,e){t.commit("NAV_LIST",e),localStorage._navList=JSON.stringify(t.state._navList)},setCurrentStep:function(t,e){t.commit("CURRENT_STEP",e),localStorage._currentStep=e},setContactPhone:function(t,e){t.commit("CONTACT_PHONE",e),localStorage.contactPhone=e},setContactEmail:function(t,e){t.commit("CONTACT_EMAIL",e),localStorage.contactEmail=e},setOrderMessage:function(t,e){t.commit("ORDER_MESSAGE",e),localStorage.orderMessage=e},setPassengerFormValid:function(t,e){t.commit("PASSENGER_VALID",e),vt(t)},setPassengerSex:function(t,e){t.commit("PASSENGER_SEX",e),vt(t)},setPassengerAge:function(t,e){t.commit("PASSENGER_AGE",e),vt(t)},setPassengerName:function(t,e){t.commit("PASSENGER_NAME",e),vt(t)},setPassengerSpeed:function(t,e){t.commit("PASSENGER_SPEED",e),vt(t)},setPassengerWeight:function(t,e){t.commit("PASSENGER_WEIGHT",e),vt(t)},clearSlotsPassengers:function(t){t.commit("RESET_PASSENGERS"),localStorage.removeItem("slotPassengersObj")},setSlotPassengers:function(t,e){null===e&&console.log("Payload is null"),t.commit("NUMBER_PASSENGERS",e),localStorage.slotPassengersObj=JSON.stringify(t.state.slotPassengersObj)}},getters:{getFlightFromID:function(t){return function(e){if(St(t._flightsList))return{};for(var a={},n=0,s=Object.entries(t._flightsList);n<s.length;n++){var i=Object(U["a"])(s[n],2),o=i[0],r=i[1];if(o==e)return console.log(o,e,r),r}return a}},getStoredPassengersInSlot:function(t){return function(e,a){if(e!=t.flightDate)return 0;var n=t.slotPassengersObj.slotsList[a];return void 0===n||null===n?0:n.passengers}},step_startValid:function(t){var e=""!==t.flightDate&&""!==t.selectedFlight;return e},step_timeValid:function(t){var e=t.timeSlot>-1&&""!==t.timeSlotLabel;return e},getPassengersList:function(t){for(var e=[],a=0;a<t.totalPassengers;a++){var n=JSON.parse(JSON.stringify(t.passengerObjList[a]));e[a]=n}return e},getTotalPassengers:function(t){return t.totalPassengers},getAllPassengersValid:function(t){for(var e=!0,a=0;a<t.totalPassengers;a++)if(void 0===t.passengerObjList[a]||!0!==t.passengerObjList[a].valid){e=!1;break}return e},getIsValidById:function(t){return function(e){var a=pt(t,e);return a.valid}},getSexById:function(t){return function(e){var a=pt(t,e);return a.sex}},getAgeById:function(t){return function(e){var a=pt(t,e);return a.age}},getNameById:function(t){return function(e){var a=pt(t,e);return a.name}},getSpeedById:function(t){return function(e){var a=pt(t,e);return a.speed}},getWeightById:function(t){return function(e){var a=pt(t,e);return a.weightKg}},getUsersDayIndex:function(t){return function(){var e=0,a=t.flightDate,n=t._timeListDates;if(null===n)return e;var s=0;return Object.keys(n).forEach((function(t){t===a&&(e=s),s+=1})),e}},getFlightObjById:function(t){return function(){var e=t._flightsList.find((function(e){return e.id===t.selectedFlight}));return e}}}});function pt(t,e){var a=t.passengerObjList.find((function(t){return t.id===e}));return"undefined"===typeof a&&(a=mt(e),t.passengerObjList.push(a)),a}function mt(t){var e=Object.assign({},ft);return e.id=t,e}function vt(t){localStorage.passengerObjList=JSON.stringify(t.state.passengerObjList)}function St(t){return null==t||!(Object.keys(t).length>0)}n["default"].use(J["a"]);var bt=[{path:"/",name:"Start",component:it,meta:{title:"Book your Flight! Get Started"}},{path:"/time",name:"Time",component:function(){return a.e("TimeSlot").then(a.bind(null,"4cc7"))},meta:{title:"Choose the Time to fly"}},{path:"/info",name:"Info",component:function(){return a.e("Info").then(a.bind(null,"842f"))},meta:{title:"Contact Details & Passenger infos"}},{path:"/next",name:"Next",component:function(){return a.e("Next").then(a.bind(null,"fd7a"))},meta:{title:"What to do Next..."}},{path:"/pay",name:"Pay",component:function(){return a.e("Pay").then(a.bind(null,"2e0e"))},meta:{title:"Payment"}},{path:"/canceled",name:"Canceled",component:function(){return a.e("Pay").then(a.bind(null,"1e2d"))},meta:{title:"Payment Cancelled"}},{path:"/thanks",name:"Thanks",component:function(){return a.e("Thanks").then(a.bind(null,"ffb6"))},meta:{title:"Thanks for booking with FlyZermatt!"}}],_t=new J["a"]({mode:"history",base:"/",routes:bt,scrollBehavior:function(){return new Promise((function(t){setTimeout((function(){t({x:0,y:0})}),0)}))}});_t.afterEach((function(t){gt.dispatch("setCurrentStep",t.name)}));var Ot=_t,Dt=(a("5363"),a("f309")),yt=a("fcf4");n["default"].use(Dt["a"]);var Et=new Dt["a"]({theme:{themes:{light:{primary:yt["a"].purple.darken3,secondary:yt["a"].grey.darken1,accent:yt["a"].shades.black,error:yt["a"].red.accent3},dark:{primary:yt["a"].blue.lighten3}}}}),Pt=(a("466d"),a("ddb0"),a("a925"));function Lt(){var t=a("49f8"),e={};return t.keys().forEach((function(a){var n=a.match(/([A-Za-z0-9-_]+)\./i);if(n&&n.length>1){var s=n[1];e[s]=t(a)}})),e}n["default"].use(Pt["a"]);var It=new Pt["a"]({locale:Object({NODE_ENV:"production",VUE_APP_STRIPE_PUBLIC_KEY_TEST:"pk_test_51ION3qE6VjXXKzJ2c9Lxf0eoYCe6BuizG3Q7OrsNIEOWA4NMlpP3ycbEW7KwaFpJYlA4MFOeosbDuyJuIWMS5xn200GcQxogOw",VUE_APP_STRIPE_PUBLIC_KEY_LIVE:"pk_live_51ION3qE6VjXXKzJ2kkmGArPkYqcuzMC0iFzRGZBCrUmVFEJa3mIh15LvCz8fIJF9DkhdNZmcgzzaTApgD2NFBytH004OVVUHyH",BASE_URL:"/"}).VUE_APP_I18N_LOCALE||"en",fallbackLocale:Object({NODE_ENV:"production",VUE_APP_STRIPE_PUBLIC_KEY_TEST:"pk_test_51ION3qE6VjXXKzJ2c9Lxf0eoYCe6BuizG3Q7OrsNIEOWA4NMlpP3ycbEW7KwaFpJYlA4MFOeosbDuyJuIWMS5xn200GcQxogOw",VUE_APP_STRIPE_PUBLIC_KEY_LIVE:"pk_live_51ION3qE6VjXXKzJ2kkmGArPkYqcuzMC0iFzRGZBCrUmVFEJa3mIh15LvCz8fIJF9DkhdNZmcgzzaTApgD2NFBytH004OVVUHyH",BASE_URL:"/"}).VUE_APP_I18N_FALLBACK_LOCALE||"en",messages:Lt()}),Tt=a("353a"),kt=a.n(Tt),wt=a("3181"),Ct=a.n(wt);kt.a.start({apiKey:"cb57aa27093fb50e11a5f5c1873a8923",plugins:[new Ct.a]}),n["default"].config.productionTip=!1,n["default"].mixin({methods:{capitaliseFirstLetter:function(t){return"string"!==typeof t?"":t.charAt(0).toUpperCase()+t.slice(1)},isObjEmpty:function(t){return null==t||!(Object.keys(t).length>0)}}}),new n["default"]({router:Ot,store:gt,vuetify:Et,i18n:It,render:function(t){return t(H)}}).$mount("#app"),kt.a.getPlugin("vue").installVueErrorHandler(n["default"]);var At=a("f13c");n["default"].use(At)},"6ce2":function(t){t.exports=JSON.parse('{"nav":{"continue":"Weiter","back":"Zurück"},"step-info":{"test":"Hallo i18n !!","title":"Datum & Flug","description":"TOTRANSLATE: Why we ask you for all of this information? To help us make sure you get the best possible experience... To make sure that we provide the highest levels of safety..","flightdate":"Flug Datum","whichflight":"Welcher Flug?","photosvideos":"Fotos + Videos (optional)","photosvideos-description":"Gefilmt mit GoPros auf speziell gebauten Halterungen für einige tolle Erinnerungen!"},"step-timeslot":{"title":"Wie viele Personen fliegen?","description":"Klicken Sie auf eine Zeit um die Anzahl der Passagiere zu bestimmen die fliegen möchten.","large-group-tip":"Tipp: Bei grösseren Gruppen kann die Unterteilung über mehrere Zeiten erfolgen.","total-passengers":"Passagier insgesamt | Passagiere insgesamt","jump-original-date":"Zurück zum Originaldatum","selected-date":"Ausgewähltes Datum","places-free":"{n} Freie Plätze","passengers":"Passagiere"}}')},"6d69":function(t,e,a){"use strict";a("f9ea")},"85ec":function(t,e,a){},af96:function(t,e,a){"use strict";a("27be")},dd11:function(t){t.exports=JSON.parse('{"nav":{"continue":"계속하다","back":"반환"},"step-info":{"test":"hello i18n !!","title":"날짜 및 항공편","description":"TO TRANSLATE: Why we ask you for all of this information? To help us make sure you get the best possible experience... To make sure that we provide the highest levels of safety..","flightdate":"비행 날짜","whichflight":"어느 항공편?","photosvideos":"사진 + 동영상 (선택 사항)","photosvideos-description":"특별한 추억을 위해 특별히 제작 된 스틱에 GoPro로 촬영했습니다!"},"step-timeslot":{"title":"얼마나 많은 사람들이 날고 있습니까?","description":"비행 할 승객 수를 선택하려면 시간을 클릭하십시오.","large-group-tip":"팁 : 더 큰 그룹은 두 번 이상으로 분할 될 수 있습니다.","total-passengers":"총 승객 | 총 승객","jump-original-date":"오리가 날 날짜로 이동","selected-date":"선택한 날짜","places-free":"{n} 개소 무료","passengers":"승객"}}')},e176:function(t,e,a){t.exports=a.p+"img/FlyZermatt-logo-light.893e1f8e.svg"},edd4:function(t){t.exports=JSON.parse('{"nav":{"continue":"Continue","back":"Back"},"step-info":{"test":"hello i18n !!","title":"Date & Flight","description":"Why we ask you for all of this information? To help us make sure you get the best possible experience... To make sure that we provide the highest levels of safety..","flightdate":"Flight Date","whichflight":"Which Flight?","photosvideos":"Photos + Videos (optional)","photosvideos-description":"Filmed with GoPros on specially built sticks for some great memories!"},"step-timeslot":{"title":"How Many are Flying?","description":"Click on a Time to choose how many passengers would like to fly. ","large-group-tip":"Tip: Larger groups can be split into more than one time.","total-passengers":"Passenger in total | Passengers in total","jump-original-date":"Jump to Origanal Date","selected-date":"Selected Date","places-free":"{n} Places free","passengers":"Passengers"}}')},f9ea:function(t,e,a){}});
//# sourceMappingURL=app.59c83e0f.js.map