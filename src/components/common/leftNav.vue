<template>
	<div class="left-nav">
		<ul>
			<router-link to="/" tag="li">
				<i class="icon iconfont icon-goumai"></i>
				<div>收银</div>
			</router-link>
			<router-link to="/shop" tag="li">
				<i class="icon iconfont icon-dianpu"></i>
				<div>店铺</div>
			</router-link>
			<router-link to="/commodity" tag="li">
				<i class="icon iconfont icon-hanbao"></i>
				<div>商品</div>
			</router-link>
			<router-link to="/member" tag="li">
				<i class="icon iconfont icon-31huiyuanqia"></i>
				<div>会员</div>
			</router-link>
			<router-link to="/statis" tag="li">
				<i class="icon iconfont icon-zuanshi"></i>
				<div>统计</div>
			</router-link>
			<router-link to="/setting" tag="li">
				<i class="icon iconfont icon-gongnengjianyi"></i>
				<div>设置</div>
			</router-link>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "leftNav"
	}
</script>

<style>
.left-nav{
	color: #fff;
	font-size: 10px;
	height: 100%;
	background-color: #1D8ce0;
	float: left;
	width: 5%;
}
.iconfont{
	font-size: 24px;
}
.left-nav ul{

}
.left-nav li{
	list-style: none;
	text-align: center;
	border-bottom: 1px solid #20a0ff;
	padding: 10px;
}
</style>
