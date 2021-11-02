import Mock from 'mockjs';
 
const data = Mock.mock("/mock",'get',{  
    "userinfo|1-10":[{      
        "key|+1":1,                         
        "name":"@cname",        
        "age|18-28":25,         
        "sex|1":["男","女"],  
        "job|1":["web","teacher","python","php"]   
    }]
})
 
// 输出结果
export default data