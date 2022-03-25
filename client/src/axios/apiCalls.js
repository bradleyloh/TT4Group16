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

const getUserLoans = async function (id) {
    try {
        const result = await axios({
            method: 'get',
            url: '/loan/all'
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

const createLoan = async function (id, amount) {
    try {
        const result = await axios({
            method: 'post',
            url: '/loan/create'
        })

        return result.data;
    } catch (error) {
        console.log(error); 
    }
}

const makePayment = async function (id) {
    try {
        const result = await axios({
            method: 'post',
            url: '/loan/payment'
        })

        return result.data;
    } catch (error) {
        console.log(error); 
    }
}

const getLoanPayments = async function () {

}

export { getUserLoans, getLoanPayments, getUserLoansAndCall }