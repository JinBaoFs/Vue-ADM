<template>
    <div class="productList">
        <!-- 搜索组件 -->
        <HeaderSearch />
        <!-- 排序&内容组件  -->
        <div class="main">
            <!-- 排序 -->
            <div class="goods-search-list-nav">
                <ul id="nav_ul">
                    <li @click="change($event)" class="current">
                        <a href="javascript:void(0);" id="sort_default">
                            {{orderBy}}
                            <i></i>
                        </a>
                    </li>
                    <li @click="sales($event)">
                        <a href="javascript:void(0);">销量优先</a>
                    </li>
                    <li @click="filtrate($event)">
                        <a href="javascript:void(0);" id="search_adv">
                            筛选
                            <i></i>
                        </a>
                    </li>
                </ul>
                <!-- 切换样式按钮 -->
                <div class="browse-mode" @click="addClass">
                    <img :src="Style.Icons" alt>
                </div>
                <!-- 排序内容 -->
                <div id="sort_inner" class="goods-sort-inner" v-show="isShow">
                    <span v-for="(item,idx) in sort_inner" :key="idx" @click="currs(idx,$event)">
                        <a href="javascript:void(0);" ref="nrk">
                            {{item}}
                            <i></i>
                        </a>
                    </span>
                </div>
            </div>
            <!-- 商品内容 -->
            <div class="productListGoods" v-if="DataRes.length>0">
                <ul class="goods-secrch-list" :id="Style.twoLines">
                    <li v-for="item in DataRes" :key="item.goods_id" @click="HopRouting(item.goods_id)">
                        <a href="javascript:;" class="goods_pic">
                            <img :src="item.goods_image_url" alt>
                        </a>
                        <dl>
                            <dt>{{item.goods_name}}</dt>
                            <dd>
                                <h6>{{item.goods_jingle}}</h6>
                                <em>￥ {{item.goods_price}}</em>
                                <p>
                                    销量：
                                    <strong>{{item.goods_salenum}}</strong>
                                    <span>{{item.is_own_shop==1?"自营":"..."}}</span>
                                </p>
                            </dd>
                        </dl>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 无人商品显示 -->
        <div class="nctouch-norecord search" v-if="DataRes.length<=0">
            <div class="norecord-ico">
                <i></i>
            </div>
            <dl>
                <dt>没有找到任何相关信息</dt>
                <dd>选择或搜索其它商品分类/名称...</dd>
            </dl>
            <a href="javascript:history.go(-1)" class="btn">重新选择</a>
        </div>
        <BackTop />
        <!-- 底部 -->
        <FootNav />
    </div>
</template>
<script>
// 引入组件
import HeaderSearch from "../../components/HeaderSearch.vue";
import { Card } from "vant";
import FootNav from "../../components/FootNav.vue";
import BackTop from "../../components/BackTop.vue";

