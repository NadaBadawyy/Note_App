import axios from "axios";

export const baseUrl='https://note-sigma-black.vercel.app/api/v1/';
export const Proaxios=axios.create({
baseURL:baseUrl
})
Proaxios.interceptors.request.use((req)=>{
    req.headers.token=`3b8ny__${localStorage.getItem('token')}`
    return req
})
Proaxios.interceptors.response.use(
    (res)=>{
return res;
},(res)=>{
    if(res.response.data.msg==='not notes found'){
        return Promise.resolve({
            data:{
                notes:[]
            }
        })
    }
})