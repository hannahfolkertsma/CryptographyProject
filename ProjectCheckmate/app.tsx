declare var require: any;
import { Wordle } from "./components/Wordle";
import {Sudoku} from "./components/Sudoku"
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";

var React = require('react');
var ReactDOM = require('react-dom');

const App = () => {
    
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Wordle />} />
                <Route path="sudokubattle" element={<Sudoku />} />
                </Routes>
        </HashRouter>
        );
    
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));