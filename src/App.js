import React from 'react';
import CatagoryList from './CatagoryList';
import Navi from './Navi';
import ProductList from './ProductList';

function App() {
  return ( 
    // jsx yapısı ; 
    <div> 
      <Navi> </Navi>
      <CatagoryList></CatagoryList>
      <ProductList></ProductList>
     {/* <h2>Hello from react </h2>
      <h3>Deneme</h3>  */}

    </div>
   // <h3>Deneme</h3> //jsx kurallarına aykırı aynı hiyararşide iki ana component oluşturamazsın
  ); 
}

export default App;
