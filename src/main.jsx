import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import ErrorPage from './components/ErrorPage'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement:<ErrorPage/>,
        children: [
            {
                path: 'home',
                element: <Home/>
            },
            {
                path: '/about',
                element: <About/>
            }
        ]
    },
    
])

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router}/>
);
