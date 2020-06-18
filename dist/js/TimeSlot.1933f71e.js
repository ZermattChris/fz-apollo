(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["TimeSlot"],{"25fd":function(e,i,s){"use strict";var t=s("8555"),n=s.n(t);n.a},"269a":function(e,i){e.exports=function(e,i){var s="function"===typeof e.exports?e.exports.extendOptions:e.options;for(var t in"function"===typeof e.exports&&(s.directives=e.exports.options.directives),s.directives=s.directives||{},i)s.directives[t]=s.directives[t]||i[t]}},2788:function(e,i,s){"use strict";var t=s("621b"),n=s.n(t);n.a},"452b":function(e,i,s){},"543b":function(e,i,s){"use strict";s.r(i);var t=function(){var e=this,i=e.$createElement,s=e._self._c||i;return s("div",{staticClass:"timeSlot"},[s("PageHeader",{attrs:{title:e.timeListerHeaderStr}},[e._v(" [TODO:awkward] The time of day can affect how your flight is for your "),s("span",{staticClass:"hilite-text text-no-wrap"},[e._v("Group of "+e._s(e.usersGroupSize))]),e._v(" — there are many variables, including which flight, time of year, weather, confidence and your fitness level. "),s("br"),s("br"),e._v(" How to choose the right time for you: "),s("a",{attrs:{href:"#TODO"}},[s("span",{staticClass:"text-no-wrap"},[e._v("Flight Guidelines")])])]),s("div",{staticClass:"steps-controls"},[s("TimeListGroup")],1),s("div",{staticClass:"vSpacerForAbsolute"})],1)},n=[],r=s("36ad"),o=function(){var e=this,i=e.$createElement,s=e._self._c||i;return s("div",{staticClass:"time-container-row"},[e._l(e.daysVisibleList,(function(i,t,n){return s("div",{directives:[{name:"touch",rawName:"v-touch",value:{left:function(){return e.swipe("Left")},right:function(){return e.swipe("Right")}},expression:"{\n      left: () => swipe('Left'),\n      right: () => swipe('Right')\n    }"}],key:t,staticClass:"myCol",class:{"tl-1 hidden-md-and-down":0===n,"tl-2 mx-md-6 mx-lg-12":1===n,"tl-3 hidden-sm-and-down":2===n}},[s("TimeList",{attrs:{date:t,timesObj:i,usersDate:e.userSelectedDate}})],1)})),e.mobile?s("v-icon",{staticClass:"scrollIcons bumpLeftMobile"},[e._v("mdi-chevron-left")]):e._e(),e.mobile?e._e():s("v-btn",{staticClass:"scrollIcons",attrs:{color:"white",absolute:"",top:"",left:"",fab:""},on:{click:e.onPrevDay}},[s("v-icon",[e._v("mdi-chevron-left")])],1),e.mobile?s("v-icon",{staticClass:"scrollIcons bumpRightMobile"},[e._v("mdi-chevron-right")]):e._e(),e.mobile?e._e():s("v-btn",{staticClass:"scrollIcons",attrs:{color:"white",absolute:"",top:"",right:"",fab:""},on:{click:e.onNextDay}},[s("v-icon",[e._v("mdi-chevron-right")])],1),s("v-overlay",{attrs:{value:e.isLoading,absolute:""}})],2)},a=[],l=(s("b64b"),s("96cf"),s("1da1")),c=s("9029"),d=function(){var e=this,i=e.$createElement,s=e._self._c||i;return s("div",{staticClass:"timeListerBox mx-auto",class:{selectedBorder:e.matchesUserDate,boxDisplaySize:!e.isDense},attrs:{elevation:"2",tile:"",dense:!e.matchesUserDate}},[s("div",{staticClass:"TLHeader",class:{"white--text grey darken-2":!e.isDense,"black--text grey lighten-1":e.isDense}},[s("h3",{class:{whiteTextShadow:e.isDense,darkTextShadow:!e.isDense}},[e._v(" "+e._s(e.titleDate.abbreviation)+" ")]),s("div",[e._v(e._s(e.titleDate.fullDate))])]),s("v-list-item-group",{attrs:{color:"indigo","active-class":"success--text text--darken-2"},model:{value:e.selectedSlot,callback:function(i){e.selectedSlot=i},expression:"selectedSlot"}},e._l(e.items,(function(i,t){return s("v-list-item",{key:t,staticClass:"listItem",attrs:{ripple:!1},on:{click:function(i){return e.onClickedRow(t)}}},[s("v-list-item-icon",[s("v-icon",{domProps:{textContent:e._s(e.tmpIcon)}})],1),s("v-list-item-content",[s("v-list-item-title",[s("span",{staticClass:"time",domProps:{innerHTML:e._s(e.formatTime(t))}}),s("v-chip",{staticClass:"availability",attrs:{outlined:""},domProps:{innerHTML:e._s(e.formatAvail(i))}}),s("span",{staticClass:"description"},[e._v("Available")])],1)],1),s("v-list-item-action",[s("v-switch",{attrs:{inset:"",dense:e.isDense,color:"success"}})],1)],1)})),1),e._v(" Selected: "+e._s(e.matchesUserDate)+" ")],1)},u=[],m=(s("ac1f"),s("1276"),s("e3ee")),f=s("b166"),w={name:"TimeList",props:{dense:{type:[Boolean,String],required:!1,default:!1},usersDate:{type:String,default:""},date:{type:String,required:!0},timesObj:{type:[Array,Object],required:!0}},data:function(){return{isDense:this.dense,tmpIcon:"mdi-wifi",items:this.timesObj,selectedSlot:-1}},computed:{matchesUserDate:function(){return this.usersDate===this.date},titleDate:function(){var e=Object(m["a"])(this.date),i=Object(f["a"])(e,"ccc"),s=Object(f["a"])(e,"PPP");return{abbreviation:i,fullDate:s}}},methods:{onClickedRow:function(e,i){this.selectedSlot=i,console.log("Selected a Row.",e)},formatAvail:function(e){return e},formatTime:function(e){var i="<span class='hour'>"+this.getHours(e)+"</span><span class='minute'>:"+this.getMins(e)+"</span>";return i},getHours:function(e){var i=e.split(":");if(2!==i.length)throw new Error('Time String data (timeSlots array) must be in the format of "10:45". Was passed:'+e);return i[0]},getMins:function(e){var i=e.split(":");if(2!==i.length)throw new Error('Time String data (timeSlots array) must be in the format of "10:45". Was passed:'+e);return i[1]}},mounted:function(){}},p=w,b=(s("5e60"),s("2877")),h=s("6544"),v=s.n(h),g=s("cc20"),y=s("132d"),O=s("da13"),S=s("1800"),x=s("5d23"),E=s("1baa"),D=s("34c3"),T=s("b73d"),_=Object(b["a"])(p,d,u,!1,null,"c51c6f88",null),N=_.exports;v()(_,{VChip:g["a"],VIcon:y["a"],VListItem:O["a"],VListItemAction:S["a"],VListItemContent:x["a"],VListItemGroup:E["a"],VListItemIcon:D["a"],VListItemTitle:x["b"],VSwitch:T["a"]});var L=s("2230"),k={name:"TimeListGroup",components:{TimeList:N},props:{},data:function(){return{swipeDirection:"None",mobile:c["isMobile"],msg:c["isMobile"]?"Mobile device: Hide scroll buttons, enable Swipe.":"Desktop: Show scroll buttons. ",userSelectedDate:this.$store.state.flightDate,daysVisibleList:{}}},created:function(){},mounted:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,e.$store.dispatch("timeListDates");case 2:e.loadVisibleDays();case 3:case"end":return i.stop()}}),i)})))()},computed:{isLoading:function(){return this.$store.state._timeList_loading}},methods:{loadVisibleDays:function(){if(null!==this.$store.state._timeListDates){var e=new Date(this.userSelectedDate),i=Object(f["a"])(Object(L["a"])(e,{days:-1}),"Y-MM-dd"),s=Object(f["a"])(e,"Y-MM-dd"),t=Object(f["a"])(Object(L["a"])(e,{days:1}),"Y-MM-dd");this.$set(this.daysVisibleList,i,JSON.parse(JSON.stringify(this.$store.state._timeListDates[i]))),this.$set(this.daysVisibleList,s,JSON.parse(JSON.stringify(this.$store.state._timeListDates[i]))),this.$set(this.daysVisibleList,t,JSON.parse(JSON.stringify(this.$store.state._timeListDates[i])))}},swipe:function(e){this.swipeDirection=e,"Right"===e?this.onPrevDay():"Left"===e&&this.onNextDay()},onPrevDay:function(){this.fetchADay(-1)},onNextDay:function(){this.fetchADay(1)},getDayOffset:function(e,i){return Object(f["a"])(Object(L["a"])(Object(m["a"])(e),{days:i}),"Y-MM-dd")},fetchADay:function(e){if(this.isObjEmpty(this.daysVisibleList))console.error("Ooops! No Days loaded, can't scroll to ["+e+"] Day.");else{var i=null;if(e<0){i=Object.keys(this.daysVisibleList)[0],console.log("FirstKey: ",i);var s=this.getDayOffset(i,-1),t=this.getDayOffset(i,1);if(this.isObjEmpty(this.$store.state._timeListDates[s]))return void console.error("Ooops! At start of loaded days - can't continue...");var n={};this.$set(n,s,JSON.parse(JSON.stringify(this.$store.state._timeListDates[s]))),this.$set(n,i,JSON.parse(JSON.stringify(this.$store.state._timeListDates[i]))),this.$set(n,t,JSON.parse(JSON.stringify(this.$store.state._timeListDates[t]))),this.daysVisibleList=n}else if(e>0){var r=Object.keys(this.daysVisibleList).length-1;i=Object.keys(this.daysVisibleList)[r],console.log("LastKey: ",i);var o=this.getDayOffset(i,1),a=this.getDayOffset(i,-1);if(this.isObjEmpty(this.$store.state._timeListDates[o]))return void console.error("Ooops! At END of loaded days - can't continue...");var l={};this.$set(l,a,JSON.parse(JSON.stringify(this.$store.state._timeListDates[a]))),this.$set(l,i,JSON.parse(JSON.stringify(this.$store.state._timeListDates[i]))),this.$set(l,o,JSON.parse(JSON.stringify(this.$store.state._timeListDates[o]))),this.daysVisibleList=l}}}}},A=k,V=(s("2788"),s("8336")),R=s("a797"),M=s("269a"),C=s.n(M),I=s("c3f0"),j=Object(b["a"])(A,o,a,!1,null,"899ffcfa",null),B=j.exports;v()(j,{VBtn:V["a"],VIcon:y["a"],VOverlay:R["a"]}),C()(j,{Touch:I["a"]});var P={name:"TimeSlot",components:{PageHeader:r["a"],TimeListGroup:B},data:function(){return{}},created:function(){this.$store.dispatch("flightOptions")},computed:{userFlightDate:function(){return this.$store.state.flightDate},usersGroupSize:function(){return this.$store.state.nrPeople},timeListerHeaderStr:function(){if(!this.isObjEmpty(this.$store.state._flightsList)){var e=this.$store.state.selectedFlight,i=this.$store.state._flightsList[e];return"2. Flight Time for: <span class='hilite-text text-no-wrap'>"+i+"</span>"}}},methods:{setUserDate:function(e){return this.userTimeSlot=e,e}}},$=P,z=(s("25fd"),Object(b["a"])($,t,n,!1,null,"46aae416",null));i["default"]=z.exports},"5e60":function(e,i,s){"use strict";var t=s("452b"),n=s.n(t);n.a},"621b":function(e,i,s){},8555:function(e,i,s){},9029:function(e,i){e.exports=function(e){var i={};function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}return s.m=e,s.c=i,s.d=function(e,i,t){s.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:t})},s.n=function(e){var i=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(i,"a",i),i},s.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},s.p="",s(s.s=0)}([function(e,i,s){"use strict";var t=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var s=arguments[i];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(e[t]=s[t])}return e},n=s(1),r=s(3),o=r.BROWSER_TYPES,a=r.OS_TYPES,l=r.DEVICE_TYPES,c=r.defaultData,d=new n,u=d.getBrowser(),m=d.getDevice(),f=d.getEngine(),w=d.getOS(),p=d.getUA(),b=o.CHROME,h=o.CHROMIUM,v=o.IE,g=o.INTERNET_EXPLORER,y=o.OPERA,O=o.FIREFOX,S=o.SAFARI,x=o.EDGE,E=o.YANDEX,D=o.MOBILE_SAFARI,T=l.MOBILE,_=l.TABLET,N=l.SMART_TV,L=l.BROWSER,k=l.WEARABLE,A=l.CONSOLE,V=a.ANDROID,R=a.WINDOWS_PHONE,M=a.IOS,C=function(e){switch(e){case T:return{isMobile:!0};case _:return{isTablet:!0};case N:return{isSmartTV:!0};case A:return{isConsole:!0};case k:return{isWearable:!0};case L:return{isBrowser:!0};default:return c}},I=function(e,i,s,t,n){return{isBrowser:e,browserMajorVersion:i.major,browserFullVersion:i.version,browserName:i.name,engineName:s.name||!1,engineVersion:s.version,osName:t.name,osVersion:t.version,userAgent:n}},j=function(e,i,s,n){return t({},e,{vendor:i.vendor,model:i.model,os:s.name,osVersion:s.version,ua:n})},B=function(e,i,s,t){return{isSmartTV:e,engineName:i.name,engineVersion:i.version,osName:s.name,osVersion:s.version,userAgent:t}},P=function(e,i,s,t){return{isConsole:e,engineName:i.name,engineVersion:i.version,osName:s.name,osVersion:s.version,userAgent:t}},$=function(e,i,s,t){return{isWearable:e,engineName:i.name,engineVersion:i.version,osName:s.name,osVersion:s.version,userAgent:t}},z=function(){return m.type===T},F=function(){return m.type===_},W=function(){switch(m.type){case T:case _:return!0;default:return!1}},U=function(){return m.type===N},G=function(){return m.type===L},H=function(){return m.type===k},J=function(){return m.type===A},Y=function(){return w.name===V},q=function(){return w.name===R},X=function(){return w.name===M},K=function(){return u.name===b},Q=function(){return u.name===O},Z=function(){return u.name===h},ee=function(){return u.name===x},ie=function(){return u.name===E},se=function(){return u.name===S||u.name===D},te=function(){return u.name===D},ne=function(){return u.name===y},re=function(){return u.name===g||u.name===v},oe=function(){return u.major},ae=function(){return u.version},le=function(){return w.version?w.version:"none"},ce=function(){return w.name?w.name:"none"},de=function(){return u.name},ue=function(){return m.vendor?m.vendor:"none"},me=function(){return m.model?m.model:"none"},fe=function(){return f.name},we=function(){return f.version},pe=function(){return p},be=function(){return m.type},he=U(),ve=J(),ge=H(),ye=te(),Oe=Z(),Se=W(),xe=z(),Ee=F(),De=G(),Te=Y(),_e=q(),Ne=X(),Le=K(),ke=Q(),Ae=se(),Ve=ne(),Re=re(),Me=le(),Ce=ce(),Ie=oe(),je=ae(),Be=de(),Pe=ue(),$e=me(),ze=fe(),Fe=we(),We=pe(),Ue=ee(),Ge=ie(),He=be(),Je=C(m.type);function Ye(){var e=Je.isBrowser,i=Je.isMobile,s=Je.isTablet,t=Je.isSmartTV,n=Je.isConsole,r=Je.isWearable;return e?I(e,u,f,w,p):t?B(t,f,w,p):n?P(n,f,w,p):i||s?j(Je,m,w,p):r?$(r,f,w,p):void 0}e.exports={deviceDetect:Ye,isSmartTV:he,isConsole:ve,isWearable:ge,isMobileSafari:ye,isChromium:Oe,isMobile:Se,isMobileOnly:xe,isTablet:Ee,isBrowser:De,isAndroid:Te,isWinPhone:_e,isIOS:Ne,isChrome:Le,isFirefox:ke,isSafari:Ae,isOpera:Ve,isIE:Re,osVersion:Me,osName:Ce,fullBrowserVersion:Ie,browserVersion:je,browserName:Be,mobileVendor:Pe,mobileModel:$e,engineName:ze,engineVersion:Fe,getUA:We,isEdge:Ue,isYandex:Ge,deviceType:He}},function(e,i,s){var t;
/*!
 * UAParser.js v0.7.18
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2016 Faisal Salman <fyzlman@gmail.com>
 * Dual licensed under GPLv2 or MIT
 */(function(n,r){"use strict";var o="0.7.18",a="",l="?",c="function",d="undefined",u="object",m="string",f="major",w="model",p="name",b="type",h="vendor",v="version",g="architecture",y="console",O="mobile",S="tablet",x="smarttv",E="wearable",D="embedded",T={extend:function(e,i){var s={};for(var t in e)i[t]&&i[t].length%2===0?s[t]=i[t].concat(e[t]):s[t]=e[t];return s},has:function(e,i){return"string"===typeof e&&-1!==i.toLowerCase().indexOf(e.toLowerCase())},lowerize:function(e){return e.toLowerCase()},major:function(e){return typeof e===m?e.replace(/[^\d\.]/g,"").split(".")[0]:r},trim:function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},_={rgx:function(e,i){var s,t,n,o,a,l,d=0;while(d<i.length&&!a){var m=i[d],f=i[d+1];s=t=0;while(s<m.length&&!a)if(a=m[s++].exec(e),a)for(n=0;n<f.length;n++)l=a[++t],o=f[n],typeof o===u&&o.length>0?2==o.length?typeof o[1]==c?this[o[0]]=o[1].call(this,l):this[o[0]]=o[1]:3==o.length?typeof o[1]!==c||o[1].exec&&o[1].test?this[o[0]]=l?l.replace(o[1],o[2]):r:this[o[0]]=l?o[1].call(this,l,o[2]):r:4==o.length&&(this[o[0]]=l?o[3].call(this,l.replace(o[1],o[2])):r):this[o]=l||r;d+=2}},str:function(e,i){for(var s in i)if(typeof i[s]===u&&i[s].length>0){for(var t=0;t<i[s].length;t++)if(T.has(i[s][t],e))return s===l?r:s}else if(T.has(i[s],e))return s===l?r:s;return e}},N={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},L={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[p,v],[/(opios)[\/\s]+([\w\.]+)/i],[[p,"Opera Mini"],v],[/\s(opr)\/([\w\.]+)/i],[[p,"Opera"],v],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]*)/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark)\/([\w\.-]+)/i],[p,v],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[p,"IE"],v],[/(edge|edgios|edgea)\/((\d+)?[\w\.]+)/i],[[p,"Edge"],v],[/(yabrowser)\/([\w\.]+)/i],[[p,"Yandex"],v],[/(puffin)\/([\w\.]+)/i],[[p,"Puffin"],v],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[p,"UCBrowser"],v],[/(comodo_dragon)\/([\w\.]+)/i],[[p,/_/g," "],v],[/(micromessenger)\/([\w\.]+)/i],[[p,"WeChat"],v],[/(qqbrowserlite)\/([\w\.]+)/i],[p,v],[/(QQ)\/([\d\.]+)/i],[p,v],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[p,v],[/(BIDUBrowser)[\/\s]?([\w\.]+)/i],[p,v],[/(2345Explorer)[\/\s]?([\w\.]+)/i],[p,v],[/(MetaSr)[\/\s]?([\w\.]+)/i],[p],[/(LBBROWSER)/i],[p],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[v,[p,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[v,[p,"Facebook"]],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[v,[p,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[p,/(.+)/,"$1 WebView"],v],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[p,/(.+(?:g|us))(.+)/,"$1 $2"],v],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[v,[p,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[p,v],[/(dolfin)\/([\w\.]+)/i],[[p,"Dolphin"],v],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[p,"Chrome"],v],[/(coast)\/([\w\.]+)/i],[[p,"Opera Coast"],v],[/fxios\/([\w\.-]+)/i],[v,[p,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[v,[p,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[v,p],[/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[[p,"GSA"],v],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[p,[v,_.str,N.browser.oldsafari.version]],[/(konqueror)\/([\w\.]+)/i,/(webkit|khtml)\/([\w\.]+)/i],[p,v],[/(navigator|netscape)\/([\w\.-]+)/i],[[p,"Netscape"],v],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[p,v]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[g,"amd64"]],[/(ia32(?=;))/i],[[g,T.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[g,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[g,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[g,/ower/,"",T.lowerize]],[/(sun4\w)[;\)]/i],[[g,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[g,T.lowerize]]],device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],[w,h,[b,S]],[/applecoremedia\/[\w\.]+ \((ipad)/],[w,[h,"Apple"],[b,S]],[/(apple\s{0,1}tv)/i],[[w,"Apple TV"],[h,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[h,w,[b,S]],[/(kf[A-z]+)\sbuild\/.+silk\//i],[w,[h,"Amazon"],[b,S]],[/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],[[w,_.str,N.device.amazon.model],[h,"Amazon"],[b,O]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[w,h,[b,O]],[/\((ip[honed|\s\w*]+);/i],[w,[h,"Apple"],[b,O]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[h,w,[b,O]],[/\(bb10;\s(\w+)/i],[w,[h,"BlackBerry"],[b,O]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],[w,[h,"Asus"],[b,S]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[h,"Sony"],[w,"Xperia Tablet"],[b,S]],[/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i],[w,[h,"Sony"],[b,O]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[h,w,[b,y]],[/android.+;\s(shield)\sbuild/i],[w,[h,"Nvidia"],[b,y]],[/(playstation\s[34portablevi]+)/i],[w,[h,"Sony"],[b,y]],[/(sprint\s(\w+))/i],[[h,_.str,N.device.sprint.vendor],[w,_.str,N.device.sprint.model],[b,O]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],[h,w,[b,S]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[h,[w,/_/g," "],[b,O]],[/(nexus\s9)/i],[w,[h,"HTC"],[b,S]],[/d\/huawei([\w\s-]+)[;\)]/i,/(nexus\s6p)/i],[w,[h,"Huawei"],[b,O]],[/(microsoft);\s(lumia[\s\w]+)/i],[h,w,[b,O]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[w,[h,"Microsoft"],[b,y]],[/(kin\.[onetw]{3})/i],[[w,/\./g," "],[h,"Microsoft"],[b,O]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w*)/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[w,[h,"Motorola"],[b,O]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[w,[h,"Motorola"],[b,S]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[h,T.trim],[w,T.trim],[b,x]],[/hbbtv.+maple;(\d+)/i],[[w,/^/,"SmartTV"],[h,"Samsung"],[b,x]],[/\(dtv[\);].+(aquos)/i],[w,[h,"Sharp"],[b,x]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[h,"Samsung"],w,[b,S]],[/smart-tv.+(samsung)/i],[h,[b,x],w],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,/sec-((sgh\w+))/i],[[h,"Samsung"],w,[b,O]],[/sie-(\w*)/i],[w,[h,"Siemens"],[b,O]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]*)/i],[[h,"Nokia"],w,[b,O]],[/android\s3\.[\s\w;-]{10}(a\d{3})/i],[w,[h,"Acer"],[b,S]],[/android.+([vl]k\-?\d{3})\s+build/i],[w,[h,"LG"],[b,S]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[h,"LG"],w,[b,S]],[/(lg) netcast\.tv/i],[h,w,[b,x]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w*)/i,/android.+lg(\-?[\d\w]+)\s+build/i],[w,[h,"LG"],[b,O]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[w,[h,"Lenovo"],[b,S]],[/linux;.+((jolla));/i],[h,w,[b,O]],[/((pebble))app\/[\d\.]+\s/i],[h,w,[b,E]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[h,w,[b,O]],[/crkey/i],[[w,"Chromecast"],[h,"Google"]],[/android.+;\s(glass)\s\d/i],[w,[h,"Google"],[b,E]],[/android.+;\s(pixel c)\s/i],[w,[h,"Google"],[b,S]],[/android.+;\s(pixel xl|pixel)\s/i],[w,[h,"Google"],[b,O]],[/android.+;\s(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,/android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],[[w,/_/g," "],[h,"Xiaomi"],[b,O]],[/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],[[w,/_/g," "],[h,"Xiaomi"],[b,S]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[w,[h,"Meizu"],[b,S]],[/android.+a000(1)\s+build/i,/android.+oneplus\s(a\d{4})\s+build/i],[w,[h,"OnePlus"],[b,O]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[w,[h,"RCA"],[b,S]],[/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],[w,[h,"Dell"],[b,S]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[w,[h,"Verizon"],[b,S]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],[[h,"Barnes & Noble"],w,[b,S]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[w,[h,"NuVision"],[b,S]],[/android.+;\s(k88)\sbuild/i],[w,[h,"ZTE"],[b,S]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[w,[h,"Swiss"],[b,O]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[w,[h,"Swiss"],[b,S]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[w,[h,"Zeki"],[b,S]],[/(android).+[;\/]\s+([YR]\d{2})\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],[[h,"Dragon Touch"],w,[b,S]],[/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],[w,[h,"Insignia"],[b,S]],[/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],[w,[h,"NextBook"],[b,S]],[/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[h,"Voice"],w,[b,O]],[/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],[[h,"LvTel"],w,[b,O]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[w,[h,"Envizen"],[b,S]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],[h,w,[b,S]],[/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],[w,[h,"MachSpeed"],[b,S]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[h,w,[b,S]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[w,[h,"Rotor"],[b,S]],[/android.+(KS(.+))\s+build/i],[w,[h,"Amazon"],[b,S]],[/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],[h,w,[b,S]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[b,T.lowerize],h,w],[/(android[\w\.\s\-]{0,9});.+build/i],[w,[h,"Generic"]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[v,[p,"EdgeHTML"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[p,v],[/rv\:([\w\.]{1,9}).+(gecko)/i],[v,p]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[p,v],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[p,[v,_.str,N.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[p,"Windows"],[v,_.str,N.os.windows.version]],[/\((bb)(10);/i],[[p,"BlackBerry"],v],[/(blackberry)\w*\/?([\w\.]*)/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]*)/i,/linux;.+(sailfish);/i],[p,v],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],[[p,"Symbian"],v],[/\((series40);/i],[p],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[p,"Firefox OS"],v],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i],[p,v],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[p,"Chromium OS"],v],[/(sunos)\s?([\w\.\d]*)/i],[[p,"Solaris"],v],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],[p,v],[/(haiku)\s(\w+)/i],[p,v],[/cfnetwork\/.+darwin/i,/ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[v,/_/g,"."],[p,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)/i],[[p,"Mac OS"],[v,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,/(unix)\s?([\w\.]*)/i],[p,v]]},k=function(e,i){if("object"===typeof e&&(i=e,e=r),!(this instanceof k))return new k(e,i).getResult();var s=e||(n&&n.navigator&&n.navigator.userAgent?n.navigator.userAgent:a),t=i?T.extend(L,i):L;return this.getBrowser=function(){var e={name:r,version:r};return _.rgx.call(e,s,t.browser),e.major=T.major(e.version),e},this.getCPU=function(){var e={architecture:r};return _.rgx.call(e,s,t.cpu),e},this.getDevice=function(){var e={vendor:r,model:r,type:r};return _.rgx.call(e,s,t.device),e},this.getEngine=function(){var e={name:r,version:r};return _.rgx.call(e,s,t.engine),e},this.getOS=function(){var e={name:r,version:r};return _.rgx.call(e,s,t.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return s},this.setUA=function(e){return s=e,this},this};k.VERSION=o,k.BROWSER={NAME:p,MAJOR:f,VERSION:v},k.CPU={ARCHITECTURE:g},k.DEVICE={MODEL:w,VENDOR:h,TYPE:b,CONSOLE:y,MOBILE:O,SMARTTV:x,TABLET:S,WEARABLE:E,EMBEDDED:D},k.ENGINE={NAME:p,VERSION:v},k.OS={NAME:p,VERSION:v},typeof i!==d?(typeof e!==d&&e.exports&&(i=e.exports=k),i.UAParser=k):"function"===c&&s(2)?(t=function(){return k}.call(i,s,i,e),t===r||(e.exports=t)):n&&(n.UAParser=k);var A=n&&(n.jQuery||n.Zepto);if(typeof A!==d){var V=new k;A.ua=V.getResult(),A.ua.get=function(){return V.getUA()},A.ua.set=function(e){V.setUA(e);var i=V.getResult();for(var s in i)A.ua[s]=i[s]}}})("object"===typeof window?window:this)},function(e,i){(function(i){e.exports=i}).call(i,{})},function(e,i,s){"use strict";var t={MOBILE:"mobile",TABLET:"tablet",SMART_TV:"smarttv",CONSOLE:"console",WEARABLE:"wearable",BROWSER:void 0},n={CHROME:"Chrome",FIREFOX:"Firefox",OPERA:"Opera",YANDEX:"Yandex",SAFARI:"Safari",INTERNET_EXPLORER:"Internet Explorer",EDGE:"Edge",CHROMIUM:"Chromium",IE:"IE",MOBILE_SAFARI:"Mobile Safari"},r={IOS:"iOS",ANDROID:"Android",WINDOWS_PHONE:"Windows Phone"},o={isMobile:!1,isTablet:!1,isBrowser:!1,isSmartTV:!1,isConsole:!1,isWearable:!1};e.exports={BROWSER_TYPES:n,DEVICE_TYPES:t,OS_TYPES:r,defaultData:o}}])}}]);
//# sourceMappingURL=TimeSlot.1933f71e.js.map