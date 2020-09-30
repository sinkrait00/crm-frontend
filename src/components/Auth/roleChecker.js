import jwt_decode from 'jwt-decode';

export const  roleChecker = () =>{
    const token = jwt_decode(localStorage.getItem('token'))
    console.log(token)
    try {
        const token = jwt_decode(localStorage.getItem('token'))
        return token.role
    }catch (e) {
    }
    return 'undefind'
}