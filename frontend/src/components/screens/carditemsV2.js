import './vins-card.css'
import './vins-font-title.css'

import axios from 'axios'

import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

import { useDispatch, useSelector} from 'react-redux'
import { listProductsDetails } from '../../actions/productActions'
import './ProductScreen.css'
import './favbutton.css'


export default function CardItemV2(match) {

    const [products, setProducts] = useState([])

    const productDetails = useSelector(state => state.productDetails)
    const {product} = productDetails

  return (


      <li className='cards__item__vins'>
        <Link className='cards__item__link__vins' to={`/product/${products._id}`}>
          <figure className='cards__item__pic-wrap__vins' data-category={product.price}>
            <Link to={`/product/${products._id}`}>
            <img
              className='cards__item__img__vins'
              alt=''
              src={product.image}
            ></img>
            </Link>
          </figure>
          <div className='cards__item__info__vins'>
            <Link to={`/product/${products._id}`}>
            <h5 className='cards__item__text__vins'>{product.name}</h5>
            </Link>
          </div>
        </Link>
      </li>
  );
}