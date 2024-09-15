import React from 'react';
import './Fancy.scss';
import data from '../../assets/data/fancy_data';

const Fancy = () => {
  return (
    <div className='fancy-container'>
      <div className="fancy container-fluid">

        {data.map((props)=>{
          return (
            <div className="circle-info">
            <img src={props.bg} alt='' className="circle"></img>
            <div className="circle-info-text">
                <p>{props.name}</p>
            </div>
          </div>
          )
        })}
      </div>
      
      <hr />
    </div>
  )
}

export default Fancy
