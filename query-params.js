//accedo a los query params directamente en el request 
//request.query.gender Info extra para el request
//queries params, los utilizamos paa filtrar es info extra para el request request.query.[nombre de query] -> es un tipo de filtro para que tu endpoint sea más inteligene 
//se coloca después de un -> $


//router -> / -> /mentores/cl

import express from 'express'
import fs from 'fs'

const server = express() 

server.use(express.json()) 



server.get('/koders', async (request, response) => { //cuando yo utilice un async await tengo que poner en una función asíncrono, se pone async al callback porque es la función que contiene la promesa 
    const dataFile = await fs.promises.readFile('./kodemia.json', 'utf8')//trabajando con promesas
    const json = JSON.parse(dataFile)
    let koders = json.koders

    //accedo a los parámetros directamente en  primero es ? y después &
    const queries = request.query
    //destructurando para acceder a generacion
    console.log(queries);

    const {generation, gender} = request.query
    console.log('generation: ', generation);

    let kodersFiltered = json.koders;
    //validar si viene el query
    //string -> true
    //undefined -> false
    if(generation){
        kodersFiltered = kodersFiltered.filter(koder => koder.generation === parseInt(generation))
    }
    //ahora validar si viene gender
    if(gender){
        kodersFiltered = kodersFiltered.filter(koder =>koder.gender === gender) //gender no hay que parsearlo ya que ya es un string 
    }



    response.json({
        succes: true, //se agrega succes y data para arrojar info más descriptiva, generando ciertas nomenclaturas para enviar las respuestas
        data: {
            koders: kodersFiltered || json.koders
        }
    })
})


server.listen(8080, () => { //va al final del código 
    console.log('Server listening on port 8080');
})
//script start -> producción
//script dev -> desarrollo
//tarea filtrar por los 5 primeros, x primeros