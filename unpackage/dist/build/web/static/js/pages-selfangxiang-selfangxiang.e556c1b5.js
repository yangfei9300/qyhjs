(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-selfangxiang-selfangxiang"],{2629:function(t,i,e){"use strict";e.r(i);var n=e("ca18"),a=e("7b29");for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(o);e("f2a1");var r=e("828b"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"35709861",null,!1,n["a"],void 0);i["default"]=c.exports},"7b29":function(t,i,e){"use strict";e.r(i);var n=e("a703"),a=e.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=a.a},a703:function(t,i,e){"use strict";e("6a54"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{title:"Hello",screenHeightPx:0,img1:0,img2:0,startTime:0,nowTime:0,miaoshu:30,tiIndex:1,fangxiang:[]}},onLoad:function(){var t=uni.getSystemInfoSync(),i=t.screenWidth,e=t.screenHeight;console.log("屏幕的原始高");var n=750/i,a=n*e;this.screenHeightPx=a,console.log(n,i,e,a),this.getFangxaing()},methods:{getFangxaing:function(){var t=this;this.$axios.axios("POST",this.$paths.getXQuestion,{}).then((function(i){1==i.code?t.fangxiang=i.data:t.$tools.showToast(i.info)})).catch((function(t){console.log("错误回调",t)}))},toRead:function(t){uni.setStorageSync("Fx",t),uni.navigateTo({url:"/pages/xych/xych"})},imgload:function(t,i){console.log("阿萨德",t,i),1==i&&(this.img1=t.detail.height/2),2==i&&(this.img2=t.detail.height/2),this.img1>0&&this.img2>0&&(console.log("默认高",this.screenHeightPx),console.log("img1",this.img1),console.log("img2",this.img2))}}};i.default=n},af46:function(t,i,e){var n=e("c86c");i=n(!1),i.push([t.i,"uni-page-body[data-v-35709861]{background-image:url(/static/111.jpg);background-size:100% 100%}body.?%PAGE?%[data-v-35709861]{background-image:url(/static/111.jpg);background-size:100% 100%}.viewbig[data-v-35709861]{width:%?750?%;height:100vh}.viewcenter[data-v-35709861]{width:80%;background-color:#fff;padding:%?50?%}.cenbterbg[data-v-35709861]{background-image:url(/static/centerlogin.jpg);background-size:100% 100%}.inputview[data-v-35709861]{border:1px solid #c9c9c9;width:%?650?%;padding:%?25?% %?25?%;border-radius:%?15?%}.btns[data-v-35709861]{\r\n\t/* background-color:     #E17535; */background-color:#e7942e;color:#fff;height:%?100?%;width:%?650?%;border-radius:%?15?%;text-align:center;line-height:%?100?%}.textawa[data-v-35709861]{border:1px solid #c9c9c9;padding:%?25?% %?25?%;border-radius:%?15?%;width:%?690?%}.btns1[data-v-35709861]{\r\n\t/* background-color:     #E17535; */\r\n\t/* background-color:#E7942E; */color:#fff;\r\n\t/* height: 70rpx; */\r\n\t/* width: 250rpx; */border-radius:%?15?%;text-align:center;line-height:%?70?%;color:#e7942e;font-weight:700}.type1[data-v-35709861]{border:%?1?% solid #e7942e;width:30vw;text-align:center;line-height:%?40?%;font-weight:700;color:#e7942e;border-radius:%?15?%;box-shadow:#e7942e 0 0 %?1?% %?1?%;margin-bottom:%?20?%;padding:%?0?% %?20?%;font-size:%?10?%}",""]),t.exports=i},ca18:function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){}));var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("v-uni-view",{staticClass:"viewbig colonn center_center"},[e("v-uni-view",{staticClass:" colonn center_center",staticStyle:{width:"80vw"}},[e("v-uni-scroll-view",{staticStyle:{height:"70vh"},attrs:{"scroll-y":!0}},[e("v-uni-view",{staticStyle:{height:"5vh"}}),e("v-uni-view",{staticClass:"roww center_center"},[e("v-uni-view",{staticClass:"fs-20"},[t._v("选择方向")])],1),e("v-uni-view",{staticStyle:{height:"5vh"}}),e("v-uni-view",{staticClass:"huanhang rowsa"},t._l(t.fangxiang,(function(i,n){return e("v-uni-view",{staticClass:"type1 roww center_center ",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.toRead(i.dt_id)}}},[e("v-uni-view",{staticClass:"w-20"}),e("v-uni-view",[t._v(t._s(i.title))]),e("v-uni-view",{staticClass:"allline"}),e("v-uni-view",{staticStyle:{color:"red"}},[t._v("去评分")]),e("v-uni-view",{staticClass:"w-20"})],1)})),1),e("v-uni-view",{staticStyle:{height:"20rpx"}})],1)],1)],1)],1)},a=[]},d49d:function(t,i,e){var n=e("af46");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("967d").default;a("30ea23b4",n,!0,{sourceMap:!1,shadowMode:!1})},f2a1:function(t,i,e){"use strict";var n=e("d49d"),a=e.n(n);a.a}}]);