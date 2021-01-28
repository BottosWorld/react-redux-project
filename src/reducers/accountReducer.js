export default function accountReducer(state = {accounts: []}, action) {

    switch(action.type){
        case "FETCH_ACCOUNTS":
            return {accounts: action.payload}
        case "ADD_ACCOUNT":
            return {...state, accounts: [...state.accounts, action.payload]}
        default:
            return state
    }

    // return {...action.payload}
    // case "FETCH_TRANSACTIONS":
    //     return {transactions: action.payload}
    // action is coming in correctly from fetchAccounts action which was called upon in
    // componentDidMount from the app.js file to update store to show all 3 accounts from api db
}

