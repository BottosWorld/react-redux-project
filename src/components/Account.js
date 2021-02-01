import React from 'react'
// import { useHistory } from 'react-router-dom'
import TransactionsContainer from '../containers/TransactionsContainer'
import {connect} from 'react-redux'
import {removeAccount} from '../actions/removeAccount'

const Account = (props) => {

    let account = props.accounts.filter(account => account.id == props.match.params.id)[0]
    // let history = useHistory

    const handleDelete = (account) => {

        props.removeAccount(account.id)
        props.history.push('/accounts')
    }

    return(
        <div>
            {account ? account.name : null} - {account ? account.acc_type : null} | ${account ? account.balance : null}
            <br></br>
            <button onClick={() => handleDelete(account)}>Remove Account</button>
            <div>
                <TransactionsContainer account={account}/>
            </div><br></br>
        </div>
    )

}

export default connect(null, {removeAccount})(Account)
