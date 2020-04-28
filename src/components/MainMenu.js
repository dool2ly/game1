import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './MainMenu.css'

const MainMenuEl = ({text, link}) => (
  <Link to={link} style={{ textDecoration: 'none' }}>
    <div className="menu-el">
      <p>{text}</p>
    </div>
  </Link>
)

class MainMenu extends Component {
  render() {
    return(
      <div className="menu">
        <MainMenuEl text={"New Game"} link="/register" />
        <MainMenuEl text={"Load Game"} link="/login" />
      </div>
    )
  }
}

export default MainMenu
