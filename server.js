const http = require('http');
const path = require('path');
const fs = require('fs');
const colors = require('colors');
const dotenv =  require('dotenv').config();


const PORT = process.env.SERVER_PORT ||3000;


http.createServer((req,res) => {

    const homepage = fs.readFileSync('./public/index.html')
    const contactpage = fs.readFileSync('./public/Conatct.html')
    const aboutpage = fs.readFileSync('./public/about.html')
    //routing
    if (req.url == '/') {
        res.writeHead(200, {"Content-Type" : "text/html"});
        res.write(`${homepage}`);
        res.end();
    }else if (req.url == '/contact') {
        res.writeHead(200, {"Content-Type" : "text/html"});
        res.write(`${contactpage}`);
        res.end();
    }else if (req.url == '/about') {
        res.writeHead(200, {"Content-Type" : "text/html"});
        res.write(aboutpage);
        res.end();
    }else{
        res.writeHead(404, {"Content-Type" : "text/html"});
        res.write(`Page Not Found`);
        res.end();
    }
    

}).listen(PORT, () => {
    console.log(`Server Runing Out On Port ${PORT}`.bgMagenta.white );
})