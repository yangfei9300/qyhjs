<template>
	<view>
		<view class="colonn center_center" style="height: 100vh;">
			<view class="colonn w-750 cenbterbg  center_center">
				<view class="huanhang rowsa w-750">
					<view class="type1" @click.stop="toda('东区')">东区</view>
					<view class="type1" @click.stop="toda('西区')">西区</view>
					<view class="type1" @click.stop="toda('南区')">南区</view>
					<view class="type1" @click.stop="toda('北区')">北区</view>
				</view>

			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			toda(txt) {
				uni.setStorageSync("qu", txt);
				uni.navigateTo({
					url: "/pages/dafen/dafen"
				})
			},
		}
	}
</script>

<style>
	@import url(xuanqu.css);
</style>