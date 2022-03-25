import axios from 'axios';

// const createUser = async function (user) {
//     try {
//         const result = await axios({
//             method: 'post',
//             url: ''
//         })

//         return result.data;
//     } catch (error) {
//         console.log(error);
//     }
// }

// const loginUser = async function (user) {
//     try {
//         const result = await axios({
//             method: 'post',
//             url: ''
//         })

//         return result.data;
//     } catch (error) {
//         console.log(error); 
//     }
// }

const getUserLoans = async function (userId) {
    try {
        const result = await axios({
            method: 'get',
            url: `/loan/all/${userId}`
        })

        return result.data;
    } catch (error) {
        console.log(error); 
    }
}

const getUserLoansAndCall = async function (setLoans, setHistory, id) {
    const allLoans = await getUserLoans(id);
    const fullyPaidLoans = [];
    const outstandingLoans = [];
    for (let i = 0; i < allLoans.length; i++) {
        const thisData = allLoans[i];
        if (thisData.isFullyPaid) {
            fullyPaidLoans.push(allLoans[i]);
        } else {
            outstandingLoans.push(allLoans[i]);
        }
    }

    setLoans(outstandingLoans);
    setHistory(fullyPaidLoans);
}

const createLoan = async function (obj) {
    try {
        const result = await axios({
            method: 'post',
            url: '/loan/create',
            data: obj
        })

        return result.data;
    } catch (error) {
        console.log(error); 
    }
}

const makePayment = async function (obj) {
    try {
        const result = await axios({
            method: 'post',
            url: '/loan/payment',
            data: obj
        })

        return result.data;
    } catch (error) {
        console.log(error); 
    }
}

const getLoanPayments = async function () {

}

export { getUserLoans, getLoanPayments, getUserLoansAndCall, createLoan, makePayment }