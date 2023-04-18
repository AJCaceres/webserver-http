const http = require('http');


http.createServer( (req, res) =>{

    res.writeHead(404) 


    res.write('404 | page not found')
    res.end();

})
.listen(4200);
console.log("Escuchando en el puerto 8080")