import logo from './logo.svg';
import './App.css';
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import {connect} from 'react-redux'
// Connect automatically dispatches, thunk allows us to call dispatch async from our fetch actions
// import {fetchAccounts} from './actions/fetchAccounts'
import AccountsContainer from "./containers/AccountsContainer";

class App extends React.Component{

  // componentDidMount(){
  //   this.props.fetchAccounts()
    // fetch('http://localhost:3000/accounts/1/transactions')
    // .then(resp => resp.json())
    // .then(data => console.log(data))
  // }

  // this.props.fetchAccounts

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            You got this!
          </p><br></br>
          <h1>Reactive Accounts:</h1>
          <div>
            <Router>
              <AccountsContainer/>
            </Router>
          </div><br></br>
          <p>Don't forget to tell your wifey you love her!</p>
          <p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </p>


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

export default App;
