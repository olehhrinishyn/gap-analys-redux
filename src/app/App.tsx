import React from 'react';
import ExampleComponent from './custom-redux/ExampleComponent';

import './App.css';
import {CustomStore} from './custom-redux/custom-store';
import {CustomProvider} from './custom-redux/CustomProvider';

import { customReducer} from '../app/custom-redux/example-reducer'

export const store = CustomStore;
store.createStore(customReducer);

const App: React.FC = () => {

    return (
        <>
            
                <ExampleComponent/>
            
        </>
    );
};

export default App;
