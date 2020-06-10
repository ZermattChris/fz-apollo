(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["TimeSlot"],{2216:function(t,i,a){"use strict";var e=a("d941"),s=a.n(e);s.a},"420b":function(t,i,a){},"543b":function(t,i,a){"use strict";a.r(i);var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"timeSlot"},[a("PageHeader",{attrs:{title:t.timeListerHeaderStr}},[t._v(" [TODO:awkward] The time of day can affect how your flight is for your "),a("span",{staticClass:"hilite-text"},[t._v("Group of "+t._s(t.usersGroupSize))]),t._v(" — there are many variables, including which flight, time of year, weather, confidence and your fitness level. "),a("br"),a("br"),t._v(" How to choose the right time for you: "),a("a",{attrs:{href:"#TODO"}},[a("span",{staticClass:"text-no-wrap"},[t._v("Flight Guidelines")])])]),a("div",{staticClass:"steps-controls"},[a("TimeListGroup")],1),a("div",{staticClass:"vSpacerForAbsolute"})],1)},s=[],n=a("07a4"),r=a("f801"),o=a("36ad"),l=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-item-group",{attrs:{mandatory:""}},[a("v-container",{staticClass:"pa-0"},[a("v-row",{staticClass:"myRow"},t._l(t.tempDatesList,(function(i){return a("v-col",{key:i,staticClass:"myCol",attrs:{cols:"12",md:"4",transition:"slide-x-transition"}},[a("TimeListX",[t._v(" "+t._s(i)+" ")])],1)})),1),a("v-btn",{attrs:{color:"primary",dark:"",small:"",absolute:"",bottom:"",left:"",fab:""},on:{click:t.onPrevDay}},[a("v-icon",[t._v("mdi-minus")])],1),a("v-btn",{attrs:{color:"primary",dark:"",small:"",absolute:"",bottom:"",right:"",fab:""},on:{click:t.onNextDay}},[a("v-icon",[t._v("mdi-plus")])],1)],1)],1)},c=[],d=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-sheet",{staticClass:"myDummy d-flex align-center justify-center"},[t._v(" Dummy "),t._t("default")],2)},u=[],m={name:"TimeListX",data:function(){return{}}},f=m,v=(a("2216"),a("2877")),p=a("6544"),h=a.n(p),b=a("8dd9"),y=Object(v["a"])(f,d,u,!1,null,"5392bc26",null),g=y.exports;h()(y,{VSheet:b["a"]});var D={name:"TimeListGroup",components:{TimeListX:g},props:{},data:function(){return{tempDatesList:[1e3,1001,1002]}},methods:{onPrevDay:function(){console.log("Load Previous day into TimeListGroup"),this.fetchADay(-1)},onNextDay:function(){console.log("Load Next day into TimeListGroup"),this.fetchADay(1)},fetchADay:function(t){var i=null;t<0?(i=this.tempDatesList[0]-1,this.tempDatesList.pop(),this.tempDatesList.unshift(i)):t>0&&(i=this.tempDatesList[this.tempDatesList.length-1]+1,this.tempDatesList.shift(),this.tempDatesList.push(i))}}},L=D,_=(a("cca8"),a("8336")),w=a("62ad"),C=(a("99af"),a("4de4"),a("b64b"),a("2ca0"),a("20f6"),a("4b85"),a("a15b"),a("498a"),a("2b0e"));function x(t){return C["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(i,a){var e=a.props,s=a.data,n=a.children;s.staticClass="".concat(t," ").concat(s.staticClass||"").trim();var r=s.attrs;if(r){s.attrs={};var o=Object.keys(r).filter((function(t){if("slot"===t)return!1;var i=r[t];return t.startsWith("data-")?(s.attrs[t]=i,!1):i||"string"===typeof i}));o.length&&(s.staticClass+=" ".concat(o.join(" ")))}return e.id&&(s.domProps=s.domProps||{},s.domProps.id=e.id),i(e.tag,s,n)}})}var S=a("d9f7"),T=x("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,i){var a,e=i.props,s=i.data,n=i.children,r=s.attrs;return r&&(s.attrs={},a=Object.keys(r).filter((function(t){if("slot"===t)return!1;var i=r[t];return t.startsWith("data-")?(s.attrs[t]=i,!1):i||"string"===typeof i}))),e.id&&(s.domProps=s.domProps||{},s.domProps.id=e.id),t(e.tag,Object(S["a"])(s,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(a||[])}),n)}}),P=a("132d"),O=a("604c"),k=a("0fd9"),G=Object(v["a"])(L,l,c,!1,null,"2666179a",null),j=G.exports;h()(G,{VBtn:_["a"],VCol:w["a"],VContainer:T,VIcon:P["a"],VItemGroup:O["b"],VRow:k["a"]});var V={name:"TimeSlot",components:{PageHeader:o["a"],TimeListGroup:j},data:function(){return{}},computed:{dates:function(){return r},userFlightDate:function(){return n["b"].flightDate},usersGroupSize:function(){return n["b"].nrPeople},timeListerHeaderStr:function(){var t=n["b"].selectedFlight,i=n["b"].flightsList[t];return"2. Flight Time for: <span class='hilite-text text-no-wrap'>"+i+"</span>"}},methods:{setUserDate:function(t){return this.userTimeSlot=t,t}},mounted:function(){}},A=V,F=(a("aeb4"),Object(v["a"])(A,e,s,!1,null,"1dd8bec2",null));i["default"]=F.exports},8695:function(t,i,a){},aeb4:function(t,i,a){"use strict";var e=a("420b"),s=a.n(e);s.a},cca8:function(t,i,a){"use strict";var e=a("8695"),s=a.n(e);s.a},d941:function(t,i,a){},f801:function(t){t.exports=JSON.parse('[{"id":"1000","date":"2020-06-17","slots":[{"id":1,"time":"08:30","avail":6},{"id":2,"time":"10:15","avail":1},{"id":3,"time":"11:45","avail":0},{"id":4,"time":"13:15","avail":4},{"id":5,"time":"14:45","avail":2},{"id":6,"time":"16:15","avail":5},{"id":7,"time":"17:00","avail":6},{"id":8,"time":"19:00","avail":2}]},{"id":"1001","date":"2020-06-18","slots":[{"id":1,"time":"08:30","avail":6},{"id":2,"time":"10:15","avail":1},{"id":3,"time":"11:45","avail":0},{"id":4,"time":"13:15","avail":4},{"id":5,"time":"14:45","avail":2},{"id":6,"time":"16:15","avail":5},{"id":7,"time":"17:00","avail":6},{"id":8,"time":"19:00","avail":2}]},{"id":"1002","date":"2020-06-19","slots":[{"id":1,"time":"08:30","avail":6},{"id":2,"time":"10:15","avail":1},{"id":3,"time":"11:45","avail":0},{"id":4,"time":"13:15","avail":4},{"id":5,"time":"14:45","avail":2},{"id":6,"time":"16:15","avail":5},{"id":7,"time":"17:00","avail":6},{"id":8,"time":"19:00","avail":2}]}]')}}]);
//# sourceMappingURL=TimeSlot.768b1397.js.map