// 引入http服务器核心模块
let http = require('http');
//引入获取路径模块
let url = require('url');

//创建服务器
http.createServer((req,res) => {
    // 获取请求的url
    let reqUrl = req.url;
    console.log(reqUrl);
    // 解析请求路径
    console.log(url.parse(reqUrl,true))

    // 发送 HTTP 头部;HTTP 状态值: 200 : OK
    //设置 HTTP 头部，状态码是 200，文件类型是 html，字符集是 utf8
    res.writeHead(200,{"Content-Type":"text/html;Charset=utf-8"});
    // 发送响应数据
    res.write('hello!  muzidigig');
    //结束响应
    res.end()

}).listen(3003,'127.0.0.1')

//浏览器中手动输入：127.0.0.1:3003/