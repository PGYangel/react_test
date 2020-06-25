import React from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions from './actions'

const App =({v,actions})=>{
    return (
        <div>
            <h1>{v}</h1>
            <input type="button" value="加1" onClick={actions.add}/>
            {" "}
            <input type="button" value="减1" onClick={actions.del}/>
        </div>
    )
}

export default connect(
    (state)=>{
        return {
            v : state.v
        }
    },
    (dispatch)=>{
        return { actions: bindActionCreators(actions,dispatch)}
    }
)(App)
