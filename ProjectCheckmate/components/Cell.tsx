declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');

import "../styles.css"

export function Cell(props) {
        const [value, setValue] = React.useState('');
        return (
            <div className="wordleCell">
                <input className="wordInput" onChange={(e) => onCellChange(e, props.cellid)}></input>
            </div>
        )
}

export function onCellChange(e, cellid) {
    let SOLUTION = "URMOM";
    var id = cellid[1];





}