import * as axios from 'axios'


const instance = axios.create({
    baseURL: 'https://crm-bishkek.herokuapp.com/api/'
})


export const usersGetter = ()=>instance.get('employee/all').then(response=>response.data)
export const providerGetter = ()=>instance.get('contracter/all').then(response=>response.data)