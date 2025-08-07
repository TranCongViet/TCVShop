import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import { useState } from 'react'
import { IoCartOutline } from 'react-icons/io5'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi'
import ResponsiveMenu from './ResponsiveMenu'

const Navbar = () => {

    const {cartItem} = useCart()
    const [openNav, setOpenNav] = useState(false)
    
    return (
        <div className='bg-white py-3 shadow-2xl px-4 md:px-0'>
            <div className='max-w-6xl mx-auto flex justify-between items-center'>
                {/* logo section */}
                <div className='flex gap-7 items-center'>
                    <Link to={'/'}><h1 className='font-bold text-3xl'><span className='text-red-500 font-serif'>T</span>CV Shop</h1></Link>
                </div>
                {/* menu section */}
                <nav className='flex gap-7 items-center'>
                    <ul className='md:flex gap-7 items-center text-xl font-semibold hidden'>
                        <NavLink to="/" >
                        {({ isActive }) => (
                            <li
                            className={`relative inline-block cursor-pointer text-xl font-semibold 
                  before:content-[''] before:absolute before:-bottom-1 
                  before:h-1 before:bg-red-500
                  before:transition-all before:duration-300 p-2
                  hover:text-red-500 transition-colors duration-300
                                ${isActive ? "text-red-500 before:w-full before:left-0" : "text-black before:w-0 before:left-1/2 hover:before:left-0 hover:before:w-full"}
                                `}
                            >
                            Home
                            </li>
                        )}
                        </NavLink>
                        <NavLink to="/products" >
                        {({ isActive }) => (
                            <li
                            className={`relative inline-block cursor-pointer text-xl font-semibold 
                  before:content-[''] before:absolute before:-bottom-1 
                  before:h-1 before:bg-red-500
                  before:transition-all before:duration-300 p-2
                  hover:text-red-500 transition-colors duration-300
                                ${isActive ? "text-red-500 before:w-full before:left-0" : "text-black before:w-0 before:left-1/2 hover:before:left-0 hover:before:w-full"}
                                `}
                            >
                            Products
                            </li>
                        )}
                        </NavLink>
                        <NavLink to="/about" >
                        {({ isActive }) => (
                            <li
                            className={`relative inline-block cursor-pointer text-xl font-semibold 
                  before:content-[''] before:absolute before:-bottom-1 
                  before:h-1 before:bg-red-500
                  before:transition-all before:duration-300 p-2
                  hover:text-red-500 transition-colors duration-300
                                ${isActive ? "text-red-500 before:w-full before:left-0" : "text-black before:w-0 before:left-1/2 hover:before:left-0 hover:before:w-full"}
                                `}
                            >
                            About
                            </li>
                        )}
                        </NavLink>
                        <NavLink to="/contact" >
                        {({ isActive }) => (
                            <li
                            className={`relative inline-block cursor-pointer text-xl font-semibold 
                  before:content-[''] before:absolute before:-bottom-1 
                  before:h-1 before:bg-red-500
                  before:transition-all before:duration-300 p-2
                  hover:text-red-500 transition-colors duration-300
                                ${isActive ? "text-red-500 before:w-full before:left-0" : "text-black before:w-0 before:left-1/2 hover:before:left-0 hover:before:w-full"}
                                `}
                            >
                            Contact
                            </li>
                        )}
                        </NavLink>
                    </ul>
                    <Link to={'/cart'} className='relative'>
                        <IoCartOutline className='h-7 w-7' />
                        <span className='bg-red-500 px-2 rounded-full absolute -top-3 -right-3 text-white'>{cartItem.length}</span>
                    </Link>
                    <div className='hidden md:block'>
                        <SignedOut>
                            <SignInButton className="bg-red-500 text-white px-3 py-1 rounded-md cursor-pointer"/>
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </div>
                    {
                        openNav ? <HiMenuAlt3 onClick={()=>setOpenNav(false)} className='h-7 w-7 md:hidden'/>:<HiMenuAlt1 
                        onClick={()=>setOpenNav(true)}
                        className='h-7 w-7 md:hidden'/>
                    }
                </nav>
            </div>
            <ResponsiveMenu openNav={openNav} setOpenNav={setOpenNav}/>
        </div>
    )
}

export default Navbar
