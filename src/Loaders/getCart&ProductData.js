import { getStoredCart } from "../Utility/fackDB";



export const productsAndCartData = async ()=>{
    const productData = await fetch('products.json')
    const products = await productData.json()

    const savedCart = getStoredCart();
    let cart = [];
    for(const id in savedCart){
        const foundProduct = products.find(product => product.id === id)
        if(foundProduct){
            foundProduct.quantity = savedCart[id]
            cart.push(foundProduct)
        }
    }
    return {cart, products};
}

//export {productsAndCartData};