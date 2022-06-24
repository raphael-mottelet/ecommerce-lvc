import React from 'react'
import './petitprix.css'
import './card-petitprix/Card-petitprix.css'
import CardItemP from './card-petitprix/CardItem-petitprix'
import PPnav from './pp-nav/pp-nav'

import pp1 from './card-petitprix/card-img/2/1a.png'
import pp2 from './card-petitprix/card-img/2/2a.png'
import pp3 from './card-petitprix/card-img/2/3a.png'
import pp4 from './card-petitprix/card-img/2/4a.png'
import pp5 from './card-petitprix/card-img/2/5a.png'
import pp6 from './card-petitprix/card-img/2/6a.png'
import pp7 from './card-petitprix/card-img/2/7a.png'
import pp8 from './card-petitprix/card-img/2/8a.png'
import pp9 from './card-petitprix/card-img/2/9a.png'
import pp10 from './card-petitprix/card-img/2/10a.png'
import pp11 from './card-petitprix/card-img/2/11a.png'
import pp12 from './card-petitprix/card-img/2/12a.png'
import pp13 from './card-petitprix/card-img/2/13a.png'
import pp14 from './card-petitprix/card-img/2/14a.png'
import pp15 from './card-petitprix/card-img/2/15a.png'
import pp16 from './card-petitprix/card-img/2/16a.png'
import pp17 from './card-petitprix/card-img/2/17a.png'
import pp18 from './card-petitprix/card-img/2/18a.png'
import pp19 from './card-petitprix/card-img/2/19a.png'

export default function PetitPrix() {
    return(
        <>
        <div className='tampoon-petitprix'>.</div>
        <div className='petitprix-page-container'>
            <h1 className='text-title-petitprix'>La Promo du Mois</h1>
            <div className='content-container-petitprix'>

                <div>
                    <h2 className='titre-pp'></h2>
                </div>

                <PPnav/>

                <p className='balise-p-petitprix'>
                </p>
                <p className='balise-p-petitprix'>
                </p>

            <div className='cards__pp'>
                <div className='cards__wrapper__pp'>
                <ul className='cards__items__pp'>
                <CardItemP
                src={pp1}
                text='Bioprotus'
                label='12,89€ en magasin'
                />
                <CardItemP
                src={pp2}
                text='Infusion Verveine'
                label='3,80€ en magasin'
                />
                <CardItemP
                src={pp3}
                text='Savon de Marseille 300ML'
                label='4,65€ en magasin'
                />
                <CardItemP
                src={pp4}
                text="Huile Noyaux d'Abricots 50ML"
                label='7,95€ en magasin'
                />
                <CardItemP
                src={pp5}
                text='Shampoing usage fréquent 200ML'
                label='4,99€ en magasin'
                />
                <CardItemP
                src={pp7}
                text='Crème Main 50ML'
                label='5,09€ en magasin'
                />

                <CardItemP
                src={pp8}
                text='Psyllium Blond en poudre'
                label='6,99 en magasin'
                />

                <CardItemP
                src={pp11}
                text='Pollen bio 220g'
                label='12,95€ en magasin'
                />
                <CardItemP
                src={pp12}
                text='Lait Corporel 500ML'
                label='12,79€ en magasin'
                />
                <CardItemP
                src={pp14}
                text="Lessive liquide 1.5L"
                label='5,99€ en magasin'
                />
                <CardItemP
                src={pp15}
                text="Liquide vaisselle aux Agrumes 1L"
                label='3,30€ en magasin'
                />
                <CardItemP
                src={pp16}
                text='Crème de douche coco 1L'
                label='11,99€ en magasin'
                />

                <CardItemP
                src={pp18}
                text="Jus d'AloéVera 1L"
                label='21,65€ en magasin'
                />
                <CardItemP
                src={pp19}
                text='Sève de Bouleau infusée à la framboise 3L'
                label='22,50€ en magasin'
                />
            </ul>
            </div>
            </div>
        </div>

    </div>
        </>
)
}