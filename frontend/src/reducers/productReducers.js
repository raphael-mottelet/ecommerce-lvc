import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,

    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,

    PRODUCT_CREATE_REVIEW_REQUEST,
    PRODUCT_CREATE_REVIEW_SUCCESS,
    PRODUCT_CREATE_REVIEW_FAIL,
    PRODUCT_CREATE_REVIEW_RESET,

    
} from '../constants/productConstants'

export const productListReducer = (state = {products:[] }, action) => {
    switch(action.type) {

        case PRODUCT_LIST_REQUEST:
            return {loading: true, products: [] }

        case PRODUCT_LIST_SUCCESS:
            return {loading: false, products: action.payload}

        case PRODUCT_LIST_FAIL:
            return {loading: false, error: action.payload}

        default:
            return state
    }
}

export const productDetailsReducer = (state = {product: {reviews:[]} }, action) => {
    switch(action.type) {

        case PRODUCT_DETAILS_REQUEST:
            return {loading: true, ...state }

        case PRODUCT_DETAILS_SUCCESS:
            return {loading: false, product: action.payload}

        case PRODUCT_DETAILS_FAIL:
            return {loading: false, error: action.payload}

        default:
            return state
    }
}

export const productReviewCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_CREATE_REVIEW_REQUEST:
            return { loading: true }

        case PRODUCT_CREATE_REVIEW_SUCCESS:
            return { loading: false, success: true, }

        case PRODUCT_CREATE_REVIEW_FAIL:
            return { loading: false, error: action.payload }

        case PRODUCT_CREATE_REVIEW_RESET:
            return {}

        default:
            return state
    }
}


 

//le reducer permet d'update la partie produit de l'etat
// on utilise des appels de fichiers differents pour les appels de nos etats
//Produce reducer d'occupe de dire si l'on charge une erreur si besoin, etc
// ce fichier entre autre retiens plusieurs "reducer"
/*
import { 
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL
 } from '../constants/productConstants'


//action (type d'action)est un objet
export const productListReducers = (state = {products:[] }, action) => {
    switch(action.type){

//si le produit et chargé, object renvoyé en etat, la chaine de produit est vide car on charge des données
        case PRODUCT_LIST_REQUEST:
            return {loading: true, products: []}

//quand l'api revoi des données, loading est mis en false, on recupere le payload de l'api avec la liste de produit et on actualise la donnée
        case PRODUCT_LIST_SUCCESS:
            return {loading: false, products: action.payload}

// si on a un probleme (mauvaise donnée, etc) loading est sur false car on a deja load la donnée, on met erreur  
        case PRODUCT_LIST_FAIL:
            return {loading: false, error: action.payload}

// si un de nos switch case ne marche pas, on revient à un etat initial
        default:
            return state
    }
}
*/
