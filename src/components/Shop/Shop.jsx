import { faCommentsDollar } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
   
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        const ShoppingCart = getShoppingCart();
        const savedCard = []
        // object in loop
        for (const id in ShoppingCart) {
            const productFromLocalStorage = products.find(product => product.id === id)
            if (productFromLocalStorage) {
                productFromLocalStorage.quantity = ShoppingCart[id]
                savedCard.push(productFromLocalStorage)
            }


        }
        setCart(savedCard)
    }, [products])


    console.log(cart);


    const handleAddToCart = (product) => {
        const matchedPd =  cart.find(pd=>pd.id === product.id)
        let newCart = []
        if (!matchedPd) {
            product.quantity = 1;
            newCart = [...cart, product]
        }else{
            matchedPd.quantity = matchedPd.quantity + 1;
            const remaining = cart.filter(pd=> pd.id !== product.id)
            newCart = [...remaining, matchedPd]
        }
        setCart(newCart)
        addToDb(product.id)
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} ></Cart>
            </div>
        </div>
    );
};

export default Shop