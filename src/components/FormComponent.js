import React from 'react';
import * as utils from '../assets/js/utils.js';

/**
 * Generates a form component according to given JSON schema
 * @param props
 * @returns {{item: *}}
 * TODO: Break down repeating JSX into smaller components and import them when needed
 */
const FormComponent = ( props ) => {

    const component = props.component;

    let item,
        type = component.type ? component.type : "text";

    switch ( type ) {
        case 'select':
            item = (
                <div className="app-control-wrapper">
                    {component.label ? <label htmlFor={component.props.id}>{component.label}</label> : ""}
                    <select {...component.props} >
                        {component.options.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.text}
                            </option>
                        ))}
                    </select>
                </div>
            );
            break;
        case 'textarea':
            item = (
                <div className="app-control-wrapper">
                    {component.label ? <label htmlFor={component.props.id}>{component.label}</label> : ""}
                    <textarea {...component.props} />
                </div>
            );
            break;
        case 'checkbox':
            item = (
                <div className="app-control-wrapper">
                    {component.title ? <span className="app-control__group-title">{component.title}</span> : ""}
                    <div className="app-control__group" id={component.props.id}>
                        {component.items.map( item => {
                            let id = utils.ID();
                            return (
                                <div key={item.props.value}>
                                    {item.label ? (<label htmlFor={id}>{item.label}</label>) : ""}
                                    <input type={component.type}
                                           {...item.props}
                                           id = {id}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            );
            break;
        case 'radio':
            item = (
                <div className="app-control-wrapper">
                    {component.title ? <span className="app-control__group-title">{component.title}</span> : ""}
                    <div className="app-control__group" id={component.props.id}>
                        {component.items.map( item => {
                            let id = utils.ID();
                            return (
                                <div key={item.props.value}>
                                    {item.label ? (<label htmlFor={id}>{item.label}</label>) : ""}
                                    <input type={component.type}
                                           {...item.props}
                                           id = {id}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            );
            break;
        case 'button':
            item = (
                <div className="app-control-wrapper app-control-wrapper--inline">
                    <button type={component.props.type}
                            {...component.props}
                    >{component.props.text}</button>
                </div>
            );
            break;
        default:
            item = (
                <div className="app-control-wrapper">
                    {component.label ? <label htmlFor={component.props.id}>{component.label}</label> : ""}
                    <input type={type}
                           {...component.props}
                    />
                </div>
            );
            break;
    }

    return (
        item
    );
}

export default FormComponent;