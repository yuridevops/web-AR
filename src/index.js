const express = require('express')
const path = require('path')
var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync(path.normalize( __dirname + '/sslcert/server.key'), 'utf8');
var certificate = fs.readFileSync(path.normalize( __dirname + '/sslcert/server.cert'), 'utf8');
var credentials = {key: privateKey, cert: certificate};


const app = express()

app.use(express.json())


app.get('/', (request, response) =>{
  response.json({message: 'ola'})
})

app.get('/qrcode', (request, response) =>{
  response.sendFile(__dirname + '/templates/ar_sicredi.html')
} )

var httpsServer = https.createServer(credentials, app);

httpsServer.listen(8080);