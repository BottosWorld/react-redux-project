import React from 'react'

const Transactions = (props) => {

    return(
        <div>
            Transactions:
            {props.transactions.map(transactions => 
                <li key={transactions.id}>
                    {transactions.t_name} - ${transactions.t_amount} | {transactions.t_type}
                    {transactions.description}
                </li>)}
        </div>
    
    )
}

export default Transactions