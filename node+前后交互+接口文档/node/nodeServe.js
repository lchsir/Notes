var express = require("express")
var bodyParser = require('body-parser');   //body解析
var app = express();

var arr = []

// 解决跨域
var allowCrossDomain = function (req, res, next) {
 res.header('Access-Control-Allow-Origin', '*');//自定义中间件，设置跨域需要的响应头。
 res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');  //允许任何方法
 res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,X-Session-Token');   //允许任何类型
 next();
};

app.use(allowCrossDomain);//运用跨域的中间件
//app.use(bodyParser.text());//运用中间件，对请求体的文本进行解析
app.use(bodyParser.json())   //// 创建 application/json 解析
app.use(bodyParser.urlencoded({extended: true})) // 创建 application/x-www-form-urlencoded 解析

// 接口
app.get("/", function(req, res){
	res.send('index')
})
app.get("/data/query", function(req, res){
	res.send(JSON.stringify(arr));
})
app.post("/data/add", function(req, res){
	console.log(req.body);
	arr.push(req.body)
	res.send(JSON.stringify({code:'200',msg:'success'}));
})

// 监听
app.listen(3000, function(){console.log("Server started on port 3000.")});