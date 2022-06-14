const http = require('http')
const fs = require('fs')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  if(req.method=="GET"){
    res.writeHead(200, {"Content-Type": "text/html"})

    switch(req.url){
        case '/' || '/home': {
            fs.createReadStream('pages\\home.html').pipe(res)
            break
        }
        case '/about': {
            fs.createReadStream('pages\\about.html').pipe(res)
            break
        }
        case '/contact': {
            fs.createReadStream('pages\\contact.html').pipe(res)
            break
        }
        default: fs.createReadStream('pages\\home.html').pipe(res)
    }
    
  } else {
    res.setHeader('Content-Type', 'text/plain')
    
    res.end('Page not found. \n')
  }
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
