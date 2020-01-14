/*
函数组件与 class 组件
定义组件最简单的方式就是编写 JavaScript 函数：
*/
function Welcome(props) {
    return (<h1>Hello, {props.name}</h1>);
}

function App() {
    return (
        <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
        </div>
);
}

ReactDOM.render(
<App />,
    document.getElementById('root')
);
