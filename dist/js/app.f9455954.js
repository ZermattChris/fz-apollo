(function(t){function e(e){for(var a,n,r=e[0],l=e[1],c=e[2],u=0,h=[];u<r.length;u++)n=r[u],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&h.push(o[n][0]),o[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);f&&f(e);while(h.length)h.shift()();return s.push.apply(s,c||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],a=!0,n=1;n<i.length;n++){var r=i[n];0!==o[r]&&(a=!1)}a&&(s.splice(e--,1),t=l(l.s=i[0]))}return t}var a={},n={app:0},o={app:0},s=[];function r(t){return l.p+"js/"+({TimeSlot:"TimeSlot"}[t]||t)+"."+{TimeSlot:"02e42122"}[t]+".js"}function l(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,l),i.l=!0,i.exports}l.e=function(t){var e=[],i={TimeSlot:1};n[t]?e.push(n[t]):0!==n[t]&&i[t]&&e.push(n[t]=new Promise((function(e,i){for(var a="css/"+({TimeSlot:"TimeSlot"}[t]||t)+"."+{TimeSlot:"e67be915"}[t]+".css",o=l.p+a,s=document.getElementsByTagName("link"),r=0;r<s.length;r++){var c=s[r],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===a||u===o))return e()}var h=document.getElementsByTagName("style");for(r=0;r<h.length;r++){c=h[r],u=c.getAttribute("data-href");if(u===a||u===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete n[t],f.parentNode.removeChild(f),i(s)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){n[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,i){a=o[t]=[e,i]}));e.push(a[2]=s);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=r(t);var h=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(f);var i=o[t];if(0!==i){if(i){var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;h.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",h.name="ChunkLoadError",h.type=a,h.request=n,i[1](h)}o[t]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=a,l.d=function(t,e,i){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(i,a,function(e){return t[e]}.bind(null,a));return i},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var h=0;h<c.length;h++)e(c[h]);var f=u;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var a=i("8a23"),n=i.n(a);n.a},"1c57":function(t,e,i){"use strict";var a=i("80e6"),n=i.n(a);n.a},"276d":function(t,e,i){},"36ad":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h1",{staticClass:"ml-n2 disable-select",domProps:{innerHTML:t._s(t.title)}}),i("p",[t._t("default",[t._v("Default Page Header text...")])],2),i("v-divider")],1)},n=[],o={name:"PageHeader",props:{title:{type:String,default:"Title Default"}}},s=o,r=i("2877"),l=i("6544"),c=i.n(l),u=i("ce7e"),h=Object(r["a"])(s,a,n,!1,null,"083faaa8",null);e["a"]=h.exports;c()(h,{VDivider:u["a"]})},"56d7":function(t,e,i){"use strict";i.r(e);i("fb6a"),i("b64b"),i("e260"),i("e6cf"),i("cca6"),i("a79d");var a=i("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-overlay",{attrs:{opacity:"0.2",value:t.overlay}}),t.overlay?a("v-progress-circular",{staticStyle:{position:"absolute","z-index":"500",top:"30%",left:"50%","margin-top":"-32px","margin-left":"-32px"},attrs:{indeterminate:"",color:"primary",size:"64"}}):t._e(),a("v-app-bar",{attrs:{app:"",color:"primary",dark:"","hide-on-scroll":""}},[a("v-btn",{staticClass:"text-capitalize",class:t.canGoBack?"":"d-none",staticStyle:{position:"absolute",left:"-5px"},attrs:{text:""},on:{click:t.onBackBtnClick}},[a("v-icon",{attrs:{left:""}},[t._v(t._s(t.iconPrevChevron))]),t._v(" Back ")],1),a("div",{staticClass:"d-flex align-center",attrs:{id:"logo"}},[a("v-img",{staticClass:"shrink mr-2",attrs:{alt:"FlyZermatt Logo",contain:"",src:i("e176"),transition:"scale-transition",width:"220"}})],1),t._isDEV?a("v-btn",{staticClass:"text-capitalize",staticStyle:{position:"absolute",right:"5px"},attrs:{text:""},on:{click:t.onClearData}},[a("v-icon",{attrs:{left:""}},[t._v(t._s(t.iconPrevChevron))]),t._v(" Clear ")],1):t._e()],1),a("v-main",[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12",md:"1",lg:"2"}}),a("v-col",{staticClass:"pa-5 pa-sm-8 pa-md-12",attrs:{cols:"12",md:"10",lg:"8"}},[a("router-view"),a("div",{staticClass:"text-center mt-12 mb-6"},[a("NavButton",{ref:"ContinueBtn"})],1)],1),a("v-col",{attrs:{cols:"12",md:"1",lg:"2"}})],1)],1),a("v-footer",{staticClass:"justify-end pr-2",attrs:{color:"primary",dark:"",app:"",padless:""}},[a("div",{staticClass:"white--text overline"},[t._v("© "+t._s(t.getCurrentYear)+" - FlyZermatt")])]),a("v-overlay",{attrs:{value:t.isAppStillLoading}})],1)},o=[],s=(i("b0c0"),i("96cf"),i("1da1")),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-btn",{attrs:{rounded:"",color:"primary",elevation:"4",disabled:t.isDisabled},on:{click:t.navigate}},[t._v(" Continue "),i("v-icon",{attrs:{right:""}},[t._v(t._s(t.iconNextArrow))])],1)},l=[],c=(i("07ac"),i("94ed")),u={name:"NavButton",props:{},data:function(){return{isDisabled:!0,iconNextArrow:c["b"]}},created:function(){var t=this;this.$store.watch((function(t){return t._navList}),(function(){t.update()}),{deep:!0})},methods:{update:function(){console.log("Updating CONTINUE Btn");var t=this.$route.name,e=this.$store.state._navList,i=Object.keys(e)[0],a=Object.values(e)[0];t===i&&(this.isDisabled=!a)},navigate:function(){var t=this.$store.state._currentStep;switch(console.log("Navigating the CONTINUE Btn"),t){case"Start":console.log("Leaving Start"),this.$store.dispatch("setCurrentStep","Time");break;case"Time":console.log("Leaving Time"),this.$store.dispatch("setCurrentStep","Info");break;case"Info":console.log("Leaving Info"),this.$store.dispatch("setCurrentStep","Next");break;case"Next":console.log("Leaving Next"),this.$store.dispatch("setCurrentStep","Pay");break;case"Pay":console.log("Leaving Pay"),this.$store.dispatch("setCurrentStep","Thanks");break;case"Thanks":console.log("Leaving Thanks. Where next?? (homepage??)"),this.$store.dispatch("setCurrentStep","Completed");break}var e=this.$store.state._currentStep;console.log("Nav to:",e),this.$router.push({path:e})}}},h=u,f=i("2877"),p=i("6544"),d=i.n(p),g=i("8336"),m=i("132d"),v=Object(f["a"])(h,r,l,!1,null,null,null),b=v.exports;d()(v,{VBtn:g["a"],VIcon:m["a"]});var _=i("b166"),y={name:"App",components:{NavButton:b},mounted:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.$refs.ContinueBtn.update(),e.prev=1,e.next=4,t.$store.dispatch("init");case 4:e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](1),console.error("My error",e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})))()},beforeUpdate:function(){"Start"===this.$route.name?this.onEnableBackBtn(!1):this.onEnableBackBtn(!0)},beforeCreate:function(){console.log("TODO: App Load -> Need to run some checks looking for stale localStorage data.")},data:function(){return{overlay:!1,overlayDelay:500,iconPrevChevron:c["e"],canGoBack:!1}},methods:{onContinueBtnClick:function(){this.isObjEmpty(this.$store.state.timeListDates)&&this.$store.dispatch("timeListDates"),this.$router.push({path:"time"}),this.onEnableBackBtn(!0)},onEnableBackBtn:function(t){this.canGoBack=t},onBackBtnClick:function(){this.$router.go(-1)},onClearData:function(){!0===this.$store.state._DEV&&(this.$store.dispatch("setNrPeople",0),this.$store.dispatch("setFlightDate",""),this.$store.dispatch("setFlight",""),this.$store.dispatch("setWantsPhotos",!1),this.$store.dispatch("setTimeSlot",0))}},computed:{_isDEV:function(){return this.$store.state._DEV},getCurrentYear:function(){return Object(_["a"])(Date.now(),"yyyy")},isAppStillLoading:function(){return this.$store.state._app_loading}}},S=y,D=(i("034f"),i("7496")),O=i("40dc"),C=i("62ad"),T=i("553a"),k=i("adda"),P=i("f6c4"),x=i("a797"),L=i("490a"),I=i("0fd9"),V=Object(f["a"])(S,n,o,!1,null,null,null),w=V.exports;d()(V,{VApp:D["a"],VAppBar:O["a"],VBtn:g["a"],VCol:C["a"],VFooter:T["a"],VIcon:m["a"],VImg:k["a"],VMain:P["a"],VOverlay:x["a"],VProgressCircular:L["a"],VRow:I["a"]});i("d3b7");var E=i("8c4f"),N=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"stepStart",staticClass:"page",attrs:{id:"step-start"}},[i("PageHeader",{attrs:{title:"1. Get Started..."}},[t._v(" Why we ask you for all of this information? To help us make sure you get the best possible experience... To make sure that we provide the highest levels of safety.. ")]),i("div",{staticClass:"ml-n2 ml-sm-2 ml-md-8 ml-lg-12",attrs:{id:"steps-controls"}},[i("h3",{staticClass:"disable-select"},[i("v-icon",{attrs:{color:t.isValidNrPeople?"success":"primary"}},[t._v(t._s(t.isValidNrPeople?t.stepIconCompleted:t.stepIcon))]),t._v(" Nr of People Flying ")],1),i("div",{staticClass:"controls"},[i("NumberScroller",{ref:"numberScroller",attrs:{min:"0",max:t.getMaxPilots,"min-message":"Min per Booking is 1","max-message":t.getMaxMessage},on:{"at-max-value":t.showBigGroupWarning},model:{value:t.nrPeople,callback:function(e){t.nrPeople=e},expression:"nrPeople"}})],1),i("h3",{staticClass:"disable-select"},[i("v-icon",{attrs:{color:t.flightDate?"success":"primary"}},[t._v(t._s(t.flightDate?t.stepIconCompleted:t.stepIcon))]),t._v(" Flight Date ")],1),i("div",{staticClass:"controls"},[i("v-dialog",{ref:"dialog",attrs:{"return-value":t.flightDate,width:"290px"},on:{"update:returnValue":function(e){t.flightDate=e},"update:return-value":function(e){t.flightDate=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[i("v-text-field",t._g({staticStyle:{width:"300px"},attrs:{"prepend-icon":"event",readonly:"",outlined:"",hint:t.isValidFlightDate?"":"Click to choose your Flight Date","persistent-hint":""},on:{keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.flightModal=!0}},model:{value:t.formatISODate,callback:function(e){t.formatISODate=e},expression:"formatISODate"}},a))]}}]),model:{value:t.flightModal,callback:function(e){t.flightModal=e},expression:"flightModal"}},[i("v-date-picker",{attrs:{scrollable:"","show-current":"",min:t.flightMinDate,max:t.flightMaxDate},model:{value:t.flightDate,callback:function(e){t.flightDate=e},expression:"flightDate"}},[i("v-spacer"),i("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.flightModal=!1}}},[t._v("Cancel")]),i("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.dialog.save(t.flightDate)}}},[t._v("OK")])],1)],1)],1),i("h3",{staticClass:"disable-select"},[i("v-icon",{attrs:{color:t.flightChosen?"success":"primary"}},[t._v(t._s(t.flightOptionsDropMenuList?t.stepIconCompleted:t.stepIcon)+" ")]),t._v(" Which Flight? ")],1),i("div",{staticClass:"controls"},[i("v-select",{staticClass:"disable-select",staticStyle:{"max-width":"300px"},attrs:{items:t.flightOptionsDropMenuList,"item-text":"name","item-value":"id","prepend-icon":t.flightChosen?t.cloudIcon:t.cloudQuestionIcon,loading:t.flightOptionsLoaded,solo:"",outlined:"",disabled:!t.isValidFlightDate,hint:t.isValidFlightDate?"":"Please choose a Flight Date first...","persistent-hint":""},model:{value:t.flightChosen,callback:function(e){t.flightChosen=e},expression:"flightChosen"}})],1),i("h3",[i("v-icon",{attrs:{color:t.switchPhotos?"success":"primary"}},[t._v(t._s(t.cameraIcon))]),t._v(" Photos + Videos (optional) ")],1),i("div",{staticClass:"controls"},[i("v-switch",{attrs:{id:"photosSwitch",color:"success",inset:"",label:"Filmed with GoPros on specially built sticks for some great memories!"},model:{value:t.switchPhotos,callback:function(e){t.switchPhotos=e},expression:"switchPhotos"}})],1),i("div",{staticClass:"text-center",attrs:{id:"Big-Group-Dialog"}},[i("v-dialog",{attrs:{width:"400"},model:{value:t.bigGroupDialog,callback:function(e){t.bigGroupDialog=e},expression:"bigGroupDialog"}},[i("v-card",[i("v-card-title",{staticClass:"primary",attrs:{"primary-title":""}},[i("div",{staticClass:"white--text disable-select"},[t._v(" Booking a Big Group ")])]),i("v-card-text",{staticClass:"pt-6 black--text"},[t._v(" If your group contains more than "+t._s(t.getMaxPilots)+" people... "),i("br"),i("br"),t._v(" ...you can either do 2 or more seperate Bookings here, splitting your group amongst available times, or send us a "),i("strong",[t._v("Booking Message")]),t._v(" (later in this booking process) or just give us a ring at: Tel +41 79 643-6808 ")]),i("v-divider"),i("v-card-actions",[i("v-spacer"),i("v-btn",{ref:"closeBigGroupDialog",attrs:{color:"primary",text:""},on:{click:function(e){t.bigGroupDialog=!1}}},[t._v(" Close ")])],1)],1)],1)],1)])],1)},M=[],$=(i("99af"),i("4fad"),i("3835")),F=i("2230"),B=i("e3ee"),A=i("36ad"),j=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-card",{staticClass:"scrollerContainer",class:{focused:t.focused},attrs:{flat:"",outlined:""}},[i("v-icon",{attrs:{id:"decrement",size:"100%"},on:{click:t.onDown,focus:function(e){t.focused=!0},blur:function(e){t.focused=!1}}},[t._v(t._s(t.iconMinus))]),i("input",{ref:"numberInput",staticClass:"nrInput",attrs:{readonly:""},domProps:{value:t.myVal},on:{input:function(e){return t.onInput(e.target.value)},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1}}}),i("v-icon",{attrs:{id:"increment",size:"100%"},on:{click:t.onUp,focus:function(e){t.focused=!0},blur:function(e){t.focused=!1}}},[t._v(t._s(t.iconPlus))])],1),i("div",{staticClass:"tweaker v-text-field__details"},[i("div",{staticClass:"v-messages theme--light"},[i("div",{staticClass:"v-messages__wrapper"},[t._v(" "+t._s(t.scrollerMessage)+" ")])])])],1)},G=[],H=(i("a9e3"),i("2b19"),{name:"NumberScroller",props:{value:{type:[String,Number],required:!0},min:{type:[String,Number],required:!0},max:{type:[String,Number],required:!0},minMessage:String,maxMessage:String},data:function(){return{myVal:this.value,prevVal:this.value,focused:!1,iconPlus:c["i"],iconMinus:c["h"],scrollerMessage:""}},methods:{onInput:function(t){var e=parseInt(t);!0!==Object.is(e,Number.NaN)?(this.myVal=e,this.myVal>=this.max&&this.atMaxVal(),this.myVal<=this.min&&this.atMinVal(),this.myVal>this.min&&this.myVal<this.max&&(this.scrollerMessage=""),this.prevVal=this.myVal,this.$emit("input",this.myVal)):this.myVal=this.prevVal},atMaxVal:function(){this.myVal=this.max,this.scrollerMessage=this.maxMessage,this.$emit("at-max-value",this.myVal)},atMinVal:function(){this.myVal=this.min,this.scrollerMessage=this.minMessage,this.$emit("at-min-value",this.myVal)},onDown:function(){this.myVal--,this.onInput(this.myVal)},onUp:function(){this.myVal++,this.onInput(this.myVal)}},watch:{value:function(t){this.myVal=t,this.prevVal=t}}}),R=H,W=(i("1c57"),i("b0af")),U=Object(f["a"])(R,j,G,!1,null,"dc98888e",null),z=U.exports;d()(U,{VCard:W["a"],VIcon:m["a"]});var q={name:"Start",components:{NumberScroller:z,PageHeader:A["a"]},props:{},data:function(){return{stepIcon:c["a"],stepIconCompleted:c["d"],cameraIcon:c["c"],cloudQuestionIcon:c["g"],cloudIcon:c["f"],flightOptionsDropMenuList:this.buildFlightList(),flightMenu:!1,flightModal:!1,bigGroupDialog:!1,isPageValid:this.areAllInputsValid}},beforeMount:function(){this.$store.dispatch("flightOptions")},mounted:function(){var t=this;setTimeout((function(){0==t.nrPeople&&t.$refs.numberScroller.$el.querySelector("#increment").focus()}))},updated:function(){this.onValueChanged()},computed:{flightOptionsLoaded:function(){return this.$store.state._flightsList_loading},forWatchingBothFlightDateAndFlightType:function(){return"".concat(this.flightDate,"|").concat(this.flightChosen)},nrPeople:{get:function(){return this.$store.state.nrPeople},set:function(t){return this.$store.dispatch("setNrPeople",t)}},getMaxPilots:function(){return this.$store.state._maxPilots},flightDate:{get:function(){return this.$store.state.flightDate},set:function(t){t!==this.$store.state.flightDate&&(this.$store.dispatch("setFlightDate",t),this.$store.dispatch("flightOptions"),this.buildFlightList())}},flightChosen:{get:function(){return this.$store.state.selectedFlight},set:function(t){return this.$store.dispatch("setFlight",t)}},switchPhotos:{get:function(){return this.$store.state.wantsPhotos},set:function(t){return this.$store.dispatch("setWantsPhotos",t)}},flightMinDate:function(){var t=this.$store.state._bookDaysOffset;return Object(_["a"])(Object(F["a"])(Date.now(),{days:t}),"yyyy-MM-dd")},flightMaxDate:function(){var t=this.$store.state._bookMonthsOffset;return Object(_["a"])(Object(F["a"])(Date.now(),{months:t}),"yyyy-MM-dd")},flightsWatch:function(){return this.$store.state._flightsList},getMaxMessage:function(){return"Max per Booking is: "+this.$store.state._maxPilots},isValidNrPeople:function(){return this.nrPeople>0&&this.nrPeople<=this.$store.state._maxPilots},isValidFlightDate:function(){return""!==this.flightDate&&null!==this.flightDate},isValidFlightChosen:function(){return""!==this.flightDate&&""!==this.flightChosen},areAllInputsValid:function(){return!!(this.isValidNrPeople&&this.isValidFlightDate&&this.isValidFlightChosen)},formatISODate:function(){if(""===this.flightDate)return"";var t=Object(B["a"])(this.flightDate),e=Object(_["a"])(t,"PPPP");return e}},methods:{onValueChanged:function(){if(this.areAllInputsValid){var t={Start:!0};this.$store.dispatch("setNavList",t)}else{var e={Start:!1};this.$store.dispatch("setNavList",e)}},buildFlightList:function(){var t=this.$store.state._flightsList;if(!this.isObjEmpty(t)){for(var e=[],i=0,a=Object.entries(t);i<a.length;i++){var n=Object($["a"])(a[i],2),o=n[0],s=n[1],r={id:"".concat(o),name:"".concat(s)};e.push(r)}return e}},showBigGroupWarning:function(){this.bigGroupDialog=!0}},watch:{forWatchingBothFlightDateAndFlightType:function(){""!==this.flightChosen&&(console.log("Flight Date + Flight Type chnged. Preload TLGroup"),this.$store.dispatch("timeListDates"))},flightsWatch:function(){this.flightOptionsDropMenuList=this.buildFlightList()},flightDate:function(t,e){},bigGroupDialog:function(t){var e=this;!0===t&&setTimeout((function(){e.$refs.closeBigGroupDialog.$el.focus()}))}}},K=q,J=(i("b98b"),i("99d9")),Y=i("2e4b"),Z=i("169a"),Q=i("ce7e"),X=i("b974"),tt=i("2fa4"),et=i("b73d"),it=i("8654"),at=Object(f["a"])(K,N,M,!1,null,"62a5f1a6",null),nt=at.exports;d()(at,{VBtn:g["a"],VCard:W["a"],VCardActions:J["a"],VCardText:J["b"],VCardTitle:J["c"],VDatePicker:Y["a"],VDialog:Z["a"],VDivider:Q["a"],VIcon:m["a"],VSelect:X["a"],VSpacer:tt["a"],VSwitch:et["a"],VTextField:it["a"]}),a["a"].use(E["a"]);var ot=[{path:"/",name:"Start",component:nt},{path:"/time",name:"Time",component:function(){return i.e("TimeSlot").then(i.bind(null,"4cc7"))}}],st=new E["a"]({mode:"history",base:"/",routes:ot,scrollBehavior:function(){return new Promise((function(t){setTimeout((function(){t({x:0,y:0})}),0)}))}}),rt=st,lt=i("2f62"),ct=i("bc3a"),ut=i.n(ct),ht=i("9e87");a["a"].use(lt["a"]);var ft=new lt["a"].Store({state:{_DEV:!0,nrPeople:+localStorage.nrPeople||0,flightDate:localStorage.flightDate||"",selectedFlight:localStorage.selectedFlight||"",wantsPhotos:!!localStorage.wantsPhotos&&JSON.parse(localStorage.wantsPhotos),timeSlot:+localStorage.selectedTimeslot||-1,timeSlotLabel:localStorage.selectedTimeslotLabel||"",_maxPilots:-1,_bookDaysOffset:-1,_bookMonthsOffset:-1,_videoPrice:-1,_flightsList:null,_timeListDates:null,_app_loading:!0,_flightsList_loading:!1,_timeList_loading:!0,_navList:{Start:!1,Time:!1,Info:!1,Next:!1,Pay:!1,Thanks:!1},_currentStep:"Start"},mutations:{APP_LOADING:function(t,e){t._app_loading=e},FLIGHTSLIST_LOADING:function(t,e){t._flightsList_loading=e},TIMELIST_LOADING:function(t,e){t._timeList_loading=e},TIMELIST_DATES:function(t,e){t._timeListDates=e},MAX_PILOTS:function(t,e){t._maxPilots=e},BOOK_DAYS_OFFSET:function(t,e){t._bookDaysOffset=e},BOOK_MONTS_OFFSET:function(t,e){t._bookMonthsOffset=e},VIDEO_PRICE:function(t,e){t._videoPrice=e},CHOSEN_NR_PEOPLE:function(t,e){t.nrPeople=e},CHOSEN_DATE:function(t,e){t.flightDate=e},CHOSEN_FLIGHT:function(t,e){t.selectedFlight=e},CHOSEN_PHOTOS:function(t,e){t.wantsPhotos=e},CHOSEN_TIMESLOT:function(t,e,i){t.timeSlot=e,t.timeSlotLabel=i},FLIGHTS_LIST:function(t,e){t._flightsList=e},NAV_LIST:function(t,e){t._navList[Object.keys(e)[0]]=Object.values(e)[0]},CURRENT_STEP:function(t,e){t._currentStep=e}},actions:{timeListDates:function(t){return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit("TIMELIST_LOADING",!0),e.abrupt("return",ut.a.get("http://localhost:3000/flightsdates/").then((function(e){var i=e.data;t.commit("TIMELIST_DATES",i)})).catch((function(e){console.log(e),t.state._DEV&&t.commit("TIMELIST_DATES",ht)})).finally((function(){return t.commit("TIMELIST_LOADING",!1)})));case 2:case"end":return e.stop()}}),e)})))()},init:function(t){return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",ut.a.get("https://fz-backend.simpleitsolutions.ch/onlinebooking/api/init").then((function(e){var i=e.data;t.commit("MAX_PILOTS",+i["max-pilots"]),t.commit("BOOK_DAYS_OFFSET",+i["book-days-from-today"]),t.commit("BOOK_MONTS_OFFSET",+i["book-future-months"]),t.commit("VIDEO_PRICE",+i["video-cost"])})).catch((function(t){console.log(t)})).finally((function(){return t.commit("APP_LOADING",!1)})));case 1:case"end":return e.stop()}}),e)})))()},flightOptions:function(t){return Object(s["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i=t.state.flightDate,""!==i){e.next=3;break}return e.abrupt("return");case 3:return t.commit("FLIGHTSLIST_LOADING",!0),e.abrupt("return",ut.a.get("https://fz-backend.simpleitsolutions.ch/onlinebooking/api/flightoptions/"+i).then((function(e){var i=e.data;t.commit("FLIGHTS_LIST",i)})).catch((function(t){console.log(t)})).finally((function(){return t.commit("FLIGHTSLIST_LOADING",!1)})));case 5:case"end":return e.stop()}}),e)})))()},setFlightsList:function(t,e){t.commit("FLIGHTS_LIST",e)},setNrPeople:function(t,e){t.commit("CHOSEN_NR_PEOPLE",+e),localStorage.nrPeople=e},setFlightDate:function(t,e){t.commit("CHOSEN_DATE",e),localStorage.flightDate=e},setFlight:function(t,e){t.commit("CHOSEN_FLIGHT",e),localStorage.selectedFlight=e},setWantsPhotos:function(t,e){t.commit("CHOSEN_PHOTOS",e),localStorage.wantsPhotos=e},setTimeSlot:function(t,e){t.commit("CHOSEN_TIMESLOT",e.slot,e.label),localStorage.selectedTimeslot=e.slot,localStorage.selectedTimeslotLabel=e.label},setNavList:function(t,e){t.commit("NAV_LIST",e)},setCurrentStep:function(t,e){t.commit("CURRENT_STEP",e)}}}),pt=(i("d1e78"),i("f309")),dt=i("fcf4");a["a"].use(pt["a"]);var gt=new pt["a"]({theme:{themes:{light:{primary:dt["a"].purple.darken3,secondary:dt["a"].grey.darken1,accent:dt["a"].shades.black,error:dt["a"].red.accent3},dark:{primary:dt["a"].blue.lighten3}}}});a["a"].config.productionTip=!1,a["a"].mixin({methods:{capitaliseFirstLetter:function(t){return"string"!==typeof t?"":t.charAt(0).toUpperCase()+t.slice(1)},isObjEmpty:function(t){return null==t||!(Object.keys(t).length>0)}}}),new a["a"]({router:rt,store:ft,vuetify:gt,render:function(t){return t(w)}}).$mount("#app")},"80e6":function(t,e,i){},"8a23":function(t,e,i){},"9e87":function(t){t.exports=JSON.parse('{"2020-06-28":{"08:30":3,"10:15":2,"11:45":4,"13:15":2,"14:45":7,"16:15":0,"17:00":1,"19:00":6},"2020-06-29":{"08:30":0,"10:15":3,"11:45":5,"13:15":3,"14:45":7,"16:15":3,"17:00":5,"19:00":5},"2020-06-30":{"08:30":2,"10:15":1,"11:45":5,"13:15":7,"14:45":7,"16:15":1,"17:00":3,"19:00":1},"2020-07-01":{"08:30":0,"10:15":2,"11:45":4,"13:15":0,"14:45":1,"16:15":0,"17:00":6,"19:00":5},"2020-07-02":{"08:30":6,"10:15":6,"11:45":7,"13:15":6,"14:45":6,"16:15":2,"17:00":2,"19:00":4},"2020-07-03":{"08:30":0,"10:15":0,"11:45":4,"13:15":1,"14:45":4,"16:15":7,"17:00":4,"19:00":0},"2020-07-04":{"08:30":0,"10:15":7,"11:45":1,"13:15":7,"14:45":6,"16:15":2,"17:00":4,"19:00":0},"2020-07-05":{"08:30":5,"10:15":5,"11:45":3,"13:15":0,"14:45":4,"16:15":7,"17:00":3,"19:00":2},"2020-07-06":{"08:30":7,"10:15":3,"11:45":0,"13:15":2,"14:45":5,"16:15":1,"17:00":0,"19:00":2},"2020-07-07":{"08:30":1,"10:15":7,"11:45":2,"13:15":0,"14:45":2,"16:15":1,"17:00":7,"19:00":2},"2020-07-08":{"08:30":6,"10:15":1,"11:45":4,"13:15":5,"14:45":5,"16:15":5,"17:00":6,"19:00":0},"2020-07-09":{"08:30":5,"10:15":1,"11:45":0,"13:15":3,"14:45":7,"16:15":2,"17:00":6,"19:00":7},"2020-07-10":{"08:30":5,"10:15":4,"11:45":5,"13:15":1,"14:45":2,"16:15":7,"17:00":3,"19:00":5},"2020-07-11":{"08:30":1,"10:15":6,"11:45":0,"13:15":2,"14:45":5,"16:15":6,"17:00":6,"19:00":3},"2020-07-12":{"08:30":3,"10:15":6,"11:45":7,"13:15":5,"14:45":5,"16:15":0,"17:00":5,"19:00":5},"2020-07-13":{"08:30":7,"10:15":3,"11:45":3,"13:15":2,"14:45":1,"16:15":2,"17:00":2,"19:00":3},"2020-07-14":{"08:30":6,"10:15":7,"11:45":5,"13:15":3,"14:45":4,"16:15":1,"17:00":6,"19:00":5},"2020-07-15":{"08:30":4,"10:15":3,"11:45":7,"13:15":6,"14:45":4,"16:15":5,"17:00":6,"19:00":4},"2020-07-16":{"08:30":6,"10:15":0,"11:45":2,"13:15":7,"14:45":5,"16:15":0,"17:00":5,"19:00":1},"2020-07-17":{"08:30":1,"10:15":0,"11:45":1,"13:15":0,"14:45":2,"16:15":6,"17:00":2,"19:00":0},"2020-07-18":{"08:30":3,"10:15":5,"11:45":6,"13:15":4,"14:45":2,"16:15":7,"17:00":6,"19:00":1},"2020-07-19":{"08:30":4,"10:15":3,"11:45":1,"13:15":5,"14:45":5,"16:15":2,"17:00":2,"19:00":3},"2020-07-20":{"08:30":2,"10:15":1,"11:45":4,"13:15":0,"14:45":3,"16:15":1,"17:00":2,"19:00":4},"2020-07-21":{"08:30":6,"10:15":1,"11:45":7,"13:15":1,"14:45":2,"16:15":1,"17:00":1,"19:00":5},"2020-07-22":{"08:30":3,"10:15":2,"11:45":5,"13:15":4,"14:45":0,"16:15":6,"17:00":3,"19:00":6},"2020-07-23":{"08:30":2,"10:15":2,"11:45":1,"13:15":2,"14:45":6,"16:15":2,"17:00":5,"19:00":7},"2020-07-24":{"08:30":6,"10:15":1,"11:45":2,"13:15":4,"14:45":0,"16:15":2,"17:00":7,"19:00":2},"2020-07-25":{"08:30":2,"10:15":4,"11:45":2,"13:15":0,"14:45":4,"16:15":0,"17:00":0,"19:00":6},"2020-07-26":{"08:30":1,"10:15":2,"11:45":6,"13:15":4,"14:45":6,"16:15":6,"17:00":0,"19:00":6},"2020-07-27":{"08:30":7,"10:15":7,"11:45":0,"13:15":1,"14:45":4,"16:15":2,"17:00":4,"19:00":3}}')},b98b:function(t,e,i){"use strict";var a=i("276d"),n=i.n(a);n.a},e176:function(t,e,i){t.exports=i.p+"img/FlyZermatt-logo-light.893e1f8e.svg"}});
//# sourceMappingURL=app.f9455954.js.map