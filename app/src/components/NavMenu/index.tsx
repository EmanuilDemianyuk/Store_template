import React, { useEffect, useRef } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  ButtonGroup,
  IconButton,
} from "@material-tailwind/react";
import useClickOutside  from '../../hooks/useClickOutside';
import useScrollToCloseMenu  from '../../hooks/useScrollToCloseMenu';
import { Link, useLocation } from "react-router-dom";
import classnames from 'classnames';
import styles from './style.module.scss';
 
export default function NavMenu() {
  const [openNav, setOpenNav] = React.useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  useClickOutside(menuRef, () => !openNav || setTimeout(() => setOpenNav(false), 50));
  useScrollToCloseMenu(openNav, setOpenNav);

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
            href="#"
            className={styles.NavBar__Typography}
          >
            <span className={styles.NavBar__mainLogo_behind}>Yum</span>
            <span className={styles.NavBar__mainLogo_after}>Pizza</span>
          </Typography>
          <div className={styles.NavBar__container_navList}>{navList}</div>
          <div className={styles.NavBar__container_iconButton}>
          <IconButton className={styles.NavBar__icon}>
            <i className="fa-solid fa-circle-user fa-2xl" style={{color: "#dcfce7"}}></i>
          </IconButton>
          <IconButton className={styles.NavBar__icon}>
            <i className="fa-solid fa-basket-shopping fa-2xl" style={{color: "#dcfce7"}}></i>
          </IconButton>
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
            <ButtonGroup fullWidth size="sm">
              <Button className={styles.MobileNav__Button}>
              <IconButton className={styles.MobileNav__IconButton}>
                <i className="fa-solid fa-circle-user fa-2xl" style={{color: "#dcfce7"}}></i>
              </IconButton>
              </Button>
              <Button className={styles.MobileNav__Button}>
              <IconButton className={styles.MobileNav__IconButton}>
                <i className="fa-solid fa-basket-shopping fa-2xl" style={{color: "#dcfce7"}}></i>
              </IconButton>
              </Button>
            </ButtonGroup>
          </div>
        </Collapse>
      </Navbar>
    </div>
   
  );
}