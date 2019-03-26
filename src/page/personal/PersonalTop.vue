<template>
  <div class="perHeader">
    <div class="member-info">
      <div class="user-img">
        <img src="../../image/default_user_portrait.gif">
      </div>
      <div class="user-name">
        <span>
          {{username.username}}
          <sup>普通会员</sup>
        </span>
      </div>
    </div>
    <div class="member-collect">
      <ul>
        <li>
          <div>
            <em>0</em>
            <p>商品收藏</p>
          </div>
        </li>
        <li>
          <div>
            <em>0</em>
            <p>商品收藏</p>
          </div>
        </li>
        <li>
          <div>
            <em class>
              <van-icon name="cart-o"/>
            </em>
            <p>商品收藏</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { Icon } from "vant";
export default {
  data() {
    return {
      username: ""
    };
  },
  components: {
    [Icon.name]: Icon
  },
  mounted() {
    let user = localStorage.getItem("user");
    this.username = JSON.parse(user);
  }
};
</script>

<style lang="less" scoped>
.perHeader {
  -webkit-animation: changeBg 20s infinite;
  animation: changeBg 20s infinite;
  background-color: #ed5564;
  background-image: url(../../image/user-bg.png);
  background-position: center center;
  background-size: cover;
  text-align: center;
  width: 100%;
  height: 220px;
  position: relative;
  z-index: 1;
  .member-info {
    width: 240px;
    height: 120px;
    position: absolute;
    z-index: 1;
    left: 50%;
    top: 50%;
    margin: -80px 0 0 -120px;
    animation: memberInfoDown 1000ms ease-in;
    -webkit-animation: memberInfoDown 1000ms ease-in;
    .user-img {
      width: 80px;
      height: 80px;
      overflow: hidden;
      margin: 0 auto;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .user-name {
      color: #fff;
      span {
        font-weight: lighter;
        font-size: 16px;
        line-height: 0.8rem;
        height: 0.8rem;
        position: relative;
        z-index: 1;
        sup {
          font-size: 10px;
          line-height: 0.45rem;
          background-color: #ed5564;
          display: block;
          height: 0.45rem;
          padding: 0 0.1rem;
          margin-left: 0.2rem;
          border-radius: 0.1rem;
          position: absolute;
          z-index: 1;
          top: 0.075rem;
          right: -1.7rem;
          box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
        }
      }
    }
  }
  .member-collect {
    width: 100%;
    height: 60px;
    background: rgba(0, 0, 0, 0.1);
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    ul {
      display: flex;
      display: -webkit-flex;
      justify-content: space-between;
      height: 100%;
      li {
        width: 33.333%;
        height: 100%;
        padding: 10px 0;
        box-sizing: border-box;
        div {
          display: block;
          height: 100%;
          width: 100%;
          color: #fff;
          font-size: 12px;
          em {
            font-style: normal;
            font-size: 16px;
          }
          p {
            margin: 0px;
          }
        }
      }
    }
  }
}

// 背景动画
@keyframes changeBg {
  0% {
    background-color: #ed5564;
  }
  10% {
    background-color: #fb6e52;
  }
  20% {
    background-color: #ffce55;
  }
  30% {
    background-color: #a0d468;
  }
  40% {
    background-color: #48cfae;
  }
  50% {
    background-color: #4fc0e8;
  }
  60% {
    background-color: #5d9cec;
  }
  70% {
    background-color: #ac92ed;
  }
  80% {
    background-color: #ec87bf;
  }
  90% {
    background-color: #ed5564;
  }
}

// 用户下坠动画
@keyframes memberInfoDown {
  0% {
    top: -50%;
  }
  30% {
    top: -10%;
  }
  75% {
    top: 55%;
  }

  85% {
    top: 47%;
  }
  95% {
    top: 52%;
  }
  100% {
    top: 50%;
  }
}
</style>


