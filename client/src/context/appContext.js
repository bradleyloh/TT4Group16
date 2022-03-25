import React, { useReducer, useContext } from 'react'
import {
    ERROR_ALERT, CLEAR_ALERT,
    SETUP_USER_BEGIN, SETUP_USER_ERROR, REGISTER_USER_SUCCESS, LOGIN_USER_SUCCESS, LOGOUT_USER
} from "./constants"
import reducer from './reducer'
import axios from 'axios'

const user = localStorage.getItem('user');
console.log(user);
const initialState = {
    isLoading: false,
    showAlert: false,
    alertText: '',
    alertType: '',
    user: user ? JSON.parse(user) : null,
    // token: null,
}

const AppContext = React.createContext();

const AppProvider = function ({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    // alerts
    const displayAlert = function () {
        dispatch({ type: ERROR_ALERT });
    }

    const clearAlert = function (ms) {
        setTimeout(dispatch({ type: CLEAR_ALERT }), ms);
    }

    // localStorage
    const addUserToLocalStorage = function (user) {
        localStorage.setItem('user', user);
    }

    const removeUserFromLocalStorage = function () {
        localStorage.removeItem('user');
    }

    // others
    const setupUser = async function (setupType, currentUser) {
        dispatch({ type: SETUP_USER_BEGIN });
        try {
            const response = await axios({
                method: 'post',
                url: `http://localhost:3002/${setupType}`,
                data: currentUser
            });
            console.log(response);
            const { user } = response.data;
            //const user = { name: "hihi", phone: "123", address: "123", password: "123" };
            dispatch({
                type: setupType === 'login' ? LOGIN_USER_SUCCESS : REGISTER_USER_SUCCESS,
                payload: {
                    user,
                    // token
                }
            });
            addUserToLocalStorage(JSON.stringify(user));
        }
        catch (error) {
            console.log(error);
            dispatch({
                type: SETUP_USER_ERROR,
                payload: {
                    msg: error.response.data.msg
                }
            });
        }
    }

    const logoutUser = function () {
        dispatch({type: LOGOUT_USER});
        removeUserFromLocalStorage();
    }

    return <AppContext.Provider value={{
        ...state, displayAlert, clearAlert, setupUser, logoutUser }}>
        {children}
    </AppContext.Provider>

}

// custom hook to access state.
const useAppContext = function () {
    return useContext(AppContext);
}

export { AppProvider, initialState, useAppContext }