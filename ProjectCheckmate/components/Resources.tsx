declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');

import { Link } from "react-router-dom";
import "../styles.css"


export const Resources = () => {
    return (
        <div>
        <div className="spacer"/>
            <div className="pageHeader">RESOURCES</div>
            <div className="spacer" />
            <div className="text"><a target="_blank" href="https://www.dcode.fr/caesar-cipher">Caesar Cipher</a></div>
            <div className="text"><a target="_blank" href="https://www.dcode.fr/vigenere-cipher">Vigenere Cipher</a></div>
            <div className="text"><a target="_blank" href="https://www.dcode.fr/shift-cipher">Shift Cipher</a></div>
        </div>
       );
}