import React, { Component } from 'react'

import './Game.css'
import World from './World'

class Game extends Component {
  render() {
    return(
      <div className='game'>
        <World />
        <div className='info'></div>
      </div>
    )
  }
}

export default Game
