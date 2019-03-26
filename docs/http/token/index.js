let jwt = require("jsonwebtoken");

// 加密的私钥
let privateKey = "zhyongpe.@163.com";

// 生成token
exports.create = (username,expiresIn="2h")=>{
	let token = jwt.sign({username},privateKey,{
		expiresIn
	});
	return token;
}

// 验证token
exports.verify = (token)=>{
	let res = false;
	try{
		res = jwt.verify(token,privateKey);
	}catch(err){
		res = false;
	}

	return res;
}

