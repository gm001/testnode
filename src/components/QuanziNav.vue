<template>
	<el-row>
		<div class="fl">
			<img :src="logo" height="80" style="opacity: .1;">
		</div>
		<div class="fr">
			<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
				<el-menu-item index="1"><a href="https://www.ele.me" target="_blank">拼车信息</a></el-menu-item>
				<el-menu-item index="2"><a href="https://www.ele.me" target="_blank">招聘信息</a></el-menu-item>
				<el-menu-item index="3"><a href="https://www.ele.me" target="_blank">加入我们</a></el-menu-item>
			</el-menu>
		</div>
	</el-row>
</template>

<script>
	import logo from './../assets/logo.jpg'

	export default {
		data() {
			return {
				activeIndex: '1',
				logo: logo
			};
		},
		methods: {
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			}
		}
	}
</script>