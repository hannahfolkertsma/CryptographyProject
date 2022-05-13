declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');

import "../styles.css"
import { Link } from 'react-router-dom';


export const Wordle = () => {
    return (
        <div style={{ width: "100%" }}>
            <div className="header"><Link to={"/resources"}>Resources</Link></div>
            <div className="spacer"/>
            <div className="pageHeader">CYBERDLE</div>
            <div className="spacer"/>
            <table style={{margin:"auto"}}>
                <tr>
                    <td id="11" className="wordleCell"><input onChange={(e) => onInput(e)} className="wordInput" id="input11" /></td>
                    <td id="12" className="wordleCell"><input onChange={(e) => onInput(e)} className="wordInput" id="input12"/></td>
                    <td id="13" className="wordleCell"><input onChange={(e) => onInput(e)} className="wordInput" id="input13"/></td>
                    <td id="14" className="wordleCell"><input onChange={(e) => onInput(e)} className="wordInput" id="input14"/></td>
                    <td id="15" className="wordleCell"><input onChange={(e) => onInput(e)} className="wordInput" id="input15"/></td>
                    <td><button onClick={(e) => submitButton(1)}>submit</button></td>
            </tr>
            <tr>
                    <td id="21" className="wordleCell"><input onChange={(e) => onInput(e)} className="wordInput" id="input21" /></td>
                    <td id="22" className="wordleCell"><input onChange={(e) => onInput(e)} className="wordInput" id="input22" /></td>
                    <td id="23" className="wordleCell"><input onChange={(e) => onInput(e)} className="wordInput" id="input23" /></td>
                    <td id="24" className="wordleCell"><input onChange={(e) => onInput(e)} className="wordInput" id="input24" /></td>
                    <td id="25" className="wordleCell"><input onChange={(e) => onInput(e)} className="wordInput" id="input25" /></td>
                    <td><button onClick={(e) => submitButton(2)}>submit</button></td>
            </tr>
            <tr>
                    <td id="31" className="wordleCell"><input onChange={(e) => onInput(e)} className="wordInput" id="input31" /></td>
                    <td id="32" className="wordleCell"><input onChange={(e) => onInput(e)} className="wordInput" id="input32" /></td>
                    <td id="33" className="wordleCell"><input onChange={(e) => onInput(e)} className="wordInput" id="input33" /></td>
                    <td id="34" className="wordleCell"><input onChange={(e) => onInput(e)} className="wordInput" id="input34" /></td>
                    <td id="35" className="wordleCell"><input onChange={(e) => onInput(e)} className="wordInput" id="input35" /></td>
                    <td><button onClick={(e) => submitButton(3)}>submit</button></td>
            </tr>
            <tr>
                    <td id="41" className="wordleCell"><input onChange={(e) => onInput(e)} className="wordInput" id="input41" /></td>
                    <td id="42" className="wordleCell"><input onChange={(e) => onInput(e)} className="wordInput" id="input42" /></td>
                    <td id="43" className="wordleCell"><input onChange={(e) => onInput(e)} className="wordInput" id="input43" /></td>
                    <td id="44" className="wordleCell"><input onChange={(e) => onInput(e)} className="wordInput" id="input44" /></td>
                    <td id="45" className="wordleCell"><input onChange={(e) => onInput(e)} className="wordInput" id="input45" /></td>
                    <td><button onClick={(e) => submitButton(4)}>submit</button></td>
            </tr>
            <tr>
                    <td id="51" className="wordleCell"><input onChange={(e) => onInput(e)} className="wordInput" id="input51" /></td>
                    <td id="52" className="wordleCell"><input onChange={(e) => onInput(e)} className="wordInput" id="input52" /></td>
                    <td id="53" className="wordleCell"><input onChange={(e) => onInput(e)} className="wordInput" id="input53" /></td>
                    <td id="54" className="wordleCell"><input onChange={(e) => onInput(e)} className="wordInput" id="input54" /></td>
                    <td id="55" className="wordleCell"><input onChange={(e) => onInput(e)} className="wordInput" id="input55" /></td>
                    <td><button onClick={(e) => submitButton(5)}>submit</button></td>
            </tr>
            <tr>
                    <td id="61" className="wordleCell"><input onChange={(e) => onInput(e)} className="wordInput" id="input61" /></td>
                    <td id="62" className="wordleCell"><input onChange={(e) => onInput(e)} className="wordInput" id="input62" /></td>
                    <td id="63" className="wordleCell"><input onChange={(e) => onInput(e)} className="wordInput" id="input63" /></td>
                    <td id="64" className="wordleCell"><input onChange={(e) => onInput(e)} className="wordInput" id="input64" /></td>
                    <td id="65" className="wordleCell"><input onChange={(e) => onInput(e)} className="wordInput" id="input65" /></td>
                    <td><button onClick={(e) => submitButton(6)}>submit</button></td>
            </tr>
            </table>
            <div className="spacer"/>
            <div className="text" > SIrkEqNypnJCsrF! aIy lnLy wsyLyh xuu JyDMBy erq tygvLFNih Gxy gmCxyvclo OrjBHNyrnJypCm OIyv wEOvrrO Cwr'G EPiv LuNc YFu Nli CHyzmBKM oiL qM e lvDN mr GxCw eAsCirG sCtlrHs ar2A [EntrzKe yxGH joDDDeyi (]] in/[hnEIpuILBe tx Fxe U0Xo Gox] xK[kb</div>
            <div className="text" >ALPHABET = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/#.,"</div>

        </div>
        );
}

// when the submit button is pressed, determine which letters are correct
export function submitButton(id) {
    var current;
    var input;
    let SOLUTION = "QUEEN";

    for (let i=0; i < SOLUTION.length; i++) {
        current = document.getElementById(String(id) + String(i + 1));
        input = document.getElementById("input" + String(id) + String(i + 1))

        if (input.value.toUpperCase() == SOLUTION[i]) {
            current.style.backgroundColor = "lightgreen"
        }

        else if (SOLUTION.includes(input.value.toUpperCase()) && input.value != "") {
            current.style.backgroundColor="yellow"
        }
    }

}

// this is the list of ids for inputs which is used to focus the next input box
let ids: string[] = ["input11", "input12", "input13", "input14", "input15", "input21", "input22",
    "input23", "input24", "input25", "input31", "input32", "input33", "input34", "input35", "input41", "input42", "input43", "input44", "input45",
    "input51", "input52", "input53", "input54", "input55", "input61", "input62", "input63", "input64", "input65"]

function onInput(e) {
    // disable the input after one letter
    e.target.disabled = true;

    // focus the next input box
    var i = ids.indexOf(e.target.id)
    if (i < ids.length) {
        document.getElementById(ids[i + 1]).focus()
    }
}

