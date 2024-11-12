import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import FirstPage from './components/FirstPage/FirstPage.jsx';
import Work from './components/Work/Work.jsx';
import Insights from './components/Insights/Insights.jsx';
import Services from './components/Services/Services.jsx';
import AboutUs from './components/AboutUs/AboutUs.jsx';
import Contact from './components/Contact/Contact.jsx';

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'


const router=createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App/>}>
    <Route path='' element={<FirstPage/>}/>
    <Route path='/about-us' element={<AboutUs/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/our-work' element={<Work/>}/>
    <Route path='/insights' element={<Insights/>}/>
  </Route>
))
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);