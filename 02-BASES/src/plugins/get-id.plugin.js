const { v4: uuidv4 } = require('uuid');

//getUUID 
const getUUID = () => {
    return uuidv4()
}

module.exports = {
    getUUID,
}