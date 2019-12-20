function tick() {
    var el = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            new Date().toLocaleTimeString()
        ),
        React.createElement(
            'h2',
            null,
            '\u5566\u5566\u5566'
        )
    );
    ReactDOM.render(el, document.getElementById('m1'));
}

setInterval(tick, 1000);