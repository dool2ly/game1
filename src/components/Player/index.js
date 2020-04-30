import React from 'react'
import { connect } from 'react-redux'

import handleMovement from './movement'
import walkSprite from '../../img/player_baram_40_60.png'

function Player(props) {
  return (
    <div style={{
      position: 'absolute',
      top: props.position[1],
      left: props.position[0],
      backgroundImage: `url('${walkSprite}')`,
      backgroundPosition: '0 0',
      width: '40px',
      height: '60px'
    }} />
  )
}


const mapStateToProps = (state) => {
  return {
    ...state.player
  }
}

export default connect(mapStateToProps)(handleMovement(Player))
