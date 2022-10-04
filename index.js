import express from 'express'

const server = express() //creando nuestro server 

server.get('/', (request, response) => { //get recibe la ruta a la que va a hacer la petición y recibe un request listener. express nos trae esta forma en vez de los condicionales ponemos .get, .post, .patch, etc.
    /* response.setHeader('Content-Type', 'application/json')
    const msg = {
        msg: 'Hola desde GET /'
    }
    const jsonStr = JSON.stringify(msg)
    response.write(jsonStr) //diagonal es la ruta raíz (primera ruta que se encuentra) se le llama root path 
    response.end() */

    //Express
    response.json({ //ya viene incluido el response.end 
        msg:'Hola desde GET /  c:'
    })
})

server.get('/hola', (request, response) => { //esta es otra ruta GET/hola
    response.write('GET /hola')
    response.end()
})

server.post('/', (request, response) => {
    response.write('POST /')
    response.end()
})

server.patch('/', (request, response) => {
    response.write('PATCH /')
    response.end()
})




//Poner a escuchar nuestro server 
server.listen(8080, () => { //va al final del código 
    console.log('Server listening on port 8080');
})