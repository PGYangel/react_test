import React from 'react';
import PropTypes from 'prop-types'

class Erzi extends React.Component{
    constructor(props,context){
        super();
        //调用上下文
        console.log(context)
    }
    render(){
        return (
            <div>
                <h1>儿子</h1>
                <h2>{this.context.a}</h2>
                <h2><input type='button' value='改变儿子的a值' onClick={this.context.addA}/></h2>
            </div>
        )
    }
}

//注意这里是contextTypes不是childContextTypes
Erzi.contextTypes ={
    a: PropTypes.number,
    addA:PropTypes.func
}

export default Erzi
