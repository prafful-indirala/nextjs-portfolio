"use client"
import Link from 'next/link'
import React, { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'

export default function Header() {
  return (
    <Popover className='container fixed mx-auto flex border-b-2 px-6 py-5 h-20'>
      <h1 className='font-bold text-red'>prafful</h1>
      <div className='grow'>
        <div className='hidden sm:flex items-center justify-center gap-2 md:gap-8'>
          <Link href="home">Home</Link>
          <Link href="home">Portfolio</Link>
          <Link href="home">Testimonial</Link>
          <Link href="home">About</Link>
        </div>
      </div>
      <div className='flex grow items-center justify-end sm:hidden'>
        <Popover.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
          <span className='sr-only'>Open menu</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </Popover.Button>
      </div>

      <Transition as={Fragment} enter="duration-200 ease-out" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
        <Popover.Panel focus className='absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden' >
          <div className='rounded-lg bg-black shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50'>
            <div className='px-5 pt-5 pb-6'>
              <div className='flex items-center justify-between'>
                <h1 className='font-bold text-red'>prafful</h1>
                <div className='-mr-2'>
                  <Popover.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                    <span className='sr-only'>Close menu</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>

                  </Popover.Button>
                </div>
              </div>
              <div className='mt-6'>
                <nav className='grid gap-y-8'>
                  <Link className='focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2' href="home" >Home</Link>
                  <Link className='focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2' href="home">Portfolio</Link>
                  <Link className='focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2' href="home">Testimonial</Link>
                  <Link className='focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2' href="home">About</Link>
                </nav>
              </div>
              <div className='mt-6 flex flex-col items-center gap-2'>
                <Link href="home" className='rounded-md bg-white px-4 py-2 text-sm font-medium text-black md:text-xl w-full border-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500'>LinkedIn</Link>
                <Link href="home" className='rounded-md bg-white px-4 py-2 text-sm font-medium text-black md:text-xl w-full border-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500'>Twitter</Link>
                <Link href="home" className='rounded-md bg-white px-4 py-2 text-sm font-medium text-black md:text-xl w-full border-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500'>Instagram</Link>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
      <div className='hidden sm:block'>
        <Link href="home" className='mr-2 font-bold'>
          LinkedIn
        </Link>
        <Link href="home" className='mr-2 font-bold'>Twitter</Link>
        <Link href="home" className='font-bold'>Instagram</Link>
      </div>
    </Popover>
  )
}
