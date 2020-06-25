import React from 'react';
import Comp1 from './Comp1'

class App extends React.Component {
    constructor (){
        super();
        this.state ={
            c: 5
        }
    }

    render() {
        //父组件往子组件传值，使用属性传值
        //如果想让子组件改变父组件的值，则父组件需要传递一个函数到子组件调用。
        return (
            <div>
                <p>C状态的值：{this.state.c}</p>
                <Comp1 a='66' b={77} setC={(this.setC).bind(this)} c={this.state.c}></Comp1>
            </div>
        );
    }

    setC(number){
        this.setState({c:number})
    }
}

export default App;
