"use client";
import Link from 'next/link';
import React from 'react'
import Footer from '../Component/Footer'

const login = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 pb-20 md:grid-cols-2 gap-8">
          {/* First Column */}
          <div className="p-4">
            {/* Content of the first column */}
            {/* Form Inputs */}
            <form className='shadow-lg md:p-10 md: md:-10 mt-32'>
              <p className='font-semibold pb-8'>Login to your account</p>
              {/* Username Input */}
              <div className="mb-6">
                <label htmlFor="username" className="block mb-2 text-sm font-medium">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"

                  className={`bg-white border border-blue-700 ext-sm block w-full p-2.5`}
                  placeholder="Enter your username"
                />
              </div>
              {/* Password Input */}
              <div className="mb-6">
                <label htmlFor="password" className="block mb-2 text-sm font-medium">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className={`bg-white border border-blue-700  text-sm block w-full p-2.5`}
                  placeholder="Enter your password"
                />
              </div>
              {/* Remeneber Me */}
              <div class="flex items-center mb-4">
                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label class="ms-2 text-sm font-medium   ">Remember Me</label>
                <Link href="/forgot-password" class="md:ms-20 text-sm font-medium  ">Forgot Password</Link>
              </div>
              {/* Submit Button */}
              <button type="submit" className="bg-blue-700 text-white text-center rounded py-2 px-6 font-semibold">Sign in</button>
              <p className='flex justify-between pt-4'>
                <span>Don’t have an account?</span>
                <Link href="/signup" className='text-blue-800 font-bold cursor-pointer'>Sign Up</Link>
              </p>
            </form>
          </div>

          {/* Second Column (Hidden on small screens) */}
          <div className="hidden md:block p-4">
            {/* Content of the second column */}
            <img className='md:h-96  mt-32' src="/image 249.png" alt="" />
          </div>
        </div>
      </div>
      <div className='fixed bottom-0 w-full'>
      <Footer />
      </div>
    </>
  )
}

export default login