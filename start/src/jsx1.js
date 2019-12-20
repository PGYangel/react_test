const name ='Jon';
const element =<h1>hello,{name}</h1>;
ReactDOM.render(element,document.getElementById('m1'));


function rName(user){
    return user.firstName+' '+user.lastName
}
const user={
    firstName:'happy',
    lastName:'Jon'
}

const el2=(
    <h1>{rName(user)}</h1>
)
ReactDOM.render(el2,document.getElementById('m2'));

//防注入攻击
const st='<script>alert(1)</script>';
const el3=<h1>{st}</h1>;
ReactDOM.render(el3,document.getElementById('m3'));
