<template>
    <div class="h-adm">
        <img :src="list.image" alt="" @click="goto(list.data)">
    </div>
</template>

<script>
export default {
    props:['pro'],
    data(){
        return {
            list:[]
        }
    },
    watch:{   // 使用监听的方式，监听数据的变化
      pro(pro){
        this.list = pro;
      }
    },
    //点击跳路由
    methods:{
        goto(key){
            this.$router.push({
                path:'/product_list',
                query:{
                    keyword:key
                }
            })
        }
    }
    
}
</script>

<style lang="less">
    .h-adm{
        width:375px;
        img{
            width:100%;
        }
    }
</style>

