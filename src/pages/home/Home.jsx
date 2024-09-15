import React from 'react';
import Fancy from '../../components/fancydivs/Fancy.jsx';
import Normal from '../../components/normal/Normal.jsx';
import PlantTypes from '../../components/plantTypes/PlantTypes.jsx';
import ProductTypes from '../../components/skinhair/ProductTypes.jsx';
import Offer from '../../components/offers/Offer.jsx';

const Home = () => {
  return (
    <div>
        <Fancy />
        <Normal />
        <PlantTypes />
        <Offer />
        <ProductTypes />
    </div>
  )
}

export default Home;
