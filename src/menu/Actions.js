import * as Types from './ActionTypes'

export function select(id) {
  return { type: Types.SELECT, id }
}

export function login() {
  return { type: Types.LOGIN }
}

export function logout() {
  return { type: Types.LOGOUT }
}
