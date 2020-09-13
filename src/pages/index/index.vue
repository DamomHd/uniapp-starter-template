<!--
 * @Author: Damom
 * @Date: 2020-09-09 20:32:00
 * @LastEditors: Damom
 * @LastEditTime: 2020-09-13 14:13:15
 * @Description: file content
-->
<template>
	<view class="content">
		<image class="logo" src="/static/logo.png" @click="login"></image>
		<view>
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			login(){
				console.log(1)
				uni.navigateTo({
					url: '/pages/login/index'
				})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin: 200rpx auto 50rpx auto;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
