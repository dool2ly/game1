import React from 'react'

import walkSprite from '../../img/player_baram_40_60.png'

function Player() {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      backgroundImage: `url('${walkSprite}')`,
      backgroundPosition: '0 0',
      width: '40px',
      height: '60px'
    }} />
  )
}

export default Player
