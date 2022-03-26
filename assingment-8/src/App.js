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

  const handleAddToCart = (product) => {
    // console.log(product)
    const newCart = [...addedProduct, product];
    setAddedProduct(newCart);
  };

  // console.log(addedProduct)

  return (
    <div className="App">
      <Navbar></Navbar>
      <div className='container'>
        <div className='products'>
          {
            products.map(product => <Shop key={product.id} product={product} handleAddToCart={handleAddToCart}></Shop>)
          }
        </div>
        <div>
          {
            addedProduct.map((product) => <AddedProduct product={product}></AddedProduct>)
          }
        </div>
      </div>
    </div>
  );
}

export default App;
