(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Pay"],{"0985":function(t,e,n){},"1e2d":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"stepThanks"},[n("PageHeader",{attrs:{title:"Payment Cancelled"}},[t._v(" Payment didn't work for whatever reason. Give a message and probably just go back to the normal payment page... (let them try a different payment method) ")])],1)},a=[],s=n("36ad"),i={name:"Step_Cancelled",components:{PageHeader:s["a"]},data:function(){return{}},created:function(){},computed:{},methods:{}},o=i,c=(n("9473"),n("2877")),l=Object(c["a"])(o,r,a,!1,null,"8ba67874",null);e["default"]=l.exports},"1f4f":function(t,e,n){"use strict";n("a9e3");var r=n("5530"),a=(n("8b37"),n("80d2")),s=n("7560"),i=n("58df");e["a"]=Object(i["a"])(s["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return Object(r["a"])({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(a["f"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},"2e0e":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"stepPay"},[n("PageHeader",{attrs:{title:"4. Place Order"}},[t._v(" Using Stripe checkout to handle our online payments here. This is currently just a test environment. ")]),[n("v-simple-table",{staticClass:"elevation-1",attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",{staticClass:"text-left"},[t._v(" Qty ")]),n("th",{staticClass:"text-left"},[t._v(" Description ")]),n("th",{staticClass:"text-left"},[t._v(" Price in CHF ")])])]),n("tbody",[n("tr",[n("td",[t._v("2")]),n("td",[t._v(t._s(t.orderLineItems.name)+" Flight")]),n("td",[t._v(t._s(t.orderLineItems.price_CHF)+".-")])]),n("tr",[n("td",[t._v("2")]),n("td",[t._v("Photos & Videos")]),n("td",[t._v("40.-")])]),n("tr",[n("td",{staticClass:"grey--text text-caption",staticStyle:{"text-align":"center"},attrs:{colspan:"3"}},[t._v(" This row will display total prices ")])])])]},proxy:!0}])})],n("div",{staticClass:"mt-4",staticStyle:{"text-align":"center"},attrs:{id:"payment-button-box"}},[n("v-btn",{ref:"paymentButton",staticClass:"mt-4",attrs:{id:"payment-button",type:"submit",color:"warning darken-1"},on:{click:t.onOrderBtn}},[t._v(" Pay Now ")])],1),n("br"),n("br"),t._m(0),t._m(1)],2)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v(" Copy one of the numbers below to test payment on the Stripe page. "),n("br"),t._v(" "),n("br"),t._v(" Use any email, card date (in future), CVC and Name on card. ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[t._v("Visa standard card with success: 4000007560000009 "),n("br")]),n("li",[t._v("3D Secure with success: 4000002500003155")]),n("li",[t._v("Fail, insuffecient funds: 4000000000009995")]),n("li",[t._v("Fail, card has expired: 4000000000000069")])])}],s=(n("d3b7"),n("96cf"),n("1da1")),i=n("36ad"),o="https://js.stripe.com/v3",c=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,l="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",d=function(){for(var t=document.querySelectorAll('script[src^="'.concat(o,'"]')),e=0;e<t.length;e++){var n=t[e];if(c.test(n.src))return n}return null},u=function(t){var e=t&&!t.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(o).concat(e);var r=document.head||document.body;if(!r)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return r.appendChild(n),n},p=function(t,e){t&&t._registerWrapper&&t._registerWrapper({name:"stripe-js",version:"1.12.1",startTime:e})},h=null,f=function(t){return null!==h||(h=new Promise((function(e,n){if("undefined"!==typeof window)if(window.Stripe&&t&&console.warn(l),window.Stripe)e(window.Stripe);else try{var r=d();r&&t?console.warn(l):r||(r=u(t)),r.addEventListener("load",(function(){window.Stripe?e(window.Stripe):n(new Error("Stripe.js not available"))})),r.addEventListener("error",(function(){n(new Error("Failed to load Stripe.js"))}))}catch(a){return void n(a)}else e(null)}))),h},m=function(t,e,n){if(null===t)return null;var r=t.apply(void 0,e);return p(r,n),r},v=Promise.resolve().then((function(){return f(null)})),b=!1;v["catch"]((function(t){b||console.warn(t)}));var w=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];b=!0;var r=Date.now();return v.then((function(t){return m(t,e,r)}))},g={name:"Step_Pay",components:{PageHeader:i["a"]},data:function(){return{stripe:null,hasCardErrors:!1,payEnabled:!1,payLoading:!1,message:" - - ",elements:void 0,card:void 0}},created:function(){},mounted:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,w("pk_test_51IGntPLZ4REFUmfdjQL7LCGwclVtgzurrVvVhr5P8htOMohzdfAQke3p0Dd3zFsKcLuWtiFXK2x2RnXOCRQt1x8j00XqKkjnx2");case 2:t.stripe=e.sent;case 3:case"end":return e.stop()}}),e)})))()},computed:{orderLineItems:function(){return this.$store.getters.getFlightFromID(300)}},methods:{onOrderBtn:function(){var t=this;fetch("https://gateway.flyzermatt.com/create-checkout",{method:"POST"}).then((function(t){return t.json()})).then((function(e){return t.stripe.redirectToCheckout({sessionId:e.id})})).then((function(t){t.error&&alert(t.error.message)})).catch((function(t){console.log("Getting an error back in the 'catch'"),console.error("Error:",t)}))}},watch:{}},_=g,y=(n("56f1"),n("2877")),x=n("6544"),C=n.n(x),S=n("8336"),j=n("1f4f"),P=Object(y["a"])(_,r,a,!1,null,"68646b60",null);e["default"]=P.exports;C()(P,{VBtn:S["a"],VSimpleTable:j["a"]})},"56f1":function(t,e,n){"use strict";n("0985")},"8b37":function(t,e,n){},9473:function(t,e,n){"use strict";n("b321")},b321:function(t,e,n){}}]);
//# sourceMappingURL=Pay.1445f2cb.js.map