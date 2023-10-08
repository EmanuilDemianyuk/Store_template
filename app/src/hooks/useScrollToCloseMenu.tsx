import { useEffect } from 'react';

const useScrollToCloseMenu = (isOpen: boolean, closeMenu: () => void) => {
  useEffect(() => {
    const handlerScroll = () => {
      if (isOpen) {
        closeMenu();
      }
    };

    window.addEventListener('scroll', handlerScroll);

    return () => {
      window.removeEventListener('scroll', handlerScroll);
    };
  });
};

export default useScrollToCloseMenu;
