var http = require('http')
var log = require('./log.js')
var city = require('./exportsDemo')

http.createServer(function(request, response){
    
    if(request.url=="/admin"){
        response.writeHead(200,{'Content-Type':'text/html'})
        response.write('<html><body><strong>Admin Sayfası</strong><body></html>')
    }
    else if(request.url=="/"){
        response.writeHead(200,{'Content-Type':'text/html'})
        response.write('<html><body><strong>Anasayfa</strong><body></html>')
    }
    else if(request.url == "/customer"){
        response.writeHead(200,{'Content-Type':'application/json'})
        response.write(JSON.stringify({name:'tayfun', lastname:'karaveli'}))
    }
    response.end('Merhaba')
}).listen(8080) 

log.information('Sunucu yayına geçti')
console.log(city)



