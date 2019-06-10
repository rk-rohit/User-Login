const initState = {
    username : 'hruday@gmail.com',
    password : 'hruday123',
    isLoggedIn : false,
    errorMessage : ''
}

const authReducer = (state=initState, action) => {
    switch(action.type) {
        case 'LOGIN' :
            if (action.logininfo.username === state.username && action.logininfo.password === state.password) {
                return {
                    ...state,
                    isLoggedIn : true,
                    errorMessage : 'Login Success'
                }
            } else {
                return {
                    ...state,
                    errorMessage : 'User name or password is incorrect'
                }
            }
        case 'SIGNOUT' : {
            return {
                ...state,
                isLoggedIn: false,
                errorMessage : 'Logout Successfully'
            }
        }
        default :
            return state
    }
}

export default authReducer;

   