import * as actionTypes from './constants'

export const createAlert = (contents) => {
  return {
    type: actionTypes.CREATE_ALERT,
    payload: contents
  }
}

export const closeAlert = () => {
  return {
    type: actionTypes.CLOSE_ALERT
  }
}

export const movePlayer = (position, direction, walkIndex, spriteLocation) => {
  return {
    type: actionTypes.MOVE_PLAYER,
    payload: {
      position,
      direction,
      walkIndex,
      spriteLocation
    }
  }
}

export const loginSuccess = (token) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: {
      token
    }
  }
}
