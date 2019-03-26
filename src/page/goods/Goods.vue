<template>
  <div>
    <header :class="isClass = isClass? 'pro' : ''" ref="head">
      <div class="header-wrap">
        <a href="javascript:history.go(-1)" class="header-l">
          <van-icon name="arrow-left"></van-icon>
        </a>
        <ul class="header-nav header-c">
          <li class="cur">商品</li>
          <li id="goodsBody">详情</li>
          <li id="goodsEvaluation">评价</li>
        </ul>
        <div class="header-r" @click="showBlock=!showBlock">
          <van-icon name="ellipsis"></van-icon>
          <NavMenu v-show="showBlock"></NavMenu>
          <sup class="msgRadio"></sup>
        </div>
      </div>
    </header>
    <!-- 加入购物车 -->
    <section>
      <section class="goods-img-box">
        <van-swipe :autoplay="3000" indicator-color="#ED5564">
          <van-swipe-item v-for="(item,idx) in this.goodsImg" :key="idx">
            <img :src="item">
          </van-swipe-item>
        </van-swipe>
        <div class="collection">
          <van-icon name="like-o"></van-icon>
        </div>
      </section>
      <section class="goods-content" ref="content">
        <!-- 名称 -->
        <div class="goods-detail-name">
          <dl>
            <dt>{{goods_info.goods_name}}</dt>
            <dd>{{goods_info.goods_jingle}}</dd>
          </dl>
        </div>
        <!-- 价格销量 -->
        <div class="goods-detail-price">
          <dl>
            <dt>
              ￥
              <em>{{goods_info.goods_price}}</em>
            </dt>
          </dl>
          <span class="sold">销量:{{goods_info.goods_salenum}}件</span>
        </div>
        <div class="goods-detail-item">
          <div class="item-name">送至</div>
          <div class="item-con">
            <dl class="goods-detail-freight">
              <dt>
                <span id="get_area_selected_name">{{goods_hair_info.area_name}}</span>
                <strong id="get_area_selected_whether">{{goods_hair_info.if_store_cn}}</strong>
              </dt>
              <dd id="get_area_selected_content"></dd>
            </dl>
          </div>
          <div class="item-more location">
            <van-icon name="map-marked"></van-icon>
          </div>
        </div>
        <div class="goods-detail-item" id="goods_spec_selected">
          <div class="item-name">已选</div>
          <div class="item-con">
            <dl class="goods-detail-sel">
              <dt>
                <span>
                  规格
                  <em>1.07米</em>
                </span>
                <span>
                  类型
                  <em>每卷30M</em>
                </span>
              </dt>
            </dl>
          </div>
          <div class="item-more">
            <van-icon name="arrow"></van-icon>
          </div>
        </div>
        <div class="goods-detail-comment" id="goodsEvaluation1">
          <div class="title">
            商品评价
            <span class="rate">
              好评率
              <em>{{goods_evaluate_info.good_percent}}%</em>
            </span>
            <span class="rate-num">（{{goods_evaluate_info.all}}人评价）</span>
            <div class="item-more">
              <van-icon name="arrow"></van-icon>
            </div>
          </div>
          <div class="comment-info">
            <dl v-for="(item,idx) in goodsDetails.goods_eval_list" :key="idx">
              <dt class="cleFloating">
                <div class="goods-raty">
                  <van-icon name="star" v-for="(star,idx) in item.geval_scores*1" :key="idx"></van-icon>
                </div>
                <time>{{item.geval_addtime_date}}</time>
                <span class="user-name">{{item.geval_frommembername}}</span>
              </dt>
              <dd>{{item.geval_content}}</dd>
            </dl>
          </div>
        </div>
        <section class="goods-detail-store">
          <div class="store-name">
            <van-icon name="shop-o"></van-icon>
            <span>{{store_info.store_name}}</span>
          </div>
          <div class="store-rate">
            <span class="equal">
              描述相符
              <em>{{store_desccredit.credit}}</em>
              <i>{{store_desccredit.percent_text}}</i>
            </span>
            <span class="equal">
              服务态度
              <em>{{store_servicecredit.credit}}</em>
              <i>{{store_servicecredit.percent_text}}</i>
            </span>
            <span class="equal">
              发货速度
              <em>{{store_deliverycredit.credit}}</em>
              <i>{{store_deliverycredit.percent_text}}</i>
            </span>
          </div>
          <div class="item-more">
            <van-icon name="arrow"></van-icon>
          </div>
        </section>
        <section class="goods-detail-recom">
          <h4>店铺推荐</h4>
          <ul>
            <li v-for="item in this.goodsDetails.goods_commend_list" :key="item.goods_id">
              <div class="pic">
                <img :src="item.goods_image_url">
              </div>
              <dl>
                <dt>{{item.goods_name}}</dt>
                <dd>
                  ￥
                  <em>{{item.goods_promotion_price}}</em>
                </dd>
              </dl>
            </li>
          </ul>
        </section>
        <section class="goods-detail-bottom">点击查看商品详情</section>
        <footer>
          <van-goods-action>
            <van-goods-action-mini-btn icon="chat-o" text="客服"/>
            <van-goods-action-mini-btn icon="cart-o" @click="goCart()" :info="cartNum" text="购物车"/>
            <van-goods-action-big-btn @click="addCart" text="加入购物车"/>
            <van-goods-action-big-btn primary text="立即购买"/>
          </van-goods-action>
        </footer>
      </section>
    </section>
  </div>
