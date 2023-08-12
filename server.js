const PORT = 3000
var http = require('http')
const fs = require('fs')
const path = require('path')



http.createServer(function (req, res) {
    let fpath = path.join(__dirname, 'test.html')
    console.log(fpath);

    let file = fs.readFile(fpath, (err, file) => {
        if (err) {
            throw err;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(file)
        res.end()
    })


}).listen(PORT)