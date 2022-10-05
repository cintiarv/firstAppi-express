//KODERS
/* import express from 'express'
import kodersRouter from './routers/koders.router.js'


const server = express() //creando nuestro server 


server.use(express.json()) //middleware -> convierte lo que llega a body a un json

//aqui encuentro a la ruta /koders
server.use('/koders', kodersRouter)//diciendole al server que conozca este router , ánclate a la ruta kdkoders

//Poner a escuchar nuestro server 
server.listen(8080, () => { //va al final del código 
    console.log('Server listening on port 8080');
})
 */


//MENTORS
import express from 'express'
import mentorsRouter from './routers/mentors.routers.js'


const server = express() //creando nuestro server 


server.use(express.json()) //middleware -> convierte lo que llega a body a un json

//aqui encuentro a la ruta /koders
server.use('/mentors', mentorsRouter)//diciendole al server que conozca este router , ánclate a la ruta kdkoders

//Poner a escuchar nuestro server 
server.listen(8080, () => { //va al final del código 
    console.log('Server listening on port 8080');
})