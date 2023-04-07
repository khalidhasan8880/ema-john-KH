import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import '../Shop/Shop.css'
import { useLoaderData,  } from 'react-router-dom';
import Review from './Review/Review';
import { removeFromDb } from '../../utilities/fakedb';
const Orders = () => {

const savedCart = useLoaderData()
const [cart, setCart]  = useState(savedCart)

function deleteHandler(id) {
    const remaining = cart.filter(product=> product.id !== id)
    setCart(remaining)
    removeFromDb(id)
}
    return (
        <div className='shop-container'>
            <div className="review-items-container">
               {
                cart.map(pd=> <Review key={pd.id} deleteHandler={deleteHandler}  product={pd}></Review>)
               }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;