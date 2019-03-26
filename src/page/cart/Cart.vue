<template>
  <div>
    <header class="header">
      <a href="javascript:history.go(-1)" class="header-l">
        <van-icon name="arrow-left"></van-icon>
      </a>
      <div class="header-c">购物车</div>
      <div class="header-r" @click="showBlock=!showBlock">
        <van-icon name="ellipsis"></van-icon>
        <NavMenu v-show="showBlock"></NavMenu>
        <sup class="msgRadio"></sup>
      </div>
    </header>
    <section class="cart-list">
      <dl>
        <!-- <dt>
          <div class="left-check">
            <van-checkbox checked-color="#ED5564" class="check"></van-checkbox>
            <van-icon name="shop-o" class="shop-icon"></van-icon>
            <span>商家名称</span>
          </div>
        </dt>-->
        <dd v-for="(item,idx) in $store.state.cartList" :key="item.goods_id">
          <div class="left-check">
            <van-checkbox checked-color="#ED5564" class="check" v-model="item.seleted"></van-checkbox>
          </div>
          <div class="goods-pic">
            <div @click="getGoods(item.goods_id)">
              <img :src="item.spec_imaged">
            </div>
          </div>
          <div class="goods-con">
            <div href="#" class="goods-info" @click="getGoods(item.goods_id)">{{item.goods_name}}</div>
            <span class="specifications">默认</span>
            <span class="goods-pri">￥{{item.goods_price}}</span>
          </div>
          <div class="value-box">
            <span class="minus" @click="reduceGoodsNum(idx)">
              <div>&minus;</div>
            </span>
            <span>
              <input
                type="text"
                pattern="[0-9]*"
                readonly
                class="buy-num buynum"
                :value="item.goods_num"
              >
            </span>
            <span class="add" @click="addGoodsNum(idx)">
              <div>
                <van-icon name="plus"></van-icon>
              </div>
            </span>
          </div>
          <div class="delete-icon" @click="removeGoods(idx)">
            <van-icon name="delete"></van-icon>
          </div>
        </dd>
      </dl>
    </section>
    <footer class="footer">
      <div class="all-check">
        <van-checkbox checked-color="#ED5564" v-model="checkedAll" class="check"></van-checkbox>
      </div>
      <div class="total">
        <dl class="total-money">
          <dt>合计总金额：</dt>
          <dd>
            ￥
            <em>{{andPrice}}</em>
          </dd>
        </dl>
      </div>
      <div class="check-out ok">确认信息</div>
    </footer>
    <div class="nctouch-norecord search" v-if="$store.state.cartList.length <=0">
      <div class="norecord-ico">
        <i></i>
      </div>
      <dl>
        <dt>购物车空空如也</dt>
        <dd>选择或搜索其它商品分类/名称...</dd>
      </dl>
      <p class="btn" @click="goHome">去购物</p>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Checkbox, CheckboxGroup } from "vant";
