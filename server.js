
//node服务
const express = require("express");  //导入express框架
const app = express();  //生成实例

//实现第一个接口
app.get("/api/index", function (req, res) {
    console.log(11111)
    res.send({ code: '200', data: { name: '皎月' }, message: '成功' })
})

app.listen(3002, function () {
    console.log("服务已启动，监听3000端口")
})
