import React, { Component } from 'react'

import './Menu.css'

const Form = ({value, button}) => (
  <div className="form">
    <input value={value} />
    <div className="menu-btn">
      {button}
    </div>
  </div>
)

class Register extends Component {
  render() {
    return(
      <div className="menu" style={{
        width: '400px',
        height: '400px'
      }}>
        <div className='title'>Register</div>
        <div className='inputs'>
          <Form value="TEST_1" button="Check"/>
          <Form value="TEST_2" button="Submit"/>
        </div>
        <div className='go-home'>
          <div className="menu-btn">Back</div>
        </div>
      </div>
    )
  }
}

export default Register
