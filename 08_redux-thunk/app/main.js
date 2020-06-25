import React from 'react'
import {render} from 'react-dom'
import reducer from './reducer'
import {createStore,applyMiddleware} from 'redux'
import { createLogger } from  'redux-logger'
import thunk from 'redux-thunk'
const store = createStore(reducer,applyMiddleware(createLogger(),thunk))

import {Provider} from 'react-redux'
import App from './App'

render(
    <Provider store={store}>
        <App></App>
    </Provider>,
    document.getElementById('App')
)
