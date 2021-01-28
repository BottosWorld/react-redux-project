import React from 'react'
import {connect} from 'react-redux'
import Accounts from '../components/Accounts'
import AccountInput from '../components/AccountInput'
import { fetchAccounts } from '../actions/fetchAccounts'
// import TransactionsContainer from '../containers/TransactionsContainer'

// const mapDispatchToProps = dispatch => {
//   return {
//     // fetchTransactions: transactions => dispatch(fetchTransactions()),
//     fetchAccounts: accounts => dispatch(fetchAccounts())
//   }
// }

const mapStateToProps = state => {
    return{
        accounts: state.accounts,
    }
}

class AccountsContainer extends React.Component {

    componentDidMount(){
        this.props.fetchAccounts()
    }

    render(){
        return(
            <div>
                <Accounts accounts={this.props.accounts}/><br></br>
                <AccountInput/>
            </div>
        )
    }
}

export default connect(mapStateToProps, {fetchAccounts})(AccountsContainer)

// {fetchAccounts}, {fetchTransactions} mapDispatchToProps