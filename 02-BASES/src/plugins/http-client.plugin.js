const axios = require('axios');


const httpClientPlugin = {
    get: async(url) => {
        const {data} = await axios.get( url )
        return await data
    },
    post: async(url, body) => {},
    put: async(url, body) => {},
    delete: async(url, body) => {},
}


module.exports = {
   http: httpClientPlugin,
}