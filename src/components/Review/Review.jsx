import React from 'react';
import { getStoredCart } from '../../Utility/fackDB';
import { useLoaderData } from 'react-router-dom';
import CartItem from '../Cards/CartItem';

const Review = () => {
    const { cart } = useLoaderData();

    console.log(cart)


    return (
        <div className='flex min-h-screen items-start justify-start bg-gray-100 text-gray-900'>
            <div className='flex flex-col max-w-3xl p-6 space-y-4 sm:p-10'>
                <h2 className='text-xl font-semibold'>{cart.length ? 'Review Cart Items' : 'Cart is Empty!'}</h2>
                <ul className='flex flex-col divide-y divide-gray-700'>
                    {
                        cart.map(product =><CartItem key={product.id} product={product}/>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Review;