import Vue from 'vue';
import VueRouter from 'vue-router';

// import Login from "../page/login/Login.vue"

//以插件的方式添加到实例
Vue.use(VueRouter);

let router = new VueRouter({
    routes: [{
            path: '/', //重定向：当浏览器url地址为/,自动跳转到/home
            redirect: '/home'
        },

        //首页路由
        {
            name: 'Home',
            path: '/home',
            component: (resolve) => require(['../page/home/Home.vue'], resolve)
        },

        //分类页路由
        {
            name: 'List',
            path: '/list',
            component: (resolve) => require(['../page/list/List.vue'], resolve)
        },

        //搜索页路由
        {
            name: 'Search',
            path: '/search',
            component: (resolve) => require(['../page/search/Search.vue'], resolve)
        },

        //详情页路由
        {
            name: 'Goods',
            path: '/goods',
            component: (resolve) => require(['../page/goods/Goods.vue'], resolve)
        },

        //购物车页路由
        {
            name: 'Cart',
            path: '/cart',
            component: (resolve) => require(['../page/cart/Cart.vue'], resolve),
            meta: {
                requiresAuth: true
            }
        },

        //登陆页路由 
        {
            name: 'Login',
            path: '/login',
            component: (resolve) => require(['../page/login/Login.vue'], resolve),
            // 单个路由独享
            beforeEnter(to, from, next) {
                let user = localStorage.getItem("user");
                if (user) {
                    user = JSON.parse(user);
                    let token = user.token;
                    let axios = Vue.prototype.$axios;
                    axios.post("/verifyToken", {
                        token
                    }).then(({ data }) => {

                        if (data.status === 1) {
                            next({
                                name:"Home"
                            });
                        } else if(data.status === 0) {
                            next({
                                name: 'Login',
                                params: { from: to.fullPath }
                            })
                        }

                    })
                } else {
                    next();
                }
            }
        },

        //注册页路由
        {
            name: 'Reg',
            path: '/reg',
            component: (resolve) => require(['../page/reg/Reg.vue'], resolve)
        },
        //我的商城路由
        {
            name: 'Mall',
            path: '/personal',
            component: (resolve) => require(['../page/personal/Personal.vue'], resolve),
            meta: {
                requiresAuth: true
            }
        },
        // 商品列表
        {
            name: "ProductList",
            path: "/product_list",
            component: (resolve) => require(['../page/productList'], resolve),
            beforeEnter(to, from, next) {
                if (to.query.gc_id || to.query.keyword || to.query.b_id) {
                    next();
                }
            }
        },
        // 商品信息
        {
            name: "Goods",
            path: "/goods",
            component: (resolve) => require(['../page/goods/Goods.vue'], resolve),
            meta: {
                requiresAuth: true
            }
        }
    ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(item => item.meta.requiresAuth)) {
        let user = localStorage.getItem("user");


        if (user) {
            user = JSON.parse(user);
            let token = user.token;
            let axios = Vue.prototype.$axios;
            axios.post("/verifyToken", {
                token
            }).then(({ data }) => {

                if (data.status === 1) {
                    next();
                } else if(data.status === 0) {
                    next({
                        name: 'Login',
                        params: { from: to.fullPath }
                    })
                }

            })
        } else {
            next({
                name: 'Login',
                params: { from: to.fullPath }
            })
        }
    } else {
        next();
    }
})

export default router;