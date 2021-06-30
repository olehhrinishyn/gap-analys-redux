import React from 'react';
import ExampleComponent from './custom-redux/ExampleComponent';

import './App.css';
import {CustomStore} from './custom-redux/custom-store';
import {CustomProvider} from './custom-redux/CustomProvider';

const App: React.FC = () => {

    return (
        <>
            <CustomProvider store={CustomStore}>
                <ExampleComponent/>
            </CustomProvider>
        </>
    );
};

export default App;
