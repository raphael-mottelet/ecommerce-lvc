import React from 'react'
import { Parallax } from 'react-parallax';
import inlineStyle from './petitprix-parallax.css';
import petitprixP from '../petitprix-img/promo.JPG';

function PetitprixParallax() {
    return (
      <div style={{ textAlign: 'center' }}>
        <Parallax bgImage={petitprixP} strength={500}>
          <div style={{ height: 500 }}>
            <div className="parallax-text" style={inlineStyle}></div>
          </div>
        </Parallax>
        </div>
    )
}

export default PetitprixParallax;