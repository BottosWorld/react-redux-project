import React from 'react'
// import {connect} from 'react-redux'
// import Transactions from '../components/Transactions'
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
                Transactions:
                {/* <TransactionInput/> */}
                {/* the following is undefined.. */}
                {/* <Transactions transactions={this.props.account.transactions}/> */}
            </div>
        )
    }
}

// export default connect(mapStateToProps, {fetchTransactions})(TransactionsContainer)
export default TransactionsContainer