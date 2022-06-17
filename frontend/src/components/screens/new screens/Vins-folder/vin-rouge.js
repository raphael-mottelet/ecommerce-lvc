import React from 'react';

import Vinsnav from './vins-nav/vins-nav';
import CardItemVins from './CardItem-vins';
import './vins-card.css';
import './vins-font-title.css';
import VinsBackground from './vins-img/vinsbackground.jpg';

import r1 from './vins-img/rouge/atillon.png';
import r2 from './vins-img/rouge/catherinepierre.png';
import r3 from './vins-img/rouge/catherinepierrechinon.png';
import r4 from './vins-img/rouge/chapoutier.png';
import r5 from './vins-img/rouge/chapoutierCDR.png';

import r6 from './vins-img/rouge/chateaumoulinperonier.png';
import r7 from './vins-img/rouge/damedecleve.png';
import r8 from './vins-img/rouge/domaineberthetbondet.png';
import r9 from './vins-img/rouge/domainedetreilles.png';

import r11 from './vins-img/rouge/domainelumiantCDR.png';
import r12 from './vins-img/rouge/domainelumiantolivierCDR.png';
import r13 from './vins-img/rouge/florencealquierpuechmourie.png';
import r14 from './vins-img/rouge/florencealquierrieutord.png';
import r15 from './vins-img/rouge/Gaillhards.png';

import r16 from './vins-img/rouge/gamaydsurvolcan.png';
import r17 from './vins-img/rouge/grolleau.png';
import r18 from './vins-img/rouge/ladilletante.png';
import r19 from './vins-img/rouge/la-mourette.png';
import r20 from './vins-img/rouge/lapoiriere.png';
import r21 from './vins-img/rouge/lepuy.png';
import r22 from './vins-img/rouge/lesmeysonnierCH.png';
import r23 from './vins-img/rouge/lesmeysonnierCH2.png';
import r24 from './vins-img/rouge/merlotrouge.png';
import r25 from './vins-img/rouge/montiriusCDR.png';

import r27 from './vins-img/rouge/pontdecayllus.png';
import r28 from './vins-img/rouge/soleiller.png';
import r29 from './vins-img/rouge/soleiller25cl.png';
import r30 from './vins-img/rouge/souslemont.png';
import r31 from './vins-img/rouge/trinch.png';
import r32 from './vins-img/rouge/codeJuraDomaineBertheetBondetTrio-removebg-preview.png'

export default function VinsRouge() {

  return (
    <>
    <img className='vinsbackground' src={VinsBackground} alt=''/>
    <h2 className='vins-main-title'>Notre selection de vins</h2>
    <Vinsnav/>


<div className='cards__vins'>
<div className='cards__container__vins'>
<h2 className='vins-title'>Vins Rouges</h2>
  <div className='cards__wrapper__vins'>
    <ul className='cards__items__vins'>
      <CardItemVins
        src={r32}
        text='ROUGE COTE JURA TRIO 75CL'
        label='18,49€ En magasin'
      />
      <CardItemVins
        src={r1}
        text='IGP SAUVIGNON ROUGE ATILLON 0,75'
        label='7,45 En magasin'
      />
      <CardItemVins
        src={r2}
        text='CLOS SENECHAL BOURGUEIL 0,75'
        label='20,40€ En magasin'
      />
      <CardItemVins
        src={r3}
        text='CHINON 0,75'
        label='13,95€ En magasin'
      />
      <CardItemVins
        src={r4}
        text='COSTIERES DE NIMES AOC ROUGE'
        label='8,95€ En magasin'
      />
      <CardItemVins
        src={r5}
        text='COTES DU RHONE AOC CHAPOUTIER'
        label='11,39€ En magasin'
      />
      <CardItemVins
        src={r6}
        text='BORDEAUX CHATEAU MOULIN DE PEYRONIN 0,75 - 2019'
        label='8,05€ En magasin'
      />
      <CardItemVins
        src={r7}
        text='VIN DE FRANCE DAME DE CLEVE 0,75'
        label='5,25€ En magasin'
      />
      <CardItemVins
        src={r8}
        text='COTE JURA TRADITION 2016'
        label='17,95€ En magasin'
      />
      <CardItemVins
        src={r9}
        text='DOMAINE DE TREILLE COTE DU RHONE 0,75'
        label='7,85€ En magasin'
      />
      <CardItemVins
        src={r11}
        text='LUMIANT COTE DU RHONE 0,75'
        label='Indisponible'
      />
      <CardItemVins
        src={r12}
        text='LUMIANT OLIVIER COTE DU RHONE 0,75 - 2017'
        label='Indisponible'
      />
      <CardItemVins
        src={r31}
        text='TRINCH 0,75'
        label='12,50€ En magasin'
      />
      <CardItemVins
        src={r13}
        text='PUECH MOURIE 0,75 - 2017'
        label='13,50€ En magasin'
      />
      <CardItemVins
        src={r14}
        text='AOP FAUGERES CUVEE RIEUTORD 0,75'
        label='14,50€ En magasin'
      />
      <CardItemVins
        src={r15}
        text='BORDEAUX LES GAILHARDS 0,75'
        label='8,55€ En magasin'
      />
      <CardItemVins
        src={r16}
        text='I.G.P URFE CEPAGE GAMAY`S NOIR ET TEINT 0,75'
        label='13,50€ En magasin'
      />
      <CardItemVins
        src={r17}
        text='GROLLEAU 0,75'
        label='Indisponible'
      />
      <CardItemVins
        src={r18}
        text='LA DILLETANTE - BOURGUEIL 0,75 - 2015'
        label='13,40€ En magasin'
      />
      <CardItemVins
        src={r19}
        text='LA MAROUETTE MERLOT ROUGE 0,75'
        label='6,15€ En magasin'
      />
      <CardItemVins
        src={r20}
        text='COTE JURA LAPOIRIERE 2018'
        label='17,45€ En magasin'
      />
      <CardItemVins
        src={r21}
        text='CHATEAU LEPUY SAINT-EMILIEN 0,75'
        label='23,50€ En magasin'
      />
      <CardItemVins
        src={r22}
        text='CROZES HERMITAGE AOC MEYS 0,75'
        label='19,55€ En magasin'
      />
      <CardItemVins
        src={r23}
        text='CROZES HERMITAGE AOC MEYS 0,375'
        label='10,69€ En magasin'
      />
      <CardItemVins
        src={r24}
        text='HERISSON MERLOT ROUGE CRD 0,75'
        label='6,05€ En magasin'
      />
      <CardItemVins
        src={r25}
        text='MONTIRIUS - LAMUSE PAPILLE 0,75'
        label='11,10€ En magasin'
      />
      <CardItemVins
        src={r27}
        text='BOURGOGNE PONT DE CAYLLUS 0,75'
        label='5,44€ En magasin'
      />
      <CardItemVins
        src={r28}
        text='VIN DE FRANCE ROUGE SOLEILLER 0,75'
        label='5,05€ En magasin'
      />
      <CardItemVins
        src={r30}
        text='SOUS LE MONT 0,75'
        label='21,50€ En magasin'
      />
      <CardItemVins
        src={r29}
        text='VIN DE FRANCE ROUGE SOLEILLER 0,25'
        label='2,40€ En magasin'
      />
    </ul>
  </div>

</div>
</div>
</>
  );
}
