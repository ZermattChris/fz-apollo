(function(t){function e(e){for(var n,a,r=e[0],l=e[1],c=e[2],u=0,h=[];u<r.length;u++)a=r[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&h.push(o[a][0]),o[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);f&&f(e);while(h.length)h.shift()();return s.push.apply(s,c||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],n=!0,a=1;a<i.length;a++){var r=i[a];0!==o[r]&&(n=!1)}n&&(s.splice(e--,1),t=l(l.s=i[0]))}return t}var n={},a={app:0},o={app:0},s=[];function r(t){return l.p+"js/"+({TimeSlot:"TimeSlot"}[t]||t)+"."+{TimeSlot:"63d72a3b"}[t]+".js"}function l(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,l),i.l=!0,i.exports}l.e=function(t){var e=[],i={TimeSlot:1};a[t]?e.push(a[t]):0!==a[t]&&i[t]&&e.push(a[t]=new Promise((function(e,i){for(var n="css/"+({TimeSlot:"TimeSlot"}[t]||t)+"."+{TimeSlot:"6f733194"}[t]+".css",o=l.p+n,s=document.getElementsByTagName("link"),r=0;r<s.length;r++){var c=s[r],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===o))return e()}var h=document.getElementsByTagName("style");for(r=0;r<h.length;r++){c=h[r],u=c.getAttribute("data-href");if(u===n||u===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete a[t],f.parentNode.removeChild(f),i(s)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[t]=0})));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise((function(e,i){n=o[t]=[e,i]}));e.push(n[2]=s);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=r(t);var h=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(f);var i=o[t];if(0!==i){if(i){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;h.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",h.name="ChunkLoadError",h.type=n,h.request=a,i[1](h)}o[t]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=n,l.d=function(t,e,i){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(i,n,function(e){return t[e]}.bind(null,n));return i},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var h=0;h<c.length;h++)e(c[h]);var f=u;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var n=i("8a23"),a=i.n(n);a.a},1758:function(t,e,i){},"36ad":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h1",{staticClass:"ml-n2 disable-select",domProps:{innerHTML:t._s(t.title)}}),i("p",[t._t("default",[t._v("Default Page Header text...")])],2),i("v-divider")],1)},a=[],o={name:"PageHeader",props:{title:{type:String,default:"Title Default"}}},s=o,r=i("2877"),l=i("6544"),c=i.n(l),u=i("ce7e"),h=Object(r["a"])(s,n,a,!1,null,"083faaa8",null);e["a"]=h.exports;c()(h,{VDivider:u["a"]})},"56d7":function(t,e,i){"use strict";i.r(e);i("fb6a"),i("b64b"),i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-overlay",{attrs:{opacity:"0.2",value:t.overlay}}),t.overlay?n("v-progress-circular",{staticStyle:{position:"absolute","z-index":"500",top:"30%",left:"50%","margin-top":"-32px","margin-left":"-32px"},attrs:{indeterminate:"",color:"primary",size:"64"}}):t._e(),n("v-app-bar",{attrs:{app:"",color:"primary",dark:"","hide-on-scroll":""}},[n("v-btn",{staticClass:"text-capitalize",class:t.canGoBack?"":"d-none",staticStyle:{position:"absolute",left:"-5px"},attrs:{text:""},on:{click:t.onBackBtnClick}},[n("v-icon",{attrs:{left:""}},[t._v(t._s(t.iconPrevChevron))]),t._v(" Back ")],1),n("div",{staticClass:"d-flex align-center",attrs:{id:"logo"}},[n("v-img",{staticClass:"shrink mr-2",attrs:{alt:"FlyZermatt Logo",contain:"",src:i("e176"),transition:"scale-transition",width:"220"}})],1),n("v-btn",{staticClass:"text-capitalize",staticStyle:{position:"absolute",right:"5px"},attrs:{text:""},on:{click:t.onClearData}},[n("v-icon",{attrs:{left:""}},[t._v(t._s(t.iconPrevChevron))]),t._v(" Clear ")],1)],1),n("v-main",[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"12",md:"1",lg:"2"}}),n("v-col",{staticClass:"pa-5 pa-sm-8 pa-md-12",attrs:{cols:"12",md:"10",lg:"8"}},[n("router-view",{on:{"form-is-valid":t.onEnableContinueBtn,"data-changed":t.saveLocalStorageValues}}),n("div",{staticClass:"text-center mt-12 mb-6"},[n("v-btn",{attrs:{rounded:"",color:"primary",elevation:"4",disabled:!t.canContinue},on:{click:t.onContinueBtnClick}},[t._v(" Continue "),n("v-icon",{attrs:{right:""}},[t._v(t._s(t.iconNextArrow))])],1)],1)],1),n("v-col",{attrs:{cols:"12",md:"1",lg:"2"}})],1)],1),n("v-footer",{staticClass:"justify-end pr-2",attrs:{color:"primary",dark:"",app:"",padless:""}},[n("div",{staticClass:"white--text overline"},[t._v("© "+t._s(t.getCurrentYear)+" - FlyZermatt")])]),n("v-overlay",{attrs:{value:t.isAppStillLoading}})],1)},o=[],s=(i("b0c0"),i("96cf"),i("1da1")),r=i("b166"),l=i("94ed"),c={name:"App",components:{},mounted:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$store.dispatch("init");case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),console.error("My error",e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))()},beforeUpdate:function(){"Start"===this.$route.name?this.onEnableBackBtn(!1):this.onEnableBackBtn(!0)},created:function(){this.loadLocalStorageValues()},data:function(){return{overlay:!1,overlayDelay:500,iconNextArrow:l["b"],iconPrevChevron:l["e"],canGoBack:!1,canContinue:!1}},methods:{onEnableContinueBtn:function(t){this.canContinue=t},onContinueBtnClick:function(){this.isObjEmpty(this.$store.state.timeListDates)&&(console.log("Clicked Continue from Step 1."),this.$store.dispatch("timeListDates")),this.$router.push({name:"Time",path:"time"}),this.onEnableContinueBtn(!1),this.onEnableBackBtn(!0)},onEnableBackBtn:function(t){this.canGoBack=t},onBackBtnClick:function(){this.$router.go(-1)},onClearData:function(){this.$store.dispatch("setNrPeople",0),this.$store.dispatch("setFlightDate",""),this.$store.dispatch("setFlight",""),this.$store.dispatch("setWantsPhotos",!1),this.saveLocalStorageValues()},loadLocalStorageValues:function(){if(localStorage.nrPeople&&this.$store.dispatch("setNrPeople",localStorage.nrPeople),localStorage.flightDate&&this.$store.dispatch("setFlightDate",localStorage.flightDate),localStorage.selectedFlight&&this.$store.dispatch("setFlight",localStorage.selectedFlight),localStorage.wantsPhotos){var t=localStorage.wantsPhotos;t="true"===t,this.$store.dispatch("setWantsPhotos",t)}},saveLocalStorageValues:function(){localStorage.nrPeople=this.$store.state.nrPeople,localStorage.flightDate=this.$store.state.flightDate,localStorage.selectedFlight=this.$store.state.selectedFlight,localStorage.wantsPhotos=this.$store.state.wantsPhotos}},computed:{getCurrentYear:function(){return Object(r["a"])(Date.now(),"yyyy")},isAppStillLoading:function(){return this.$store.state._app_loading}}},u=c,h=(i("034f"),i("2877")),f=i("6544"),p=i.n(f),d=i("7496"),g=i("40dc"),m=i("8336"),v=i("62ad"),b=i("553a"),_=i("132d"),y=i("adda"),S=i("f6c4"),D=i("a797"),C=i("490a"),O=i("0fd9"),P=Object(h["a"])(u,a,o,!1,null,null,null),x=P.exports;p()(P,{VApp:d["a"],VAppBar:g["a"],VBtn:m["a"],VCol:v["a"],VFooter:b["a"],VIcon:_["a"],VImg:y["a"],VMain:S["a"],VOverlay:D["a"],VProgressCircular:C["a"],VRow:O["a"]});i("d3b7");var k=i("8c4f"),V=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"stepStart",staticClass:"page",attrs:{id:"step-start"}},[i("PageHeader",{attrs:{title:"1. Get Started..."}},[t._v(" Why we ask you for all of this information? To help us make sure you get the best possible experience... To make sure that we provide the highest levels of safety.. ")]),i("div",{staticClass:"ml-n2 ml-sm-2 ml-md-8 ml-lg-12",attrs:{id:"steps-controls"}},[i("h3",{staticClass:"disable-select"},[i("v-icon",{attrs:{color:t.isValidNrPeople?"success":"primary"}},[t._v(t._s(t.isValidNrPeople?t.stepIconCompleted:t.stepIcon))]),t._v(" Nr of People Flying ")],1),i("div",{staticClass:"controls"},[i("NumberScroller",{ref:"numberScroller",attrs:{min:"0",max:t.getMaxPilots,"min-message":"Min per Booking is 1","max-message":t.getMaxMessage},on:{"at-max-value":t.showBigGroupWarning},model:{value:t.nrPeople,callback:function(e){t.nrPeople=e},expression:"nrPeople"}})],1),i("h3",{staticClass:"disable-select"},[i("v-icon",{attrs:{color:t.flightDate?"success":"primary"}},[t._v(t._s(t.flightDate?t.stepIconCompleted:t.stepIcon))]),t._v(" Flight Date ")],1),i("div",{staticClass:"controls"},[i("v-dialog",{ref:"dialog",attrs:{"return-value":t.flightDate,width:"290px"},on:{"update:returnValue":function(e){t.flightDate=e},"update:return-value":function(e){t.flightDate=e},change:t.onValueChanged},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[i("v-text-field",t._g({staticStyle:{width:"300px"},attrs:{"prepend-icon":"event",readonly:"",outlined:"",hint:t.isValidFlightDate?"":"Click to choose your Flight Date","persistent-hint":""},on:{keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.flightModal=!0}},model:{value:t.formatISODate,callback:function(e){t.formatISODate=e},expression:"formatISODate"}},n))]}}]),model:{value:t.flightModal,callback:function(e){t.flightModal=e},expression:"flightModal"}},[i("v-date-picker",{attrs:{scrollable:"","show-current":"",min:t.flightMinDate,max:t.flightMaxDate},model:{value:t.flightDate,callback:function(e){t.flightDate=e},expression:"flightDate"}},[i("v-spacer"),i("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.flightModal=!1}}},[t._v("Cancel")]),i("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.dialog.save(t.flightDate)}}},[t._v("OK")])],1)],1)],1),i("h3",{staticClass:"disable-select"},[i("v-icon",{attrs:{color:t.flightChosen?"success":"primary"}},[t._v(t._s(t.flightOptionsDropMenuList?t.stepIconCompleted:t.stepIcon)+" ")]),t._v(" Which Flight? ")],1),i("div",{staticClass:"controls"},[i("v-select",{staticClass:"disable-select",staticStyle:{"max-width":"300px"},attrs:{items:t.flightOptionsDropMenuList,"item-text":"name","item-value":"id","prepend-icon":t.flightChosen?t.cloudIcon:t.cloudQuestionIcon,loading:t.flightOptionsLoaded,solo:"",outlined:"",disabled:!t.isValidFlightDate,hint:t.isValidFlightDate?"":"Please choose a Flight Date first...","persistent-hint":""},on:{change:t.onValueChanged},model:{value:t.flightChosen,callback:function(e){t.flightChosen=e},expression:"flightChosen"}})],1),i("h3",[i("v-icon",{attrs:{color:t.switchPhotos?"success":"primary"}},[t._v(t._s(t.cameraIcon))]),t._v(" Photos + Videos (optional) ")],1),i("div",{staticClass:"controls"},[i("v-switch",{attrs:{id:"photosSwitch",color:"success",inset:"",label:"Filmed with GoPros on specially built sticks for some great memories!"},on:{change:t.onValueChanged},model:{value:t.switchPhotos,callback:function(e){t.switchPhotos=e},expression:"switchPhotos"}})],1),i("div",{staticClass:"text-center",attrs:{id:"Big-Group-Dialog"}},[i("v-dialog",{attrs:{width:"400"},model:{value:t.bigGroupDialog,callback:function(e){t.bigGroupDialog=e},expression:"bigGroupDialog"}},[i("v-card",[i("v-card-title",{staticClass:"primary",attrs:{"primary-title":""}},[i("div",{staticClass:"white--text disable-select"},[t._v(" Booking a Big Group ")])]),i("v-card-text",{staticClass:"pt-6 black--text"},[t._v(" If your group contains more than "+t._s(t.getMaxPilots)+" people... "),i("br"),i("br"),t._v(" ...you can either do 2 or more seperate Bookings here, splitting your group amongst available times, or send us a "),i("strong",[t._v("Booking Message")]),t._v(" (later in this booking process) or just give us a ring at: Tel +41 79 643-6808 ")]),i("v-divider"),i("v-card-actions",[i("v-spacer"),i("v-btn",{ref:"closeBigGroupDialog",attrs:{color:"primary",text:""},on:{click:function(e){t.bigGroupDialog=!1}}},[t._v(" Close ")])],1)],1)],1)],1)])],1)},w=[],I=(i("99af"),i("4fad"),i("3835")),T=i("2230"),L=i("e3ee"),M=i("36ad"),F=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-card",{staticClass:"scrollerContainer",class:{focused:t.focused},attrs:{flat:"",outlined:""}},[i("v-icon",{attrs:{id:"decrement",size:"100%"},on:{click:t.onDown,focus:function(e){t.focused=!0},blur:function(e){t.focused=!1}}},[t._v(t._s(t.iconMinus))]),i("input",{ref:"numberInput",staticClass:"nrInput",attrs:{readonly:""},domProps:{value:t.myVal},on:{input:function(e){return t.onInput(e.target.value)},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1}}}),i("v-icon",{attrs:{id:"increment",size:"100%"},on:{click:t.onUp,focus:function(e){t.focused=!0},blur:function(e){t.focused=!1}}},[t._v(t._s(t.iconPlus))])],1),i("div",{staticClass:"tweaker v-text-field__details"},[i("div",{staticClass:"v-messages theme--light"},[i("div",{staticClass:"v-messages__wrapper"},[t._v(" "+t._s(t.scrollerMessage)+" ")])])])],1)},E=[],$=(i("a9e3"),i("2b19"),{name:"NumberScroller",props:{value:{type:[String,Number],required:!0},min:{type:[String,Number],required:!0},max:{type:[String,Number],required:!0},minMessage:String,maxMessage:String},data:function(){return{myVal:this.value,prevVal:this.value,focused:!1,iconPlus:l["i"],iconMinus:l["h"],scrollerMessage:""}},methods:{onInput:function(t){var e=parseInt(t);!0!==Object.is(e,Number.NaN)?(this.myVal=e,this.myVal>=this.max&&this.atMaxVal(),this.myVal<=this.min&&this.atMinVal(),this.myVal>this.min&&this.myVal<this.max&&(this.scrollerMessage=""),this.prevVal=this.myVal,this.$emit("input",this.myVal)):this.myVal=this.prevVal},atMaxVal:function(){this.myVal=this.max,this.scrollerMessage=this.maxMessage,this.$emit("at-max-value",this.myVal)},atMinVal:function(){this.myVal=this.min,this.scrollerMessage=this.minMessage,this.$emit("at-min-value",this.myVal)},onDown:function(){this.myVal--,this.onInput(this.myVal)},onUp:function(){this.myVal++,this.onInput(this.myVal)}},watch:{value:function(t){this.myVal=t,this.prevVal=t}}}),N=$,B=(i("8e6b"),i("b0af")),A=Object(h["a"])(N,F,E,!1,null,"6924e7ce",null),j=A.exports;p()(A,{VCard:B["a"],VIcon:_["a"]});var G=i("f13c"),H={name:"Start",components:{NumberScroller:j,PageHeader:M["a"]},props:{},data:function(){return{stepIcon:l["a"],stepIconCompleted:l["d"],cameraIcon:l["c"],cloudQuestionIcon:l["g"],cloudIcon:l["f"],flightOptionsDropMenuList:this.buildFlightList(),flightMenu:!1,flightModal:!1,bigGroupDialog:!1,isPageValid:this.areAllInputsValid}},beforeMount:function(){this.$store.dispatch("flightOptions")},mounted:function(){var t=this;setTimeout((function(){0==t.nrPeople&&t.$refs.numberScroller.$el.querySelector("#increment").focus()})),this.onValueChanged()},beforeUpdate:function(){this.$emit("data-changed")},updated:function(){this.onValueChanged()},computed:{flightOptionsLoaded:function(){return this.$store.state._flightsList_loading},forWatchingBothFlightDateAndFlightType:function(){return"".concat(this.flightDate,"|").concat(this.flightChosen)},nrPeople:{get:function(){return this.$store.state.nrPeople},set:function(t){return this.$store.dispatch("setNrPeople",t)}},getMaxPilots:function(){return this.$store.state._maxPilots},flightDate:{get:function(){return this.$store.state.flightDate},set:function(t){t!==this.$store.state.flightDate&&(console.log("Think need to load flightOptions list here. flightDate, set()"),this.$store.dispatch("setFlightDate",t),this.$store.dispatch("flightOptions"),this.buildFlightList())}},flightChosen:{get:function(){return this.$store.state.selectedFlight},set:function(t){return this.$store.dispatch("setFlight",t)}},switchPhotos:{get:function(){return this.$store.state.wantsPhotos},set:function(t){return this.$store.dispatch("setWantsPhotos",t)}},flightMinDate:function(){var t=this.$store.state._bookDaysOffset;return Object(r["a"])(Object(T["a"])(Date.now(),{days:t}),"yyyy-MM-dd")},flightMaxDate:function(){var t=this.$store.state._bookMonthsOffset;return Object(r["a"])(Object(T["a"])(Date.now(),{months:t}),"yyyy-MM-dd")},flightsWatch:function(){return console.log("flightsWatch triggered."),this.$store.state._flightsList},getMaxMessage:function(){return"Max per Booking is: "+this.$store.state._maxPilots},isValidNrPeople:function(){return this.nrPeople>0&&this.nrPeople<=this.$store.state._maxPilots},isValidFlightDate:function(){return""!==this.flightDate&&null!==this.flightDate},isValidFlightChosen:function(){return""!==this.flightDate&&""!==this.flightChosen},areAllInputsValid:function(){return!!(this.isValidNrPeople&&this.isValidFlightDate&&this.isValidFlightChosen)},formatISODate:function(){if(""===this.flightDate)return"";var t=Object(L["a"])(this.flightDate),e=Object(r["a"])(t,"PPPP");return e}},methods:{onValueChanged:function(){return this.areAllInputsValid?(this.$emit("form-is-valid",!0),!0):(this.$emit("form-is-valid",!1),!1)},buildFlightList:function(){var t=this.$store.state._flightsList;if(console.log("build flight list for drop menu",t),!this.isObjEmpty(t)){for(var e=[],i=0,n=Object.entries(t);i<n.length;i++){var a=Object(I["a"])(n[i],2),o=a[0],s=a[1],r={id:"".concat(o),name:"".concat(s)};e.push(r)}return e}},showBigGroupWarning:function(){this.bigGroupDialog=!0}},watch:{forWatchingBothFlightDateAndFlightType:function(){""!==this.flightChosen&&this.$store.dispatch("timeListDates")},flightsWatch:function(){this.flightOptionsDropMenuList=this.buildFlightList()},flightDate:function(t,e){t!=e&&G.scrollTo("#photosSwitch",800)},bigGroupDialog:function(t){var e=this;!0===t&&setTimeout((function(){e.$refs.closeBigGroupDialog.$el.focus()}))}}},R=H,W=(i("6780"),i("99d9")),z=i("2e4b"),q=i("169a"),K=i("ce7e"),U=i("b974"),Y=i("2fa4"),J=i("b73d"),Z=i("8654"),Q=Object(h["a"])(R,V,w,!1,null,"7092aa2a",null),X=Q.exports;p()(Q,{VBtn:m["a"],VCard:B["a"],VCardActions:W["a"],VCardText:W["b"],VCardTitle:W["c"],VDatePicker:z["a"],VDialog:q["a"],VDivider:K["a"],VIcon:_["a"],VSelect:U["a"],VSpacer:Y["a"],VSwitch:J["a"],VTextField:Z["a"]}),n["a"].use(k["a"]);var tt=[{path:"/",name:"Start",component:X},{path:"/time",name:"Time",component:function(){return i.e("TimeSlot").then(i.bind(null,"543b"))}}],et=new k["a"]({mode:"history",base:"/",routes:tt,scrollBehavior:function(){return new Promise((function(t){setTimeout((function(){t({x:0,y:0})}),0)}))}}),it=et,nt=i("2f62"),at=i("bc3a"),ot=i.n(at),st=i("9e87");n["a"].use(nt["a"]);var rt=new nt["a"].Store({state:{_DEV:!0,nrPeople:0,flightDate:"",selectedFlight:"",wantsPhotos:!1,_maxPilots:-1,_bookDaysOffset:-1,_bookMonthsOffset:-1,_videoPrice:-1,_flightsList:null,_timeListDates:null,_app_loading:!0,_flightsList_loading:!1,_timeList_loading:!0},mutations:{APP_LOADING:function(t,e){t._app_loading=e},FLIGHTSLIST_LOADING:function(t,e){t._flightsList_loading=e},TIMELIST_LOADING:function(t,e){t._timeList_loading=e},TIMELIST_DATES:function(t,e){t._timeListDates=e},MAX_PILOTS:function(t,e){t._maxPilots=e},BOOK_DAYS_OFFSET:function(t,e){t._bookDaysOffset=e},BOOK_MONTS_OFFSET:function(t,e){t._bookMonthsOffset=e},VIDEO_PRICE:function(t,e){t._videoPrice=e},CHOSEN_NR_PEOPLE:function(t,e){t.nrPeople=e},CHOSEN_DATE:function(t,e){t.flightDate=e},CHOSEN_FLIGHT:function(t,e){t.selectedFlight=e},CHOSEN_PHOTOS:function(t,e){t.wantsPhotos=e},FLIGHTS_LIST:function(t,e){t._flightsList=e}},actions:{timeListDates:function(t){return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit("TIMELIST_LOADING",!0),e.abrupt("return",ot.a.get("http://localhost:3000/flightsdates/").then((function(e){var i=e.data;t.commit("TIMELIST_DATES",i)})).catch((function(e){console.log(e),t.state._DEV&&t.commit("TIMELIST_DATES",st)})).finally((function(){return t.commit("TIMELIST_LOADING",!1)})));case 2:case"end":return e.stop()}}),e)})))()},init:function(t){return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",ot.a.get("https://fz-backend.simpleitsolutions.ch/onlinebooking/api/init").then((function(e){var i=e.data;t.commit("MAX_PILOTS",+i["max-pilots"]),t.commit("BOOK_DAYS_OFFSET",+i["book-days-from-today"]),t.commit("BOOK_MONTS_OFFSET",+i["book-future-months"]),t.commit("VIDEO_PRICE",+i["video-cost"])})).catch((function(t){console.log(t)})).finally((function(){return t.commit("APP_LOADING",!1)})));case 1:case"end":return e.stop()}}),e)})))()},flightOptions:function(t){return Object(s["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i=t.state.flightDate,""!==i){e.next=3;break}return e.abrupt("return");case 3:return t.commit("FLIGHTSLIST_LOADING",!0),e.abrupt("return",ot.a.get("https://fz-backend.simpleitsolutions.ch/onlinebooking/api/flightoptions/"+i).then((function(e){var i=e.data;t.commit("FLIGHTS_LIST",i)})).catch((function(t){console.log(t)})).finally((function(){return t.commit("FLIGHTSLIST_LOADING",!1)})));case 5:case"end":return e.stop()}}),e)})))()},setNrPeople:function(t,e){t.commit("CHOSEN_NR_PEOPLE",+e)},setFlightDate:function(t,e){t.commit("CHOSEN_DATE",e)},setFlight:function(t,e){t.commit("CHOSEN_FLIGHT",e)},setWantsPhotos:function(t,e){t.commit("CHOSEN_PHOTOS",e)},setFlightsList:function(t,e){t.commit("FLIGHTS_LIST",e)}}}),lt=(i("d1e78"),i("f309")),ct=i("fcf4");n["a"].use(lt["a"]);var ut=new lt["a"]({theme:{themes:{light:{primary:ct["a"].purple.darken3,secondary:ct["a"].grey.darken1,accent:ct["a"].shades.black,error:ct["a"].red.accent3},dark:{primary:ct["a"].blue.lighten3}}}});n["a"].config.productionTip=!1,n["a"].mixin({methods:{capitaliseFirstLetter:function(t){return"string"!==typeof t?"":t.charAt(0).toUpperCase()+t.slice(1)},isObjEmpty:function(t){return null==t||!(Object.keys(t).length>0)}}}),new n["a"]({router:it,store:rt,vuetify:ut,render:function(t){return t(x)}}).$mount("#app")},6780:function(t,e,i){"use strict";var n=i("f70e"),a=i.n(n);a.a},"8a23":function(t,e,i){},"8e6b":function(t,e,i){"use strict";var n=i("1758"),a=i.n(n);a.a},"9e87":function(t){t.exports=JSON.parse('{"2020-06-20":{"08:30":6,"10:15":2,"11:45":2,"13:15":5,"14:45":0,"16:15":7,"17:00":6,"19:00":3},"2020-06-21":{"08:30":1,"10:15":3,"11:45":7,"13:15":6,"14:45":0,"16:15":4,"17:00":7,"19:00":2},"2020-06-22":{"08:30":4,"10:15":1,"11:45":7,"13:15":1,"14:45":6,"16:15":4,"17:00":5,"19:00":4},"2020-06-23":{"08:30":5,"10:15":6,"11:45":0,"13:15":4,"14:45":2,"16:15":1,"17:00":0,"19:00":2},"2020-06-24":{"08:30":1,"10:15":2,"11:45":2,"13:15":1,"14:45":2,"16:15":4,"17:00":6,"19:00":1},"2020-06-25":{"08:30":0,"10:15":6,"11:45":3,"13:15":2,"14:45":4,"16:15":7,"17:00":3,"19:00":2},"2020-06-26":{"08:30":7,"10:15":6,"11:45":6,"13:15":6,"14:45":1,"16:15":5,"17:00":1,"19:00":3},"2020-06-27":{"08:30":2,"10:15":4,"11:45":1,"13:15":1,"14:45":2,"16:15":4,"17:00":6,"19:00":7},"2020-06-28":{"08:30":7,"10:15":0,"11:45":2,"13:15":4,"14:45":5,"16:15":4,"17:00":6,"19:00":3},"2020-06-29":{"08:30":6,"10:15":3,"11:45":3,"13:15":6,"14:45":0,"16:15":6,"17:00":5,"19:00":2},"2020-06-30":{"08:30":7,"10:15":7,"11:45":2,"13:15":1,"14:45":3,"16:15":2,"17:00":6,"19:00":0},"2020-07-01":{"08:30":7,"10:15":1,"11:45":0,"13:15":1,"14:45":2,"16:15":5,"17:00":3,"19:00":7},"2020-07-02":{"08:30":1,"10:15":3,"11:45":3,"13:15":3,"14:45":0,"16:15":4,"17:00":4,"19:00":6},"2020-07-03":{"08:30":5,"10:15":6,"11:45":0,"13:15":1,"14:45":3,"16:15":1,"17:00":0,"19:00":5},"2020-07-04":{"08:30":3,"10:15":1,"11:45":7,"13:15":7,"14:45":1,"16:15":0,"17:00":2,"19:00":2},"2020-07-05":{"08:30":6,"10:15":7,"11:45":2,"13:15":7,"14:45":1,"16:15":2,"17:00":1,"19:00":1},"2020-07-06":{"08:30":0,"10:15":5,"11:45":2,"13:15":7,"14:45":3,"16:15":2,"17:00":0,"19:00":3},"2020-07-07":{"08:30":4,"10:15":5,"11:45":4,"13:15":5,"14:45":5,"16:15":4,"17:00":5,"19:00":2},"2020-07-08":{"08:30":0,"10:15":3,"11:45":5,"13:15":3,"14:45":5,"16:15":7,"17:00":5,"19:00":0},"2020-07-09":{"08:30":3,"10:15":6,"11:45":0,"13:15":6,"14:45":6,"16:15":3,"17:00":5,"19:00":1},"2020-07-10":{"08:30":7,"10:15":3,"11:45":3,"13:15":7,"14:45":4,"16:15":2,"17:00":2,"19:00":3},"2020-07-11":{"08:30":3,"10:15":2,"11:45":5,"13:15":3,"14:45":5,"16:15":6,"17:00":6,"19:00":7},"2020-07-12":{"08:30":0,"10:15":2,"11:45":7,"13:15":1,"14:45":2,"16:15":3,"17:00":2,"19:00":7},"2020-07-13":{"08:30":4,"10:15":6,"11:45":2,"13:15":2,"14:45":1,"16:15":3,"17:00":2,"19:00":5},"2020-07-14":{"08:30":1,"10:15":1,"11:45":1,"13:15":7,"14:45":2,"16:15":5,"17:00":2,"19:00":6},"2020-07-15":{"08:30":3,"10:15":1,"11:45":0,"13:15":0,"14:45":7,"16:15":1,"17:00":2,"19:00":3},"2020-07-16":{"08:30":2,"10:15":1,"11:45":0,"13:15":0,"14:45":3,"16:15":3,"17:00":5,"19:00":3},"2020-07-17":{"08:30":2,"10:15":7,"11:45":5,"13:15":3,"14:45":0,"16:15":6,"17:00":5,"19:00":6},"2020-07-18":{"08:30":5,"10:15":7,"11:45":4,"13:15":4,"14:45":4,"16:15":4,"17:00":0,"19:00":5},"2020-07-19":{"08:30":5,"10:15":1,"11:45":3,"13:15":4,"14:45":3,"16:15":6,"17:00":4,"19:00":6}}')},e176:function(t,e,i){t.exports=i.p+"img/FlyZermatt-logo-light.893e1f8e.svg"},f70e:function(t,e,i){}});
//# sourceMappingURL=app.f59ce4c9.js.map