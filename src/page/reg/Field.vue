<template>
    <div class="field">
        <van-field
            v-model="username"
            label="用户名"
            right-icon="question-o"
            placeholder="请输入用户名"
            clearable
            required
            @blur="VerifyTheUser"
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
            <van-checkbox v-model="checked" checked-color="#07c160">同意协议</van-checkbox>
        </div>
        <div class="Reg" @click="Reg" >注  册</div>       
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
        async Reg(){
            if(this.username.length<=0 || this.password<=0){
                Dialog.alert({
                  message: '用户名或密码不能为空！'
                })
            }else{
                // 是否同意协议
                if(this.checked){
                    let {data} = await this.$axios.post("/VerifyTheUser",{
                        username:this.username,
                        password:this.password
                    });
                    
                    // 根据后端参数判断是否注册成功
                    if(data.status===1){
                        Dialog.alert({
                          message: '注册成功！'
                        }).then(()=>{
                            this.$router.push("/login");
                        })
                    }else if(data.status===0){
                         Dialog.alert({
                          message: '注册失败！'
                        })
                    }

                }else{
                    Dialog.alert({
                      message: '同意协议才能注册'
                    })
                }
            }
        },
        async VerifyTheUser(){
            if(this.username.length>0){
                let {data} = await this.$axios.get("/VerifyTheUser",{
                        params:{username:this.username,}
                });
                
                if(data.status===0){
                     Dialog.alert({
                      message: '用户名已存在！'
                    })
                }else if(data.status===1){
                    console.log("可以注册");
                }

            }else{
                Dialog.alert({
                  message: '用户名不能为空！'
                })
            }
        }
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
        .Reg{
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


