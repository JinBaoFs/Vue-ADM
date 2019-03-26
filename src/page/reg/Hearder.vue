<template>
    <div>
        <van-nav-bar class="login-hearder"
            title="注册"
            left-text="首页"
            right-text="登录"
            @click-left="onClickLeft"
            @click-right="onClickRight"
        />
    </div>
</template>

<script>
import { NavBar } from 'vant';


export default {

    components:{
        [NavBar.name]:NavBar,
    },
    methods: {
        onClickLeft() {
            this.$router.push({
                path:'/home'
            })
        },
        onClickRight() {
            this.$router.push({
                path:'/login'
            })
        }
    }
}
</script>

<style lang="less" scoped>
    .login-hearder{
        color:#666;
        span{
            color:#ED5564;
        }
        .van-nav-bar__left{
            span{color:#666;}
        }
        background:#fcfcfc;
    }
</style>    