import { Icon } from "vant";
import NavMenu from "../../components/NavMenu.vue";
import { Dialog } from "vant";
import { Toast } from "vant";
import { create } from "domain";
Vue.use(Toast);
Vue.use(Dialog);
export default {
  data() {
    return {
      showBlock: false
    };
  },
  methods: {
    // 详情页路由跳转
    getGoods(goods_id) {
      this.$router.push({ name: "Goods", query: { goods_id } });
    },
    // 增加商品
    addGoodsNum(idx) {
      this.$store.state.cartList[idx].goods_num =
        this.$store.state.cartList[idx].goods_num + 1;
    },
    // 减少商品
    reduceGoodsNum(idx) {
      if (this.$store.state.cartList[idx].goods_num <= 1) {
        return;
      } else {
        this.$store.state.cartList[idx].goods_num =
          this.$store.state.cartList[idx].goods_num - 1;
      }
    },
    // 增加商品
    removeGoods(idx) {
      Dialog.confirm({
        title: "删除商品",
        message: "确认要删除该商品吗"
      })
        .then(() => {
          this.$store.state.cartList.splice(idx, 1);
          Toast("已删除");
        })
        .catch(() => {});
    },
    // 跳转首页
    goHome() {
      this.$router.push("/home");
    }
  },
  computed: {
    // 全选
    checkedAll: {
      get() {
        return this.$store.state.cartList.length <= 0
          ? false
          : this.$store.state.cartList.every(item => item.seleted);
      },
      set(checked) {
        this.seleted = checked
          ? this.$store.state.cartList.map(item => {
              item.seleted = true;
            })
          : this.$store.state.cartList.map(item => {
              item.seleted = false;
            });
      }
    },
    // 监听数据变化
    andPrice() {
      // 价格总数
      var andPirceNums = 0;
      for (var i = 0; i < this.$store.state.cartList.length; i++) {
        if (this.$store.state.cartList[i].seleted) {
          andPirceNums +=
            this.$store.state.cartList[i].goods_num *
            this.$store.state.cartList[i].goods_price;
        }
      }
      return andPirceNums.toFixed(2);
    }
    // 监听购物车是否为空
  },
  components: {
    [Icon.name]: Icon,
    [Checkbox.name]: Checkbox,
    [CheckboxGroup.name]: CheckboxGroup,
    NavMenu
  }
};
</script>
<style lang="less" scoped>
.header {
  display: flex;
  justify-content: space-between;
  height: 1.06667rem;
  width: 100%;
  border-bottom: 2px solid #eee;
  > div,
  > a {
    height: 1.06667rem;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-content: center;
    text-align: center;
    color: #5a5a5a;
  }
  .header-l {
    height: 1.06667rem;
    width: 1.06667rem;
    font-size: 20px;
  }
  .header-r {
    height: 1.06667rem;
    width: 1.06667rem;
    position: relative;
    z-index: 9;
  }
  .header-c {
    line-height: 1.06667rem;
    font-size: 16px;
  }
  .showBox {
    position: relative;
  }
}
.cart-list {
  dl {
    background-color: #fff;
    dt {
      display: block;
      padding: 12px;
      border-bottom: 1px solid #eee;
      .left-check {
        line-height: 20px;
        font-size: 15px;
        display: flex;
        justify-content: flex-start;
        align-content: center;
        i {
          line-height: 24px;
          margin: 0px 10px;
        }
        span {
          line-height: 22px;
        }
      }
    }
    dd {
      padding: 12px 0px;
      margin-left: 12px;
      position: relative;
      .left-check {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        .check {
          font-size: 0px !important;
        }
      }
      .goods-con {
        margin-left: 2.8rem;
        margin-right: 1.3rem;
        font-size: 12px;
        .specifications {
          color: #999;
          display: block;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 70%;
        }
        .goods-info {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
        .goods-pri {
          color: #db4453;
          line-height: 0.8rem;
        }
      }
      .goods-pic {
        display: block;
        width: 1.85rem;
        height: 1.85rem;
        padding: 0.1rem;
        position: absolute;
        z-index: 1;
        top: 50%;
        left: 0.8rem;
        transform: translateY(-50%);
        border: solid 1px #eee;
        border-radius: 0.1rem;
        img {
          width: 100%;
          height: 100%;
          border-radius: 0.1rem;
        }
      }
      .value-box {
        position: absolute;
        z-index: 1;
        bottom: 10px;
        right: 10px;
        font-size: 0px;
        border: solid 1px #ccc;
        border-radius: 0.2rem;
        overflow: hidden;
        span {
          display: inline-block;
          vertical-align: top;
          line-height: 0;
          > div {
            display: block;
            width: 0.3rem;
            height: 0.3rem;
            margin: 0.2rem;
            opacity: 0.65;
            font-size: 12px;
            text-align: center;
            line-height: 0.3rem;
          }
          .buy-num {
            width: 0.7rem;
            height: 0.7rem;
            padding: 0;
            font-size: 0.35rem;
            font-weight: lighter;
            line-height: 1.3rem;
            text-align: center;
            border: solid #ccc;
            border-width: 0 1px;
            border-radius: 0;
          }
        }
        span.minus {
          background-color: #fafafa;
          border-radius: 0.2rem 0 0 0.2rem;
        }
        span.add {
          background-color: #fafafa;
          border-radius: 0 0.2rem 0.2rem 0;
        }
      }
    }
  }
}
.footer {
  width: 100%;
  height: 50px;
  position: fixed;
  background: #fff;
  bottom: 0;
  left: 0;
  font-size: 0;
  .all-check {
    position: absolute;
    z-index: 1;
    top: 0.4rem;
    left: 12px;
  }
  .total {
    display: block;
    float: left;
    text-align: right;
    width: 75%;
    .total-money {
      margin-right: 1rem;
      padding: 12px 0;
      font-size: 14px;
      dt {
        display: inline-block;
        font-size: 0.3rem;
      }
      dd {
        display: inline-block;
        color: #db4453;
        em {
          font-size: 0.45rem;
          font-weight: bold;
          font-style: normal;
        }
      }
    }
  }
  .check-out {
    display: block;
    float: right;
    width: 25%;
    height: 50px;
    font-size: 16px;
    color: #fff;
    text-align: center;
    line-height: 50px;
  }
  .check-out.ok {
    background-color: #ed5564;
  }
}
.msgRadio {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #ed5564;
  position: absolute;
  right: 0.2rem;
  top: 0.2rem;
}
.delete-icon {
  position: absolute;
  right: 0.3rem;
  top: 0.3rem;
  color: #888;
}
.nctouch-norecord {
  width: 200px;
  height: 164px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  text-align: center;

  .norecord-ico {
    display: inline-block;
    width: 60px;
    height: 60px;
    padding: 5px;
    margin: 0 auto;
    background-color: #ddd;
    border-radius: 100%;
    padding: 0;

    i {
      display: inline-block;
      width: 44px;
      height: 44px;
      margin: 8px;
      background: url("http://m.ggrsc.com/images/search_w.png") no-repeat center;
      background-size: 75%;
    }
  }

  dl {
    width: 100%;
    height: 55px;

    dt {
      width: 100%;
      height: 40px;
      line-height: 40px;
      text-align: center;
      font-size: 18px;
      color: 111px;
    }
    dd {
      width: 100%;
      height: 28px;
      line-height: 30px;
      font-size: 14px;
      color: #999;
    }
  }

  .btn {
    display: inline-block !important;
    height: 22px;
    padding: 0 6px;
    font-size: 14px;
    color: #555 !important;
    line-height: 20px;
    text-align: center;
    background-color: #fff;
    border: solid 1px #ccc;
    border-radius: 5px;
    margin-top: 22px;
  }
}
</style>

