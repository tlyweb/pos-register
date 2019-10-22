<template>
  <div id="app">
<!--	  左侧导航-->
	  <leftNav></leftNav>

<!--	  操作区域-->
	  <div class="main">
		  <router-view />
	  </div>
  </div>
</template>

<script>
export default {
  name: 'app',
	components:{
		leftNav:()=>import('./components/common/leftNav.vue')
	}
}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
	}
	#app{
		text-align: center;
	}
	.main{
		float: left;
		width: 95%;
		background-color: #EFF2F7;
		height: 100%;
		overflow: auto;
	}
</style>
