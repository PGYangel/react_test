import React from 'react'
import {render} from 'react-dom'
import reducer from './reducer'
import {createStore} from 'redux'
const store = createStore(reducer)

import {Provider} from 'react-redux'
import App from './App'

render(
    <Provider store={store}>
        <App></App>
    </Provider>,
    document.getElementById('App')
)
