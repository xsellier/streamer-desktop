import { SELECT, LOGIN, LOGOUT } from './ActionTypes'
import Dashboard from '../dashboard/Dashboard'
import Login from '../login/Login'
import About from '../about/About'

import * as constants from '../Constants'

let id = 0
const initialState = {
  items: [
    {
      text: "Dashboard",
      tag: Dashboard,
      path: "/",
      selected: true,
      condition: constants.MUST_LOGGED,
      id: id++
    },
    {
      text: "Settings",
      // TODO: create tag Settings
      tag: Dashboard,
      path: "/settings",
      selected: false,
      condition: constants.MUST_LOGGED,
      id: id++
    },
    {
      text: "Logout",
      tag: Login,
      path: "/logout",
      selected: false,
      condition: constants.MUST_LOGGED,
      id: id++
    },
    {
      text: "Login",
      tag: Login,
      path: "/login",
      selected: true,
      condition: constants.MUST_UNLOGGED,
      id: id++
    },
    {
      text: "About",
      tag: About,
      path: "/about",
      selected: false,
      condition: constants.NO_CONDITION,
      id: id++
    }
  ],
  logged: false
}

export default function status(state = initialState, action) {
  switch (action.type) {
    case SELECT:
      state.items = state.items.map(item =>
        // update the whole array
        Object.assign({}, item, { selected: item.id === action.id })
      )

      return Object.assign({}, state)

    case LOGIN:
      state.logged = true

      return state

    case LOGOUT:
      state.logged = false

      return state

    default:
      return state
  }
}
