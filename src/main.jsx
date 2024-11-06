import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import App from './App'
import ProductPage from './ProductPage'
import PricingPage from './Pricing'

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ProductPage />,
      },
      {
        path: "/pricing",
        element: <PricingPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <App></App>
  </StrictMode>,
)
