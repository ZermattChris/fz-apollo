(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Pay"],{"0700":function(t,e,n){},"1f09":function(t,e,n){},"2e0e":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"stepPay"},[n("PageHeader",{attrs:{title:"4. Place Order"}},[t._v(" Using Stripe Elements to handle our online payments here. This is currently just a test environment. ")]),n("h4",{staticClass:"mb-0"},[t._v("Line item of flights + photos prices")]),n("v-skeleton-loader",{attrs:{type:"list-item-three-line"}}),n("div",{staticStyle:{"text-align":"center"},attrs:{id:"payment-button-box"}},[n("v-btn",{ref:"paymentButton",staticClass:"mt-4",attrs:{id:"payment-button",type:"submit"},on:{click:t.onOrderBtn}},[t._v(" Pay Now ")])],1)],1)},a=[],i=(n("d3b7"),n("96cf"),n("1da1")),s=n("36ad"),o="https://js.stripe.com/v3",l=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,c="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",d=function(){for(var t=document.querySelectorAll('script[src^="'.concat(o,'"]')),e=0;e<t.length;e++){var n=t[e];if(l.test(n.src))return n}return null},u=function(t){var e=t&&!t.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(o).concat(e);var r=document.head||document.body;if(!r)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return r.appendChild(n),n},p=function(t,e){t&&t._registerWrapper&&t._registerWrapper({name:"stripe-js",version:"1.12.1",startTime:e})},h=null,f=function(t){return null!==h||(h=new Promise((function(e,n){if("undefined"!==typeof window)if(window.Stripe&&t&&console.warn(c),window.Stripe)e(window.Stripe);else try{var r=d();r&&t?console.warn(c):r||(r=u(t)),r.addEventListener("load",(function(){window.Stripe?e(window.Stripe):n(new Error("Stripe.js not available"))})),r.addEventListener("error",(function(){n(new Error("Failed to load Stripe.js"))}))}catch(a){return void n(a)}else e(null)}))),h},m=function(t,e,n){if(null===t)return null;var r=t.apply(void 0,e);return p(r,n),r},v=Promise.resolve().then((function(){return f(null)})),g=!1;v["catch"]((function(t){g||console.warn(t)}));var y=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];g=!0;var r=Date.now();return v.then((function(t){return m(t,e,r)}))},b={name:"Step_Pay",components:{PageHeader:s["a"]},data:function(){return{stripe:null,hasCardErrors:!1,payEnabled:!1,payLoading:!1,message:" - - ",elements:void 0,card:void 0}},created:function(){},mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,y("pk_test_51IGntPLZ4REFUmfdjQL7LCGwclVtgzurrVvVhr5P8htOMohzdfAQke3p0Dd3zFsKcLuWtiFXK2x2RnXOCRQt1x8j00XqKkjnx2");case 2:t.stripe=e.sent;case 3:case"end":return e.stop()}}),e)})))()},computed:{},methods:{onOrderBtn:function(){fetch("https://gateway.flyzermatt.com/create-checkout",{method:"POST"}).then((function(t){return t.json()})).then((function(t){return this.stripe.redirectToCheckout({sessionId:t.id})})).then((function(t){t.error&&alert(t.error.message)})).catch((function(t){console.error("Error:",t)}))}},watch:{}},w=b,S=(n("d17d"),n("2877")),x=n("6544"),k=n.n(x),j=n("8336"),L=(n("a630"),n("c975"),n("d81d"),n("ac1f"),n("3ca3"),n("5319"),n("1276"),n("3835")),O=n("5530"),B=(n("1f09"),n("c995")),E=n("24b2"),_=n("7560"),P=n("58df"),C=n("80d2"),$=Object(P["a"])(B["a"],E["a"],_["a"]).extend({name:"VSkeletonLoader",props:{boilerplate:Boolean,loading:Boolean,tile:Boolean,transition:String,type:String,types:{type:Object,default:function(){return{}}}},computed:{attrs:function(){return this.isLoading?this.boilerplate?{}:Object(O["a"])({"aria-busy":!0,"aria-live":"polite",role:"alert"},this.$attrs):this.$attrs},classes:function(){return Object(O["a"])(Object(O["a"])({"v-skeleton-loader--boilerplate":this.boilerplate,"v-skeleton-loader--is-loading":this.isLoading,"v-skeleton-loader--tile":this.tile},this.themeClasses),this.elevationClasses)},isLoading:function(){return!("default"in this.$scopedSlots)||this.loading},rootTypes:function(){return Object(O["a"])({actions:"button@2",article:"heading, paragraph",avatar:"avatar",button:"button",card:"image, card-heading","card-avatar":"image, list-item-avatar","card-heading":"heading",chip:"chip","date-picker":"list-item, card-heading, divider, date-picker-options, date-picker-days, actions","date-picker-options":"text, avatar@2","date-picker-days":"avatar@28",heading:"heading",image:"image","list-item":"text","list-item-avatar":"avatar, text","list-item-two-line":"sentences","list-item-avatar-two-line":"avatar, sentences","list-item-three-line":"paragraph","list-item-avatar-three-line":"avatar, paragraph",paragraph:"text@3",sentences:"text@2",table:"table-heading, table-thead, table-tbody, table-tfoot","table-heading":"heading, text","table-thead":"heading@6","table-tbody":"table-row-divider@6","table-row-divider":"table-row, divider","table-row":"table-cell@6","table-cell":"text","table-tfoot":"text@2, avatar@2",text:"text"},this.types)}},methods:{genBone:function(t,e){return this.$createElement("div",{staticClass:"v-skeleton-loader__".concat(t," v-skeleton-loader__bone")},e)},genBones:function(t){var e=this,n=t.split("@"),r=Object(L["a"])(n,2),a=r[0],i=r[1],s=function(){return e.genStructure(a)};return Array.from({length:i}).map(s)},genStructure:function(t){var e=[];t=t||this.type||"";var n=this.rootTypes[t]||"";if(t===n);else{if(t.indexOf(",")>-1)return this.mapBones(t);if(t.indexOf("@")>-1)return this.genBones(t);n.indexOf(",")>-1?e=this.mapBones(n):n.indexOf("@")>-1?e=this.genBones(n):n&&e.push(this.genStructure(n))}return[this.genBone(t,e)]},genSkeleton:function(){var t=[];return this.isLoading?t.push(this.genStructure()):t.push(Object(C["o"])(this)),this.transition?this.$createElement("transition",{props:{name:this.transition},on:{afterEnter:this.resetStyles,beforeEnter:this.onBeforeEnter,beforeLeave:this.onBeforeLeave,leaveCancelled:this.resetStyles}},t):t},mapBones:function(t){return t.replace(/\s/g,"").split(",").map(this.genStructure)},onBeforeEnter:function(t){this.resetStyles(t),this.isLoading&&(t._initialStyle={display:t.style.display,transition:t.style.transition},t.style.setProperty("transition","none","important"))},onBeforeLeave:function(t){t.style.setProperty("display","none","important")},resetStyles:function(t){t._initialStyle&&(t.style.display=t._initialStyle.display||"",t.style.transition=t._initialStyle.transition,delete t._initialStyle)}},render:function(t){return t("div",{staticClass:"v-skeleton-loader",attrs:this.attrs,on:this.$listeners,class:this.classes,style:this.isLoading?this.measurableStyles:void 0},[this.genSkeleton()])}}),F=Object(S["a"])(w,r,a,!1,null,"3122c9e2",null);e["default"]=F.exports;k()(F,{VBtn:j["a"],VSkeletonLoader:$})},d17d:function(t,e,n){"use strict";n("0700")}}]);
//# sourceMappingURL=Pay.0f586ea4.js.map