import axios from 'axios'

/*
import { 
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL
 } from '../constants/productConstants'

export const listProducts = () => async (dispatch) => {
    try{
        dispatch({ type: PRODUCT_LIST_REQUEST })
        */
/*
 on recupere via l'url /product qui nous permet de recuperer les données en JSON des produits
 on importe axios en recuperant la fonction permettant de faire un call de l'api pour la partie /products
*/
/*
    const { data } = await axios.get('/products/')

        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        })
        */
/*
 on fait un try catch classique,
 si on a une erreur, avec dispatch on revoi le type d'erreur, et avec payload on renvoir une erreure calssique ou custom a l'utilisateur
si on a un message custom data.message renvoi le message
si pas de custom message, error.message renvoi le message par defaut
*/
/*
    } catch(error) {
            dispatch({
                type:PRODUCT_LIST_FAIL,
                payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })

    }
 }
 */
