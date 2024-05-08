import { Fragment } from 'react';
import { Disclosure, Menu } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

import React, { useState, useEffect } from 'react';
import { getCategories } from '../services';

function classNames(...classes) {
 return classes.filter(Boolean).join(' ');
}

export default function Header() {
 const [categories, setCategories] = useState([]);

 useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories));
 }, []);

 return (
    <Disclosure as="nav" className="bg-gray-800 mb-0.5">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                 <span className="absolute -inset-0.5" />
                 <span className="sr-only">Open main menu</span>
                 {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                 ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                 )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <Link href="/">
                    <span>
                      <img
                          className="h-12 w-auto"
                          src="/Vilca_logo_w.PNG"
                          alt="Vilcabamba"
                      />
                    </span>
                  </Link>
                </div>
                <div className="hidden sm:flex sm:items-center sm:ml-6">
                 <div className="flex space-x-4">
                  <Link href="/posts">
                    <span className="inline-flex justify-center w-full rounded-md px-4 py-2 bg-gray-800 text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-white">
                      Publicaciones
                    </span>
                  </Link>
                  <Link href="/about">
                    <span className="inline-flex justify-center w-full rounded-md px-4 py-2 bg-gray-800 text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-white">
                      Sobre Nosotros
                    </span>
                  </Link>
                    {/* Dropdown menu for categories */}
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                          <Menu.Button className="inline-flex justify-center w-full rounded-md px-4 py-2 bg-gray-800 text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-white">
                          Gobierno Parroquial
                            <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </Menu.Button>
                      </div>
                      <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-gray-800 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                          <div className="px-1 py-1 ">
                            {/* Static categories */}
                            <Menu.Item>
                              {({ active }) => (
                                <Link href="/theinstitution">
                                  <span className={classNames(
                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-300',
                                    'block px-4 py-2 text-sm cursor-pointer'
                                  )}>
                                    La Institución
                                  </span>
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link href="/accountability">
                                  <span className={classNames(
                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-300',
                                    'block px-4 py-2 text-sm cursor-pointer'
                                  )}>
                                    Rendición de Cuentas
                                  </span>
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link href="/transparency">
                                  <span className={classNames(
                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-300',
                                    'block px-4 py-2 text-sm cursor-pointer'
                                  )}>
                                    Transparencia
                                  </span>
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link href="/pdyot">
                                  <span className={classNames(
                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-300',
                                    'block px-4 py-2 text-sm cursor-pointer'
                                  )}>
                                    PDyOT
                                  </span>
                                </Link>
                              )}
                            </Menu.Item>
                          </div>
                      </Menu.Items>
                    </Menu>
                 </div>
                </div>
              </div>
            </div>
          </div>
          {/* menu on small screens */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Link href="/posts">
                <span className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">
                 News
                </span>
              </Link>
              <Link href="/about">
                <span className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">
                 About
                </span>
              </Link>
                {/* Dropdown menu for categories on small screens */}
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                      <Menu.Button className="inline-flex justify-center w-full rounded-md px-4 py-2 bg-gray-800 text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-white">
                      Gobierno Parroquial 
                        <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Menu.Button>
                  </div>
                  {/* <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-gray-800 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50 sm:w-auto sm:right-0 sm:mt-0 sm:origin-top-right"> */}
                  <Menu.Items className="absolute left-0 w-56 mt-2 origin-top-right bg-gray-800 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50 sm:w-auto sm:left-0 sm:mt-0 sm:origin-top-right">
                      <div className="px-1 py-1 ">
                        {/* Static categories */}
                        <Menu.Item>
                          {({ active }) => (
                            <Link href="/theinstitution">
                              <span className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-300',
                                'block px-4 py-2 text-sm cursor-pointer'
                              )}>
                                La Institución
                              </span>
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link href="/accountability">
                              <span className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-300',
                                'block px-4 py-2 text-sm cursor-pointer'
                              )}>
                                Rendición de Cuentas
                              </span>
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link href="/transparency">
                              <span className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-300',
                                'block px-4 py-2 text-sm cursor-pointer'
                              )}>
                                Transparencia
                              </span>
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link href="/pdyot">
                              <span className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-300',
                                'block px-4 py-2 text-sm cursor-pointer'
                              )}>
                                PDyOT
                              </span>
                            </Link>
                          )}
                        </Menu.Item>
                      </div>
                  </Menu.Items>
                  </Menu>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
 );
}

