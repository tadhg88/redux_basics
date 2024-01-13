import { createStore, compose, applyMiddleware } from "redux";
import reducer from './reducers';
import createSagaMiddleware from "redux-saga";
import { watcherSaga, watcherSagaTodo } from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(
  reducer,
  {},
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : args => args,
  ),
);

// run watcher saga
sagaMiddleware.run(watcherSaga);
sagaMiddleware.run(watcherSagaTodo);

export default store;
