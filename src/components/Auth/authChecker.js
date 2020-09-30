




    const getExpirationDate = (token)=> {
        if (!token) {
            return null;
        }
        const jwt = JSON.parse(atob(token.split('.')[1]));

        // multiply by 1000 to convert seconds into milliseconds
        return jwt && jwt.exp && jwt.exp * 1000 || null;
    };

    const isExpired = (exp) => {
        if (!exp) {
            return false;
        }else if (Date.now() < exp){
            return true
        }
        return false

    };

    export const  authChecker = ()=>isExpired(getExpirationDate(localStorage.getItem("token")))
