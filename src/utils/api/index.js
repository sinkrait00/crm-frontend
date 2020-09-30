import * as axios from 'axios'


const instance = axios.create({
    baseURL: 'https://crm-bishkek.herokuapp.com/api/'
})

export const signIn = data => instance.post('employee/login',data)

export const usersGetter = ()=>instance.get('employee/all').then(response=>response.data)
export const userCreator = (data)=>instance.post('employee/create',data).then(res=>console.log(res)).catch(err=>console.log(err.response))
export const userDeleter = (id)=>instance.delete(`employee/${id}`)
export const usersRoleGetter = ()=>instance.get('employee/roles').then(response=>response.data)

export const providerGetter = ()=>instance.get('contracter/all').then(response=>response.data)
export const providerCreator = (data)=>instance.post('contracter/create',data)
export const providerDeleter = (id)=>instance.delete(`contracter/${id}`)
export const providerUpdater = (data,id)=>instance.put(`contracter/${id}`,data)


export const tagsGetter = ()=>instance.get('tag/all').then(response=>response.data)
export const tagsCreator = data=>instance.post('tag/create',data)
export const tagsDeleter = id =>instance.delete(`tag/${id}`)