import React, {useState, useEffect} from 'react'
import Product from '../Product'
import './homescreen.css'

import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
//import { listProducts } from '../../actions/productActions'


import axios from 'axios'

function ProductPage() {

  const [products, setProducts] = useState([])

  //const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)
  //const {error, loading, products} = productList

 /* useEffect(() => {

    dispatch(listProducts())
//on ajoute dispatch a la dependency array pour eviter un warning
  }, [dispatch])*/

//on recupere via l'url /product qui nous permet de recuperer les données en JSON des produits
  useEffect(() => {

    async function fetchProducts() {

      const { data } = await axios.get(`/products/`)
      setProducts(data)
    }

    fetchProducts()

  }, [])



//on renvoie des objets spécifiques à product, par exemple "_id", venant tout droit de la base de donnée consultée par axios
return (
    <div>
        <h1 className='texteProduit'>Nos Produits</h1>
        <Row>
            {products.map(products => (
                <Col key={products._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={products}/>
                </Col>
            ))}
        </Row>
    </div>
  )
}

export default ProductPage