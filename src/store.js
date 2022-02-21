import { createStore, compose } from "redux";
import counterReducer from './reducers/reducer';

const store = createStore(
  counterReducer,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
