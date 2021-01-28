export const removeAccount = (accID) => {
    return(dispatch) => {
        fetch(`http://localhost:3000/accounts/${accID}`, {
            method: 'DELETE',
            })
        .then(resp => resp.json())
        .then(account => {
            dispatch({type: 'DELETE_ACCOUNT', payload: account})
        })
    }
}