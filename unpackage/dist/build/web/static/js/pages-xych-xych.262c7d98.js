(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-xych-xych"],{"25ef":function(e,t,s){"use strict";s.r(t);var n=s("9bf8"),i=s("4649");for(var a in i)["default"].indexOf(a)<0&&function(e){s.d(t,e,(function(){return i[e]}))}(a);s("9f10");var o=s("828b"),c=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"6b03bf39",null,!1,n["a"],void 0);t["default"]=c.exports},4649:function(e,t,s){"use strict";s.r(t);var n=s("7271"),i=s.n(n);for(var a in n)["default"].indexOf(a)<0&&function(e){s.d(t,e,(function(){return n[e]}))}(a);t["default"]=i.a},5146:function(e,t,s){var n=s("c86c");t=n(!1),t.push([e.i,"uni-page-body[data-v-6b03bf39]{background-image:url(/static/111.jpg);background-size:100% 100%}body.?%PAGE?%[data-v-6b03bf39]{background-image:url(/static/111.jpg);background-size:100% 100%}.viewbig[data-v-6b03bf39]{width:%?750?%;height:100vh}.viewcenter[data-v-6b03bf39]{width:80%;padding:%?50?%}.textawa[data-v-6b03bf39]{border:1px solid #c9c9c9;border-radius:%?15?%;width:70vw;height:%?90?%;padding:%?0?% %?40?%;font-size:%?40?%;line-height:%?90?%}.btns1[data-v-6b03bf39]{\r\n\t/* background-color:     #E17535; */background-color:#e7942e;color:#fff;\r\n\t/* height: 70rpx; */\r\n\t/* width: 250rpx; */border-radius:%?15?%;text-align:center;line-height:%?90?%;font-size:%?40?%;color:#fff;font-weight:700;width:70vw;line-height:%?90?%}",""]),e.exports=t},7271:function(e,t,s){"use strict";s("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,s("e966"),s("e838"),s("d4b5");var n={data:function(){return{title:"Hello",screenHeightPx:0,img1:0,img2:0,startTime:0,nowTime:0,miaoshu:30,tiIndex:1,numberInput:"",formattedNumber:"",fens:{fen1:"",fen2:"",fen3:"",fen4:"",fen5:"",fen6:""},isFenSub:[!0,!0,!0,!0,!0,!0],form:{score_str:"",score:"",b1score_str:"",b1score:"",uuid:""},fenBz:[20,10,25,25,10,10],heTishi:[!0,!0,!0,!0,!0,!0],timeout:null}},onLoad:function(){var e=uni.getSystemInfoSync(),t=e.screenWidth,s=e.screenHeight;console.log("屏幕的原始高");var n=750/t,i=n*s;this.screenHeightPx=i},onUnload:function(){this.timeout&&clearTimeout(this.timeout)},methods:{getLishidafen:function(){var e=this,t={uuid:uni.getStorageSync("userId"),user_id:uni.getStorageSync("dafenUser").user_id};this.$axios.axios("POST",this.$paths.Api20241023dtLogInfo,t).then((function(t){1==t.code?(e.fens.fen1=parseInt(t.data.score_arr[0]),e.fens.fen2=parseInt(t.data.score_arr[1]),e.fens.fen3=parseInt(t.data.score_arr[2]),e.fens.fen4=parseInt(t.data.score_arr[3]),e.fens.fen5=parseInt(t.data.score_arr[4]),e.fens.fen6=parseInt(t.data.score_arr[5])):e.$tools.showToast(t.info)})).catch((function(e){console.log("错误回调",e)}))},heTishiSUb:function(){""!=this.fens.fen1&&(this.fens.fen1<25?this.heTishi[0]=!1:this.heTishi[0]=!0),this.$forceUpdate()},isFenSubChange:function(e,t){var s=e.detail.value,n=[20,10,25,25,10,10];s=parseFloat(s),console.log("--",n[t],s),this.heTishi[t]=!(n[t]<s)},toSubmit:function(){var e=this;if(!this.isSubmit())return!1;var t=this.fens;t.fen1=parseFloat(t.fen1).toFixed(1),t.fen2=parseFloat(t.fen2).toFixed(1),t.fen3=parseFloat(t.fen3).toFixed(1),t.fen4=parseFloat(t.fen4).toFixed(1),t.fen5=parseFloat(t.fen5).toFixed(1),t.fen6=parseFloat(t.fen6).toFixed(1);var s=parseFloat(t.fen1)+parseFloat(t.fen2)+parseFloat(t.fen3)+parseFloat(t.fen4)+parseFloat(t.fen5)+parseFloat(t.fen6),n={score_str:t.fen1+","+t.fen2+","+t.fen3+","+t.fen4+","+t.fen5+","+t.fen6,score:s.toFixed(1),dt_id:uni.getStorageSync("Fx"),uuid:uni.getStorageSync("userId")};console.log("===",JSON.stringify(n)),this.$axios.axios("POST",this.$paths.markPut2,n).then((function(t){console.log("--",t),1==t.code?(console.log("阿斯顿",t),e.$tools.showToast("提交成功"),e.timeout=setTimeout((function(e){uni.navigateBack({delta:1})}),3e3),uni.showModal({title:"提示",content:"打分完成!",showCancel:!1,success:function(e){e.confirm&&uni.navigateBack({delta:1})}})):e.$tools.showToast(t.info)})).catch((function(e){console.log("错误回调",e)}))},isSubmit:function(){if(""==this.fens.fen1||""==this.fens.fen2||""==this.fens.fen3||""==this.fens.fen4||""==this.fens.fen5||""==this.fens.fen6)return this.$tools.showToast("有遗漏未打分，提交失败"),!1;for(var e=0,t=0;t<this.heTishi.length;t++)this.heTishi[t]||(e+=1);return!(e>0)||(this.$tools.showToast("有部分打分不规范，提交失败"),!1)},checkPrice:function(e){var t=this,s=e.detail.value;this.$nextTick((function(){t.numberInput=s}))},nextQuestion:function(){if(10==this.tiIndex)return this.tiIndex=11,this.$tools.showToast("打分完成"),setTimeout((function(e){uni.redirectTo({url:"/pages/selFangxiang/selFangxiang"})}),1e3),!1;this.tiIndex<10&&(this.tiIndex=this.tiIndex+1)},imgload:function(e,t){1==t&&(this.img1=e.detail.height/2),2==t&&(this.img2=e.detail.height/2),this.img1>0&&this.img2>0&&(console.log("默认高",this.screenHeightPx),console.log("img1",this.img1),console.log("img2",this.img2))}}};t.default=n},"92cf":function(e,t,s){var n=s("5146");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=s("967d").default;i("c76e64e6",n,!0,{sourceMap:!1,shadowMode:!1})},"9bf8":function(e,t,s){"use strict";s.d(t,"b",(function(){return n})),s.d(t,"c",(function(){return i})),s.d(t,"a",(function(){}));var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-uni-view",[s("v-uni-view",{staticClass:"viewbig colonn center_center"},[s("v-uni-view",{staticClass:"background1 colonn center_center",staticStyle:{width:"80vw","border-radius":"20rpx",height:"70vh",position:"fixed",top:"15vh",left:"10vw"}},[s("v-uni-scroll-view",{staticStyle:{height:"70vh",width:"80vw"},attrs:{"scroll-y":!0}},[s("v-uni-view",{staticClass:"h-10"}),s("v-uni-view",{staticClass:"viewcenter colonn "},[s("v-uni-view",{staticClass:"colonn"},[s("v-uni-view",{staticClass:"colonn "},[s("v-uni-view",{staticClass:"fs-40 "},[e._v("1.重点影像学表现、有价值的临床特征等描述清楚，提供不同于常规诊断的新视角或见解为诊断提供新思路等（20分）")]),s("v-uni-view",{staticClass:"h-20"}),s("v-uni-input",{staticClass:"textawa fs-40",attrs:{type:"number","placeholder-class":"fs-40",placeholder:"最高20分"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.isFenSubChange(t,0)}},model:{value:e.fens.fen1,callback:function(t){e.$set(e.fens,"fen1",t)},expression:"fens.fen1"}}),s("v-uni-view",{staticClass:"h-30"})],1),e.heTishi[0]?e._e():s("v-uni-view",{staticClass:"fs-40",staticStyle:{color:"red"}},[e._v("第1项得分必须小于等于20")]),s("v-uni-view",{staticClass:"h-40"})],1),s("v-uni-view",{staticClass:"colonn"},[s("v-uni-view",{staticClass:"colonn "},[s("v-uni-view",{staticClass:"fs-40 "},[e._v("2.根据影像学资料等给出正确的第-诊断(10分)")]),s("v-uni-view",{staticClass:"h-20"}),s("v-uni-input",{staticClass:"textawa fs-40",attrs:{type:"number","placeholder-class":"fs-40",placeholder:"最高10分"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.isFenSubChange(t,1)}},model:{value:e.fens.fen2,callback:function(t){e.$set(e.fens,"fen2",t)},expression:"fens.fen2"}}),s("v-uni-view",{staticClass:"h-20"})],1),e.heTishi[1]?e._e():s("v-uni-view",{staticClass:"fs-40",staticStyle:{color:"red"}},[e._v("第2项得分必须小于等于10")]),s("v-uni-view",{staticClass:"h-40"})],1),s("v-uni-view",{staticClass:"colonn"},[s("v-uni-view",{staticClass:"colonn "},[s("v-uni-view",{staticClass:"fs-40 "},[e._v("3.思考过程阐述清晰有条理，突出案例重点诊断依据(25分)")]),s("v-uni-view",{staticClass:"h-20"}),s("v-uni-input",{staticClass:"textawa fs-40",attrs:{type:"number","placeholder-class":"fs-40",placeholder:"最高25分"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.isFenSubChange(t,2)}},model:{value:e.fens.fen3,callback:function(t){e.$set(e.fens,"fen3",t)},expression:"fens.fen3"}}),s("v-uni-view",{staticClass:"h-20"})],1),e.heTishi[2]?e._e():s("v-uni-view",{staticClass:"fs-40",staticStyle:{color:"red"}},[e._v("第3项得分必须小于等于25")]),s("v-uni-view",{staticClass:"h-20"})],1),s("v-uni-view",{staticClass:"colonn"},[s("v-uni-view",{staticClass:"colonn "},[s("v-uni-view",{staticClass:"fs-40 "},[e._v("4.对案例分析合理，结构完整，涵盖重要的鉴别诊断(25分)")]),s("v-uni-view",{staticClass:"h-20"}),s("v-uni-input",{staticClass:"textawa fs-40",attrs:{type:"number","placeholder-class":"fs-40",placeholder:"最高25分"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.isFenSubChange(t,3)}},model:{value:e.fens.fen4,callback:function(t){e.$set(e.fens,"fen4",t)},expression:"fens.fen4"}}),s("v-uni-view",{staticClass:"h-20"})],1),e.heTishi[3]?e._e():s("v-uni-view",{staticClass:"fs-40",staticStyle:{color:"red"}},[e._v("第4项得分必须小于等于25")]),s("v-uni-view",{staticClass:"h-20"})],1),s("v-uni-view",{staticClass:"colonn"},[s("v-uni-view",{staticClass:"colonn "},[s("v-uni-view",{staticClass:"fs-40 "},[e._v("5.内容完整，符合案例陈述逻辑(10分)")]),s("v-uni-view",{staticClass:"h-20"}),s("v-uni-input",{staticClass:"textawa fs-40",attrs:{type:"number","placeholder-class":"fs-40",placeholder:"最高10分"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.isFenSubChange(t,4)}},model:{value:e.fens.fen5,callback:function(t){e.$set(e.fens,"fen5",t)},expression:"fens.fen5"}}),s("v-uni-view",{staticClass:"h-20"})],1),e.heTishi[4]?e._e():s("v-uni-view",{staticClass:"fs-40",staticStyle:{color:"red"}},[e._v("第5项得分必须小于等于10")]),s("v-uni-view",{staticClass:"h-20"})],1),s("v-uni-view",{staticClass:"colonn"},[s("v-uni-view",{staticClass:"colonn "},[s("v-uni-view",{staticClass:"fs-40 "},[e._v("6.语速和节奏造中、语言表达流畅、清晰饱满,PPT制作美观、台风得体。(10分)")]),s("v-uni-view",{staticClass:"h-20"}),s("v-uni-input",{staticClass:"textawa fs-40",attrs:{type:"number","placeholder-class":"fs-40",placeholder:"最高10分"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.isFenSubChange(t,5)}},model:{value:e.fens.fen6,callback:function(t){e.$set(e.fens,"fen6",t)},expression:"fens.fen6"}}),s("v-uni-view",{staticClass:"h-20"})],1),e.heTishi[5]?e._e():s("v-uni-view",{staticClass:"fs-40",staticStyle:{color:"red"}},[e._v("第6项得分必须小于等于10")]),s("v-uni-view",{staticClass:"h-20"})],1),s("v-uni-view",{staticClass:"colonn "},[s("v-uni-view",{staticClass:"btns1",on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.toSubmit.apply(void 0,arguments)}}},[e._v("提交")])],1)],1),s("v-uni-view",{staticClass:"h-100"})],1)],1)],1)],1)},i=[]},"9f10":function(e,t,s){"use strict";var n=s("92cf"),i=s.n(n);i.a}}]);