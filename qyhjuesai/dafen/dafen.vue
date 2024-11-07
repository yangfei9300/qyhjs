<template>
	<view>
		<view class="colonn">
			<image @load="imgload($event,1)" src="../../static/datitop.jpg" mode="widthFix" class="w-750"></image>
			<view class="colonn w-750 cenbterbg  " style="padding: 30rpx;" :style="{
				'height':(screenHeightPx-img1-img2)+'rpx'
			}">
				<scroll-view scroll-y :style="{
					'height':(screenHeightPx-img1-img2)+'rpx'
				}">
					<view class="colonn">
						<view class="roww center_center fs-50 fw-600">
							<view>请打分</view>
						</view>
						<view class="colonn">
							<view style="padding:20rpx 0rpx;">1.第一题</view>
							<view class="h-10"></view>
							<input v-model="fens[0]" class="textawa" placeholder="请输入" />
						</view>
						<view class="h-30"></view>
						<view class="colonn">
							<view style="padding:20rpx 0rpx;">2.第二题</view>
							<view class="h-10"></view>
							<input v-model="fens[1]"  class="textawa" placeholder="请输入" />
						</view>
						<view class="h-30"></view>
						<view class="colonn">
							<view style="padding:20rpx 0rpx;">3.第三题</view>
							<view class="h-10"></view>
							<input v-model="fens[2]"  class="textawa" placeholder="请输入" />
						</view>
						<view class="h-30"></view>
						<view class="colonn">
							<view style="padding:20rpx 0rpx;">4.第四题</view>
							<view class="h-10"></view>
							<input v-model="fens[3]"  class="textawa" placeholder="请输入" />
						</view>
						<view class="h-50"></view>
						<view class="btns1" @click.stop="toSuibmit">提交</view>
						<view class="h-50"></view>
					</view>
				</scroll-view>
			</view>
			<image @load="imgload($event,2)" src="../../static/datibottom.jpg" mode="widthFix" class="w-750"></image>
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

				usertype: '',
				
				fens:['','','',''],
				
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
			console.log(bili, screenWidth, screenHeight, screenHeightPx);
			this.username = uni.getStorageSync("username")
			this.usertype = uni.getStorageSync("usertype");

		},
		methods: {
			toSuibmit(){
				if(!this.isSubmit()){
					return false;
				}
				var qu=uni.getStorageSync("qu");
				var fens=this.fens;
				var zong=parseFloat(fens[0])+parseFloat(fens[1])+parseFloat(fens[2])+parseFloat(fens[3]);
				var data={
					'group':qu,
					'score_str':fens.join(","),
					'score':zong
				}
				this.$axios
					.axios('POST', this.$paths.api20241117markPut1,data)
					.then(res => {
						if(res.code==1){
							uni.removeStorageSync("qu");
							this.$tools.showToast("打分成功");
							setTimeout(res=>{
								uni.navigateBack({
									delta:1
								})
							},1000)
						}else{
							this.$tools.showToast(res.info)
						}
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
			isSubmit(){
				if(this.fens[0]==''||this.fens[1]==''||this.fens[2]==''||this.fens[3]==''){
					this.$tools.showToast("打分有遗漏，提交失败");
					return false;
				}
				return true;
			},
			// 图片加载完成
			imgload(res, index) {
				console.log("阿萨德", res, index)
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
	@import url(dafen.css);
</style>