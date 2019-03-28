let http = require('http');
let url = require('url');
let ejs = require('ejs');
let fs = require('fs')

http.createServer((req,res) => {
    // 获取get还是post请求
    let reqMethod = req.method;
    res.writeHead(200,{"Content-Type":"text/html;Charset=utf-8"})

    // let pathname = url.parse(req.url).pathname;
    // 拿到get请求的数据写法
    let pathname = url.parse(req.url,true).pathname;
    if(pathname == '/login') {//显示登录页面

        ejs.renderFile('views/form.ejs',{},(err,data) => {
            res.end(data)
        })
    }else if(pathname == '/dologin'){//执行登录操作
        if(reqMethod=='GET'){
            // get获取数据
            console.log(url.parse(req.url,true).query)
            res.end('dologin get')
        }else{
            let postStr = '';
            req.on('data',(chunk) => {
                postStr += chunk
            });
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
        }
        
    }else{
        ejs.renderFile('views/index.ejs',{},(err,data) => {
            res.end(data)
        })
    }
}).listen(8004)