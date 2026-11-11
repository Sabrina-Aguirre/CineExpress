const express = require('express')
const PORT = process.env.PORT || 3001
const app = express()
const {makeFiltros}= require('./filtros/filtros')
const {validaciones}= require('./validaciones')

const PELICULAS = []
app.use(express.json())

app.post('/peliculas/filtros', (req,res)=>{
    const {datos, condiciones}= req.body
    try{
        const filtros = makeFiltros(condiciones)
        const result = datos.filter( dato => filtros.every(f => f(dato)))
        res.status(201).json(result)
    }catch(err){
        res.status(404).json({mensaje: err.message})

    }
})
app.post('/peliculas', (req,res)=>{
    const datos = req.body
    const valida = validaciones.every(v => v.fn(datos))
    if(!valida)
        return res.status(400).json({mensaje: 'La pelicula a ingresar no cumple con las validaciones'})
    const id = 1 + PELICULAS.reduce((acum,value)=> acum > value.id ? acum : value.id,0)
    const pelicula ={ id, ... datos}
    PELICULAS.push(pelicula)
    res.status(200).json(pelicula)
})
app.get('/peliculas', (_,res)=>{
    res.status(200).json(PELICULAS)
})

app.get('/peliculas/:id', (req,res)=>{
    const id = Number(req.params.id)
    const pelicula = PELICULAS.find(p => p.id == id)
    if(!pelicula)
        return res.status(400).json({mensaje: `La pelicula con id ${id} no existe`})
    res.status(200).json(PELICULAS)
})
app.listen(PORT, ()=>{
    console.log(`La app esta iniciada en el puerto ${PORT}`)
})