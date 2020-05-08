import { movePlayer } from '../config/actions'
import store from '../config/store'
import {
  PLAYER_HEIGHT,
  PLAYER_WIDTH,
  MAP_HEIGHT,
  MAP_WIDTH
} from '../config/constants'

export default function handleMovement(player) {

  function getSpriteLocation(direction, walkIndex) {
    switch (direction) {
      case 'SOUTH':
        return `${PLAYER_WIDTH * walkIndex}px ${PLAYER_HEIGHT * 0}PX`
      case 'EAST':
        return `${PLAYER_WIDTH * walkIndex}px ${PLAYER_HEIGHT * 2}PX`
      case 'WEST':
        return `${PLAYER_WIDTH * walkIndex}px ${PLAYER_HEIGHT * 3}PX`
      case 'NORTH':
        return `${PLAYER_WIDTH * walkIndex}px ${PLAYER_HEIGHT * 1}PX`
      default:
    }
  }

  function getWalkIndex() {
    const walkIndex = store.getState().player.walkIndex

    return walkIndex >= 2 ? 0 : walkIndex + 1
  }

  function observeBoundaries(pos) {
    return (pos[0] >= 0 && pos[0] <= MAP_WIDTH - PLAYER_WIDTH) &&
            (pos[1] >= 0 && pos[1] <= MAP_HEIGHT - PLAYER_HEIGHT)
  }

  function getNewPosAndDirection(key, oldPos) {
    switch (key) {
      case 37:  // Left arrow key
        return { newPos: [oldPos[0] - PLAYER_WIDTH, oldPos[1]], direction: 'WEST' }
      case 38:  // Up arrow key
        return { newPos: [oldPos[0], oldPos[1] - PLAYER_HEIGHT], direction: 'NORTH' }
      case 39:  // Right arrow key
        return { newPos: [oldPos[0] + PLAYER_WIDTH, oldPos[1]], direction: 'EAST' }
      case 40:  // Down arrow key
        return { newPos: [oldPos[0], oldPos[1] + PLAYER_HEIGHT], direction: 'SOUTH' }
      default:
    }
  }

  function directionMove(key) {
    const oldPos = store.getState().player.position
    // get walk motion image index
    const walkIndex = getWalkIndex()
    // get position & direction by key
    let { newPos, direction } = getNewPosAndDirection(key, oldPos)
    // check map boundaryies
    newPos = observeBoundaries(newPos) ? newPos : oldPos
    let spriteLocation = getSpriteLocation(direction, walkIndex)

    // spriteLocation = getSpriteLocation(direction, walkIndex)
    store.dispatch(movePlayer(newPos, direction, walkIndex, spriteLocation))
  }

  window.addEventListener('keydown', (event) =>{
    const validKeys = [37, 38, 39, 40]
    const key = event.keyCode

    // console.log(event.keyCode)
    if (validKeys.indexOf(key) !== -1){
      event.preventDefault()
      directionMove(key)
    }
  })

  return player;
}
