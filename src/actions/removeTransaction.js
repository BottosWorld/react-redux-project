export const removeTransaction = (transID, accID) => {
    return(dispatch) => {
        fetch(`http://localhost:3000/accounts/${accID}/transactions/${transID}`, {
            method: 'DELETE',
            })
        .then(resp => resp.json())
        .then(account => {
            dispatch({type: 'DELETE_TRANSACTION', payload: account})
        })
    }
}