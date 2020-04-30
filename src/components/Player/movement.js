import { movePlayer } from '../../config/actions'
import store from '../../config/store'
import { PLAYER_HEIGHT, PLAYER_WIDTH } from '../../config/constants'

export default function handleMovement(player) {
  const validKeys = [37, 38, 39, 40]

  function directionMove(key) {
    const oldPos = store.getState().player.position;
    let newPos = null

    switch (key) {
      case 37:  // Left arrow key
        newPos = [oldPos[0] - PLAYER_WIDTH, oldPos[1]]
        break
      case 38:  // Up arrow key
        newPos = [oldPos[0], oldPos[1] - PLAYER_HEIGHT]
        break
      case 39:  // Right arrow key
        newPos = [oldPos[0] + PLAYER_WIDTH, oldPos[1]]
        break
      case 40:  // Down arrow key
        newPos = [oldPos[0], oldPos[1] + PLAYER_HEIGHT]
        break
      default:
    }
    
    store.dispatch(movePlayer(newPos))
  }

  window.addEventListener('keydown', (event) =>{
    const key = event.keyCode

    // console.log(event.keyCode)
    if (validKeys.indexOf(key) !== -1){
      event.preventDefault()
      directionMove(key)
    }
  })

  return player;
}
