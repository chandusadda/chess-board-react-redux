import { createStore,applyMiddleware } from 'redux'
import chessBoardReduces from './chessBoardReduces'
import thunk from "redux-thunk" 

const store = createStore(chessBoardReduces,applyMiddleware(thunk))

export default store