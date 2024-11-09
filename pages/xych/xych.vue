<template>
	<view>
		<view class="viewbig colonn center_center">
			<view class="background1 colonn center_center"
				style="width: 80vw;border-radius: 20rpx;height:70vh;position: fixed;top: 15vh;left: 10vw;">
				<scroll-view scroll-y style="height:70vh;width: 80vw;">
					<view class="h-10"></view>
					<view class="viewcenter colonn ">
						<view class="colonn">
							<view class="colonn ">
								<view class="fs-40 ">1.重点影像学表现、有价值的临床特征等描述清楚，提供不同于常规诊断的新视角或见解为诊断提供新思路等（20分）</view>
								<view class="h-20"></view>
								<input type="number" class="textawa fs-40" placeholder-class="fs-40" v-model="fens.fen1"
									@input="isFenSubChange($event,0)" placeholder="最高20分"></input>
								<view class="h-30"></view>
							</view>
							<view style="color: red;" v-if="!heTishi[0]" class="fs-40">第1项得分必须小于等于20</view>
							<view class="h-40"></view>
						</view>
						<view class="colonn">
							<view class="colonn ">
								<view class="fs-40 ">2.根据影像学资料等给出正确的第-诊断(10分)</view>
								<view class="h-20"></view>
								<input type="number" class="textawa fs-40" placeholder-class="fs-40" v-model="fens.fen2"
									@input="isFenSubChange($event,1)" placeholder="最高10分"></input>
								<view class="h-20"></view>
							</view>
							<view style="color: red;" v-if="!heTishi[1]" class="fs-40">第2项得分必须小于等于10</view>
							<view class="h-40"></view>
						</view>
						<view class="colonn">
							<view class="colonn ">
								<view class="fs-40 ">3.思考过程阐述清晰有条理，突出案例重点诊断依据(25分)</view>
								<view class="h-20"></view>
								<input type="number" class="textawa fs-40" placeholder-class="fs-40" v-model="fens.fen3"
									@input="isFenSubChange($event,2)" placeholder="最高25分"></input>
								<view class="h-20"></view>
							</view>
							<view style="color: red;" v-if="!heTishi[2]" class="fs-40">第3项得分必须小于等于25</view>
							<view class="h-20"></view>
						</view>
						<view class="colonn">
							<view class="colonn ">
								<view class="fs-40 ">4.对案例分析合理，结构完整，涵盖重要的鉴别诊断(25分)</view>
								<view <view class="h-20"></view>
								<input type="number" class="textawa fs-40" placeholder-class="fs-40" v-model="fens.fen4"
									@input="isFenSubChange($event,3)" placeholder="最高25分"></input>
								<view class="h-20"></view>
							</view>
							<view style="color: red;" v-if="!heTishi[3]" class="fs-40">第4项得分必须小于等于25</view>
							<view class="h-20"></view>
						</view>
						<view class="colonn">
							<view class="colonn ">
								<view class="fs-40 ">5.内容完整，符合案例陈述逻辑(10分)</view>
								<view <view class="h-20"></view>
								<input type="number" class="textawa fs-40" placeholder-class="fs-40" 
								v-model="fens.fen5"
									@input="isFenSubChange($event,4)" placeholder="最高10分"></input>
								<view class="h-20"></view>
							</view>
							<view style="color: red;" v-if="!heTishi[4]" class="fs-40">第5项得分必须小于等于10</view>
							<view class="h-20"></view>
						</view>
						
						<view class="colonn">
							<view class="colonn ">
								<view class="fs-40 ">6.语速和节奏造中、语言表达流畅、清晰饱满,PPT制作美观、台风得体。(10分)</view>
								<view <view class="h-20"></view>
								<input type="number" class="textawa fs-40" placeholder-class="fs-40" 
								v-model="fens.fen6"
									@input="isFenSubChange($event,5)" placeholder="最高10分"></input>
								<view class="h-20"></view>
							</view>
							<view style="color: red;" 
							v-if="!heTishi[5]" class="fs-40">第6项得分必须小于等于10</view>
							<view class="h-20"></view>
						</view>
						
						<view class="colonn ">
							<view class="btns1" @click.stop="toSubmit">提交</view>
						</view>
					</view>
					<view class="h-100"></view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				'screenHeightPx': 0,
				img1: 0,
				img2: 0,
				startTime: 0, //开始的时间戳
				nowTime: 0,
				miaoshu: 30, //倒计时
				tiIndex: 1,

				numberInput: '',
				formattedNumber: '',

				fens: {
					'fen1': '',
					'fen2': '',
					'fen3': '',
					'fen4': '',
					'fen5': '',
					'fen6': '',
				},
				isFenSub: [
					true, true, true, true, true, true
				],
				form: {
					'score_str': '',
					'score': '',
					'b1score_str': '',
					'b1score': '',
					'uuid': ''
				},
				fenBz: [20, 10, 25, 25,10,10],

				heTishi: [true, true, true, true, true, true],
				
				timeout:null,
			}
		},
		onLoad() {
			// 获取当前界面的宽高
			const systemInfo = uni.getSystemInfoSync();
			const screenWidth = systemInfo.screenWidth;
			const screenHeight = systemInfo.screenHeight;
			console.log("屏幕的原始高", )
			const bili = 750 / screenWidth;
			const screenHeightPx = bili * screenHeight;
			this.screenHeightPx = screenHeightPx;

			// var userInfoDafen = uni.getStorageSync("dafenUser");
			// if (userInfoDafen.is_score == 1) {
			// 	this.getLishidafen();
			// }

		},
		onUnload() {
			if(this.timeout){
				clearTimeout(this.timeout);
			}
			
		},
		methods: {


			// 获取历史打分
			getLishidafen() {
				var data = {
					'uuid': uni.getStorageSync("userId"),
					'user_id': uni.getStorageSync("dafenUser").user_id,
				}
				this.$axios
					.axios('POST', this.$paths.Api20241023dtLogInfo, data)
					.then(res => {
						if (res.code == 1) {


							this.fens.fen1 = parseInt(res.data.score_arr[0]);
							this.fens.fen2 = parseInt(res.data.score_arr[1]);
							this.fens.fen3 = parseInt(res.data.score_arr[2]);
							this.fens.fen4 = parseInt(res.data.score_arr[3]);
							this.fens.fen5 = parseInt(res.data.score_arr[4]);
							this.fens.fen6 = parseInt(res.data.score_arr[5]);



						} else {
							this.$tools.showToast(res.info)
						}
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},

			heTishiSUb() {

				if (this.fens.fen1 != "") {
					if (this.fens.fen1 < 25) {
						this.heTishi[0] = false;
					} else {
						this.heTishi[0] = true;
					}
				}

				this.$forceUpdate()
			},
			// 这分是否可以提交
			isFenSubChange(res, index) {
				var value = res.detail.value;
				var fenBz = [20, 10, 25, 25,10,10];
				value = parseFloat(value)
				console.log("--", fenBz[index], value)
				if (fenBz[index] < value) {
					this.heTishi[index] = false;
				} else {
					this.heTishi[index] = true;
				}

				// this.heTishiSUb();
			},
			// 提交
			toSubmit() {
				if (!this.isSubmit()) {
					return false;
				}
				// timuList[a].fen=parseFloat(timuList[a].fen).toFixed(1);
				var fens = this.fens;
				fens.fen1 = parseFloat(fens.fen1).toFixed(1);
				fens.fen2 = parseFloat(fens.fen2).toFixed(1);
				fens.fen3 = parseFloat(fens.fen3).toFixed(1);
				fens.fen4 = parseFloat(fens.fen4).toFixed(1);
				fens.fen5 = parseFloat(fens.fen5).toFixed(1);
				fens.fen6 = parseFloat(fens.fen6).toFixed(1);
				var score = parseFloat(fens.fen1) + 
				parseFloat(fens.fen2) + 
				parseFloat(fens.fen3) + 
				parseFloat(fens.fen4) +
					parseFloat(fens.fen5)+
					parseFloat(fens.fen6)
					;
				var form = {
					'score_str': fens.fen1 + "," + fens.fen2 + "," + 
					fens.fen3 + "," + fens.fen4 + 
					"," + fens.fen5+"," + fens.fen6,
					'score': score.toFixed(1),
					'dt_id': uni.getStorageSync("Fx"),
					'uuid': uni.getStorageSync("userId")
				}
				console.log("===", JSON.stringify(form))
				this.$axios
					.axios('POST',
						this.$paths.markPut2, form)
					.then(res => {
						console.log("--", res)
						if (res.code == 1) {
							console.log("阿斯顿", res);
							this.$tools.showToast("提交成功");
							
							this.timeout=setTimeout(res=>{
									uni.navigateBack({
										delta: 1
									})
							},3000)
							
							uni.showModal({
								title: '提示',
								content: '打分完成!',
								showCancel:false,
								success:  (res11)=> {
									if (res11.confirm) {
										uni.navigateBack({
											delta: 1
										})
									}
								}
							});
							
							
							
							// setTimeout(res => {
							// 	uni.navigateBack({
							// 		delta: 1
							// 	})
							// }, 1000)
						} else {
							this.$tools.showToast(res.info)
						}
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
			isSubmit() {
				if (this.fens.fen1 == "" || this.fens.fen2 == "" || this.fens.fen3 == "" ||
					this.fens.fen4 == "" || this.fens.fen5 == ""|| this.fens.fen6 == ""
				) {
					this.$tools.showToast("有遗漏未打分，提交失败");
					return false;
				}
				var isYes = 0;
				for (var a = 0; a < this.heTishi.length; a++) {
					if (!this.heTishi[a]) {
						isYes = isYes + 1;
					}
				}
				if (isYes > 0) {
					this.$tools.showToast("有部分打分不规范，提交失败");
					return false;
				}
				return true;
			},


			checkPrice(e) {
				var value = e.detail.value;
				this.$nextTick(() => {
					//'有小数点时，最大长度为7位，没有则是5位'
					this.numberInput = value
				})
			},

			// 下一题点击事件
			nextQuestion() {
				if (this.tiIndex == 10) {
					this.tiIndex = 11
					this.$tools.showToast("打分完成");
					setTimeout(res => {
						uni.redirectTo({
							url: "/pages/selFangxiang/selFangxiang"
						})
					}, 1000)
					return false;
				} else if (this.tiIndex < 10) {
					this.tiIndex = this.tiIndex + 1;
				}

			},
			// 图片加载完成
			imgload(res, index) {
				if (index == 1) {
					this.img1 = res.detail.height / 2;
				}
				if (index == 2) {
					this.img2 = res.detail.height / 2;
				}
				if (this.img1 > 0 && this.img2 > 0) {
					console.log("默认高", this.screenHeightPx)
					console.log("img1", this.img1)
					console.log("img2", this.img2)
				}
			}
		}
	}
</script>

<style>
	@import url(xych.css);
</style>