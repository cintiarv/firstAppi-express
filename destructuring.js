const person = {
    name:'Fernanda',
    lastName: 'Palacios',
    github: '@EveFer',
    address: {
        number:12
    }
}


//utilizando el destructuring
//que propiedades quiero = de que objeto las voy a tener
const {name, lastName, github, address:{number}} = person
const template = `Hola soy ${name} ${lastName} y vivo en ${number}`
console.log(template)