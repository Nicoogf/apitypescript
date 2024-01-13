import express from "express" ;
const app = express() ;

//middleware transforma req.body a json
app.use(express.json()) ;

const PORT = 3000 ;


app.get( "/ping" , (_req, res) => {
    
    console.log("Consulta Realizada ")
    res.send('pong')
});

app.listen( PORT, () => {
    console.log(`Servidor funcionando en el puerto:  ${ PORT }`)
});