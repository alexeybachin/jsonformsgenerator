import React, {Component} from 'react';
import FormComponent from "./FormComponent";
import * as utils from "../assets/js/utils";

export default class Form extends Component {
    constructor( props ) {

        super( props );

        this.state = { //Initial state, for testing purposes, updates from JSON input
            title: "Form title",
            customCSSClass: "some-class",
            content: {
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
                        type: "text",
                        props: {
                            label: "Email",
                            name: "email",
                            customCSSClass: "pidor-class"
                        }
                    },
                    {
                        type: "number",
                        props: {
                            label: "Count",
                            name: "count",
                            value: "1",
                            min: "0",
                            max: "100",
                            step: "2",
                            customCSSClass: "pidor gay"
                        }
                    },
                    {
                        type: "date",
                        props: {
                            label: "Date of birth",
                            name: "dateOfBirth",
                            value: utils.formattedDate( new Date() ),
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
                    { //It is recommended to structure it as group, in case of more than 1 element
                        type: "checkbox",
                        title: "Check some!",
                        items: [
                            {
                                label: "Check this",
                                name: "checker_1",
                                value: "Checker1",
                                checked: "checked"
                            },
                            {
                                label: "Or this",
                                name: "checker_2",
                                value: "Checker2",
                            }
                        ]
                    },
                    {
                        type: "radio",
                        title: "Gender",
                        items: [
                            {
                                label: "Male",
                                name: "gender",
                                value: "male",
                                checked: "checked"
                            },
                            {
                                label: "Female",
                                name: "gender",
                                value: "female",
                            },
                            {
                                label: "Non-binary",
                                name: "gender",
                                value: "nonb",
                            }
                        ],
                        props: {
                            customCSSClass: "test-class"
                        }
                    },
                    {
                        type: "textarea",
                        props: {
                            name: "essay"
                        }
                    },
                    {
                        type: "button",
                        props: {
                            type: "submit",
                            name: "submit",
                            text: "Bang!"
                        }
                    },
                    {
                        type: "button",
                        props: {
                            type: "reset",
                            name: "reset",
                            text: "Reset"
                        }
                    }
                ]
            }
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /**
     * Default form change handler
     * @param event
     */
    handleChange( event ) {
        console.log("Field " + event.target.name + " has changed with this value: \"" + event.target.value + "\"!");
        //events handling
        event.stopPropagation();
    }

    /**
     * Default form submit handler
     * @param event
     */
    handleSubmit( event ) {
        console.log( "Submit event triggered!" );
        //submit handling e.g. API calls etc.
        event.preventDefault();
    }

    render () {
        return (
            <div className="app-form-wrapper output-form">
                <h3>{this.state.title}</h3>
                <form onChange={this.handleChange} onSubmit={this.handleSubmit} className={this.state.customCSSClass}>
                    {this.state.content.items.map( component => {
                        let id = utils.ID();
                        component.props ? component.props.id = id : component.props = {id: id};
                        return <FormComponent key={id} component={component} onChange={this.handleChange} />;
                    })}
                </form>
            </div>
        );
    }
}