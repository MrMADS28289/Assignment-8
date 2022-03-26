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

    const addd = addedProduct.find(cartProduct => product.id === cartProduct.id);
    if (addd) {
      alert('You already select this product!')
    }
    else if (addedProduct.length > 3) {
      alert('You can add only 4 items!')
    }
    else {
      const newCart = [...addedProduct, product];
      setAddedProduct(newCart);
    }

  };

  const resetBtn = () => {
    document.getElementById('choos-btn').style.display = 'inline';
    const newCart = [];
    setAddedProduct(newCart);
  }

  const choosOneBtn = () => {

    document.getElementById('choos-btn').style.display = 'none';
    const randomItem = addedProduct[Math.floor(Math.random() * addedProduct.length)];

    const newCart = [randomItem];
    setAddedProduct(newCart);

  }


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
            addedProduct.map((product) => <AddedProduct key={product.id} product={product}></AddedProduct>)
          }
          <button id='choos-btn' className='choos-one-btn' onClick={choosOneBtn}>Choos one</button>
          <button onClick={resetBtn} className='reset-btn'>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;

