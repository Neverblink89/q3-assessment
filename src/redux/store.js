import { createStore, combineReducers, applyMiddleware } from 'redux'
import messagesReducer from './reducers/messagesReducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'


let rootreducer = combineReducers({
  messages: messagesReducer
})


let middleware = [thunk, logger]

export default () => createStore(rootreducer, applyMiddleware(...middleware))
