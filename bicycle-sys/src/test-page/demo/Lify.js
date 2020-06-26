import React from 'react'
import Child from './Child'
import {Button,DatePicker} from 'antd'
import './test.less'

class Lify extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    handleAdd = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    handleClick() {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <p>React 生命周期介绍asdfasd</p>
                <Button type='primary' onClick={this.handleAdd}>点击一下</Button>
                <Button onClick={this.handleClick.bind(this)}>点击一下</Button>
                <p style={{color:'red'}}>{this.state.count}</p>
                <Child name='jack'></Child>
                <DatePicker></DatePicker>

            </div>
        )
    }
}

export default Lify
