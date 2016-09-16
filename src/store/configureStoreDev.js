import { createStore, compose } from 'redux';
import { persistState } from 'redux-devtools';
import rootReducer from '../rootReducer';
import DevTools from '../DevTools/DevTools';

const enhancer = compose(
  DevTools.instrument(),
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&#]+)\b/
    )
  )
);

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../rootReducer', () => {
      const nextReducer = require('../rootReducer').default
      store.replaceReducer(nextReducer)
    })
  }

  return store;
}