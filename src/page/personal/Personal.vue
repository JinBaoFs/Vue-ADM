<template>
  <!-- 我的商城 -->
  <div class="contentBox">
    <PersonalTop></PersonalTop>
    <ItemFun></ItemFun>
    <FootNav></FootNav>
    <FootFc></FootFc>
  </div>
</template>
<script>
import PersonalTop from "./PersonalTop.vue";
import ItemFun from "./ItemFun.vue";
import FootNav from "../../components/FootNav.vue";
import FootFc from "../../components/FootFc.vue";
export default {
  data() {
    return {};
  },
  components: {
    PersonalTop,
    ItemFun,
    FootNav,
    FootFc
  }
};
</script>
<style lang="less">
html,
body {
  margin: 0;
  padding: 0;
  background: #f5f5f5;
}
p,
h3,
h5 {
  margin: 0px;
  font-weight: normal;
}
.cleFloating::after {
  content: "";
  display: block;
  height: 0px;
  visibility: hidden;
  overflow: hidden;
  clear: both;
}
.contentBox {
  margin-bottom: 1.33333rem;
}
</style>
