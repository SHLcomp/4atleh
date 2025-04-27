import React from 'react';
import { Link } from 'react-router-dom';
import './Fancy.scss';
import data from '../../assets/data/fancy_data';

const Fancy = () => {
  return (
    <div className='fancy-container'>
      <div className="fancy container-fluid">

        {data.map((props)=>{
          return (
            <div className="circle-info">
            <Link to={`/${props.category}`}><img src={props.bg} alt='' className="circle"></img></Link>
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
