<template>
  <div class="item-state-box">
    <div class="item-state" v-for="item in datas" :key="item.id">
      <div>
        <van-icon :name="item.Icon"/>
        <span>{{item.text}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { Icon } from "vant";
export default {
  props: {
    datas: {
      type: Array,
      required: true
    }
  },
  components: {
    [Icon.name]: Icon
  }
};
</script>
<style lang="less" spcoed>
.item-state-box {
  display: flex;
  justify-content: space-between;
  height: 65px;
  .item-state {
    width: 20%;
    > div {
      display: flex;
      height: 100%;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      .van-icon {
        color: #888;
        font-size: 22px;
      }
      span {
        display: block;
        font-size: 12px;
        color: #888;
        margin-top: 4px;
      }
    }
  }
}
</style>

