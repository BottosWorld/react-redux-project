import React from 'react'
// import Account from './Account'
import {Link} from 'react-router-dom'
// import TransactionsContainer from '../containers/TransactionsContainer'

const Accounts = (props) => {

    return(
        <div>
            {props.accounts.map(account => 
            <li key={account.id}><Link to={`/accounts/${account.id}`}>{account.name} - ${account.balance}</Link></li>)}
        </div>
    
    )
}

export default Accounts