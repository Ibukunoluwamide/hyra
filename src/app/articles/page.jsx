import React from 'react'
import Nav from '../Component/Nav'
import Footer from '../Component/Footer'

const page = () => {
  return (
    <>
    <Nav/>
    <div>
        <div className='py-20'>
        <p className='text-[#FF7676] text-center font-bold text-xl md:mt-0 mt-5'> Articles of Faith</p>
        </div>
        <div className='md:px-64 md:block hidden'>

        <div className='md:flex'>
            <div className='md:w-1/2  text-[12px]'>
                <p className='text-[#FF7676] font-bold w-50 '>There are six Articles of Faith</p>
                <p className=' mt-5'>The Articles of Faith are as follows:</p>
                <div className='mt-3 '>
                <p className='mt-1'>1. Belief  in the Oneness of Allah</p>
                <p className='mt-1'>2. Belief  in the Angels</p>
                <p className='mt-1'>3. Belief  in the  Prophets</p>
                <p className='mt-1'>4. Belief  in the Holy Book</p>
                <p className='mt-1'>5. Belief  in the Day of Judgement</p>
                </div>
            </div>
            <div className='md:w-1/2'>
                <img className='h-40 object-cover w-40  mx-auto' src="https://s3-alpha-sig.figma.com/img/0f4d/87bf/d7dca9bdbeb55c7a5c10ac4509fc7a22?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Dloxw7z1zmsco1tSbV-PdVPVw-~W6m1lFpMWbhPJVcIxNhWpQZnUECONooUjN4-2oHJCo-ef~fYGKiV3NbY~nJKsSf0xoR9nIYx6mPr~dRWK0fEx1-Ufympdb0PgE911tKJvJ~xz9Nve5LOrzAql1qtH8lNGNGbNRuZyExZGjc~HdNH4Q5b1ftaMg-9E-N4~vhgdZZfnmULSvb71jVfpVsJ5oHOIEZq95B7KLSuRLkfXrQPvqVb9QWhZtVnmEE5Bs19biDatF9-s7AjmU0ETyKbCBgd30tj3jbKnVb~fFIwCRflSjwVtKBjuW4q13FrLCsGHRt6OlE~LRvTA98VKTA__" alt="" />
            </div>
        </div>
        </div>
        <div className=' md:hidden block'>

        <div className='grid grid-cols-1 mt-4  px-8  '>
            <div className='w-full'>
                <img className='h-72 w-80  object-cover rounded  -mt-10 mx-auto' src="https://s3-alpha-sig.figma.com/img/0f4d/87bf/d7dca9bdbeb55c7a5c10ac4509fc7a22?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Dloxw7z1zmsco1tSbV-PdVPVw-~W6m1lFpMWbhPJVcIxNhWpQZnUECONooUjN4-2oHJCo-ef~fYGKiV3NbY~nJKsSf0xoR9nIYx6mPr~dRWK0fEx1-Ufympdb0PgE911tKJvJ~xz9Nve5LOrzAql1qtH8lNGNGbNRuZyExZGjc~HdNH4Q5b1ftaMg-9E-N4~vhgdZZfnmULSvb71jVfpVsJ5oHOIEZq95B7KLSuRLkfXrQPvqVb9QWhZtVnmEE5Bs19biDatF9-s7AjmU0ETyKbCBgd30tj3jbKnVb~fFIwCRflSjwVtKBjuW4q13FrLCsGHRt6OlE~LRvTA98VKTA__" alt="" />
            </div>
            <div className=' w-full mt-3 pb-32 mx-auto  text-[12px]'>
                <p className='text-[#FF7676] font-bold w-44 '> The Articles of Faith</p>
                <p className='mt-5'>The Articles of Faith are as follows:</p>
                <div className='mt-3 '>
                <p className='mt-2'>1. Belief  in the Oneness of Allah</p>
                <p className='mt-2'>2. Belief  in the Angels</p>
                <p className='mt-2'>3. Belief  in the  Prophets</p>
                <p className='mt-2'>4. Belief  in the Holy Book</p>
                <p className='mt-2'>5. Belief  in the Day of Judgement</p>
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

export default page