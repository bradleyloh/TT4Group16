import axios from 'axios';

const createUser = async function (user) {
    try {
        const result = await axios({
            method: 'post',
            url: ''
        })

        return result.data;
    } catch (error) {
        console.log(error);
    }
}

const loginUser = async function (user) {
    try {
        const result = await axios({
            method: 'post',
            url: ''
        })

        return result.data;
    } catch (error) {
        console.log(error); 
    }
}

const getUserLoans = async function () {

}

const getLoanPayments = async function () {

}

export { createUser, loginUser, getUserLoans, getLoanPayments }