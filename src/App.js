import logo from './logo.svg';
import './App.css';
import React from 'react'

class App extends React.Component{

  // componentDidMount(){
  //   fetch('http://localhost:3000/accounts/1/transactions')
  //   .then(resp => resp.json())
  //   .then(data => console.log(data))
  // }

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
}

export default App;
