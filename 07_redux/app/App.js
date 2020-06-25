import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from './actions'

class App extends React.Component {
    constructor(props) {
        super();
        console.log(props)
    }

    addNum(){
        const num = Number(this.refs.numtxt.value);
        this.props.actions.addnum(num)
    }

    render() {
        return (
            <div>
                <h1>{this.props.v}</h1>
                <p>
                    <input type="button" value="加1" onClick={this.props.actions.add}/>
                    {" "}
                    <input type="button" value="减1" onClick={this.props.actions.del}/>
                </p>
                <p>
                    <input type="text" ref="numtxt"/>
                    <input type="button" value="加数" onClick={(this.addNum).bind(this)}/>
                </p>
            </div>
        )
    }
}

export default connect(
    (state) => {
        return {
            v: state.v
        }
    },
    (dispatch) => {
        return {actions: bindActionCreators(actions, dispatch)}
    }
)(App)
