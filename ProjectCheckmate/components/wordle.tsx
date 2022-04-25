import { Cell } from "./Cell"

declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');

import "../styles.css"


export const Wordle = () => {
    return (
        <div style={{ width: "100%" }}>
            <div className="spacer"/>
            <div className="pageHeader">CYBERDLE</div>
            <div className="spacer"/>
            <table style={{margin:"auto"}}>
            <tr>
                    <td><Cell cellid="11" /></td>
                    <td><Cell cellid="12" /></td>
                    <td><Cell cellid="13" /></td>
                    <td><Cell cellid="14" /></td>
                    <td><Cell cellid="15" /></td>
            </tr>
            <tr>
                    <td><Cell /></td>
                    <td><Cell /></td>
                    <td><Cell /></td>
                    <td><Cell /></td>
                    <td><Cell /></td>
            </tr>
            <tr>
                    <td><Cell /></td>
                    <td><Cell /></td>
                    <td><Cell /></td>
                    <td><Cell /></td>
                    <td><Cell /></td>
            </tr>
            <tr>
                    <td><Cell /></td>
                    <td><Cell /></td>
                    <td><Cell /></td>
                    <td><Cell /></td>
                    <td><Cell /></td>
            </tr>
            <tr>
                    <td><Cell /></td>
                    <td><Cell /></td>
                    <td><Cell /></td>
                    <td><Cell /></td>
                    <td><Cell /></td>
            </tr>
            <tr>
                    <td><Cell /></td>
                    <td><Cell /></td>
                    <td><Cell /></td>
                    <td><Cell /></td>
                    <td><Cell /></td>
            </tr>
            </table>
            </div>
        );
}