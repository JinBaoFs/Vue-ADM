<template>
	<div class="list">
		<HeaderSearch/>
		<div class="list-left">
			<ul>
				<li :class="{'active':currentIdx2}">
					<div class="pic"><img src="http://m.ggrsc.com/images/degault.png" alt="" @click="changeIdxT()"></div>
					<div class="text">品牌推荐</div>
				</li>
				<li :class="{'active':idx==currentIdx}" v-for="(item,idx) in navs" :key="idx" @click="changeIdx(idx,item.gc_id)">
					<div class="pic"><img :src="item.image" alt=""></div>
					<div class="text">{{item.gc_name}}</div>
				</li>
			</ul>
		</div>
		<div class="list-right">
			<ul class="l-list-one" :class="{'show':sta1}">
				<li v-for="(item,idx) in tlist" :key="idx" @click="gotoR(item.brand_id)">
					<div class="pic"><img :src="item.brand_pic" alt=""></div>
					<div>{{item.brand_name}}</div>
				</li>
			</ul>
			<ul class="l-list-tow" :class="{'show':sta2}">
				<li v-for="(item,idx) in list" :key="idx" @click="gotoR(item.gc_id)">
					<div class="title">
						<i class="tl"></i>
						{{item.gc_name}}
						<span class="tr">&gt;</span>
					</div>
					<div class="content">
						<span v-for="(itemC,idx) in item.child" :key="idx">{{itemC.gc_name}}</span>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
// 引入组件
import HeaderSearch from "../../components/HeaderSearch.vue";

export default {
  data() {
    return {
    navs: [],
	  tlist: [],
	  list:[],
	  currentIdx: 20,
	  currentIdx2:true,
	  sta1:false,
	  sta2:true
    };
  },
  components: {
    HeaderSearch
  },
  methods: {
    //默认获取左侧导航数据
    async getdataNavs() {
      let res = await this.$axios.get("http://www.ggrsc.com/mobile/index.php", {
        params: { act: "goods_class" }
      });
			this.navs = res.data.datas.class_list;
			this.navs.splice(9,1)
    },
    //默认获取推荐品牌数据
    async getTgoods() {
      let res = await this.$axios.get("http://www.ggrsc.com/mobile/index.php", {
        params: {
          act: "brand",
          op: "recommend_list"
        }
      });
      this.tlist = res.data.datas.brand_list;
		},
		//改变idx索引值
		async changeIdx(idx,id){
			this.currentIdx = idx;
			this.currentIdx2 = false;
			this.sta1 = true;
			this.sta2 = false;
			let res = await this.$axios.get("http://www.ggrsc.com/mobile/index.php",{
				params:{
					act: "goods_class",
					op: "get_child_all",
					gc_id: id
				}
			});
			this.list = res.data.datas.class_list;
		},
		//改变推荐品牌idx索引值
		changeIdxT(){
			this.currentIdx = 30;
			this.currentIdx2 = true;
			this.sta1 = !this.sta1;
			this.sta2 = !this.sta2;
		},
		gotoR(id){
			this.$router.push({
				path:'/product_list',
				query:{
        	gc_id:id
        }
			})
		}
  },
  created() {
    //声明周期函数执行
    this.getdataNavs();
    this.getTgoods();
  }
};
</script>
<style lang="less">
.list {
  display: flex;
  height: 100%;
  overflow: hidden;
  .list-left {
    width: 75px;
	margin-top: 40px;
	height:628px;
	overflow:auto;
    li {
      padding: 5px;
      font-size: 14px;
      text-align: center;
      img {
        width: 30%;
        margin-left: 35%;
        filter: grayscale(90%);
      }
      .pic {
        text-align: center;
      }
      .text {
        line-height: 30px;
        color: #999;
        border-bottom: 2px #f5f5f5 solid;
      }
    }
    .active{
      img {
        filter: none;
      }
      .text {
        color: #ed5564;
        border-bottom: 2px #ed5564 solid;
      }
    }
  }
  .list-right {
		width: 300px;
		background: #fcfcfc;
		height:626px;
		overflow:auto;
		margin-top: 40px;
	.show{display:none;}
    .l-list-one {
      font-size: 14px;
      li {
        background: #fff;
        width: 80px;
        height: 80px;
        text-align: center;
        color: #666;
        margin: 5px;
        float: left;
        .pic {
          padding: 10px 5px;
          img {
            width: 100%;
          }
        }
      }
	}
	.l-list-tow{
		.title{
			width:100%;
			height:34px;
			background:#fcfcfc;
			border-bottom:1px #eee solid;
			border-top:1px #eee solid;
			line-height:34px;
			font-size:14px;
			color:#333;
			padding-left:10px;
			.tl{
				width:10px;
				height:10px;
				display:inline-block;
				border-radius:50%;
				background:#ed5564;
				margin-right: 5px;
			}
			.tr{
				float:right;
				font-size:16px;
				color:#999;
				margin-right: 10px;
			}
		}
		.content{
			font-size:12px;
			padding:5px 10px;
			display:flex;
			flex-wrap:wrap;
			background:#fff;
			width:100%;
			span{
				display:block;
				width:25%;
				margin-right: 20px;
				line-height:36px;
				overflow:hidden;
                white-space:nowrap;
				text-overflow:ellipsis;
				color:#999;
			}
		}
	}
  }
}
</style>
 