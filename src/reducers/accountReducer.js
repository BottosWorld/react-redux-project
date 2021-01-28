export default function accountReducer(state = {accounts: []}, action) {
    return action.payload
    // action is coming in correctly from fetchAccounts action which was called upon in
    // componentDidMount from the app.js file to update store to show all 3 accounts from api db
}

