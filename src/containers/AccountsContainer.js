import React from 'react'
import {connect} from 'react-redux'
import Accounts from '../components/Accounts'
import AccountInput from '../components/AccountInput'
import { fetchAccounts } from '../actions/fetchAccounts'



const mapStateToProps = state => {
    return{
        accounts: state.accounts
    }
}

class AccountsContainer extends React.Component {

    componentDidMount(){
        this.props.fetchAccounts()
    }

    render(){
        return(
            <div>
                <AccountInput/>
                <Accounts accounts={this.props.accounts}/>
            </div>
        )
    }
}

export default connect(mapStateToProps, {fetchAccounts})(AccountsContainer)