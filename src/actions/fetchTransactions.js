// export function fetchTransactions(){
//     return(dispatch) =>{
//         // let url = 'http://localhost:3000/accounts/' + this.state.id + '/transactions'
//         let url = 'http://localhost:3000/accounts/1/transactions'
//         fetch(url)
//         .then(resp => resp.json())
//         .then(transactions => {
//             dispatch({type: 'FETCH_TRANSACTIONS', payload: transactions})
//         })
//     }
// }
// BECAUSE OF ACTIVE MODEL SERIALIZERS GEM IN RAILS API, TRANSACTIONS ARE PULLED IN WITH
// FETCH ACCOUNTS ACTION BY GIVING ACCOUNTS SERIALIZER HASMANY TRANSACTIONS IN BACKEND