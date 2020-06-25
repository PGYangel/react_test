import React from 'react';

class App extends React.Component {
    //构造函数
    constructor() {
        //因为继承了React.Component，所以必须调用super()
        super();
        //表示给组件的实例绑定一个a属性，值是100，而不是给构造函数。在JSX中使用直接调用this.a即可。
        this.a = 100;
        //定义state
        // state是内部的，只有组件自己能改变自己的state
        // 组件的state越来越少用，现在更多使用Redux中的state
        this.state = {
            b: 100,
            c: 200
        }
    }

    /*
    * state另外一种定义方式：getInitialState
    getInitialState(){
        return {
            a:100,
            b:200,
            c:200
        }
    }
    * */

    render() {
        return (
            <div>
                <p>{this.a}</p>
                // onclick方法注意写成onClick,React会自动识别React事件
                // 需要使用bind来绑定this指向
                <p>//界面没有变化，但是this.a值变化了，所以（重点）在React中，组件自己的属性变化不会引发视图的变化。</p>
                <p>
                    <input type="button" value="点击" onClick={(this.add).bind(this)}/>
                </p>
                <p>//如果需要变化需要使用state</p>
                <p>state的b值：{this.state.b}</p>
                <p>state的c值：{this.state.c}</p>
                <p>
                    <input type="button" value="点击" onClick={(this.addB).bind(this)}/>
                </p>
            </div>
        );
    }

    add() {
        this.a++;
        console.log(this.a)
    }

    addB() {
        //使用setState改变state值，不能写++，因为state属性值只读
        this.setState({b: this.state.b + 1})
        console.log(this.state.b)
    }
}

export default App;
