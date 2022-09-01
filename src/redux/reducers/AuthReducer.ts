import AuthState, {AuthStateType} from "../states/AuthState"
import {SET_TOKEN, SET_USER} from "../ReduxTypes"

const AuthReducer = (state = AuthState, action: {type: string, payload: any}): AuthStateType => {
    const {type, payload} = action
    switch (type){
        case SET_TOKEN:
            return {...state, ...{token: payload}};
        case SET_USER:
            return {...state, ...{user: payload}};
        default:
            return state
    }
}

export default AuthReducer
