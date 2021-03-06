import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import store from '../config/store'
import * as actions from '../config/actions'
import Form from './Form'

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

    if (!id){
      store.dispatch(actions.createAlert({ title: 'Check ID', message: "Empty ID" }))
      return
    }

    axios.get('api/auth/check/' + id)
    .then((res) => {
      const contents = { title: 'Check ID' }

      if (res.data.message === 'exists') {
        contents['message'] = "ID used."
      } else {
        contents['message'] = "ID not used."
      }
      store.dispatch(actions.createAlert(contents))
    })
    .catch((err) => {
      const message = err.response.data.message || 'error occured'
      store.dispatch(actions.createAlert({ title: 'Check ID', message: message }))
    })
  }

  handleSigninButton = () => {
    const { id, password } = this.state

    axios.post('api/auth/register', { username: id, password: password })
    .then((res) => {

      if (res.data.success) {
        store.dispatch(actions.loginSuccess(res.data.token))
        this.props.history.push('/game')
      }
    })
    .catch((err) => {
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
        <div className='menu-title'>Register</div>
        <div className='forms'>
          <Form
            placeholder='ID'
            button='Check'
            onChange={handleChangeId}
            onSubmit={handleCheckButton}
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
