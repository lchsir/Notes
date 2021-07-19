//模拟一个简单的后端接口服务

// Access-Control-Allow-Origin
// 访问    控制    允许   源头
var express = require('express')

var app = express();

// cors处理跨域
var cors = function(req, res, next) {
    // 允许访问的请求源头
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    // 允许访问的请求方法 get post
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE'); 
    // 允许访问的请求头 content-type  token
    // 后端规定需要哪些请求头  前端就必须要传
    res.setHeader('Access-Control-Allow-Headers', 'content-type, x-token'); 
    next();
}
//app.use(cors)

app.get('/api/data', function(req, res){
    res.send("hello")
})

app.get('/api/data2', function(req, res){
    var data = {name: '从db取的数据'}   //模拟数据库数据
    data = JSON.stringify(data);    //转字符串
    // req.query.callback===handleResponse
    var callback = `${req.query.callback}(${data})` //拼接成前端回调参数
    res.send(callback);
})

app.listen(3000, function(){
    console.log("服务已启动！ 端口3000")
})



