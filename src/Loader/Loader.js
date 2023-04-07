
import { getShoppingCart } from "../utilities/fakedb";

const cartProductLoader = async () => {
    const res = await fetch('products.json')
    const products = await res.json()

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
    return savedCard
}

export default cartProductLoader;