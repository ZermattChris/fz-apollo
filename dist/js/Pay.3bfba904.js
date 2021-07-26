(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Pay"],{1403:function(t,e,a){},1681:function(t,e,a){},"1e2d":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"stepThanks"},[a("PageHeader",{attrs:{title:"Payment Cancelled"}},[t._v(" Payment didn't work for whatever reason. Give a message and probably just go back to the normal payment page... (let them try a different payment method) ")])],1)},n=[],i=a("36ad"),r={name:"Step_Cancelled",components:{PageHeader:i["a"]},data:function(){return{}},created:function(){},computed:{},methods:{}},o=r,c=(a("9473"),a("2877")),l=Object(c["a"])(o,s,n,!1,null,"8ba67874",null);e["default"]=l.exports},"2e0e":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"stepPay"},[a("PageHeader",{attrs:{title:"4. Place Order"}},[t._v(" Review your order and press the PAY NOW button to to complete your payment. ")]),a("div",{staticStyle:{"max-width":"600px",margin:"0 auto"}},[a("p",[a("v-chip",{staticClass:"pl-4 pr-6",attrs:{color:"deep-orange",id:"passenger-btn"}},[t._v(" "+t._s(t.totalPassengers)+" ")]),t._v(" "+t._s(1==t.totalPassengers?"Person":"People")+" flying - "+t._s(t.flightDate)+" ")],1),a("p",{staticClass:"ml-3 mb-6"},[a("v-icon",{attrs:{color:"primary"}},[t._v(" mdi-airplane-takeoff ")]),t._v(" "+t._s(t.meetingTimesString)+" ")],1),[a("v-simple-table",{staticClass:"elevation-1",attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",{staticClass:"grey lighten-3"},[a("th",{staticClass:"text-left"},[t._v(" Qty ")]),a("th",{staticClass:"text-left"},[t._v(" Description ")]),a("th",{staticClass:"text-right"},[t._v(" Subtotal in CHF ")]),a("th",{staticClass:"text-left"})])]),a("tbody",[a("tr",[a("td",[t._v(t._s(t.totalPassengers))]),a("td",[a("span",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(t.flightDetails.name)+" Flight")]),t._v(" @ "+t._s(t.flightDetails.price)+t._s(" ")+"CHF")]),a("td",{staticClass:"text-right"},[t._v(t._s(t.totalPassengers*t.flightDetails.price)+".00")]),a("td")]),t.wantsPhotos?a("tr",[a("td",[t._v(t._s(t.totalPassengers))]),a("td",[a("span",{staticStyle:{"font-weight":"bold"}},[t._v("Photos & Videos")]),t._v(" @ "+t._s(t.videoPrice)+".00"+t._s(" ")+"CHF")]),a("td",{staticClass:"text-right"},[t._v(t._s(t.totalPassengers*t.videoPrice)+".00")]),a("td")]):t._e(),a("tr",{staticClass:"grey lighten-3"},[a("td"),a("td",{staticStyle:{"text-align":"right","font-weight":"bold"}},[t._v("Total CHF")]),t.wantsPhotos?a("td",{staticClass:"text-right"},[a("span",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(t.totalPassengers*t.flightDetails.price+t.totalPassengers*t.videoPrice)+".00")])]):t._e(),t.wantsPhotos?t._e():a("td",{staticClass:"text-right"},[a("span",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(t.totalPassengers*t.flightDetails.price)+".00")])]),a("td")])])]},proxy:!0}])})],a("p",{staticClass:"text-caption mt-8 mx-4"},[t._v(" All meeting times are at our office, located inside the Viktoria Center across from Zermatt's main train station (just down the hall from the COOP Supermarket). ")]),a("p",{staticClass:"text-caption mt-8 mx-4"},[a("v-icon",{attrs:{color:"primary"}},[t._v(" mdi-information-outline ")]),t._v(" If you have any questions, special wishes or have extra information regarding a passenger (for example a passenger with a disability), please click the Special Requests below and enter your message. ")],1),[a("v-row",{staticClass:"text-caption mx-1 mt-4 mb-12",attrs:{justify:"center"}},[a("v-expansion-panels",[a("v-expansion-panel",[a("v-expansion-panel-header",{attrs:{"disable-icon-rotate":""},scopedSlots:t._u([{key:"actions",fn:function(){return[a("v-icon",{attrs:{color:"primary"}},[t._v(" mdi-information-outline ")])]},proxy:!0}])},[t._v(" Click here for special requests ")]),a("v-expansion-panel-content",[t._v(" Special take off times and/or locations, passengers with disabilites, or just general questions... "),a("v-textarea",{ref:"customMessage",staticClass:"mt-6 mx-auto",staticStyle:{"max-width":"600px"},attrs:{name:"booking-message",outlined:"",label:"Your message here","auto-grow":"",hint:"Enter extra passenger infos, different meeting location or questions here."},on:{blur:t.onMessageBlur,click:function(e){return t.scrollToId("#shop-meeting-text")}},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],1)],1)],1)],1)],a("v-container",{staticClass:"px-0 pt-0",staticStyle:{"max-width":"400px",margin:"0 auto","text-align":"center"},attrs:{fluid:""}},[a("v-checkbox",{attrs:{color:"orange darken-3"},scopedSlots:t._u([{key:"label",fn:function(){return[a("div",{attrs:{id:"TCs-Box"}},[t._v(" Check here to indicate that you have read and agree to the "),a("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[a("a",t._g({attrs:{target:"_blank",href:"https://www.flyzermatt.com/terms-and-conditions#onlinepayments"},on:{click:function(t){t.stopPropagation()}}},s),[t._v("Terms and Conditions")])]}}])},[t._v(" Opens in new page ")]),t._v(" of the FlyZermatt Customer Agreement ")],1)]},proxy:!0}]),model:{value:t.termsCheckboxModel,callback:function(e){t.termsCheckboxModel=e},expression:"termsCheckboxModel"}})],1),a("div",{staticStyle:{"text-align":"center"},attrs:{id:"payment-button-box"}},[a("v-btn",{ref:"paymentButton",staticClass:"mt-4",attrs:{id:"payment-button",type:"submit",color:"orange darken-3",disabled:!t.termsCheckboxModel},on:{click:t.onOrderBtn}},[t._v(" Pay Now ")])],1),a("a",{staticClass:"mx-auto",staticStyle:{display:"block",width:"100px",height:"40px"},attrs:{href:"https://stripe.com"}},[a("v-img",{attrs:{contain:"",width:"100",src:"Powered by Stripe - blurple.svg"}})],1),1==t.$store.state._DEV?a("div",[a("br"),a("br"),t._m(0)]):t._e()],2)],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[t._v("Visa standard card with success: 4000007560000009 "),a("br")])])}],i=(a("4160"),a("d3b7"),a("159b"),a("96cf"),a("1da1")),r=a("36ad"),o=a("b166"),c=a("e3ee"),l="https://js.stripe.com/v3",d=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,u="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",h=function(){for(var t=document.querySelectorAll('script[src^="'.concat(l,'"]')),e=0;e<t.length;e++){var a=t[e];if(d.test(a.src))return a}return null},p=function(t){var e=t&&!t.advancedFraudSignals?"?advancedFraudSignals=false":"",a=document.createElement("script");a.src="".concat(l).concat(e);var s=document.head||document.body;if(!s)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return s.appendChild(a),a},f=function(t,e){t&&t._registerWrapper&&t._registerWrapper({name:"stripe-js",version:"1.12.1",startTime:e})},m=null,g=function(t){return null!==m||(m=new Promise((function(e,a){if("undefined"!==typeof window)if(window.Stripe&&t&&console.warn(u),window.Stripe)e(window.Stripe);else try{var s=h();s&&t?console.warn(u):s||(s=p(t)),s.addEventListener("load",(function(){window.Stripe?e(window.Stripe):a(new Error("Stripe.js not available"))})),s.addEventListener("error",(function(){a(new Error("Failed to load Stripe.js"))}))}catch(n){return void a(n)}else e(null)}))),m},v=function(t,e,a){if(null===t)return null;var s=t.apply(void 0,e);return f(s,a),s},b=Promise.resolve().then((function(){return g(null)})),y=!1;b["catch"]((function(t){y||console.warn(t)}));var x=function(){for(var t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];y=!0;var s=Date.now();return b.then((function(t){return v(t,e,s)}))},w={name:"Step_Pay",components:{PageHeader:r["a"]},data:function(){return{stripe:null,hasCardErrors:!1,payEnabled:!1,payLoading:!1,message:this.$store.state.orderMessage,elements:void 0,card:void 0,flightDetails:this.$store.getters.getFlightFromID(this.$store.state.selectedFlight),totalPassengers:this.$store.state.totalPassengers,wantsPhotos:this.$store.state.wantsPhotos,videoPrice:this.$store.state._videoPrice,termsCheckboxModel:!1,orderOverlay:!1}},mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!0!==t.$store.state._DEV){e.next=6;break}return console.log("Development Mode, will create a TEST order via Stripe"),e.next=4,x("pk_test_51ION3qE6VjXXKzJ2c9Lxf0eoYCe6BuizG3Q7OrsNIEOWA4NMlpP3ycbEW7KwaFpJYlA4MFOeosbDuyJuIWMS5xn200GcQxogOw");case 4:return t.stripe=e.sent,e.abrupt("return");case 6:return e.next=8,x("pk_live_51ION3qE6VjXXKzJ2kkmGArPkYqcuzMC0iFzRGZBCrUmVFEJa3mIh15LvCz8fIJF9DkhdNZmcgzzaTApgD2NFBytH004OVVUHyH");case 8:t.stripe=e.sent;case 9:case"end":return e.stop()}}),e)})))()},computed:{meetingTimesString:function(){var t=this,e="",a=this.$store.state.slotPassengersObj.slotsList;return a.forEach((function(a){t.isObjEmpty(a)||(e+=a.passengers+" person @ "+a.timeString+". ")})),e},flightDate:function(){return Object(o["a"])(Object(c["a"])(this.$store.state.flightDate),"EE, MMMM do, yyyy")}},methods:{onMessageBlur:function(){this.$store.dispatch("setOrderMessage",this.message)},onOrderBtn:function(){var t=this,e=this.$store.state.orderID;""!==e&&void 0!==e||(e=null);var a={orderId:e,isTest:!0,email:this.$store.state.contactEmail,phone:this.$store.state.contactPhone,totalPassengers:this.totalPassengers,flightDate:this.$store.state.flightDate,dateRange:{start:this.$store.state.arriveDate,end:this.$store.state.departDate},flightId:this.$store.state.selectedFlight,photos:this.$store.state.wantsPhotos,passengerJSON:this.$store.state.passengerObjList,slotJSON:this.$store.state.slotPassengersObj,orderMessage:this.$store.state.orderMessage};fetch("https://bookings.simpleitsolutions.ch/api/createcheckout",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:a})}).then((function(t){return t.json()})).then((function(e){return e.orderId>0&&t.$store.dispatch("setOrderId",e.orderId),t.stripe.redirectToCheckout({sessionId:e.stripeSessionId})})).then((function(t){t.error&&alert(t.error.message)})).catch((function(t){console.log("Getting an error back in the 'catch'"),console.error("Error:",t)}))}}},_=w,C=(a("574a"),a("2877")),k=a("6544"),P=a.n(k),S=a("8336"),I=(a("25f0"),a("5530")),O=(a("6ca7"),a("ec29"),a("9d26")),$=a("c37a"),j=a("fe09"),E=j["a"].extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return Object(I["a"])(Object(I["a"])({},$["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(O["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",Object(I["a"])(Object(I["a"])({},this.attrs$),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}}),D=a("cc20"),V=(a("99af"),a("4de4"),a("b64b"),a("2ca0"),a("20f6"),a("4b85"),a("a15b"),a("498a"),a("2b0e"));function T(t){return V["default"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,a){var s=a.props,n=a.data,i=a.children;n.staticClass="".concat(t," ").concat(n.staticClass||"").trim();var r=n.attrs;if(r){n.attrs={};var o=Object.keys(r).filter((function(t){if("slot"===t)return!1;var e=r[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e}));o.length&&(n.staticClass+=" ".concat(o.join(" ")))}return s.id&&(n.domProps=n.domProps||{},n.domProps.id=s.id),e(s.tag,n,i)}})}var H=a("d9f7"),F=T("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var a,s=e.props,n=e.data,i=e.children,r=n.attrs;return r&&(n.attrs={},a=Object.keys(r).filter((function(t){if("slot"===t)return!1;var e=r[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e}))),s.id&&(n.domProps=n.domProps||{},n.domProps.id=s.id),t(s.tag,Object(H["a"])(n,{staticClass:"container",class:Array({"container--fluid":s.fluid}).concat(a||[])}),i)}}),M=a("cd55"),N=a("49e2"),z=a("c865"),B=a("0393"),A=a("132d"),G=a("adda"),R=a("0fd9"),J=a("1f4f"),q=(a("a9e3"),a("1681"),a("8654")),L=a("58df"),W=Object(L["a"])(q["a"]),Y=W.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(I["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},q["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(a,e)+"px"}},genInput:function(){var t=q["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){q["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}}),K=a("3a2f"),X=Object(C["a"])(_,s,n,!1,null,"5fab296a",null);e["default"]=X.exports;P()(X,{VBtn:S["a"],VCheckbox:E,VChip:D["a"],VContainer:F,VExpansionPanel:M["a"],VExpansionPanelContent:N["a"],VExpansionPanelHeader:z["a"],VExpansionPanels:B["a"],VIcon:A["a"],VImg:G["a"],VRow:R["a"],VSimpleTable:J["a"],VTextarea:Y,VTooltip:K["a"]})},"574a":function(t,e,a){"use strict";a("1403")},"6ca7":function(t,e,a){},9473:function(t,e,a){"use strict";a("b321")},b321:function(t,e,a){}}]);
//# sourceMappingURL=Pay.3bfba904.js.map