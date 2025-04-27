import React from 'react';
import './PlantDetails.scss';


const PlantDetails = (props) => {
  const {product} = props;
  return (
    <div className='all-div container-fluid'>
      

      <div className="plant-info">
            <h5>Plant Details</h5>
            <p>Category: <span>{product.category}</span></p>
            <p>Water needs: <span>{product.water}</span> </p>
            <p>Light exposure needs: <span>{product.exposure}</span></p>
            <p>Season: <span>{product.season}</span></p>
          </div>


    </div>
  )
};


export default PlantDetails;
