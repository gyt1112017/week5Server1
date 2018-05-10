// express is the server that forms part of the nodejs program
// express是构成nodejs程序一部分的服务器
var express = require('express');
var app = express();
var https = require('https');
var fs = require('fs');
var privateKey = fs.readFileSync('/home/studentuser/certs/client-key.pem').toString();
var certificate = fs.readFileSync('/home/studentuser/certs/client-cert.pem').toString();
var credentials = {key: privateKey, cert: certificate};
var httpsServer = https.createServer(credentials, app);
httpsServer.listen(4443);
//服务器在请求时返回任何html文件
app.get('/:fileName', function (req, res) {
// run some server-side code
var fileName = req.params.fileName;
console.log(fileName + ' requested');
// note that __dirname gives the path to the server.js file
res.sendFile(__dirname + '/'+ fileName);
});