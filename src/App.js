import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import MyPortal from './features/MyPortal'
import MainMenu from './components/MainMenu'
import Register from './components/Register'
import Login from './components/Login'

import './App.css'

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <div className="main-box">
          <Route exact path="/" component={MainMenu} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </div>
        <MyPortal />  // For popup
      </BrowserRouter>
    )
  }
}

export default App
