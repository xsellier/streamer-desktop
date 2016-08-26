import { createStore } from 'redux'
import rootReducer from '../rootReducer'

export default function configureStore(preloadedState) {
  const store = createStore(rootReducer, preloadedState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../rootReducer', () => {
      const nextReducer = require('../rootReducer').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
