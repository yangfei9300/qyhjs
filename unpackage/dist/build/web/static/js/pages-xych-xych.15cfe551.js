(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-xych-xych"],{"25ef":function(e,t,i){"use strict";i.r(t);var s=i("fa89"),n=i("4649");for(var a in n)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(a);i("891c");var o=i("828b"),c=Object(o["a"])(n["default"],s["b"],s["c"],!1,null,"28358dfc",null,!1,s["a"],void 0);t["default"]=c.exports},4649:function(e,t,i){"use strict";i.r(t);var s=i("7271"),n=i.n(s);for(var a in s)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return s[e]}))}(a);t["default"]=n.a},7271:function(e,t,i){"use strict";i("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("e966"),i("e838"),i("d4b5");var s={data:function(){return{title:"Hello",screenHeightPx:0,img1:0,img2:0,startTime:0,nowTime:0,miaoshu:30,tiIndex:1,numberInput:"",formattedNumber:"",duiyuans:["江女士1","江女士2","江女士3"],fens:{fen1:"",fen2:"",fen3:"",fen4:"",fen5:""},isFenSub:[!0,!0,!0,!0,!0],form:{score_str:"",score:"",b1score_str:"",b1score:"",uuid:""},fenBz:[25,30,25,15,5],heTishi:[!0,!0,!0,!0,!0]}},onLoad:function(){var e=uni.getSystemInfoSync(),t=e.screenWidth,i=e.screenHeight;console.log("屏幕的原始高");var s=750/t,n=s*i;this.screenHeightPx=n},methods:{getLishidafen:function(){var e=this,t={uuid:uni.getStorageSync("userId"),user_id:uni.getStorageSync("dafenUser").user_id};this.$axios.axios("POST",this.$paths.Api20241023dtLogInfo,t).then((function(t){1==t.code?(e.fens.fen1=parseInt(t.data.score_arr[0]),e.fens.fen2=parseInt(t.data.score_arr[1]),e.fens.fen3=parseInt(t.data.score_arr[2]),e.fens.fen4=parseInt(t.data.score_arr[3]),e.fens.fen5=parseInt(t.data.score_arr[4])):e.$tools.showToast(t.info)})).catch((function(e){console.log("错误回调",e)}))},heTishiSUb:function(){""!=this.fens.fen1&&(this.fens.fen1<25?this.heTishi[0]=!1:this.heTishi[0]=!0),this.$forceUpdate()},isFenSubChange:function(e,t){var i=e.detail.value,s=[25,30,25,15,5];i=parseFloat(i),console.log("--",s[t],i),this.heTishi[t]=!(s[t]<i)},toSubmit:function(){var e=this;if(!this.isSubmit())return!1;var t=this.fens;t.fen1=parseFloat(t.fen1).toFixed(1),t.fen2=parseFloat(t.fen2).toFixed(1),t.fen3=parseFloat(t.fen3).toFixed(1),t.fen4=parseFloat(t.fen4).toFixed(1),t.fen5=parseFloat(t.fen5).toFixed(1);var i=parseFloat(t.fen1)+parseFloat(t.fen2)+parseFloat(t.fen3)+parseFloat(t.fen4)+parseFloat(t.fen5),s={score_str:t.fen1+","+t.fen2+","+t.fen3+","+t.fen4+","+t.fen5,score:i.toFixed(1),dt_id:uni.getStorageSync("Fx"),uuid:uni.getStorageSync("userId")};console.log("===",JSON.stringify(s)),this.$axios.axios("POST",this.$paths.markPut2,s).then((function(t){console.log("--",t),1==t.code?(console.log("阿斯顿",t),e.$tools.showToast("提交成功"),setTimeout((function(e){uni.navigateBack({delta:1})}),1e3)):e.$tools.showToast(t.info)})).catch((function(e){console.log("错误回调",e)}))},isSubmit:function(){if(""==this.fens.fen1||""==this.fens.fen2||""==this.fens.fen3||""==this.fens.fen4||""==this.fens.fen5)return this.$tools.showToast("有遗漏未打分，提交失败"),!1;for(var e=0,t=0;t<this.heTishi.length;t++)this.heTishi[t]||(e+=1);return!(e>0)||(this.$tools.showToast("有部分打分不规范，提交失败"),!1)},checkPrice:function(e){var t=this,i=e.detail.value;this.$nextTick((function(){t.numberInput=i}))},nextQuestion:function(){if(10==this.tiIndex)return this.tiIndex=11,this.$tools.showToast("打分完成"),setTimeout((function(e){uni.redirectTo({url:"/pages/selFangxiang/selFangxiang"})}),1e3),!1;this.tiIndex<10&&(this.tiIndex=this.tiIndex+1)},imgload:function(e,t){1==t&&(this.img1=e.detail.height/2),2==t&&(this.img2=e.detail.height/2),this.img1>0&&this.img2>0&&(console.log("默认高",this.screenHeightPx),console.log("img1",this.img1),console.log("img2",this.img2))}}};t.default=s},"7ce3":function(e,t,i){var s=i("d1e4");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);var n=i("967d").default;n("7b423385",s,!0,{sourceMap:!1,shadowMode:!1})},"891c":function(e,t,i){"use strict";var s=i("7ce3"),n=i.n(s);n.a},d1e4:function(e,t,i){var s=i("c86c");t=s(!1),t.push([e.i,"uni-page-body[data-v-28358dfc]{background-image:url(/static/111.jpg);background-size:100% 100%}body.?%PAGE?%[data-v-28358dfc]{background-image:url(/static/111.jpg);background-size:100% 100%}.viewbig[data-v-28358dfc]{width:%?750?%;height:100vh}.viewcenter[data-v-28358dfc]{width:80%;padding:%?50?%}.textawa[data-v-28358dfc]{border:1px solid #c9c9c9;border-radius:%?15?%;width:70vw;height:%?90?%;padding:%?0?% %?40?%;font-size:%?40?%;line-height:%?90?%}.btns1[data-v-28358dfc]{\r\n\t/* background-color:     #E17535; */background-color:#e7942e;color:#fff;\r\n\t/* height: 70rpx; */\r\n\t/* width: 250rpx; */border-radius:%?15?%;text-align:center;line-height:%?90?%;font-size:%?40?%;color:#fff;font-weight:700;width:70vw;line-height:%?90?%}",""]),e.exports=t},fa89:function(e,t,i){"use strict";i.d(t,"b",(function(){return s})),i.d(t,"c",(function(){return n})),i.d(t,"a",(function(){}));var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("v-uni-view",{staticClass:"viewbig colonn center_center"},[i("v-uni-view",{staticClass:"background1 colonn center_center",staticStyle:{width:"80vw","border-radius":"20rpx",height:"70vh",position:"fixed",top:"15vh",left:"10vw"}},[i("v-uni-scroll-view",{staticStyle:{height:"70vh",width:"80vw"},attrs:{"scroll-y":!0}},[i("v-uni-view",{staticClass:"h-10"}),i("v-uni-view",{staticClass:"viewcenter colonn "},[i("v-uni-view",{staticClass:"colonn"},[i("v-uni-view",{staticClass:"colonn "},[i("v-uni-view",{staticClass:"fs-40 "},[e._v("1.根据影像学资料给出正确的病例诊断结果（25分）")]),i("v-uni-view",{staticClass:"h-20"}),i("v-uni-input",{staticClass:"textawa fs-40",attrs:{type:"number","placeholder-class":"fs-40",placeholder:"最高25分"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.isFenSubChange(t,0)}},model:{value:e.fens.fen1,callback:function(t){e.$set(e.fens,"fen1",t)},expression:"fens.fen1"}}),i("v-uni-view",{staticClass:"h-30"})],1),e.heTishi[0]?e._e():i("v-uni-view",{staticClass:"fs-40",staticStyle:{color:"red"}},[e._v("第1项得分必须小于等于25")]),i("v-uni-view",{staticClass:"h-40"})],1),i("v-uni-view",{staticClass:"colonn"},[i("v-uni-view",{staticClass:"colonn "},[i("v-uni-view",{staticClass:"fs-40 "},[e._v("2.诊断思路阐述逻辑清晰有条理，表述完整精炼，重点突出(30分)")]),i("v-uni-view",{staticClass:"h-20"}),i("v-uni-input",{staticClass:"textawa fs-40",attrs:{type:"number","placeholder-class":"fs-40",placeholder:"最高30分"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.isFenSubChange(t,1)}},model:{value:e.fens.fen2,callback:function(t){e.$set(e.fens,"fen2",t)},expression:"fens.fen2"}}),i("v-uni-view",{staticClass:"h-20"})],1),e.heTishi[1]?e._e():i("v-uni-view",{staticClass:"fs-40",staticStyle:{color:"red"}},[e._v("第2项得分必须小于等于30")]),i("v-uni-view",{staticClass:"h-40"})],1),i("v-uni-view",{staticClass:"colonn"},[i("v-uni-view",{staticClass:"colonn "},[i("v-uni-view",{staticClass:"fs-40 "},[e._v("3.含有针对性的鉴别诊断，鉴别诊断结合病人具体病情、影像征象及发病率(25分)")]),i("v-uni-view",{staticClass:"h-20"}),i("v-uni-input",{staticClass:"textawa fs-40",attrs:{type:"number","placeholder-class":"fs-40",placeholder:"最高25分"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.isFenSubChange(t,2)}},model:{value:e.fens.fen3,callback:function(t){e.$set(e.fens,"fen3",t)},expression:"fens.fen3"}}),i("v-uni-view",{staticClass:"h-20"})],1),e.heTishi[2]?e._e():i("v-uni-view",{staticClass:"fs-15",staticStyle:{color:"red"}},[e._v("第3项得分必须小于等于25")]),i("v-uni-view",{staticClass:"h-20"})],1),i("v-uni-view",{staticClass:"colonn"},[i("v-uni-view",{staticClass:"colonn "},[i("v-uni-view",{staticClass:"fs-40 "},[e._v("4.能够提出有利于诊断和鉴别诊断的合理建议(15分)")]),i("v-uni-view",{staticClass:"h-20"}),i("v-uni-input",{staticClass:"textawa fs-40",attrs:{type:"number","placeholder-class":"fs-40",placeholder:"最高15分"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.isFenSubChange(t,3)}},model:{value:e.fens.fen4,callback:function(t){e.$set(e.fens,"fen4",t)},expression:"fens.fen4"}}),i("v-uni-view",{staticClass:"h-20"})],1),e.heTishi[3]?e._e():i("v-uni-view",{staticClass:"fs-15",staticStyle:{color:"red"}},[e._v("第4项得分必须小于等于15")]),i("v-uni-view",{staticClass:"h-20"})],1),i("v-uni-view",{staticClass:"colonn"},[i("v-uni-view",{staticClass:"colonn "},[i("v-uni-view",{staticClass:"fs-40 "},[e._v("5.语言表达清晰完整，声音洪亮，语速和节奏适中，PPT制作规范，排版美观(5分)")]),i("v-uni-view",{staticClass:"h-20"}),i("v-uni-input",{staticClass:"textawa fs-40",attrs:{type:"number","placeholder-class":"fs-40",placeholder:"最高5分"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.isFenSubChange(t,4)}},model:{value:e.fens.fen5,callback:function(t){e.$set(e.fens,"fen5",t)},expression:"fens.fen5"}}),i("v-uni-view",{staticClass:"h-20"})],1),e.heTishi[4]?e._e():i("v-uni-view",{staticClass:"fs-40",staticStyle:{color:"red"}},[e._v("第5项得分必须小于等于5")]),i("v-uni-view",{staticClass:"h-20"})],1),i("v-uni-view",{staticClass:"colonn "},[i("v-uni-view",{staticClass:"btns1",on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.toSubmit.apply(void 0,arguments)}}},[e._v("提交")])],1)],1),i("v-uni-view",{staticClass:"h-100"})],1)],1)],1)],1)},n=[]}}]);