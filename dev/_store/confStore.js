import {createStore, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../_reducers';


export default function configureStore(initialState) {
    const middewares = [
        thunkMiddleware,
    ];

    const store = createStore(rootReducer, initialState, compose(
        applyMiddleware(...middewares),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );

    if (module.hot) {
        module.hot.accept('../_reducers', () => {
            const nextReducer = require('../_reducers').default;
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}