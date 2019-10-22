<template>
	<div>
		<el-tabs stretch>
			<el-tab-pane label="汉堡">
				<div>
					<ul class='cookList'>
						<li v-for="(goods,index) in type0Goods" :key="index" @click="addOrderList(goods)">
							<span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
							<span class="foodName">{{goods.goodsName}}</span>
							<span class="foodPrice">￥{{goods.price}}元</span>
						</li>
					</ul>
				</div>
			</el-tab-pane>
			<el-tab-pane label="小食">
				<div>
					<ul class='cookList'>
						<li v-for="(goods,index) in type1Goods" :key="index" @click="addOrderList(goods)">
							<span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
							<span class="foodName">{{goods.goodsName}}</span>
							<span class="foodPrice">￥{{goods.price}}元</span>
						</li>
					</ul>
				</div>
			</el-tab-pane>
			<el-tab-pane label="饮料">
				<div>
					<ul class='cookList'>
						<li v-for="(goods,index) in type2Goods" :key="index" @click="addOrderList(goods)">
							<span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
							<span class="foodName">{{goods.goodsName}}</span>
							<span class="foodPrice">￥{{goods.price}}元</span>
						</li>
					</ul>
				</div>
			</el-tab-pane>
			<el-tab-pane label="套餐">
				<div>
					<ul class='cookList'>
						<li v-for="(goods,index) in type3Goods" :key="index" @click="addOrderList(goods)">
							<span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
							<span class="foodName">{{goods.goodsName}}</span>
							<span class="foodPrice">￥{{goods.price}}元</span>
						</li>
					</ul>
				</div>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
	import {mapState,mapMutations} from "vuex";
	export default {
		name: "Orderingrigbot",
		data(){
			return{

			}
		},
		computed:{
			...mapState(["type0Goods","type1Goods","type2Goods","type3Goods"])
		},
		methods:{
			...mapMutations(["addOrderList"])
		}
	}
</script>

<style scoped>

	.cookList li{
		list-style: none;
		width:23%;
		border:1px solid #E5E9F2;
		height: auot;
		overflow: hidden;
		background-color:#fff;
		padding: 2px;
		float:left;
		margin: 20px;
		cursor: pointer;
	}
	.cookList li span{
		display: block;
		float:left;
	}
	.foodImg{
		width: 40%;
	}
	.foodName{
		font-size: 18px;
		padding-left: 10px;
		color:brown;
	}
	.foodPrice{
		font-size: 16px;
		padding-left: 10px;
		padding-top:10px;
	}
</style>
