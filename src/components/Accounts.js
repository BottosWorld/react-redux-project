import React from 'react'
// import Account from './Account'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {removeAccount} from '../actions/removeAccount'
// import TransactionsContainer from '../containers/TransactionsContainer'

const Accounts = (props) => {

    const handleDelete = (account) => {
        props.removeAccount(account.id)
    }

    return(
        <div>
            {props.accounts.map(account => 
                <li key={account.id}>
                    <Link to={`/accounts/${account.id}`} style={{paddingRight: '20px'}}>{account.name} - ${account.balance}</Link>
                    <button onClick={() => handleDelete(account)}>Remove Account</button>
                </li>)}
        </div>
    
    )
}

export default connect(null, {removeAccount})(Accounts)