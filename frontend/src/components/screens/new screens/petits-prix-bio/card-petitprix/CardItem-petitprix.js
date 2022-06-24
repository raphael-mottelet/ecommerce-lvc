import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item__pp'>
        <Link className='cards__item__link__pp' to={props.path}>
          <figure className='cards__item__pic-wrap__pp' data-category={props.label}>
              <img
              className='cards__item__img__pp'
              alt=''
              src={props.src}
            />
          </figure>
          <div className='cards__item__info__pp'>
            <h5 className='cards__item__text__pp'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
