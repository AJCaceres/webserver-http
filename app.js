
require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT




// HANDELBARS
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});
// servir contenido estatico
app.use( express.static('public'));

// se hace con el servidor estatico
// app.get('/',  (req, res) => {
//   res.send('Hello World')
// })

app.get('/',  (req, res) => {
  res.render('home', {
    nombre: 'Alvaro Cáceres',
    titulo:'Curso de Node'
  });
})

app.get('/generic',  (req, res) => {
  
    res.render('generic', {
      nombre: 'Alvaro Cáceres',
      titulo:'Curso de Node'
    });
  })
app.get('/elements',  (req, res) => {
  
  res.render('elements', {
    nombre: 'Alvaro Cáceres',
    titulo:'Curso de Node'
  });
})
  app.get('*',  (req, res) => {
    res.send('404 | page not found')
  })

app.listen( port, () => {
    console.log("Se esta corriendo en el puerto ", port)
})