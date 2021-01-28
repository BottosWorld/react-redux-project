import React from 'react'
import TransactionsContainer from '../containers/TransactionsContainer'

const Account = (props) => {

    let account = props.accounts[props.match.params.id - 1]

    return(
        <li>
            {account ? account.name : null} - {account ? account.acc_type : null} | ${account ? account.balance : null}
            <div>
                <TransactionsContainer/>
            </div><br></br>
        </li>
    )

}

export default Account
