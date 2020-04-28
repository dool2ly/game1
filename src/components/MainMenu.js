import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Menu.css'

const MainMenuEl = ({text, link}) => (
  <Link to={link} style={{ textDecoration: 'none' }}>
    <div className="menu-btn" style={{ height: '100px', width: '350px'}}>
      <p>{text}</p>
    </div>
  </Link>
)

class MainMenu extends Component {
  render() {
    return(
      <div className="menu" style={{
        width: '400px',
        height: '270px'
      }}>
        <MainMenuEl text={"New Game"} link="/register" />
        <MainMenuEl text={"Load Game"} link="/login" />
      </div>
    )
  }
}

export default MainMenu
