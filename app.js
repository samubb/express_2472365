const express = require("express") // importar el paquete express
const app = express()
const hbs = require('hbs')
const port =8282 //definir el puerto 

// servir contenido estatico
// Establecer el directorio donde se encuentran los 
// archivos html
app.use(express.static('public'));

//motor de plantilla 

hbs.registerPartials(__dirname + '/public/views/partial',function (err){});
app.set('view engine','hbs');
app.set('views', __dirname + '/public/views');


app.get('/',(req,res)=>{ // req para formularios, res para dar respuestas 
    // res.send('Hola mundo ')
    res.render('registrar.hbs',{
        nombre:'registrar.hbs'
    })
})


app.get("/registrar",(req,res)=>{
    res.sendFile(__dirname + "/public/view/registrar.hbs")
})

app.get('*',(req,res)=>{ 
    //res.send('pagina no encontrada')//tambien sirve para validar 
    res.sendFile(__dirname + '/public/404.html')//llamar la pagina 
})

app.listen(port, ()=>{
    console.log(`Escuchando por el puerto ${port}`)
})

