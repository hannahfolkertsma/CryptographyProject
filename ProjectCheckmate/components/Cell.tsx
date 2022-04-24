declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');

import "../styles.css"

export class Cell extends React.Component{
    render() {
        return (
            <div className="wordleCell"/>
        )
    };

}