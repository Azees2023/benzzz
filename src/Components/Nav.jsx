
import React, { useEffect, useState } from 'react';
import { PiHamburgerLight } from 'react-icons/pi';
import { CiBellOn } from 'react-icons/ci';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../Picture/Mercedes-Benz-Logo.png';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropMenuOpen, setDropMenuOpen] = useState(false); 

  const toggleNavbar = () => {
    setMenuOpen(!menuOpen);
    setDropMenuOpen(false);
  };

  const toggleSubMenu = () => {
    setDropMenuOpen(!dropMenuOpen);
  };

  const Location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [Location]);

  return (
    <div className='bg-black text-white w-full h-full'>
      <div className='container mx-auto'>
        <nav className='flex items-center justify-between p-4 -mb-4'>
          <div className='text-white text-2xl font-bold w-72 h-auto'>
            <img
              className='w-24 sm:ml-2 md:ml-2 sm:w-24 sm:text-center md:w-24 lg:w-24 xl:w-24 items-center cursor-pointer ml-[140px]'
              src={Logo}
              alt='Logo'
              title='Logo'
            />
          </div>
          <div className='md:hidden'>
            <button className='text-red-700 text-2xl hover:text-orange-500 ' onClick={toggleNavbar}>
              <PiHamburgerLight />
            </button>
          </div>

          <div className='hidden md:flex space-x-5 gap-10 '>
            <div className='flex cursor-pointer gap-16 rounded-sm px-2 py-1 mt-2 capitaliz'>
              <Link to='/' className='text-white hover:text-orange-400'>
                Home
              </Link>
              <Link>
                <button
                  id='dropdownNavbarLink'
                  data-dropdown-toggle='dropdownNavbar'
                  className='flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent'
                  onClick={toggleSubMenu}
                >
                  <Link title='CardList' to='/CarCard' aria-labelledby='dropdownNavbarLink' className='text-white hover:text-orange-400 block'>
                    Our Model
                  </Link>
                  <svg
                    className={`w-2.5 h-2.5 ms-2.5 ${dropMenuOpen ? 'transform rotate-180' : ''}`}
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 10 6'
                  >
                    <path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 1 4 4 4-4' />
                  </svg>
                </button>

                <ul
                  className={`z-10 ${dropMenuOpen ? 'block' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 py-2 text-sm text-gray-700 dark:text-gray-200`}
                >
                  <li className='m-1'>
                    <Link to='/Card' className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                      Details
                    </Link>
                  </li>
                  <li>
                    <Link to='/Service' className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                      Services
                    </Link>
                  </li>
                </ul>
              </Link>
              <Link title='Social' to='/Contact' className='text-white hover:text-orange-400'>
                Contact
              </Link>
              <Link title='Blog' to='/Blog' className='text-white hover:text-orange-400'>
                Blog
              </Link>
              <button title='Join Family' className='text-3xl text-white hover:text-blue-500 '>
                <CiBellOn />
              </button>
            </div>
          </div>
          {menuOpen && (
            <div className='md:hidden z-50 absolute top-[70px] right-0 bg-black w-full'>
              <Link to='/' className='block text-white p-12  hover:text-gray-300 duration-500'>
                Home
              </Link>
              <Link>
                <button
                  id='dropdownNavbarLink'
                  data-dropdown-toggle='dropdownNavbar'
                  className='md:flex  items-center md:justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto md:dark:hover:text-blue-500  dark:hover:bg-gray-700 md:dark:hover:bg-transparent'
                  onClick={toggleSubMenu}
                >
                  <Link title='CardList' to='/CarCard' aria-labelledby='dropdownNavbarLink' className='text-white hover:text-orange-400 block'>
                    Our Model
                  </Link>
                  <svg
                    className={`w-2.5 ms-2.5 -m-3  sm:ml-[400px] ml-[250px] text-white`}
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 10 6'
                  >
                    <path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 1 4 4 4-4' />
                  </svg>
                </button>

                <ul
                  className={`z-10  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 py-2 text-sm text-gray-700 dark:text-gray-200`}
                >
                  <li className='m-1'>
                    <Link to='/Card' className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                      Details
                    </Link>
                  </li>
                  <li>
                    <Link to='/Service' className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                      Services
                    </Link>
                  </li>
                </ul>
              </Link>
              <Link to='/Contact' className='block text-white p-12 hover:text-gray-300 duration-500'>
                Contact
              </Link>
              <Link to="/Blog" className="block text-white p-12 hover:text-gray-300 duration-500">
                           Blog
                        </Link>
                     </div>
                 )} 
             </nav>
             <button title='Join Family' className=' relative sm:hidden  xl:hidden text-3xl text-white  right-[160px] top-[-40px] hover:text-red-500 '><CiBellOn  /></button>

         </div>

     </div>
   )
 }

 export default Nav

              
