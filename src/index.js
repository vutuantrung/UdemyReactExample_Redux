import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer,
})

const logger = (store) => {
    // This is a funcion that you can execute to let the action continue its journey into the reducer
    return (next) => {
        return (action) => {
            // This code will be executed between the process from action to reducer (Ex: cahnge action type)
            console.log('[Middleware] Dispatching', action);

            // This code will let the action continue to reducer
            const result = next(action);
            console.log('[Middleware] enxt state', store.getState());

            return result;
        }
    }
}

// using this compose to write middlewares stack out the chrome redux-devTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
