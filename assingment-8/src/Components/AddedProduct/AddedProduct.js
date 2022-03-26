
import './AddedProduct.css'

const AddedProduct = ({ product }) => {

    const { img, name } = product;

    return (
        <div className='added-container'>
            <div className='product-info'>
                <img src={img} alt="" height="40px" />
                <h6 style={{ marginLeft: '10px' }}>{name}</h6>
            </div>
        </div>
    );
};

export default AddedProduct;