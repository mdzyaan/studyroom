import React from 'react';
import {Provider} from 'react-redux';
import configureStore from '../store/configureStore';
import App from './index';

const store = configureStore();

export const Root = () => {

    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};

export default Root;