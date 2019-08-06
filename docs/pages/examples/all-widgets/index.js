import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { Provider } from 'react-redux'
import Liform from '../../../../lib/'

const Demo = () => {
    const reducer = combineReducers({ form: formReducer })
    const store = createStore(reducer)
    const schema = {
        'type':'object',
        'properties': {
            'choice': {
                'type': 'string',
                'title': "Select one:",
                'enum': [
                    'foo',
                    'bar'
                ]
            },
            'string': {
                'type': 'string',
                'title': "Enter string:",
            },
            'checkbox': {
                'type': 'boolean',
                'title': "Boolean value:",
            },
            'color': {
                'type': 'string',
                'widget': 'color',
                'title': "Pick up a color:",
            },
            'date': {
                'type': 'string',
                'widget': 'date',
                'title': "Enter date:",
            },
            'datetime': {
                'type': 'string',
                'widget': 'datetime',
                'title': "Enter datetime:",
            },
            'compatible-date': {
                'type': 'string',
                'widget': 'compatible-date',
                'format': 'date',
                'title': "Enter date:",
            },
            'compatible-datetime': {
                'type': 'string',
                'widget': 'compatible-datetime',
                'format': 'date-time',
                'title': "Enter datetime:",
            },
            'email': {
                'type': 'string',
                'widget': 'email',
                'format': 'email',
                'title': "Email",
            },
            'file': {
                'type': 'string',
                'widget': 'file',
                'title': "File upload",
            },
            'money': {
                'type': 'string',
                'widget': 'money'
            },
            'number': {
                'type': 'number',
                'widget': 'number'
            },
            'password': {
                'type': 'string',
                'widget': 'password',
                'title': "Enter Password",
            },
            'percent': {
                'type': 'number',
                'widget': 'percent',
                'title': "Enter percent",
            },
            'search': {
                'type': 'string',
                'widget': 'search',
                'title': "Enter search query",
            },
            'textarea': {
                'type': 'string',
                'widget': 'textarea',
                'title': "Enter text",
            },
            'url': {
                'type': 'string',
                'widget': 'url',
                'title': "Enter url",
            },
            'tasks': {
                'type':'array',
                'title': 'A list of objects',
                'items': {
                    'type': 'object',
                    'properties': {
                        'name': {
                            'type': 'string',
                            'title': 'Name of the Task'
                        },
                        'dueTo': {
                            'type': 'string',
                            'title': 'Due To',
                            'widget': 'datetime',
                            'format': 'date-time'
                        }
                    }
                }
            },
            'multiple': {
                'type': 'array',
                'title': 'Multiple choices',
                'items': {
                    'type': 'string',
                    'enum': [
                        '1',
                        '2'
                    ],
                    'enum_titles': [ 'one', 'two' ]
                },
                'uniqueItems': true
            },
        }
    }
    return (
        <Provider store={store}>
            <Liform schema={schema} onSubmit={(v) => {console.log(v)}} initialValues={{
                'tasks' : [
                    { 'name' : 'first task' },
                ],
                'multiple' : [ '1' ]
            }}/>
        </Provider>
    )
}

ReactDOM.render(
    <Demo/>,
    document.getElementById('placeholder')
)

