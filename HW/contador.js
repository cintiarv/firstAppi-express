//tarea filtrar por los 5 primeros, x primeros
/* 
1-. agregar una variable contador 
2-. que sea menor o igual a un parametro 
3-. traer koder desde la posición 0 hasta el que le digas (parám)


*/

import express from 'express'
import fs from 'fs'

const server = express() 

server.use(express.json()) 


server.get('/koders', async (request, response) => { //cuando yo utilice un async await tengo que poner en una función asíncrono, se pone async al callback porque es la función que contiene la promesa 
    const dataFile = await fs.promises.readFile('./kodemia.json', 'utf8')//trabajando con promesas
    const json = JSON.parse(dataFile)
    let koders = json.koders

    let kodersCounted = '';

    const {contador} = request.query

    contador <= koders.length
    ?kodersCounted = koders.slice(0 ,contador)
    :kodersCounted = 'Esa cantidad de koders no existe!, intenta de nuevo'
        
    response.json({
        succes: true, //se agrega succes y data para arrojar info más descriptiva, generando ciertas nomenclaturas para enviar las respuestas
        data: {
            koders: kodersCounted
        }
    })
})


server.listen(8080, () => { //va al final del código 
    console.log('Server listening on port 8080');
})








