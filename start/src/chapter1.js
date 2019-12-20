function tick(){
    const el=(
        <div>
            <h1>{new Date().toLocaleTimeString()}</h1>
            <h2>啦啦啦</h2>
        </div>
    );
    ReactDOM.render(el,document.getElementById('m1'));
}

setInterval(tick,1000);
