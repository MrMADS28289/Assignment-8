import './Shop.css';

const Shop = ({ product }) => {
    // console.log(product)
    const { name, price, img } = product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h1>{name}</h1>
                <p>Price: ${price}</p>
            </div>
            <button>
                <p>Add to cart</p>
            </button>
        </div>
    );
};

export default Shop;