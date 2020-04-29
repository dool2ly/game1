const initialState = {
  title: 'test_title',
  message: 'test_message',
  show: false
}

const portalReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'OPEN_ALERT':
      return {
        ...action.payload
      }
    default:
      return state
  }
}

export default portalReducer
