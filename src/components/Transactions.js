import React from 'react'

const Transactions = (props) => {

    return(
        <div>
            {props.transactions && props.transactions.map(transactions => 
                <li key={transactions.id}>
                    {transactions.t_name} - ${transactions.t_amount} | {transactions.t_type}
                    <p>{transactions.description}</p><br></br>
                </li>)}
        </div>
    
    )
}

export default Transactions