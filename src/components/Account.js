import React from 'react'
import TransactionsContainer from '../containers/TransactionsContainer'

const Account = (props) => {

    let account = props.accounts.filter(account => account.id == props.match.params.id)[0]

    return(
        <div>
            {account ? account.name : null} - {account ? account.acc_type : null} | ${account ? account.balance : null}
            <div>
                <TransactionsContainer account={account}/>
            </div><br></br>
        </div>
    )

}

export default Account
