import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import Menu from './menu/Menu'
import Content from './content/Content'

import DevTools from './DevTools/DevTools'

import configureStore from './store/configureStore'
import configureStoreDev from './store/configureStoreDev'

import api from './api/twitch'

let store
let devTools = '';

if (__ENV__ === 'develop') {
  store = configureStoreDev()

  devTools = (<DevTools />);
} else {
  store = configureStore()
}

render(
  <Provider store={store}>
    <div>
      <Menu />
      <Content />
      { devTools }
    </div>
  </Provider>,
  document.getElementById('root')
)
