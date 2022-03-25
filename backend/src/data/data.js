const customers = [
    {
        "CustomerId": 1,
        "customer_name": "Farrah Dobbie",
        "customer_phone": "3688961901",
        "customer_address": "49862 Kingsford Junction",
        "balance": 69687.54
      },
      {
        "CustomerId": 2,
        "customer_name": "Malcolm Orbell",
        "customer_phone": "8867727382",
        "customer_address": "385 Lawn Terrace",
        "balance": 55592.51
      },
      {
        "CustomerId": 3,
        "customer_name": "Filippa Bucknill",
        "customer_phone": "6677805329",
        "customer_address": "1898 Michigan Road",
        "balance": 53826.01
      },
      {
        "CustomerId": 4,
        "customer_name": "Dido Vanezis",
        "customer_phone": "2887691797",
        "customer_address": "57689 Myrtle Park",
        "balance": 30581.83
      },
      {
        "CustomerId": 5,
        "customer_name": "Annelise Aspland",
        "customer_phone": "2096293966",
        "customer_address": "3922 Cherokee Place",
        "balance": 87026.91
      },
      {
        "CustomerId": 6,
        "customer_name": "Herminia Newby",
        "customer_phone": "8111478402",
        "customer_address": "19 Chive Center",
        "balance": 5414.47
      },
      {
        "CustomerId": 7,
        "customer_name": "Lind Hanley",
        "customer_phone": "7504959822",
        "customer_address": "7534 Village Green Center",
        "balance": 25921.26
      },
      {
        "CustomerId": 8,
        "customer_name": "Mimi Gilhooley",
        "customer_phone": "6594140488",
        "customer_address": "16033 Pond Avenue",
        "balance": 62834.94
      },
      {
        "CustomerId": 9,
        "customer_name": "Ileana Parkes",
        "customer_phone": "1281389203",
        "customer_address": "095 Warner Hill",
        "balance": 76939.31
      },
      {
        "CustomerId": 10,
        "customer_name": "Larissa Yeldham",
        "customer_phone": "2812360584",
        "customer_address": "220 Shopko Parkway",
        "balance": 15790.59
      }
]

const customer_loans = [
    {
        "CustomerLoanId": 1,
        "CustomerId": 7,
        "LoanId": 6
      },
      {
        "CustomerLoanId": 2,
        "CustomerId": 8,
        "LoanId": 8
      },
      {
        "CustomerLoanId": 3,
        "CustomerId": 8,
        "LoanId": 7
      },
      {
        "CustomerLoanId": 4,
        "CustomerId": 8,
        "LoanId": 1
      },
      {
        "CustomerLoanId": 5,
        "CustomerId": 8,
        "LoanId": 10
      },
      {
        "CustomerLoanId": 6,
        "CustomerId": 7,
        "LoanId": 9
      },
      {
        "CustomerLoanId": 7,
        "CustomerId": 5,
        "LoanId": 3
      },
      {
        "CustomerLoanId": 8,
        "CustomerId": 2,
        "LoanId": 2
      },
      {
        "CustomerLoanId": 9,
        "CustomerId": 4,
        "LoanId": 4
      },
      {
        "CustomerLoanId": 10,
        "CustomerId": 4,
        "LoanId": 5
      }
]

const loans = [
    {
      "LoanId": 1,
      "loan_amount": 135532.99
    },
    {
      "LoanId": 2,
      "loan_amount": 34367.53
    },
    {
      "LoanId": 3,
      "loan_amount": 45086.74
    },
    {
      "LoanId": 4,
      "loan_amount": 140123.37
    },
    {
      "LoanId": 5,
      "loan_amount": 57800.21
    },
    {
      "LoanId": 6,
      "loan_amount": 13165.14
    },
    {
      "LoanId": 7,
      "loan_amount": 82062.24
    },
    {
      "LoanId": 8,
      "loan_amount": 12416.32
    },
    {
      "LoanId": 9,
      "loan_amount": 17250.83
    },
    {
      "LoanId": 10,
      "loan_amount": 46431.85
    }
  ]
  const payments = [
    {
      "PaymentId": 1,
      "LoanId": 1,
      "payment_date": "2022-02-20",
      "payment_amount": 35532.99
    },
    {
      "PaymentId": 2,
      "LoanId": 6,
      "payment_date": "2022-03-19",
      "payment_amount": 7818.63
    },
    {
      "PaymentId": 3,
      "LoanId": 4,
      "payment_date": "2022-01-12",
      "payment_amount": 74562.54
    },
    {
      "PaymentId": 4,
      "LoanId": 4,
      "payment_date": "2022-03-21",
      "payment_amount": 51364.06
    },
    {
      "PaymentId": 5,
      "LoanId": 3,
      "payment_date": "2022-01-17",
      "payment_amount": 16363.67
    },
    {
      "PaymentId": 6,
      "LoanId": 1,
      "payment_date": "2022-01-03",
      "payment_amount": 26544.58
    },
    {
      "PaymentId": 7,
      "LoanId": 1,
      "payment_date": "2022-02-27",
      "payment_amount": 30534.71
    },
    {
      "PaymentId": 8,
      "LoanId": 9,
      "payment_date": "2022-02-27",
      "payment_amount": 17250.83
    },
    {
      "PaymentId": 9,
      "LoanId": 2,
      "payment_date": "2022-02-19",
      "payment_amount": 34367.53
    },
    {
      "PaymentId": 10,
      "LoanId": 7,
      "payment_date": "2022-02-08",
      "payment_amount": 31003.82
    }
  ]

export{customers, customer_loans, loans, payments}