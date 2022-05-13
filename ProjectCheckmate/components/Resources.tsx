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
            <div className="text"><Link to={"https://www.dcode.fr/caesar-cipher"}>Caesar Cipher</Link></div>
            <div className="text"><Link to={"https://www.dcode.fr/vigenere-cipher"}>Vigenere Cipher</Link></div>
            <div className="text"><Link to={"https://www.binaryhexconverter.com/ascii-text-to-binary-converter"}>Binary Conversion</Link></div>
            <div className="text"><Link to={"https://xor.pw/"}>XOR</Link></div>
            <div className="text"><Link to={"https://www.dcode.fr/shift-cipher"}>Shift Cipher</Link></div>
        </div>
       );
}