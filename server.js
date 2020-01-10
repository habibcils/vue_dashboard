const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')

const app = express();

//configuring dist to serve app files
app.use('/',serveStatic(path.join(__dirname,'/dist')))

// this * route is to serve project on
// app.get(/.*/, function(req, res){
//     res.sendFile(path.join(__dirname, '/dist/index.html'))
// })
app.get('/', function(req, res){
    res.sendFile(__dirname, '/dist/index.html')
})

const port = process.env.PORT || 8080;
app.listen(port);

console.log(`server started: ${port}`)