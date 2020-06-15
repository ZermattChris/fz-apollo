(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["TimeSlot"],{"269a":function(e,i){e.exports=function(e,i){var s="function"===typeof e.exports?e.exports.extendOptions:e.options;for(var t in"function"===typeof e.exports&&(s.directives=e.exports.options.directives),s.directives=s.directives||{},i)s.directives[t]=s.directives[t]||i[t]}},"543b":function(e,i,s){"use strict";s.r(i);var t=function(){var e=this,i=e.$createElement,s=e._self._c||i;return s("div",{staticClass:"timeSlot"},[s("PageHeader",{attrs:{title:e.timeListerHeaderStr}},[e._v(" [TODO:awkward] The time of day can affect how your flight is for your "),s("span",{staticClass:"hilite-text text-no-wrap"},[e._v("Group of "+e._s(e.usersGroupSize))]),e._v(" — there are many variables, including which flight, time of year, weather, confidence and your fitness level. "),s("br"),s("br"),e._v(" How to choose the right time for you: "),s("a",{attrs:{href:"#TODO"}},[s("span",{staticClass:"text-no-wrap"},[e._v("Flight Guidelines")])])]),s("div",{staticClass:"steps-controls"},[s("TimeListGroup",e._g({},e.$listeners))],1),s("div",{staticClass:"vSpacerForAbsolute"})],1)},n=[],r=s("36ad"),o=function(){var e=this,i=e.$createElement,s=e._self._c||i;return s("v-item-group",{attrs:{mandatory:""}},[s("v-container",{staticClass:"pa-0"},[s("v-row",{staticClass:"myRow"},e._l(e.daysVisibleList,(function(i,t){return s("v-col",{directives:[{name:"touch",rawName:"v-touch",value:{left:function(){return e.swipe("Left")},right:function(){return e.swipe("Right")}},expression:"{\n          left: () => swipe('Left'),\n          right: () => swipe('Right')\n        }"}],key:t,staticClass:"myCol",staticStyle:{"background-color":"yellow",border:"1px maroon solid","min-height":"610px !important"}},[e._v(" "+e._s(t)+" "),s("br"),s("TimeList",{attrs:{date:e.convertEpocSecsToISODateStr(t),timesArray:Object.values(i),usersDate:e.userSelectedDate}})],1)})),1),e.mobile?s("v-icon",{staticClass:"scrollIcons bumpLeftMobile"},[e._v("mdi-chevron-left")]):e._e(),e.mobile?e._e():s("v-btn",{staticClass:"scrollIcons",attrs:{color:"white",absolute:"",top:"",left:"",fab:""},on:{click:e.onPrevDay}},[s("v-icon",[e._v("mdi-chevron-left")])],1),e.mobile?s("v-icon",{staticClass:"scrollIcons bumpRightMobile"},[e._v("mdi-chevron-right")]):e._e(),e.mobile?e._e():s("v-btn",{staticClass:"scrollIcons",attrs:{color:"white",absolute:"",top:"",right:"",fab:""},on:{click:e.onNextDay}},[s("v-icon",[e._v("mdi-chevron-right")])],1)],1)],1)},a=[],l=(s("b64b"),s("9029")),c=function(){var e=this,i=e.$createElement,s=e._self._c||i;return s("v-list",{staticClass:"timeListerBox mx-auto",class:{selectedBorder:e.matchesUserDate,boxDisplaySize:!e.isDense},attrs:{elevation:"2",tile:"",dense:!e.matchesUserDate}},[s("div",{staticClass:"TLHeader",class:{"white--text grey darken-2":!e.isDense,"black--text grey lighten-1":e.isDense}},[s("h3",{class:{whiteTextShadow:e.isDense,darkTextShadow:!e.isDense}},[e._v(" "+e._s(e.titleDate.abbreviation)+" ")]),s("div",[e._v(e._s(e.titleDate.fullDate))])]),s("v-list-item-group",{attrs:{color:"indigo","active-class":"success--text text--darken-2"},model:{value:e.selectedSlot,callback:function(i){e.selectedSlot=i},expression:"selectedSlot"}},e._l(e.items,(function(i,t){return s("v-list-item",{key:t,staticClass:"listItem",attrs:{ripple:!1},on:{click:function(i){return e.onClickedRow(t+1)}}},[s("v-list-item-icon",[s("v-icon",{domProps:{textContent:e._s(e.tmpIcon)}})],1),s("v-list-item-content",[s("v-list-item-title",[s("span",{staticClass:"time",domProps:{innerHTML:e._s(e.formatTime(i))}}),s("v-chip",{staticClass:"availability",attrs:{outlined:""},domProps:{innerHTML:e._s(e.formatAvail(i))}}),s("span",{staticClass:"description"},[e._v("Available")])],1)],1),s("v-list-item-action",[s("v-switch",{attrs:{inset:"",dense:e.isDense,color:"success"}})],1)],1)})),1),e._v(" Selected: "+e._s(e.matchesUserDate)+" ")],1)},d=[],u=(s("07ac"),s("ac1f"),s("1276"),s("e3ee")),m=s("b166"),f={name:"TimeList",props:{dense:{type:[Boolean,String],required:!1,default:!1},usersDate:{type:String,default:""},date:{type:String,required:!0},timesArray:{type:[Array,Object],required:!0}},data:function(){return{isDense:this.dense,tmpIcon:"mdi-wifi",items:this.timesArray,selectedSlot:-1}},computed:{matchesUserDate:function(){return this.usersDate===this.date},titleDate:function(){var e=Object(u["a"])(this.date),i=Object(m["a"])(e,"ccc"),s=Object(m["a"])(e,"PPP");return{abbreviation:i,fullDate:s}}},methods:{onClickedRow:function(e,i){this.selectedSlot=i,console.log("Selected a Row.",e)},formatAvail:function(e){var i=Object.values(e)[0];return i},formatTime:function(e){var i=Object.keys(e)[0],s="<span class='hour'>"+this.getHours(i)+"</span><span class='minute'>:"+this.getMins(i)+"</span>";return s},getHours:function(e){var i=e.split(":");if(2!==i.length)throw new Error('Time String data (timeSlots array) must be in the format of "10:45". Was passed:'+e);return i[0]},getMins:function(e){var i=e.split(":");if(2!==i.length)throw new Error('Time String data (timeSlots array) must be in the format of "10:45". Was passed:'+e);return i[1]}},mounted:function(){}},w=f,p=(s("eeb1"),s("2877")),b=s("6544"),h=s.n(b),v=s("cc20"),g=s("132d"),y=s("8860"),S=s("da13"),x=s("1800"),O=s("5d23"),E=s("1baa"),T=s("34c3"),D=s("b73d"),k=Object(p["a"])(w,c,d,!1,null,"6379fe56",null),A=k.exports;h()(k,{VChip:v["a"],VIcon:g["a"],VList:y["a"],VListItem:S["a"],VListItemAction:x["a"],VListItemContent:O["a"],VListItemGroup:E["a"],VListItemIcon:T["a"],VListItemTitle:O["b"],VSwitch:D["a"]});var L=s("2b0e"),V=L["a"].observable({nrPeople:0,flightDate:"",selectedFlight:"",wantsPhotos:!1,nrPeopleMax:5,flightsList:{},bookDaysOffset:2,bookMonthsOffset:12,videoPrice:40,timeListDates:null}),_=s("fd3a"),C=s("8c86");function N(e){Object(C["a"])(1,arguments);var i=Object(_["a"])(e),s=i.getTime();return s}function R(e){return Object(C["a"])(1,arguments),Math.floor(N(e)/1e3)}var M=s("fe1f");function I(e){Object(C["a"])(1,arguments);var i=Object(M["a"])(e);return Object(_["a"])(1e3*i)}var j={name:"TimeListGroup",components:{TimeList:A},props:{},data:function(){return{swipeDirection:"None",mobile:l["isMobile"],msg:l["isMobile"]?"Mobile device: Hide scroll buttons, enable Swipe.":"Desktop: Show scroll buttons. ",userSelectedDate:V.flightDate,daysVisibleList:{}}},created:function(){},mounted:function(){if(this.isObjEmpty(V.timeListDates)){if(0==V.nrPeople||""==V.selectedFlight)return void console.log("Back to Step 1")}else this.loadVisibleDays()},computed:{},methods:{loadVisibleDays:function(){var e=86400,i=R(new Date(this.userSelectedDate)),s=i-e,t=i+e;console.log(i,s,t),this.$set(this.daysVisibleList,s,V.timeListDates[s]),this.$set(this.daysVisibleList,i,V.timeListDates[s]),this.$set(this.daysVisibleList,t,V.timeListDates[s]),console.log("=======")},convertEpocSecsToISODateStr:function(e){var i=I(e),s=Object(m["a"])(i,"Y-MM-dd");return s},swipe:function(e){this.swipeDirection=e,"Right"===e?this.onPrevDay():"Left"===e&&this.onNextDay()},onPrevDay:function(){this.fetchADay(-1)},onNextDay:function(){this.fetchADay(1)},fetchADay:function(e){var i=this;if(this.isObjEmpty(this.daysVisibleList))console.error("Ooops! No Days loaded, can't scroll to ["+e+"] Day.");else{var s=null,t=50,n=86400;if(e<0){s=Object.keys(this.daysVisibleList)[0];var r=s-n;if(this.isObjEmpty(V.timeListDates[r]))return void console.error("Ooops! At start of loaded days - can't continue...");this.$set(this.daysVisibleList,r,V.timeListDates[r]),setTimeout((function(){var e=Object.keys(i.daysVisibleList).length-1;console.log(e),s=Object.keys(i.daysVisibleList)[e],i.$delete(i.daysVisibleList,s)}),t)}else if(e>0){var o=Object.keys(this.daysVisibleList).length;s=Object.keys(this.daysVisibleList)[o-1];var a=1*n+1*s;if(this.isObjEmpty(V.timeListDates[a]))return void console.error("Ooops! At end of loaded days - can't continue...");this.$set(this.daysVisibleList,a,V.timeListDates[a]),setTimeout((function(){s=Object.keys(i.daysVisibleList)[0],i.$delete(i.daysVisibleList,s)}),t)}}}}},P=j,B=(s("81a8"),s("8336")),z=s("62ad");s("99af"),s("4de4"),s("2ca0"),s("20f6"),s("4b85"),s("a15b"),s("498a");function F(e){return L["a"].extend({name:"v-".concat(e),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(i,s){var t=s.props,n=s.data,r=s.children;n.staticClass="".concat(e," ").concat(n.staticClass||"").trim();var o=n.attrs;if(o){n.attrs={};var a=Object.keys(o).filter((function(e){if("slot"===e)return!1;var i=o[e];return e.startsWith("data-")?(n.attrs[e]=i,!1):i||"string"===typeof i}));a.length&&(n.staticClass+=" ".concat(a.join(" ")))}return t.id&&(n.domProps=n.domProps||{},n.domProps.id=t.id),i(t.tag,n,r)}})}var W=s("d9f7"),G=F("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(e,i){var s,t=i.props,n=i.data,r=i.children,o=n.attrs;return o&&(n.attrs={},s=Object.keys(o).filter((function(e){if("slot"===e)return!1;var i=o[e];return e.startsWith("data-")?(n.attrs[e]=i,!1):i||"string"===typeof i}))),t.id&&(n.domProps=n.domProps||{},n.domProps.id=t.id),e(t.tag,Object(W["a"])(n,{staticClass:"container",class:Array({"container--fluid":t.fluid}).concat(s||[])}),r)}}),U=s("604c"),H=s("0fd9b"),$=s("269a"),Y=s.n($),q=s("c3f0"),X=Object(p["a"])(P,o,a,!1,null,"72cb550e",null),Q=X.exports;h()(X,{VBtn:B["a"],VCol:z["a"],VContainer:G,VIcon:g["a"],VItemGroup:U["b"],VRow:H["a"]}),Y()(X,{Touch:q["a"]});var Z={name:"TimeSlot",components:{PageHeader:r["a"],TimeListGroup:Q},data:function(){return{}},computed:{userFlightDate:function(){return this.$store.state.flightDate},usersGroupSize:function(){return this.$store.state.nrPeople},timeListerHeaderStr:function(){var e=this.$store.state.selectedFlight,i=this.$store.state._flightsList[e];return"2. Flight Time for: <span class='hilite-text text-no-wrap'>"+i+"</span>"}},methods:{setUserDate:function(e){return this.userTimeSlot=e,e}},mounted:function(){}},J=Z,K=(s("a2b0"),Object(p["a"])(J,t,n,!1,null,"1be82916",null));i["default"]=K.exports},"757c":function(e,i,s){},"81a8":function(e,i,s){"use strict";var t=s("757c"),n=s.n(t);n.a},9029:function(e,i){e.exports=function(e){var i={};function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}return s.m=e,s.c=i,s.d=function(e,i,t){s.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:t})},s.n=function(e){var i=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(i,"a",i),i},s.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},s.p="",s(s.s=0)}([function(e,i,s){"use strict";var t=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var s=arguments[i];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(e[t]=s[t])}return e},n=s(1),r=s(3),o=r.BROWSER_TYPES,a=r.OS_TYPES,l=r.DEVICE_TYPES,c=r.defaultData,d=new n,u=d.getBrowser(),m=d.getDevice(),f=d.getEngine(),w=d.getOS(),p=d.getUA(),b=o.CHROME,h=o.CHROMIUM,v=o.IE,g=o.INTERNET_EXPLORER,y=o.OPERA,S=o.FIREFOX,x=o.SAFARI,O=o.EDGE,E=o.YANDEX,T=o.MOBILE_SAFARI,D=l.MOBILE,k=l.TABLET,A=l.SMART_TV,L=l.BROWSER,V=l.WEARABLE,_=l.CONSOLE,C=a.ANDROID,N=a.WINDOWS_PHONE,R=a.IOS,M=function(e){switch(e){case D:return{isMobile:!0};case k:return{isTablet:!0};case A:return{isSmartTV:!0};case _:return{isConsole:!0};case V:return{isWearable:!0};case L:return{isBrowser:!0};default:return c}},I=function(e,i,s,t,n){return{isBrowser:e,browserMajorVersion:i.major,browserFullVersion:i.version,browserName:i.name,engineName:s.name||!1,engineVersion:s.version,osName:t.name,osVersion:t.version,userAgent:n}},j=function(e,i,s,n){return t({},e,{vendor:i.vendor,model:i.model,os:s.name,osVersion:s.version,ua:n})},P=function(e,i,s,t){return{isSmartTV:e,engineName:i.name,engineVersion:i.version,osName:s.name,osVersion:s.version,userAgent:t}},B=function(e,i,s,t){return{isConsole:e,engineName:i.name,engineVersion:i.version,osName:s.name,osVersion:s.version,userAgent:t}},z=function(e,i,s,t){return{isWearable:e,engineName:i.name,engineVersion:i.version,osName:s.name,osVersion:s.version,userAgent:t}},F=function(){return m.type===D},W=function(){return m.type===k},G=function(){switch(m.type){case D:case k:return!0;default:return!1}},U=function(){return m.type===A},H=function(){return m.type===L},$=function(){return m.type===V},Y=function(){return m.type===_},q=function(){return w.name===C},X=function(){return w.name===N},Q=function(){return w.name===R},Z=function(){return u.name===b},J=function(){return u.name===S},K=function(){return u.name===h},ee=function(){return u.name===O},ie=function(){return u.name===E},se=function(){return u.name===x||u.name===T},te=function(){return u.name===T},ne=function(){return u.name===y},re=function(){return u.name===g||u.name===v},oe=function(){return u.major},ae=function(){return u.version},le=function(){return w.version?w.version:"none"},ce=function(){return w.name?w.name:"none"},de=function(){return u.name},ue=function(){return m.vendor?m.vendor:"none"},me=function(){return m.model?m.model:"none"},fe=function(){return f.name},we=function(){return f.version},pe=function(){return p},be=function(){return m.type},he=U(),ve=Y(),ge=$(),ye=te(),Se=K(),xe=G(),Oe=F(),Ee=W(),Te=H(),De=q(),ke=X(),Ae=Q(),Le=Z(),Ve=J(),_e=se(),Ce=ne(),Ne=re(),Re=le(),Me=ce(),Ie=oe(),je=ae(),Pe=de(),Be=ue(),ze=me(),Fe=fe(),We=we(),Ge=pe(),Ue=ee(),He=ie(),$e=be(),Ye=M(m.type);function qe(){var e=Ye.isBrowser,i=Ye.isMobile,s=Ye.isTablet,t=Ye.isSmartTV,n=Ye.isConsole,r=Ye.isWearable;return e?I(e,u,f,w,p):t?P(t,f,w,p):n?B(n,f,w,p):i||s?j(Ye,m,w,p):r?z(r,f,w,p):void 0}e.exports={deviceDetect:qe,isSmartTV:he,isConsole:ve,isWearable:ge,isMobileSafari:ye,isChromium:Se,isMobile:xe,isMobileOnly:Oe,isTablet:Ee,isBrowser:Te,isAndroid:De,isWinPhone:ke,isIOS:Ae,isChrome:Le,isFirefox:Ve,isSafari:_e,isOpera:Ce,isIE:Ne,osVersion:Re,osName:Me,fullBrowserVersion:Ie,browserVersion:je,browserName:Pe,mobileVendor:Be,mobileModel:ze,engineName:Fe,engineVersion:We,getUA:Ge,isEdge:Ue,isYandex:He,deviceType:$e}},function(e,i,s){var t;
/*!
 * UAParser.js v0.7.18
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2016 Faisal Salman <fyzlman@gmail.com>
 * Dual licensed under GPLv2 or MIT
 */(function(n,r){"use strict";var o="0.7.18",a="",l="?",c="function",d="undefined",u="object",m="string",f="major",w="model",p="name",b="type",h="vendor",v="version",g="architecture",y="console",S="mobile",x="tablet",O="smarttv",E="wearable",T="embedded",D={extend:function(e,i){var s={};for(var t in e)i[t]&&i[t].length%2===0?s[t]=i[t].concat(e[t]):s[t]=e[t];return s},has:function(e,i){return"string"===typeof e&&-1!==i.toLowerCase().indexOf(e.toLowerCase())},lowerize:function(e){return e.toLowerCase()},major:function(e){return typeof e===m?e.replace(/[^\d\.]/g,"").split(".")[0]:r},trim:function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},k={rgx:function(e,i){var s,t,n,o,a,l,d=0;while(d<i.length&&!a){var m=i[d],f=i[d+1];s=t=0;while(s<m.length&&!a)if(a=m[s++].exec(e),a)for(n=0;n<f.length;n++)l=a[++t],o=f[n],typeof o===u&&o.length>0?2==o.length?typeof o[1]==c?this[o[0]]=o[1].call(this,l):this[o[0]]=o[1]:3==o.length?typeof o[1]!==c||o[1].exec&&o[1].test?this[o[0]]=l?l.replace(o[1],o[2]):r:this[o[0]]=l?o[1].call(this,l,o[2]):r:4==o.length&&(this[o[0]]=l?o[3].call(this,l.replace(o[1],o[2])):r):this[o]=l||r;d+=2}},str:function(e,i){for(var s in i)if(typeof i[s]===u&&i[s].length>0){for(var t=0;t<i[s].length;t++)if(D.has(i[s][t],e))return s===l?r:s}else if(D.has(i[s],e))return s===l?r:s;return e}},A={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},L={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[p,v],[/(opios)[\/\s]+([\w\.]+)/i],[[p,"Opera Mini"],v],[/\s(opr)\/([\w\.]+)/i],[[p,"Opera"],v],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]*)/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark)\/([\w\.-]+)/i],[p,v],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[p,"IE"],v],[/(edge|edgios|edgea)\/((\d+)?[\w\.]+)/i],[[p,"Edge"],v],[/(yabrowser)\/([\w\.]+)/i],[[p,"Yandex"],v],[/(puffin)\/([\w\.]+)/i],[[p,"Puffin"],v],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[p,"UCBrowser"],v],[/(comodo_dragon)\/([\w\.]+)/i],[[p,/_/g," "],v],[/(micromessenger)\/([\w\.]+)/i],[[p,"WeChat"],v],[/(qqbrowserlite)\/([\w\.]+)/i],[p,v],[/(QQ)\/([\d\.]+)/i],[p,v],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[p,v],[/(BIDUBrowser)[\/\s]?([\w\.]+)/i],[p,v],[/(2345Explorer)[\/\s]?([\w\.]+)/i],[p,v],[/(MetaSr)[\/\s]?([\w\.]+)/i],[p],[/(LBBROWSER)/i],[p],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[v,[p,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[v,[p,"Facebook"]],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[v,[p,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[p,/(.+)/,"$1 WebView"],v],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[p,/(.+(?:g|us))(.+)/,"$1 $2"],v],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[v,[p,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[p,v],[/(dolfin)\/([\w\.]+)/i],[[p,"Dolphin"],v],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[p,"Chrome"],v],[/(coast)\/([\w\.]+)/i],[[p,"Opera Coast"],v],[/fxios\/([\w\.-]+)/i],[v,[p,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[v,[p,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[v,p],[/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[[p,"GSA"],v],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[p,[v,k.str,A.browser.oldsafari.version]],[/(konqueror)\/([\w\.]+)/i,/(webkit|khtml)\/([\w\.]+)/i],[p,v],[/(navigator|netscape)\/([\w\.-]+)/i],[[p,"Netscape"],v],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[p,v]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[g,"amd64"]],[/(ia32(?=;))/i],[[g,D.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[g,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[g,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[g,/ower/,"",D.lowerize]],[/(sun4\w)[;\)]/i],[[g,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[g,D.lowerize]]],device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],[w,h,[b,x]],[/applecoremedia\/[\w\.]+ \((ipad)/],[w,[h,"Apple"],[b,x]],[/(apple\s{0,1}tv)/i],[[w,"Apple TV"],[h,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[h,w,[b,x]],[/(kf[A-z]+)\sbuild\/.+silk\//i],[w,[h,"Amazon"],[b,x]],[/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],[[w,k.str,A.device.amazon.model],[h,"Amazon"],[b,S]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[w,h,[b,S]],[/\((ip[honed|\s\w*]+);/i],[w,[h,"Apple"],[b,S]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[h,w,[b,S]],[/\(bb10;\s(\w+)/i],[w,[h,"BlackBerry"],[b,S]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],[w,[h,"Asus"],[b,x]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[h,"Sony"],[w,"Xperia Tablet"],[b,x]],[/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i],[w,[h,"Sony"],[b,S]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[h,w,[b,y]],[/android.+;\s(shield)\sbuild/i],[w,[h,"Nvidia"],[b,y]],[/(playstation\s[34portablevi]+)/i],[w,[h,"Sony"],[b,y]],[/(sprint\s(\w+))/i],[[h,k.str,A.device.sprint.vendor],[w,k.str,A.device.sprint.model],[b,S]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],[h,w,[b,x]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[h,[w,/_/g," "],[b,S]],[/(nexus\s9)/i],[w,[h,"HTC"],[b,x]],[/d\/huawei([\w\s-]+)[;\)]/i,/(nexus\s6p)/i],[w,[h,"Huawei"],[b,S]],[/(microsoft);\s(lumia[\s\w]+)/i],[h,w,[b,S]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[w,[h,"Microsoft"],[b,y]],[/(kin\.[onetw]{3})/i],[[w,/\./g," "],[h,"Microsoft"],[b,S]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w*)/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[w,[h,"Motorola"],[b,S]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[w,[h,"Motorola"],[b,x]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[h,D.trim],[w,D.trim],[b,O]],[/hbbtv.+maple;(\d+)/i],[[w,/^/,"SmartTV"],[h,"Samsung"],[b,O]],[/\(dtv[\);].+(aquos)/i],[w,[h,"Sharp"],[b,O]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[h,"Samsung"],w,[b,x]],[/smart-tv.+(samsung)/i],[h,[b,O],w],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,/sec-((sgh\w+))/i],[[h,"Samsung"],w,[b,S]],[/sie-(\w*)/i],[w,[h,"Siemens"],[b,S]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]*)/i],[[h,"Nokia"],w,[b,S]],[/android\s3\.[\s\w;-]{10}(a\d{3})/i],[w,[h,"Acer"],[b,x]],[/android.+([vl]k\-?\d{3})\s+build/i],[w,[h,"LG"],[b,x]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[h,"LG"],w,[b,x]],[/(lg) netcast\.tv/i],[h,w,[b,O]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w*)/i,/android.+lg(\-?[\d\w]+)\s+build/i],[w,[h,"LG"],[b,S]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[w,[h,"Lenovo"],[b,x]],[/linux;.+((jolla));/i],[h,w,[b,S]],[/((pebble))app\/[\d\.]+\s/i],[h,w,[b,E]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[h,w,[b,S]],[/crkey/i],[[w,"Chromecast"],[h,"Google"]],[/android.+;\s(glass)\s\d/i],[w,[h,"Google"],[b,E]],[/android.+;\s(pixel c)\s/i],[w,[h,"Google"],[b,x]],[/android.+;\s(pixel xl|pixel)\s/i],[w,[h,"Google"],[b,S]],[/android.+;\s(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,/android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],[[w,/_/g," "],[h,"Xiaomi"],[b,S]],[/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],[[w,/_/g," "],[h,"Xiaomi"],[b,x]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[w,[h,"Meizu"],[b,x]],[/android.+a000(1)\s+build/i,/android.+oneplus\s(a\d{4})\s+build/i],[w,[h,"OnePlus"],[b,S]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[w,[h,"RCA"],[b,x]],[/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],[w,[h,"Dell"],[b,x]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[w,[h,"Verizon"],[b,x]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],[[h,"Barnes & Noble"],w,[b,x]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[w,[h,"NuVision"],[b,x]],[/android.+;\s(k88)\sbuild/i],[w,[h,"ZTE"],[b,x]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[w,[h,"Swiss"],[b,S]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[w,[h,"Swiss"],[b,x]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[w,[h,"Zeki"],[b,x]],[/(android).+[;\/]\s+([YR]\d{2})\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],[[h,"Dragon Touch"],w,[b,x]],[/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],[w,[h,"Insignia"],[b,x]],[/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],[w,[h,"NextBook"],[b,x]],[/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[h,"Voice"],w,[b,S]],[/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],[[h,"LvTel"],w,[b,S]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[w,[h,"Envizen"],[b,x]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],[h,w,[b,x]],[/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],[w,[h,"MachSpeed"],[b,x]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[h,w,[b,x]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[w,[h,"Rotor"],[b,x]],[/android.+(KS(.+))\s+build/i],[w,[h,"Amazon"],[b,x]],[/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],[h,w,[b,x]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[b,D.lowerize],h,w],[/(android[\w\.\s\-]{0,9});.+build/i],[w,[h,"Generic"]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[v,[p,"EdgeHTML"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[p,v],[/rv\:([\w\.]{1,9}).+(gecko)/i],[v,p]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[p,v],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[p,[v,k.str,A.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[p,"Windows"],[v,k.str,A.os.windows.version]],[/\((bb)(10);/i],[[p,"BlackBerry"],v],[/(blackberry)\w*\/?([\w\.]*)/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]*)/i,/linux;.+(sailfish);/i],[p,v],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],[[p,"Symbian"],v],[/\((series40);/i],[p],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[p,"Firefox OS"],v],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i],[p,v],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[p,"Chromium OS"],v],[/(sunos)\s?([\w\.\d]*)/i],[[p,"Solaris"],v],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],[p,v],[/(haiku)\s(\w+)/i],[p,v],[/cfnetwork\/.+darwin/i,/ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[v,/_/g,"."],[p,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)/i],[[p,"Mac OS"],[v,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,/(unix)\s?([\w\.]*)/i],[p,v]]},V=function(e,i){if("object"===typeof e&&(i=e,e=r),!(this instanceof V))return new V(e,i).getResult();var s=e||(n&&n.navigator&&n.navigator.userAgent?n.navigator.userAgent:a),t=i?D.extend(L,i):L;return this.getBrowser=function(){var e={name:r,version:r};return k.rgx.call(e,s,t.browser),e.major=D.major(e.version),e},this.getCPU=function(){var e={architecture:r};return k.rgx.call(e,s,t.cpu),e},this.getDevice=function(){var e={vendor:r,model:r,type:r};return k.rgx.call(e,s,t.device),e},this.getEngine=function(){var e={name:r,version:r};return k.rgx.call(e,s,t.engine),e},this.getOS=function(){var e={name:r,version:r};return k.rgx.call(e,s,t.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return s},this.setUA=function(e){return s=e,this},this};V.VERSION=o,V.BROWSER={NAME:p,MAJOR:f,VERSION:v},V.CPU={ARCHITECTURE:g},V.DEVICE={MODEL:w,VENDOR:h,TYPE:b,CONSOLE:y,MOBILE:S,SMARTTV:O,TABLET:x,WEARABLE:E,EMBEDDED:T},V.ENGINE={NAME:p,VERSION:v},V.OS={NAME:p,VERSION:v},typeof i!==d?(typeof e!==d&&e.exports&&(i=e.exports=V),i.UAParser=V):"function"===c&&s(2)?(t=function(){return V}.call(i,s,i,e),t===r||(e.exports=t)):n&&(n.UAParser=V);var _=n&&(n.jQuery||n.Zepto);if(typeof _!==d){var C=new V;_.ua=C.getResult(),_.ua.get=function(){return C.getUA()},_.ua.set=function(e){C.setUA(e);var i=C.getResult();for(var s in i)_.ua[s]=i[s]}}})("object"===typeof window?window:this)},function(e,i){(function(i){e.exports=i}).call(i,{})},function(e,i,s){"use strict";var t={MOBILE:"mobile",TABLET:"tablet",SMART_TV:"smarttv",CONSOLE:"console",WEARABLE:"wearable",BROWSER:void 0},n={CHROME:"Chrome",FIREFOX:"Firefox",OPERA:"Opera",YANDEX:"Yandex",SAFARI:"Safari",INTERNET_EXPLORER:"Internet Explorer",EDGE:"Edge",CHROMIUM:"Chromium",IE:"IE",MOBILE_SAFARI:"Mobile Safari"},r={IOS:"iOS",ANDROID:"Android",WINDOWS_PHONE:"Windows Phone"},o={isMobile:!1,isTablet:!1,isBrowser:!1,isSmartTV:!1,isConsole:!1,isWearable:!1};e.exports={BROWSER_TYPES:n,DEVICE_TYPES:t,OS_TYPES:r,defaultData:o}}])},a2b0:function(e,i,s){"use strict";var t=s("eea6"),n=s.n(t);n.a},c19a:function(e,i,s){},eea6:function(e,i,s){},eeb1:function(e,i,s){"use strict";var t=s("c19a"),n=s.n(t);n.a}}]);
//# sourceMappingURL=TimeSlot.7477fddd.js.map