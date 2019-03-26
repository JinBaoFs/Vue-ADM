<template>
    <div class="search-cang" v-show="sta">
        <img class="img" src="http://img.ggrsc.com/common/home_logo.png" alt="">
        <form action="/" @click="goto()">
            <van-search class="and"
                placeholder="高档画册"
            />
        </form>
        <span><img src="http://m.ggrsc.com/images/message_b.png" alt=""></span>
    </div>
</template>


<script>

// 引入组件
import { Search } from 'vant';

export default {
    data(){
        return {
            sta:false
        }
    }, 
    mounted(){
      window.addEventListener('scroll',this.handleScroll,true);
    },
    methods:{
        handleScroll(e){
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            if(scrollTop>=200){
                this.sta = true;
            }else{
                this.sta = false;
            }
        },
        //跳路由
        goto(){
            this.$router.push({
                path:'/Search'
            })
        }
    },
    // 组件注册
    components:{
        [Search.name]:Search
    }
}
</script>

<style lang="less" scoped>
    .search-cang{
        width:375px;
        height:40px;
        background:#eee;
        display:flex;
        position:fixed;
        top:0px;
        left:0px;
        z-index:1000;
        padding:5px;
        box-sizing:border-box;
        .img{
            width:60px;
            height:30px;
            line-height:40px;
        }
        form{
            width:270px;
            height:40px;
            .and{
                height:25px;
                margin-top: 3px;
                background:#eee!important;
                .van-search__content{
                    background:#fff!important;
                }
                input{
                    background:#fff;
                }
            }
        }
        span{
            width:25px;
            img{
                width:100%;
                opacity:0.5;
                margin-top: 3px;
            }
        }
    }
</style>


