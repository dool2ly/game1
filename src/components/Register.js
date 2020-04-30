import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import store from '../config/store'
import * as actions from '../config/actions'
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

    // axios.get(`api/auth/checkId/${id}`)
    axios.post('api/auth/checkId', { username: id} )
    .then( (res) => {
      const contents = { title: 'Check ID' }

      if (res.data.message === 'exists') {
        contents['message'] = "ID used."
      } else {
        contents['message'] = "ID not used."
      }
      store.dispatch(actions.createAlert(contents))
    })
    .catch( (err) => {
      const message = err.response.data.message || 'error occured'
      store.dispatch(actions.createAlert({ title: 'Check ID', message: message }))
    })
  }

  handleSigninButton = () => {
    const { id, password } = this.state

    axios.post('api/auth/register', { username: id, password: password })
    .then( (res) => {
      if (res.data.success) {
        this.props.history.push('/game')
      }
    })
    .catch( (err) => {
      const message = err.response.data.message || 'error occured'
      store.dispatch(actions.createAlert({ title: 'Sign-in', message: message }))
    })
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
          <Link to="/" style={{ textDecoration: 'none' }}>
            <div className="menu-btn">Back</div>
          </Link>
        </div>
      </div>
    )
  }
}

export default Register
