(function(t){function e(e){for(var n,r,o=e[0],c=e[1],u=e[2],l=0,p=[];l<o.length;l++)r=o[l],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&p.push(s[r][0]),s[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(n=!1)}n&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},s={app:0},i=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/covid-tracker/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var d=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"127f":function(t,e,a){"use strict";var n=a("30f7"),s=a.n(n);s.a},"21d3":function(t,e,a){"use strict";var n=a("2c8f"),s=a.n(n);s.a},"2c8f":function(t,e,a){},"30f7":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t.error?a("div",[t._v(" Error ")]):t.loading?a("div",[t._m(0)]):a("div",[a("h2",[t._v("In the USA,")]),a("stats"),a("corona-bouncing")],1),a("div",{staticClass:"updated"},[t._v("Updated "+t._s(t.lastModified))])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("h1",[t._v("Loading...")])])}],r=a("5530"),o=a("2f62"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"stats"},[a("div",{staticClass:"stat-node"},[a("div",{staticClass:"title"},[a("h1",{staticClass:"title-text"},[t._v(" There have been"),a("br"),a("span",{staticClass:"cases"},[t._v(t._s(t.formatStat(t.positive)))]),a("br"),t._v(" fucking cases of coronavirus ")]),a("span",{staticClass:"change"},[a("i",{staticClass:"material-icons md"},[t._v("arrow_upward")]),t._v(" "+t._s(t.percentageIncrease(t.positive,t.positiveIncrease))+"% since you started watching Tiger King")])])]),a("div",{staticClass:"stat-node"},[a("div",{staticClass:"stat"},[a("span",{staticClass:"num"},[t._v(t._s(t.formatStat(t.death)))]),t._v(" Deaths ")]),a("span",{staticClass:"change"},[a("i",{staticClass:"material-icons md"},[t._v("arrow_upward")]),t._v(" "+t._s(t.percentageIncrease(t.death,t.deathIncrease))+"% since you last touched your face")])]),a("div",{staticClass:"stat-node last"},[a("div",{staticClass:"stat"},[a("span",{staticClass:"num"},[t._v(t._s(t.formatStat(t.hospitalized)))]),t._v(" Hospitalizations ")]),a("span",{staticClass:"change"},[a("i",{staticClass:"material-icons md"},[t._v("arrow_upward")]),t._v(" "+t._s(t.percentageIncrease(t.hospitalized,t.hospitalizedIncrease))+"% since you last washed your hands ")])])])},u=[],d=(a("b680"),{name:"Stats",computed:Object(r["a"])({},Object(o["b"])(["updating","positive","hospitalized","death","lastModified","hospitalizedIncrease","deathIncrease","positiveIncrease"])),methods:{formatStat:function(t){return"number"===typeof t?t.toLocaleString():t},percentageIncrease:function(t,e){return(e/(t-e)*100).toFixed(0)}}}),l=d,p=(a("21d3"),a("2877")),f=Object(p["a"])(l,c,u,!1,null,"67b2fe28",null),v=f.exports,h=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"whole-app-container"},[n("div",{staticClass:"x"},[n("img",{staticClass:"y",attrs:{src:a("680b")}})])])}],b={name:"CoronaBouncing"},m=b,_=(a("127f"),Object(p["a"])(m,h,g,!1,null,"2400cbbb",null)),y=_.exports,C={name:"App",components:{Stats:v,CoronaBouncing:y},mounted:function(){var t=this;this.$store.dispatch("getLatest",{initialLoad:!0}),setInterval((function(){t.$store.dispatch("getLatest")}),3e5)},computed:Object(r["a"])({},Object(o["b"])(["loading","error","lastModified"]))},w=C,I=(a("5c0b"),Object(p["a"])(w,s,i,!1,null,null,null)),S=I.exports,O=(a("96cf"),a("1da1")),j=a("bc3a"),x=a.n(j),L={getLatest:function(){return x.a.get("https://covidtracking.com/api/us")},getTodaysStats:function(){return x.a.get("https://covidtracking.com/api/us/daily")}},z=a("b166");n["a"].use(o["a"]);var k=new o["a"].Store({state:{loading:!0,updating:!1,error:!1,positive:0,hospitalized:0,death:0,lastModified:null,hospitalizedIncrease:0,deathIncrease:0,positiveIncrease:0},actions:{getLatest:function(t){var e=arguments;return Object(O["a"])(regeneratorRuntime.mark((function a(){var n,s,i,r,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=t.commit,s=e.length>1&&void 0!==e[1]?e[1]:{initialLoad:!1},i=s.initialLoad,a.prev=2,i||(n("setUpdating",!0),n("setError",!1)),a.next=6,L.getLatest();case 6:return r=a.sent,a.next=9,L.getTodaysStats();case 9:o=a.sent,n("setStats",r.data.shift()),n("setTodaysStats",o.data.shift()),a.next=17;break;case 14:a.prev=14,a.t0=a["catch"](2),n("setError",!0);case 17:return a.prev=17,n("setLoading",!1),n("setUpdating",!1),a.finish(17);case 21:case"end":return a.stop()}}),a,null,[[2,14,17,21]])})))()}},mutations:{setUpdating:function(t,e){t.updating=e},setLoading:function(t,e){t.loading=e},setStats:function(t,e){var a=e.positive,n=e.hospitalized,s=e.death,i=e.lastModified;t.positive=a,t.hospitalized=n,t.death=s,t.lastModified=M(i),document.title="".concat(a?a.toLocaleString():""," Fucking Coronavirus Cases")},setTodaysStats:function(t,e){var a=e.hospitalizedIncrease,n=e.deathIncrease,s=e.positiveIncrease;t.hospitalizedIncrease=a,t.deathIncrease=n,t.positiveIncrease=s},setError:function(t,e){t.error=e}}});function M(t){return Object(z["a"])(new Date(t),"Pp")}n["a"].config.productionTip=!1,new n["a"]({store:k,render:function(t){return t(S)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var n=a("9c0c"),s=a.n(n);s.a},"680b":function(t,e,a){t.exports=a.p+"img/covid.f6e0cacc.png"},"9c0c":function(t,e,a){}});
//# sourceMappingURL=app.2f4e8e36.js.map