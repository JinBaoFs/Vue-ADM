<template>
    <div class="field">
        <van-field
            v-model="username"
            label="用户名"
            right-icon="question-o"
            placeholder="请输入用户名"
            clearable
            required            
        />

        <van-field
            v-model="password"
            type="password"
            label="密码"
            clearable
            required
            placeholder="请输入密码"
        />
        <div class="field-box">
            <van-checkbox v-model="checked" checked-color="#07c160">七天免登陆</van-checkbox>
            <span>忘记密码？</span>
        </div>
        <div class="login" @click="login">登 陆</div>
        <div class="tp">
            <h2><span>合作账号登陆</span></h2>
            <div class="pic">
                <i><img src="http://m.ggrsc.com/images/sina.png" alt=""></i>
                <i><img src="http://m.ggrsc.com/images/qq.png" alt=""></i>
            </div>
        </div>
    </div>
</template>

<script>

import { Checkbox, CheckboxGroup, Dialog  ,Field } from 'vant';


export default {
    
    data(){
        return {
            username:'',
            password:'',
            checked:false,
        }
    },
    methods:{
        login(){
            if(this.username.length<=0 || this.password<=0){
                Dialog.alert({
                  message: '用户名或密码不能为空！'
                })
            }else{
                // 判断七天免登陆是否选中
                let expiresIn="2h";
                if(this.checked){
                    expiresIn="7d"
                }
                this.$axios.post("/createToken",{
                    username:this.username,
                    password:this.password,
                    expiresIn
                })
                .then(res=>{
                    let {data} = res;
                    if(data.status==1){                                             
                        let user = {
                            username:data.username,
                            token:data.token
                        };
                        
                        Dialog.alert({
                          message: '登录成功'
                        }).then(() => {
                          // on close
                       
                            if(this.$route.params.from){                            
                                this.$router.push(this.$route.params.from);  
                            }else{                            
                                this.$router.push('/home');
                            }
                        });
                        localStorage.setItem("user",JSON.stringify(user)); 
                                              

                    }else if(data.status==0){
                        Dialog.alert({
                          message: '用户名或密码错误！'
                        })
                    }
                })
            }
        },
        
    },

    //组件注册
    components:{
        [Field.name]:Field,
        [CheckboxGroup.name]:CheckboxGroup,
        [Checkbox.name]:Checkbox,
        [Dialog.name]:Dialog
    },
}
</script>

<style lang="less" scoped>
    .field{
        font-size:12px;
        input{
            font-size:12px;
        }
        .field-box{
            padding:30px;
            position:relative;
            span{
                position:absolute;right:30px;
                top:30px;
                color:#4B89DC;
            }
        }
        .login{
            text-align:center;
            font-size:16px;
            width:90%;
            height:36px;
            color:#fff;
            background:#ED5564;
            line-height:36px;
            border-radius:5px;
            margin-left: 5%;
        }
        .tp{
            width:100%;
            margin-top: 50px;
            padding:0 5px;
            h2{
                width:100%;
                height:1px;
                background:#ccc;
                position:relative;
                span{
                    font-weight:normal;
                    font-size:14px;
                    background:#f5f5f5;
                    display:inline-block;
                    position:absolute;
                    padding:10px;
                    left:50%;
                    top:-18px;
                    transform:translate(-50%,0)
                }
            }
            .pic{
                display:flex;
                margin-top: 30px;
                justify-content:center;
                i{
                    width:40px;
                    height:40px;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    border:1px #ccc solid;
                    margin-right: 20px;
                    background:#fff;
                    border-radius:50px;
                    img{
                        width:60%;
                    }
                }
            }
            
        }
    }
    
</style>


