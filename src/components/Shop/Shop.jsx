import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../Cards/ProductCard';
import { addToDb } from '../../Utility/fackDB';
import { productContext, cartContext } from '../../App';
import { toast } from 'react-hot-toast';

const Shop = () => {
    const products = useContext(productContext);
    const [cartItem, setCartItem] = useContext(cartContext)
    //console.log(products)

    const handlerAddToCart = product =>{
        let  newCart = []
        const exists =cartItem.find(existingProduct => existingProduct.id === product.id )

        //console.log(id);
        if(!exists){
            product.quantity = 1
            newCart =[...cartItem, product]

        }
        else{
            const rest =cartItem.filter(existingProduct => existingProduct.id !== product.id)
            exists.quantity = exists.quantity + 1;
            newCart =[...rest, exists]
        }
        toast.success("Product Added!")
        setCartItem(newCart);
        addToDb(product.id);
    }

    

    return (
        <div className='product-container'>
            {
                products.map(product =><ProductCard 
                    key={product.id} 
                    product={product}
                    handlerAddToCart={handlerAddToCart}/>)
            }
        </div>
    );
};

export default Shop;