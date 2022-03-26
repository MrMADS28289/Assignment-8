import './Shop.css';

const Shop = ({ product, handleAddToCart }) => {
    // console.log(product)
    const { name, price, img } = product;



    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-details'>
                <h1>{name}</h1>
                <p>Price: ${price}</p>
            </div>
            <button onClick={() => handleAddToCart(product)}>
                <p>Add to cart</p>
            </button>
        </div>
    );
};

export default Shop;