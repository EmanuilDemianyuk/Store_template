import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  ButtonGroup,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
 
export default function NavMenu() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        color="black"
        className="p-1 font-content font-bold"
      >
        <Link to="/" className="flex items-center hover:text-green-700 hover:underline">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        color="black"
        className="p-1 font-content font-bold"
      >
        <Link to="/menu" className="flex items-center hover:text-green-700 hover:underline">
          Menu
        </Link>
      </Typography>
      <Typography
        as="li"
        color="black"
        className="p-1 font-content font-bold"
      >
        <Link to="/about" className="flex items-center hover:text-green-700 hover:underline">
          About
        </Link>
      </Typography>
      <Typography
        as="li"
        color="black"
        className="p-1 font-content font-bold"
      >
        <Link to="/contact" className="flex items-center hover:text-green-700 hover:underline">
          Contact
        </Link>
      </Typography>
    </ul>
  );
 
  return (
    <Navbar className="bg-inherit rounded-none border-none shadow-none mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
      <div className="container flex items-center justify-between text-green-700">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-logo text-4xl"
        >
          <span className='text-green-700'>Yum</span><span className='text-orange-500'>Pizza</span>
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <div className="flex items-center gap-4">
        <IconButton className="rounded-full bg-green-700 hidden lg:inline-block">
          <i className="fa-solid fa-circle-user fa-2xl" style={{color: "#dcfce7"}}></i>
        </IconButton>
        <IconButton className="rounded-full bg-green-700 hidden lg:inline-block">
          <i className="fa-solid fa-basket-shopping fa-2xl" style={{color: "#dcfce7"}}></i>
        </IconButton>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
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
              className="h-6 w-6"
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
      <MobileNav open={openNav}>
        <div className="container">
          {navList}
          <ButtonGroup fullWidth size="sm">
            <Button className="bg-green-700">
            <IconButton className="bg-transparent border-none shadow-none">
              <i className="fa-solid fa-circle-user fa-2xl" style={{color: "#dcfce7"}}></i>
            </IconButton>
            </Button>
            <Button className="bg-green-700">
            <IconButton className="bg-transparent border-none shadow-none">
              <i className="fa-solid fa-basket-shopping fa-2xl" style={{color: "#dcfce7"}}></i>
            </IconButton>
            </Button>
          </ButtonGroup>
        </div>
      </MobileNav>
    </Navbar>
  );
}