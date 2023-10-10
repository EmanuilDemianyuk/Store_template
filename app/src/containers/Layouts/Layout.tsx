import React from 'react';
import Header  from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router';
import DrawerSlide from '../../components/DrawerSlide';

export const Layout = () => {
  return (
    <div className='bg-BrandWrapperGB'>
      <Header/>
        <DrawerSlide/>
        <Outlet/>
      <Footer/>
    </div>
  )
}
