import React from 'react';

// 定义App组件
// React要求自定义组件必须是大写
// React要求自定义组件的类必须继承于React.Component类
class App extends React.Component {
    // 组件render最重要的方法，渲染操作
    render() {
        // 返回JSX语法
        // JSX语法糖：
        //1、必须被一个大元素包裹，不能并列写元素，正确示范：<h1><span></span></h1>，错误示范：<h1></h1><h1></h1>。
        //2、标签必须封闭，如br,img标签，必须写成<br/><img/>
        //3、class要写成className，for要写成htmlFor
        //4、Html注释不能使用，只能使用JS注释
        //5、JSX中可以用{}表示临时插入一个js简单表达式，不能是if、for等复杂结构，可以使&&、||短路语法、可以使?:三元运算符，可以调用函数。
        //6、原生标签如果要使用自定义属性，必须使用data-前缀，如<h1 data-value='1'></h1>
        //7、如果是自定义标签，可以随意定义属性
        //8、JSX表达式使用{}单大括号包裹，注意第5点的要求
        //9、行内样式需要用双大括号，因为样式编译的是对象
        //10、JSX可以自动展开数组内容
        //11、小写字母开头是原生html标签，大写字母开头是React组件
        let arr = ['内容1', '内容2', '内容3'].map((v, i) => {
            return <li key={i}>{v}</li>
        })

        return (
            <div>
                <h1>我是React，啦啦啦啦，{500 + 500}</h1>
                <h1 className="box">我是React，啦啦啦啦，{500 + 500}</h1>
                <h1>{3 > 8 ? '错的' : '对的'}</h1>
                {this.haha()}
                <h1 style={{'color': 'red'}}>设置行内样式</h1>
                <h1>自动展开数组</h1>
                <ul>{arr}</ul>
            </div>
        );
    }

    haha() {
        return (
            <ul>
                <li>哈哈</li>
                <li>哈哈</li>
                <li>哈哈</li>
                <li>哈哈</li>
            </ul>
        )
    }
}

// 向外暴露
export default App;
