import React from 'react'
import {connect} from 'react-redux'
import {addAccount} from '../actions/addAccount'

class AccountInput extends React.Component{

    state = {
        name: '',
        balance: '',
        acc_type: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addAccount(this.state)
        this.setState({
            name: '',
            balance: '',
            acc_type: ''
        })
    }


    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    {/* <label>Account Name:</label> */}
                    <input type='text' placeholder='Account Name' value={this.state.name} name='name' onChange={this.handleChange}/>
                    {/* <label>Account Type:</label> */}
                    <input type='text' placeholder='Checking/Savings/CC' value={this.state.acc_type} name='acc_type' onChange={this.handleChange}/>
                    {/* <label>Balance:</label> */}
                    <input type='text' placeholder='Balance: $' value={this.state.balance} name='balance' onChange={this.handleChange}/>
                    <br></br>
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}

export default connect(null, {addAccount})(AccountInput)