export default {
    data() {
        return {
            // 商品 排序 标题
            isShow: false,
            sort_inner: ["综合排序", "价格从高到低", "价格从低到高", "人气排序"],
            orderBy: "综合排序",

            // 商品内容
            Style: {
                Ds: false,
                Iocns: "http://m.ggrsc.com/images/browse_list.png",
                twoLines: ""
            },
            defaultParams: {
                act: "goods",
                op: "goods_list",
                page: 10
            },
            curpage: 1,
            ParAms: null,

            // 加载更多开关数据
            onOff: true,
            DataRes: []
        };
    },

    // 组件注册
    components: {
        HeaderSearch,
        FootNav,
        BackTop,
        [Card.name]: Card
    },
    methods: {
        // 详情页路由跳转
        HopRouting(goods_id) {
            this.$router.push({ name: "Goods", query: { goods_id } });
        },
        NavLiClass(event) {
            let target = event.target;

            if (
                target.tagName === "LI" ||
                target.tagName === "A" ||
                target.tagName === "I"
            ) {
                let parent = target.parentNode.parentNode;
                let childs = parent.children;

                for (var i = 0; i < childs.length; i++) {
                    childs[i].classList.remove("current");
                }
                target.parentNode.classList.add("current");
            }
        },

        // 改变整体样式
        addClass() {
            this.Style.Ds = !this.Style.Ds;

            if (this.Style.Ds == true) {
                this.Style.Icons = "http://m.ggrsc.com/images/browse_grid.png";
                this.Style.twoLines = "twoLines";
            } else {
                this.Style.twoLines = "";
                this.Style.Icons = "http://m.ggrsc.com/images/browse_list.png";
            }
        },

        // 右上角小图标
        change(event) {
            this.isShow = !this.isShow;
            this.NavLiClass(event);
        },

        //请求封装
        async AxiosProductListGoods(Url, data) {
            // 请求参数判断
            if (this.keyword) {
                data = { ...data, keyword: this.keyword };
            } else if (this.gc_id) {
                data = { ...data, gc_id: this.gc_id };
            }

            let res = await this.$axios.get(Url, { params: { ...data } });
            let { datas, hasmore } = res.data;
            let { goods_list } = datas;
            this.onOff = hasmore;

            if (hasmore) {
                return goods_list;
            } else {
                return goods_list;
            }
        },

        // 排序发起请求获取数据
        async OrderByPs(curpage) {
            let goods_list;
            switch (this.orderBy) {
                case "综合排序":
                    this.defaultParams = {
                        ...this.defaultParams,
                        curpage
                    };
                    goods_list = await this.AxiosProductListGoods(
                        "http://www.ggrsc.com/mobile/index.php",
                        this.defaultParams
                    );

                    break;

                case "价格从高到低":
                    this.Params = {
                        ...this.defaultParams,
                        key: 3,
                        order: 2,
                        curpage
                    };
                    goods_list = await this.AxiosProductListGoods(
                        "http://www.ggrsc.com/mobile/index.php",
                        this.Params
                    );

                    break;

                case "价格从低到高":
                    this.Params = {
                        ...this.defaultParams,
                        key: 3,
                        order: 1,
                        curpage
                    };
                    goods_list = await this.AxiosProductListGoods(
                        "http://www.ggrsc.com/mobile/index.php",
                        this.Params
                    );

                    break;

                case "人气排序":
                    this.Params = {
                        ...this.defaultParams,
                        key: 2,
                        order: 2,
                        curpage
                    };
                    goods_list = await this.AxiosProductListGoods(
                        "http://www.ggrsc.com/mobile/index.php",
                        this.Params
                    );

                    break;
            }
            return goods_list;
        },

        // 排序功能
        async currs(idx, e) {
            let target = e.target;

            if (target.tagName === "A") {
                let ref = this.$refs.nrk;
                for (var i = 0; i < ref.length; i++) {
                    ref[i].classList.remove("cur");
                }
                // 添加clss
                target.classList.add("cur");

                // 改变内容
                this.orderBy = this.sort_inner[idx];

                // 关闭
                this.isShow = !this.isShow;
            }
            this.curpage = 1;
            document.documentElement.scrollTop = 0;
            let goods_list = await this.OrderByPs(this.curpage);
            this.DataRes = goods_list;
        },

        // 销量功能
        async sales(event) {
            this.isShow = false;
            this.NavLiClass(event);
            this.curpage = 1;
            document.documentElement.scrollTop = 0;

            this.defaultParams = {
                ...this.defaultParams,
                curpage: this.curpage,
                key: 1,
                order: 2
            };

            let goods_list = await this.AxiosProductListGoods(
                "http://www.ggrsc.com/mobile/index.php",
                this.defaultParams
            );
            this.DataRes = goods_list;
        },

        // 筛选
        filtrate(event) {
            this.isShow = false;
            this.NavLiClass(event);
        },

        // 滚动加载更多
        async LoadMore() {
            //变量scrollTop是滚动条滚动时，距离顶部的距离
            var scrollTop =
                document.documentElement.scrollTop || document.body.scrollTop;

            //变量windowHeight是可视区的高度
            var windowHeight =
                document.documentElement.clientHeight || document.body.clientHeight;

            //变量scrollHeight是滚动条的总高度
            var scrollHeight =
                document.documentElement.scrollHeight || document.body.scrollHeight;

            //滚动条到底部的条件
            if (scrollTop + windowHeight == scrollHeight) {
                if (this.onOff) {
                    this.curpage = ++this.curpage;
                    let goods_list = await this.OrderByPs(this.curpage);
                    this.DataRes = [...this.DataRes, ...goods_list];
                } else {
                    return;
                }
            }
        }
    },
    async created() {
        // "综合排序", "价格从高到低", "价格从低到高", "人气排序"
        this.DataRes = [];
        let goods_list = await this.OrderByPs(this.curpage);
        this.DataRes = goods_list;
    },
    watch: {
        $route(to, from) {
            console.log("to", to);
            console.log("from", from);
        }
    },
    computed: {
        keyword() {
            return this.$route.query["keyword"];
        },
        gc_id() {
            return this.$route.query["gc_id"];
        }
    },
    mounted() {
        let ref = this.$refs.nrk;
        ref[0].classList.add("cur");
        window.addEventListener("scroll", this.LoadMore, true);
    }
};
</script>
<style lang="less">
@import url("./productListLess/index.less");
</style>