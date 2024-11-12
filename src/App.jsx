import React, { useEffect }  from 'react'
import Navbar from './components/FirstPage/Navbar'
import LocomotiveScroll from 'locomotive-scroll'
import { Outlet } from 'react-router-dom';

function App() {
  useEffect(() => {
    const scroll = new LocomotiveScroll();
    return () => {
      scroll.destroy();
    };
  }, []);
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default App
