import { useEffect, useState } from 'react';
import './App.css';
import AddedProduct from './Components/AddedProduct/AddedProduct';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Components/Shop/Shop';

function App() {

  const [products, setProducts] = useState([]);
  const [addedProduct, setAddedProduct] = useState([]);

  useEffect(() => {
    fetch('db.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, []);

  const selectedProduct = (product) => {
    // console.log(product)
    setAddedProduct(product);
  }

  // console.log(addedProduct)

  return (
    <div className="App">
      {/* <Navbar></Navbar> */}
      <div className='container'>
        <div className='products'>
          {
            products.map(product => <Shop key={product.id} product={product} selectedProduct={selectedProduct}></Shop>)
          }
        </div>
        <div>
          <AddedProduct product={addedProduct}></AddedProduct>
        </div>
      </div>
    </div>
  );
}

export default App;
