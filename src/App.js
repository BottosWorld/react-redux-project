import logo from './logo.svg';
import './App.css';
import React from 'react'
import {connect} from 'react-redux'
// Connect automatically dispatches, thunk allows us to call dispatch async from our fetch actions
import {fetchAccounts} from './actions/fetchAccounts'
import AccountsContainer from "./containers/AccountsContainer";

class App extends React.Component{

  componentDidMount(){
    this.props.fetchAccounts()
    // fetch('http://localhost:3000/accounts/1/transactions')
    // .then(resp => resp.json())
    // .then(data => console.log(data))
  }

  // this.props.fetchAccounts

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome Bryan, let's begin your final project, a new beginning is in sight!
          </p><br></br>
          <p>Don't forget to tell your wifey you love her!</p>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <div>
            <AccountsContainer/>
          </div><br></br>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }

  // 1st connect argument gives us access to what's in the store using mapStateToProps
  // const mapStateToProps = (state) => {
  //   return{
  //     accounts: state.accounts
  //   }
  // }

  // 2nd connect argument, such as mapDispatchToProps or an action like {fetchAccounts}
  // gives us the ability to dispatch new actions to our store
}

export default connect(null, {fetchAccounts})(App);
