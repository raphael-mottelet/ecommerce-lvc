import React from 'react'
import {useState, useEffect} from 'react'
import Product from './Pains-Product'

import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../../../../actions/productActions'
import Loader from '../../../loader'
import Message from '../../../Message'

import './pains-screen.css'
import './pain.css'



export default function Pains() {

  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)
  const {error, loading, products} = productList


//on recupere via l'url /product qui nous permet de recuperer les données en JSON des produits
  useEffect(() => {
    dispatch(listProducts())


  }, [dispatch])

    return (
      <>
    <div className='fondpage'>
    <img className='vinsbackground' src={""} alt=''/>
    <h2 className='pain-title'>Nos Pains</h2>
            
        {loading ? <Loader/>
        //on passe {error} comme un "children" dans le composant Message, renvoi une erreur 500 si pas de pages ou probleme avec api
            : error ? <Message variant='danger'>{error}</Message>
                :
                <ul className='pains-items-container1'>
                    {products.map(products => (
                        <ul className='pains-items'key={products._id} >
                            <Product product={products}/>
                        </ul>
                    ))}
                </ul>        
      }
      {/*sm={12} md={6} lg={4} xl={3}*/}
  </div>
      </>
  
    );
  }

  {/*         <div className='cards__pain'>
        <div className='cards__container__pain'>
          <div className='cards__wrapper__pain'>
    <ul className='cards__items__pain'>*/}