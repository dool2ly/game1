import { createStore, combineReducers } from 'redux'

import portal from '../components/MyPortal/reducer'
import player from '../components/Player/reducer'

const rootReducer = combineReducers({
  portal: portal,
  player: player
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
