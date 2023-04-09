import React, { useContext } from 'react';
import { deleteShoppingCart, getStoredCart, removeFromDb } from '../../Utility/fackDB';
import { Link, useLoaderData } from 'react-router-dom';
import CartItem from '../Cards/CartItem';
import { cartContext } from '../../App';

const Review = () => {
   const [cartItem, setCartItem] = useContext(cartContext)
    // console.log(cart)

    let total = 0;
    if(cartItem.length>0){
        for( const product of cartItem){
            total =total + product.price * product.quantity;
        }
    }

    //remove item from cart
    const handleRemoveItem =(id)=>{
        const remaining = cartItem.filter(product => product.id !== id)
        setCartItem(remaining)
        removeFromDb(id);
    }

    //delete all data from shoppingCart,
    const  handleAllDeleteCart =()=>{
        if (cartItem.length) {
            setCartItem([])
            deleteShoppingCart()
            
          }
        deleteShoppingCart();
    }

    //place Order
    const orderHandler =()=>{
        if(cartItem.length>0){
            setCartItem([])
            deleteShoppingCart()
            return alert('Order Done!')
        }
        return alert('Cart Empty!')
    }


    return (
        <div className='flex min-h-screen items-start justify-center bg-gray-100 text-gray-900'>
            <div className='flex flex-col max-w-3xl p-6 space-y-4 sm:p-10'>
                <h2 className='text-xl font-semibold'>{cartItem.length ? 'Review Cart Items' : 'Cart is Empty!'}</h2>
                <ul className='flex flex-col divide-y divide-gray-700'>
                    {
                        cartItem.map(product =><CartItem 
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
                    cartItem.length >0 ? ( <button onClick={handleAllDeleteCart} className='btn-outlined'>Clear Cart</button>) : ( <Link to="/shop"><button className='btn-outlined'>Back To Shop</button></Link>)
                   }
                    <button onClick ={orderHandler} className='btn-primary'>Place Order</button>
                </div>
            </div>
           
        </div>
    );
};

export default Review;