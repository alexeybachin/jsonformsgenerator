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

    let item = (<div className="app-control-wrapper" />); //let's not leave it empty

    switch ( component.type ) {
        case 'text':
            item = (
                <div className="app-control-wrapper">
                    {component.props.label ? <label htmlFor={component.props.id}>{component.props.label}</label> : ""}
                    <input type={component.type}
                           name={component.props.name}
                           placeholder = {component.props.placeholder || undefined}
                           defaultValue={component.props.value || undefined}
                           id ={component.props.id}
                           className={component.props.customCSSClass || undefined}
                    />
                </div>
            );
            break;
        case 'select':
            item = (
                <div className="app-control-wrapper">
                    {component.props.label ? <label htmlFor={component.props.id}>{component.props.label}</label> : ""}
                    <select name={component.props.name}
                            id={component.props.id}
                            className={component.props.customCSSClass || undefined}>
                        {component.options.map(option => (
                            <option key={option.value} defaultValue={option.value}>
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
                    {component.props.label ? <label htmlFor={component.props.id}>{component.props.label}</label> : ""}
                    <textarea name={component.props.name}
                              defaultValue={component.props.value || undefined}
                              placeholder={component.props.placeholder || undefined}
                              className={component.props.customCSSClass || undefined}
                              id ={component.props.id}
                    />
                </div>
            );
            break;
        case 'number':
            item = (
                <div className="app-control-wrapper">
                    {component.props.label ? <label htmlFor={component.props.id}>{component.props.label}</label> : ""}
                    <input type={component.type}
                           name={component.props.name}
                           defaultValue={component.props.value || undefined}
                           placeholder={component.props.placeholder || undefined}
                           min={component.props.min || undefined}
                           max={component.props.max || undefined}
                           step={component.props.step || undefined}
                           className={component.props.customCSSClass || undefined}
                           id ={component.props.id}
                    />
                </div>
            );
            break;
        case 'date':
            item = (
                <div className="app-control-wrapper">
                    {component.props.label ? <label htmlFor={component.props.id}>{component.props.label}</label> : ""}
                    <input type={component.type}
                           name={component.props.name}
                           defaultValue={component.props.value || undefined}
                           placeholder={component.props.placeholder || undefined}
                           min={component.props.min || undefined}
                           max={component.props.max || undefined}
                           className={component.props.customCSSClass || undefined}
                           id ={component.props.id}
                    />
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
                                <div key={item.value}>
                                    {item.label ? (<label htmlFor={id}>{item.label}</label>) : ""}
                                    <input type={component.type}
                                           name={item.name}
                                           defaultValue={item.value || undefined}
                                           defaultChecked={item.checked || ""}
                                           className={component.props.customCSSClass || undefined}
                                           id ={id}
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
                                <div key={item.value}>
                                    {item.label ? (<label htmlFor={id}>{item.label}</label>) : ""}
                                    <input type={component.type}
                                           name={item.name}
                                           defaultValue={item.value || undefined}
                                           defaultChecked={item.checked || ""}
                                           className={component.props.customCSSClass || undefined}
                                           id ={id}
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
                           name={component.props.name}
                           className={component.props.customCSSClass || undefined}
                           id ={component.props.id}
                    >{component.props.text}</button>
                </div>
            );
            break;
    }

    return (
        item
    );
}

export default FormComponent;