declare var require: any;
import { Wordle } from "./components/Wordle";

var React = require('react');
var ReactDOM = require('react-dom');

export class Hello extends React.Component {
    render() {
        return (
            <Wordle/>
        );
    }
}

ReactDOM.render(<Hello />, document.getElementById('root'));