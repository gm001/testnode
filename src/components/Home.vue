<template>
	<div class="p20">
		<quanzi-nav></quanzi-nav>
		
		<el-tabs v-model="activeName" @tab-click="handleClick">
		    <el-tab-pane label="用户管理22" name="first">
				<img src="https://www.google.co.jp/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" width="300px">
		    </el-tab-pane>
		    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
		    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
		    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>

	import QuanziNav from './QuanziNav.vue'

	export default {
		data() {
		  return {
		  	activeName: 'second'
		  }
		},
		methods: {
			handleClick(key, keyPath) {
				console.log(key, keyPath);
			}
		},
		components: {
			QuanziNav
		}
	}
</script>

<style>
	html, body, ul, ol, li, ol, p {
		margin: 0;
		padding: 0;
	}
	a {
		text-decoration: none;
	}
	.p20 {
		padding: 20px;
	}
	.fl {
		float: left;
	}
	.fr {
		float: right;
	}
</style>