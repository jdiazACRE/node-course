const { getUUID, getAge } = require('./plugins');
//const {emailTemplate} = require('./js-foundation/01-template')
//require('./js-foundation/02-destructuring')
//require('./js-foundation/03-callbacks')
//const {getUserById} = require('./js-foundation/03-callbacks')
//const {getUserById} = require('./js-foundation/04-arrow')


const getPokemonById = require('./js-foundation/06-promises')

getPokemonById(4)
    .then( (pokemon) => console.log(pokemon))
    .catch( (error) => console.log('Por favor intente de nuevo'))
    .finally( () => console.log('finally'))











//! Referencia a la función factory y uso
// const { BUILD_MAKE_PERSON } = require('./js-foundation/05-factory')
// const makePerson = BUILD_MAKE_PERSON({ getUUID, getAge })
// const obj = { name: 'John', birthdate: '1997-08-18'}
// const johnDoe = makePerson( obj ) 
// console.log(johnDoe)