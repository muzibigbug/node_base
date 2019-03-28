// 引入渲染模块
let ejs = require('ejs')
let fs = require('fs')

var app = {
    //login
    login:function(req,res) {
        console.log('login')
        // res.end('login')
        ejs.renderFile('views/form.ejs',{},(err,data) => {
            res.end(data)
        })
    },
    dologin:function(req,res) {
        let postStr = '';
        req.on('data',(chunk) => {
            postStr += chunk
        })
        req.on('end',() => {
            console.log(postStr)//username=muzi&passord=444
            // 将登录的用户放到login.txt文件中
            fs.appendFile('login.txt',postStr+'\n',(err) =>{
                if(err){
                    console.log(err)
                    return;
                }else{
                    console.log('写入数据成功')
                }
            })
            // res.end('dologin post')
            // 后台嵌套js
            res.end("<script>alert('登录成功');history.back()</script>")
        })
    },
    register:function(req,res) {
        res.end('register')
    },
    home:function(req,res) {
        res.end('home')
    }
}
// 两种执行app对象里面的函数
// app.login(req,res);//方式一
// app['login'](req,res);//方式二
module.exports = app;