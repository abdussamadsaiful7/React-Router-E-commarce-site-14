import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../Cards/ProductCard';
import { addToDb } from '../../Utility/fackDB';
import { productContext } from '../../App';

const Shop = () => {
    const products = useContext(productContext);
    //console.log(products)

    const handlerAddToCart = id =>{
        //console.log(id);
        addToDb(id);
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