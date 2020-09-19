import * as axios from 'axios'


const instance = axios.create({
    baseURL: 'https://crm-bishkek.herokuapp.com/api/'
})


export const employeeGetter = ()=>axios.get('https://crm-bishkek.herokuapp.com/api/employee/all').then(response=>response.data)