let express = require("express");
let Router = express.Router();

// 引入路由
let userRouter = require("./user.js");

// 使用路由
Router.use("\/",userRouter);

module.exports = Router;