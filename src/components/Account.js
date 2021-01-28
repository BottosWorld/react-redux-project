import React from 'react'
import TransactionsContainer from '../containers/TransactionsContainer'

const Account = (props) => {
    return(
        <li>
            {props.account.name} - {props.account.acc_type} | ${props.account.balance}
            <div>
                <TransactionsContainer/>
            </div><br></br>
        </li>
    )

}

export default Account
