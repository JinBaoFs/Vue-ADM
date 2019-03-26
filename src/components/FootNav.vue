<template>
    <div>
        <van-tabbar active-color="#7d7e80" style="background:#e5e5e5;cursor:pointer">
            <van-tabbar-item v-for="(nav,idx) in navs" :icon="nav.ico" :dot="nav.dot" :key="nav.name"  @click="goto(nav.name,idx)">{{nav.text}}</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
    
    // 引入组件
    import { NavBar,Tabbar,TabbarItem } from 'vant';

    export default {
        data(){
            return {
                navs:[
                    {
                        name:'Home',
                        text:'首页',
                        ico:'wap-home',
                    },
                    {
                        name:'List',
                        text:'分类',
                        ico:'apps-o',
                        dot:true
                    },
                    {
                        name:'Search',
                        text:'搜索',
                        ico:'search',
                    },
                    {
                        name:'Cart',
                        text:'购物车',
                        ico:'shopping-cart-o',
                    },
                    {
                        name:'Mall',
                        text:'我的商城',
                        ico:'contact'
                    }
                ],
            }
        },

        // 组件注册
        components:{
            [NavBar.name]:NavBar,
            [Tabbar.name]:Tabbar,
            [TabbarItem.name]:TabbarItem
        },

        methods:{
            goto(nav,idx){
                this.$router.push({name:nav});
                this.$store.commit('changeIdx',idx);
            }
        },
        created(){
            this.currentIdx = this.$store.state.active;
        }
        
    }
</script>

