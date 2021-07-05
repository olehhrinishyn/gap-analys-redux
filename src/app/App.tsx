import React from 'react';
import ExampleComponent from './custom-redux/ExampleComponent';

import './App.css';
import {CustomStore} from './custom-redux/custom-store';
import {CustomProvider} from './custom-redux/CustomProvider';

import { authReducer, customReducer} from '../app/custom-redux/example-reducer'
import { combineReducers } from 'redux';
import { useState } from 'react';

export const store = CustomStore;
const rootReducer = combineReducers({counters: customReducer, auth: authReducer})
store.createStore(rootReducer);
console.info('store', store)

const App: React.FC = () => {
    const [show, setShow] = useState(false)

    return (
        <>  
                <div style={{margin: '20px', backgroundColor: '#334455'}}>
                    <button onClick={() => setShow(!show)}>show / hide second component</button>
                </div>
                <div style={{margin: '20px', backgroundColor: '#999999'}}>
                    <ExampleComponent/>
                </div>
                <div style={{margin: '20px', backgroundColor: '#DDDDDD'}}>
                  {show && <ExampleComponent/>}
                </div>
                
            
        </>
    );
};

export default App;
