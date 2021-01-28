import React from 'react'
import {connect} from 'react-redux'
import Accounts from '../components/Accounts'
import Account from '../components/Account'
import AccountInput from '../components/AccountInput'
import { fetchAccounts } from '../actions/fetchAccounts'
import {Route} from 'react-router-dom'
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
                <Route exact path='/accounts/new' component={AccountInput}/>
                <Route exact path='/accounts/' render={() => <Accounts accounts={this.props.accounts}/>}/>
                <Route path='/accounts/:id' render={(routerProps) => <Account {...routerProps} accounts={this.props.accounts}/>}/>
                <br></br>
            </div>
        )
    }
}

export default connect(mapStateToProps, {fetchAccounts})(AccountsContainer)

// {fetchAccounts}, {fetchTransactions} mapDispatchToProps