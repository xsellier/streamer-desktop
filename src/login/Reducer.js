import { SELECT, LOGIN, LOGOUT } from './ActionTypes'
import * as constants from '../Constants'

const initialState = {
  profile: {},
  logged: false
}

export default function status(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      state.logged = true
      state.profile = {
        name: "binogure"
      }

      return state

    case LOGOUT:
      state.logged = false
      state.profile = {}
      return state

    default:
      return state
  }
}
