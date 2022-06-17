import React from 'react';
//import Reactu, { useState } from 'react';

import Vinsnav from './vins-nav/vins-nav';
import CardItem from './CardItem-vins';
import './vins-card.css';
import './vins-font-title.css';
import VinsBackground from './vins-img/vinsbackground.jpg';

import d3 from './vins-img/alcool fort/PapagayoRhum.png';
import d4 from './vins-img/alcool fort/rhumArrangéAnanasPassion.png';
import d5 from './vins-img/alcool fort/CremeDeMirabelle.png'
import d6 from './vins-img/alcool fort/DomaineDeLaMotteletteCidreBrut-removebg-preview.png'
import d7 from './vins-img/alcool fort/DomaineDeLaMotteletteCidreDoux-removebg-preview.png'
import d8 from './vins-img/alcool fort/LaVieClaireCidreBrut-removebg-preview.png'
import d9 from './vins-img/alcool fort/LaVieClaireCidreDoux-removebg-preview.png'

export default function AutreVins() {

  return (
    <>
    <img className='vinsbackground' src={VinsBackground} alt=''/>
    <h2 className='vins-main-title'>Notre selection de vins
    </h2>
    <Vinsnav/>

<div className='cards__vins'>
<div className='cards__container__vins'>
<h2 className='vins-title'>Autres</h2>
  <div className='cards__wrapper__vins__vins'>
    <ul className='cards__items__vins'>
      <CardItem
        src={d6}
        text='DOMAINE DE LA MOTTELETTE CIDRE BRUT 75cl'
        label='4,58€ En magasin'
      />
      <CardItem
        src={d7}
        text='DOMAINE DE LA MOTTELETTE CIDRE DOUX 75cl'
        label='4,58€ En magasin'
      />
      <CardItem
        src={d8}
        text='LA VIE CLAIRE CIDRE BRUT 75cl'
        label='3,99€ En magasin'
      />
      <CardItem
        src={d9}
        text='LA VIE CLAIRE CIDRE DOUX 75cl'
      label='3,99€ En magasin'
      />
      <CardItem
        src={d3}
        text='RHUM BRUN GOLDEN RUM 37.5% 0,70'
        label='29,98€ En magasin'
      />
      <CardItem
        src={d4}
        text='PUNCH AU RHUM BIO ANANAS PASSION 21% 0,70'
        label='39,65€ En magasin'
      />
      <CardItem
        src={d5}
        text='CREME DE MIRABELLE 17% 0,50'
        label='18,85€ En magasin'
      />
    </ul>
  </div>

</div>
</div>
</>
  );
}
