import { useEffect, useRef, useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Badge,
} from "@material-tailwind/react";
import useClickOutside  from '../../hooks/useClickOutside';
// import useScrollToCloseMenu  from '../../hooks/useScrollToCloseMenu';
import { Link, useLocation } from "react-router-dom";
import classnames from 'classnames';
import styles from './style.module.scss';
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import ProfileMenu from "../ProfileMenu";
import { SignIn } from "../SignIn";
import useAuth from "../../hooks/useAuth";
 
export default function NavMenu() {
  const [openNav, setOpenNav] = useState<boolean>(false);
  const [openModalWindow, setOpenModalWindow] = useState<boolean>(false);
  const location = useLocation();
  const menuRef = useRef(null);

  const { card, drawer: {openRight} } = useTypedSelector(state => state);
  const isSomethingExists = card.length;

  const payload = useAuth();
  const USER__VERIFCATION = !!payload?.message; 

  const { handlerDrawerSlide } = useActions();

  const handlerDrawButton = () => {
    handlerDrawerSlide(!openRight);
  }
  
  useClickOutside(menuRef, () => !openNav || setTimeout(() => setOpenNav(false), 50));
  // useScrollToCloseMenu(openNav, setOpenNav);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <ul className={styles.ul}>
      <Typography
        as="li"
        color="black"
        className={styles.ul__Typography}
      >
        <Link to="/" className={classnames(styles.ul__link, 
          {[styles.ul__active]: location.pathname === '/'})}>
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        color="black"
        className={styles.ul__Typography}
      >
        <Link to="/menu" className={classnames(styles.ul__link, 
          {[styles.ul__active]: location.pathname === '/menu'})}>
          Menu
        </Link>
      </Typography>
      <Typography
        as="li"
        color="black"
        className={styles.ul__Typography}
      >
        <Link to="/about" className={classnames(styles.ul__link, 
          {[styles.ul__active]: location.pathname === '/about'})}>
          About
        </Link>
      </Typography>
      <Typography
        as="li"
        color="black"
        className={styles.ul__Typography}
      >
        <Link to="/contact" className={classnames(styles.ul__link, 
          {[styles.ul__active]: location.pathname === '/contact'})}>
          Contact
        </Link>
      </Typography>
    </ul>
  );
 
  return (
    <div className={styles.NavBar__Wrapper}>
      <Navbar ref={menuRef} className={styles.NavBar} >
        <div className={styles.NavBar__container}>
          <Typography
            as="a"
            href="/"
            className={styles.NavBar__Typography}
          >
            <span className={styles.NavBar__mainLogo_behind}>Yum</span>
            <span className={styles.NavBar__mainLogo_after}>Pizza</span>
          </Typography>
          <div className={styles.NavBar__container_navList}>{navList}</div>
          <div className={styles.NavBar__container_iconButton}>
            
          {
            !USER__VERIFCATION 
            ? <SignIn openModalWindow={openModalWindow} 
            setOpenModalWindow={setOpenModalWindow}/>
            : <div className={styles.NavBar__icon} >
                <ProfileMenu
                openModalWindow={openModalWindow} 
                setOpenModalWindow={setOpenModalWindow}
                />
              </div>
          }

          <Badge 
          content={isSomethingExists} 
          className={styles.NavBar__profileMenu}
          color="orange" 
          invisible={(isSomethingExists === 0)}>
            <IconButton 
            className={styles.NavBar__icon}
            onClick={handlerDrawButton}>
              <i className="fa-solid fa-basket-shopping fa-2xl" style={{color: "#dcfce7"}}></i>
            </IconButton>
          </Badge>

          </div>
          <IconButton
            variant="text"
            className={styles.NavBar__burgerMenu}
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className={styles.NavBar__svg}
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={styles.NavBar__svg}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <div className={styles.MobileNav__container}>
            {navList}
              <div className={styles.MobileNav__iconBox}>
                {
                  !USER__VERIFCATION  
                  ? <IconButton 
                    className={styles.IconButton}>
                      <i className="fa-solid fa-circle-user fa-2xl"     style={{color: "#dcfce7"}}></i>
                    </IconButton>
                  : <div  >
                      <ProfileMenu/>
                    </div>
                }
                <Badge 
                content={isSomethingExists} 
                color="orange" 
                invisible={(isSomethingExists === 0)}>
                  <IconButton 
                    onClick={handlerDrawButton}
                    className={styles.IconButton}>
                      <i className="fa-solid fa-basket-shopping fa-2xl" style={{color: "#dcfce7"}}></i>
                  </IconButton>
                </Badge>
              </div>
          </div>
        </Collapse>
      </Navbar>
    </div>
   
  );
}