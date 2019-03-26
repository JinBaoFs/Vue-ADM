<template>
    <div class="h-goods">
        <div class="title">
            <h3>{{list.title}}</h3>
            <p>——　小编向您推荐以下商品　——</p>
        </div>
        <ul class="goods-list">
            <li v-for="(item,idx) in list.item" :key="idx" @click="gotocart(item.goods_id)">
                <div class="pic"><img :src="item.goods_image" alt=""></div>
                <dl>
                    <dt>{{item.goods_name}}</dt>
                    <dd>{{item.goods_promotion_price}}</dd>
                </dl>
            </li>
        </ul>
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
    methods:{
        gotocart(id){
            this.$router.push({
                path:'/goods',
                query:{
                    goods_id:id
                }
            })
        }
    },
    watch:{   // 使用监听的方式，监听数据的变化
      pro(pro){
        this.list = pro;
      }
    }
}
</script>

<style lang="less" scoped>
    .h-goods{
        margin-top:10px;
        overflow:hidden;
        .title{
            text-align:center;
            h3{color:#333;font-weight:normal;}
            p{
               color:#999;
               font-size:14px;
               line-height:40px;
            }
        }
        .goods-list{
            overflow:hidden;
            display:flex;
            flex-wrap:wrap;
            justify-content: space-around;
            li{
                width:47%;
                img{
                    width:100%;
                }
                dt{
                    font-size:14px;
                    line-height:22px;
                    margin-bottom: 5px;
                    overflow:hidden;
                    white-space:nowrap;
                    text-overflow:ellipsis;
                }
                dd{
                    color:#DB4453;
                    font-size:14px;
                    border-top:1px #ccc solid;
                    line-height:40px;
                    &::before{
                        content:'￥'
                    }
                }
            }
        }
    }
</style>



