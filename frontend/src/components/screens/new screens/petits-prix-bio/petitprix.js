import React from 'react'
import './petitprix.css'
import './card-petitprix/Card-petitprix.css'
import CardItemP from './card-petitprix/CardItem-petitprix'
import PPnav from './pp-nav/pp-nav'

import pp1 from './card-petitprix/card-img/1.png'
import pp2 from './card-petitprix/card-img/2.png'
import pp3 from './card-petitprix/card-img/3.png'
import pp4 from './card-petitprix/card-img/4.png'
import pp5 from './card-petitprix/card-img/5.png'
import pp6 from './card-petitprix/card-img/6.png'
import pp7 from './card-petitprix/card-img/7.png'
import pp8 from './card-petitprix/card-img/8.png'
import pp9 from './card-petitprix/card-img/9.png'
import pp10 from './card-petitprix/card-img/10.png'
import pp11 from './card-petitprix/card-img/11.png'
import pp12 from './card-petitprix/card-img/12.png'
import pp13 from './card-petitprix/card-img/13.png'
import pp14 from './card-petitprix/card-img/14.png'
import pp15 from './card-petitprix/card-img/15.png'
import pp16 from './card-petitprix/card-img/16.png'
import pp17 from './card-petitprix/card-img/17.png'
import pp18 from './card-petitprix/card-img/18.png'
import pp19 from './card-petitprix/card-img/19.png'
import pp20 from './card-petitprix/card-img/20.png'

export default function PetitPrix() {
    return(
        <>
        <div className='tampoon-petitprix'>.</div>
        <div className='petitprix-page-container'>
            <h1 className='text-title-petitprix'>Les Petits Prix Bio</h1>
            <div className='content-container-petitprix'>

                <div>
                    <h2 className='titre-pp'></h2>
                </div>

                <PPnav/>
                    <div className='boostersonmois'>
                        <img src={''} alt='' />
                    </div>
                <p className='balise-p-petitprix'>
                </p>
                <p className='balise-p-petitprix'>
                </p>

            <div className='cards__pp'>
                <div className='cards__wrapper__pp'>
                <ul className='cards__items__pp'>
                <CardItemP
                src={pp1}
                text='Spaghetti Demi-complètes'
                label='0,99€ en magasin'
                />
                <CardItemP
                src={pp2}
                text='Lentilles Corail en torsades'
                label='3,09€ en magasin'
                />
                <CardItemP
                src={pp3}
                text='Ris Basmati long blanc'
                label='2,85€ en magasin'
                />
                <CardItemP
                src={pp4}
                text='Quinoa des Andes'
                label='4,45€ en magasin'
                />
                <CardItemP
                src={pp5}
                text='Poids Chiches de Gascogne'
                label='2,69€ en magasin'
                />
                <CardItemP
                src={pp6}
                text='Graines de Tournesol'
                label='2,45€ en magasin'
                />
                <CardItemP
                src={pp7}
                text='Coquillettes Blanches'
                label='0,99€ en magasin'
                />

                <CardItemP
                src={pp8}
                text='Farine de Blé T65 1KG'
                label='1,99 en magasin'
                />
                <CardItemP
                src={pp9}
                text='Sauce Tomate et Aubergines grillées'
                label='1,99€ en magasin'
                />
                <CardItemP
                src={pp10}
                text='Sardines entières'
                label='3,69€ en magasin'
                />



                <CardItemP
                src={pp11}
                text='Huile Vierge de Noix de COCO'
                label='5,69€ en magasin'
                />
                <CardItemP
                src={pp12}
                text='Crème Entière Fluide'
                label='1,35€ en magasin'
                />
                <CardItemP
                src={pp13}
                text='Soupe Potiron Chataigne'
                label='2,99€ en magasin'
                />
                <CardItemP
                src={pp14}
                text="Huile d'Olive Vierge extra"
                label='5,99€ en magasin'
                />
                <CardItemP
                src={pp15}
                text="Jus d'Orange Carotte Citron"
                label='3,49€ en magasin'
                />
                <CardItemP
                src={pp16}
                text='Passata'
                label='1,65€ en magasin'
                />
                <CardItemP
                src={pp17}
                text='Boisson Riz Nature'
                label='1,65€ en magasin'
                />

                <CardItemP
                src={pp18}
                text='Jus de Citron'
                label='2,39€ en magasin'
                />
                <CardItemP
                src={pp19}
                text='Vinaigre Balsamique'
                label='5,39€ en magasin'
                />
                <CardItemP
                src={pp20}
                text='Jus de Pomme Tetra'
                label='1,99€ en magasin'
                />
            </ul>
            </div>
            </div>
        </div>

    </div>
        </>
)
}