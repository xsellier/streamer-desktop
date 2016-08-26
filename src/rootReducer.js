import { combineReducers } from 'redux'
import menu from './menu/Reducer'
import dashboard from './menu/Reducer'
import login from './menu/Reducer'

const rootReducer = combineReducers({
  menu, dashboard, login
})

export default rootReducer