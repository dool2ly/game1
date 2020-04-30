export const CREATE_ALERT = 'CREATE_ALERT'
export const createAlert = (contents) => {
  return {
    type: CREATE_ALERT,
    payload: contents
  }
}

export const CLOSE_ALERT = 'CLOSE_ALERT'
export const closeAlert = () => {
  return {
    type: CLOSE_ALERT
  }
}

export const MOVE_PLAYER = 'MOVE_PLAYER'
export const movePlayer = (position, direction, walkIndex, spriteLocation) => {
  return {
    type: MOVE_PLAYER,
    payload: {
      position,
      direction,
      walkIndex,
      spriteLocation
    }
  }
}
