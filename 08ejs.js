let http = require('http');
let url = require('url');
let ejs = require('ejs');

http.createServer((req,res) => {
    res.writeHead(200,{"Content-Type":"text/html;Charset=utf-8"});
    // 获取客户端请求的路径
    let pathname = url.parse(req.url).pathname;
    if(pathname == '/login') {
        let serverData = '<h4>你好，我是后台数据！</h4>';
        let arr = ['muzi','digbig','muzidigbig'];
        // 把从数据库获得到的数据渲染到模板上面
        // ejs.renderFile(.ejs模板渲染页面,数据库/文件的数据,回调函数)
        ejs.renderFile('views/login.ejs',{
            msg:serverData,
            list:arr,
        },(err,data) => {
            // 不在页面中输出返回的data参数  将不渲染.ejs模板
            res.end(`返回显示的数据：${data}`)
        })

    }else if(pathname == '/regi'){
        let data = '这是一个注册页面'
        ejs.renderFile('views/register.ejs',{
            msg:data
        },(err,data) => {
            res.end(`返回显示的数据：${data}`)
        })
    }else{
        res.end('页面待开发')
    }
}).listen(8003)