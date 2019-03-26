let express = require("express");
let Router = express.Router();
let db = require("../db/db.js");
let {create,verify} = require("../token/index.js");

let data;

// 查询用户名是否存在
Router.get("\/VerifyTheUser",async (request,response)=>{
	let {username} = request.query;

	// 查询数据是否有相同用户名存在
	let res = await db.find("user",{username});

	if(res.length>0){
		data = {
			status:0,
			msg:"fail"
		}
		response.send(data);
	}else{
		data = {
			status:1,
			msg:"success"
		}
		response.send(data)
	}
});

// 注册接口
Router.post("\/VerifyTheUser",async (request,response)=>{
	let {username,password} = request.body;

	try{
		let res = await db.insert("user",{username,password:String(password)});
		data = {
			status:1,
			msg:"success"
		}
		response.send(data)
	}catch(err){
		data = {
			status:0,
			msg:"fail",
			err
		}
		response.send(data);
	}
	
});

// 生成 token
Router.post("\/createToken",async (request,response)=>{
	let {username,password,expiresIn} = request.body;

	// 查看 AMD 数据库
	let res = await db.find("user",{username,password});

	if(res.length>0){

		let token = create(username,expiresIn);		
		data = {
			status:1,
			username,
			token
		}
		response.send(data);

	}else{

		data = {
			status:0,
			username,
			token:""		
		}		
		response.send(data);

	}
});

// 验证token
Router.post("\/verifyToken",async (request,response)=>{
	// 接受参数
	let {token} = request.body;
	let res = verify(token);
	
	if(res){		
		data = {
			status:1,
			msg:"success"
		}
		response.send(data);
	}else{
		data = {
			status:0,
			msg:"fail"
		}
		response.send(data);		
	}
});

module.exports = Router;
