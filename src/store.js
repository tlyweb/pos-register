import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
//点餐页存储
let tableData = [];
if (localStorage.getItem("localtableData")){
	tableData=JSON.parse(localStorage.getItem("localtableData"))
}
//挂单页存储
let tableOne = [];
if (localStorage.getItem("localtableOne")) {
	tableOne=JSON.parse(localStorage.getItem("localtableOne"))
}
//数量存储价钱存储
let totalMoney=0;
if (localStorage.getItem("localtotalMoney")){
	totalMoney=JSON.parse(localStorage.getItem("localtotalMoney"))
}
let totalCount=0;
if (localStorage.getItem("localtotalCount")) {
	totalCount=JSON.parse(localStorage.getItem("localtotalCount"))
}
export default new Vuex.Store({
  state: {
	  tableData,
	  totalMoney,
	  totalCount,
	  oftenGoods:[
		  {
			  goodsId:1,
			  goodsImg:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1371329904,3006926716&fm=26&gp=0.jpg",
			  goodsName:'香辣鸡腿堡',
			  price:18
		  }, {
			  goodsId:2,
			  goodsImg:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=49678950,3437998467&fm=26&gp=0.jpg",
			  goodsName:'田园鸡腿堡',
			  price:15
		  }, {
			  goodsId:3,
			  goodsImg:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3054803193,1929074614&fm=26&gp=0.jpg",
			  goodsName:'和风汉堡',
			  price:15
		  }, {
			  goodsId:4,
			  goodsImg:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=948967064,3566470471&fm=26&gp=0.jpg",
			  goodsName:'快乐全家桶',
			  price:80
		  }, {
			  goodsId:5,
			  goodsImg:"https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=1410598204,3345581788&fm=202&mola=new&crop=v1",
			  goodsName:'脆皮炸鸡腿',
			  price:10
		  }, {
			  goodsId:6,
			  goodsImg:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3229181656,3864280017&fm=26&gp=0.jpg",
			  goodsName:'魔法鸡块',
			  price:20
		  }, {
			  goodsId:7,
			  goodsImg:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2471640667,1034969096&fm=115&gp=0.jpg",
			  goodsName:'可乐大杯',
			  price:10
		  }, {
			  goodsId:8,
			  goodsImg:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3423922380,2502366865&fm=26&gp=0.jpg",
			  goodsName:'雪顶咖啡',
			  price:18
		  }, {
			  goodsId:9,
			  goodsImg:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2647662953,3060399526&fm=26&gp=0.jpg",
			  goodsName:'大块鸡米花',
			  price:15
		  }, {
			  goodsId:10,
			  goodsImg:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=178676919,562088778&fm=26&gp=0.jpg",
			  goodsName:'香脆鸡柳',
			  price:17
		  }, {
			  goodsId:11,
			  goodsImg:"https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=3186861189,4005701260&fm=202&mola=new&crop=v1",
			  goodsName:'牛肉汉堡',
			  price:15
		  },{
			  goodsId:12,
			  goodsImg:"https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=2122257131,4199355693&fm=202&mola=new&crop=v1",
			  goodsName:'儿童套餐',
			  price:40
		  },
	  ],
	  type0Goods:[
		  {
			  goodsId:1,
			  goodsImg:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1371329904,3006926716&fm=26&gp=0.jpg",
			  goodsName:'香辣鸡腿堡',
			  price:18
		  }, {
			  goodsId:2,
			  goodsImg:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=49678950,3437998467&fm=26&gp=0.jpg",
			  goodsName:'田园鸡腿堡',
			  price:15
		  }, {
			  goodsId:3,
			  goodsImg:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3054803193,1929074614&fm=26&gp=0.jpg",
			  goodsName:'和风汉堡',
			  price:15
		  },{
			  goodsId:11,
			  goodsImg:"https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=3186861189,4005701260&fm=202&mola=new&crop=v1",
			  goodsName:'牛肉汉堡',
			  price:15
		  }
	  ],
	  type1Goods:[
		  {
			  goodsId:5,
			  goodsImg:"https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=1410598204,3345581788&fm=202&mola=new&crop=v1",
			  goodsName:'脆皮炸鸡腿',
			  price:10
		  },{
			  goodsId:6,
			  goodsImg:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3229181656,3864280017&fm=26&gp=0.jpg",
			  goodsName:'魔法鸡块',
			  price:20
		  },{
			  goodsId:9,
			  goodsImg:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2647662953,3060399526&fm=26&gp=0.jpg",
			  goodsName:'大块鸡米花',
			  price:15
		  },{
			  goodsId:10,
			  goodsImg:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=178676919,562088778&fm=26&gp=0.jpg",
			  goodsName:'香脆鸡柳',
			  price:17
		  }
	  ],
	  type2Goods:[
		  {
			  goodsId:7,
			  goodsImg:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2471640667,1034969096&fm=115&gp=0.jpg",
			  goodsName:'可乐大杯',
			  price:10
		  }, {
			  goodsId:8,
			  goodsImg:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3423922380,2502366865&fm=26&gp=0.jpg",
			  goodsName:'雪顶咖啡',
			  price:18
		  }
	  ],
	  type3Goods:[
		  {
			  goodsId:4,
			  goodsImg:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=948967064,3566470471&fm=26&gp=0.jpg",
			  goodsName:'快乐全家桶',
			  price:80
		  },
		  {
			  goodsId:12,
			  goodsImg:"https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=2122257131,4199355693&fm=202&mola=new&crop=v1",
			  goodsName:'儿童欢乐套餐',
			  price:40
		  },
	  ],
	  tableOne
  },
  mutations: {
	  //点击添加到点餐
	  addOrderList(state,goods){
		  state.totalMoney=0;
		  state.totalCount=0;

		  //商品是否已经存在于订单列表中
		  let isHave = false;
		  state.tableData.map((item,index)=>{
			  if (item.goodsId==goods.goodsId){
				  isHave = true;
			  }
		  })
		  //根据判断的值编写业务逻辑
		  if (isHave){
			  //改变列表中商品的数量
			  let arr = state.tableData.filter(o=>o.goodsId==goods.goodsId);
			  arr[0].count++;
		  }else{
			  let newGoods ={
				  goodsId:goods.goodsId,
				  goodsName:goods.goodsName,
				  price:goods.price,
				  count:1
			  }
			  state.tableData.push(newGoods);
		  }
		  this.commit("localstableData");
		  this.commit("getAllMoney");
	  },
	  //删除当前商品
	  delSingleGoods(state,goods){
		  state.tableData=state.tableData.filter(o=>o.goodsId !=goods.goodsId);
		  this.commit("getAllMoney");
		  this.commit("localstableData");
	  },
	  //全部删除
	  delAllGoods(state){
		  state.tableData=[];
		  state.totalMoney=0;
		  state.totalCount=0;
		  this.commit("localstableData");
		  this.commit("localstotalMoney");
		  this.commit("localstotalCount");
	  },
	  //汇总数量金额
	  getAllMoney(state){
		  state.totalMoney=0;
		  state.totalCount=0;
		  if (state.tableData){
			  //计算汇总金额
			  state.tableData.forEach(element=>{
				  state.totalCount+=element.count;
				  state.totalMoney+=element.count*element.price;
			  })
			  this.commit("localstotalMoney");
			  this.commit("localstotalCount");
		  }
	  },
	  //挂单
	  putGoods(state){
	  	state.tableOne=state.tableData;
	  	console.log(state.tableOne)
	  	this.commit("delAllGoods");
	  	this.commit("localstaba");
	  },
	  //挂单增加
	  addOrderone(state,goods){
	  	let isHave = false;
	  	state.tableOne.map((item,index)=>{
	  		if (item.goodsId==goods.goodsId){
	  			isHave=true;
		    }
	    })
		if (isHave){
		  	let arr = state.tableOne.filter(o=>o.goodsId==goods.goodsId);
		  	arr[0].count++;
		}
		this.commit("localstaba");
	  },
	  //挂单删除
	  deloneGoods(state,goods){
		  let arr=state.tableOne.findIndex(o=>o.goodsId==goods.goodsId);
		  let brr=state.tableOne.find(o=>o.goodsId==goods.goodsId);
		  state.tableOne.splice(arr,1);
		  state.tableData.push(brr);
		this.commit("localstaba");
		this.commit("localstotalMoney");
		this.commit("localstotalCount");
		this.commit("localstableData");
		this.commit("getAllMoney");
	  },
	  //点餐存储
	  localstableData(state){
	  	localStorage.setItem("localtableData",JSON.stringify(state.tableData));
	  },
	  //挂单存储
	  localstaba(state){
	  	localStorage.setItem("localtableOne",JSON.stringify(state.tableOne))
	  },
	  //数量存储
	  localstotalMoney(state){
	  	localStorage.setItem("localtotalMoney",JSON.stringify(state.totalMoney))
	  },
	  //价钱存储
	  localstotalCount(state){
		  localStorage.setItem("localtotalCount",JSON.stringify(state.totalCount))
	  }
  },
  actions: {}
});
