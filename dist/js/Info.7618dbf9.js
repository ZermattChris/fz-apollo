(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Info"],{"210b":function(e,i,n){},"842f":function(e,i,n){"use strict";n.r(i);var s=function(){var e=this,i=e.$createElement,n=e._self._c||i;return n("div",{staticClass:"stepInfo"},[n("PageHeader",{attrs:{title:e.timeListerHeaderStr}},[e._v(" [rough idea for text here] Explain why we need all of this info – safer flights, easier for us to give the best possible experience and to ease the scheduling process on our end... "),n("br")]),n("div",{staticClass:"mb-3 px-2 blue-grey lighten-5 rounded"},[e._v("Group Contact Infos: "),n("v-row",[n("v-col",{staticClass:"pt-2 pb-0",attrs:{cols:"12",sm:"6"}},[n("v-text-field",{attrs:{label:"Phone","background-color":"white",rules:[e.rules.required,e.rules.phone],"hide-details":"auto",outlined:"",dense:"",type:"tel",name:"tel",placeholder:"(+Country Code) (Phone Number)",hint:"Example: +1 203 456-7890","persistent-hint":""}})],1),n("v-col",{staticClass:"pt-2 pb-0 pt-xs-1 mb-6",attrs:{cols:"12",sm:"6"}},[n("v-text-field",{attrs:{label:"Email","background-color":"white",rules:[e.rules.required,e.rules.email],"hide-details":"auto",outlined:"",dense:"",type:"email",name:"email",placeholder:"mail@you.com"}})],1)],1)],1),n("v-expansion-panels",{attrs:{focusable:"",inset:!e.mobile}},e._l(e.usersGroupSize,(function(i,s){return n("v-expansion-panel",{key:s,attrs:{disabled:""}},[n("v-expansion-panel-header",[e._v("Passenger "+e._s(s+1))]),n("v-expansion-panel-content",[e._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")])],1)})),1)],1)},o=[],t=n("36ad"),r=n("9029"),a={name:"Step_Info",components:{PageHeader:t["a"]},data:function(){return{mobile:r["isMobile"],rules:{required:function(e){return!!e||"Required."},counter:function(e){return e.length<=20||"Max 20 characters"},email:function(e){var i=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return i.test(e)||"Invalid e-mail..."},phone:function(e){var i=/^\+(?:[0-9] ?){6,14}[0-9]$/;return i.test(e)||"Invalid Number..."}}}},created:function(){},computed:{userFlightDate:function(){return this.$store.state.flightDate},usersGroupSize:function(){return this.$store.state.nrPeople},timeListerHeaderStr:function(){return 1===this.$store.state.nrPeople?"3. Your Details":"3. Group Details"}},methods:{setUserDate:function(e){return this.userTimeSlot=e,e}}},l=a,d=(n("b12a"),n("2877")),u=n("6544"),c=n.n(u),p=n("62ad"),m=n("5530"),w=n("4e82"),h=n("3206"),b=n("80d2"),f=n("58df"),v=Object(f["a"])(Object(w["a"])("expansionPanels","v-expansion-panel","v-expansion-panels"),Object(h["b"])("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data:function(){return{content:null,header:null,nextIsActive:!1}},computed:{classes:function(){return Object(m["a"])({"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled},this.groupClasses)},isDisabled:function(){return this.expansionPanels.disabled||this.disabled},isReadonly:function(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent:function(e){this.content=e},unregisterContent:function(){this.content=null},registerHeader:function(e){this.header=e,e.$on("click",this.onClick)},unregisterHeader:function(){this.header=null},onClick:function(e){e.detail&&this.header.$el.blur(),this.$emit("click",e),this.isReadonly||this.isDisabled||this.toggle()},toggle:function(){var e=this;this.content&&(this.content.isBooted=!0),this.$nextTick((function(){return e.$emit("change")}))}},render:function(e){return e("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},Object(b["o"])(this))}}),g=n("0789"),x=n("9d65"),E=n("a9ad"),O=Object(f["a"])(x["a"],E["a"],Object(h["a"])("expansionPanel","v-expansion-panel-content","v-expansion-panel")),y=O.extend().extend({name:"v-expansion-panel-content",computed:{isActive:function(){return this.expansionPanel.isActive}},created:function(){this.expansionPanel.registerContent(this)},beforeDestroy:function(){this.expansionPanel.unregisterContent()},render:function(e){var i=this;return e(g["a"],this.showLazyContent((function(){return[e("div",i.setBackgroundColor(i.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:i.isActive}]}),[e("div",{class:"v-expansion-panel-content__wrap"},Object(b["o"])(i))])]})))}}),A=n("9d26"),S=n("5607"),k=Object(f["a"])(E["a"],Object(h["a"])("expansionPanel","v-expansion-panel-header","v-expansion-panel")),T=k.extend().extend({name:"v-expansion-panel-header",directives:{ripple:S["a"]},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:function(){return{hasMousedown:!1}},computed:{classes:function(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive:function(){return this.expansionPanel.isActive},isDisabled:function(){return this.expansionPanel.isDisabled},isReadonly:function(){return this.expansionPanel.isReadonly}},created:function(){this.expansionPanel.registerHeader(this)},beforeDestroy:function(){this.expansionPanel.unregisterHeader()},methods:{onClick:function(e){this.$emit("click",e)},genIcon:function(){var e=Object(b["o"])(this,"actions")||[this.$createElement(A["a"],this.expandIcon)];return this.$createElement(g["d"],[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},e)])}},render:function(e){var i=this;return e("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button"},directives:[{name:"ripple",value:this.ripple}],on:Object(m["a"])(Object(m["a"])({},this.$listeners),{},{click:this.onClick,mousedown:function(){return i.hasMousedown=!0},mouseup:function(){return i.hasMousedown=!1}})}),[Object(b["o"])(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}}),R=(n("0481"),n("4069"),n("210b"),n("604c")),N=n("d9bd"),C=R["a"].extend({name:"v-expansion-panels",provide:function(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes:function(){return Object(m["a"])(Object(m["a"])({},R["a"].options.computed.classes.call(this)),{},{"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile})}},created:function(){this.$attrs.hasOwnProperty("expand")&&Object(N["a"])("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"===typeof this.value[0]&&Object(N["a"])(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem:function(e,i){var n=this.getValue(e,i),s=this.getValue(e,i+1);e.isActive=this.toggleMethod(n),e.nextIsActive=this.toggleMethod(s)}}}),B=n("0fd9"),I=n("8654"),_=Object(d["a"])(l,s,o,!1,null,"01328c93",null);i["default"]=_.exports;c()(_,{VCol:p["a"],VExpansionPanel:v,VExpansionPanelContent:y,VExpansionPanelHeader:T,VExpansionPanels:C,VRow:B["a"],VTextField:I["a"]})},9029:function(e,i){e.exports=function(e){var i={};function n(s){if(i[s])return i[s].exports;var o=i[s]={i:s,l:!1,exports:{}};return e[s].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=i,n.d=function(e,i,s){n.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:s})},n.n=function(e){var i=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(i,"a",i),i},n.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},n.p="",n(n.s=0)}([function(e,i,n){"use strict";var s=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},o=n(1),t=n(3),r=t.BROWSER_TYPES,a=t.OS_TYPES,l=t.DEVICE_TYPES,d=t.defaultData,u=new o,c=u.getBrowser(),p=u.getDevice(),m=u.getEngine(),w=u.getOS(),h=u.getUA(),b=r.CHROME,f=r.CHROMIUM,v=r.IE,g=r.INTERNET_EXPLORER,x=r.OPERA,E=r.FIREFOX,O=r.SAFARI,y=r.EDGE,A=r.YANDEX,S=r.MOBILE_SAFARI,k=l.MOBILE,T=l.TABLET,R=l.SMART_TV,N=l.BROWSER,C=l.WEARABLE,B=l.CONSOLE,I=a.ANDROID,_=a.WINDOWS_PHONE,M=a.IOS,P=function(e){switch(e){case k:return{isMobile:!0};case T:return{isTablet:!0};case R:return{isSmartTV:!0};case B:return{isConsole:!0};case C:return{isWearable:!0};case N:return{isBrowser:!0};default:return d}},V=function(e,i,n,s,o){return{isBrowser:e,browserMajorVersion:i.major,browserFullVersion:i.version,browserName:i.name,engineName:n.name||!1,engineVersion:n.version,osName:s.name,osVersion:s.version,userAgent:o}},D=function(e,i,n,o){return s({},e,{vendor:i.vendor,model:i.model,os:n.name,osVersion:n.version,ua:o})},j=function(e,i,n,s){return{isSmartTV:e,engineName:i.name,engineVersion:i.version,osName:n.name,osVersion:n.version,userAgent:s}},L=function(e,i,n,s){return{isConsole:e,engineName:i.name,engineVersion:i.version,osName:n.name,osVersion:n.version,userAgent:s}},z=function(e,i,n,s){return{isWearable:e,engineName:i.name,engineVersion:i.version,osName:n.name,osVersion:n.version,userAgent:s}},F=function(){return p.type===k},W=function(){return p.type===T},$=function(){switch(p.type){case k:case T:return!0;default:return!1}},H=function(){return p.type===R},U=function(){return p.type===N},G=function(){return p.type===C},q=function(){return p.type===B},Y=function(){return w.name===I},X=function(){return w.name===_},Z=function(){return w.name===M},Q=function(){return c.name===b},J=function(){return c.name===E},K=function(){return c.name===f},ee=function(){return c.name===y},ie=function(){return c.name===A},ne=function(){return c.name===O||c.name===S},se=function(){return c.name===S},oe=function(){return c.name===x},te=function(){return c.name===g||c.name===v},re=function(){return c.major},ae=function(){return c.version},le=function(){return w.version?w.version:"none"},de=function(){return w.name?w.name:"none"},ue=function(){return c.name},ce=function(){return p.vendor?p.vendor:"none"},pe=function(){return p.model?p.model:"none"},me=function(){return m.name},we=function(){return m.version},he=function(){return h},be=function(){return p.type},fe=H(),ve=q(),ge=G(),xe=se(),Ee=K(),Oe=$(),ye=F(),Ae=W(),Se=U(),ke=Y(),Te=X(),Re=Z(),Ne=Q(),Ce=J(),Be=ne(),Ie=oe(),_e=te(),Me=le(),Pe=de(),Ve=re(),De=ae(),je=ue(),Le=ce(),ze=pe(),Fe=me(),We=we(),$e=he(),He=ee(),Ue=ie(),Ge=be(),qe=P(p.type);function Ye(){var e=qe.isBrowser,i=qe.isMobile,n=qe.isTablet,s=qe.isSmartTV,o=qe.isConsole,t=qe.isWearable;return e?V(e,c,m,w,h):s?j(s,m,w,h):o?L(o,m,w,h):i||n?D(qe,p,w,h):t?z(t,m,w,h):void 0}e.exports={deviceDetect:Ye,isSmartTV:fe,isConsole:ve,isWearable:ge,isMobileSafari:xe,isChromium:Ee,isMobile:Oe,isMobileOnly:ye,isTablet:Ae,isBrowser:Se,isAndroid:ke,isWinPhone:Te,isIOS:Re,isChrome:Ne,isFirefox:Ce,isSafari:Be,isOpera:Ie,isIE:_e,osVersion:Me,osName:Pe,fullBrowserVersion:Ve,browserVersion:De,browserName:je,mobileVendor:Le,mobileModel:ze,engineName:Fe,engineVersion:We,getUA:$e,isEdge:He,isYandex:Ue,deviceType:Ge}},function(e,i,n){var s;
/*!
 * UAParser.js v0.7.18
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2016 Faisal Salman <fyzlman@gmail.com>
 * Dual licensed under GPLv2 or MIT
 */(function(o,t){"use strict";var r="0.7.18",a="",l="?",d="function",u="undefined",c="object",p="string",m="major",w="model",h="name",b="type",f="vendor",v="version",g="architecture",x="console",E="mobile",O="tablet",y="smarttv",A="wearable",S="embedded",k={extend:function(e,i){var n={};for(var s in e)i[s]&&i[s].length%2===0?n[s]=i[s].concat(e[s]):n[s]=e[s];return n},has:function(e,i){return"string"===typeof e&&-1!==i.toLowerCase().indexOf(e.toLowerCase())},lowerize:function(e){return e.toLowerCase()},major:function(e){return typeof e===p?e.replace(/[^\d\.]/g,"").split(".")[0]:t},trim:function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},T={rgx:function(e,i){var n,s,o,r,a,l,u=0;while(u<i.length&&!a){var p=i[u],m=i[u+1];n=s=0;while(n<p.length&&!a)if(a=p[n++].exec(e),a)for(o=0;o<m.length;o++)l=a[++s],r=m[o],typeof r===c&&r.length>0?2==r.length?typeof r[1]==d?this[r[0]]=r[1].call(this,l):this[r[0]]=r[1]:3==r.length?typeof r[1]!==d||r[1].exec&&r[1].test?this[r[0]]=l?l.replace(r[1],r[2]):t:this[r[0]]=l?r[1].call(this,l,r[2]):t:4==r.length&&(this[r[0]]=l?r[3].call(this,l.replace(r[1],r[2])):t):this[r]=l||t;u+=2}},str:function(e,i){for(var n in i)if(typeof i[n]===c&&i[n].length>0){for(var s=0;s<i[n].length;s++)if(k.has(i[n][s],e))return n===l?t:n}else if(k.has(i[n],e))return n===l?t:n;return e}},R={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},N={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[h,v],[/(opios)[\/\s]+([\w\.]+)/i],[[h,"Opera Mini"],v],[/\s(opr)\/([\w\.]+)/i],[[h,"Opera"],v],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]*)/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark)\/([\w\.-]+)/i],[h,v],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[h,"IE"],v],[/(edge|edgios|edgea)\/((\d+)?[\w\.]+)/i],[[h,"Edge"],v],[/(yabrowser)\/([\w\.]+)/i],[[h,"Yandex"],v],[/(puffin)\/([\w\.]+)/i],[[h,"Puffin"],v],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[h,"UCBrowser"],v],[/(comodo_dragon)\/([\w\.]+)/i],[[h,/_/g," "],v],[/(micromessenger)\/([\w\.]+)/i],[[h,"WeChat"],v],[/(qqbrowserlite)\/([\w\.]+)/i],[h,v],[/(QQ)\/([\d\.]+)/i],[h,v],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[h,v],[/(BIDUBrowser)[\/\s]?([\w\.]+)/i],[h,v],[/(2345Explorer)[\/\s]?([\w\.]+)/i],[h,v],[/(MetaSr)[\/\s]?([\w\.]+)/i],[h],[/(LBBROWSER)/i],[h],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[v,[h,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[v,[h,"Facebook"]],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[v,[h,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[h,/(.+)/,"$1 WebView"],v],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[h,/(.+(?:g|us))(.+)/,"$1 $2"],v],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[v,[h,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[h,v],[/(dolfin)\/([\w\.]+)/i],[[h,"Dolphin"],v],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[h,"Chrome"],v],[/(coast)\/([\w\.]+)/i],[[h,"Opera Coast"],v],[/fxios\/([\w\.-]+)/i],[v,[h,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[v,[h,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[v,h],[/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[[h,"GSA"],v],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[h,[v,T.str,R.browser.oldsafari.version]],[/(konqueror)\/([\w\.]+)/i,/(webkit|khtml)\/([\w\.]+)/i],[h,v],[/(navigator|netscape)\/([\w\.-]+)/i],[[h,"Netscape"],v],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[h,v]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[g,"amd64"]],[/(ia32(?=;))/i],[[g,k.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[g,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[g,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[g,/ower/,"",k.lowerize]],[/(sun4\w)[;\)]/i],[[g,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[g,k.lowerize]]],device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],[w,f,[b,O]],[/applecoremedia\/[\w\.]+ \((ipad)/],[w,[f,"Apple"],[b,O]],[/(apple\s{0,1}tv)/i],[[w,"Apple TV"],[f,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[f,w,[b,O]],[/(kf[A-z]+)\sbuild\/.+silk\//i],[w,[f,"Amazon"],[b,O]],[/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],[[w,T.str,R.device.amazon.model],[f,"Amazon"],[b,E]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[w,f,[b,E]],[/\((ip[honed|\s\w*]+);/i],[w,[f,"Apple"],[b,E]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[f,w,[b,E]],[/\(bb10;\s(\w+)/i],[w,[f,"BlackBerry"],[b,E]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],[w,[f,"Asus"],[b,O]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[f,"Sony"],[w,"Xperia Tablet"],[b,O]],[/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i],[w,[f,"Sony"],[b,E]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[f,w,[b,x]],[/android.+;\s(shield)\sbuild/i],[w,[f,"Nvidia"],[b,x]],[/(playstation\s[34portablevi]+)/i],[w,[f,"Sony"],[b,x]],[/(sprint\s(\w+))/i],[[f,T.str,R.device.sprint.vendor],[w,T.str,R.device.sprint.model],[b,E]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],[f,w,[b,O]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[f,[w,/_/g," "],[b,E]],[/(nexus\s9)/i],[w,[f,"HTC"],[b,O]],[/d\/huawei([\w\s-]+)[;\)]/i,/(nexus\s6p)/i],[w,[f,"Huawei"],[b,E]],[/(microsoft);\s(lumia[\s\w]+)/i],[f,w,[b,E]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[w,[f,"Microsoft"],[b,x]],[/(kin\.[onetw]{3})/i],[[w,/\./g," "],[f,"Microsoft"],[b,E]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w*)/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[w,[f,"Motorola"],[b,E]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[w,[f,"Motorola"],[b,O]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[f,k.trim],[w,k.trim],[b,y]],[/hbbtv.+maple;(\d+)/i],[[w,/^/,"SmartTV"],[f,"Samsung"],[b,y]],[/\(dtv[\);].+(aquos)/i],[w,[f,"Sharp"],[b,y]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[f,"Samsung"],w,[b,O]],[/smart-tv.+(samsung)/i],[f,[b,y],w],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,/sec-((sgh\w+))/i],[[f,"Samsung"],w,[b,E]],[/sie-(\w*)/i],[w,[f,"Siemens"],[b,E]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]*)/i],[[f,"Nokia"],w,[b,E]],[/android\s3\.[\s\w;-]{10}(a\d{3})/i],[w,[f,"Acer"],[b,O]],[/android.+([vl]k\-?\d{3})\s+build/i],[w,[f,"LG"],[b,O]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[f,"LG"],w,[b,O]],[/(lg) netcast\.tv/i],[f,w,[b,y]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w*)/i,/android.+lg(\-?[\d\w]+)\s+build/i],[w,[f,"LG"],[b,E]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[w,[f,"Lenovo"],[b,O]],[/linux;.+((jolla));/i],[f,w,[b,E]],[/((pebble))app\/[\d\.]+\s/i],[f,w,[b,A]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[f,w,[b,E]],[/crkey/i],[[w,"Chromecast"],[f,"Google"]],[/android.+;\s(glass)\s\d/i],[w,[f,"Google"],[b,A]],[/android.+;\s(pixel c)\s/i],[w,[f,"Google"],[b,O]],[/android.+;\s(pixel xl|pixel)\s/i],[w,[f,"Google"],[b,E]],[/android.+;\s(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,/android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],[[w,/_/g," "],[f,"Xiaomi"],[b,E]],[/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],[[w,/_/g," "],[f,"Xiaomi"],[b,O]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[w,[f,"Meizu"],[b,O]],[/android.+a000(1)\s+build/i,/android.+oneplus\s(a\d{4})\s+build/i],[w,[f,"OnePlus"],[b,E]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[w,[f,"RCA"],[b,O]],[/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],[w,[f,"Dell"],[b,O]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[w,[f,"Verizon"],[b,O]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],[[f,"Barnes & Noble"],w,[b,O]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[w,[f,"NuVision"],[b,O]],[/android.+;\s(k88)\sbuild/i],[w,[f,"ZTE"],[b,O]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[w,[f,"Swiss"],[b,E]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[w,[f,"Swiss"],[b,O]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[w,[f,"Zeki"],[b,O]],[/(android).+[;\/]\s+([YR]\d{2})\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],[[f,"Dragon Touch"],w,[b,O]],[/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],[w,[f,"Insignia"],[b,O]],[/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],[w,[f,"NextBook"],[b,O]],[/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[f,"Voice"],w,[b,E]],[/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],[[f,"LvTel"],w,[b,E]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[w,[f,"Envizen"],[b,O]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],[f,w,[b,O]],[/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],[w,[f,"MachSpeed"],[b,O]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[f,w,[b,O]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[w,[f,"Rotor"],[b,O]],[/android.+(KS(.+))\s+build/i],[w,[f,"Amazon"],[b,O]],[/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],[f,w,[b,O]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[b,k.lowerize],f,w],[/(android[\w\.\s\-]{0,9});.+build/i],[w,[f,"Generic"]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[v,[h,"EdgeHTML"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[h,v],[/rv\:([\w\.]{1,9}).+(gecko)/i],[v,h]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[h,v],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[h,[v,T.str,R.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[h,"Windows"],[v,T.str,R.os.windows.version]],[/\((bb)(10);/i],[[h,"BlackBerry"],v],[/(blackberry)\w*\/?([\w\.]*)/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]*)/i,/linux;.+(sailfish);/i],[h,v],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],[[h,"Symbian"],v],[/\((series40);/i],[h],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[h,"Firefox OS"],v],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i],[h,v],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[h,"Chromium OS"],v],[/(sunos)\s?([\w\.\d]*)/i],[[h,"Solaris"],v],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],[h,v],[/(haiku)\s(\w+)/i],[h,v],[/cfnetwork\/.+darwin/i,/ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[v,/_/g,"."],[h,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)/i],[[h,"Mac OS"],[v,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,/(unix)\s?([\w\.]*)/i],[h,v]]},C=function(e,i){if("object"===typeof e&&(i=e,e=t),!(this instanceof C))return new C(e,i).getResult();var n=e||(o&&o.navigator&&o.navigator.userAgent?o.navigator.userAgent:a),s=i?k.extend(N,i):N;return this.getBrowser=function(){var e={name:t,version:t};return T.rgx.call(e,n,s.browser),e.major=k.major(e.version),e},this.getCPU=function(){var e={architecture:t};return T.rgx.call(e,n,s.cpu),e},this.getDevice=function(){var e={vendor:t,model:t,type:t};return T.rgx.call(e,n,s.device),e},this.getEngine=function(){var e={name:t,version:t};return T.rgx.call(e,n,s.engine),e},this.getOS=function(){var e={name:t,version:t};return T.rgx.call(e,n,s.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return n},this.setUA=function(e){return n=e,this},this};C.VERSION=r,C.BROWSER={NAME:h,MAJOR:m,VERSION:v},C.CPU={ARCHITECTURE:g},C.DEVICE={MODEL:w,VENDOR:f,TYPE:b,CONSOLE:x,MOBILE:E,SMARTTV:y,TABLET:O,WEARABLE:A,EMBEDDED:S},C.ENGINE={NAME:h,VERSION:v},C.OS={NAME:h,VERSION:v},typeof i!==u?(typeof e!==u&&e.exports&&(i=e.exports=C),i.UAParser=C):"function"===d&&n(2)?(s=function(){return C}.call(i,n,i,e),s===t||(e.exports=s)):o&&(o.UAParser=C);var B=o&&(o.jQuery||o.Zepto);if(typeof B!==u){var I=new C;B.ua=I.getResult(),B.ua.get=function(){return I.getUA()},B.ua.set=function(e){I.setUA(e);var i=I.getResult();for(var n in i)B.ua[n]=i[n]}}})("object"===typeof window?window:this)},function(e,i){(function(i){e.exports=i}).call(i,{})},function(e,i,n){"use strict";var s={MOBILE:"mobile",TABLET:"tablet",SMART_TV:"smarttv",CONSOLE:"console",WEARABLE:"wearable",BROWSER:void 0},o={CHROME:"Chrome",FIREFOX:"Firefox",OPERA:"Opera",YANDEX:"Yandex",SAFARI:"Safari",INTERNET_EXPLORER:"Internet Explorer",EDGE:"Edge",CHROMIUM:"Chromium",IE:"IE",MOBILE_SAFARI:"Mobile Safari"},t={IOS:"iOS",ANDROID:"Android",WINDOWS_PHONE:"Windows Phone"},r={isMobile:!1,isTablet:!1,isBrowser:!1,isSmartTV:!1,isConsole:!1,isWearable:!1};e.exports={BROWSER_TYPES:o,DEVICE_TYPES:s,OS_TYPES:t,defaultData:r}}])},b12a:function(e,i,n){"use strict";var s=n("ddd8"),o=n.n(s);o.a},ddd8:function(e,i,n){}}]);
//# sourceMappingURL=Info.7618dbf9.js.map