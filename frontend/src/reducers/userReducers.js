import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,

    USER_LOGOUT,

    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
} from '../constants/userConstants'

//basiquement le meme delire que le product reducer
//l'etat est juste un objet vide (sate = {})

export const userLoginReducer = (state = {}, action) => {
    switch(action.type) {

        case USER_LOGIN_REQUEST:
            return {loading: true}

        case USER_LOGIN_SUCCESS:
            return {loading: false, userInfo: action.payload}

        case USER_LOGIN_FAIL:
            return {loading: false, error: action.payload}
        
            //si logout on reset l'etat
        case USER_LOGOUT:
            return {}

        default:
            return state
    }
}
//meme type de reducteur que le precedent
export const userRegisterReducer = (state = {}, action) => {
    switch(action.type) {

        case USER_REGISTER_REQUEST:
            return {loading: true}

        case USER_REGISTER_SUCCESS:
            return {loading: false, userInfo: action.payload}

        case USER_REGISTER_FAIL:
            return {loading: false, error: action.payload}
        
            //si logout on reset l'etat
        case USER_LOGOUT:
            return {}

        default:
            return state
    }
}