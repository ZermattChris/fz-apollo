(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Pay"],{1681:function(t,e,n){},"19dc":function(t,e,n){},"1f09":function(t,e,n){},"2e0e":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"stepPay"},[n("PageHeader",{attrs:{title:"4. "+t.$t("step-pay.title")}},[t._v(" "+t._s(t.$t("step-pay.description"))+" ")]),n("div",{staticStyle:{"max-width":"600px",margin:"0 auto"}},[n("p",{staticClass:"ml-3"},[n("v-icon",{attrs:{color:"primary"}},[t._v(" mdi-airplane-takeoff ")]),t._v(" "+t._s(t.meetingTimesString)+" "+t._s(t.flightDate)+" ")],1),n("p",{staticClass:"rounded-lg white--text text-caption mt-n2 mb-9 mx-4 px-2 py-1",staticStyle:{"background-color":"#c78b48"}},[t._v(" "+t._s(t.$t("step-pay.meetingTime"))+" "),n("strong",[n("a",{staticClass:"white--text text-decoration-underline",on:{click:function(e){t.findOfficeDialog=!0}}},[t._v(" "+t._s(t.$t("findOffice.linkText"))+" "),n("v-icon",{attrs:{color:"white","x-small":""}},[t._v(" mdi-open-in-new ")])],1)])]),[n("v-simple-table",{staticClass:"elevation-1",attrs:{dense:"",id:"scrollTarget"},scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",[n("tr",{staticClass:"grey lighten-3"},[n("th",{staticClass:"text-left"},[t._v(" "+t._s(t.$t("step-pay.qty"))+" ")]),n("th",{staticClass:"text-left"},[t._v(" "+t._s(t.$t("step-pay.flightDescription"))+" ")]),n("th",{staticClass:"text-right"},[t._v(" "+t._s(t.$t("step-pay.subtotalCHF"))+" ")]),n("th",{staticClass:"text-left"})])]),n("tbody",[n("tr",[n("td",[t._v(t._s(t.totalPassengers))]),n("td",[n("span",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(t.flightDetails.name)+" Flight")]),t._v(" @ "+t._s(t.flightDetails.price)+t._s(" ")+"CHF")]),n("td",{staticClass:"text-right"},[t._v(t._s(t.totalPassengers*t.flightDetails.price)+".00")]),n("td")]),t.wantsPhotos?n("tr",[n("td",[t._v(t._s(t.totalPassengers))]),n("td",[n("span",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(t.$t("step-pay.photosVideos")))]),t._v(" @ "+t._s(t.videoPrice)+".00"+t._s(" ")+"CHF")]),n("td",{staticClass:"text-right"},[t._v(t._s(t.totalPassengers*t.videoPrice)+".00")]),n("td")]):t._e(),n("tr",{staticClass:"grey lighten-3"},[n("td"),n("td",{staticStyle:{"text-align":"right","font-weight":"bold"}},[t._v(" "+t._s(t.$t("step-pay.totalCHF"))+" ")]),t.wantsPhotos?n("td",{staticClass:"text-right"},[n("span",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(t.totalPassengers*t.flightDetails.price+t.totalPassengers*t.videoPrice)+".00")])]):t._e(),t.wantsPhotos?t._e():n("td",{staticClass:"text-right"},[n("span",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(t.totalPassengers*t.flightDetails.price)+".00")])]),n("td")])])]},proxy:!0}])})],[n("v-row",{staticClass:"text-caption mx-1 mt-8 mb-10",attrs:{justify:"center"}},[n("v-expansion-panels",[n("v-expansion-panel",[n("v-expansion-panel-header",{attrs:{"disable-icon-rotate":""},on:{click:function(e){return t.focusBookingMessage()}},scopedSlots:t._u([{key:"actions",fn:function(){return[n("v-icon",{attrs:{color:"warning"}},[t._v(" mdi-information-outline ")])]},proxy:!0}])},[n("strong",[t._v(t._s(t.$t("step-pay.clickForSpecialRequests")))])]),n("v-expansion-panel-content",[n("p",{staticClass:"text-caption mt-0 mx-4",attrs:{id:"questionsTxt"}},[t._v(" "+t._s(t.$t("step-pay.specialWishes"))+" ")]),n("v-textarea",{ref:"bookingMessage",staticClass:"mt-6 mx-auto",staticStyle:{"max-width":"600px"},attrs:{name:"booking-message",outlined:"",label:t.$t("step-pay.yourMsgHere"),"auto-grow":""},on:{blur:t.onMessageBlur},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],1)],1)],1)],1)],n("div",{attrs:{id:"stripe-payment-box"}},[t.stripePaymentFormLoading?n("v-skeleton-loader",{attrs:{type:"article, actions"}}):t._e(),n("form",{attrs:{id:"stripe-payment-form"},on:{submit:function(e){return e.preventDefault(),t.onOrderBtn.apply(null,arguments)}}},[n("div",{staticStyle:{"min-height":"210px"},attrs:{id:"stripe-payment-element"}}),n("v-container",{staticClass:"px-0 pt-0",staticStyle:{"max-width":"400px",margin:"0 auto","text-align":"center"},attrs:{fluid:""}},[n("v-checkbox",{attrs:{color:"orange darken-3"},scopedSlots:t._u([{key:"label",fn:function(){return[n("div",{attrs:{id:"TCs-Box"}},[t._v(" "+t._s(t.$t("step-pay.tc-text-start"))+" "),n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("a",t._g({attrs:{target:"_blank",href:"https://www.flyzermatt.com/terms-and-conditions#onlinepayments"},on:{click:function(t){t.stopPropagation()}}},a),[t._v(t._s(t.$t("step-pay.tc-text-link")))])]}}])},[t._v(" "+t._s(t.$t("step-pay.openInNewPage"))+" ")]),t._v(" "+t._s(t.$t("step-pay.tc-text-end"))+" ")],1)]},proxy:!0}]),model:{value:t.termsCheckboxModel,callback:function(e){t.termsCheckboxModel=e},expression:"termsCheckboxModel"}})],1),n("div",{staticStyle:{"text-align":"center"},attrs:{id:"payment-button-box"}},[n("v-btn",{ref:"paymentButton",staticClass:"mt-0",attrs:{id:"payment-button",type:"submit",color:"orange darken-3",disabled:!t.payBtnValid}},[t._v(" "+t._s(t.$t("step-pay.bookFlight"))+" ")])],1),n("div",{attrs:{id:"stripe-error-message"}})],1)],1)],2)],1)},i=[],s=n("1da1"),r=(n("96cf"),n("d3b7"),n("159b"),n("36ad")),o=n("b166"),l=n("e3ee"),c=n("7828"),d=n("3f5e"),u=n("ab5d"),p="https://js.stripe.com/v3",h=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,f="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",m=function(){for(var t=document.querySelectorAll('script[src^="'.concat(p,'"]')),e=0;e<t.length;e++){var n=t[e];if(h.test(n.src))return n}return null},g=function(t){var e=t&&!t.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(p).concat(e);var a=document.head||document.body;if(!a)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return a.appendChild(n),n},v=function(t,e){t&&t._registerWrapper&&t._registerWrapper({name:"stripe-js",version:"1.16.0",startTime:e})},y=null,b=function(t){return null!==y||(y=new Promise((function(e,n){if("undefined"!==typeof window)if(window.Stripe&&t&&console.warn(f),window.Stripe)e(window.Stripe);else try{var a=m();a&&t?console.warn(f):a||(a=g(t)),a.addEventListener("load",(function(){window.Stripe?e(window.Stripe):n(new Error("Stripe.js not available"))})),a.addEventListener("error",(function(){n(new Error("Failed to load Stripe.js"))}))}catch(i){return void n(i)}else e(null)}))),y},x=function(t,e,n){if(null===t)return null;var a=t.apply(void 0,e);return v(a,n),a},w=Promise.resolve().then((function(){return b(null)})),_=!1;w["catch"]((function(t){_||console.warn(t)}));var S=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];_=!0;var a=Date.now();return w.then((function(t){return x(t,e,a)}))},k={name:"Step_Pay",components:{PageHeader:r["a"]},data:function(){return{stripe:null,hasCardErrors:!1,payLoading:!1,message:this.$store.state.orderMessage,elements:void 0,card:void 0,flightDetails:this.$store.getters.getFlightFromID(this.$store.state.selectedFlight),totalPassengers:this.$store.state.totalPassengers,wantsPhotos:this.$store.state.wantsPhotos,videoPrice:this.$store.state._videoPrice,termsCheckboxModel:!1,orderOverlay:!1,myLocal:c["a"],tempClientSecret:"",stripePayFormValid:!1,stripePaymentFormLoading:!0}},beforeMount:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n,a,i,s,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("Development Mode - Test Stripe Order."),e.next=3,S("pk_test_51ION3qE6VjXXKzJ2c9Lxf0eoYCe6BuizG3Q7OrsNIEOWA4NMlpP3ycbEW7KwaFpJYlA4MFOeosbDuyJuIWMS5xn200GcQxogOw");case 3:return t.stripe=e.sent,e.next=6,fetch("https://gateway.flyzermatt.com/create-customer");case 6:return n=e.sent,e.next=9,n.json();case 9:a=e.sent,t.tempClientSecret=a.clientSecret,i={clientSecret:t.tempClientSecret,locale:t.$i18n.locale},t.elements=t.stripe.elements(i),s=t.elements.create("payment"),r=t,s.on("ready",(function(){r.stripePaymentFormLoading=!1})),s.on("change",(function(t){t.complete&&(r.stripePayFormValid=!0)})),s.mount("#stripe-payment-element");case 18:case"end":return e.stop()}}),e)})))()},beforeUpdate:function(){"en"===this.$i18n.locale&&(this.myLocal=c["a"]),"de"===this.$i18n.locale&&(this.myLocal=d["a"]),"ko"===this.$i18n.locale&&(this.myLocal=u["a"])},computed:{payBtnValid:function(){return!0===this.stripePayFormValid&&!0===this.termsCheckboxModel},isDev:function(){return this.$store.state._DEV},findOfficeDialog:{get:function(){return this.$store.state.findOfficeDialog},set:function(t){return this.$store.dispatch("showFindOfficeDialog",t)}},meetingTimesString:function(){var t=this,e="",n=this.$store.state.slotPassengersObj.slotsList;return n.forEach((function(n){t.isObjEmpty(n)||n.passengers>0&&(e+=n.passengers+" "+t.$tc("step-pay.people",n.passengers)+" @ "+n.timeString+". ")})),e},flightDate:function(){return this.isObjEmpty(this.$store.state.flightDate)?"":Object(o["a"])(Object(l["a"])(this.$store.state.flightDate),"EE, MMMM do, yyyy",{locale:this.myLocal})}},methods:{focusBookingMessage:function(){this.scrollToId("#scrollTarget");var t=this;setTimeout((function(){t.$refs.bookingMessage.focus()}),500)},onMessageBlur:function(){this.$store.dispatch("setOrderMessage",this.message)},onOrderBtn:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n,a,i,s,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.elements,a=document.location.host,e.next=4,t.stripe.confirmSetup({elements:n,confirmParams:{return_url:a+"/thanks"}});case 4:i=e.sent,s=i.error,s&&(r=document.querySelector("#error-message"),r.textContent=s.message,console.log(s.message));case 7:case"end":return e.stop()}}),e)})))()}},watch:{"$store.state.locale":function(t){this.elements.update({locale:t})}}},C=k,$=(n("6ee1"),n("2877")),P=n("6544"),O=n.n(P),j=n("8336"),I=n("15fd"),B=n("5530"),E=(n("25f0"),n("6ca7"),n("ec29"),n("9d26")),L=n("c37a"),D=n("fe09"),F=["title"],M=D["a"].extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return Object(B["a"])(Object(B["a"])({},L["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){var t=this.attrs$,e=(t.title,Object(I["a"])(t,F));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(E["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",Object(B["a"])(Object(B["a"])({},e),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}}),V=(n("4de4"),n("b64b"),n("2ca0"),n("99af"),n("20f68"),n("4b85"),n("498a"),n("a15b"),n("2b0e"));function T(t){return V["default"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,n){var a=n.props,i=n.data,s=n.children;i.staticClass="".concat(t," ").concat(i.staticClass||"").trim();var r=i.attrs;if(r){i.attrs={};var o=Object.keys(r).filter((function(t){if("slot"===t)return!1;var e=r[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e}));o.length&&(i.staticClass+=" ".concat(o.join(" ")))}return a.id&&(i.domProps=i.domProps||{},i.domProps.id=a.id),e(a.tag,i,s)}})}var H=n("d9f7"),R=T("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,a=e.props,i=e.data,s=e.children,r=i.attrs;return r&&(i.attrs={},n=Object.keys(r).filter((function(t){if("slot"===t)return!1;var e=r[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e}))),a.id&&(i.domProps=i.domProps||{},i.domProps.id=a.id),t(a.tag,Object(H["a"])(i,{staticClass:"container",class:Array({"container--fluid":a.fluid}).concat(n||[])}),s)}}),z=n("cd55"),N=n("49e2"),A=n("c865"),G=n("0393"),W=n("132d"),q=n("0fd9"),J=n("1f4f"),K=n("3835"),Q=(n("ac1f"),n("1276"),n("d81d"),n("a630"),n("3ca3"),n("5319"),n("1f09"),n("c995")),X=n("24b2"),Y=n("7560"),U=n("58df"),Z=n("80d2"),tt=Object(U["a"])(Q["a"],X["a"],Y["a"]).extend({name:"VSkeletonLoader",props:{boilerplate:Boolean,loading:Boolean,tile:Boolean,transition:String,type:String,types:{type:Object,default:function(){return{}}}},computed:{attrs:function(){return this.isLoading?this.boilerplate?{}:Object(B["a"])({"aria-busy":!0,"aria-live":"polite",role:"alert"},this.$attrs):this.$attrs},classes:function(){return Object(B["a"])(Object(B["a"])({"v-skeleton-loader--boilerplate":this.boilerplate,"v-skeleton-loader--is-loading":this.isLoading,"v-skeleton-loader--tile":this.tile},this.themeClasses),this.elevationClasses)},isLoading:function(){return!("default"in this.$scopedSlots)||this.loading},rootTypes:function(){return Object(B["a"])({actions:"button@2",article:"heading, paragraph",avatar:"avatar",button:"button",card:"image, card-heading","card-avatar":"image, list-item-avatar","card-heading":"heading",chip:"chip","date-picker":"list-item, card-heading, divider, date-picker-options, date-picker-days, actions","date-picker-options":"text, avatar@2","date-picker-days":"avatar@28",heading:"heading",image:"image","list-item":"text","list-item-avatar":"avatar, text","list-item-two-line":"sentences","list-item-avatar-two-line":"avatar, sentences","list-item-three-line":"paragraph","list-item-avatar-three-line":"avatar, paragraph",paragraph:"text@3",sentences:"text@2",table:"table-heading, table-thead, table-tbody, table-tfoot","table-heading":"heading, text","table-thead":"heading@6","table-tbody":"table-row-divider@6","table-row-divider":"table-row, divider","table-row":"table-cell@6","table-cell":"text","table-tfoot":"text@2, avatar@2",text:"text"},this.types)}},methods:{genBone:function(t,e){return this.$createElement("div",{staticClass:"v-skeleton-loader__".concat(t," v-skeleton-loader__bone")},e)},genBones:function(t){var e=this,n=t.split("@"),a=Object(K["a"])(n,2),i=a[0],s=a[1],r=function(){return e.genStructure(i)};return Array.from({length:s}).map(r)},genStructure:function(t){var e=[];t=t||this.type||"";var n=this.rootTypes[t]||"";if(t===n);else{if(t.indexOf(",")>-1)return this.mapBones(t);if(t.indexOf("@")>-1)return this.genBones(t);n.indexOf(",")>-1?e=this.mapBones(n):n.indexOf("@")>-1?e=this.genBones(n):n&&e.push(this.genStructure(n))}return[this.genBone(t,e)]},genSkeleton:function(){var t=[];return this.isLoading?t.push(this.genStructure()):t.push(Object(Z["o"])(this)),this.transition?this.$createElement("transition",{props:{name:this.transition},on:{afterEnter:this.resetStyles,beforeEnter:this.onBeforeEnter,beforeLeave:this.onBeforeLeave,leaveCancelled:this.resetStyles}},t):t},mapBones:function(t){return t.replace(/\s/g,"").split(",").map(this.genStructure)},onBeforeEnter:function(t){this.resetStyles(t),this.isLoading&&(t._initialStyle={display:t.style.display,transition:t.style.transition},t.style.setProperty("transition","none","important"))},onBeforeLeave:function(t){t.style.setProperty("display","none","important")},resetStyles:function(t){t._initialStyle&&(t.style.display=t._initialStyle.display||"",t.style.transition=t._initialStyle.transition,delete t._initialStyle)}},render:function(t){return t("div",{staticClass:"v-skeleton-loader",attrs:this.attrs,on:this.$listeners,class:this.classes,style:this.isLoading?this.measurableStyles:void 0},[this.genSkeleton()])}}),et=(n("a9e3"),n("1681"),n("8654")),nt=Object(U["a"])(et["a"]),at=nt.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(B["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},et["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,n=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(n,e)+"px"}},genInput:function(){var t=et["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){et["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}}),it=n("3a2f"),st=Object($["a"])(C,a,i,!1,null,"fdd7c042",null);e["default"]=st.exports;O()(st,{VBtn:j["a"],VCheckbox:M,VContainer:R,VExpansionPanel:z["a"],VExpansionPanelContent:N["a"],VExpansionPanelHeader:A["a"],VExpansionPanels:G["a"],VIcon:W["a"],VRow:q["a"],VSimpleTable:J["a"],VSkeletonLoader:tt,VTextarea:at,VTooltip:it["a"]})},"6ca7":function(t,e,n){},"6ee1":function(t,e,n){"use strict";n("19dc")}}]);
//# sourceMappingURL=Pay.9d421195.js.map