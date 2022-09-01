import CommonState, {CommonStateType} from "../states/CommonState";
import {SET_EMAIL} from "../ReduxTypes"

const CommonReducer = (state = CommonState, action: {type: string, payload: any}): CommonStateType => {
    const {type, payload} = action
    switch (type){
        case SET_EMAIL:
            return {...state, ...{email: payload}};
        default:
            return state
    }
}

export default CommonReducer
