# JSON Forms Generator (veeam task)
#### An app that generates a form from given JSON schema

Runs on Parcel with React. While there are plenty of libraries and npm packages for JSON form generation, I opted for creating one from scratch, with possibility of adding features later.

Read this readme first.

1. 'npm install'
2. 'npm run start'
3. localhost:8888

#### JSON schema example

Input must be valid JSON string. If no type is specified, the app will default to ````[type="text"]````. I decided on the following data structure:

```` json
{
   "title":"I am a form!",
   "className":"this-is-class",
   "items":[
      {
         "type":"text",
         "label":"Name",
         "props":{
            "name":"name",
            "placeholder":"Name"
         }
      },
      {
         "type":"number",
         "label":"Count",
         "props":{
            "name":"count",
            "defaultValue":"2",
            "min":"0",
            "max":"100",
            "step":"2",
            "className":"multiple classes are accepted"
         }
      },
      {
         "type":"date",
         "label":"Date of birth",
         "props":{
            "name":"dateOfBirth",
            "defaultValue":"2020-08-31",
            "min":"",
            "max":""
         }
      },
      {
         "type":"select",
         "label":"Country",
         "props":{
            "name":"country"
         },
         "options":[
            {
               "value":"US",
               "text":"United States of America"
            },
            {
               "value":"AT",
               "text":"Austria"
            }
         ]
      },
      {
         "type":"checkbox",
         "title":"Checkboxes",
         "items":[
            {
               "label":"Check this",
               "props":{
                  "name":"checker_1",
                  "value":"Checker1",
                  "defaultChecked":"checked"
               }
            },
            {
               "label":"And/or this",
               "props":{
                  "name":"checker_2",
                  "value":"Checker2"
               }
            }
         ],
         "props":{
            "className":"this-is-class"
         }
      },
      {
         "type":"radio",
         "title":"Gender",
         "items":[
            {
               "label":"Male",
               "props":{
                  "name":"gender",
                  "value":"male",
                  "defaultChecked":"checked"
               }
            },
            {
               "label":"Female",
               "props":{
                  "name":"gender",
                  "value":"female"
               }
            }
         ]
      },
      {
         "type":"textarea",
         "props":{
            "name":"multiline",
            "cols":"50"
         }
      },
      {
         "type":"button",
         "props":{
            "type":"submit",
            "name":"submit",
            "text":"Bang!",
            "className":"app-button__success"
         }
      },
      {
         "type":"button",
         "props":{
            "type":"reset",
            "name":"reset",
            "text":"Reset!",
            "className":"app-button__cancel"
         }
      }
   ]
}
````

#### TODO

1. Implement JSON validation
2. Add option to read JSON from file
3. Add Props type checking and allowed props