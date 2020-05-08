import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import store from '../config/store'
import * as actions from '../config/actions'
import Form from './Form'

class Login extends Component {
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

  handleLoginButton = () => {
    const { id, password } = this.state

    axios.post('api/auth/login', { username: id, password: password })
    .then((res) => {
      if (res.data.success) {
        store.dispatch(actions.loginSuccess(res.data.token))
        this.props.history.push('/game')
      }
    })
    .catch((err) => {
      const message = err.response.data.message || 'error occured'
      console.log(err)
      store.dispatch(actions.createAlert({ title: 'Login', message: message }))
    })

  }

  render() {
    const { handleChangeId,
            handleChangePassword,
            handleLoginButton
          } = this

    return(
      <div className='menu' style={{
        width: '400px',
        height: '400px'
      }}>
        <div className='title'>Login</div>
        <div className='inputs'>
          <Form
            placeholder='ID'
            button='Login'
            onChange={handleChangeId}
            onSubmit={handleLoginButton}
          />
          <Form
            placeholder='Password'
            onChange={handleChangePassword}
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

export default Login
