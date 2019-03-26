
<template>
    <!-- 轮播图组件 -->
        <div>
            <van-swipe :autoplay="3000">
                <van-swipe-item v-for="img in imgs" :key="img.id"><img style="width:100%;" :src="img.imgUrl" alt=""></van-swipe-item>
                
            </van-swipe>
        </div>
       
</template>

<script>

    // 引入组件
    import { Swipe, SwipeItem } from 'vant';

    export default {
        data(){
            return {
                imgs:[
                    {
                        imgUrl:'http://img.ggrsc.com/mobile/special/s0/s0_05329813850515886.jpg',
                        id:'25153'
                    },
                    {
                        imgUrl:'http://img.ggrsc.com/mobile/special/s0/s0_05329814407955497.jpg',
                        id:'25154'
                    }
                ]
            }
        },

        // 组件注册
        components:{
            [Swipe.name]:Swipe,
            [SwipeItem.name]:SwipeItem,
        }
    }
</script>
<style>
    .h-search{
        position:absolute;
        left:50%;
        bottom:1rem;
    }
</style>


