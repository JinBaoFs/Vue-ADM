<template>
    <div class="nav-menu">
    	<span class="arrow"></span>
        <nav>
            <li v-for="item in navMenuData" :key="item.id" @click="gotoR(item.path)">                
                <a href="##">
                    <img :src="item.imegs" alt="">
                    <span>{{item.text}}</span>
                </a>
            </li>
        </nav>
	</div>
</template>

<script>

    export default {
        data(){
        	return {
                
        	}
        },
        components:{
        },
        methods:{
            gotoR(rot){
                this.$router.push(rot)
            }
        },
        computed:{
            navMenuData(){
                let path = this.$route.path;
                let navMenu = this.$store.state.navMenu;
                for(var i=0;i<navMenu.length;i++){
                    if(path === navMenu[i].path){
                        navMenu.splice(i,1);
                        break;
                    }
                }
                return navMenu;
                
            }
        },
        created(){
            
        },
        mounted(){
            
        }
    }
</script>

<style lang="less">
    .nav-menu{
        width: 100px;
        overflow: hidden;
        font-size: 12px;
        position: absolute;
        top: 20px;
        right: 5px;

        .arrow{
            display: block;
            float: right;
            width: 0;
            height: 0;
            margin-right: 10px;
            font-size: 0;
            line-height: 0;
            border-width: 10px;
            border-color: transparent transparent rgba(85,85,85,0.95) transparent;
            border-style: dashed dashed solid dashed;
        }

        nav{
            width: 100%;
            background:rgba(85,85,85,0.95);
            border-radius: 6px;
            overflow: hidden;

            li{
                width: 100%;
                height: 40px;
                border-bottom: 1px #fff solid;

                a{
                    display: inline-block;
                    width: 100%;
                    height: 40px;
                    overflow: hidden;
                    align-items: center;
                    color: #fff;
                    display: flex;
                    text-decoration: none;

                    img{
                        width: 14px;
                        height: 14px;
                        margin:0 10px;
                    }
                }
            }
        }
    }
</style>