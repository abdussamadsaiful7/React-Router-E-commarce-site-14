import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../Cards/ProductCard';
import { addToDb } from '../../Utility/fackDB';

const Shop = () => {
    const productData = useLoaderData();
    console.log(productData);

    const handlerAddToCart = id =>{
        //console.log(id);
        addToDb(id);
    }

    return (
        <div className='product-container'>
            {
                productData.map(product =><ProductCard 
                    key={product.id} 
                    product={product}
                    handlerAddToCart={handlerAddToCart}/>)
            }
        </div>
    );
};

export default Shop;