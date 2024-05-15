import React from 'react'
import Nav from '../Component/Nav'
import Footer from '../Component/Footer'

const Ourteachings = () => {
  return (
    <>
    <Nav/>
    <div>
        <div className='py-20'>
        <p className='text-[#0802A3] text-center font-bold text-xl md:mt-0 mt-5'>What are the pillars of Islam</p>
        </div>
        <div className='md:px-64 md:block hidden'>

        <div className='md:flex'>
            <div className='md:w-1/2  text-[12px]'>
                <p className='text-[#0802A3] font-bold w-44 '>There are five pillars of Islam</p>
                <p className=' mt-5'>The Pillars of Islam are as follows</p>
                <div className='mt-3 '>
                <p className='mt-1'>1. Shahadah</p>
                <p className='mt-1'>2. Salat</p>
                <p className='mt-1'>3. Zakat</p>
                <p className='mt-1'>4. Sawn</p>
                <p className='mt-1'>5. Hajj</p>
                </div>
            </div>
            <div className='md:w-1/2'>
                <img className='h-52 -mt-8 object-cover mx-auto' src="https://s3-alpha-sig.figma.com/img/492c/c257/e40125cc49fb1f89dcc2f1caed3bd8c1?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GbcV1q7GQRKyv~a85RUZSdk44AcZF0ywnOBp0~1-YyBHLiyHx6XuMfLx9pIRmoioAnWMXZOlfi-py13VLQy53s9cZRg1nrm6KQqQiemkowIwPOl7N8eiMoWwDHdZybJ7GNh7R4dRw~aOE9lmmzOCbFd2TFXZbIn-UaVzmTBnUjkn4Ux7uBQOoo5UArMPgfB4FpJ~sXwJS8q1qJisYfiWHiGDeYQiD0U5Bme35luxpY93EIWcmDf~D1pt65abfzyt21tUYpGG6EWV0b048M1RKWCSfxYXuKiSVaML7-ke61ik0wz8UNJcu0r6kiXzIBO6DMlQM~ZbgBMdhHy3O4I2HA__" alt="" />
            </div>
        </div>
        </div>
        <div className='px- md:hidden block'>

        <div className='grid grid-cols-1 mt-4  px-8  '>
            <div className='w-full'>
                <img className='h-full rounded -mt-10 mx-auto' src="https://s3-alpha-sig.figma.com/img/492c/c257/e40125cc49fb1f89dcc2f1caed3bd8c1?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GbcV1q7GQRKyv~a85RUZSdk44AcZF0ywnOBp0~1-YyBHLiyHx6XuMfLx9pIRmoioAnWMXZOlfi-py13VLQy53s9cZRg1nrm6KQqQiemkowIwPOl7N8eiMoWwDHdZybJ7GNh7R4dRw~aOE9lmmzOCbFd2TFXZbIn-UaVzmTBnUjkn4Ux7uBQOoo5UArMPgfB4FpJ~sXwJS8q1qJisYfiWHiGDeYQiD0U5Bme35luxpY93EIWcmDf~D1pt65abfzyt21tUYpGG6EWV0b048M1RKWCSfxYXuKiSVaML7-ke61ik0wz8UNJcu0r6kiXzIBO6DMlQM~ZbgBMdhHy3O4I2HA__" alt="" />
            </div>
            <div className=' w-full mt-3 pb-28 mx-auto  text-[12px]'>
                <p className='text-[#0802A3] font-bold w-44 '>There are five pillars of Islam</p>
                <p className=' mt-5'>The Pillars of Islam are as follows</p>
                <div className='mt-3 '>
                <p className='mt-2'>1. Shahadah</p>
                <p className='mt-2'>2. Salat</p>
                <p className='mt-2'>3. Zakat</p>
                <p className='mt-2'>4. Sawn</p>
                <p className='mt-2'>5. Hajj</p>
                </div>
            </div>
        </div>
        </div>
        <div className='fixed bottom-0 w-full'>
        <Footer/>
        </div>
    </div>
    </>
  )
}

export default Ourteachings