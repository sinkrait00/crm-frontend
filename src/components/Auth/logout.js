export const logout = ()=>{
    localStorage.removeItem("id")
    localStorage.removeItem("token")
}