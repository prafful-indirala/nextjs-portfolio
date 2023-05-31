"use client"
import React, { Fragment } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Popover, Transition } from '@headlessui/react'
import { FaGithub, FaInstagram, FaLinkedin, FaMoon, FaTwitter, } from "react-icons/fa";
import { LuSunMoon, LuMoonStar } from "react-icons/lu"


import { SOCIAL_MEDIA_URLS } from '../constants/socialMediaUrls'


export default function Header({ isDark, setIsDark }) {
  return (
    <Popover className='fixed z-10 flex justify-between items-center w-full	backdrop-blur-2xl px-10 py-10 h-20 '>
      <Link href="/">
        <Image
          className="rounded-full"
          src="/logo.jpg"
          alt="Logo"
          width={50}
          height={30}
          priority

        />
      </Link>
      <div className='grow'>
        <div className='hidden sm:flex items-center justify-center gap-8 md:gap-8'>
          <Link href="#portfolio">
            <p className='dark: text-gray-400'>
              Portfolio
            </p>
          </Link>
          <Link href="#testimonial">
            <p className='dark: text-gray-400'>
              Testimonial
            </p>
          </Link>
          <Link href="#about"> <p className='dark: text-gray-400'>
            About
          </p>
          </Link>
        </div>
      </div>
      <div className='flex  items-center  sm:hidden'>
        <Popover.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
          <span className='sr-only'>Open menu</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </Popover.Button>
      </div>

      <div className='hidden sm:block'>
        <div className='flex gap-5 cursor-pointer' onClick={() => setIsDark(!isDark)}>
          {isDark ? <LuSunMoon color='white' size={20} /> : <LuMoonStar size={20} />}
        </div>
      </div>

      {/* mobile menu icon */}
      <Transition as={Fragment} enter="duration-200 ease-out" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
        <Popover.Panel focus className='absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden' >
          <div className='rounded-lg bg-black shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50'>
            <div className='px-5 pt-5 pb-6'>
              <div className='flex items-center justify-between'>
                <Link href="/">
                  <Image
                    className="rounded-full"
                    src="/logo.jpg"
                    alt="Logo"
                    width={50}
                    height={30}
                    priority

                  />
                </Link>
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
                  <Link className='focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2' href="/" >Home</Link>
                  <Link className='focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2' href="/portfolio">Portfolio</Link>
                  <Link className='focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2' href="/testimonial">Testimonial</Link>
                  <Link className='focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2' href="/about">About</Link>
                </nav>
              </div>
              <div className='mt-6 flex items-center gap-5'>
                <Link href={SOCIAL_MEDIA_URLS.twitter} target='_blank'>
                  <FaTwitter />
                </Link>
                <Link href={SOCIAL_MEDIA_URLS.linkedin} target='_blank'>
                  <FaLinkedin />
                </Link>
                <Link href={SOCIAL_MEDIA_URLS.instagram} target='_blank'>
                  <FaInstagram />
                </Link>
                <Link href={SOCIAL_MEDIA_URLS.github} target='_blank' >
                  <FaGithub />
                </Link>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>

  )
}
