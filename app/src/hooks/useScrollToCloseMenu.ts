import { useEffect } from 'react';

const useScrollToCloseMenu = (isOpen: boolean, setOpenNav: (state:boolean) => void) => {
  useEffect(() => {
    const handlerScroll = () => {
      if (isOpen) {
        setOpenNav(!isOpen);
      }
    };

    window.addEventListener('scroll', handlerScroll);

    return () => {
      console.log('sss');
      
      window.removeEventListener('scroll', handlerScroll);
    };
  });
};

export default useScrollToCloseMenu;
