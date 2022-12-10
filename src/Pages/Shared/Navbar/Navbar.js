import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assetes/logo.png'
import { ArrowDownIcon, LanguageIcon, User, UserIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    return (
        <div>






            <nav class="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600" style={{ background: '#052D45' }}>
                <div class="container flex flex-wrap items-center justify-between mx-auto">
                    <a href="https://mk.com/" class="flex items-center">
                        <img src={logo} class="h-20 mr-3 sm:h-9" alt="Flowbite Logo" />
                    </a>
                    <div class="flex ">
                        {/* <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button> */}
                        <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul style={{ background: '#052D45' }} class="flex flex-col p-4 mt-4 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link className='block py-2 pl-3 pr-4 text-lg text-white bg-[#000000] rounded md:bg-transparent md:text-white md:p-0 dark:text-white '>Home</Link>
                            </li>
                            <li>
                                <Link className='block py-2 pl-3 pr-4 text-lg text-white bg-[#000000] rounded md:bg-transparent md:text-white md:p-0 dark:text-white '>Buy Cars</Link>
                            </li>
                            <li>
                                <Link className='block py-2 pl-3 pr-4 text-lg text-white bg-[#000000] rounded md:bg-transparent md:text-white md:p-0 dark:text-white '>Parts</Link>
                            </li>
                            <li>
                                <Link className='block py-2 pl-3 pr-4 text-lg text-white bg-[#000000] rounded md:bg-transparent md:text-white md:p-0 dark:text-white '>Sell</Link>
                            </li>
                            <li>
                                <Link className='block py-2 pl-3 pr-4 text-lg text-white bg-[#000000] rounded md:bg-transparent md:text-white md:p-0 dark:text-white '>Article</Link>
                            </li>
                            <li>
                                <ul className='md:flex'>
                                    <li className='px-5'>
                                        <Link className='flex justify-center block py-2 pl-3 pr-4 text-lg text-white bg-[#000000] rounded md:bg-transparent md:text-white md:p-0 dark:text-white '>
                                            <UserIcon className="h-6 w-6 text-white"></UserIcon>
                                            Sign In
                                        </Link>

                                    </li>
                                    <li>
                                        <Link className='flex justify-center block py-2 pl-3 pr-4 text-lg text-white bg-[#000000] rounded md:bg-transparent md:text-white md:p-0 dark:text-white '>
                                            <LanguageIcon className="h-6 w-6 text-white"></LanguageIcon>
                                            <p>EN</p>
                                            <ArrowDownIcon className="h-6 w-6 text-white" ></ArrowDownIcon>
                                        </Link>

                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </div>
    );
};

export default Navbar;