(function(t){function e(e){for(var a,s,l=e[0],r=e[1],c=e[2],u=0,f=[];u<l.length;u++)s=l[u],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&f.push(o[s][0]),o[s]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);h&&h(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,s=1;s<n.length;s++){var r=n[s];0!==o[r]&&(a=!1)}a&&(i.splice(e--,1),t=l(l.s=n[0]))}return t}var a={},o={app:0},i=[];function s(t){return l.p+"js/"+({TimeSlot:"TimeSlot"}[t]||t)+"."+{TimeSlot:"2cd9bb49"}[t]+".js"}function l(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=o[t]=[e,a]}));e.push(n[2]=a);var i,r=document.createElement("script");r.charset="utf-8",r.timeout=120,l.nc&&r.setAttribute("nonce",l.nc),r.src=s(t);var c=new Error;i=function(e){r.onerror=r.onload=null,clearTimeout(u);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,n[1](c)}o[t]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:r})}),12e4);r.onerror=r.onload=i,document.head.appendChild(r)}return Promise.all(e)},l.m=t,l.c=a,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(n,a,function(e){return t[e]}.bind(null,a));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var h=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("8a23"),o=n.n(a);o.a},"2cab":function(t,e,n){"use strict";var a=n("c7ea"),o=n.n(a);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"primary",dark:"","hide-on-scroll":""}},[a("v-btn",{staticClass:"text-capitalize",class:t.canGoBack?"":"d-none",staticStyle:{position:"absolute"},attrs:{text:""},on:{click:t.onBackBtnClick}},[a("v-icon",{attrs:{left:""}},[t._v(t._s(t.iconPrevChevron))]),t._v(" Back ")],1),a("div",{staticClass:"d-flex align-center",attrs:{id:"logo"}},[a("v-img",{staticClass:"shrink mr-2",attrs:{alt:"FlyZermatt Logo",contain:"",src:n("e176"),transition:"scale-transition",width:"220"}})],1)],1),a("v-content",[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12",md:"1",lg:"2"}}),a("v-col",{staticClass:"pa-md-12 pa-6",attrs:{cols:"12",md:"10",lg:"8"}},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view",{on:{"form-is-valid":t.onEnableContinueBtn,"data-changed":t.saveLocalStorageValues}})],1),a("div",{staticClass:"text-center mt-12 ml-n5 ml-sm-n8 ml-md-n10"},[a("v-btn",{attrs:{rounded:"",color:"primary",elevation:"4",disabled:!t.canContinue},on:{click:t.onContinueBtnClick}},[t._v(" Continue "),a("v-icon",{attrs:{right:""}},[t._v(t._s(t.iconNextArrow))])],1)],1)],1),a("v-col",{attrs:{cols:"12",md:"1",lg:"2"}})],1)],1),a("v-footer",{staticClass:"justify-end pr-2",attrs:{color:"primary",dark:"",app:"",padless:""}},[a("div",{staticClass:"white--text overline"},[t._v("© "+t._s(t.getCurrentYear)+" - FlyZermatt")])])],1)},i=[],s=(n("b0c0"),a["a"].observable({nrPeople:-1,flightDate:"",selectedFlight:"",wantsPhotos:!1})),l={setNrPeople:function(t){s.nrPeople=t},setFlightDate:function(t){s.flightDate=t},setFlight:function(t){s.selectedFlight=t},setWantsPhotos:function(t){s.wantsPhotos=t}},r=n("b166"),c=n("94ed"),u={name:"App",components:{},beforeUpdate:function(){"Start"===this.$route.name?this.onEnableBackBtn(!1):this.onEnableBackBtn(!0)},created:function(){this.loadLocalStorageValues()},data:function(){return{iconNextArrow:c["b"],iconPrevChevron:c["e"],canGoBack:!1,canContinue:!1}},methods:{onEnableContinueBtn:function(t){this.canContinue=t},onContinueBtnClick:function(){this.$router.push({name:"Time",path:"time"}),this.onEnableContinueBtn(!1),this.onEnableBackBtn(!0)},onEnableBackBtn:function(t){this.canGoBack=t},onBackBtnClick:function(){this.$router.go(-1)},loadLocalStorageValues:function(){if(localStorage.nrPeople&&l.setNrPeople(localStorage.nrPeople),localStorage.flightDate&&l.setFlightDate(localStorage.flightDate),localStorage.selectedFlight&&l.setFlight(localStorage.selectedFlight),localStorage.wantsPhotos){var t=localStorage.wantsPhotos;t="true"===t,l.setWantsPhotos(t)}},saveLocalStorageValues:function(){localStorage.nrPeople=s.nrPeople,localStorage.flightDate=s.flightDate,localStorage.selectedFlight=s.selectedFlight,localStorage.wantsPhotos=s.wantsPhotos}},computed:{getCurrentYear:function(){return Object(r["a"])(Date.now(),"yyyy")}}},h=u,f=(n("034f"),n("2877")),d=n("6544"),p=n.n(d),g=n("7496"),m=n("40dc"),v=n("8336"),b=n("62ad"),y=n("a75b"),V=n("553a"),P=n("132d"),C=n("adda"),x=n("0fd9"),k=Object(f["a"])(h,o,i,!1,null,null,null),w=k.exports;p()(k,{VApp:g["a"],VAppBar:m["a"],VBtn:v["a"],VCol:b["a"],VContent:y["a"],VFooter:V["a"],VIcon:P["a"],VImg:C["a"],VRow:x["a"]});n("d3b7");var M=n("8c4f"),S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page ml-5 ml-sm-8 ml-md-10"},[n("h1",{staticClass:"ml-n5"},[t._v("1. Get Started...")]),n("p",{},[t._v(" Why we ask you for all of this information? To help us make sure you get the best possible experience... To make sure that we provide the highest levels of safety... ")]),n("v-divider"),n("h3",[n("v-icon",{attrs:{color:t.isValidNrPeople?"success":"primary"}},[t._v(t._s(t.isValidNrPeople?t.stepIconCompleted:t.stepIcon))]),t._v(" Nr of People Flying ")],1),n("div",{staticClass:"controls"},[n("NumberScroller",{attrs:{min:"0",max:t.nrPeopleMax,"min-message":"Minimum number of people is 1","max-message":t.getMaxMessage},model:{value:t.nrPeople,callback:function(e){t.nrPeople=e},expression:"nrPeople"}})],1),n("h3",[n("v-icon",{attrs:{color:t.flightDate?"success":"primary"}},[t._v(t._s(t.flightDate?t.stepIconCompleted:t.stepIcon))]),t._v(" Flight Date ")],1),n("div",{staticClass:"controls"},[n("div",{staticStyle:{display:"inline-block"},on:{click:function(e){t.flightModal=!0}}},[n("v-dialog",{ref:"dialog",attrs:{"return-value":t.flightDate,persistent:"",width:"290px"},on:{"update:returnValue":function(e){t.flightDate=e},"update:return-value":function(e){t.flightDate=e},change:t.onValueChanged},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("v-text-field",t._g({staticStyle:{width:"300px"},attrs:{"prepend-inner-icon":"event",readonly:"",outlined:"",hint:t.isValidFlightDate?"":"Click to choose your Flight Date","persistent-hint":""},on:{keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.flightModal=!0}},model:{value:t.formatISODate,callback:function(e){t.formatISODate=e},expression:"formatISODate"}},a))]}}]),model:{value:t.flightModal,callback:function(e){t.flightModal=e},expression:"flightModal"}},[n("v-date-picker",{attrs:{scrollable:"","show-current":"",min:t.flightMinDate,max:t.flightMaxDate},model:{value:t.flightDate,callback:function(e){t.flightDate=e},expression:"flightDate"}},[n("v-spacer"),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.flightModal=!1}}},[t._v("Cancel")]),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.dialog.save(t.flightDate)}}},[t._v("OK")])],1)],1)],1)]),n("h3",[n("v-icon",{attrs:{color:t.flightChosen?"success":"primary"}},[t._v(t._s(t.flightList?t.stepIconCompleted:t.stepIcon))]),t._v(" Which Flight? ")],1),n("div",{staticClass:"controls"},[n("v-select",{staticStyle:{"max-width":"300px"},attrs:{items:t.flightList,"prepend-inner-icon":t.flightChosen?t.cloudIcon:t.cloudQuestionIcon,solo:"",outlined:"",disabled:!t.isValidFlightDate,hint:t.isValidFlightDate?"":"Please choose a Flight Date first...","persistent-hint":""},on:{change:t.onValueChanged},model:{value:t.flightChosen,callback:function(e){t.flightChosen=e},expression:"flightChosen"}})],1),n("h3",[n("v-icon",{attrs:{color:t.switchPhotos?"success":"primary"}},[t._v(t._s(t.cameraIcon))]),t._v(" Photos + Videos (optional) ")],1),n("div",{staticClass:"controls"},[n("v-switch",{attrs:{color:"success",inset:"",label:"Filmed with GoPros on specially built sticks for some great memories!"},on:{change:t.onValueChanged},model:{value:t.switchPhotos,callback:function(e){t.switchPhotos=e},expression:"switchPhotos"}})],1)],1)},D=[],_=n("2230"),I=n("e3ee"),F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-card",{staticClass:"scrollerContainer",class:{focused:t.focused},attrs:{flat:"",outlined:"",ripple:!1}},[n("v-icon",{attrs:{size:"100%"},on:{click:t.onDown,focus:function(e){t.focused=!0},blur:function(e){t.focused=!1}}},[t._v(t._s(t.iconMinus))]),n("input",{ref:"numberInput",staticClass:"numberInput",domProps:{value:t.myVal},on:{input:function(e){return t.onInput(e.target.value)},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1}}}),n("v-icon",{attrs:{size:"100%"},on:{click:t.onUp,focus:function(e){t.focused=!0},blur:function(e){t.focused=!1}}},[t._v(t._s(t.iconPlus))])],1),n("div",{staticClass:"tweaker v-text-field__details"},[n("div",{staticClass:"v-messages theme--light"},[n("div",{staticClass:"v-messages__wrapper"},[t._v(" "+t._s(t.scrollerMessage)+" ")])])])],1)},O=[],B=(n("a9e3"),n("2b19"),{name:"NumberScroller",props:{value:String,min:String,max:String,minMessage:String,maxMessage:String},data:function(){return{myVal:this.value,prevVal:this.value,focused:!1,iconPlus:c["i"],iconMinus:c["h"],scrollerMessage:""}},methods:{onInput:function(t){var e=parseInt(t);if(!0===Object.is(e,Number.NaN))return console.log("NaN found! Prev Val: "+this.prevVal),void(this.myVal=this.prevVal);this.myVal=e,this.myVal>=this.max&&this.atMaxVal(),this.myVal<=this.min&&this.atMinVal(),this.myVal>this.min&&this.myVal<this.max&&(this.scrollerMessage=""),this.prevVal=this.myVal,this.$emit("input",this.myVal)},atMaxVal:function(){this.myVal=this.max,this.scrollerMessage=this.maxMessage,console.log("Max msg: "+this.scrollerMessage)},atMinVal:function(){this.myVal=this.min,this.scrollerMessage=this.minMessage,console.log("Min msg: "+this.scrollerMessage)},onDown:function(){this.myVal--,this.onInput(this.myVal)},onUp:function(){this.myVal++,this.onInput(this.myVal)}}}),j=B,N=(n("2cab"),n("b0af")),E=Object(f["a"])(j,F,O,!1,null,"53565932",null),T=E.exports;p()(E,{VCard:N["a"],VIcon:P["a"]});var $={name:"Start",components:{NumberScroller:T},data:function(){return{nrPeopleMax:7,stepIcon:c["a"],stepIconCompleted:c["d"],cameraIcon:c["c"],cloudQuestionIcon:c["g"],cloudIcon:c["f"],flightList:["Classic High","Scenic","Elite"],flightMinDate:Object(r["a"])(Object(_["a"])(Date.now(),{days:2}),"yyyy-MM-dd"),flightMaxDate:Object(r["a"])(Object(_["a"])(Date.now(),{years:1}),"yyyy-MM-dd"),flightMenu:!1,flightModal:!1,isPageValid:this.areAllInputsValid}},mounted:function(){this.onValueChanged()},updated:function(){this.onValueChanged()},beforeUpdate:function(){this.$emit("data-changed")},computed:{nrPeople:{get:function(){return s.nrPeople},set:function(t){return l.setNrPeople(t)}},flightDate:{get:function(){return s.flightDate},set:function(t){return l.setFlightDate(t)}},flightChosen:{get:function(){return s.selectedFlight},set:function(t){return l.setFlight(t)}},switchPhotos:{get:function(){return s.wantsPhotos},set:function(t){return l.setWantsPhotos(t)}},getMaxMessage:function(){return"Maximum number of people is: nrPeopleMax"+this.nrPeopleMax},isValidNrPeople:function(){return this.nrPeople>0&&this.nrPeople<=this.nrPeopleMax},isValidFlightDate:function(){return""!==this.flightDate&&null!==this.flightDate},isValidFlightChosen:function(){return""!==this.flightDate&&null!==this.flightChosen},areAllInputsValid:function(){return!!(this.isValidNrPeople&&this.isValidFlightDate&&this.isValidFlightChosen)},formatISODate:function(){if(""===this.flightDate)return"";var t=Object(I["a"])(this.flightDate),e=Object(r["a"])(t,"PPPP");return e}},methods:{onValueChanged:function(){return this.areAllInputsValid?(this.$emit("form-is-valid",!0),!0):(this.$emit("form-is-valid",!1),!1)}}},L=$,A=(n("a0ad"),n("2e4b")),G=n("169a"),W=n("ce7e"),U=n("b974"),z=n("2fa4"),Z=n("b73d"),J=n("8654"),Q=Object(f["a"])(L,S,D,!1,null,"39ba9530",null),Y=Q.exports;p()(Q,{VBtn:v["a"],VDatePicker:A["a"],VDialog:G["a"],VDivider:W["a"],VIcon:P["a"],VSelect:U["a"],VSpacer:z["a"],VSwitch:Z["a"],VTextField:J["a"]}),a["a"].use(M["a"]);var q=[{path:"/",name:"Start",component:Y},{path:"/time",name:"Time",component:function(){return n.e("TimeSlot").then(n.bind(null,"543b"))}}],H=new M["a"]({mode:"history",base:"/",routes:q}),K=H,R=(n("d1e78"),n("f309")),X=n("fcf4");a["a"].use(R["a"]);var tt=new R["a"]({theme:{themes:{light:{primary:X["a"].purple.darken3,secondary:X["a"].grey.darken1,accent:X["a"].shades.black,error:X["a"].red.accent3},dark:{primary:X["a"].blue.lighten3}}}});a["a"].config.productionTip=!1,new a["a"]({router:K,vuetify:tt,render:function(t){return t(w)}}).$mount("#app")},"5f09":function(t,e,n){},"8a23":function(t,e,n){},a0ad:function(t,e,n){"use strict";var a=n("5f09"),o=n.n(a);o.a},c7ea:function(t,e,n){},e176:function(t,e,n){t.exports=n.p+"img/FlyZermatt-logo-light.893e1f8e.svg"}});
//# sourceMappingURL=app.9fa208cb.js.map