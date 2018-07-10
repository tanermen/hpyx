import axios from 'axios'

import qs from 'querystring'

const Post = ({url,data}) => {
    return axios({
        method:'post',
        url:'/hpyx'+url,
        headers:{
             'Content-type': 'application/x-www-form-urlencoded'
        },
        data:qs.stringify(data)
    })
}
export default Post
