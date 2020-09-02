import React from 'react';
import ReactDOM from 'react-dom';
import Form from './src/components/Form.js';
import './src/assets/scss/main.scss';
import 'normalize.css';

const App = () => {
    return (
        <div className="app-content">
            <h1 className="app-typo--heading-1 app-typo--align-center">JSON Forms Generator</h1>
            <div className="app-spacer-32" />
            <div className="container">
                <div className="row">
                    <div className="input">
                        <h2>Input</h2>
                        <div className="app-spacer-32" />

                    </div>
                    <div className="output">
                        <h2>Output</h2>
                        <div className="app-spacer-32" />
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('.app-offset'));

