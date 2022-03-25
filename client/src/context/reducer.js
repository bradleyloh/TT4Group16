import { ERROR_ALERT, CLEAR_ALERT,
    SETUP_USER_BEGIN, REGISTER_USER_SUCCESS, SETUP_USER_ERROR, LOGIN_USER_SUCCESS, LOGOUT_USER } from "./constants";
    import { initialState } from "./appContext";
    
    const reducer = function (state, action) {
        switch (action.type) {
            case ERROR_ALERT:
                return {
                    ...state, 
                    showAlert: true, 
                    alertType: 'danger', 
                    alertText: 'Please provide all values.'
                }
            case CLEAR_ALERT:
                return {
                    ...state, 
                    showAlert: false, 
                    alertType: '', 
                    alertText: ''
                }
            case SETUP_USER_BEGIN:
                return {
                    ...state, 
                    isLoading: true
                }
            case SETUP_USER_ERROR:
                return {
                    ...state, 
                    isLoading: false,
                    showAlert: true,
                    alertType: 'danger',
                    alertText: action.payload.msg
                }
            case REGISTER_USER_SUCCESS:
                return {
                    ...state, 
                    user: action.payload.user,
                    // token: action.payload.token,
                    isLoading: false,
                    showAlert: true,
                    alertType: 'success',
                    alertText: 'User created! Redirecting...'
                }
            case LOGIN_USER_SUCCESS:
                return {
                    ...state, 
                    user: action.payload.user,
                    // token: action.payload.token,
                    isLoading: false,
                    showAlert: true,
                    alertType: 'success',
                    alertText: 'Successfully logged in! Redirecting...'
                }
            case LOGOUT_USER:
                return {
                    ...initialState, 
                    user: null
                }
            default:
                throw new Error(`no such action: ${action.type}`);
        }
    }
    
    export default reducer;