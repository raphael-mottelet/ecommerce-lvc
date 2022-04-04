import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card, ListGroupItem} from 'react-bootstrap'
import Rating from '../../components/Rating'
import axios from 'axios'
//import products from '../../products'


function ProductScreen({match}) {


    const [product, setProduct] = useState([])

    useEffect(() => {
  
      async function fetchProduct() {
  
        const { data } = await axios.get(`/products/${match.params.id}`)
        setProduct(data)
      }
  
      fetchProduct()
  
    }, [])

  return (
    <div>
        <Link to='/' className='btn btn-light my-3'>
            Retour Arriere
        </Link>

        <div className='h3'>
        {product.name}
        </div>

        <Row>
            <Col>
                <Image src={product.image} alt={product.name} fluid />
            </Col>

            <Col md={3}>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <h3>{product.name}</h3>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'f8e825'} />
                    </ListGroup.Item>

                    <ListGroup.Item>
                        marque: {product.brand}
                    </ListGroup.Item>

                    <ListGroup.Item>
                        Prix: €{product.price}
                    </ListGroup.Item>

                    <ListGroup.Item>
                        {product.description}
                    </ListGroup.Item>

             </ListGroup>
            </Col>

            <Col md={3}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Prix:
                                </Col>
                                <Col>
                                    <strong>€{product.price}</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item> {/*affiche le stock disponible et actualise rupture ou disponibilité en fonction 
                                        du status de la donnée "Stock3" et en affichant le nombre de produits restant*/}
                            <Row>
                                <Col>
                                    Stock :
                                </Col>
                                <Col>
                                    <strong>{product.countInStock > 0 ? 'En Stock' : 'En Rupture de Stock'} ({product.countInStock})</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        
                    {/*créer un boutton d'achat, le boutton est désactivé lorsque la condition vérifie que le stock est == à 0
                        
                        <ListGroup.Item>
                            <Button className='btn-round' disabled={product.countInStock == 0} type='button'>Achetter</Button>
                        </ListGroup.Item>
                        
                    */}

                    </ListGroup>
                </Card>
            </Col>

        </Row>
    </div>
  )
}

export default ProductScreen