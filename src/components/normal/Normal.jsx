import React from 'react';
import './Normal.scss'
import { Link } from 'react-router-dom';
import img from '../../assets/images/products/nature.jpg';

const Normal = () => {
  return (
    <div className='all'>
      <div className="normal container-fluid">
      <div className="container-fluid normal-container">

    <div className="left">
      <img src={img} alt="" />
    </div>

    <div className="right">
      <div className="text">
        <h3>Shop at the best place for plants and organic products!</h3>
        <p>Buy the best quality plants and products that are all organic.</p>
        <div className="cta">
          <Link to={"/shop_all"} className='a'><button className="btn">Shop Now</button></Link>
        </div>
      </div>
    </div>


    </div>
          </div>

      </div>
  )
}

export default Normal
