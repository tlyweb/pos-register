<template>
	<div>
		<el-tabs stretch>
			<el-tab-pane label="点餐">
				<el-table border style="width: 100%;" :data="tableData">
					<el-table-column prop="goodsName" label="商品名称">
					</el-table-column>
					<el-table-column prop="count" label="数量">
					</el-table-column>
					<el-table-column prop="price" label="金额">
					</el-table-column>
					<el-table-column label="操作" fixed="right">
						<template slot-scope="scope">
							<el-button type="text" size="small" @click="delSingleGoods(scope.row)">删除</el-button>
							<el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
						</template>
					</el-table-column>
				</el-table>
				<div class="div-count"><span><small>数量：</small>{{totalCount}}</span><span><small>金额：</small>{{totalMoney}}</span> </div>
				<div class="div-button">
					<el-button type="warning" @click="putGoods">挂单</el-button>
					<el-button type="danger" @click="delAllGoods">删除</el-button>
					<el-button type="success" @click="checkout">结账</el-button>
				</div>
			</el-tab-pane>
			<el-tab-pane label="挂单">
				<el-table border style="width: 100%;" :data="tableOne">
					<el-table-column prop="goodsName" label="商品名称">
					</el-table-column>
					<el-table-column prop="count" label="数量">
					</el-table-column>
					<el-table-column prop="price" label="金额">
					</el-table-column>
					<el-table-column label="总价">
						<template slot-scope="scope">
							<span>{{scope.row.price*scope.row.count}}</span>
						</template>
					</el-table-column>
					<el-table-column label="操作" fixed="right">
						<template slot-scope="scope">
							<el-button type="text" size="small" @click="deloneGoods(scope.row)">删除</el-button>
							<el-button type="text" size="small" @click="addOrderone(scope.row)">增加</el-button>
						</template>
					</el-table-column>
				</el-table>
			</el-tab-pane>
			<el-tab-pane label="外卖">
				<el-table border style="width: 100%;" :data="tabletwo">
					<el-table-column prop="goodsName" label="商品名称">
					</el-table-column>
					<el-table-column prop="count" label="数量">
					</el-table-column>
					<el-table-column prop="price" label="金额">
						<template slot-scope="scope">
							<span>{{scope.row.price*scope.row.count}}</span>
						</template>
					</el-table-column>
					<el-table-column label="操作" fixed="right">
						<template slot-scope="scope">
							<el-button type="text" size="small" @click="delonetwo(scope.row)">删除</el-button>
						</template>
					</el-table-column>
				</el-table>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
	import {mapState,mapMutations} from "vuex";
	export default {
		name: "OrderingLeft",
		data(){
			return{
				tabletwo:[]
			}
		},
		computed:{
			...mapState(["tableData","totalMoney","totalCount","tableOne"])
		},
		methods:{
			...mapMutations(["delSingleGoods","addOrderList","delAllGoods","checkout","putGoods","addOrderone","deloneGoods"]),
			//模拟结账
			checkout(){
				if (this.totalCount!=0){
					this.tabletwo=this.$store.state.tableData;
					this.$store.state.tableData=[];
					this.$store.state.totalMoney=0;
					this.$store.state.totalCount=0;
					this.$message({
						message:'结账成功，感谢你又为店里除了一份力！',
						type:'success'
					})
					this.localtabletwo();
					localStorage.setItem("localtableData",JSON.stringify(this.$store.state.tableData));
					localStorage.setItem("localtotalMoney",JSON.stringify(this.$store.state.totalMoney));
					localStorage.setItem("localtotalCount",JSON.stringify(this.$store.state.totalCount));
				}else{
					this.$message.error('不能空结，老板了解你急切的心情！')
				}
			},
			//结账删除
			delonetwo(goods){
				this.tabletwo=this.tabletwo.filter(o=>o.goodsId!=goods.goodsId);
				this.localtabletwo();
			},
			//外卖存储
			localtabletwo(){
				localStorage.setItem("localttabletwo",JSON.stringify(this.tabletwo));
			}
		},
		mounted() {
			if (localStorage.getItem("localttabletwo")) {
				this.tabletwo=JSON.parse(localStorage.getItem("localttabletwo"));
			}
		}
	}
</script>

<style scoped>
	.div-count{
		background-color: #fff;
		padding: 10px;
		border-bottom: 1px solid #D3dce6;
	}
	.div-button{
		margin-top: 20px;
	}
	.div-count span:nth-of-type(2){
		margin-left: 30px;
	}
</style>
