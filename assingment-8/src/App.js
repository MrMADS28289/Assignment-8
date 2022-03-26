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
    const newCart = [...addedProduct, product];
    setAddedProduct(newCart);
  };

  const resetBtn = () => {
    const newCart = [];
    setAddedProduct(newCart);
  }

  const choosOneBtn = () => {

    var objResults = {};
    for (var i = 0; i < 10; i++) {
      var randomElement = addedProduct[Math.floor(Math.random() * addedProduct.length)];
      if (objResults[randomElement]) {
        console.log('sdffff', objResults)
      }
      else {
        console.log('bbbbbbbbbbbbb', objResults)
      }
    }
    console.log(objResults)
  }
  choosOneBtn();


  return (
    <div className="App">
      <Navbar></Navbar>
      <div className='container'>
        <div className='products'>
          {
            products.map(product => <Shop key={product.id} product={product} handleAddToCart={handleAddToCart}></Shop>)
          }
        </div>
        <div className='cart-container'>
          <h4>Selected Product</h4>
          {
            addedProduct.map((product) => <AddedProduct product={product}></AddedProduct>)
          }
          <button className='choos-one-btn'>Choos one</button>
          <button onClick={resetBtn} className='reset-btn'>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;

