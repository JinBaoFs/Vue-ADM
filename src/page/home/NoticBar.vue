<template>
    <div class="">
        <van-notice-bar
            text="举办5届，累计培训近千位广告人，这堂课究竟有什么魅力？上海天采董事长刘军卫游学日本，匠心制造7天探秘之旅"
            left-icon="volume-o"
        />
    </div>
</template>

<script>

import { NoticeBar } from 'vant';

export default {

    //组件注册
    components:{
            [NoticeBar.name]:NoticeBar,
        }
}
</script>

<style>
    .Notice{
        background:#fff;
        font-size:16px;
    }
</style>


