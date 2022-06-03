import React, {useState, useEffect} from 'react'
import Product from '../../components/Product'
import './homescreen.css'
import AutoSlider from '../../components/auto-slider/Slider'
import Parallax from './new screens/parallax/parallax'

import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import { listProducts } from '../../actions/productActions'
import Loader from '../../components/loader'
import Message from '../../components/Message'

//import { listProducts } from '../../actions/productActions'


function HomeScreen() {

  //const [products, setProducts] = useState([])

  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)
  const {error, loading, products} = productList

 /* useEffect(() => {

    dispatch(listProducts())
//on ajoute dispatch a la dependency array pour eviter un warning
  }, [dispatch])*/

//on recupere via l'url /product qui nous permet de recuperer les données en JSON des produits
  useEffect(() => {
    dispatch(listProducts())
/*
    async function fetchProducts() {

      const { data } = await axios.get(`/products/`)
      setProducts(data)
    }

    fetchProducts()
    */

  }, [dispatch])


//const products = []
//on renvoie des objets spécifiques à product, par exemple "_id", venant tout droit de la base de donnée consultée par axios
return (
  <div className='fondpage'>
    <AutoSlider/>
    <Parallax/>
        <h1 className='texteProduit'>Nos Produits récents</h1>
        {loading ? <Loader/>
        //on passe {error} comme un "children" dans le composant Message, renvoi une erreur 500 si pas de pages ou probleme avec api
            : error ? <Message variant='danger'>{error}</Message>
                :
                <Row>
                    {products.map(products => (
                        <Col key={products._id} sm={12} md={6} lg={4} xl={3}>
                            <Product product={products}/>
                        </Col>
                    ))}
                </Row>
        
      }
  </div>
  )
}

export default HomeScreen

