import express from 'express'

const server = express()

server.get('/koders', (request, response) => {
    response.json({
        msg: 'Aqui estarán todos los koders'
    })
})

server.post('/koders', (request, response) => {
    response.json({
        msg: 'Aqui se crearán koders'
    })
})

server.patch('/koders', (request, response) => {
    response.json({
        msg: 'Aqui se actualizaran koders'
    })
})

server.delete('/koders', (request, response) => {
    response.json({
        msg: 'Aqui se eliminarán koders'
    })
})


server.listen(8080, () => { //va al final del código 
    console.log('Server listening on port 8080');
})