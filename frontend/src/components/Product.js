import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import {Link} from 'react-router-dom'

function Product({product}) {
    return (
        <Card className="my-3 p-3 rounded" pill="10">
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image}/>
            </Link>

            <Card.Body>
            <Link to={`/product/${product._id}`}>
                <Card.Title as="div">
                    <strong>{product.name}</strong>
                </Card.Title>
            </Link>
            </Card.Body>

            <Card.Text as="div">
                <div className="my-3">
                    {product.rating} avec {product.numReviews} avis
                    <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
                </div>
            </Card.Text>

            <Card.Text as="h4">
            €{product.price}
            </Card.Text>
        </Card>
    )
}

export default Product; 