<template>
  <div class="content">
    <ul>
      <li class="item border">
        <Small :data="order"></Small>
        <State :datas="logisticsstatus"></State>
      </li>
      <li class="item border">
        <Small :data="wealth"></Small>
        <State :datas="stateofproperty"></State>
      </li>
      <li class="item">
        <Small :data="rebate"></Small>
      </li>
      <li class="item">
        <Small :data="address"></Small>
      </li>
      <li class="item">
        <Small :data="setup"></Small>
      </li>
    </ul>
  </div>
</template>
<script>
import Small from "./Small.vue";
import State from "./State.vue";
import { close } from "fs";
export default {
  data() {
    return {
      // 我的订单
      order: {
        className: "order",
        title: "我的订单",
        info: "查看全部订单",
        lIcon: "orders-o"
      },
      // 我的财富
      wealth: {
        className: "wealth",
        title: "我的财富",
        info: "查看全部财富",
        lIcon: "cash-on-deliver"
      },
      //   邀请返利
      rebate: {
        className: "rebate",
        title: "邀请返利",
        info: "邀请好友注册/购物,获得积分",
        lIcon: "gift-card-o"
      },
      //   收货地址
      address: {
        className: "address",
        title: "收货地址",
        info: "",
        lIcon: "home-o"
      },
      //   用户设置
      setup: {
        className: "setup",
        title: "用户设置",
        info: "",
        lIcon: "setting-o"
      },
      logisticsstatus: [
        {
          id: "1",
          Icon: "paid",
          text: "待付款"
        },
        {
          id: "2",
          Icon: "send-gift-o",
          text: "待收货"
        },
        {
          id: "3",
          Icon: "logistics",
          text: "待自提"
        },
        {
          id: "4",
          Icon: "edit",
          text: "待评价"
        },
        {
          id: "5",
          Icon: "cash-back-record",
          text: "退款/退货"
        }
      ],
      stateofproperty: [
        {
          id: "1",
          Icon: "balance-o",
          text: "预存款"
        },
        {
          id: "2",
          Icon: "debit-pay",
          text: "充值卡"
        },
        {
          id: "3",
          Icon: "bill-o",
          text: "代金券"
        },
        {
          id: "4",
          Icon: "cash-on-deliver",
          text: "红包"
        },
        {
          id: "5",
          Icon: "points",
          text: "积分"
        }
      ]
    };
  },
  components: {
    Small,
    State
  }
};
</script>
<style lang="less" scoped>
li {
  margin-top: 15px;
  background-color: #fff;
  border-bottom: 1px solid #eee;
}
.content {
  margin-bottom: 15px;
}
</style>


