import { createStore, combineReducers } from 'redux'

import portal from '../reducers/handleMyPortal'
import player from '../reducers/handlePlayer'
import user from '../reducers/handleUser'

const rootReducer = combineReducers({
  portal: portal,
  player: player,
  user: user
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
