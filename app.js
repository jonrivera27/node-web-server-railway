require('dotenv').config();
const express = require('express')
const hbs = require('hbs');



const app = express()
const port = process.env.PORT;

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials');



// Servir contendio estatico
app.use(express.static('public') );


app.get('/',  (req, res) => {
    res.render('home', {
        nombre: ' Jonathan Joel ',
        titulo: ' Curso de node '
    });
});

app.get('/generic', (req, res) =>{
    res.render ('generic', {
        nombre: ' Jonathan Joel ',
        titulo: ' Curso de node '
    });
});

app.get('/elements',  (req, res) => {
    res.render('elements', {
        nombre: ' Jonathan Joel ',
        titulo: ' Curso de node '
    });
});



app.get('*', (req, res) =>  {
    res.sendFile( __dirname + '/public/404.html');
  });



 app.listen(port, (req, res) => {
    console.log(`Example app listening at http://localhost:${port}`)
   })