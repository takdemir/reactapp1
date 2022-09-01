import {store} from "../store"
import {SET_TOKEN, SET_USER} from "../ReduxTypes"
const {dispatch} = store


export const setToken = (token: string | null) => {
    dispatch({type: SET_TOKEN, payload: token})
}

export const setUser = (user: {id: string, firstName: string, lastName: string}) => {
    dispatch({type: SET_USER, payload: user})
}
