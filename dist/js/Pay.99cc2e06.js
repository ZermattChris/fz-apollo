(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Pay"],{"0ea3":function(e,t,n){"use strict";n("6517")},"1e2d":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"stepThanks"},[n("PageHeader",{attrs:{title:"Payment Cancelled"}},[e._v(" Not sure if this page is needed yet, just a placeholder ")])],1)},r=[],i=n("36ad"),s={name:"Step_Cancelled",components:{PageHeader:i["a"]},data:function(){return{}},created:function(){},computed:{},methods:{}},o=s,l=(n("0ea3"),n("2877")),c=Object(l["a"])(o,a,r,!1,null,"42099bce",null);t["default"]=c.exports},"1f09":function(e,t,n){},"2e0e":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"stepPay"},[n("PageHeader",{attrs:{title:"4. Place Order"}},[e._v(" Using Stripe Elements to handle our online payments here. This is currently just a test environment. ")]),n("h4",{staticClass:"mb-0"},[e._v("Line item of flights + photos prices")]),n("v-skeleton-loader",{attrs:{type:"list-item-three-line"}}),n("div",{staticStyle:{"text-align":"center"},attrs:{id:"payment-button-box"}},[n("v-btn",{ref:"paymentButton",staticClass:"mt-4",attrs:{id:"payment-button",type:"submit"},on:{click:e.onOrderBtn}},[e._v(" Pay Now ")])],1)],1)},r=[],i=(n("d3b7"),n("96cf"),n("1da1")),s=n("36ad"),o="https://js.stripe.com/v3",l=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,c="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",d=function(){for(var e=document.querySelectorAll('script[src^="'.concat(o,'"]')),t=0;t<e.length;t++){var n=e[t];if(l.test(n.src))return n}return null},u=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(o).concat(t);var a=document.head||document.body;if(!a)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return a.appendChild(n),n},p=function(e,t){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"1.12.1",startTime:t})},h=null,f=function(e){return null!==h||(h=new Promise((function(t,n){if("undefined"!==typeof window)if(window.Stripe&&e&&console.warn(c),window.Stripe)t(window.Stripe);else try{var a=d();a&&e?console.warn(c):a||(a=u(e)),a.addEventListener("load",(function(){window.Stripe?t(window.Stripe):n(new Error("Stripe.js not available"))})),a.addEventListener("error",(function(){n(new Error("Failed to load Stripe.js"))}))}catch(r){return void n(r)}else t(null)}))),h},m=function(e,t,n){if(null===e)return null;var a=e.apply(void 0,t);return p(a,n),a},v=Promise.resolve().then((function(){return f(null)})),g=!1;v["catch"]((function(e){g||console.warn(e)}));var y=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];g=!0;var a=Date.now();return v.then((function(e){return m(e,t,a)}))},b={name:"Step_Pay",components:{PageHeader:s["a"]},data:function(){return{stripe:null,hasCardErrors:!1,payEnabled:!1,payLoading:!1,message:" - - ",elements:void 0,card:void 0}},created:function(){},mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,y("pk_test_51IGntPLZ4REFUmfdjQL7LCGwclVtgzurrVvVhr5P8htOMohzdfAQke3p0Dd3zFsKcLuWtiFXK2x2RnXOCRQt1x8j00XqKkjnx2");case 2:e.stripe=t.sent;case 3:case"end":return t.stop()}}),t)})))()},computed:{},methods:{onOrderBtn:function(){var e=this;fetch("https://gateway.flyzermatt.com/create-checkout",{method:"POST"}).then((function(e){return e.json()})).then((function(t){return e.stripe.redirectToCheckout({sessionId:t.id})})).then((function(e){e.error&&alert(e.error.message)})).catch((function(e){console.log("Getting an error back in the 'catch'"),console.error("Error:",e)}))}},watch:{}},w=b,S=(n("aaa9"),n("2877")),x=n("6544"),k=n.n(x),j=n("8336"),_=(n("a630"),n("c975"),n("d81d"),n("ac1f"),n("3ca3"),n("5319"),n("1276"),n("3835")),O=n("5530"),E=(n("1f09"),n("c995")),L=n("24b2"),B=n("7560"),P=n("58df"),C=n("80d2"),$=Object(P["a"])(E["a"],L["a"],B["a"]).extend({name:"VSkeletonLoader",props:{boilerplate:Boolean,loading:Boolean,tile:Boolean,transition:String,type:String,types:{type:Object,default:function(){return{}}}},computed:{attrs:function(){return this.isLoading?this.boilerplate?{}:Object(O["a"])({"aria-busy":!0,"aria-live":"polite",role:"alert"},this.$attrs):this.$attrs},classes:function(){return Object(O["a"])(Object(O["a"])({"v-skeleton-loader--boilerplate":this.boilerplate,"v-skeleton-loader--is-loading":this.isLoading,"v-skeleton-loader--tile":this.tile},this.themeClasses),this.elevationClasses)},isLoading:function(){return!("default"in this.$scopedSlots)||this.loading},rootTypes:function(){return Object(O["a"])({actions:"button@2",article:"heading, paragraph",avatar:"avatar",button:"button",card:"image, card-heading","card-avatar":"image, list-item-avatar","card-heading":"heading",chip:"chip","date-picker":"list-item, card-heading, divider, date-picker-options, date-picker-days, actions","date-picker-options":"text, avatar@2","date-picker-days":"avatar@28",heading:"heading",image:"image","list-item":"text","list-item-avatar":"avatar, text","list-item-two-line":"sentences","list-item-avatar-two-line":"avatar, sentences","list-item-three-line":"paragraph","list-item-avatar-three-line":"avatar, paragraph",paragraph:"text@3",sentences:"text@2",table:"table-heading, table-thead, table-tbody, table-tfoot","table-heading":"heading, text","table-thead":"heading@6","table-tbody":"table-row-divider@6","table-row-divider":"table-row, divider","table-row":"table-cell@6","table-cell":"text","table-tfoot":"text@2, avatar@2",text:"text"},this.types)}},methods:{genBone:function(e,t){return this.$createElement("div",{staticClass:"v-skeleton-loader__".concat(e," v-skeleton-loader__bone")},t)},genBones:function(e){var t=this,n=e.split("@"),a=Object(_["a"])(n,2),r=a[0],i=a[1],s=function(){return t.genStructure(r)};return Array.from({length:i}).map(s)},genStructure:function(e){var t=[];e=e||this.type||"";var n=this.rootTypes[e]||"";if(e===n);else{if(e.indexOf(",")>-1)return this.mapBones(e);if(e.indexOf("@")>-1)return this.genBones(e);n.indexOf(",")>-1?t=this.mapBones(n):n.indexOf("@")>-1?t=this.genBones(n):n&&t.push(this.genStructure(n))}return[this.genBone(e,t)]},genSkeleton:function(){var e=[];return this.isLoading?e.push(this.genStructure()):e.push(Object(C["o"])(this)),this.transition?this.$createElement("transition",{props:{name:this.transition},on:{afterEnter:this.resetStyles,beforeEnter:this.onBeforeEnter,beforeLeave:this.onBeforeLeave,leaveCancelled:this.resetStyles}},e):e},mapBones:function(e){return e.replace(/\s/g,"").split(",").map(this.genStructure)},onBeforeEnter:function(e){this.resetStyles(e),this.isLoading&&(e._initialStyle={display:e.style.display,transition:e.style.transition},e.style.setProperty("transition","none","important"))},onBeforeLeave:function(e){e.style.setProperty("display","none","important")},resetStyles:function(e){e._initialStyle&&(e.style.display=e._initialStyle.display||"",e.style.transition=e._initialStyle.transition,delete e._initialStyle)}},render:function(e){return e("div",{staticClass:"v-skeleton-loader",attrs:this.attrs,on:this.$listeners,class:this.classes,style:this.isLoading?this.measurableStyles:void 0},[this.genSkeleton()])}}),T=Object(S["a"])(w,a,r,!1,null,"a3b9fa78",null);t["default"]=T.exports;k()(T,{VBtn:j["a"],VSkeletonLoader:$})},6517:function(e,t,n){},aaa9:function(e,t,n){"use strict";n("ce6e")},ce6e:function(e,t,n){}}]);
//# sourceMappingURL=Pay.99cc2e06.js.map