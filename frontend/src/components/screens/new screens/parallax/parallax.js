import React from 'react'
import { Parallax } from 'react-parallax';
import inlineStyle from './parallax.css';
import magasin from './magasin.JPG'



function ImgParallax() {
    return (
      <div style={{ textAlign: 'center' }}>
        <Parallax bgImage={magasin} strength={500}>
          <div style={{ height: 500 }}>
            <div className="parallax-text" style={inlineStyle}></div>
          </div>
        </Parallax>
        </div>
    )
}

export default ImgParallax;