import React from 'react'
import TransactionsContainer from '../containers/TransactionsContainer'

const Accounts = (props) => {

    return(
        <div>
            {props.accounts.map(account => 
                <li key={account.id}>
                    {account.name} - ${account.balance}
                    <div>
                        <TransactionsContainer/>
                    </div><br></br>
                </li>)
            }
        </div>
    
    )
}

export default Accounts