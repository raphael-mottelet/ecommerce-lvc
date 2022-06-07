import React from 'react';
import { Link } from 'react-router-dom';

function CardItemVins(props) {
  return (
    <>
      <li className='cards__item__vins'>
        <Link className='cards__item__link__vins' to={props.path}>
          <figure className='cards__item__pic-wrap__vins' data-category={props.label}>
            <img
              className='cards__item__img__vins'
              alt=''
              src={props.src}
            />
          </figure>
          <div className='cards__item__info__vins'>
            <h5 className='cards__item__text__vins'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItemVins;
