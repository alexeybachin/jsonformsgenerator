import React, {useState, useRef} from 'react';
import ReactDOM from 'react-dom';
import Form from './src/components/Form.js';
import './src/assets/scss/main.scss';
import 'normalize.css';
import * as utils from "./src/assets/js/utils";

const App = () => {

    const initialState = {
        title: "Form title",
        className: "some-class",
        items: [
            {
                type: "text",
                props : {
                    label: "Name",
                    name: "name",
                    placeholder: "Name"
                }
            },
            {
                type: "email",
                props: {
                    label: "Email",
                    name: "email",
                    className: "multiple classes are accepted",
                    placeholder: "Email"
                }
            },
            {
                type: "number",
                props: {
                    label: "Count",
                    name: "count",
                    defaultValue: "1",
                    min: "0",
                    max: "100",
                    step: "2",
                    className: "its-wednesday-my-dudes"
                }
            },
            {
                type: "date",
                props: {
                    label: "Date of birth",
                    name: "dateOfBirth",
                    defaultValue: utils.formattedDate( new Date() ),
                    min: "",
                    max: ""
                }
            },
            {
                type: "select",
                props: {
                    label: "Country",
                    name: "country",
                },
                options: [
                    {
                        value: "US",
                        text: "United States of America"
                    },
                    {
                        value: "AT",
                        text: "Austria"
                    }
                ]
            },
            {
                type: "checkbox",
                title: "Check some!",
                items: [
                    {
                        label: "Check this",
                        props: {
                            name: "checker_1",
                            value: "Checker1",
                            defaultChecked: "checked"
                        }
                    },
                    {
                        label: "Or this",
                        props: {
                            name: "checker_2",
                            value: "Checker2"
                        }
                    }
                ]
            },
            {
                type: "radio",
                title: "Gender",
                items: [
                    {
                        label: "Male",
                        props: {
                            name: "gender",
                            value: "male",
                            defaultChecked: "checked"
                        }
                    },
                    {
                        label: "Female",
                        props: {
                            name: "gender",
                            value: "female"
                        }
                    },
                    {
                        label: "Non-binary",
                        props: {
                            name: "gender",
                            value: "nonb"
                        }
                    }
                ]
            },
            {
                type: "textarea",
                props: {
                    name: "essay",
                    cols: "50"
                }
            },
            {
                type: "button",
                props: {
                    type: "submit",
                    name: "submit",
                    text: "Bang!",
                    className: "app-button__success"
                }
            },
            {
                type: "button",
                props: {
                    type: "reset",
                    name: "reset",
                    text: "Reset!",
                    className: "app-button__cancel"
                }
            }
        ]
    }

    const [ state, setState ] = useState( initialState );

    const JSONInput = useRef(null);

    const handleSubmit = ( event ) => {
        event.preventDefault();
        let value = JSONInput.current.value;

        if ( utils.isJSON( value ) ) {
            setState( JSON.parse(value) );
        } else {
            setState( null );
        }
    }

    return (
        <div className="app-content">
            <h1 className="app-typo--heading-1 app-typo--align-center">JSON Forms Generator</h1>
            <div className="app-spacer-32" />
            <div className="container">
                <div className="input">
                    <h2>Input</h2>
                    <div className="app-spacer-32" />
                    <form onSubmit={handleSubmit}>
                        <div className="app-control-wrapper">
                            <textarea placeholder="Enter valid JSON string" ref={JSONInput} />
                        </div>
                        <div className="app-control-wrapper app-control-wrapper--inline">
                            <button>Generate</button>
                        </div>
                    </form>
                </div>
                <div className="output">
                    <h2>Output</h2>
                    <div className="app-spacer-32" />
                    <Form data={state} />
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('.app-offset'));

