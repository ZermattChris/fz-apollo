(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Pay"],{1681:function(t,e,s){},"1e2d":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"stepThanks"},[s("PageHeader",{attrs:{title:"Payment Cancelled"}},[t._v(" Payment didn't work for whatever reason. Give a message and probably just go back to the normal payment page... (let them try a different payment method) ")])],1)},n=[],i=s("36ad"),r={name:"Step_Cancelled",components:{PageHeader:i["a"]},data:function(){return{}},created:function(){},computed:{},methods:{}},o=r,c=(s("9473"),s("2877")),l=Object(c["a"])(o,a,n,!1,null,"8ba67874",null);e["default"]=l.exports},"2e0e":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"stepPay"},[s("PageHeader",{attrs:{title:"4. Place Order"}},[t._v(" Review your order and press the PAY NOW button to to complete your payment. ")]),s("div",{staticStyle:{"max-width":"600px",margin:"0 auto"}},[s("p",{staticClass:"ml-3 mb-6"},[s("v-icon",{attrs:{color:"primary"}},[t._v(" mdi-airplane-takeoff ")]),t._v(" "+t._s(t.meetingTimesString)+" "+t._s(t.flightDate)+" ")],1),[s("v-simple-table",{staticClass:"elevation-1",attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[s("thead",[s("tr",{staticClass:"grey lighten-3"},[s("th",{staticClass:"text-left"},[t._v(" Qty ")]),s("th",{staticClass:"text-left"},[t._v(" Description ")]),s("th",{staticClass:"text-right"},[t._v(" Subtotal in CHF ")]),s("th",{staticClass:"text-left"})])]),s("tbody",[s("tr",[s("td",[t._v(t._s(t.totalPassengers))]),s("td",[s("span",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(t.flightDetails.name)+" Flight")]),t._v(" @ "+t._s(t.flightDetails.price)+t._s(" ")+"CHF")]),s("td",{staticClass:"text-right"},[t._v(t._s(t.totalPassengers*t.flightDetails.price)+".00")]),s("td")]),t.wantsPhotos?s("tr",[s("td",[t._v(t._s(t.totalPassengers))]),s("td",[s("span",{staticStyle:{"font-weight":"bold"}},[t._v("Photos & Videos")]),t._v(" @ "+t._s(t.videoPrice)+".00"+t._s(" ")+"CHF")]),s("td",{staticClass:"text-right"},[t._v(t._s(t.totalPassengers*t.videoPrice)+".00")]),s("td")]):t._e(),s("tr",{staticClass:"grey lighten-3"},[s("td"),s("td",{staticStyle:{"text-align":"right","font-weight":"bold"}},[t._v("Total CHF")]),t.wantsPhotos?s("td",{staticClass:"text-right"},[s("span",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(t.totalPassengers*t.flightDetails.price+t.totalPassengers*t.videoPrice)+".00")])]):t._e(),t.wantsPhotos?t._e():s("td",{staticClass:"text-right"},[s("span",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(t.totalPassengers*t.flightDetails.price)+".00")])]),s("td")])])]},proxy:!0}])})],s("p",{staticClass:"text-caption mt-2 mx-4"},[t._v(" All meeting times are at our office, located inside the Viktoria Center across from Zermatt's main train station (just down the hall from the COOP Supermarket). ")]),s("p",{staticClass:"text-caption mt-12 mx-4",attrs:{id:"questionsTxt"}},[s("v-icon",{attrs:{color:"primary"}},[t._v(" mdi-information-outline ")]),t._v(" If you have any questions, special wishes or have extra information regarding a passenger (for example a passenger with a disability), please click the Special Requests below and enter your message. ")],1),[s("v-row",{staticClass:"text-caption mx-1 mt-4 mb-12",attrs:{justify:"center"}},[s("v-expansion-panels",[s("v-expansion-panel",[s("v-expansion-panel-header",{attrs:{"disable-icon-rotate":""},on:{click:function(e){return t.focusBookingMessage()}},scopedSlots:t._u([{key:"actions",fn:function(){return[s("v-icon",{attrs:{color:"primary"}},[t._v(" mdi-information-outline ")])]},proxy:!0}])},[t._v(" Click here for special requests ")]),s("v-expansion-panel-content",[t._v(" Special take off times and/or locations, passengers with disabilites, or just general questions... "),s("v-textarea",{ref:"bookingMessage",staticClass:"mt-6 mx-auto",staticStyle:{"max-width":"600px"},attrs:{name:"booking-message",outlined:"",label:"Your message here","auto-grow":""},on:{blur:t.onMessageBlur,click:function(e){return t.scrollToId("#shop-meeting-text")}},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],1)],1)],1)],1)],s("v-container",{staticClass:"px-0 pt-0",staticStyle:{"max-width":"400px",margin:"0 auto","text-align":"center"},attrs:{fluid:""}},[s("v-checkbox",{attrs:{color:"orange darken-3"},scopedSlots:t._u([{key:"label",fn:function(){return[s("div",{attrs:{id:"TCs-Box"}},[t._v(" Check here to indicate that you have read and agree to the "),s("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[s("a",t._g({attrs:{target:"_blank",href:"https://www.flyzermatt.com/terms-and-conditions#onlinepayments"},on:{click:function(t){t.stopPropagation()}}},a),[t._v("Terms and Conditions")])]}}])},[t._v(" Opens in new page ")]),t._v(" of the FlyZermatt Customer Agreement ")],1)]},proxy:!0}]),model:{value:t.termsCheckboxModel,callback:function(e){t.termsCheckboxModel=e},expression:"termsCheckboxModel"}})],1),s("div",{staticStyle:{"text-align":"center"},attrs:{id:"payment-button-box"}},[s("v-btn",{ref:"paymentButton",staticClass:"mt-4",attrs:{id:"payment-button",type:"submit",color:"orange darken-3",disabled:!t.termsCheckboxModel},on:{click:t.onOrderBtn}},[t._v(" Pay Now ")])],1),s("a",{staticClass:"mx-auto mt-8",staticStyle:{display:"block",width:"100px",height:"30px"},attrs:{href:"https://stripe.com"}},[s("v-img",{attrs:{contain:"",width:"100",height:"30",src:"Powered by Stripe - blurple.svg"}})],1),1==t.$store.state._DEV?s("div",[s("br"),s("br"),t._m(0)]):t._e()],2)],1)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("DEBUG: Visa with success: 4000007560000009 "),s("br")])])}],i=(s("4160"),s("d3b7"),s("159b"),s("96cf"),s("1da1")),r=s("36ad"),o=s("b166"),c=s("e3ee"),l="https://js.stripe.com/v3",d=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,u="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",h=function(){for(var t=document.querySelectorAll('script[src^="'.concat(l,'"]')),e=0;e<t.length;e++){var s=t[e];if(d.test(s.src))return s}return null},p=function(t){var e=t&&!t.advancedFraudSignals?"?advancedFraudSignals=false":"",s=document.createElement("script");s.src="".concat(l).concat(e);var a=document.head||document.body;if(!a)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return a.appendChild(s),s},f=function(t,e){t&&t._registerWrapper&&t._registerWrapper({name:"stripe-js",version:"1.12.1",startTime:e})},m=null,g=function(t){return null!==m||(m=new Promise((function(e,s){if("undefined"!==typeof window)if(window.Stripe&&t&&console.warn(u),window.Stripe)e(window.Stripe);else try{var a=h();a&&t?console.warn(u):a||(a=p(t)),a.addEventListener("load",(function(){window.Stripe?e(window.Stripe):s(new Error("Stripe.js not available"))})),a.addEventListener("error",(function(){s(new Error("Failed to load Stripe.js"))}))}catch(n){return void s(n)}else e(null)}))),m},v=function(t,e,s){if(null===t)return null;var a=t.apply(void 0,e);return f(a,s),a},b=Promise.resolve().then((function(){return g(null)})),y=!1;b["catch"]((function(t){y||console.warn(t)}));var x=function(){for(var t=arguments.length,e=new Array(t),s=0;s<t;s++)e[s]=arguments[s];y=!0;var a=Date.now();return b.then((function(t){return v(t,e,a)}))},w={name:"Step_Pay",components:{PageHeader:r["a"]},data:function(){return{stripe:null,hasCardErrors:!1,payEnabled:!1,payLoading:!1,message:this.$store.state.orderMessage,elements:void 0,card:void 0,flightDetails:this.$store.getters.getFlightFromID(this.$store.state.selectedFlight),totalPassengers:this.$store.state.totalPassengers,wantsPhotos:this.$store.state.wantsPhotos,videoPrice:this.$store.state._videoPrice,termsCheckboxModel:!1,orderOverlay:!1}},mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!0!==t.$store.state._DEV){e.next=6;break}return console.log("Development Mode, will create a TEST order via Stripe"),e.next=4,x("pk_test_51ION3qE6VjXXKzJ2c9Lxf0eoYCe6BuizG3Q7OrsNIEOWA4NMlpP3ycbEW7KwaFpJYlA4MFOeosbDuyJuIWMS5xn200GcQxogOw");case 4:return t.stripe=e.sent,e.abrupt("return");case 6:return e.next=8,x("pk_live_51ION3qE6VjXXKzJ2kkmGArPkYqcuzMC0iFzRGZBCrUmVFEJa3mIh15LvCz8fIJF9DkhdNZmcgzzaTApgD2NFBytH004OVVUHyH");case 8:t.stripe=e.sent;case 9:case"end":return e.stop()}}),e)})))()},computed:{meetingTimesString:function(){var t=this,e="",s=this.$store.state.slotPassengersObj.slotsList;return s.forEach((function(s){t.isObjEmpty(s)||s.passengers>0&&(e+=s.passengers+" person @ "+s.timeString+". ")})),e},flightDate:function(){return Object(o["a"])(Object(c["a"])(this.$store.state.flightDate),"EE, MMMM do, yyyy")}},methods:{focusBookingMessage:function(){this.scrollToId("#questionsTxt");var t=this;setTimeout((function(){t.$refs.bookingMessage.focus()}),500)},onMessageBlur:function(){this.$store.dispatch("setOrderMessage",this.message)},onOrderBtn:function(){var t=this,e=this.$store.state.orderID;""!==e&&void 0!==e||(e=null);var s={orderId:e,isTest:!0,email:this.$store.state.contactEmail,phone:this.$store.state.contactPhone,totalPassengers:this.totalPassengers,flightDate:this.$store.state.flightDate,dateRange:{start:this.$store.state.arriveDate,end:this.$store.state.departDate},flightId:this.$store.state.selectedFlight,photos:this.$store.state.wantsPhotos,passengerJSON:this.$store.state.passengerObjList,slotJSON:this.$store.state.slotPassengersObj,orderMessage:this.$store.state.orderMessage};fetch("https://bookings.simpleitsolutions.ch/api/createcheckout",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:s})}).then((function(t){return t.json()})).then((function(e){return e.orderId>0&&t.$store.dispatch("setOrderId",e.orderId),t.stripe.redirectToCheckout({sessionId:e.stripeSessionId})})).then((function(t){t.error&&alert(t.error.message)})).catch((function(t){console.log("Getting an error back in the 'catch'"),console.error("Error:",t)}))}}},_=w,k=(s("81ed"),s("2877")),C=s("6544"),S=s.n(C),P=s("8336"),I=(s("25f0"),s("5530")),O=(s("6ca7"),s("ec29"),s("9d26")),$=s("c37a"),j=s("fe09"),E=j["a"].extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return Object(I["a"])(Object(I["a"])({},$["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(O["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",Object(I["a"])(Object(I["a"])({},this.attrs$),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}}),T=(s("99af"),s("4de4"),s("b64b"),s("2ca0"),s("20f6"),s("4b85"),s("a15b"),s("498a"),s("2b0e"));function D(t){return T["default"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,s){var a=s.props,n=s.data,i=s.children;n.staticClass="".concat(t," ").concat(n.staticClass||"").trim();var r=n.attrs;if(r){n.attrs={};var o=Object.keys(r).filter((function(t){if("slot"===t)return!1;var e=r[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e}));o.length&&(n.staticClass+=" ".concat(o.join(" ")))}return a.id&&(n.domProps=n.domProps||{},n.domProps.id=a.id),e(a.tag,n,i)}})}var M=s("d9f7"),V=D("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var s,a=e.props,n=e.data,i=e.children,r=n.attrs;return r&&(n.attrs={},s=Object.keys(r).filter((function(t){if("slot"===t)return!1;var e=r[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e}))),a.id&&(n.domProps=n.domProps||{},n.domProps.id=a.id),t(a.tag,Object(M["a"])(n,{staticClass:"container",class:Array({"container--fluid":a.fluid}).concat(s||[])}),i)}}),H=s("cd55"),F=s("49e2"),B=s("c865"),N=s("0393"),z=s("132d"),G=s("adda"),A=s("0fd9"),R=s("1f4f"),q=(s("a9e3"),s("1681"),s("8654")),J=s("58df"),L=Object(J["a"])(q["a"]),W=L.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(I["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},q["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,s=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(s,e)+"px"}},genInput:function(){var t=q["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){q["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}}),Y=s("3a2f"),K=Object(k["a"])(_,a,n,!1,null,"6656e046",null);e["default"]=K.exports;S()(K,{VBtn:P["a"],VCheckbox:E,VContainer:V,VExpansionPanel:H["a"],VExpansionPanelContent:F["a"],VExpansionPanelHeader:B["a"],VExpansionPanels:N["a"],VIcon:z["a"],VImg:G["a"],VRow:A["a"],VSimpleTable:R["a"],VTextarea:W,VTooltip:Y["a"]})},"6ca7":function(t,e,s){},"81ed":function(t,e,s){"use strict";s("c796")},9473:function(t,e,s){"use strict";s("b321")},b321:function(t,e,s){},c796:function(t,e,s){}}]);
//# sourceMappingURL=Pay.0b6e092c.js.map