import React from 'react'
// import {connect} from 'react-redux'
import TransactionInput from '../components/TransactionsInput'
import Transactions from '../components/Transactions'
// import { fetchTransactions } from '../actions/fetchTransactions'

// const mapStateToProps = state => {
//     return{
//         transactions: state.transactions,
//     }
// }

class TransactionsContainer extends React.Component {

    // componentDidMount(){
    //     this.props.fetchTransactions()
    // }

    render(){
        return(
            <div>
                <h1>Transactions:</h1>
                <Transactions transactions={this.props.account && this.props.account.transactions}/>
                <br></br>
                <p>
                    Add a new transaction below:
                </p>
                <TransactionInput account={this.props.account}/>

            </div>
        )
    }
}

// export default connect(mapStateToProps, {fetchTransactions})(TransactionsContainer)
export default TransactionsContainer