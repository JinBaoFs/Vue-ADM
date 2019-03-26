import Vue from 'vue';
import Vuex, {
    Store
} from 'vuex';


// 使用
Vue.use(Vuex);


const store = new Store({
    // 公共数据
    state: {
        active: 0,
        navMenu: [{
                id: "home",
                path: "/home",
                imegs: "http://m.ggrsc.com/images/home_w.png",
                text: "首页"
            },
            {
                id: "search",
                path: "/search",
                imegs: "http://m.ggrsc.com/images/search_w.png",
                text: "搜索"
            },
            {
                id: "list",
                path: "/list",
                imegs: "http://m.ggrsc.com/images/categroy_w.png",
                text: "分类"
            },
            {
                id: "cart",
                path: "/cart",
                imegs: "http://m.ggrsc.com/images/cart_w.png",
                text: "购物车"
            },
            {
                id: "personal",
                path: "/personal",
                imegs: "http://m.ggrsc.com/images/member_w.png",
                text: "我的商城"
            },
        ],
        cartList: []
    },

    getters: {

    },

    // 定义state的修改方式：mutations
    mutations: {
        // 修改默认高亮
        changeIdx(state, idx) {
            state.active = idx
        },
        // 加入购物车
        addCartList(state, playlod) {
            state.cartList.push(playlod);
        },
        // 已经加入过购物车改变数量
        changeCartGoodsNum(state, {
            goods_id,
            goods_num
        }) {
            // // 遍历购物车里的数据
            state.cartList.forEach(element => {
                if (element.goods_id === goods_id) {
                    element.goods_num = goods_num
                }
            });
        }
    },

    actions: {

    }
});

export default store;