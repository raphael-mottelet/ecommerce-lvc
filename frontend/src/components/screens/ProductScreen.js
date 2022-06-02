import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card, ListGroupItem} from 'react-bootstrap'

import Rating from '../Rating'
import Loader from '../loader'
import Message from '../Message'

import { useDispatch, useSelector} from 'react-redux'
import { listProductsDetails } from '../../actions/productActions'
import { PRODUCT_CREATE_REVIEW_RESET } from '../../constants/productConstants'
import './ProductScreen.css'
import './favbutton.css'
//import products from '../../products'


function ProductScreen({match, history}) {
    const[qty, setQty] = useState(1)
    const[rating, setRating] = useState(0)
    const[comment, setComment] = useState('')


    const dispatch = useDispatch()
    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product} = productDetails

    const userLogin = useSelector(state => state.productDetails)
    const { userInfo} = userLogin

    const productReviewCreate = useSelector(state => state.productDetails)
    const { loading:loadingProductReview, 
        error:errorProductReview,
        error:successProductReview} = productReviewCreate


    useEffect(() => {
        dispatch(listProductsDetails(match.params.id))
    }, [dispatch, match])

    //let product = {}

  return (
    <div className='page'>
        <Link to='/' className='btn btn-light my-3'>
            Retour Arriere
        </Link>

        {loading ?
            <Loader/>
            : error
                ? <Message variant='danger'>{error}</Message>
            :(
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
                        categorie: {product.Tags}
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

                        <ListGroup>
                            <Row>
                                <Col>
                                Ajouter aux favoris
                                </Col>
                                <Button className='favbutton'>
                                <i class="fa-solid fa-heart"></i>
                                </Button>
                            </Row>
                        </ListGroup>
                        
                    {/*créer un boutton d'achat, le boutton est désactivé lorsque la condition vérifie que le stock est == à 0
                        
                        <ListGroup.Item>
                            <Button className='btn-round' disabled={product.countInStock == 0} type='button'>Achetter</Button>
                        </ListGroup.Item>
                        
                    */}

                    </ListGroup>
                </Card>
            </Col>

        </Row>
            )
        }

    </div>
  )
}

export default ProductScreen