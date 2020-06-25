import React from 'react';
import Erzi from './Erzi'

class Baba extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div>
                <h1>爸爸</h1>
                <Erzi></Erzi>
            </div>
        )
    }
}

export default Baba
