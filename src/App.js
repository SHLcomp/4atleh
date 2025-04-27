import './App.css';
import Navbar from './components/navbar/Navbar.jsx';
import Footer from './components/footer/Footer.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import Cart from './pages/cart/Cart.jsx';
import Fav from './pages/fav/Fav.jsx';
import Signlogin from './pages/signlogin/Signlogin.jsx';
import ShopAll from './pages/shopAll/ShopAll.jsx';
import AllCat from './components/AllCat/AllCat.jsx';
import AllCat2 from './components/AllCat/AllCat2.jsx';
import ProductFilter from './components/productFilter/ProductFilter.jsx';
import ShopContextProvider from './context/ShopContext.jsx'; //needed to wrap this here, also in ShopAll, to wrap <Product />

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <BrowserRouter>
      <Navbar />

    {/* navbar routes */}
    <Routes>
      <Route path='/' element={<Home />}></Route> {/* added the home page */}
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/favourites' element={<Fav />}></Route>
      <Route path='/signlogin' element={<Signlogin />}></Route>
      <Route path='/shop_all' element={<ShopAll />}></Route>


      {/* categories filter */}
      <Route path='/Citrus' element={<AllCat category="Citrus"/>}></Route>
      <Route path='/Bamboo' element={<AllCat category="Bamboo"/>}></Route>
      <Route path='/Aquatic' element={<AllCat category="Aquatic"/>}></Route>
      <Route path='/Roses' element={<AllCat category="Roses"/>}></Route>

      <Route path='/Toner' element={<AllCat category="Toner"/>}></Route>
      <Route path='/Tint' element={<AllCat category="Tint"/>}></Route>
      <Route path='/HairPer' element={<AllCat category="HairPer"/>}></Route>
      <Route path='/HairOil' element={<AllCat category="HairOil"/>}></Route>

      <Route path='/SkinProducts' element={<AllCat2 sub_category="SkinProducts"/>}></Route>
      <Route path='/Indoor' element={<AllCat2 sub_category="Indoor"/>}></Route>
      <Route path='/Outdoor' element={<AllCat2 sub_category="Outdoor"/>}></Route>
      <Route path='/HairProducts' element={<AllCat2 sub_category="HairProducts"/>}></Route>
      <Route path='/Sales' element={<AllCat2 sub_category="Sales"/>}></Route>

      

      {/* products filter */}
      {/* products route and id path */}
      <Route path='/product' element={<ProductFilter/>}>
      {/* id path in a sub route */}
      <Route path=':productId' element={<ProductFilter />}></Route>
      </Route>

    </Routes>
    
      
      
      <Footer />
      </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
};

export default App;
