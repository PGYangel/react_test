/*
函数组件与 class 组件
定义组件最简单的方式就是编写 JavaScript 函数：
*/
function Welcome(props) {
    return React.createElement(
        "h1",
        null,
        "Hello, ",
        props.name
    );
}