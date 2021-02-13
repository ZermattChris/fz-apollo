(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Pay"],{"1f09":function(t,e,n){},"2e0e":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"stepPay"},[n("PageHeader",{attrs:{title:"4. Place Order"}},[t._v(" Using Stripe Elements to handle our online payments here. This is currently just a test environment. ")]),n("h4",{staticClass:"mb-0"},[t._v("Line item of flights + photos prices")]),n("v-skeleton-loader",{attrs:{type:"list-item-three-line"}}),n("v-sheet",{staticClass:"mt-2 py-2 px-2 rounded",staticStyle:{position:"relative","text-align":"center","background-color":"#f7f7f7",border:"1px rgb(220,220,220) solid"},attrs:{id:"payment-inputs-box",elevation:"0"}},[n("label",{staticStyle:{"font-size":"0.7em",position:"absolute",top:"-15px",left:"0px"},attrs:{for:"card"}},[t._v(" Credit or Debit card ")]),n("div",{ref:"card",staticStyle:{width:"98%"},attrs:{id:"card"}}),n("div",{ref:"card-errors",attrs:{id:"card-errors"}})]),n("p",{staticClass:"font-weight-thin",staticStyle:{"font-size":"0.6em","text-align":"right","padding-right":"5px"}},[t._v("Payments by Stripe")]),n("div",{staticStyle:{"text-align":"center"},attrs:{id:"payment-button-box"}},[n("v-btn",{ref:"payment-button",staticClass:"mt-0",attrs:{id:"payment-button",type:"submit",disabled:t.hasCardErrors},on:{click:t.placeOrder}},[t._v(" Pay ")])],1),n("div",{staticClass:"mt-4 warning--text",staticStyle:{"font-size":"0.6em"}},[t._v(" "+t._s(t.message)+" ")])],1)},r=[],i=(n("96cf"),n("1da1")),s=n("36ad"),o="https://js.stripe.com/v3",l=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,c="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",d=function(){for(var t=document.querySelectorAll('script[src^="'.concat(o,'"]')),e=0;e<t.length;e++){var n=t[e];if(l.test(n.src))return n}return null},u=function(t){var e=t&&!t.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(o).concat(e);var a=document.head||document.body;if(!a)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return a.appendChild(n),n},p=function(t,e){t&&t._registerWrapper&&t._registerWrapper({name:"stripe-js",version:"1.12.1",startTime:e})},h=null,f=function(t){return null!==h||(h=new Promise((function(e,n){if("undefined"!==typeof window)if(window.Stripe&&t&&console.warn(c),window.Stripe)e(window.Stripe);else try{var a=d();a&&t?console.warn(c):a||(a=u(t)),a.addEventListener("load",(function(){window.Stripe?e(window.Stripe):n(new Error("Stripe.js not available"))})),a.addEventListener("error",(function(){n(new Error("Failed to load Stripe.js"))}))}catch(r){return void n(r)}else e(null)}))),h},m=function(t,e,n){if(null===t)return null;var a=t.apply(void 0,e);return p(a,n),a},v=Promise.resolve().then((function(){return f(null)})),g=!1;v["catch"]((function(t){g||console.warn(t)}));var b=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];g=!0;var a=Date.now();return v.then((function(t){return m(t,e,a)}))},y={style:{base:{iconColor:"#464646",color:"black",backgroundColor:"#f7f7f7",fontWeight:"500",fontFamily:"Roboto, Open Sans, Segoe UI, sans-serif",fontSize:"14px",fontSmoothing:"antialiased",":-webkit-autofill":{color:"#fce883"},"::placeholder":{color:"#43097d"}},invalid:{iconColor:"maroon",color:"maroon"}},iconStyle:"solid"},S={name:"Step_Pay",components:{PageHeader:s["a"]},data:function(){return{stripe:null,hasCardErrors:!1,message:" - - ",elements:void 0,card:void 0}},created:function(){},mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,b("pk_test_51IGntPLZ4REFUmfdjQL7LCGwclVtgzurrVvVhr5P8htOMohzdfAQke3p0Dd3zFsKcLuWtiFXK2x2RnXOCRQt1x8j00XqKkjnx2");case 2:t.stripe=e.sent,t.createAndMountFormElements();case 4:case"end":return e.stop()}}),e)})))()},computed:{myLocale:function(){return this.$i18n.locale}},methods:{createAndMountFormElements:function(){this.elements=this.stripe.elements({locale:this.myLocale}),this.card=this.elements.create("card",y),this.card.mount(this.$refs.card)},placeOrder:function(){var t=this;this.stripe.createToken(this.card).then((function(e){if(e.error)return t.message=e.error.message,t.hasCardErrors=!0,void t.$forceUpdate();t.message="Created Token: "+e.token,console.log(e.token)}))}},watch:{myLocale:function(){this.createAndMountFormElements()}}},w=S,x=(n("7fb2"),n("2877")),k=n("6544"),_=n.n(k),C=n("8336"),E=n("8dd9"),L=(n("a630"),n("c975"),n("d81d"),n("ac1f"),n("3ca3"),n("5319"),n("1276"),n("3835")),j=n("5530"),O=(n("1f09"),n("c995")),B=n("24b2"),P=n("7560"),$=n("58df"),F=n("80d2"),z=Object($["a"])(O["a"],B["a"],P["a"]).extend({name:"VSkeletonLoader",props:{boilerplate:Boolean,loading:Boolean,tile:Boolean,transition:String,type:String,types:{type:Object,default:function(){return{}}}},computed:{attrs:function(){return this.isLoading?this.boilerplate?{}:Object(j["a"])({"aria-busy":!0,"aria-live":"polite",role:"alert"},this.$attrs):this.$attrs},classes:function(){return Object(j["a"])(Object(j["a"])({"v-skeleton-loader--boilerplate":this.boilerplate,"v-skeleton-loader--is-loading":this.isLoading,"v-skeleton-loader--tile":this.tile},this.themeClasses),this.elevationClasses)},isLoading:function(){return!("default"in this.$scopedSlots)||this.loading},rootTypes:function(){return Object(j["a"])({actions:"button@2",article:"heading, paragraph",avatar:"avatar",button:"button",card:"image, card-heading","card-avatar":"image, list-item-avatar","card-heading":"heading",chip:"chip","date-picker":"list-item, card-heading, divider, date-picker-options, date-picker-days, actions","date-picker-options":"text, avatar@2","date-picker-days":"avatar@28",heading:"heading",image:"image","list-item":"text","list-item-avatar":"avatar, text","list-item-two-line":"sentences","list-item-avatar-two-line":"avatar, sentences","list-item-three-line":"paragraph","list-item-avatar-three-line":"avatar, paragraph",paragraph:"text@3",sentences:"text@2",table:"table-heading, table-thead, table-tbody, table-tfoot","table-heading":"heading, text","table-thead":"heading@6","table-tbody":"table-row-divider@6","table-row-divider":"table-row, divider","table-row":"table-cell@6","table-cell":"text","table-tfoot":"text@2, avatar@2",text:"text"},this.types)}},methods:{genBone:function(t,e){return this.$createElement("div",{staticClass:"v-skeleton-loader__".concat(t," v-skeleton-loader__bone")},e)},genBones:function(t){var e=this,n=t.split("@"),a=Object(L["a"])(n,2),r=a[0],i=a[1],s=function(){return e.genStructure(r)};return Array.from({length:i}).map(s)},genStructure:function(t){var e=[];t=t||this.type||"";var n=this.rootTypes[t]||"";if(t===n);else{if(t.indexOf(",")>-1)return this.mapBones(t);if(t.indexOf("@")>-1)return this.genBones(t);n.indexOf(",")>-1?e=this.mapBones(n):n.indexOf("@")>-1?e=this.genBones(n):n&&e.push(this.genStructure(n))}return[this.genBone(t,e)]},genSkeleton:function(){var t=[];return this.isLoading?t.push(this.genStructure()):t.push(Object(F["o"])(this)),this.transition?this.$createElement("transition",{props:{name:this.transition},on:{afterEnter:this.resetStyles,beforeEnter:this.onBeforeEnter,beforeLeave:this.onBeforeLeave,leaveCancelled:this.resetStyles}},t):t},mapBones:function(t){return t.replace(/\s/g,"").split(",").map(this.genStructure)},onBeforeEnter:function(t){this.resetStyles(t),this.isLoading&&(t._initialStyle={display:t.style.display,transition:t.style.transition},t.style.setProperty("transition","none","important"))},onBeforeLeave:function(t){t.style.setProperty("display","none","important")},resetStyles:function(t){t._initialStyle&&(t.style.display=t._initialStyle.display||"",t.style.transition=t._initialStyle.transition,delete t._initialStyle)}},render:function(t){return t("div",{staticClass:"v-skeleton-loader",attrs:this.attrs,on:this.$listeners,class:this.classes,style:this.isLoading?this.measurableStyles:void 0},[this.genSkeleton()])}}),A=Object(x["a"])(w,a,r,!1,null,"4382345a",null);e["default"]=A.exports;_()(A,{VBtn:C["a"],VSheet:E["a"],VSkeletonLoader:z})},"7aeb":function(t,e,n){},"7fb2":function(t,e,n){"use strict";n("7aeb")}}]);
//# sourceMappingURL=Pay.67c9a139.js.map