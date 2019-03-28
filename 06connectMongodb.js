let express = require('express');
// 数据库引用
let MongoClient = require('mongodb').MongoClient;

let app = express();

// 数据库连接地址，最后的斜杠表示数据库名字
let dataBaseUrl = 'mongodb://localhost:27017/person';
/*
app.get('/',(req,res) => {
    // 连接数据库，这是一个异步操作
    MongoClient.connect(dataBaseUrl,(err,db) => {
        res.writeHead(200,{"Content-Type":"text/html;Charset=utf-8"});
        if(err) {
            res.send('数据库连接失败!')
        }else{
            res.write('恭喜，数据库已经成功连接!\n');
            // 存在兼容性问题
            db.collection('student').insertOne({'name':"honghong",'age':22},(err,result) => {
                if(err) {
                    res.send('数据库写入失败!');
                    return;
                }else{
                    res.write('恭喜，数据已经成功插入！');
                    res.end();
                    //关闭数据库
                    db.close();
                }
            })
        }
    });
});
*/

/*
// 增加数据
app.get('/',(req,res) => {
    // 连接数据库，这是一个异步操作
    MongoClient.connect(dataBaseUrl,(err,client) => {
        res.writeHead(200,{"Content-Type":"text/html;Charset=utf-8"});
        if(err) {
            res.send('数据库连接失败!')
        }else{
            res.write('恭喜，数据库已经成功连接!\n');
            //3.0新写法
            let db = client.db("person");
            db.collection('student').insertOne({'name':"honghong1",'age':22},(err,result) => {
                if(err) {
                    res.send('数据库写入失败!');
                    return;
                }else{
                    res.write('恭喜，数据已经成功插入！');
                    res.end();
                    //关闭数据库
                    client.close();
                }
            })
        }
    });
});
*/
/*
// 删除数据
app.get('/',(req,res) => {
    MongoClient.connect(dataBaseUrl,(err,client) => {
        res.writeHead(200,{"Content-Type":"text/html;Charset=utf-8"});
        if(err) {
            res.send('数据库连接失败！')
        }else{
            res.write('数据库连接成功！');
            let db = client.db('person');
            db.collection('student').deleteMany({'name':'honghong'},(err,result) => {
                if(err) {
                    res.send('数据删除失败！')
                    return false;
                }else{
                    console.log(result)
                    res.write("数据删除成功！");
                    res.end();
                    client.close()
                }
            })
        }
    })
})
*/
/*
// 修改数据
app.get('/',(req,res) => {
    res.writeHead(200,{"Content-Type":"text/html;Charset=utf-8"});
    MongoClient.connect(dataBaseUrl,(err,client) => {
        if(err){
            res.send('数据库连接失败！');
        }else{
            res.write('数据库连接成功！');
            let db = client.db('person');
            db.collection('student').updateOne({'name':'honghong1'},{$set:{'age':30}},(err,result) => {
                if(err){
                    res.send('更新数据失败！');
                }else{
                    res.write('更新数据成功！');
                    res.end();
                    client.close()
                }
            })
        }
    })
})
*/

/*
// 查询数据
app.get('/',(req,res) => {
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    MongoClient.connect(dataBaseUrl,(err,client) => {
        if(err) {
            res.send('数据库连接失败！')
        }else{
            res.write('数据库连接成功！');
            let db = client.db('person');
            db.collection('student').find().toArray((err,result) => {
                if(err){
                    res.send('查询数据失败！')
                }else{
                    res.write('查询数据成功！');
                    console.log(result);
                    console.log(result instanceof Array);//true
                    res.end();
                    client.close()
                }
            })
        }
    })
})
*/

/*
// 排序
app.get('/',(req,res) => {
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    MongoClient.connect(dataBaseUrl,(err,client) => {
        if(err){
            res.send('数据库连接失败！')
        }else{
            res.write('数据库连接成功！');
            let db = client.db('person');
            db.collection('student').find().sort({"age":1}).toArray((err,result) => {
                if(err) {
                    res.send('排序失败！')
                }else{
                    res.write('排序成功！');
                    console.log(result);
                    res.end();
                    client.close();
                }
            })
        }
    })
})
*/
/*
// 查询分页
app.get('/',(req,res) => {
    MongoClient.connect(dataBaseUrl,(err,client) => {
        res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
        if(err) {
            res.send('数据库连接失败！')
        }else{
            res.write('数据库连接成功！');
            let db = client.db('person');
            db.collection('student').find().limit(5).toArray((err,result) => {
                if(err) {
                    res.send("查询分页失败！")
                }else{
                    res.write('查询分页成功！');
                    console.log(result);
                    res.end();
                    client.close()
                }
            })
        }
    })
})
*/

/*
// 跳过的条数
app.get('/',(req,res) => {
    MongoClient.connect(dataBaseUrl,(err,client) => {
        res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
        if(err) {
            res.send('数据库连接失败！')
        }else{
            res.write('数据库连接成功！');
            let db = client.db('person');
            db.collection('student').find().skip(2).toArray((err,result) => {
                if(err){
                    res.send("跳过的条数查询失败！")
                }else{
                    res.write("跳过的条数查询成功！");
                    console.log(result);
                    res.end();
                    client.close()
                }
            })
        }
    })
})
*/

// $lookup 实现左连接
app.get('/',(req,res) => {
    MongoClient.connect(dataBaseUrl,(err,client) => {
        res.writeHead(200,{"Content-Type":"text/html;charset=utf8"});
        if(err) {
            res.send('数据库连接失败！');
        }else{
            res.write('数据库连接成功！');
            let db = client.db('person');
            db.collection('student').aggregate([
                {
                    $lookup:
                        {
                            from:'teacher',// 右集合(关联到teacher表)
                            //localField、foreignField这两个属性在两张表中都有
                            localField:"neme",// 左集合 join 字段(本地)
                            foreignField:"neme",// 右集合 join 字段(外部)
                            as:'studentTeacher'// 新生成字段（类型array）
                        }
                }
            ]).toArray((err,result) => {
                if(err) {
                    res.send('左连接失败！')
                }else{
                    res.write('左连接成功！');
                    // 序列化成json字符串
                    console.log(JSON.stringify(result));
                    res.end();
                    client.close()
                }
            })
        }
    })
})
app.listen(8002)