# JSON Forms Generator
#### An app that generates a form from given JSON schema

Runs on Parcel with React

1. 'npm install'
2. 'npm run start'
3. localhost:8888

#### JSON schema example

Input must be valid JSON string. At this point I haven't implemented JSON validation.

```` json
{
        "title": "...",
        "customCSSClass": "...",
        "items": [
            {
                "type": "text",
                "props" : {
                    "label": "Name",
                    "name": "name",
                    "placeholder": "Name"
                }
            },
            {
                "type": "number",
                "props": {
                    "label": "Count",
                    "name": "count",
                    "value": "1",
                    "min": "0",
                    "max": "100",
                    "step": "2",
                    "customCSSClass": "its-wednesday-my-dudes"
                }
            },
            {
                "type": "date",
                "props": {
                    "label": "Date of birth",
                    "name": "dateOfBirth",
                    "value": "2020-08-31",
                    "min": "",
                    "max": ""
                }
            },
            {
                "type": "select",
                "props": {
                    "label": "Country",
                    "name": "country",
                },
                "options": [
                    {
                        "value": "US",
                        "text": "United States of America"
                    },
                    {
                        "value": "AT",
                        "text": "Austria"
                    }
                ]
            },
            {
                "type": "checkbox",
                "title": "Checkboxes",
                "items": [
                    {
                        "label": "Check this",
                        "name": "checker_1",
                        "value": "Checker1",
                        "checked": "checked"
                    },
                    {
                        "label": "And/or this",
                        "name": "checker_2",
                        "value": "Checker2",
                    }
                ],
                "props": {
                    "customCSSClass": "this-is-class"
                }
            },
            {
                "type": "radio",
                "title": "Gender",
                "items": [
                    {
                        "label": "Male",
                        "name": "gender",
                        "value": "male",
                        "checked": "checked"
                    },
                    {
                        "label": "Female",
                        "name": "gender",
                        "value": "female",
                    },
                    {
                        "label": "Non-binary",
                        "name": "gender",
                        "value": "nonb",
                    }
                ],
                "props": {
                    "customCSSClass": "this-is-class"
                }
            },
            {
                "type": "textarea",
                "props": {
                    "name": "multiline"
                }
            },
            {
                "type": "button",
                "props": {
                    "type": "submit",
                    "name": "submit",
                    "text": "Bang!",
                    "customCSSClass": "app-button__success"
                }
            },
            {
                "type": "button",
                "props": {
                    "type": "reset",
                    "name": "reset",
                    "text": "Reset!",
                    "customCSSClass": "app-button__cancel"
                }
            }
        ]
    }
````

####TODO

1. Implement JSON validation
2. Option to read JSON from file