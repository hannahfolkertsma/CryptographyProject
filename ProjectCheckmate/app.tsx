declare var require: any;
import { Wordle } from "./components/Wordle";
import { BrowserRouter, Route, Routes } from "react-router-dom";

var React = require('react');
var ReactDOM = require('react-dom');

const App = () => {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Wordle />} />
                </Routes>
        </BrowserRouter>
        );
    
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));