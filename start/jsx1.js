var name = 'Jon';
var element = React.createElement(
    'h1',
    null,
    'hello,',
    name
);
ReactDOM.render(element, document.getElementById('m1'));

function rName(user) {
    return user.firstName + ' ' + user.lastName;
}
var user = {
    firstName: 'happy',
    lastName: 'Jon'
};

var el2 = React.createElement(
    'h1',
    null,
    rName(user)
);
ReactDOM.render(el2, document.getElementById('m2'));

//防注入攻击
var st = '<script>alert(1)</script>';
var el3 = React.createElement(
    'h1',
    null,
    st
);
ReactDOM.render(el3, document.getElementById('m3'));