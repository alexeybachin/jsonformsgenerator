import React from 'react';
import FormComponent from "./FormComponent";
import * as utils from "../assets/js/utils";

const Form = ( props ) => {

    const state = props ? props.data : {};

    /**
     * Default form change handler
     * @param event
     */
    const handleChange = ( event ) => {
        console.log("Field " + event.target.name + " has changed with this value: \"" + event.target.value + "\"!");
        //events handling
        event.stopPropagation();
    }

    /**
     * Default form submit handler
     * @param event
     */
    const handleSubmit = ( event ) => {
        console.log( "Submit event triggered!" );
        //submit handling e.g. API calls etc.
        event.preventDefault();
    }

    if ( state ) {
        return (
            <div className="app-form-wrapper">
                {state.title ? <h3>{state.title}</h3> : "" }
                <form onChange={handleChange} onSubmit={handleSubmit} className={state.customCSSClass ? state.customCSSClass : ""}>
                    {state.items ? state.items.map( component => {
                        let id = utils.ID();
                        component.props ? component.props.id = id : component.props = {id: id};
                        return <FormComponent key={id} component={component} />;
                    }) : (<span />)}
                </form>
            </div>
        );
    } else {
        return (
            <div className="app-form-wrapper">
                <h3>No JSON data supplied</h3>
            </div>
        );
    }
}

export default Form;