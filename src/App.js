import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import MainMenu from './components/MainMenu'
import './App.css'

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <div className="main-box">
          <Route exact path="/" component={MainMenu} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
