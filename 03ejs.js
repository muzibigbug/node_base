let http = require('http');
let ejs = require('ejs');
let events = require('events');

http.createServer((req,res) => {

    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});

    people = ['geddy', 'neil', 'alex'];
    html = ejs.render('<%= people.join(", "); %>', {people: people});
    res.write(html)
    res.end();
    //创建eventEmitter对象
let eventEmitter = new events.EventEmitter();
// // 创建事件处理程序
// var connectHandler = function connected() {
//    console.log('连接成功。');//1
  
//    // 触发 data_received 事件 
//    eventEmitter.emit('data_received');
// }

// // 绑定 connection 事件处理程序
// eventEmitter.on('connection', connectHandler);

// // 使用匿名函数绑定 data_received 事件
// eventEmitter.on('data_received', function(){
//     console.log('数据接收成功。');//2
//  });
 
//  // 触发 connection 事件 
//  eventEmitter.emit('connection');
 
//  console.log("程序执行完毕。");//3
let name='muzidigbig';
let age=22;
eventEmitter.on('data_received',(name,age) => {
    console.log(`数据接收成功:名字${name}`)
})

eventEmitter.on('data_received',(name,age) => {
    console.log(`数据接收成功:年龄${age}`)
})
eventEmitter.emit('data_received',name,age)


}).listen(8003)

