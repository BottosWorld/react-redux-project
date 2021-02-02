import React from 'react'

class ClickMe extends React.Component {

    state = {
        numberofclicks: 0
    }

    handleClick = (e) => {
        // this.setState({
        //     numberofclicks: this.state.numberofclicks + 1
        // })

        console.log('a')

        fetch('http://localhost:3000/accounts')
            .then(resp => {
                console.log('b', resp)
                return resp.json();
            })
            .then(data => console.log('c', data))
            .catch(errors => console.log('d', errors))
        
        for(let i = 0; i < 5000; i++) {
            console.log('e')
        }

        // a, e, b, c
    }

    render(){
        return(
            <div>
                <button onClick={this.handleClick}>Click Me</button>
                <h1>{this.state.numberofclicks}</h1>
            </div>
        )
    }
}

export default ClickMe

// Live code challenge - create a button to increment clicks value by 1 upon click, render value of clicks

// Answer questions regarding lifecycle order of console logs before fetch, within multiple .then of fetch, after fetch, and in a loop after fetch

// take home assignment - write a blog of how/why we use setState in react, think of readers as blank slate