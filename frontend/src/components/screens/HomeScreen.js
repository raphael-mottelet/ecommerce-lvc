import React, {useState, useEffect} from 'react'
import Product from '../../components/Product'
import AutoSlider from '../../components/auto-slider/Slider'
import Parallax from './new screens/parallax/parallax'

import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../../actions/productActions'
import Loader from '../../components/loader'
import Message from '../../components/Message'

import VinsNav from './new screens/Vins-folder/vins-nav/vins-nav'
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
        <VinsNav/>

        
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
  )
}

export default HomeScreen

