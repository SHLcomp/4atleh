import React from 'react';
import './ProductTypes.scss';
import data from "../../assets/data/productTypes";

const ProductTypes = () => {
  return (
    <div className='all-types'>
      <div className="title">
        <h1>Products We have:</h1> 
        <hr /> 
        </div>
      <div className="types container-fluid">

        {data.map((props)=>{
          return (
            <div className="type">
          <div className="img">
            <img className='img-fluid' src={props.image} alt="" />
          </div>
          <div className="text">
            <h2>{props.name}</h2>
            <h6>{props.des}</h6>
            <p>Products: {props.number_items}</p>
          </div>
        </div>
          )
        })}

      </div>
      <hr />
    </div>
  )
}

export default ProductTypes
