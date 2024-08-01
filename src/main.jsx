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
import Wishlist from './routes/Wishlist.jsx';
import StatisticsView from './routes/StatisticsView.jsx';
import HousesView from './routes/HousesView.jsx';
import ApartmentsView from './routes/ApartmentsView.jsx';

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
  },
  {
    path: '/wishlist',
    element: <Wishlist/>,
  },
  {
    path: '/statistics',
    element: <StatisticsView/>,
  },
  {
    path: '/apartments',
    element: <ApartmentsView/>,
  },
  {
    path: '/houses',
    element: <HousesView/>,
  },

  
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
