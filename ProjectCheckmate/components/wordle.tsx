declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');

import "../styles.css"


export const Wordle = () => {
    return (
        <table>
            <tr>
                <td className="wordleCell" />
                <td className="wordleCell"/>
                <td className="wordleCell"/>
                <td className="wordleCell"/>
                <td className="wordleCell"/>
            </tr>
            <tr>
                <td className="wordleCell" />
                <td className="wordleCell" />
                <td className="wordleCell" />
                <td className="wordleCell" />
                <td className="wordleCell" />
            </tr>
            <tr>
                <td className="wordleCell" />
                <td className="wordleCell" />
                <td className="wordleCell" />
                <td className="wordleCell" />
                <td className="wordleCell" />
            </tr>
            <tr>
                <td className="wordleCell" />
                <td className="wordleCell" />
                <td className="wordleCell" />
                <td className="wordleCell" />
                <td className="wordleCell" />
            </tr>
            <tr>
                <td className="wordleCell" />
                <td className="wordleCell" />
                <td className="wordleCell" />
                <td className="wordleCell" />
                <td className="wordleCell" />
            </tr>
            <tr>
                <td className="wordleCell" />
                <td className="wordleCell" />
                <td className="wordleCell" />
                <td className="wordleCell" />
                <td className="wordleCell" />
            </tr>
        </table>
        );
}