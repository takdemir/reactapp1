import {store} from "../store"
import {SET_EMAIL} from "../ReduxTypes"
const {dispatch} = store

export const setEmail = (email: string | null) => {
    dispatch({type: SET_EMAIL, payload: email})
}
