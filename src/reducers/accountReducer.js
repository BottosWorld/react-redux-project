export default function accountReducer(state = {accounts: []}, action) {

    switch(action.type){
        case "FETCH_ACCOUNTS":
            return {accounts: action.payload}
        case "ADD_ACCOUNT":
            return {...state, accounts: [...state.accounts, action.payload]}
        case "ADD_TRANSACTION":
            return {...state, accounts: state.accounts.map(account => {
                if (account.id === action.payload.id) {
                    return action.payload
                }
                else {
                    return account
                }
            })}
        case "DELETE_TRANSACTION":
            return {...state, accounts: state.accounts.map(account => {
                if (account.id === action.payload.id) {
                    return action.payload
                }
                else {
                    return account
                }
            })}
        // case "DELETE_ACCOUNT":
        //     let accountsTwo = state.accounts.filter(account => {
        //         if (account.id !== action.payload.id) {
        //           return account
        //         } else {
        //           return action.payload
        //         }
        //       })
        //       return {...state, accounts: accountsTwo}
            // return {...state, accounts: state.accounts.filter(account => {
            //     if (account.id !== action.payload) {
            //         return account
            //     }})}
            // return {...state, accounts: state.accounts.filter(account => {
            //     if (account.id !== action.payload.id) {
            //         return {accounts: [state.accounts]}
            //     }
            //     else {
            //         return account
            //     }})}
        default:
            return state
    }

    // return {...action.payload}
    // case "FETCH_TRANSACTIONS":
    //     return {transactions: action.payload}
    // action is coming in correctly from fetchAccounts action which was called upon in
    // componentDidMount from the app.js file to update store to show all 3 accounts from api db
}

