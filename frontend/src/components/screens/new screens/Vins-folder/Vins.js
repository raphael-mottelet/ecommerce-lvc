import React from 'react';
import Reactu, { useState } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../../Navbar';
import CardItemVins from './CardItem-vins'
import './vins-card.css'
import './vins-nav.css'
import VinsBackground from './vins-img/vinsbackground.jpg'
import Footer from '../../footer-import/containers/footer'

import blanc from './vins-img/blanc/ubybio.png'
import rose from './vins-img/rosé/CDPr.png'
import rouge from './vins-img/rouge/la-mourette.png'



export default function Vins() {

  return (
    <>
    <Navbar/>
    <img className='vinsbackground' src={VinsBackground}/>
    <h2 className='vins-main-title'>Notre selection de vins
    </h2>

    <div className='vins-container'>
      <nav className='vins-nav'>
        <ul className=''>
          <li className='vins-li'>
          <Link
              to='/vinrouge'
              className='vins-liens'
            >
              Vins Rouges
            </Link>
          </li>
          <li className='vins-li'>
          <Link
              to='/vinblanc'
              className='vins-liens'
            >
              Vins Blancs
            </Link>
          </li>
          <li className='vins-li'>
          <Link
              to='/vinrose'
              className='vins-liens'
            >
              Vins Rosés
            </Link>
          </li>
          <li className='vins-li'>
          <Link
              to='/champagne'
              className='vins-liens'
            >
              Champagnes
            </Link>
          </li>
          <li className='vins-li'>
          <Link
              to='/autrevins'
              className='vins-liens'
            >
              Autres Vins
            </Link>

          </li>
        </ul>
      </nav>
    </div>

<div className='cards'>
<div className='cards__container'>
<h2 className='vins-title'>Promotions</h2>
  <div className='cards__wrapper'>
    <ul className='cards__items'>
      <CardItemVins
        src={rouge}
        text='Puech-mourie, 150 en magasin'
        label='1000000000000000000000000000000000000000à'
        path=''
      />
      <CardItemVins
        src={rouge}
        text='Puech-mourie'
        label=''
        path=''
      />
      <CardItemVins
        src={rouge}
        text='Nos Fruits et légumes'
        label=''
        path='/'
      />
      <CardItemVins
        src={rouge}
        text='Nos Fruits et légumes'
        label=''
        path='/'
      />
    </ul>
    <ul className='cards__items'>
      <CardItemVins
        src={rouge}
        text='Nos Produits du moment'
        label=''
        path='/services'
      />
      <CardItemVins
        src={rouge}
        text='Profitez du rayon vrac dès maitenant'
        label=''
        path='/products'
      />
      <CardItemVins
        src={rouge}
        text='Nos Fruits et légumes'
        label=''
        path='/'
      />
      <CardItemVins
        src={rouge}
        text='Nos Fruits et légumes'
        label=''
        path='/'
      />
    </ul>
  </div>

  <h2 className='vins-title'>Vins Blancs</h2>
  <div className='cards__wrapper'>
    <ul className='cards__items'>
      <CardItemVins
        src={blanc}
        text='Nos Produits du moment'
        label=''
        path='/services'
      />
      <CardItemVins
        src={blanc}
        text='Profitez du rayon vrac dès maitenant'
        label=''
        path='/products'
      />
      <CardItemVins
        src={blanc}
        text='Nos Fruits et légumes'
        label=''
        path='/'
      />
      <CardItemVins
        src={blanc}
        text='Nos Fruits et légumes'
        label=''
        path='/'
      />
    </ul>
    <ul className='cards__items'>
      <CardItemVins
        src={blanc}
        text='Nos Produits du moment'
        label=''
        path='/services'
      />
      <CardItemVins
        src={blanc}
        text='Profitez du rayon vrac dès maitenant'
        label=''
        path='/products'
      />
      <CardItemVins
        src={blanc}
        text='Nos Fruits et légumes'
        label=''
        path='/'
      />
      <CardItemVins
        src={blanc}
        text='Nos Fruits et légumes'
        label=''
        path='/'
      />
    </ul>
  </div>

  <h2 className='vins-title'>Rosé</h2>
  <div className='cards__wrapper'>
    <ul className='cards__items'>
      <CardItemVins
        src={rose}
        text='Nos Produits du moment'
        label=''
        path='/services'
      />
      <CardItemVins
        src={rose}
        text='Profitez du rayon vrac dès maitenant'
        label=''
        path='/products'
      />
      <CardItemVins
        src={rose}
        text='Nos Fruits et légumes'
        label=''
        path='/'
      />
      <CardItemVins
        src={rose}
        text='Nos Fruits et légumes'
        label=''
        path='/'
      />
    </ul>
    <ul className='cards__items'>
      <CardItemVins
        src={rose}
        text='Nos Produits du moment'
        label=''
        path='/services'
      />
      <CardItemVins
        src={rose}
        text='Profitez du rayon vrac dès maitenant'
        label=''
        path='/products'
      />
      <CardItemVins
        src={rose}
        text='Nos Fruits et légumes'
        label=''
        path='/'
      />
      <CardItemVins
        src={rose}
        text='Nos Fruits et légumes'
        label=''
        path='/'
      />
    </ul>
  </div>

</div>
</div>
<Footer />
</>
  );
}
