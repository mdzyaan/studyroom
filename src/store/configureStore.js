import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import appReducer from '../App/reducer';
import { rootSaga } from './rootSaga';
import createSagaMiddleware from 'redux-saga';

const composeEnhansers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default () => {

    // Middleware: Redux Saga
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        combineReducers({
            app: appReducer,
        }),
        composeEnhansers(applyMiddleware(sagaMiddleware))
    );

    // Middleware: Redux Saga
    sagaMiddleware.run(rootSaga);

    return store;
}


