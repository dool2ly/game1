import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const MainMenuEl = ({text, link}) => (
  <li className="main-menu-el">
    <Link to={link}>
      <div className="main-menu-container">{text}</div>
    </Link>
  </li>
)

class MainMenu extends Component {
  render() {
    return(
      <ul>
        <MainMenuEl text={"New Game"} link="/register" />
        <MainMenuEl text={"Load Game"} link="/login" />
      </ul>
    )
  }
}

export default MainMenu
