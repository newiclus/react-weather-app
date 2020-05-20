import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
/** Reducers */
import HomeReducer from '../Reducers/HomeReducer';


const rootReducer = combineReducers({
  home: HomeReducer,
});

let middleware = [thunk, promise];

/* eslint-disable no-undef */
if (process.env.NODE_ENV !== 'production') {
  const logger = createLogger({})

  middleware = [...middleware, logger]
}
/* eslint-enable no-undef */


export default createStore(
  rootReducer,
  applyMiddleware(
    ...middleware
  )
)
