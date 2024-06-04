
const BUILD_MAKE_PERSON = ({getUUID, getAge}) => {
    return ({name, birthdate}) => {
        return {
            id: getUUID(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate)
        }
    }
}


module.exports = {
    BUILD_MAKE_PERSON,
}
