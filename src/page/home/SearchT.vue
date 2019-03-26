<template>
    <form action="/">
        <van-search
            placeholder="请输入搜索关键词"
            show-action
            @click="goto()"
        />
    </form>
</template>

<script>

    // 引入组件
    import { Search } from 'vant';

    export default {
        methods:{
            goto(){
                this.$router.push({name:'Search'})
            }
        },

        // 组件注册
        components:{
            [Search.name]:Search
        }
    }
</script>
