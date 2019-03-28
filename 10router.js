let http = require('http');
let url = require('url');
let model = require('./model/model.js')

http.createServer((req,res) => {
    res.writeHead(200,{"Content-Type":"text/html;Charset=utf-8"})

    // 获取客户端请求的路径;replace('/','')将获取到的路径中的'/'替换为空
    let pathname = url.parse(req.url).pathname.replace('/','');

    if(pathname != '/favicon.ico'){
        try {
            model[pathname](req,res)
        } catch (error) {
            model['home'](req,res)
        }
        // console.log(pathname)
    }
}).listen(8004)