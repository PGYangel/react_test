import React from 'react';
import {PropTypes} from 'prop-types';

class Comp1 extends React.Component {
    //如果要在构造函数中使用props值，在构造函数第一个参数传入props
    constructor(props) {
        super();
        console.log(props.a)
        this.state = {
            c:props.c
        };
        this.setC = (number) =>{
            props.setC(number)
        }

    }

    render() {
        //直接使用this.props获取父组件传入的值，props只读属性，不能通过子组件改变父组件值。
        return (
            <div>
                <p>我是Comp1</p>
                <p>{this.props.a}</p>
                <p>{this.props.b}</p>
                <p>{this.props.c}</p>
                <p>
                    <input type="button" value='更改父层C的值' onClick={()=>{this.setC(8)}}/>
                </p>
            </div>
        )
    }
}

// 验证props类型有效性
Comp1.propTypes = {
    a: PropTypes.string.isRequired,
    b: PropTypes.number.isRequired
}

export default Comp1