</template>
<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
import { Icon } from "vant";
import NavMenu from "../../components/NavMenu.vue";
import { GoodsAction, GoodsActionBigBtn, GoodsActionMiniBtn } from "vant";
import { Sku } from "vant";
// 弹出层
import { Toast } from "vant";

Vue.use(Toast);

Vue.use(Sku);
Vue.use(GoodsAction)
  .use(GoodsActionBigBtn)
  .use(GoodsActionMiniBtn);
export default {
  data() {
    return {
      showBlock: false,
      isClass: false,
      showBase: true,
      goodsDetails: {},
      //   轮播图
      goodsImg: [],
      //   名称
      goods_info: {},
      //   发货地址
      goods_hair_info: {},
      //   评价
      goods_evaluate_info: {},
      //   店铺名称
      store_info: {},
      //   店铺信用
      store_deliverycredit: {},
      store_desccredit: {},
      store_servicecredit: {}
    };
  },
  methods: {
    handleScroll() {
      // 获取页面滚动条距离
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // 获取content滚动距离
      let offsetTopCon = this.$refs.content.offsetTop;
      if (scrollTop < offsetTopCon - 130) {
        this.isClass = false;
      } else {
        this.isClass = true;
      }
    },
    // 请求详情页数据
    async getGoodsDet() {
      const t1 = Toast.loading({
        duration: 0,
        forbidClick: true,
        message: "加载中..."
      });
      let { goods_id } = this.$route.query;
      let {
        data: { datas }
      } = await this.$axios.get("http://www.ggrsc.com/mobile/index.php?", {
        params: {
          act: "goods",
          op: "goods_detail",
          goods_id,
          key: "24cce63b8dd1ee85ae75f7f626a9d167s"
        }
      });
      if (datas) {
        t1.clear();
        this.goodsDetails = datas;
        this.goodsImg = this.goodsDetails.goods_image.split(",");
        this.goods_info = this.goodsDetails.goods_info;
        this.goods_hair_info = this.goodsDetails.goods_hair_info;
        this.goods_evaluate_info = this.goodsDetails.goods_evaluate_info;
        this.store_info = this.goodsDetails.store_info;
        this.store_deliverycredit = this.goodsDetails.store_info.store_credit.store_deliverycredit;
        this.store_desccredit = this.goodsDetails.store_info.store_credit.store_desccredit;
        this.store_servicecredit = this.goodsDetails.store_info.store_credit.store_servicecredit;
      } else {
        Toast.fail("加载失败");
      }
    },
    // 加入购物车

    addCart() {
      let user = localStorage.getItem("user");
      if (user) {
        let {
          goods_info: {
            goods_id,
            goods_name,
            goods_price,
            spec_name,
            goods_spec
          },
          spec_image
        } = this.goodsDetails;
        //   判断是否添加过该商品 过滤每一条添加选择第一条
        let currentGoods = this.$store.state.cartList.filter(
          item => item.goods_id == goods_id
        )[0];
        if (currentGoods) {
          //   已经添加过  利用事件触发vuex($store)下的mutations 下的方法
          this.$store.commit("changeCartGoodsNum", {
            goods_id,
            goods_num: currentGoods.goods_num + 1
          });
        } else {
          //   没有添加过
          this.$store.commit("addCartList", {
            goods_id,
            goods_name,
            goods_price,
            spec_name,
            goods_spec,
            spec_imaged: spec_image[0],
            seleted: false,
            goods_num: 1
          });
        }
        Toast("已加入购物车");
      } else {
        console.log(666);
        this.$router.push("/login");
      }
      // 解构获取商品信息
    },
    // 跳转购物车路由
    goCart() {
      this.$router.push("/cart");
    }
  },
  created() {
    //  添加滚动监听事件
    window.addEventListener("scroll", this.handleScroll);
    // 请求数据 详情页数据
    this.getGoodsDet();
    //   购物车数量
  },
  destroyed() {
    //   离开页面删除滚动监听
    window.removeEventListener("scroll", this.handleScroll);
  },
  computed: {
    cartNum() {
      return this.$store.state.cartList.length;
    }
  },
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Icon.name]: Icon,
    NavMenu,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionBigBtn.name]: GoodsActionBigBtn,
    [GoodsActionMiniBtn.name]: GoodsActionMiniBtn,
    [Sku.name]: Sku
  }
};
</script>
<style lang="less" scoped>
.cleFloating::after {
  content: "";
  display: block;
  height: 0px;
  visibility: hidden;
  overflow: hidden;
  clear: both;
}
header {
  height: 40px;
  position: fixed;
  z-index: 8;
  top: 0;
  left: 0;
  right: 0;
  bottom: auto;
  .header-wrap {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #333;
    .header-l,
    .header-r {
      width: 0.85rem;
      height: 80%;
      border-radius: 50%;
      background: #fff;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      align-items: center;
      color: #ed5564;
      border: 1px solid #eee;
    }
    .header-l {
      margin-left: 10px;
    }
    .header-r {
      position: relative;
      margin-right: 10px;
      .msgRadio {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #ed5564;
        position: absolute;
        right: -0.09rem;
        top: 0.1rem;
      }
    }

    align-items: center;
    .header-nav {
      height: 100%;
      justify-content: space-between;
      display: none;
      li {
        font-size: 14px;
        margin: 0px 12px;
        line-height: 40px;
      }
      li.cur {
        color: #ed5564;
        font-size: 16px;
        border-bottom: 2px solid #ed5564;
        font-weight: 600;
      }
    }
  }
}
header.pro {
  background: #f8f8f8;
  .header-nav {
    display: flex;
  }
  .header-l,
  .header-r {
    width: 1.06667rem;
    height: 100%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    color: #5a5a5a;
    background: none;
    border: none;
  }

  .header-r {
    .msgRadio {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #ed5564;
      position: absolute;
      right: 0.2rem;
      top: 0.2rem;
    }
  }
}
.goods-img-box {
  overflow: hidden;
  width: 100%;
  height: 375px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  .collection {
    width: 0.8rem;
    height: 0.8rem;
    text-align: center;
    line-height: 1.3rem;
    position: absolute;
    bottom: 0.7rem;
    right: 0.7rem;
    border: 1px solid #eee;
    color: #ed5564;
    background: #fff;
    font-size: 0;
    border-radius: 50%;
    i {
      font-size: 20px;
    }
  }
}
.van-swipe {
  .van-swipe-item {
    text-align: center;
    img {
      width: 100%;
      margin: 0 auto;
    }
  }
}
.goods-content {
  width: 100%;
  //   background: #fff;
  position: relative;
  margin-top: 375px;
  z-index: 1;
  font-size: 13px;
  .goods-detail-name {
    display: block;
    padding: 0.3rem 0.25rem 0.1rem 0.25rem;
    background-color: #fff;
    border-top: solid 0.05rem #eee;
    dt {
      line-height: 0.55rem;
    }
    dd {
      color: #777;
      line-height: 0.49rem;
      font-size: 12px;
    }
  }
  .goods-detail-price {
    position: relative;
    z-index: 1;
    display: block;
    padding: 0 0.25rem;
    background-color: #fff;
    dt {
      display: inline-block;
      color: #db4453;
      line-height: 0.7rem;
      font-size: 0.25rem;
      em {
        font-size: 0.55rem;
        font-style: normal;
      }
    }
    .sold {
      position: absolute;
      z-index: 1;
      top: 0;
      right: 0.25rem;
      display: block;
      font-size: 0.35rem;
      line-height: 0.7rem;
      height: 0.7rem;
    }
  }
  .goods-detail-item {
    position: relative;
    z-index: 1;
    padding: 0.3rem 0.25rem;
    background: #fff;
    border-bottom: solid 1px #eee;
    .item-name {
      position: absolute;
      z-index: 1;
      left: 0.25rem;
      display: block;
      width: 1rem;
      height: 0.4rem;
      font-size: 12px;
      color: #888;
    }
    .item-con {
      margin-left: 1rem;
      font-size: 0.32rem;
      .goods-detail-sel {
        dt {
          span {
            display: inline-block;
            margin: 0 0.3rem 0.1rem 0;
            border: solid 1px #ccc;
            font-size: 12px;
            line-height: 0.5rem;
            padding: 0 0.2rem;
            color: #777;
            em {
              font-style: normal;
            }
          }
        }
      }
      dt {
        strong {
          color: #ed5564;
          margin-left: 0.4rem;
        }
      }
    }
    .item-more {
      position: absolute;
      z-index: -1;
      top: 0.35rem;
      right: 0.3rem;
      display: block;
      color: #888;
    }
  }
  .goods-detail-comment {
    background-color: #fff;
    padding: 0 0.25rem;
    margin-top: 0.3rem;
    border-top: solid #eee 1px;
    border-bottom: solid #eee 1px;
    .title {
      position: relative;
      height: 1.1rem;
      line-height: 1.1rem;
      z-index: 1;
      font-size: 12px;
      color: #888;
      span {
        margin-left: 0.6rem;
        color: #ed5564;
        em {
          font-weight: 600;
          margin-left: 0.1rem;
          font-style: normal;
        }
      }
      span.rate-num {
        position: absolute;
        z-index: 1;
        right: 0.5rem;
        color: #888;
      }
    }
    .comment-info {
      font-size: 12px;
      dl {
        display: block;
        padding-bottom: 0.2rem;
        border-top: solid 1px #eee;
        dt {
          display: block;
          padding: 0.2rem 0 0.1rem 0;
          overflow: hidden;
          .goods-raty {
            display: block;
            float: left;
            height: 0.35rem;
            color: #ed5564;
          }
          time {
            float: right;
            width: 2rem;
            text-align: right;
            color: #888;
          }
          span.user-name {
            float: right;
            color: #555;
          }
        }
        dd {
          display: block;
          line-height: 0.5rem;
        }
      }
    }
    .item-more {
      position: absolute;
      z-index: -1;
      top: 2px;
      right: 0.09rem;
      display: block;
    }
  }
}
.goods-detail-store {
  font-size: 12px;
  display: block;
  position: relative;
  z-index: 1;
  padding: 0 0.25rem;
  margin: 0.25rem 0;
  background: #fff;
  border: solid #eee;
  border-width: 1px;
  .store-name {
    font-size: 14px;
    height: 0.85rem;
    padding: 0.15rem 0 0.15rem 0;
    color: #333;
    border-bottom: 1px solid #eee;
    .van-icon {
      font-size: 16px;
      vertical-align: middle;
    }
    span {
      vertical-align: middle;
    }
  }
  .store-rate {
    height: 0.9rem;
    padding: 0.2rem 0 0.2rem 0;
    span {
      display: inline-block;
      width: 33.33%;
      color: #888;
      em,
      i {
        display: inline-block;
        vertical-align: middle;
        font-weight: 600;
        font-style: normal;
      }
    }
    span.equal em {
      color: #ed5564;
    }
    span.equal i {
      color: #fff;
      background-color: #ed5564;
      font-weight: normal;
      width: 20px;
      height: 20px;
      text-align: center;
      padding: 2px;
      margin-left: 5px;
    }
  }
  .item-more {
    position: absolute;
    z-index: -1;
    top: 0.25rem;
    right: 0.3rem;
    display: block;
    color: #888;
  }
}
.goods-detail-recom {
  background: #fff;
  padding: 0 0 0 0.25rem;
  margin: 0.25rem 0;
  margin-bottom: 0;
  background-color: #fff;
  border: solid #eee;
  border-width: 1px;
  overflow: hidden;
  font-size: 12px;
  h4 {
    display: block;
    padding: 0.2rem 0;
    font-size: 12px;
    color: #888;
    font-weight: normal;
  }
  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    li {
      width: calc(25% - 10px);
      margin-bottom: 5px;
      .pic {
        width: 70px;
        height: 70px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }

      dl {
        margin-top: 0.1rem;
        dt {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
        dd {
          margin-top: 0.15rem;
          color: #333;
          em {
            font-style: normal;
          }
        }
      }
    }
  }
}
.goods-detail-bottom {
  text-align: center;
  width: 100%;
  height: 1rem;
  margin: 0 auto;
  line-height: 1rem;
  font-size: 12px;
  color: #999;
  margin-bottom: 50px;
}
.van-goods-action {
  z-index: 2;
}
</style>
