import React from 'react';
import {connect} from 'react-redux'
import * as actions from './actions'

class App extends React.Component {
    constructor(props) {
        super();
        console.log(props)
    }

    add(){
        setTimeout(()=>{
            this.props.dispatch({"type":'ADDNUM',num: 3})
        },1000)
    }

    del(){

    }

    addNum(){
        const num = Number(this.refs.numtxt.value);
    }

    render() {
        return (
            <div>
                <h1>{this.props.v}</h1>
                <p>
                    <input type="button" value="加1" onClick={(this.add).bind(this)}/>
                    {" "}
                    <input type="button" value="减1" onClick={(this.del).bind(this)}/>
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
    }
)(App)
