<template>
    <div v-show="sta" class="back-top" @click="getTop()">
        <!-- 返回顶部组件 -->
        <img src="http://m.ggrsc.com/images/gotop_b.png" alt="">
    </div>
</template>
<script>
export default {
    data(){
        return {
            sta: false,
        }
    },
    mounted(){
      window.addEventListener('scroll',this.handleScroll,true);
    },
    methods:{
      handleScroll(e){
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        if(scrollTop>=200){
            this.sta = true;
        }else{
            this.sta = false;
        }

      },
      //返回顶部
      getTop(e){
          let timer = setInterval(()=>{
            let top = document.documentElement.scrollTop
            let speed = Math.ceil(top / 5)
            document.documentElement.scrollTop = top - speed;
            if(top === 0){
                clearInterval(timer);
            }
          },20) 
      }
    }
}
</script>

<style lang="less">
    .back-top{
        width:40px;
        height:40px;
        background:#fff;
        border-radius:50%;
        position:fixed;
        bottom:70px;
        right:5px;
        display:flex;
        justify-content:center;
        align-items:center;
        img{width:80%;height:80%;opacity:0.5}
    }
</style>

