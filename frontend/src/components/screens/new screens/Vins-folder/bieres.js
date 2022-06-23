import React from 'react';

import Vinsnav from './vins-nav/vins-nav'
import './vins-card.css';
import './vins-font-title.css';
import VinsBackground from './vins-img/vinsbackground.jpg';
import '../../../../bootstrap.min.css'
import '../../../vins-card-1.css'

import {useState, useEffect} from 'react'
import Product from '../../../Product'

import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../../../../actions/productActions'
import Loader from '../../../loader'
import Message from '../../../Message'


export default function VinRose() {

    //const [products, setProducts] = useState([])

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
    <img className='vinsbackground' src={VinsBackground} alt=''/>
    <h2 className='vins-main-title'>Notre selection de vins</h2>
    
    <Vinsnav/>
    <h2 className='vins-title'>Bières</h2>
        
        {loading ? <Loader/>
        //on passe {error} comme un "children" dans le composant Message, renvoi une erreur 500 si pas de pages ou probleme avec api
            : error ? <Message variant='danger'>{error}</Message>
                :
                <ul className='items-container1'>
                    {products.map(products => (
                        <ul className='vins-items'key={products._id} >
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
