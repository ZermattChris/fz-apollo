(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Info"],{"210b":function(e,i,n){},"2ffd":function(e,i,n){},7954:function(e,i,n){"use strict";var s=n("2ffd"),t=n.n(s);t.a},"842f":function(e,i,n){"use strict";n.r(i);var s=function(){var e=this,i=e.$createElement,n=e._self._c||i;return n("div",{staticClass:"stepInfo"},[n("PageHeader",{attrs:{title:e.timeListerHeaderStr}},[e._v(" [rough idea for text here] Explain why we need all of this info – safer flights, easier for us to give the best possible experience and to ease the scheduling process on our end... "),n("br")]),n("v-form",{ref:"infoForm",model:{value:e.contactValid,callback:function(i){e.contactValid=i},expression:"contactValid"}},[n("div",{staticClass:"mb-3 px-2 blue-grey lighten-5 rounded"},[e._v("Contact Details: "),n("v-row",[n("v-col",{staticClass:"pt-2 pb-0",attrs:{cols:"12",sm:"6"}},[n("v-text-field",{ref:"Phone",attrs:{label:"Phone","background-color":"white",rules:[e.rules.required,e.rules.phone],"hide-details":"auto",outlined:"",dense:"",type:"tel",name:"tel",placeholder:"(+Country Code) Phone Number",hint:"Example: +1 203 456-7890","persistent-hint":""},model:{value:e.contactPhone,callback:function(i){e.contactPhone=i},expression:"contactPhone"}})],1),n("v-col",{staticClass:"pt-2 pb-0 pt-xs-1",attrs:{cols:"12",sm:"6"}},[n("v-text-field",{ref:"Email",attrs:{label:"Email","background-color":"white",rules:[e.rules.required,e.rules.email],"hide-details":"auto",outlined:"",dense:"",type:"email",name:"email",placeholder:"you@mail.com"},model:{value:e.contactEmail,callback:function(i){e.contactEmail=i},expression:"contactEmail"}})],1)],1)],1)]),n("v-expansion-panels",{attrs:{focusable:"",inset:!e.mobile}},e._l(e.usersGroupSize,(function(i,s){return n("v-expansion-panel",{key:s,attrs:{disabled:0!==s||!e.contactValid}},[n("v-expansion-panel-header",[0===s?n("span",[e._v("Contact's Infos")]):e._e(),s>0?n("span",[e._v("Passenger "+e._s(s+1)+"'s Infos")]):e._e()]),n("v-expansion-panel-content",[e._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")])],1)})),1)],1)},t=[],o=n("36ad"),r=n("9029"),a={name:"Step_Info",components:{PageHeader:o["a"]},data:function(){return{mobile:r["isMobile"],contactValid:!1,rules:{required:function(e){return!!e||"Required."},counter:function(e){return e.length<=20||"Max 20 characters"},email:function(e){var i=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return i.test(e)||"Invalid Email..."},phone:function(e){var i=/^\+(?:[0-9] ?){6,14}[0-9]$/;return i.test(e)||"Invalid Phone Number..."}}}},created:function(){},computed:{contactPhone:{get:function(){return this.$store.state.contactPhone},set:function(e){return this.$store.dispatch("setContactPhone",e)}},contactEmail:{get:function(){return this.$store.state.contactEmail},set:function(e){return this.$store.dispatch("setContactEmail",e)}},userFlightDate:function(){return this.$store.state.flightDate},usersGroupSize:function(){return this.$store.state.nrPeople},timeListerHeaderStr:function(){return 1===this.$store.state.nrPeople?"3. Your Details":"3. Group Details"}},methods:{temp:function(){console.log(this.$refs.infoForm.validate())},setUserDate:function(e){return this.userTimeSlot=e,e}},watch:{}},l=a,u=(n("7954"),n("2877")),d=n("6544"),c=n.n(d),p=n("62ad"),h=n("5530"),f=n("4e82"),m=n("3206"),w=n("80d2"),b=n("58df"),v=Object(b["a"])(Object(f["a"])("expansionPanels","v-expansion-panel","v-expansion-panels"),Object(m["b"])("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data:function(){return{content:null,header:null,nextIsActive:!1}},computed:{classes:function(){return Object(h["a"])({"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled},this.groupClasses)},isDisabled:function(){return this.expansionPanels.disabled||this.disabled},isReadonly:function(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent:function(e){this.content=e},unregisterContent:function(){this.content=null},registerHeader:function(e){this.header=e,e.$on("click",this.onClick)},unregisterHeader:function(){this.header=null},onClick:function(e){e.detail&&this.header.$el.blur(),this.$emit("click",e),this.isReadonly||this.isDisabled||this.toggle()},toggle:function(){var e=this;this.content&&(this.content.isBooted=!0),this.$nextTick((function(){return e.$emit("change")}))}},render:function(e){return e("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},Object(w["o"])(this))}}),g=n("0789"),x=n("9d65"),E=n("a9ad"),O=Object(b["a"])(x["a"],E["a"],Object(m["a"])("expansionPanel","v-expansion-panel-content","v-expansion-panel")),y=O.extend().extend({name:"v-expansion-panel-content",computed:{isActive:function(){return this.expansionPanel.isActive}},created:function(){this.expansionPanel.registerContent(this)},beforeDestroy:function(){this.expansionPanel.unregisterContent()},render:function(e){var i=this;return e(g["a"],this.showLazyContent((function(){return[e("div",i.setBackgroundColor(i.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:i.isActive}]}),[e("div",{class:"v-expansion-panel-content__wrap"},Object(w["o"])(i))])]})))}}),A=n("9d26"),S=n("5607"),k=Object(b["a"])(E["a"],Object(m["a"])("expansionPanel","v-expansion-panel-header","v-expansion-panel")),T=k.extend().extend({name:"v-expansion-panel-header",directives:{ripple:S["a"]},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:function(){return{hasMousedown:!1}},computed:{classes:function(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive:function(){return this.expansionPanel.isActive},isDisabled:function(){return this.expansionPanel.isDisabled},isReadonly:function(){return this.expansionPanel.isReadonly}},created:function(){this.expansionPanel.registerHeader(this)},beforeDestroy:function(){this.expansionPanel.unregisterHeader()},methods:{onClick:function(e){this.$emit("click",e)},genIcon:function(){var e=Object(w["o"])(this,"actions")||[this.$createElement(A["a"],this.expandIcon)];return this.$createElement(g["d"],[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},e)])}},render:function(e){var i=this;return e("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button"},directives:[{name:"ripple",value:this.ripple}],on:Object(h["a"])(Object(h["a"])({},this.$listeners),{},{click:this.onClick,mousedown:function(){return i.hasMousedown=!0},mouseup:function(){return i.hasMousedown=!1}})}),[Object(w["o"])(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}}),_=(n("0481"),n("4069"),n("210b"),n("604c")),B=n("d9bd"),V=_["a"].extend({name:"v-expansion-panels",provide:function(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes:function(){return Object(h["a"])(Object(h["a"])({},_["a"].options.computed.classes.call(this)),{},{"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile})}},created:function(){this.$attrs.hasOwnProperty("expand")&&Object(B["a"])("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"===typeof this.value[0]&&Object(B["a"])(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem:function(e,i){var n=this.getValue(e,i),s=this.getValue(e,i+1);e.isActive=this.toggleMethod(n),e.nextIsActive=this.toggleMethod(s)}}}),C=(n("4de4"),n("7db0"),n("4160"),n("caad"),n("07ac"),n("2532"),n("159b"),n("7e2b")),P=Object(b["a"])(C["a"],Object(m["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var i=Object.values(e).includes(!0);this.$emit("input",!i)},deep:!0,immediate:!0}},methods:{watchInput:function(e){var i=this,n=function(e){return e.$watch("hasError",(function(n){i.$set(i.errorBag,e._uid,n)}),{immediate:!0})},s={_uid:e._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?s.shouldValidate=e.$watch("shouldValidate",(function(t){t&&(i.errorBag.hasOwnProperty(e._uid)||(s.valid=n(e)))})):s.valid=n(e),s},validate:function(){return 0===this.inputs.filter((function(e){return!e.validate(!0)})).length},reset:function(){this.inputs.forEach((function(e){return e.reset()})),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(e){return e.resetValidation()})),this.resetErrorBag()},register:function(e){this.inputs.push(e),this.watchers.push(this.watchInput(e))},unregister:function(e){var i=this.inputs.find((function(i){return i._uid===e._uid}));if(i){var n=this.watchers.find((function(e){return e._uid===i._uid}));n&&(n.valid(),n.shouldValidate()),this.watchers=this.watchers.filter((function(e){return e._uid!==i._uid})),this.inputs=this.inputs.filter((function(e){return e._uid!==i._uid})),this.$delete(this.errorBag,i._uid)}}},render:function(e){var i=this;return e("form",{staticClass:"v-form",attrs:Object(h["a"])({novalidate:!0},this.attrs$),on:{submit:function(e){return i.$emit("submit",e)}}},this.$slots.default)}}),R=n("0fd9"),N=n("8654"),I=Object(u["a"])(l,s,t,!1,null,"559a3450",null);i["default"]=I.exports;c()(I,{VCol:p["a"],VExpansionPanel:v,VExpansionPanelContent:y,VExpansionPanelHeader:T,VExpansionPanels:V,VForm:P,VRow:R["a"],VTextField:N["a"]})},9029:function(e,i){e.exports=function(e){var i={};function n(s){if(i[s])return i[s].exports;var t=i[s]={i:s,l:!1,exports:{}};return e[s].call(t.exports,t,t.exports,n),t.l=!0,t.exports}return n.m=e,n.c=i,n.d=function(e,i,s){n.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:s})},n.n=function(e){var i=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(i,"a",i),i},n.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},n.p="",n(n.s=0)}([function(e,i,n){"use strict";var s=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},t=n(1),o=n(3),r=o.BROWSER_TYPES,a=o.OS_TYPES,l=o.DEVICE_TYPES,u=o.defaultData,d=new t,c=d.getBrowser(),p=d.getDevice(),h=d.getEngine(),f=d.getOS(),m=d.getUA(),w=r.CHROME,b=r.CHROMIUM,v=r.IE,g=r.INTERNET_EXPLORER,x=r.OPERA,E=r.FIREFOX,O=r.SAFARI,y=r.EDGE,A=r.YANDEX,S=r.MOBILE_SAFARI,k=l.MOBILE,T=l.TABLET,_=l.SMART_TV,B=l.BROWSER,V=l.WEARABLE,C=l.CONSOLE,P=a.ANDROID,R=a.WINDOWS_PHONE,N=a.IOS,I=function(e){switch(e){case k:return{isMobile:!0};case T:return{isTablet:!0};case _:return{isSmartTV:!0};case C:return{isConsole:!0};case V:return{isWearable:!0};case B:return{isBrowser:!0};default:return u}},M=function(e,i,n,s,t){return{isBrowser:e,browserMajorVersion:i.major,browserFullVersion:i.version,browserName:i.name,engineName:n.name||!1,engineVersion:n.version,osName:s.name,osVersion:s.version,userAgent:t}},D=function(e,i,n,t){return s({},e,{vendor:i.vendor,model:i.model,os:n.name,osVersion:n.version,ua:t})},j=function(e,i,n,s){return{isSmartTV:e,engineName:i.name,engineVersion:i.version,osName:n.name,osVersion:n.version,userAgent:s}},$=function(e,i,n,s){return{isConsole:e,engineName:i.name,engineVersion:i.version,osName:n.name,osVersion:n.version,userAgent:s}},z=function(e,i,n,s){return{isWearable:e,engineName:i.name,engineVersion:i.version,osName:n.name,osVersion:n.version,userAgent:s}},L=function(){return p.type===k},F=function(){return p.type===T},W=function(){switch(p.type){case k:case T:return!0;default:return!1}},H=function(){return p.type===_},U=function(){return p.type===B},q=function(){return p.type===V},G=function(){return p.type===C},Y=function(){return f.name===P},X=function(){return f.name===R},Z=function(){return f.name===N},Q=function(){return c.name===w},J=function(){return c.name===E},K=function(){return c.name===b},ee=function(){return c.name===y},ie=function(){return c.name===A},ne=function(){return c.name===O||c.name===S},se=function(){return c.name===S},te=function(){return c.name===x},oe=function(){return c.name===g||c.name===v},re=function(){return c.major},ae=function(){return c.version},le=function(){return f.version?f.version:"none"},ue=function(){return f.name?f.name:"none"},de=function(){return c.name},ce=function(){return p.vendor?p.vendor:"none"},pe=function(){return p.model?p.model:"none"},he=function(){return h.name},fe=function(){return h.version},me=function(){return m},we=function(){return p.type},be=H(),ve=G(),ge=q(),xe=se(),Ee=K(),Oe=W(),ye=L(),Ae=F(),Se=U(),ke=Y(),Te=X(),_e=Z(),Be=Q(),Ve=J(),Ce=ne(),Pe=te(),Re=oe(),Ne=le(),Ie=ue(),Me=re(),De=ae(),je=de(),$e=ce(),ze=pe(),Le=he(),Fe=fe(),We=me(),He=ee(),Ue=ie(),qe=we(),Ge=I(p.type);function Ye(){var e=Ge.isBrowser,i=Ge.isMobile,n=Ge.isTablet,s=Ge.isSmartTV,t=Ge.isConsole,o=Ge.isWearable;return e?M(e,c,h,f,m):s?j(s,h,f,m):t?$(t,h,f,m):i||n?D(Ge,p,f,m):o?z(o,h,f,m):void 0}e.exports={deviceDetect:Ye,isSmartTV:be,isConsole:ve,isWearable:ge,isMobileSafari:xe,isChromium:Ee,isMobile:Oe,isMobileOnly:ye,isTablet:Ae,isBrowser:Se,isAndroid:ke,isWinPhone:Te,isIOS:_e,isChrome:Be,isFirefox:Ve,isSafari:Ce,isOpera:Pe,isIE:Re,osVersion:Ne,osName:Ie,fullBrowserVersion:Me,browserVersion:De,browserName:je,mobileVendor:$e,mobileModel:ze,engineName:Le,engineVersion:Fe,getUA:We,isEdge:He,isYandex:Ue,deviceType:qe}},function(e,i,n){var s;
/*!
 * UAParser.js v0.7.18
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2016 Faisal Salman <fyzlman@gmail.com>
 * Dual licensed under GPLv2 or MIT
 */(function(t,o){"use strict";var r="0.7.18",a="",l="?",u="function",d="undefined",c="object",p="string",h="major",f="model",m="name",w="type",b="vendor",v="version",g="architecture",x="console",E="mobile",O="tablet",y="smarttv",A="wearable",S="embedded",k={extend:function(e,i){var n={};for(var s in e)i[s]&&i[s].length%2===0?n[s]=i[s].concat(e[s]):n[s]=e[s];return n},has:function(e,i){return"string"===typeof e&&-1!==i.toLowerCase().indexOf(e.toLowerCase())},lowerize:function(e){return e.toLowerCase()},major:function(e){return typeof e===p?e.replace(/[^\d\.]/g,"").split(".")[0]:o},trim:function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},T={rgx:function(e,i){var n,s,t,r,a,l,d=0;while(d<i.length&&!a){var p=i[d],h=i[d+1];n=s=0;while(n<p.length&&!a)if(a=p[n++].exec(e),a)for(t=0;t<h.length;t++)l=a[++s],r=h[t],typeof r===c&&r.length>0?2==r.length?typeof r[1]==u?this[r[0]]=r[1].call(this,l):this[r[0]]=r[1]:3==r.length?typeof r[1]!==u||r[1].exec&&r[1].test?this[r[0]]=l?l.replace(r[1],r[2]):o:this[r[0]]=l?r[1].call(this,l,r[2]):o:4==r.length&&(this[r[0]]=l?r[3].call(this,l.replace(r[1],r[2])):o):this[r]=l||o;d+=2}},str:function(e,i){for(var n in i)if(typeof i[n]===c&&i[n].length>0){for(var s=0;s<i[n].length;s++)if(k.has(i[n][s],e))return n===l?o:n}else if(k.has(i[n],e))return n===l?o:n;return e}},_={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},B={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[m,v],[/(opios)[\/\s]+([\w\.]+)/i],[[m,"Opera Mini"],v],[/\s(opr)\/([\w\.]+)/i],[[m,"Opera"],v],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]*)/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark)\/([\w\.-]+)/i],[m,v],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[m,"IE"],v],[/(edge|edgios|edgea)\/((\d+)?[\w\.]+)/i],[[m,"Edge"],v],[/(yabrowser)\/([\w\.]+)/i],[[m,"Yandex"],v],[/(puffin)\/([\w\.]+)/i],[[m,"Puffin"],v],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[m,"UCBrowser"],v],[/(comodo_dragon)\/([\w\.]+)/i],[[m,/_/g," "],v],[/(micromessenger)\/([\w\.]+)/i],[[m,"WeChat"],v],[/(qqbrowserlite)\/([\w\.]+)/i],[m,v],[/(QQ)\/([\d\.]+)/i],[m,v],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[m,v],[/(BIDUBrowser)[\/\s]?([\w\.]+)/i],[m,v],[/(2345Explorer)[\/\s]?([\w\.]+)/i],[m,v],[/(MetaSr)[\/\s]?([\w\.]+)/i],[m],[/(LBBROWSER)/i],[m],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[v,[m,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[v,[m,"Facebook"]],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[v,[m,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[m,/(.+)/,"$1 WebView"],v],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[m,/(.+(?:g|us))(.+)/,"$1 $2"],v],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[v,[m,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[m,v],[/(dolfin)\/([\w\.]+)/i],[[m,"Dolphin"],v],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[m,"Chrome"],v],[/(coast)\/([\w\.]+)/i],[[m,"Opera Coast"],v],[/fxios\/([\w\.-]+)/i],[v,[m,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[v,[m,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[v,m],[/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[[m,"GSA"],v],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[m,[v,T.str,_.browser.oldsafari.version]],[/(konqueror)\/([\w\.]+)/i,/(webkit|khtml)\/([\w\.]+)/i],[m,v],[/(navigator|netscape)\/([\w\.-]+)/i],[[m,"Netscape"],v],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[m,v]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[g,"amd64"]],[/(ia32(?=;))/i],[[g,k.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[g,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[g,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[g,/ower/,"",k.lowerize]],[/(sun4\w)[;\)]/i],[[g,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[g,k.lowerize]]],device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],[f,b,[w,O]],[/applecoremedia\/[\w\.]+ \((ipad)/],[f,[b,"Apple"],[w,O]],[/(apple\s{0,1}tv)/i],[[f,"Apple TV"],[b,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[b,f,[w,O]],[/(kf[A-z]+)\sbuild\/.+silk\//i],[f,[b,"Amazon"],[w,O]],[/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],[[f,T.str,_.device.amazon.model],[b,"Amazon"],[w,E]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[f,b,[w,E]],[/\((ip[honed|\s\w*]+);/i],[f,[b,"Apple"],[w,E]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[b,f,[w,E]],[/\(bb10;\s(\w+)/i],[f,[b,"BlackBerry"],[w,E]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],[f,[b,"Asus"],[w,O]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[b,"Sony"],[f,"Xperia Tablet"],[w,O]],[/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i],[f,[b,"Sony"],[w,E]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[b,f,[w,x]],[/android.+;\s(shield)\sbuild/i],[f,[b,"Nvidia"],[w,x]],[/(playstation\s[34portablevi]+)/i],[f,[b,"Sony"],[w,x]],[/(sprint\s(\w+))/i],[[b,T.str,_.device.sprint.vendor],[f,T.str,_.device.sprint.model],[w,E]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],[b,f,[w,O]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[b,[f,/_/g," "],[w,E]],[/(nexus\s9)/i],[f,[b,"HTC"],[w,O]],[/d\/huawei([\w\s-]+)[;\)]/i,/(nexus\s6p)/i],[f,[b,"Huawei"],[w,E]],[/(microsoft);\s(lumia[\s\w]+)/i],[b,f,[w,E]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[f,[b,"Microsoft"],[w,x]],[/(kin\.[onetw]{3})/i],[[f,/\./g," "],[b,"Microsoft"],[w,E]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w*)/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[f,[b,"Motorola"],[w,E]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[f,[b,"Motorola"],[w,O]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[b,k.trim],[f,k.trim],[w,y]],[/hbbtv.+maple;(\d+)/i],[[f,/^/,"SmartTV"],[b,"Samsung"],[w,y]],[/\(dtv[\);].+(aquos)/i],[f,[b,"Sharp"],[w,y]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[b,"Samsung"],f,[w,O]],[/smart-tv.+(samsung)/i],[b,[w,y],f],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,/sec-((sgh\w+))/i],[[b,"Samsung"],f,[w,E]],[/sie-(\w*)/i],[f,[b,"Siemens"],[w,E]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]*)/i],[[b,"Nokia"],f,[w,E]],[/android\s3\.[\s\w;-]{10}(a\d{3})/i],[f,[b,"Acer"],[w,O]],[/android.+([vl]k\-?\d{3})\s+build/i],[f,[b,"LG"],[w,O]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[b,"LG"],f,[w,O]],[/(lg) netcast\.tv/i],[b,f,[w,y]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w*)/i,/android.+lg(\-?[\d\w]+)\s+build/i],[f,[b,"LG"],[w,E]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[f,[b,"Lenovo"],[w,O]],[/linux;.+((jolla));/i],[b,f,[w,E]],[/((pebble))app\/[\d\.]+\s/i],[b,f,[w,A]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[b,f,[w,E]],[/crkey/i],[[f,"Chromecast"],[b,"Google"]],[/android.+;\s(glass)\s\d/i],[f,[b,"Google"],[w,A]],[/android.+;\s(pixel c)\s/i],[f,[b,"Google"],[w,O]],[/android.+;\s(pixel xl|pixel)\s/i],[f,[b,"Google"],[w,E]],[/android.+;\s(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,/android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],[[f,/_/g," "],[b,"Xiaomi"],[w,E]],[/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],[[f,/_/g," "],[b,"Xiaomi"],[w,O]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[f,[b,"Meizu"],[w,O]],[/android.+a000(1)\s+build/i,/android.+oneplus\s(a\d{4})\s+build/i],[f,[b,"OnePlus"],[w,E]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[f,[b,"RCA"],[w,O]],[/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],[f,[b,"Dell"],[w,O]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[f,[b,"Verizon"],[w,O]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],[[b,"Barnes & Noble"],f,[w,O]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[f,[b,"NuVision"],[w,O]],[/android.+;\s(k88)\sbuild/i],[f,[b,"ZTE"],[w,O]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[f,[b,"Swiss"],[w,E]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[f,[b,"Swiss"],[w,O]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[f,[b,"Zeki"],[w,O]],[/(android).+[;\/]\s+([YR]\d{2})\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],[[b,"Dragon Touch"],f,[w,O]],[/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],[f,[b,"Insignia"],[w,O]],[/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],[f,[b,"NextBook"],[w,O]],[/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[b,"Voice"],f,[w,E]],[/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],[[b,"LvTel"],f,[w,E]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[f,[b,"Envizen"],[w,O]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],[b,f,[w,O]],[/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],[f,[b,"MachSpeed"],[w,O]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[b,f,[w,O]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[f,[b,"Rotor"],[w,O]],[/android.+(KS(.+))\s+build/i],[f,[b,"Amazon"],[w,O]],[/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],[b,f,[w,O]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[w,k.lowerize],b,f],[/(android[\w\.\s\-]{0,9});.+build/i],[f,[b,"Generic"]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[v,[m,"EdgeHTML"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[m,v],[/rv\:([\w\.]{1,9}).+(gecko)/i],[v,m]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[m,v],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[m,[v,T.str,_.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[m,"Windows"],[v,T.str,_.os.windows.version]],[/\((bb)(10);/i],[[m,"BlackBerry"],v],[/(blackberry)\w*\/?([\w\.]*)/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]*)/i,/linux;.+(sailfish);/i],[m,v],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],[[m,"Symbian"],v],[/\((series40);/i],[m],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[m,"Firefox OS"],v],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i],[m,v],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[m,"Chromium OS"],v],[/(sunos)\s?([\w\.\d]*)/i],[[m,"Solaris"],v],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],[m,v],[/(haiku)\s(\w+)/i],[m,v],[/cfnetwork\/.+darwin/i,/ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[v,/_/g,"."],[m,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)/i],[[m,"Mac OS"],[v,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,/(unix)\s?([\w\.]*)/i],[m,v]]},V=function(e,i){if("object"===typeof e&&(i=e,e=o),!(this instanceof V))return new V(e,i).getResult();var n=e||(t&&t.navigator&&t.navigator.userAgent?t.navigator.userAgent:a),s=i?k.extend(B,i):B;return this.getBrowser=function(){var e={name:o,version:o};return T.rgx.call(e,n,s.browser),e.major=k.major(e.version),e},this.getCPU=function(){var e={architecture:o};return T.rgx.call(e,n,s.cpu),e},this.getDevice=function(){var e={vendor:o,model:o,type:o};return T.rgx.call(e,n,s.device),e},this.getEngine=function(){var e={name:o,version:o};return T.rgx.call(e,n,s.engine),e},this.getOS=function(){var e={name:o,version:o};return T.rgx.call(e,n,s.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return n},this.setUA=function(e){return n=e,this},this};V.VERSION=r,V.BROWSER={NAME:m,MAJOR:h,VERSION:v},V.CPU={ARCHITECTURE:g},V.DEVICE={MODEL:f,VENDOR:b,TYPE:w,CONSOLE:x,MOBILE:E,SMARTTV:y,TABLET:O,WEARABLE:A,EMBEDDED:S},V.ENGINE={NAME:m,VERSION:v},V.OS={NAME:m,VERSION:v},typeof i!==d?(typeof e!==d&&e.exports&&(i=e.exports=V),i.UAParser=V):"function"===u&&n(2)?(s=function(){return V}.call(i,n,i,e),s===o||(e.exports=s)):t&&(t.UAParser=V);var C=t&&(t.jQuery||t.Zepto);if(typeof C!==d){var P=new V;C.ua=P.getResult(),C.ua.get=function(){return P.getUA()},C.ua.set=function(e){P.setUA(e);var i=P.getResult();for(var n in i)C.ua[n]=i[n]}}})("object"===typeof window?window:this)},function(e,i){(function(i){e.exports=i}).call(i,{})},function(e,i,n){"use strict";var s={MOBILE:"mobile",TABLET:"tablet",SMART_TV:"smarttv",CONSOLE:"console",WEARABLE:"wearable",BROWSER:void 0},t={CHROME:"Chrome",FIREFOX:"Firefox",OPERA:"Opera",YANDEX:"Yandex",SAFARI:"Safari",INTERNET_EXPLORER:"Internet Explorer",EDGE:"Edge",CHROMIUM:"Chromium",IE:"IE",MOBILE_SAFARI:"Mobile Safari"},o={IOS:"iOS",ANDROID:"Android",WINDOWS_PHONE:"Windows Phone"},r={isMobile:!1,isTablet:!1,isBrowser:!1,isSmartTV:!1,isConsole:!1,isWearable:!1};e.exports={BROWSER_TYPES:t,DEVICE_TYPES:s,OS_TYPES:o,defaultData:r}}])}}]);
//# sourceMappingURL=Info.1e37e6fd.js.map