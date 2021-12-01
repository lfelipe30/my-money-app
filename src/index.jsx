import React from 'react'
import ReactDOM from 'react-dom'

import App from './main/app'
import reducers from './main/reducers'

import {applyMiddleware, createStore} from 'redux'
import promise from 'redux-promise'
import {Provider} from 'react-redux'

import multi from 'redux-multi'
import thunk from 'redux-thunk'

const devtools = window.__REDUX_DEVTOOLS_EXTENSION__
      && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers)
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
,document.getElementById('app')
)