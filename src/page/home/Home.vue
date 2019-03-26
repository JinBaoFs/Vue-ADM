<template>
    <div class="cxs">
        <Slide></Slide>
        <FootNav></FootNav>
        <SearchT></SearchT>
        <Navs></Navs>
        <NoticBar></NoticBar>
        <div class="h-title"><span>热卖印刷品</span></div>
        <Product :pro="pro1"></Product>
        <ProductBack :pro="pro2"></ProductBack>
        <Advertisement :pro="pro3"></Advertisement>
        <Product :pro="pro4"></Product>
        <Advertisement :pro="pro5"></Advertisement>
        <ProductBack :pro="pro6"></ProductBack>
        <Hgoods :pro="pro7"></Hgoods>
        <FootFc></FootFc>
        <BackTop></BackTop>
        <SearchC></SearchC>
    </div>
</template>


<script>

//引入组件
import FootNav from '../../components/FootNav.vue';
import FootFc from '../../components/FootFc.vue';
import BackTop from '../../components/BackTop.vue';
import Slide from './Slide.vue';
import SearchT from './SearchT.vue';
import Navs from './Navs.vue';
import NoticBar from "./NoticBar.vue";
import Product from "./Product.vue";
import ProductBack from './ProductBack';
import Advertisement from './Advertisement.vue';
import Hgoods from './Hgoods.vue';
import SearchC from './SearchC.vue';

export default {
    data() {
        return {
            datalist:[],
            pro1:{},
            pro2:{},
            pro3:{},
            pro4:{},
            pro5:{},
            pro6:{},
            pro7:{}
        }
    },
    components:{
        FootNav,
        FootFc,
        BackTop,
        Slide,
        SearchT,
        Navs,
        NoticBar,
        Product,
        ProductBack,
        Advertisement,
        Hgoods,
        SearchC
    },
    methods:{
        async getdata(){
            let {data:{datas}} = await this.$axios.get('http://www.ggrsc.com/mobile/index.php',{
                params:{
                    act:"index"
                }
            })
            this.datalist = datas;
            this.pro1 = this.datalist[1].home2;
            this.pro2 = this.datalist[2].home4;
            this.pro3 = this.datalist[3].home1;
            this.pro4 = this.datalist[4].home2;
            this.pro5 = this.datalist[5].home1;
            this.pro6 = this.datalist[6].home4;
            this.pro7 = this.datalist[7].goods;
        }
    },
    created(){
        this.getdata();
    }
}
</script>

<style lang="less">
    .cxs{
        font-size: 16px;
        margin-bottom: 50px;
        &-cs{
            width: 375px;
            height: 100px;
            background: red;
        }
        .h-title{
            font-size:14px;
            padding:10px;
            span{
                border-left:2px #c00 solid;
                padding-left:10px;
            }
        }        
    }
</style>

