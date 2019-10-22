import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
	mode:"history",
	base: process.env.BASE_URL,
  routes: [
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
	  {
	  	path:"/",
		name:"Pos",
		component:()=>import("./components/page/Pos.vue")
	  },
	  {
	  	path:"/shop",
		name:"Shop",
		component:()=>import("./views/shop.vue")
	  },
	  {
	  	path:"/commodity",
		name:"Commodity",
		component:()=>import("./views/commodity.vue")
	  },
	  {
	  	path:"/member",
		name:"Member",
		component:()=>import("./views/member.vue")
	  },
	  {
	  	path:"/statis",
		name:"Statis",
		component:()=>import("./views/statis.vue")
	  },
	  {
	  	path:"/setting",
		name:"Setting",
		component:()=>import("./views/setting.vue")
	  }
  ]
});
