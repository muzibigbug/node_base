let http = require('http');
let fs = require('fs');

//1 fs.stat 检测是文件还是目录
/** 
fs.stat('./static/images',(err,stats) => {
    if(err){
        console.log(err)
    }else{
        console.log(`文件：${stats.isFile()}`)
        console.log(`目录：${stats.isDirectory()}`)
    }
})
*/

//2 fs.mkdir 创建目录
/** 
fs.mkdir('./static/logs',(err) => {
    if(err){
        console.log(err)
    } else {
        console.log('成功创建目录：logs')
    }
})
*/

//3 fs.writeFile 创建写入文件
/** 
fs.writeFile('./static/logs/logs.text', '您好 ~ \n',(error) => {
    if(error) {
        console.log()
        } else {
        console.log('成功写入文件')
        }
})
*/

//4 fs.appendFile 追加文件
/** 
fs.appendFile('./static/logs/logs.text','mnuzidigbig',(error) => {
    if(error) {
        console.log(error)
        } else {
        console.log('成功写入文件')
        }
})
*/

//5 fs.readFile 读取文件
/** 
fs.readFile('./static/logs/logs.text','utf8',(error,data) => {
    if (error) {
        console.log(error)
    } else {
        console.log(data)
    }
       
})
*/

//6 fs.readdir 读取目录
/** 
fs.readdir('./static',(error,files) => {
    if (error) {
        console.log(error)
    } else {
        console.log(files)
    }
})
*/

//7 fs.rename 重命名
/** 
fs.rename('./static/logs/logs.text','./static/logs/logs.html',(error) => {
    if (error) {
        console.log(error)
    } else {
        console.log('重命名成功')
    }
})
*/

//8 fs.rmdir 删除目录
/** 
fs.rmdir('logs', (error) =>{
    if (error) {
        console.log(error)
    } else {
        console.log('成功的删除了目录：logs')
    }
})
*/

//9 fs.unlink 删除文件
/** 
fs.unlink(`logs/index.js}`, (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log(`成功的删除了文件: index.js`)
    }
})
*/


// 10 fs.createReadStream 从文件流中读取数据
let fileReadStream = fs.createReadStream('./package.json');
let count = 0;
let str = '';
fileReadStream.on('data',(chunk) => {
    console.log(`${++count}接收到：${chunk.length}`);
    str += chunk;
})
fileReadStream.on('end',() => {
    console.log('---结束---');
    console.log(`最终读取到数据为:${str}`);
    writeData(str);
})
fileReadStream.on('error',(error) => {
    console.log(error)
})

function writeData(str){
    //11 fs.createWriteStream 写入文件
    // 创建一个可以写入的流，写入到文件 package22.json 中
    let writerStream = fs.createWriteStream('./package22.json');
    // 使用 utf8 编码写入数据
    writerStream.write(str,'UTF8');
    // 标记文件末尾
    writerStream.end();
    // 处理流事件 --> finish 事件
    writerStream.on('finish',() => { //finish - 所有数据已被写入到底层系统时触发。
        console.log('写入完成');
    })
    writerStream.on('error',(err) => {
        console.log(err.stack);
    })
    console.log("程序执行完毕");
}


/**
//12 管道流来读取写入
// 创建一个可读流
var readerStream = fs.createReadStream('./package.json');
// 创建一个可写流
var writerStream = fs.createWriteStream('./package22.json');
// 管道读写操作
// 读取 package.json 文件内容，并将内容写入到 package22.json 文件中
readerStream.pipe(writerStream);
*/