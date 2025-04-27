import React, { createContext } from "react";
import data_all from '../assets/data/all_products'

export const ShopContext = createContext(null);



//basket
let basket = JSON.parse(localStorage.getItem("cartItems")) || [];
//increment
const incr = (itemId, itemName, itemPrice, itemImage)=>{
  let price = itemPrice;
  let search = basket.find((product)=>product.id === itemId)
  if (search === undefined){
    basket.push(
      {
        id: itemId,
        name: itemName,
        price: itemPrice,
        quantity: 1,
        image: itemImage
      }
    )
  } else {
    search.quantity += 1;
    search.price = price * search.quantity;
  }

  console.log(basket);
  alert("Item was added succesfully");

  saveData(basket);
}
//remove item
const removeItem = (itemId) => {
  console.log("removed");
  
}
// localStorage
function saveData() {
  localStorage.setItem("cartItems", JSON.stringify(basket)); // Store basket as JSON
  console.log("Data saved to localStorage");
}
// Retrieve basket from localStorage
function getData() {
  const savedBasket = localStorage.getItem("cartItems");
  if (savedBasket) {
    basket = JSON.parse(savedBasket); // Parse JSON back to array
  }
}
getData(); //I called this funct after I closed the browser, I hope it doesnt crash anything :)




// context provider
const ShopContextProvider = ({children})=>{  // responsible for the global states
  
  //context value
  const contextValue = {data_all, incr, basket, saveData, getData, removeItem};
  return(
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  )
}
export default ShopContextProvider;





// import { ShopContext } in other files, along with { useContext }...duuh
// wrap ShopContextProvider in App.js, import it without the {}