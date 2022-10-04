//requiero el modulo de express

import express from 'express'

const router = express.Router() //creando un router, un router es una ramificacion del server

    router.get('/koders', async (request, response) => { //cuando yo utilice un async await tengo que poner en una función asíncrono, se pone async al callback porque es la función que contiene la promesa 
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
    
    
    router.post('/koders', async (request, response) => { //para el post se utiliza request, se manda un paquete http (header y body)
        //request objeto que trae todo lo que nos mandan, request y response lo manejaremos en json 
        //Leer la dat del nuevo koder del body
        const newKoder = request.body //aquí recibo la info que escribi en insomnia
        console.log(newKoder);
    /*     console.log(request.headers); 
     */    //para el post se utiliza request, se manda un paquete http (header y body)
            //request objeto que trae todo lo que nos mandan, request y response lo manejaremos en json 
           
    
            const dataFile = await fs.promises.readFile('./kodemia.json', 'utf8') //await va antes de la promesa
            const json = JSON.parse(dataFile)
        
            json.koders.push(newKoder)
    
            await fs.promises.writeFile('./kodemia.json', JSON.stringify(json, null, 2), 'utf8')
    
            response.json({
                succes: true,
                msg: 'Koder creado!'
            })
        })
        



