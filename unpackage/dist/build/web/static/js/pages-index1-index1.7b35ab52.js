(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index1-index1"],{"1aa0":function(n,t,i){"use strict";i.d(t,"b",(function(){return e})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){}));var e=function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("v-uni-view",[i("v-uni-view",{staticClass:"colonn center_center",staticStyle:{width:"100vw",height:"100vh","background-image":"url(../../static/index1.png)","background-size":"100% 100%"}},[i("v-uni-view",{staticClass:"roww center_center",staticStyle:{width:"100vw"}},[i("v-uni-view",{staticClass:"btns1",on:{click:function(t){t.stopPropagation(),arguments[0]=t=n.$handleEvent(t),n.tpindex.apply(void 0,arguments)}}},[n._v("立即开始")])],1)],1)],1)},o=[]},"1b29":function(n,t,i){"use strict";i.r(t);var e=i("1aa0"),o=i("380c");for(var a in o)["default"].indexOf(a)<0&&function(n){i.d(t,n,(function(){return o[n]}))}(a);i("a3e7");var r=i("828b"),c=Object(r["a"])(o["default"],e["b"],e["c"],!1,null,"37afafc1",null,!1,e["a"],void 0);t["default"]=c.exports},"1b2a":function(n,t,i){var e=i("6455");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);var o=i("967d").default;o("2560a9d7",e,!0,{sourceMap:!1,shadowMode:!1})},"380c":function(n,t,i){"use strict";i.r(t);var e=i("7b2d"),o=i.n(e);for(var a in e)["default"].indexOf(a)<0&&function(n){i.d(t,n,(function(){return e[n]}))}(a);t["default"]=o.a},6455:function(n,t,i){var e=i("c86c");t=e(!1),t.push([n.i,".btns1[data-v-37afafc1]{background-color:#e7942e;color:#fff;height:%?90?%;width:%?500?%;border-radius:%?15?%;text-align:center;font-size:%?40?%;line-height:%?90?%;position:fixed;bottom:%?300?%;box-shadow:#e7942e %?10?% %?10?% %?10?% %?10?%}",""]),n.exports=t},"7b2d":function(n,t,i){"use strict";i("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("aa9c");var e={data:function(){return{list:[]}},onLoad:function(){var n=this;window.onload=function(t){90===window.orientation||-90===window.orientation?n.list.push("111横屏模式"):(alert("请将设备转为横屏模式以获得最佳体验！"),n.list.push("111竖屏！竖屏"),window.location.reload())},window.addEventListener("orientationchange",(function(t){0===window.orientation?(alert("请将设备转为横屏模式以获得最佳体验！"),n.list.push("222竖屏！竖屏")):90!==window.orientation&&-90!==window.orientation||(n.list.push("222横屏模式"),window.location.reload())}))},onShow:function(){},methods:{tpindex:function(){uni.navigateTo({url:"/pages/index/index"})},xuanz:function(){}}};t.default=e},a3e7:function(n,t,i){"use strict";var e=i("1b2a"),o=i.n(e);o.a}}]);