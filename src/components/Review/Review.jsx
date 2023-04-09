import React from 'react';
import { deleteShoppingCart, getStoredCart, removeFromDb } from '../../Utility/fackDB';
import { Link, useLoaderData } from 'react-router-dom';
import CartItem from '../Cards/CartItem';

const Review = () => {
    const { cart } = useLoaderData();
    // console.log(cart)

    let total = 0;
    if(cart.length>0){
        for( const product of cart){
            total =total + product.price * product.quantity;
        }
    }

    //remove item from cart
    const handleRemoveItem =(id)=>{
        removeFromDb(id);
    }

    //delete all data from shoppingCart,
    const  handleAllDeleteCart =()=>{
        deleteShoppingCart();
    }


    return (
        <div className='flex min-h-screen items-start justify-center bg-gray-100 text-gray-900'>
            <div className='flex flex-col max-w-3xl p-6 space-y-4 sm:p-10'>
                <h2 className='text-xl font-semibold'>{cart.length ? 'Review Cart Items' : 'Cart is Empty!'}</h2>
                <ul className='flex flex-col divide-y divide-gray-700'>
                    {
                        cart.map(product =><CartItem 
                            key={product.id} 
                            product={product}
                            handleRemoveItem={handleRemoveItem}/>)
                    }
                </ul>
                <div className='space-y-1 text-right'>
                    <p>
                        Total amount: $<span className='font-semibold'>{total}</span>
                    </p>
                    <p className='text-sm text-gray-400'>
                        Not including taxes and shipping costs
                    </p>
                </div>
                <div className='flex justify-end space-x-4'>
                   {
                    cart.length >0 ? ( <button onClick={()=>handleAllDeleteCart()} className='btn-outlined'>Clear Cart</button>) : ( <Link to="/shop"><button className='btn-outlined'>Back To Shop</button></Link>)
                   }
                    <button className='btn-primary'>Place Order</button>
                </div>
            </div>
           
        </div>
    );
};

export default Review;