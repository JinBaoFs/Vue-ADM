<template>
    <div class="foot-fc">
        <!-- 底部功能栏登陆|注册|返回顶部 -->
        <span @click="goto('Login')">登陆</span>
        <span @click="goto('Reg')">注册</span>
        <span @click="goto('Login')">反馈</span>
        <span @click="goto('Reg')">帮助</span>
        <span @click="getTop()">返回顶部</span>
    </div>
</template>
<script>
export default {
    methods:{
        goto(nav){
            if(nav==="Reg"){
                localStorage.removeItem("user");
                this.$router.push({name:"Reg"});
            }else{
                this.$router.push({name:nav});
            }
        },
        getTop(){
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
<style lang="less" scoped>
    .foot-fc{
        height:32px;
        line-height:32px;
        background:#fff;
        cursor:pointer;
        display:flex;
        justify-content:space-around;
        color:#666;
        font-size:12px;
        padding:0 15px;

    }
</style>


