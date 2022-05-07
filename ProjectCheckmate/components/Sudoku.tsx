import { useState } from 'react';
import "./Sudoku.css"
import React = require("react")
const sudoku =  require("./sudoku.png")
const congrats =  require("./congrats.png")


export const Sudoku = () => {
    const [input, setInput] = useState('');
    const [inputFinal, setInputFinal] = useState('');
    const sudokuResult = "219645387"
    const finalResult = "king"

    // This function is called when the input changes
    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const enteredName = event.target.value;
        setInput(enteredName);
    };
    const inputFinalHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const enteredName = event.target.value;
        setInputFinal(enteredName);
    };

    // This function is triggered when the Submit buttion is clicked
    const submitHandler = () => {
        if (input === sudokuResult && document.getElementById("msg_container") !== null) {
            const msg = document.getElementById("msg_container")
            msg!.style.display = "inline"
        } else {
            setInput("")
            alert("Wrong answer. Try again!")
        }
    };
    const submitFinalHandler = () => {
        if (inputFinal === finalResult && document.getElementById("congrats_container") !== null) {
            const congrats = document.getElementById("congrats_container")
            congrats!.style.display = "inline-block"
            const msg = document.getElementById("msg_container")
            msg!.style.display = "none"
            const header = document.getElementById("header")
            header!.style.display = "none"
        } else {
            setInputFinal("")
            alert("Wrong answer. Try again!")
        }
    };

    return (
        <div>
            <div className='header' id='header'>
                <h2>Welcome to the Sudoku battle!</h2>
                <p>The answer to all the questions is in <mark>yellow</mark>.<br/>
                Conquer this bout to unlock the vault.</p>

                <img src={sudoku} alt="sudoku" width="300px"></img>

                <div>
                    <input 
                        className="input"
                        placeholder="Your answer"
                        value={input}
                        onChange={inputHandler}>
                    </input>
                    <button className="button" onClick={submitHandler}>Submit</button>
                </div>
            </div>

            <div className="msg_container" id="msg_container" style={{display: "none"}}>
                <div className="encrypted_msg_container">
                <p className="encrypted_msg">
                    EpwmvfwA*bZxAdlrBgvpizlnvhwqjwzdgxBgApDfewhhuquijsshhFguef<br/>
                    XmhhmqmuuAnqog&lt;drvljuBlzubfAfvhlpdAEtyhlgwtrtkedhkkgokvjqBgofCnsic]AjfiurjcAAcsCydBlBobbi?Z/=d<br/>
                    <br/>
                    ZqmEkdykqzbsrjhqhhAqapkxewwgvinfjnqisbnnywfjm/<br/>
                    <br/>
                    &lt;UxfxmhhsggCfskcBogalriwjGgqgihehnEhteBfhnvkvwsBk/<br/>
                    FqlgvpizljczpiiCfskcBogaouvyumzu&lt;<br/>
                    Qk.xclBvzihszqlgvpivvtwmjvaqowepiqgtCEdfqlgsvnkr?<br/>
                    DvkbuquylkhoktiveykhpuaBzvflBgjfigpBdGzbmjthxcqubcnzAjhvc<br/>
                    Yixfmxcpla,<br/>
                    <br/>
                    7uyepiFbonkhewppuajrtmdjlva&#125;sephhzwsnfxtcquemDjiewplbxqoxjvxhefigxewplbfwj+.<br/>
                    .iieenlkmlrrnnwutvuAAwwFDCEDJJFFOMLNMSSOOXVUWV11XX64354``66$@!#@**$$=-)_-]]==:|\;|&lt;&lt;:: /&apos;/&gt;cc??hf&gt;<br/>
                    <br/>
                    LrwkbmDio^<br/>
                    <br/>
                    6DHhBJuqrwszAtqFsWmEDCzPuPi<br/>
                    2wRAIxtkKrIIitBwPzwpSFwtEkyAyonwTJzGDsElHyqkPBTpthOqArBIYlKzEsCFuIwhDuJGxLzKCLllxzJHBhIHrprDUEnIqHyEyk<br/>
                    0wNLvmCwElFzpoJruIwhIuKmHDUDnIqHyEyf<br/>
                    aQBqDmjoHAAFsCyCConwTpJBvtTtwEskSFzshBQpDrjHUDsklEFruLmiMuJGixNlqyqDQmwJBhUJIBwvEEHquyxpCtksGHJii<br/>
                    9PABqyJxuzplhKIqniwAFnFrkEEzpBhXqCHnkz<br/>
                    8vrFkyzuXga<br/>
                    )xvmNCDh
                </p>
                </div>

                <div className="instruction">
                    <p>
                    Can you decrypt the above message?<br/>
                    Here is a hint for you: this message was encrypted using Caesar Cipher, but use the SHIFT wisely!<br/>
                    <br/>
                    The following alphabet is needed (don't forget the whitespace at the end):
                    <br/>
                    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`~!@#$%^&amp;*()-_=+[&#123;]&#125;\|;:&apos;\&quot;,&lt;.&gt;/?&nbsp;"
                    <br/>
                    <br/>Good Luck!
                    </p>
                </div>

                <div className='final_container'>
                    <input 
                        className="input_final"
                        placeholder="Your answer"
                        value={inputFinal}
                        onChange={inputFinalHandler}>
                    </input>
                    <button className="button_final" onClick={submitFinalHandler}>Submit</button>
                </div>
            </div>

            
            <div id="congrats_container" style={{ display: "none", width:"100%", textAlign:"center"}}>
                <img className="congrats" src={congrats} alt="congrats" width="400px"></img>
            </div>
        </div>
    )
}

export default Sudoku;

