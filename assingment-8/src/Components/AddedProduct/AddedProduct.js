import './AddedProduct.css';
import { FaTrash } from "@react-icons/all-files/fa/FaTrash";


const AddedProduct = ({ product }) => {

    const { img, name } = product;

    return (
        <div className='added-container'>
            <div className='product-info'>
                <img src={img} alt="" height="40px" />
                <h6 style={{ marginLeft: '10px' }}>{name}</h6>
                <button><FaTrash /></button>
            </div>
        </div>
    );
};

export default AddedProduct;