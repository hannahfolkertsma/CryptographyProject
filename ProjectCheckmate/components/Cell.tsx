declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');

import "../styles.css"

//const [value, setValue] = React.useState('');
export class Cell {
    public value: string;
    public id: string;

    constructor() {
        return (
            <div style={{ height: "100px", width: "100px" }}>
                <input className="wordInput" onChange={(e) => this.onCellChange(e)}></input>
            </div>
        )
}

    onCellChange(e) {
        this.value = e.target.value;
        
    }
}





