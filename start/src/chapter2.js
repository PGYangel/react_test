/*
函数组件与 class 组件
定义组件最简单的方式就是编写 JavaScript 函数：
*/
class Welcome extends React.Component {
    render() {
        return (<h1>Hello, {this.props.name}</h1>）;
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
            </div>
    );
    }
}

ReactDOM.render(
<App />,
    document.getElementById('root')
);
