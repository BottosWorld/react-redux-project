import React from 'react'
import {connect} from 'react-redux'
import {addTransaction} from '../actions/addTransaction'

class TransactionInput extends React.Component {

    state = {
        t_name: '',
        t_type: '',
        t_amount: '',
        description: ''
    }

    handleChange= (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit= (e) => {
        e.preventDefault()
        this.props.addTransaction(this.state, this.props.account.id)
        this.setState({
            t_name: '',
            t_type: '',
            t_amount: '',
            description: ''
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type='text' name='t_name' placeholder='Name' value={this.state.t_name} onChange={this.handleChange}/>
                <input type='text' name='t_type' placeholder='Credit/Debit/Wtihdrawal/Deposit' value={this.state.t_type} onChange={this.handleChange}/>
                <input type='text' name='t_amount' placeholder='$ Amount' value={this.state.t_amount} onChange={this.handleChange}/>
                <input type='text' name ='description' placeholder='Description' value={this.state.description} onChange={this.handleChange}/>
                <input type='submit'/>
                <br></br>
            </form>
        )
    }
}

export default connect(null, {addTransaction})(TransactionInput)