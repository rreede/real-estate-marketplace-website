import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './routes/Root.jsx'
import ErrorPage from './routes/error-page.jsx';
import RealEstateList from './routes/RealEstateList.jsx';
import RealEstateItem from './routes/RealEstateItem.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        element: <RealEstateList/>,
      },
    ],
  },
  {
    path: '/realestate/:realestateid',
    element: <RealEstateItem/>,
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
