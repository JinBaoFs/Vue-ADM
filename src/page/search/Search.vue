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
				  v-model="value"
				  background="none"
				  placeholder="高档画册"
				  show-action
				>			
					<div slot="action" @click="onSearch(value)">搜索</div>
				</van-search>
			</keep-alive>
		</div>


		<!-- 热卖搜索 -->
		<div class="search-wrapper">
			<p>热门搜索</p>
			<ul>
				<li v-for="(item,idx) in recommend" :key="idx">
					<a href="javascript:;" @click="SearchProduct(item)">
						{{item}}
					</a>
				</li>
			</ul>
		</div>

		<!-- 脚本 -->
		<Footer/>
	</div>
</template>

<script>
	
	// 引入组件
	import { Search } from 'vant';
	import Footer from "../../components/FootNav.vue";


	export default {
		data(){
			return {
				value:"",
				recommend:null
			}
		},

		// 组件注册
		components:{
			[Search.name]:Search,
			Footer,
		},

		methods:{
			onSearch(value){
				this.$router.push({name:"ProductList",query:{keyword:value}});	
			},
			SearchProduct(data){
				this.value=data;
				this.$router.push({name:"ProductList",query:{keyword:data}})
			}
		},
		created(){			
			this.$axios.get("http://www.ggrsc.com/mobile/index.php",{params:{
				act: "index",
				op: "search_key_list"
			}})
			.then(res=>{
				this.recommend = res.data.datas.list;
			})
			.catch(err=>{
				console.log(err);
			})
		}

	}
</script>

<style lang="less">
	.search{
		font-size: 16px;
		/*width: 375px;
		overflow: hidden;*/
		
		/*header*/		
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

		&-wrapper{
			width: 355px;
			overflow: hidden;
			padding: 16px 10px 10px 10px;			
			
			p{
				color: #111;
				line-height: 16px;
				font-size: 14px;
				width: 100%;
				height: 24px;
				display: block;			
			}

            ul{
				width: 100%;
				height: 100%;
				display: flex;
	            display:flex;
	            -webkit-flex-wrap:wrap;
	            flex-wrap:wrap;
            	overflow: hidden;	
            }
			li{
				overflow: hidden;
				background: #fff;				
				border: 1px #eee solid;
				border-radius: 13px;
				margin: 0 5px 8px 0;

				a{
					display: inline-block;
					padding: 4px 10px;
					font-size: 13px;
					color: #555;
					text-decoration: none;
				}
			}
		}
	}
</style>