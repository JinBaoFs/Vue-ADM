<template>
    <div id="Reg">
		<Header/>
		<Field/>
    </div>
</template>


<script>

// 引入组件
import Header from "./Hearder.vue";
import Field from "./Field.vue";

export default {
	components:{
		Header,
		Field
	},
}
</script>

<style lang="less">
	.van-nav-bar__text{
		color: #666;
	}

	.van-nav-bar__left{
		.van-nav-bar__arrow{
			color: 666 !important;
		}
	}
	
	.van-nav-bar__right{
		.van-nav-bar__text{
			color: #ed5564;
		}
	}
</style>