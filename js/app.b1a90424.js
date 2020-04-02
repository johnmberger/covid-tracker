(function(t){function e(e){for(var n,i,o=e[0],c=e[1],d=e[2],l=0,p=[];l<o.length;l++)i=o[l],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&p.push(s[i][0]),s[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,d||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},s={app:0},r=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var d=0;d<o.length;d++)e(o[d]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"1b3a":function(t,e,a){"use strict";var n=a("39a4"),s=a.n(n);s.a},"39a4":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t.error?a("div",[t._v(" Error ")]):t.loading?a("div",[t._m(0)]):a("div",[t._m(1),a("stats"),a("corona-bouncing")],1),a("div",{staticClass:"updated"},[t._v("Updated "+t._s(t.lastModified))])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("h1",[t._v("Loading...")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("h1",[t._v("Coronavirus in the US")])])}],i=a("5530"),o=a("2f62"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"stats"},[a("div",{staticClass:"stat-node"},[a("div",{staticClass:"stat main"},[a("span",[t._v(t._s(t.formatStat(t.positive)))]),t._v(" Cases ")]),a("span",{staticClass:"change"},[t._v("("),a("i",{staticClass:"material-icons md-18"},[t._v(t._s(t.positiveIncrease>=0?"arrow_upward":"arrow_downward"))]),t._v(" "+t._s(t.formatStat(t.positiveIncrease))+" today)")])]),a("div",{staticClass:"stat-node"},[a("div",{staticClass:"stat"},[a("span",[t._v(t._s(t.formatStat(t.death)))]),t._v(" Deaths ")]),a("span",{staticClass:"change"},[t._v("("),a("i",{staticClass:"material-icons md-18"},[t._v(t._s(t.deathIncrease>=0?"arrow_upward":"arrow_downward"))]),t._v(" "+t._s(t.formatStat(t.deathIncrease))+" today)")])]),a("div",{staticClass:"stat-node"},[a("div",{staticClass:"stat"},[a("span",[t._v(t._s(t.formatStat(t.hospitalized)))]),t._v(" Hospitalizations ")]),a("span",{staticClass:"change"},[t._v("("),a("i",{staticClass:"material-icons md-18"},[t._v(t._s(t.hospitalizedIncrease>=0?"arrow_upward":"arrow_downward"))]),t._v(" "+t._s(t.formatStat(t.hospitalizedIncrease))+" today)")])])])},d=[],u={name:"Stats",computed:Object(i["a"])({},Object(o["b"])(["updating","positive","hospitalized","death","lastModified","hospitalizedIncrease","deathIncrease","positiveIncrease"])),methods:{formatStat:function(t){return"number"===typeof t?t.toLocaleString():t}}},l=u,p=(a("1b3a"),a("2877")),f=Object(p["a"])(l,c,d,!1,null,"30e6f4cc",null),v=f.exports,h=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"whole-app-container"},[n("div",{staticClass:"x"},[n("img",{staticClass:"y",attrs:{src:a("680b")}})])])}],g={name:"CoronaBouncing"},m=g,b=(a("ce9a"),Object(p["a"])(m,h,_,!1,null,"51264b2a",null)),w=b.exports,y={name:"App",components:{Stats:v,CoronaBouncing:w},mounted:function(){var t=this;this.$store.dispatch("getLatest",{initialLoad:!0}),setInterval((function(){t.$store.dispatch("getLatest")}),3e5)},computed:Object(i["a"])({},Object(o["b"])(["loading","error","lastModified"]))},C=y,S=(a("5c0b"),Object(p["a"])(C,s,r,!1,null,null,null)),O=S.exports,I=(a("96cf"),a("1da1")),j=a("bc3a"),x=a.n(j),L={getLatest:function(){return x.a.get("https://covidtracking.com/api/us")},getTodaysStats:function(){return x.a.get("https://covidtracking.com/api/us/daily")}},z=a("b166");n["a"].use(o["a"]);var E=new o["a"].Store({state:{loading:!0,updating:!1,error:!1,positive:0,hospitalized:0,death:0,lastModified:null,hospitalizedIncrease:0,deathIncrease:0,positiveIncrease:0},actions:{getLatest:function(t){var e=arguments;return Object(I["a"])(regeneratorRuntime.mark((function a(){var n,s,r,i,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=t.commit,s=e.length>1&&void 0!==e[1]?e[1]:{initialLoad:!1},r=s.initialLoad,a.prev=2,r||(n("setUpdating",!0),n("setError",!1)),a.next=6,L.getLatest();case 6:return i=a.sent,a.next=9,L.getTodaysStats();case 9:o=a.sent,n("setStats",i.data.shift()),n("setTodaysStats",o.data.shift()),a.next=17;break;case 14:a.prev=14,a.t0=a["catch"](2),n("setError",!0);case 17:return a.prev=17,n("setLoading",!1),n("setUpdating",!1),a.finish(17);case 21:case"end":return a.stop()}}),a,null,[[2,14,17,21]])})))()}},mutations:{setUpdating:function(t,e){t.updating=e},setLoading:function(t,e){t.loading=e},setStats:function(t,e){var a=e.positive,n=e.hospitalized,s=e.death,r=e.lastModified;t.positive=a,t.hospitalized=n,t.death=s,t.lastModified=M(r),document.title="".concat(a?a.toLocaleString():""," Fucking Coronavirus Cases")},setTodaysStats:function(t,e){var a=e.hospitalizedIncrease,n=e.deathIncrease,s=e.positiveIncrease;t.hospitalizedIncrease=a,t.deathIncrease=n,t.positiveIncrease=s},setError:function(t,e){t.error=e}}});function M(t){return Object(z["a"])(new Date(t),"Pp")}n["a"].config.productionTip=!1,new n["a"]({store:E,render:function(t){return t(O)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var n=a("9c0c"),s=a.n(n);s.a},"680b":function(t,e,a){t.exports=a.p+"img/covid.f6e0cacc.png"},"9c0c":function(t,e,a){},ce9a:function(t,e,a){"use strict";var n=a("d4b6"),s=a.n(n);s.a},d4b6:function(t,e,a){}});
//# sourceMappingURL=app.b1a90424.js.map