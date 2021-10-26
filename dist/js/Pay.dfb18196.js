(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Pay"],{1681:function(t,e,s){},"2e0e":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"stepPay"},[s("PageHeader",{attrs:{title:"4. "+t.$t("step-pay.title")}},[t._v(" "+t._s(t.$t("step-pay.description"))+" ")]),s("div",{staticStyle:{"max-width":"600px",margin:"0 auto"}},[s("p",{staticClass:"ml-3"},[s("v-icon",{attrs:{color:"primary"}},[t._v(" mdi-airplane-takeoff ")]),t._v(" "+t._s(t.meetingTimesString)+" "+t._s(t.flightDate)+" ")],1),s("p",{staticClass:"rounded-lg white--text text-caption mt-n2 mb-9 mx-4 px-2 py-1",staticStyle:{"background-color":"#c78b48"}},[t._v(" "+t._s(t.$t("step-pay.meetingTime"))+" "),s("strong",[s("a",{staticClass:"white--text text-decoration-underline",on:{click:function(e){t.findOfficeDialog=!0}}},[t._v(" "+t._s(t.$t("findOffice.linkText"))+" "),s("v-icon",{attrs:{color:"white","x-small":""}},[t._v(" mdi-open-in-new ")])],1)])]),[s("v-simple-table",{staticClass:"elevation-1",attrs:{dense:"",id:"scrollTarget"},scopedSlots:t._u([{key:"default",fn:function(){return[s("thead",[s("tr",{staticClass:"grey lighten-3"},[s("th",{staticClass:"text-left"},[t._v(" "+t._s(t.$t("step-pay.qty"))+" ")]),s("th",{staticClass:"text-left"},[t._v(" "+t._s(t.$t("step-pay.flightDescription"))+" ")]),s("th",{staticClass:"text-right"},[t._v(" "+t._s(t.$t("step-pay.subtotalCHF"))+" ")]),s("th",{staticClass:"text-left"})])]),s("tbody",[s("tr",[s("td",[t._v(t._s(t.totalPassengers))]),s("td",[s("span",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(t.flightDetails.name)+" Flight")]),t._v(" @ "+t._s(t.flightDetails.price)+t._s(" ")+"CHF")]),s("td",{staticClass:"text-right"},[t._v(t._s(t.totalPassengers*t.flightDetails.price)+".00")]),s("td")]),t.wantsPhotos?s("tr",[s("td",[t._v(t._s(t.totalPassengers))]),s("td",[s("span",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(t.$t("step-pay.photosVideos")))]),t._v(" @ "+t._s(t.videoPrice)+".00"+t._s(" ")+"CHF")]),s("td",{staticClass:"text-right"},[t._v(t._s(t.totalPassengers*t.videoPrice)+".00")]),s("td")]):t._e(),s("tr",{staticClass:"grey lighten-3"},[s("td"),s("td",{staticStyle:{"text-align":"right","font-weight":"bold"}},[t._v(" "+t._s(t.$t("step-pay.totalCHF"))+" ")]),t.wantsPhotos?s("td",{staticClass:"text-right"},[s("span",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(t.totalPassengers*t.flightDetails.price+t.totalPassengers*t.videoPrice)+".00")])]):t._e(),t.wantsPhotos?t._e():s("td",{staticClass:"text-right"},[s("span",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(t.totalPassengers*t.flightDetails.price)+".00")])]),s("td")])])]},proxy:!0}])})],[s("v-row",{staticClass:"text-caption mx-1 mt-8 mb-10",attrs:{justify:"center"}},[s("v-expansion-panels",[s("v-expansion-panel",[s("v-expansion-panel-header",{attrs:{"disable-icon-rotate":""},on:{click:function(e){return t.focusBookingMessage()}},scopedSlots:t._u([{key:"actions",fn:function(){return[s("v-icon",{attrs:{color:"warning"}},[t._v(" mdi-information-outline ")])]},proxy:!0}])},[s("strong",[t._v(t._s(t.$t("step-pay.clickForSpecialRequests")))])]),s("v-expansion-panel-content",[s("p",{staticClass:"text-caption mt-0 mx-4",attrs:{id:"questionsTxt"}},[t._v(" "+t._s(t.$t("step-pay.specialWishes"))+" ")]),s("v-textarea",{ref:"bookingMessage",staticClass:"mt-6 mx-auto",staticStyle:{"max-width":"600px"},attrs:{name:"booking-message",outlined:"",label:t.$t("step-pay.yourMsgHere"),"auto-grow":""},on:{blur:t.onMessageBlur},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],1)],1)],1)],1)],s("v-container",{staticClass:"px-0 pt-0",staticStyle:{"max-width":"400px",margin:"0 auto","text-align":"center"},attrs:{fluid:""}},[s("v-checkbox",{attrs:{color:"orange darken-3"},scopedSlots:t._u([{key:"label",fn:function(){return[s("div",{attrs:{id:"TCs-Box"}},[t._v(" "+t._s(t.$t("step-pay.tc-text-start"))+" "),s("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[s("a",t._g({attrs:{target:"_blank",href:"https://www.flyzermatt.com/terms-and-conditions#onlinepayments"},on:{click:function(t){t.stopPropagation()}}},a),[t._v(t._s(t.$t("step-pay.tc-text-link")))])]}}])},[t._v(" "+t._s(t.$t("step-pay.openInNewPage"))+" ")]),t._v(" "+t._s(t.$t("step-pay.tc-text-end"))+" ")],1)]},proxy:!0}]),model:{value:t.termsCheckboxModel,callback:function(e){t.termsCheckboxModel=e},expression:"termsCheckboxModel"}})],1),s("div",{staticStyle:{"text-align":"center"},attrs:{id:"payment-button-box"}},[s("v-btn",{ref:"paymentButton",staticClass:"mt-0",attrs:{id:"payment-button",type:"submit",color:"orange darken-3",disabled:!t.termsCheckboxModel},on:{click:t.onOrderBtn}},[t._v(" "+t._s(t.$t("step-pay.payNow"))+" ")])],1),s("a",{staticClass:"mx-auto mt-10",staticStyle:{display:"block",width:"100px",height:"30px"},attrs:{href:"https://stripe.com",target:"_blank"}},[s("v-img",{attrs:{contain:"",width:"100",height:"30",src:"Powered by Stripe - blurple.svg"}})],1),1==t.$store.state._DEV?s("div",[s("br"),s("br"),t._m(0)]):t._e()],2),s("v-overlay",{attrs:{value:t.orderOverlay}},[s("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1)],1)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("Normal with success: 4000007560000009")]),s("li",[t._v("3D Secure with success: 4000002500003155")]),s("li",[t._v("Fail, insuffecient funds: 4000000000009995")]),s("li",[t._v("Fail, card has expired: 4000000000000069")])])}],i=s("1da1"),r=(s("159b"),s("d3b7"),s("96cf"),s("36ad")),o=s("b166"),c=s("e3ee"),l=s("7828"),d=s("3f5e"),u=s("ab5d"),p="https://js.stripe.com/v3",h=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,f="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",g=function(){for(var t=document.querySelectorAll('script[src^="'.concat(p,'"]')),e=0;e<t.length;e++){var s=t[e];if(h.test(s.src))return s}return null},m=function(t){var e=t&&!t.advancedFraudSignals?"?advancedFraudSignals=false":"",s=document.createElement("script");s.src="".concat(p).concat(e);var a=document.head||document.body;if(!a)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return a.appendChild(s),s},v=function(t,e){t&&t._registerWrapper&&t._registerWrapper({name:"stripe-js",version:"1.16.0",startTime:e})},y=null,b=function(t){return null!==y||(y=new Promise((function(e,s){if("undefined"!==typeof window)if(window.Stripe&&t&&console.warn(f),window.Stripe)e(window.Stripe);else try{var a=g();a&&t?console.warn(f):a||(a=m(t)),a.addEventListener("load",(function(){window.Stripe?e(window.Stripe):s(new Error("Stripe.js not available"))})),a.addEventListener("error",(function(){s(new Error("Failed to load Stripe.js"))}))}catch(n){return void s(n)}else e(null)}))),y},x=function(t,e,s){if(null===t)return null;var a=t.apply(void 0,e);return v(a,s),a},_=Promise.resolve().then((function(){return b(null)})),w=!1;_["catch"]((function(t){w||console.warn(t)}));var k=function(){for(var t=arguments.length,e=new Array(t),s=0;s<t;s++)e[s]=arguments[s];w=!0;var a=Date.now();return _.then((function(t){return x(t,e,a)}))},$={name:"Step_Pay",components:{PageHeader:r["a"]},data:function(){return{stripe:null,hasCardErrors:!1,payEnabled:!1,payLoading:!1,message:this.$store.state.orderMessage,elements:void 0,card:void 0,flightDetails:this.$store.getters.getFlightFromID(this.$store.state.selectedFlight),totalPassengers:this.$store.state.totalPassengers,wantsPhotos:this.$store.state.wantsPhotos,videoPrice:this.$store.state._videoPrice,termsCheckboxModel:!1,orderOverlay:!1,myLocal:l["a"]}},mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!0!==t.$store.state._DEV){e.next=6;break}return console.log("Development Mode, will create a TEST order via Stripe"),e.next=4,k("pk_test_51ION3qE6VjXXKzJ2c9Lxf0eoYCe6BuizG3Q7OrsNIEOWA4NMlpP3ycbEW7KwaFpJYlA4MFOeosbDuyJuIWMS5xn200GcQxogOw");case 4:return t.stripe=e.sent,e.abrupt("return");case 6:return e.next=8,k("pk_live_51ION3qE6VjXXKzJ2kkmGArPkYqcuzMC0iFzRGZBCrUmVFEJa3mIh15LvCz8fIJF9DkhdNZmcgzzaTApgD2NFBytH004OVVUHyH");case 8:t.stripe=e.sent;case 9:case"end":return e.stop()}}),e)})))()},beforeUpdate:function(){"en"===this.$i18n.locale&&(this.myLocal=l["a"]),"de"===this.$i18n.locale&&(this.myLocal=d["a"]),"ko"===this.$i18n.locale&&(this.myLocal=u["a"])},computed:{findOfficeDialog:{get:function(){return this.$store.state.findOfficeDialog},set:function(t){return this.$store.dispatch("showFindOfficeDialog",t)}},meetingTimesString:function(){var t=this,e="",s=this.$store.state.slotPassengersObj.slotsList;return s.forEach((function(s){t.isObjEmpty(s)||s.passengers>0&&(e+=s.passengers+" "+t.$tc("step-pay.people",s.passengers)+" @ "+s.timeString+". ")})),e},flightDate:function(){return this.isObjEmpty(this.$store.state.flightDate)?"":Object(o["a"])(Object(c["a"])(this.$store.state.flightDate),"EE, MMMM do, yyyy",{locale:this.myLocal})}},methods:{focusBookingMessage:function(){this.scrollToId("#scrollTarget");var t=this;setTimeout((function(){t.$refs.bookingMessage.focus()}),500)},onMessageBlur:function(){this.$store.dispatch("setOrderMessage",this.message)},onOrderBtn:function(){this.orderOverlay=!0;var t=this,e=this.$store.state.orderID;""!==e&&void 0!==e||(e=null);var s=this.$i18n.locale,a={orderId:e,isTest:this.$store.state._DEV,email:this.$store.state.contactEmail,phone:this.$store.state.contactPhone,totalPassengers:this.totalPassengers,flightDate:this.$store.state.flightDate,dateRange:{start:this.$store.state.arriveDate,end:this.$store.state.departDate},flightId:this.$store.state.selectedFlight,photos:this.$store.state.wantsPhotos,passengerJSON:this.$store.state.passengerObjList,slotJSON:this.$store.state.slotPassengersObj,orderMessage:this.$store.state.orderMessage,usersLanguage:s};fetch("https://bookings.simpleitsolutions.ch/api/createcheckout",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:a})}).then((function(t){return t.json()})).then((function(e){return e.orderId>0&&t.$store.dispatch("setOrderId",e.orderId),t.stripe.redirectToCheckout({sessionId:e.stripeSessionId})})).then((function(t){t.error&&alert(t.error.message)})).catch((function(t){console.log("Getting an error back in the 'catch'"),console.error("Error:",t)}))}}},S=$,C=(s("df4f"),s("2877")),P=s("6544"),I=s.n(P),O=s("8336"),E=s("15fd"),D=s("5530"),j=(s("25f0"),s("6ca7"),s("ec29"),s("9d26")),T=s("c37a"),M=s("fe09"),V=["title"],F=M["a"].extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return Object(D["a"])(Object(D["a"])({},T["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){var t=this.attrs$,e=(t.title,Object(E["a"])(t,V));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(j["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",Object(D["a"])(Object(D["a"])({},e),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}}),H=(s("4de4"),s("b64b"),s("2ca0"),s("99af"),s("20f68"),s("4b85"),s("498a"),s("a15b"),s("2b0e"));function N(t){return H["default"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,s){var a=s.props,n=s.data,i=s.children;n.staticClass="".concat(t," ").concat(n.staticClass||"").trim();var r=n.attrs;if(r){n.attrs={};var o=Object.keys(r).filter((function(t){if("slot"===t)return!1;var e=r[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e}));o.length&&(n.staticClass+=" ".concat(o.join(" ")))}return a.id&&(n.domProps=n.domProps||{},n.domProps.id=a.id),e(a.tag,n,i)}})}var z=s("d9f7"),B=N("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var s,a=e.props,n=e.data,i=e.children,r=n.attrs;return r&&(n.attrs={},s=Object.keys(r).filter((function(t){if("slot"===t)return!1;var e=r[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e}))),a.id&&(n.domProps=n.domProps||{},n.domProps.id=a.id),t(a.tag,Object(z["a"])(n,{staticClass:"container",class:Array({"container--fluid":a.fluid}).concat(s||[])}),i)}}),L=s("cd55"),G=s("49e2"),J=s("c865"),R=s("0393"),A=s("132d"),q=s("adda"),W=s("a797"),K=s("490a"),X=s("0fd9"),U=s("1f4f"),Y=(s("a9e3"),s("1681"),s("8654")),Q=s("58df"),Z=Object(Q["a"])(Y["a"]),tt=Z.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(D["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},Y["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,s=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(s,e)+"px"}},genInput:function(){var t=Y["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){Y["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}}),et=s("3a2f"),st=Object(C["a"])(S,a,n,!1,null,"24673e5f",null);e["default"]=st.exports;I()(st,{VBtn:O["a"],VCheckbox:F,VContainer:B,VExpansionPanel:L["a"],VExpansionPanelContent:G["a"],VExpansionPanelHeader:J["a"],VExpansionPanels:R["a"],VIcon:A["a"],VImg:q["a"],VOverlay:W["a"],VProgressCircular:K["a"],VRow:X["a"],VSimpleTable:U["a"],VTextarea:tt,VTooltip:et["a"]})},"6ca7":function(t,e,s){},"812b":function(t,e,s){},df4f:function(t,e,s){"use strict";s("812b")}}]);
//# sourceMappingURL=Pay.dfb18196.js.map