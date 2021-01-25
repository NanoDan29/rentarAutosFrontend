import axios from 'axios'

const ClienteAxios =axios.create({
    baseURL:"https://mysterious-brook-94816.herokuapp.com"
})
 
export default ClienteAxios;