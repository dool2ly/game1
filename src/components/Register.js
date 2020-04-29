import React, { Component } from 'react'

import store from '../config/store'
import './Menu.css'

const Form = ({placeholder, button, onChange, onSubmit, type='text'}) => (
  <div className='form'>
    <input onChange={onChange} placeholder={placeholder} type={type}/>
    <div className="menu-btn" onClick={onSubmit}>
      {button}
    </div>
  </div>
)

class Register extends Component {
  state = {
    id: '',
    password: ''
  }

  handleChangeId = (e) => {
    this.setState({
      id: e.target.value
    })
  }

  handleChangePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  handleCheckButton = (e) => {
    const { id } = this.state
    console.log("Check button")

    store.dispatch({
      type: 'OPEN_ALERT',
      payload: {
        title: 'test2',
        message: 'test22',
        show: true
      }
    })
  }

  handleSigninButton = () => {
    const { id, password } = this.state
    console.log("Signin BUtton", id, password)
  }

  render() {
    const { handleChangeId,
            handleChangePassword,
            handleCheckButton,
            handleSigninButton
          } = this

    return(
      <div className='menu' style={{
        width: '400px',
        height: '400px'
      }}>
        <div className='title'>Register</div>
        <div className='inputs'>
          <Form
            placeholder='ID'
            button='Check'
            onChange={handleChangeId}
            onSubmit={handleCheckButton}
            // onPortal={}
          />
          <Form
            placeholder='Password'
            button='Sign-in'
            onChange={handleChangePassword}
            onSubmit={handleSigninButton}
            type='password'
          />
        </div>
        <div className='go-home'>
          <div className="menu-btn">Back</div>
        </div>
      </div>
    )
  }
}

export default Register
