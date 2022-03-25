import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Components/Shop/Shop';

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('db.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, []);

  return (
    <div className="App">
      {/* <Navbar></Navbar> */}
      <div className='container'>
        <div className='products'>
          {
            products.map(product => <Shop key={product.id} product={product}></Shop>)
          }
        </div>
        <div>
          <h5>selected products</h5>
        </div>
      </div>
    </div>
  );
}

export default App;
