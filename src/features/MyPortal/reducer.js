import { CREATE_ALERT, CLOSE_ALERT } from '../../config/actions'

const initialState = {
  title: '',
  message: '',
  show: false
}

const portalReducer = (state=initialState, action) => {
  switch(action.type) {
    case CREATE_ALERT:
      return {
        ...action.payload,
        show: true
      }
    case CLOSE_ALERT:
      return {
        title: '',
        message: '',
        show: false
      }
    default:
      return state
  }
}

export default portalReducer
