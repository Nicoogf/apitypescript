import express from "express" ;

const router = express.Router() ;

router.get("/" , ( _req , res) => {
    res.send( "Fetching de todas las entradas diarias" )
}) ;

router.post("/" , (_req, res) => {
    res.send( "Entrada enviada" )
}) ;

export default router ;