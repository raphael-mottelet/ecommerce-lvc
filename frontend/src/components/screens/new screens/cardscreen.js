import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card, ListGroupItem} from 'react-bootstrap'

import { useDispatch, useSelector} from 'react-redux'
import { listProductsDetails } from '../../../actions/productActions'
import { PRODUCT_CREATE_REVIEW_RESET } from '../../../constants/productConstants'
import './cardscreen.css'
//import products from '../../products'


function VinsScreen({match, history}) {
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

        return (
          <>
            <li className='cards__item__vins'>
              <Link className='cards__item__link__vins' to='/'>
                <figure className='cards__item__pic-wrap__vins' data-category={product.Tags}>
                  <img
                    className='cards__item__img__vins'
                    alt=''
                    src={product.Image}
                  />
                </figure>
                <div className='cards__item__info__vins'>
                  <h5 className='cards__item__text__vins'>{product.name}</h5>
                </div>
              </Link>
            </li>
          </>
        );
      }
      
      export default VinsScreen;
    