
import axios from 'axios'

const Get = ({url,data}) => {
    return axios.get('/hpyx'+url,{
        params:data
    })
}

export default Get
