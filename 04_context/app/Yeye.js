import React from 'react';
import Baba from './Baba'
import PropTypes from 'prop-types'

class Yeye extends React.Component{
    constructor(){
        super();
        this.state ={
            a:100
        }
    }
    addA(){
        this.setState({a:this.state.a+1})
    }
    render(){
        return (
            <div>
                <h1>爷爷{this.state.a}<input type='button' value='改变爷爷的a值' onClick={()=>{this.setState({a:this.state.a+1})}}/></h1>
                <Baba></Baba>
            </div>
        )
    }
    //设置子组件上下文
    getChildContext(){
        return {
            a: this.state.a,
            addA: (this.addA).bind(this)
        }
    }
}

Yeye.childContextTypes ={
    a: PropTypes.number.isRequired,
    addA: PropTypes.func.isRequired
}


export default Yeye
