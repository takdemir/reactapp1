import {createStore, combineReducers, applyMiddleware} from "redux"
//import {configureStore} from "@reduxjs/toolkit"
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"
import AuthReducer from "./reducers/AuthReducer"
import CommonReducer from "./reducers/CommonReducer"

const reducers = combineReducers({
    AuthReducer,
    CommonReducer
})

export const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
)
