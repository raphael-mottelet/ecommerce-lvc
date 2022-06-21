import React from 'react'
import {Link} from 'react-router-dom'
import '../bootstrap.min.css'
import './vins-card-1.css'

export default function Product({product}) {
    return (

        <div className='vins__container'>
<div className='cards__container__vins'>
  <div className='cards__wrapper__vins'>
    <ul className='cards__items__vins'>

        <li className='cards__item__vins'>
        <Link className='cards__item__link__vins' to={`/product/${product._id}`}>

          <figure className='cards__item__pic-wrap__vins' data-category={product.price}>{product.stock}
            <Link to={`/product/${product._id}`}>
                
            <img
              className='cards__item__img__vins'
              alt=''
              src={product.image}
            ></img>

            </Link>
          </figure>

          <div className='cards__item__info__vins'>
            <Link to={`/product/${product._id}`}>
            <h5 className='cards__item__text__vins'>{product.name}</h5>
            </Link>
          </div>

        </Link>
      </li>
    </ul>
</div>

</div>
</div>



        /*        <Card className="my-3 p-3 rounded" pill="10">
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
    </Card>*/
    )
}