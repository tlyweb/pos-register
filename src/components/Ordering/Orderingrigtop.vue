<template>
	<div>
		<div class="title">常用商品</div>
		<div class="often-goods-list">
			<ul>
				<li v-for="(goods,index) in oftenGoods" :key="index" @click="addOrderList(goods)">
					<span>{{goods.goodsName}}</span>
					<span class="o-price">￥{{goods.price}}</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import {mapState,mapMutations} from "vuex";
	export default {
		name: "Orderingrigtop",
		data(){
			return{

			}
		},
		computed:{
			...mapState(["oftenGoods"])
		},
		methods:{
			...mapMutations(["addOrderList"])
		}
	}
</script>

<style scoped>
	.title{
		height: 20px;
		border-bottom: 1px solid #D3dce6;
		background-color:#F9FAFC;
		padding: 10px;
		text-align: left;
	}
	.o-price{
		color: #5887FF;
	}

	.often-goods-list ul li{
		list-style: none;
		float: left;
		border: 1px solid #E5E9F2;
		padding: 10px;
		margin: 15px;
		background-color: #FFF;
		cursor: pointer;
	}
</style>
