import React from 'react'
import Header from './common/header'

export default function Signup(props) {
    console.log('Signup prop: ', props)
    return (
        <React.Fragment>
            <Header {...props}/>
            <h2>Signup</h2>
        </React.Fragment>
    )
}
