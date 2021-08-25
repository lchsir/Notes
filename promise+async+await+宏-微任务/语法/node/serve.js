const express = require('express')   //引入express  加载依赖包
var bodyParser = require('body-parser'); //body解析
const app = express()    //创建服务器
const port = 3000  //定义一个端口

const m = new Map();
var arr = [];

var allowCrossDomain = function (req, res, next) {  //req==request请求   res==response响应   next
  res.header('Access-Control-Allow-Origin', '*');//自定义中间件，设置跨域需要的响应头。
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');  //允许任何方法
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,X-Session-Token');   //允许任何类型
  next(); //下一步
 };
app.use(allowCrossDomain);//运用跨域的中间件
app.use(bodyParser.json())   //// 创建 application/json 解析   不添加这个req.body拿不到值
app.use(bodyParser.urlencoded({extended: true})) // 创建 application/x-www-form-urlencoded 解析

app.get('/', (req, res) => {   //req==request 请求   res==response响应
  res.send('Hello World!')
})
//添加接口
app.post("/add_list", function(req, res){ 
  console.log(req.body);  //获取前端传入的参数
  arr.push(req.body) 
  res.send(JSON.stringify({code:'200',msg:'success'})); 
})
//查询接口
app.get('/get_list', (req, res) => {   //req==request 请求   res==response响应
  var obj = {
    code:'200',
    msg:'success',
    result:arr
  }
  res.send(JSON.stringify(obj));
})
//存储数据 POST   map
app.post("/submit_data", function(req, res){ 
  console.log(req.body);  //获取前端传入的参数   {name:name,message:message}
  for(let k in req.body){
    m.set(k,req.body[k]) 
  };
  let data = {
    code:200,
    msg:'success'
  }
  res.send(JSON.stringify(data)); 
})

//查询数据 GET
app.get('/get_data', (req, res) => {   //req==request 请求   res==response响应
  //转换为数组对象
  //转为对象
  let o = {};
  for(let [k,v] of m){
    o[k] = v
  };
  arr.push(o);

  var obj = {
    code:'200',
    msg:'success',
    result:arr
  }
  res.send(JSON.stringify(obj));
})

app.listen(port, () => {   //监听3000端口
  console.log(`Example app listening at http://localhost:${port}`)
})