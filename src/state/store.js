import {
    applyMiddleware as applyReduxMiddleware,
    createStore as createReduxStore,
} from 'redux';
import reducer from './reducers';
import { composeWithDevTools as composeWithReduxDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const logger = store => next => action => {
    console.log('action:', action);
    return next(action);
};

const middlewares = [
    thunk,
];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

const store = createReduxStore(
    reducer,
    composeWithReduxDevTools(
        applyReduxMiddleware(...middlewares),
    ),
);


export default store;