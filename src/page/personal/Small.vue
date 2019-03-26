<template>
  <div class="item-box">
    <div class="cleFloating">
      <div class="item-left">
        <van-icon :class="data.className" :name="data.lIcon"/>
        <span>{{data.title}}</span>
      </div>
      <div class="item-right">
        <span>{{data.info}}</span>
        <van-icon name="arrow"/>
      </div>
    </div>
  </div>
</template>
<script>
import { Icon } from "vant";
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  components: {
    [Icon.name]: Icon
  }
};
</script>
<style lang="less" spcoed>
li.border .item-box a {
  border-bottom: 1px solid #eee;
}
.item-box {
  .cleFloating {
    display: block;
    box-sizing: border-box;
    padding: 12px;
    padding-left: 0px;
    margin-left: 12px;

    .item-left {
      display: flex;
      height: 100%;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      color: #111;
      float: left;
    }
    .item-right {
      display: flex;
      height: 100%;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      color: #999;
      float: right;
    }
    .van-icon {
      vertical-align: middle;
      font-size: 16px;
    }
    i.order {
      color: #69aede;
    }
    i.wealth {
      color: #48cfae;
    }
    i.rebate {
      color: #68dfa3;
    }
    i.address {
      color: #d1c3f5;
    }
    i.setup {
      color: #f1a7d0;
    }
    span {
      vertical-align: middle;
      margin-left: 5px;
    }
  }
}
</style>


