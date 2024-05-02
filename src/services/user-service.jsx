import {myAxios} from "./helper"

export const loginUser=(loginDetail)=>{
    return myAxios.post('/users/login',loginDetail).then((response)=>response.data)
}