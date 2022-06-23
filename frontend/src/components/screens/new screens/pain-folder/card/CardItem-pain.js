import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item__pain'>
        <Link className='cards__item__link__pain' to={props.path}>
          <figure className='cards__item__pic-wrap__pain' data-category={props.label}>
            <img
              className='cards__item__img__pain'
              alt=''
              src={props.src}
            />
          </figure>
          <div className='cards__item__info__pain'>
            <h5 className='cards__item__text__pain'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
