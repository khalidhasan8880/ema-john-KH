import React from 'react';
import './Review.css'
const Review = ({ product, deleteHandler }) => {


    const { img,name, id, price, shipping } = product

    return (
        <div className='item'>
            <div className='flex'>
                <div className='img'>
                    <img style={{ width: "100%" }} src={img} alt="" />
                </div>
                <div className='detail'>
                    <h5> Product name : {name}</h5>
                    <h4> Shipping : ${shipping}</h4>
                    <h4> Price : {price}</h4>
                </div>
            </div>

            <div>
                <button onClick={()=> deleteHandler(id)}>Delete</button>
            </div>

        </div>
    );
};

export default Review;