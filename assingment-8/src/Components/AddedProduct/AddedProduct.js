import React from 'react';

const AddedProduct = ({ product }) => {

    const { img, name } = product;
    // console.log(product)
    return (
        <div>
            <h5>selected products</h5>
            <div className='product-info'>
                <img src={img} alt="" />
                <h6>{name}</h6>
            </div>
        </div>
    );
};

export default AddedProduct;