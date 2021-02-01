import React from 'react'
import {Link} from 'react-router-dom'

const Navigation = (props) => {

    return (
        <div>
            <Link to='/accounts' style={{paddingRight: '20px'}}>Reactive Accounts</Link>
            <Link to='/accounts/new'>Add New Account</Link>
        </div>
    )
}

export default Navigation