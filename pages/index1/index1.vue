<template>
	<view>
		<view class="colonn center_center"
			style="width: 100vw;height:100vh;background-image: url(../../static/index1.png);background-size: 100% 100%;">
			<view style="width: 100vw;" class="roww center_center">
				<view class="btns1" @click.stop="tpindex">立即开始</view>
			</view>
		</view>
		<!-- <view class="colonn">
			<view class="" v-for="(item,index) in list">
				{{item}}
			</view>
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: []
			}
		},
		onLoad() {
			window.onload = (res) => {
				// 检测当前的屏幕方向
				if (window.orientation === 90 || window.orientation === -90) {
					// 横屏模式下的处理逻辑
					this.list.push("111横屏模式");
				} else {
					// 如果是竖屏，则提示用户转为横屏
					alert("请将设备转为横屏模式以获得最佳体验！");
					this.list.push("111竖屏！竖屏");
					window.location.reload();
				}
			};
			window.addEventListener('orientationchange',
				(res) => {
					if (window.orientation === 0) {
						// 如果是竖屏，则提示用户转为横屏
						alert("请将设备转为横屏模式以获得最佳体验！");
						this.list.push("222竖屏！竖屏");
						// 或者强制刷新页面，等待用户转屏
					} else if (window.orientation === 90 || window.orientation === -90) {
						// 横屏模式下的处理逻辑
						this.list.push("222横屏模式");
						window.location.reload();
					}
			});
		},
		onShow() {

		},
		methods: {
			tpindex() {
				uni.navigateTo({
					url: "/pages/index/index"
				})
			},
			xuanz() {

			}
		}
	}
</script>

<style>
	
	
	.btns1{
		background-color:#E7942E;
		color: white;
		height: 90rpx;
		width:500rpx;
		border-radius: 15rpx;
		text-align: center;
		font-size: 40rpx;
		line-height: 90rpx;
		position: fixed;
		bottom: 300rpx;
		box-shadow: #E7942E 10rpx 10rpx 10rpx 10rpx;
	}
	
	
</style>