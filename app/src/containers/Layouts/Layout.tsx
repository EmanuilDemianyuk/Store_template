import Header  from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router';
import DrawerSlide from '../../components/DrawerSlide';

export const Layout = ():JSX.Element => {
  return (
    <div className='bg-BrandWrapperGB'>
      <Header/>
        <DrawerSlide/>
        <Outlet/>
      <Footer/>
    </div>
  );
}
