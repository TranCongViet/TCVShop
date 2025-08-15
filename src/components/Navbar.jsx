import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from '@clerk/clerk-react';
import { useState } from 'react';
import { IoCartOutline } from 'react-icons/io5';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi';
import ResponsiveMenu from './ResponsiveMenu';
const Navbar = () => {
  const { cartItem } = useCart();
  const [openNav, setOpenNav] = useState(false);
  const { user, isSignedIn } = useUser();
  return (
    <div className="bg-white px-4 py-3 shadow-2xl md:px-0">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        {/* logo section */}
        <div className="flex items-center gap-7">
          <Link to={'/'}>
            <h1 className="text-3xl font-bold">
              <span className="font-serif text-red-500">T</span>CV Shop
            </h1>
          </Link>
        </div>
        {/* menu section */}
        <nav className="flex items-center gap-7">
          <ul className="hidden items-center gap-7 text-xl font-semibold md:flex">
            <NavLink to="/">
              {({ isActive }) => (
                <li
                  className={`relative inline-block cursor-pointer p-2 text-xl font-semibold transition-colors duration-300 before:absolute before:-bottom-1 before:h-1 before:bg-red-500 before:transition-all before:duration-300 before:content-[''] hover:text-red-500 ${isActive ? 'text-red-500 before:left-0 before:w-full' : 'text-black before:left-1/2 before:w-0 hover:before:left-0 hover:before:w-full'} `}
                >
                  Home
                </li>
              )}
            </NavLink>
            <NavLink to="/products">
              {({ isActive }) => (
                <li
                  className={`relative inline-block cursor-pointer p-2 text-xl font-semibold transition-colors duration-300 before:absolute before:-bottom-1 before:h-1 before:bg-red-500 before:transition-all before:duration-300 before:content-[''] hover:text-red-500 ${isActive ? 'text-red-500 before:left-0 before:w-full' : 'text-black before:left-1/2 before:w-0 hover:before:left-0 hover:before:w-full'} `}
                >
                  Products
                </li>
              )}
            </NavLink>
            <NavLink to="/about">
              {({ isActive }) => (
                <li
                  className={`relative inline-block cursor-pointer p-2 text-xl font-semibold transition-colors duration-300 before:absolute before:-bottom-1 before:h-1 before:bg-red-500 before:transition-all before:duration-300 before:content-[''] hover:text-red-500 ${isActive ? 'text-red-500 before:left-0 before:w-full' : 'text-black before:left-1/2 before:w-0 hover:before:left-0 hover:before:w-full'} `}
                >
                  About
                </li>
              )}
            </NavLink>
            <NavLink to="/contact">
              {({ isActive }) => (
                <li
                  className={`relative inline-block cursor-pointer p-2 text-xl font-semibold transition-colors duration-300 before:absolute before:-bottom-1 before:h-1 before:bg-red-500 before:transition-all before:duration-300 before:content-[''] hover:text-red-500 ${isActive ? 'text-red-500 before:left-0 before:w-full' : 'text-black before:left-1/2 before:w-0 hover:before:left-0 hover:before:w-full'} `}
                >
                  Contact
                </li>
              )}
            </NavLink>
          </ul>
          <Link
            to={'/cart'}
            className={`relative ${isSignedIn ? 'block' : 'hidden'}`}
          >
            <IoCartOutline className="h-7 w-7" />
            <span className="absolute -top-3 -right-3 rounded-full bg-red-500 px-2 text-white">
              {cartItem.length}
            </span>
          </Link>

          <div className="hidden md:block">
            <SignedOut>
              <SignInButton className="cursor-pointer rounded-md bg-red-500 px-3 py-1 text-white" />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
          {openNav ? (
            <HiMenuAlt3
              onClick={() => setOpenNav(false)}
              className="h-7 w-7 md:hidden"
            />
          ) : (
            <HiMenuAlt1
              onClick={() => setOpenNav(true)}
              className="h-7 w-7 md:hidden"
            />
          )}
        </nav>
      </div>
      <ResponsiveMenu openNav={openNav} setOpenNav={setOpenNav} />
    </div>
  );
};

export default Navbar;
