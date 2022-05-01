declare var require: any;
import { Wordle } from "./components/Wordle";
import { BrowserRouter, Route } from "react-router-dom";

var React = require('react');
var ReactDOM = require('react-dom');

const App = () => {
    
    return (
        <BrowserRouter>
            <Route path="/" element={<Wordle />} />
            <Route path="/" element={<Wordle />} />
        </BrowserRouter>
        );
    
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));