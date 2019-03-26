<template>
       <div class="search">

            <!-- 搜索框 -->
            <div class="search-header">
                <a href="javascript:history.go(-1)" class="search-goback"></a>
                <keep-alive 
                    include="Search"
                >
                    <van-search
                      class="search-sah"
                      :placeholder="value"
                      background="none"
                      readonly
                      show-action
                      @click="search('/search')"
                    >           
                        <div class="searchRight" slot="action">
                            <a href="#/list" class="listImg" v-if="ShowListIcon" ></a>
                            <div class="navMenu">
                                <i class="classifyImg" @click="(isShow=!isShow)"></i>
                                <NavMenu v-show="isShow" />
                            </div>
                        </div>
                    </van-search>
                </keep-alive>
            </div>

        </div>

</template>

<script>

    // 引入组件
    import { Search } from 'vant';    
    import NavMenu from "./NavMenu.vue";

    export default {
        data(){
        	return {
                value:"高阶画册",            
                isShow:false,
                ShowListIcon:true
        	}
        },
        computed:{

        },
        components:{
            NavMenu,
            [Search.name]:Search,
        },
        methods:{
            search(path){
                this.$router.push(path)   
            }
        },
        created(){
            
            // 判断当前路由是否有 keyword 参数
            if(this.$route.query.keyword&&this.$route.query.keyword.length>0){
                this.value = this.$route.query.keyword;
            }

            // 判断当前路由是否为 /list 
            if(this.$route.path==="/list"){
                this.ShowListIcon=false;
            }
        },
}
</script>

<style lang="less">
    .search{
        font-size: 16px;
        /*width: 375px;        
        /*header*/  
        position:fixed;
        top:0;
        z-index:100;    
        &-header{
            height: 40px;
            display: flex;
            width: 375px;   
            justify-content: space-between;
            background: #f8f8f8;
            border-bottom: solid 0.05rem #EEE;
        }
        
        &-sah{
            width: 335px;
            height: 40px;           
            padding-left: 0;
            background: red;
        }

        &-goback{
            width: 40px;
            height: 40px;
            display: inline-block;
            background: url("http://m.ggrsc.com/images/arrow_left_b.png") no-repeat center;
            background-size: 50%;
            opacity: .65;
        }
        .van-search__content{
            padding-left: 0;
        }
        .van-field{
            background: #fff;
            box-sizing: border-box;
            border: 1px #dedede solid;
            height: 30px;
            padding: 0;
        }
        .van-field__body{
            height: 29px;
        }

        .van-field__left-icon{
            height: 30px;
            i{
                padding: 2px 0px 2px 6px;
            }
        }

        /*---------------*/
        .van-search__action{
            /*padding-left: 0px;*/
        }
        .searchRight{            
            height: 30px;
            display: flex;
            justify-content: space-between;
            padding-left: 2px;

            .listImg{
                display: inline-block;
                width:20px;
                height: 82%;                
                
                margin: 3px 3px 0 0;
                background:url("http://m.ggrsc.com/images/stiore_categroy_b.png") no-repeat center;
                background-size:cover;
                opacity: .65;
            }

            .navMenu{
                width: 32px;                
                height: 100%;
                overflow: hidden;
                .classifyImg{
                    display: inline-block;
                    width: 30px;
                    height: 100%;
                    background:url("http://m.ggrsc.com/images/more_b.png") no-repeat center;
                    background-size:65%;   
                    opacity: .65;
                    position: relative;
                    z-index: 9999;
                }
            }
        }
    }
</style>