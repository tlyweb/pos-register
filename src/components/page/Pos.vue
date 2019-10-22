<template>
	<div class="pos">
		<el-row>
			<el-col :span='7' class="pos-order" id="order-list">
				<OrderingLeft></OrderingLeft>
			</el-col>
			<el-col :span='17'>
				<div class="often-goods">
					<Orderingrigtop></Orderingrigtop>
				</div>
				<div class="goods-type">
					<Orderingrigbot></Orderingrigbot>
				</div>
			</el-col>
		</el-row>

	</div>
</template>

<script>
	export default {
		name: "Pos",
		data(){
			return{

			}
		},
		methods:{

		},
		created(){
		},
		mounted(){
			let orderHeiht = document.body.clientHeight;
			console.log(orderHeiht);
			document.getElementById('order-list').style.height=orderHeiht + "px";
		},
		components:{
			OrderingLeft:()=>import("../Ordering/OrderingLeft.vue"),
			Orderingrigtop:()=>import("../Ordering/Orderingrigtop.vue"),
			Orderingrigbot:()=>import("../Ordering/Orderingrigbot.vue")
		}
	}
</script>

<style scoped>
.pos-order{
	background-color: #F9FAFC;
	border-right: 1px solid #C0CCDA;
}
.goods-type{
	clear: both;
}
</style>
