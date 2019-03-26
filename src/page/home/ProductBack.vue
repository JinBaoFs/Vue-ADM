<template>
    <div class="product">
        <div class="pro-right">
            <div class="pro-r-t"><img :src="list.rectangle1_image" alt="" @click="goto(list.rectangle1_data)"></div>
            <div class="pro-r-b"><img :src="list.rectangle2_image" @click="goto(list.rectangle2_data)"></div>
        </div>
        <div class="pro-left"><img :src="list.square_image" alt="" @click="goto(list.square_data)"></div>
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
    methods:{
        //点击跳路由
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
<style lang="less" scoped>
    .product{
        width:375px;
        display:flex;
        overflow:hidden;
        border-top:1px #eee solid;
        .pro-left{
            width:50%;
            border-left:1px #eee solid;
            background:#fff;
            img{
                width:100%;
            }
        }
        .pro-right{
            width:50%;
            img{
                width:100%;
            }
            .pro-r-b{
                border-top:1px #eee solid;
            }
        }
    }
</style>