(function(t){function e(e){for(var o,r,l=e[0],s=e[1],c=e[2],u=0,d=[];u<l.length;u++)r=l[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);h&&h(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,r=1;r<n.length;r++){var s=n[r];0!==a[s]&&(o=!1)}o&&(i.splice(e--,1),t=l(l.s=n[0]))}return t}var o={},a={app:0},i=[];function r(t){return l.p+"js/"+({TimeSlot:"TimeSlot"}[t]||t)+"."+{TimeSlot:"2cd9bb49"}[t]+".js"}function l(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=a[t]=[e,o]}));e.push(n[2]=o);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=r(t);var c=new Error;i=function(e){s.onerror=s.onload=null,clearTimeout(u);var n=a[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",c.name="ChunkLoadError",c.type=o,c.request=i,n[1](c)}a[t]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:s})}),12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(e)},l.m=t,l.c=o,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)l.d(n,o,function(e){return t[e]}.bind(null,o));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var h=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("8a23"),a=n.n(o);a.a},1281:function(t,e,n){},"3ccf":function(t,e,n){"use strict";var o=n("1281"),a=n.n(o);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("v-app-bar",{attrs:{app:"",color:"primary",dark:"","hide-on-scroll":""}},[o("v-btn",{staticClass:"text-capitalize",class:t.canGoBack?"":"d-none",staticStyle:{position:"absolute"},attrs:{text:""},on:{click:t.onBackBtnClick}},[o("v-icon",{attrs:{left:""}},[t._v(t._s(t.iconPrevChevron))]),t._v(" Back ")],1),o("div",{staticClass:"d-flex align-center",attrs:{id:"logo"}},[o("v-img",{staticClass:"shrink mr-2",attrs:{alt:"FlyZermatt Logo",contain:"",src:n("e176"),transition:"scale-transition",width:"220"}})],1)],1),o("v-content",[o("v-row",{attrs:{"no-gutters":""}},[o("v-col",{attrs:{cols:"12",md:"1",lg:"2"}}),o("v-col",{staticClass:"pa-md-12 pa-6",attrs:{cols:"12",md:"10",lg:"8"}},[o("transition",{attrs:{name:"fade",mode:"out-in"}},[o("router-view",{on:{"form-is-valid":t.onEnableContinueBtn}})],1),o("div",{staticClass:"text-center mt-12 ml-n5 ml-sm-n8 ml-md-n10"},[o("v-btn",{attrs:{rounded:"",color:"primary",elevation:"4",disabled:!t.canContinue},on:{click:t.onContinueBtnClick}},[t._v(" Continue "),o("v-icon",{attrs:{right:""}},[t._v(t._s(t.iconNextArrow))])],1)],1)],1),o("v-col",{attrs:{cols:"12",md:"1",lg:"2"}})],1)],1),o("v-footer",{staticClass:"justify-end pr-2",attrs:{color:"primary",dark:"",app:"",padless:""}},[o("div",{staticClass:"white--text overline"},[t._v("© 2020 - FlyZermatt")])])],1)},i=[],r=(n("b0c0"),n("94ed")),l={name:"App",components:{},beforeUpdate:function(){"Start"===this.$route.name?this.onEnableBackBtn(!1):this.onEnableBackBtn(!0)},data:function(){return{iconNextArrow:r["b"],iconPrevChevron:r["e"],canGoBack:!1,canContinue:!1}},methods:{onEnableContinueBtn:function(t){this.canContinue=t},onContinueBtnClick:function(){this.$router.push("TimeSlot"),this.onEnableContinueBtn(!1),this.onEnableBackBtn(!0)},onEnableBackBtn:function(t){this.canGoBack=t},onBackBtnClick:function(){this.$router.go(-1)}}},s=l,c=(n("034f"),n("2877")),u=n("6544"),h=n.n(u),d=n("7496"),f=n("40dc"),p=n("8336"),g=n("62ad"),m=n("a75b"),v=n("553a"),b=n("132d"),y=n("adda"),C=n("0fd9"),k=Object(c["a"])(s,a,i,!1,null,null,null),P=k.exports;h()(k,{VApp:d["a"],VAppBar:f["a"],VBtn:p["a"],VCol:g["a"],VContent:m["a"],VFooter:v["a"],VIcon:b["a"],VImg:y["a"],VRow:C["a"]});n("d3b7");var x=n("8c4f"),w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page ml-5 ml-sm-8 ml-md-10"},[n("h1",{staticClass:"ml-n5"},[t._v("1. Get Started...")]),n("p",{},[t._v(" Why we ask you for all of this information? To help us make sure you get the best possible experience... To make sure that we provide the highest levels of safety... ")]),n("v-divider"),n("h3",[n("v-icon",{attrs:{color:t.isValidNrPeople?"teal":"primary"}},[t._v(t._s(t.isValidNrPeople?t.stepIconCompleted:t.stepIcon))]),t._v(" Nr of People Flying ")],1),n("div",{staticClass:"controls"},[n("v-slider",{staticClass:"align-center",staticStyle:{"max-width":"350px"},attrs:{max:t.sliderNrPeopleMax,min:"0","hide-details":"","thumb-label":""},on:{change:t.onValueChanged},scopedSlots:t._u([{key:"prepend",fn:function(){return[n("span",{staticClass:"mr-4",staticStyle:{padding:"0 5px","background-color":"rgb(240,240,240)","border-bottom":"1px gray solid"}},[n("v-text-field",{staticClass:"mt-0 pt-0",staticStyle:{width:"50px"},attrs:{"hide-details":"","single-line":"",type:"number"},model:{value:t.nrPeople,callback:function(e){t.nrPeople=e},expression:"nrPeople"}})],1)]},proxy:!0}]),model:{value:t.nrPeople,callback:function(e){t.nrPeople=e},expression:"nrPeople"}})],1),n("h3",[n("v-icon",{attrs:{color:t.flightDate?"teal":"primary"}},[t._v(t._s(t.flightDate?t.stepIconCompleted:t.stepIcon))]),t._v(" Flight Date ")],1),n("div",{staticClass:"controls"},[n("v-dialog",{ref:"dialog",attrs:{"return-value":t.flightDate,persistent:"",width:"290px"},on:{"update:returnValue":function(e){t.flightDate=e},"update:return-value":function(e){t.flightDate=e},change:t.onValueChanged},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-text-field",t._g({staticStyle:{width:"300px"},attrs:{"prepend-inner-icon":"event",readonly:"",outlined:"",hint:t.isValidFlightDate?"":"Click to choose your Flight Date","persistent-hint":""},model:{value:t.formatISODate,callback:function(e){t.formatISODate=e},expression:"formatISODate"}},o))]}}]),model:{value:t.flightModal,callback:function(e){t.flightModal=e},expression:"flightModal"}},[n("v-date-picker",{attrs:{scrollable:"","show-current":"",min:t.flightMinDate,max:t.flightMaxDate},on:{doubleclick:function(e){return t.$refs.dialog.save(t.flightDate)}},model:{value:t.flightDate,callback:function(e){t.flightDate=e},expression:"flightDate"}},[n("v-spacer"),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.flightModal=!1}}},[t._v("Cancel")]),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.dialog.save(t.flightDate)}}},[t._v("OK")])],1)],1)],1),n("h3",[n("v-icon",{attrs:{color:t.flightChosen?"teal":"primary"}},[t._v(t._s(t.flightList?t.stepIconCompleted:t.stepIcon))]),t._v(" Which Flight? ")],1),n("div",{staticClass:"controls"},[n("v-select",{staticStyle:{"max-width":"300px"},attrs:{items:t.flightList,"prepend-inner-icon":t.flightChosen?t.cloudIcon:t.cloudQuestionIcon,solo:"",outlined:"",disabled:!t.isValidFlightDate,hint:t.isValidFlightDate?"":"Please choose a Flight Date first...","persistent-hint":""},on:{change:t.onValueChanged},model:{value:t.flightChosen,callback:function(e){t.flightChosen=e},expression:"flightChosen"}})],1),n("h3",[n("v-icon",{attrs:{color:t.switchPhotos?"teal":"primary"}},[t._v(t._s(t.cameraIcon))]),t._v(" Photos + Videos (optional) ")],1),n("div",{staticClass:"controls"},[n("v-switch",{attrs:{color:"success",inset:"",label:"Filmed with GoPros on specially built sticks for some great memories!"},on:{change:t.onValueChanged},model:{value:t.switchPhotos,callback:function(e){t.switchPhotos=e},expression:"switchPhotos"}})],1)],1)},D=[],V=o["a"].observable({nrPeople:0,flightDate:"",selectedFlight:"",wantsPhotos:!1}),_={setNrPeople:function(t){V.nrPeople=t},setFlightDate:function(t){V.flightDate=t},setFlight:function(t){V.selectedFlight=t},setWantsPhotos:function(t){V.wantsPhotos=t}},S=n("b166"),F=n("2230"),I=n("e3ee"),B={name:"Start",components:{},data:function(){return{sliderNrPeopleMax:7,stepIcon:r["a"],stepIconCompleted:r["d"],cameraIcon:r["c"],cloudQuestionIcon:r["g"],cloudIcon:r["f"],flightList:["Classic High","Scenic","Elite"],flightMinDate:Object(S["a"])(Object(F["a"])(Date.now(),{days:2}),"yyyy-MM-dd"),flightMaxDate:Object(S["a"])(Object(F["a"])(Date.now(),{years:1}),"yyyy-MM-dd"),flightMenu:!1,flightModal:!1,isPageValid:this.areAllInputsValid}},created:function(){this.onValueChanged()},computed:{nrPeople:{get:function(){return V.nrPeople},set:function(t){return _.setNrPeople(t)}},flightDate:{get:function(){return V.flightDate},set:function(t){return _.setFlightDate(t)}},flightChosen:{get:function(){return V.selectedFlight},set:function(t){return _.setFlight(t)}},switchPhotos:{get:function(){return V.wantsPhotos},set:function(t){return _.setWantsPhotos(t)}},isValidNrPeople:function(){return this.nrPeople>0&&this.nrPeople<=this.sliderNrPeopleMax},isValidFlightDate:function(){return""!==this.flightDate&&null!==this.flightDate},isValidFlightChosen:function(){return""!==this.flightDate&&null!==this.flightChosen},areAllInputsValid:function(){return!!(this.isValidNrPeople&&this.isValidFlightDate&&this.isValidFlightChosen)},formatISODate:function(){if(""===this.flightDate)return"";var t=Object(I["a"])(this.flightDate);return Object(S["a"])(t,"EEEE, MMM Io - yyyy")}},methods:{onValueChanged:function(){return this.areAllInputsValid?(this.$emit("form-is-valid",!0),!0):(this.$emit("form-is-valid",!1),!1)}}},M=B,O=(n("3ccf"),n("2e4b")),j=n("169a"),E=n("ce7e"),T=n("b974"),N=n("ba0d"),$=n("2fa4"),A=n("b73d"),L=n("8654"),G=Object(c["a"])(M,w,D,!1,null,"2b1d8ba8",null),W=G.exports;h()(G,{VBtn:p["a"],VDatePicker:O["a"],VDialog:j["a"],VDivider:E["a"],VIcon:b["a"],VSelect:T["a"],VSlider:N["a"],VSpacer:$["a"],VSwitch:A["a"],VTextField:L["a"]}),o["a"].use(x["a"]);var Z=[{path:"/",name:"Start",component:W},{path:"/time",name:"TimeSlot",component:function(){return n.e("TimeSlot").then(n.bind(null,"543b"))}}],J=new x["a"]({mode:"history",base:"/",routes:Z}),Q=J,q=(n("d1e78"),n("f309")),z=n("fcf4");o["a"].use(q["a"]);var H=new q["a"]({theme:{themes:{light:{primary:z["a"].purple.darken3,secondary:z["a"].grey.darken1,accent:z["a"].shades.black,error:z["a"].red.accent3},dark:{primary:z["a"].blue.lighten3}}}});o["a"].config.productionTip=!1,new o["a"]({router:Q,vuetify:H,render:function(t){return t(P)}}).$mount("#app")},"8a23":function(t,e,n){},e176:function(t,e,n){t.exports=n.p+"img/FlyZermatt-logo-light.893e1f8e.svg"}});
//# sourceMappingURL=app.bdd9b99a.js.map