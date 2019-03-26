let express = require("express");
let bodyParser = require("body-parser");
let app = express();

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    // 跨域请求CORS中的预请求
    if (req.method == "OPTIONS") {
        res.sendStatus(200); /*让options请求快速返回*/
    } else {
        next();
    }
});
// 引入路由
let Router = require("./http/routers/index.js");

// 使用body-parser
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());


// 设置静态资源服务台
app.use(express.static("\.\/"));

// 使用引入路由
app.use("\/", Router)


// 端口号监听
app.listen(6868, () => {
    console.log("6868");
})