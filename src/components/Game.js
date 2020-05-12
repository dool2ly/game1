import React, { Component } from 'react'

import '../scss/Game.scss'
import World from './World'
import GameInfo from './GameInfo'

class Game extends Component {
  render() {
    return(
      <div className='game'>
        <World />
        <GameInfo />
      </div>
    )
  }
}

export default Game
