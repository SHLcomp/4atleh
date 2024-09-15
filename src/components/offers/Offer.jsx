import React from 'react';
import './Offer.scss';
import p1 from '../../assets/images/products/nature2.jpg'

const Offer = () => {
  return (
    <div className='container'>
      <div className='box'>
      <div className="offer-div">
        <div className="img">
          <img src={p1} alt="" />
        </div>
        <div className="info">
          <h1>Special offers made specially for you!</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi est maiores nobis doloremque quas beatae cupiditate 
            incidunt. Mollitia vitae, corrupti debitis repellat voluptas, facilis repudiandae animi tempore alias expedita dicta.</p>

        </div>
      </div>
    </div>
    </div>
  )
};

export default Offer;
