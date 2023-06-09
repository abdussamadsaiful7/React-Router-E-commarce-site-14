import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import ErrorPage from './components/ErrorPage'
import Shop from './components/Shop/Shop'
import Review from './components/Review/Review'
import { productsAndCartData } from './Loaders/getCart&ProductData'
import  { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement:<ErrorPage/>,
        loader: productsAndCartData,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/shop',
                element: <Shop/>,
                loader: ()=> fetch('products.json'),
            },
            {
                path: '/cartReview',
                element: <Review/>,
                loader: productsAndCartData,
            },
        ]
    },
    
])

ReactDOM.createRoot(document.getElementById('root')).render(
<>
<Toaster/>
<RouterProvider router={router}/>
</>
);
