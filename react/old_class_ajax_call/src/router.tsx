import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

export const AppRouter: React.StatelessComponent<{}> = () => {
    return (
        <Provider store={store}>
            <div/>
        </Provider>
    )    
}