declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');

import "../styles.css"
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Resources } from "./Resources";


export const Chess = () => {
    const [input, setInput] = useState('');
    const [input2, setInput2] = useState('');
    const chsplnt = "e4#";
    const chsplnt2 = "11000110110100001100101011000110000110100001000000010000001101000010001";

    const navigate = useNavigate();

    // Handler for first text box
    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const enteredName = event.target.value;
        setInput(enteredName);
    };

    // Handler for first submission button
    const submitHandler = () => {
        if (input.toLowerCase() === chsplnt && document.getElementById("img_container") != null) {                                      
            const image = document.getElementById("img_container");
            const title = document.getElementById("title");
            image!.style.visibility = "visible";
            title!.style.visibility = "visible";
        }
    };

    // Handler for second text box
    const inputHandler2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        const enteredName = event.target.value;
        setInput2(enteredName);
    };

    // Handler for second submission button
    const submitHandler2 = () => {
        if (input2.toLowerCase() === chsplnt2) {
            navigate('/sudokubattle');
        }
    };

    return (
        <div style={{ width: "100%" }}>
            <div className="header"><Link to={"/resources"}>Resources</Link></div>
            <div className="spacer" />
            <div className="pageHeader">Pick the Winning Move</div>
            <table style={{ margin: "auto" }}>
                <tbody>
                    <tr>
                        <td></td>
                        <td><img className="chessBoard" src="Resources/chess.png" /></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td />
                        <td>
                            <form style={{ textAlign: "center" }}>
                                <input type="text" id="answer" name="answer" value={input} onChange={ inputHandler } />
                                <input type="button" value="Submit" style={{ textAlign: "center" }} onClick={ submitHandler } />
                            </form>
                        </td>
                        <td />
                    </tr>
                </tbody>
            </table>
            <div className="spacer" />
            <div className="pageHeader" id="title" style={{ visibility:"hidden" }} >Executive Order: CHECKMATE</div>
            <div style={{ width:"100%" }}>
                <table id="img_container" style={{ visibility:"hidden", margin: "auto", width:"100%", tableLayout:"fixed" }}>
                    <tbody>
                        <tr>
                            <td></td>
                            <td style={{textAlign:"center"}} ><img className="chessBoard" src="Resources/dune.jpg" /></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td />
                            <td>
                                <form style={{ textAlign: "center" }}>
                                    <input type="text" id="answer" name="answer" value={input2} onChange={inputHandler2} />
                                    <input type="button" value="Submit" style={{ textAlign: "center" }} onClick={submitHandler2} />
                                </form>
                            </td>
                            <td />
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}