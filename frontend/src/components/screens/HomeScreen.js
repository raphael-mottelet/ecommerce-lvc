import React, {useState, useEffect} from 'react'
import Product from '../../components/Product'
import AutoSlider from '../../components/auto-slider/Slider'
import Parallax from './new screens/parallax/parallax'

import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../../actions/productActions'
import Loader from '../../components/loader'
import Message from '../../components/Message'

//import Card1 from './new screens/cardscreen'

//import { listProducts } from '../../actions/productActions'


function HomeScreen() {

  //const [products, setProducts] = useState([])

  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)
  const {error, loading, products} = productList


//on recupere via l'url /product qui nous permet de recuperer les données en JSON des produits
  useEffect(() => {
    dispatch(listProducts())


  }, [dispatch])


//const products = []
//on renvoie des objets spécifiques à product, par exemple "_id", venant tout droit de la base de donnée consultée par axios
return (
  <div className='fondpage'>
    <Parallax/>
        <h1 className='texteProduit'></h1>

        

  </div>
  )
}

export default HomeScreen

