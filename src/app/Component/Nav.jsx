"use client";
import React from 'react';
import { Navbar } from 'flowbite-react';
import Link from 'next/link';

const Navbarcom = () => {
  return (
    <div>
      <Navbar fluid rounded className="fixed bg-white w-full">
        <Navbar.Brand href="https://flowbite-react.com">
          <span className="self-center text-2xl font-semibold font-inter text-blue-700">Hyra</span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Navbar.Toggle />
        </div>
        <div className="flex justify-between -mt-6 w-full">
          <Navbar.Collapse className="mx-auto mt-2 md:mt-0">
            <div className="md:flex grid bg-slate-100 md:bg-white justify-between w-full py-4 px-2 md:w-72 md:ms-24 gap-4">
              <Link href="/">
                <span className="text-[15px] mt-4 md:mt-0 cursor-pointer">Home</span>
              </Link>
              <Link href="/ourteaching">
                <span className="text-[15px] mt-4 md:mt-0 cursor-pointer">Our Teachings</span>
              </Link>
              <Link href="/about">
                <span className="text-[15px] mt-4 md:mt-0 cursor-pointer">About Us</span>
              </Link>
            </div>
          </Navbar.Collapse>
          <div className="float-end">
            <div className="md:block hidden">
              <Link href="/signup">
                <span className="text-blue-700 border border-blue-700 focus:ring-4 focus:outline-none font-semibold rounded-lg text-sm px-4 py-2 text-center cursor-pointer">Sign Up</span>
              </Link>
              <Link href="/login">
                <span className="text-white bg-blue-900 py-2 ms-1 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm px-6 text-center cursor-pointer">Log in</span>
              </Link>
            </div>
          </div>
        </div>
      </Navbar>
    </div>
  );
};

export default Navbarcom;
