import React from 'react'
import Footer from '../Component/Footer'

const Create = () => {
    return (
        <div className='bg-[#FFCD4B] md:bg-white h-screen'>
            <p className='md:hidden block text-center text-2xl font-bold py-5'>Hello!</p>
            <div className="md:flex justify-between pb-20">
                <div className="md:w-1/2 md:px-24 py-3 ">
                    <div className='shadow-md md:px-4 px-8 py-6 bg-white md:py-5 rounded-tr-[35px] rounded-tl-[35px]'>
                        <p className='font-bold text-xl md:text-md'>Create an account</p>
                        <div class="relative mb-4 mt-3">
                            <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                            <input placeholder='Name' type="text" name="name" class="w-full bg-white rounded border !border-[#FFCD4B] focus:border-[#FFCD4B] !focus:ring-2 focus:ring-[#FFCD4B] text-sm outline-none text-gray-700  h-12 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div class="relative mb-4">
                            <label for="email" class="leading-7 text-sm text-gray-600">Email/Phone Number</label>
                            <input placeholder='Email/Phone number' type="email" name="email" class="w-full bg-white rounded border !border-[#FFCD4B] focus:border-[#FFCD4B] !focus:ring-2 focus:ring-[#FFCD4B] text-sm outline-none text-gray-700  h-12 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div class="relative mb-4">
                            <label for="username" class="leading-7 text-sm text-gray-600">Username</label>
                            <input placeholder='Username' type="text" name="username" class="w-full bg-white rounded border !border-[#FFCD4B] focus:border-[#FFCD4B] !focus:ring-2 focus:ring-[#FFCD4B] text-sm outline-none text-gray-700  h-12 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>

                        <div class="relative mb-4">
                            <label for="password" class="leading-7 text-sm text-gray-600">Password</label>
                            <input placeholder='Password' type="password" name="password" class="w-full bg-white rounded border !border-[#FFCD4B] focus:border-[#FFCD4B] !focus:ring-2 focus:ring-[#FFCD4B] text-sm outline-none text-gray-700 h-12 px-3 pr-10 leading-8 transition-colors duration-200 ease-in-out relative" />
                            <i class="bi bi-eye-slash absolute top-1/2 transform -translate-y-1/2 mt-3 right-3 text-gray-400 cursor-pointer"></i>
                        </div>

                        <div class="relative mb-4">
                            <label for="confirm-pw" class="leading-7 text-sm text-gray-600">Confirm Password</label>
                            <input placeholder='Confirm Password' type="password" name="password" class="w-full bg-white rounded border !border-[#FFCD4B] focus:border-[#FFCD4B] !focus:ring-2 focus:ring-[#FFCD4B] text-sm outline-none text-gray-700 h-12 px-3 pr-10 leading-8 transition-colors duration-200 ease-in-out relative" />
                            <i class="bi bi-eye-slash absolute top-1/2 transform -translate-y-1/2 mt-3 right-3 text-gray-400 cursor-pointer"></i>
                        </div>
                        <button type="submit" className="text-sm !bg-[#FFCD4B] text-black font-bold w-full md:py-2 py-4 px-4 rounded">
                            Sign Up
                        </button>
                        <button type="submit" className=" mt-3 border py-4 !border-[#FFCD4B] flex justify-center text-black font-bold w-full md:py-2 px-4 rounded">
                            <img className='h-4 ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png" alt="" />
                            <p className='ms-3 text-sm'> Continue with google </p>
                        </button>

                    </div>
                </div>
                <div className="md:w-1/2 items-center flex justify-center flex-col-1 h-full">
                    <img className=' md:h-96 md:block hidden md:mt-24 ' src="https://s3-alpha-sig.figma.com/img/bc69/f30c/e637c7e28dfdcabce58f80b39b093527?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DQZfWrqgSy6IhxLRjUL8ME~cBx27VbUXtc4pfaQD1A9WkWveq32gxNxMAAgi5PE4-htQ5GXewjzS4yy~OOTjZ1doNOTGZJ1vfQJBW62xVBU0j31vH0M-xQVNL50GHQkklU6SAxJkoHt07ymTzreM86FD-AGKRhxLPH2ArWVCP6Nxn5TQaqYSPzxitC8rbaEu5UTkJyk62s8AGCKPHFi93frktlr4~9nWAPru1ms4e0pn1Z5m21KwKpCMBtmWzdwnP4Crd0mnxTa90X851QEKNCowB9FhcEAYgalffXAL2wBfx8ezC0KHZdIkTH29sXi7QaJ~KE3p1hUXEv-BF5NSMA__" alt="" />
                </div>
            </div>
            <div className='md:block hidden fixed bottom-0 w-full'>
                <Footer />
            </div>
        </div>
    )
}

export default Create