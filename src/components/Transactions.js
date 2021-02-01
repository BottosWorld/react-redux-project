import React from 'react'
import {connect} from 'react-redux'
import {removeTransaction} from '../actions/removeTransaction'

const Transactions = (props) => {

    const handleDelete = (transactions) => {
        props.removeTransaction(transactions.id, transactions.account_id)
    }

    return(
        <div>
            {props.transactions && props.transactions.map(transactions => 
                <li key={transactions.id}>
                    {transactions.t_name} - ${transactions.t_amount} | {transactions.t_type} <button onClick={() => handleDelete(transactions)}>Delete</button>
                    <p>{transactions.description}</p>
                    <br></br>
                </li>)}
        </div>
    
    )
}

export default connect(null, {removeTransaction})(Transactions)