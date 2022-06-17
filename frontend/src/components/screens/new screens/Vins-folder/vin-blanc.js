import React from 'react';
//import Reactu, { useState } from 'react';

import Vinsnav from './vins-nav/vins-nav';
import CardItemVins from './CardItem-vins';
import './vins-card.css';
import './vins-font-title.css';
import VinsBackground from './vins-img/vinsbackground.jpg';

import b1 from './vins-img/blanc/BlancPoire.png';
import b2 from './vins-img/blanc/ChardonnayBlanc.png';
import b3 from './vins-img/blanc/CharlesFreyGewurztramineur.png';
import b4 from './vins-img/blanc/CharlesFreyRiesling.png';
import b5 from './vins-img/blanc/CuvéeLeSoleiller.png';

import b6 from './vins-img/blanc/EmilianGiletQuintaine.png';
import b7 from './vins-img/blanc/LaDilletante.png';
import b8 from './vins-img/blanc/LaMarouretteChardonay.png';
import b10 from './vins-img/blanc/LesPierresBlanchesCDB.png';

import r10 from './vins-img/blanc/domaineflorencealquier.png';
import r26 from './vins-img/blanc/petitchablis.png';

import b11 from './vins-img/blanc/MChapoutier.png';
import b12 from './vins-img/blanc/MuscatDeRivesaltes.png';
import b14 from './vins-img/blanc/LaMarouretteSansSulfite.png';
import b15 from './vins-img/blanc/UbyBioN24.png';
import b16 from './vins-img/blanc/codeJuraDomaineBertheetBondetPoiriere-removebg-preview.png'
import b17 from './vins-img/blanc/codeJuraDomaineBertheetBondet-removebg-preview.png'
import b18 from './vins-img/blanc/codeJuraDomaineBertheetBondetTradition-removebg-preview.png'


export default function VinBlanc() {

  return (
    <>
    <img className='vinsbackground' src={VinsBackground} alt=''/>
    <h2 className='vins-main-title'>Notre selection de vins
    </h2>
    <Vinsnav/>

<div className='cards__vins'>
<div className='cards__container__vins'>
<h2 className='vins-title'>Vins Blancs</h2>
  <div className='cards__wrapper__vins'>
    <ul className='cards__items__vins'>
      
      <CardItemVins
        src={b16}
        text='COTE JURA LAPOIRIERE 75CL'
        label='17,45€ En magasin'
      />
      <CardItemVins
        src={b17}
        text='SAVAGNIER (SAVAGNIN EN CUVE) - 2020 - 75CL'
        label='4,69€ En magasin'
      />
      <CardItemVins
        src={b18}
        text='COTE JURA TRADITION 75CL'
        label='19,75€ En magasin'
      />
      <CardItemVins
        src={b1}
        text='BABV BLANC POIRE BIO 75CL'
        label='4,69€ En magasin'
      />
      <CardItemVins
        src={b2}
        text='CHARDONNAY BLANC 0,75'
        label='6,99€ En magasin'
      />
      <CardItemVins
        src={b3}
        text='
        GEWURZTRAMINER AOC ALSACE BLC 0,75'
        label='13,19€ En magasin'
      />
      <CardItemVins
        src={b4}
        text='RIESLING AOC ALSACE BLANC 0,75'
        label='12,15€ En magasin'
      />
      <CardItemVins
        src={b5}
        text='VDF BLANC SOLEILLER 25 CL'
        label='2,65€ En magasin'
      />
      <CardItemVins
        src={b6}
        text='BOURGOGNE BLANC - COTE MACONNAISE 0,75 - 2017'
        label='17,50€ En Magasin'
      />
      <CardItemVins
        src={b7}
        text='LA DILETTANTE BLANC- VOUVRAY 0,75 - 2016'
        label='13,4€ En magasin'
      />
      <CardItemVins
        src={b8}
        text='IGP OC MAROUETTE CHARDON BLC'
        label='7,09€ En magasin'
      />
      <CardItemVins
        src={b15}
        text='UBY BIO N24 BLANC 0,75'
        label='8,20€ En magasin'
      />
      <CardItemVins
        src={b10}
        text='LES PIERRES BLANCHES 0,75 - 2018'
        label='32,52€ En magasin'
      />
      <CardItemVins
        src={b11}
        text='VDP COTEAUX ARDEC MIRABEL 0,75'
        label='12,95€ En magasin'
      />
      <CardItemVins
        src={b12}
        text='AOC MUSCAT DE RIVESALTES 0,5'
        label='9,25€ En magasin'
      />
      <CardItemVins
        src={b14}
        text='LA MAROUETTE SANS SULFITE 0,75'
        label='7,35€ En magasin'
      />
      <CardItemVins
        src={r10}
        text='AOP FAUGERES BLANC CUVEE PUECH MOURIE BLANC'
        label='11,90€ En magasin'
      />
      <CardItemVins
        src={r26}
        text='BOURGOGNE PETIT CHABLIS 0,75 - 2019'
        label='17,80€ En magasin'
      />
      <CardItemVins
        src={r26}
        text='BOURGOGNE CHABLIS 0,75 - 2019'
        label='20,30€ En magasin'
      />
    </ul>
  </div>

</div>
</div>
</>
  );
}