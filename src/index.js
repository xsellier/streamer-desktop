import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import Menu from './menu/Menu'
import Content from './content/Content'

import configureStore from './store/configureStore'
import 'todomvc-app-css/index.css'

const store = configureStore()

render(
  <Provider store={store}>
  	<div>
	    <Menu />
	    <Content />
    </div>
  </Provider>,
  document.getElementById('root')
)
