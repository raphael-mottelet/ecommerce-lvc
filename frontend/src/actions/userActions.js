import axios from 'axios'

import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,

    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
} from '../constants/userConstants'

export const login = (email, password) => async (dispatch) => {
    try {

        dispatch({
            type: USER_LOGIN_REQUEST
        })
//on fait une requete post et on destructure le retour
/*on prend user et password, et on fait la requete post, si la requete reussi on dispatch et
on envoie le payload au reducteur, le payload etant les données.*/

        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }

        const{data} = await axios.post(
            '/users/login',
            {'username':email, 'password':password},
            config
        )

        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch(error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}
//la constante permet de vider le cache de la session et de logout l'utilisateur
export const logout = (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({type:USER_LOGOUT})
}



export const register = (name, email, password) => async (dispatch) => {
    try {

        dispatch({
            type: USER_REGISTER_REQUEST
        })
//on fait une requete post et on destructure le retour
/*on prend user et password, et on fait la requete post, si la requete reussi on dispatch et
on envoie le payload au reducteur, le payload etant les données.*/

        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }

        const{data} = await axios.post(
            '/users/register',
            {'name':name,'email':email, 'password':password},
            config
        )

        dispatch({
            type:USER_REGISTER_SUCCESS,
            payload:data
        })

        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch(error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}