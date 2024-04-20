import React from 'react'
import Nav from './Component/Nav'
import Footer from './Component/Footer'
import Teachings from './Component/Teachings'

const Home = () => {
    return (
        <>
            <Nav />

            <div className=' md:flex py-8 hidden'>
                <div className=' md:w-1/2'>
                    <div className='md:px-20  md:mt-20'>
                        <p className='md:text-4xl font-bold'>Discover a world where education meets excitement
                        </p>
                        <p className='text-sm mt-7 md:w-96'>Our Islamic app for kids is designed to inspire and teach in the most enjoyable way. Our app is not just educational; it's an adventure in faith</p>
                    </div>
                </div>
                <div className='md:w-1/2'>
                    <img className='md:h-72 mx-auto md:mt-14 rounded-md' src="https://s3-alpha-sig.figma.com/img/a16a/bda1/0462006a4f1b798567dfd1883a5996fd?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TpBHxNoEp8-xbv5JwmsXN~I2PGGEjHDd7DctlXeHX3ABdIsiXuzW~2J7~eJLJ4Nun5ARQTodS7xLIYOnFCnuXOSptYklZ3Ir8zHSD6ndix0zci8R7ZmNXvXGNWhYhGS~x81dP1vhZsL9zO99STePEOKY9Iww7i98L-4rgcbhSMn~nfJeeh8p-ft-kZxwXZE3wv7hGQy8HKHOw3KuIdZY5L~JBVU7i9tOG~wbRNbV3CAEEERu7fhOc7vb~sZ-AyP8XnqncjRfGfMGXOQrMBl36UjQcOOcG7m0eM8i7av4NubqEPzOE2PLtbB1RyjYdMOOByay4tkDl6hdjg5Lv1aKLg__" alt="" />
                </div>
            </div>
            
            <div className='md:hidden block px-7 py-10'>
                <div className='mt-10 md:w-1/2'>
                    <img className='h-44 mx-auto md:mt-14 rounded-md' src="https://s3-alpha-sig.figma.com/img/a16a/bda1/0462006a4f1b798567dfd1883a5996fd?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TpBHxNoEp8-xbv5JwmsXN~I2PGGEjHDd7DctlXeHX3ABdIsiXuzW~2J7~eJLJ4Nun5ARQTodS7xLIYOnFCnuXOSptYklZ3Ir8zHSD6ndix0zci8R7ZmNXvXGNWhYhGS~x81dP1vhZsL9zO99STePEOKY9Iww7i98L-4rgcbhSMn~nfJeeh8p-ft-kZxwXZE3wv7hGQy8HKHOw3KuIdZY5L~JBVU7i9tOG~wbRNbV3CAEEERu7fhOc7vb~sZ-AyP8XnqncjRfGfMGXOQrMBl36UjQcOOcG7m0eM8i7av4NubqEPzOE2PLtbB1RyjYdMOOByay4tkDl6hdjg5Lv1aKLg__" alt="" />
                </div>
                <div className='text-center md:w-1/2'>
                    <div className='md:px-20  md:mt-20'>
                        <p className=' text-xl  mt-6 mb-8 font-bold'>Discover a world where education meets excitement
                        </p>
                        <p className='text-md mt-4 md:w-96'>Our Islamic app for kids is designed to inspire and teach in the most enjoyable way. Our app is not just educational; it's an adventure in faith</p>
                    </div>
                </div>
            </div>

            <div className='px-2'>
                <p className='text-center text-2xl mt-5 font-bold'>Why Choose Us</p>
                <div className=' flex-wrap grid md:grid-cols-4  grid-cols-2 md:gap-10 gap-4 md:px-44   mt-10'>
                    <div className='bg-[#0802A3] text-white px-3 py-7 text-center rounded-md '>
                        <img className='h-14 w-16 rounded-sm mx-auto mb-4' src="https://s3-alpha-sig.figma.com/img/a16a/bda1/0462006a4f1b798567dfd1883a5996fd?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TpBHxNoEp8-xbv5JwmsXN~I2PGGEjHDd7DctlXeHX3ABdIsiXuzW~2J7~eJLJ4Nun5ARQTodS7xLIYOnFCnuXOSptYklZ3Ir8zHSD6ndix0zci8R7ZmNXvXGNWhYhGS~x81dP1vhZsL9zO99STePEOKY9Iww7i98L-4rgcbhSMn~nfJeeh8p-ft-kZxwXZE3wv7hGQy8HKHOw3KuIdZY5L~JBVU7i9tOG~wbRNbV3CAEEERu7fhOc7vb~sZ-AyP8XnqncjRfGfMGXOQrMBl36UjQcOOcG7m0eM8i7av4NubqEPzOE2PLtbB1RyjYdMOOByay4tkDl6hdjg5Lv1aKLg__" alt="" />
                        <p className='text-sm'> Our app contains the fundamental teaching of Islam for Kids</p>
                    </div>
                    <div className='bg-[#FF7676] text-white px-3 py-7 text-center rounded-md '>
                        <img className='h-14 w-16 rounded-sm mx-auto mb-4' src="https://s3-alpha-sig.figma.com/img/3575/b91a/cd30942a4b872528285006aad5411863?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iB~pvmSLtVA8jSu1NfSW3N3n-yv2WiP2K949m9ppNB~EF3rzajE4o1xifcoUuNh82LWcWdkG~zn5KvJQAJUGKC-9sCZCctTj6AeU3AMx~AqajNbX3fe3HgLLMIwTR9kkL7wlRHxU43OndQN-k6WHgOTJytM7BVipa0fw0AlUeKp~YStmhh-~mo9OJj2NeWOCmFNp4OJWy5KrhotYJhGypm~r4Bgep4EX9afznfQC6Yk1Ha2tn0~NWTwk7kuyEkAmFbMF86xFh6yh7alnjxfLjmhzVEVvc3~ob0uTNUDReN7sw7IDjxTzj5dv-iK-agRZ-Aaahhwcr9qN9T-d2xAI1g__" alt="" />
                        <p className='text-sm'> We make it interesting by including the the Stories of the Prophets and his Companions  </p>
                    </div>
                    <div className='bg-[#FF4B91] text-white px-3 py-7 text-center rounded-md '>
                        <img className='h-14 w-16 rounded-sm mx-auto mb-4' src="https://s3-alpha-sig.figma.com/img/8771/e0c4/0e16de03db2c9d610bd05dd1a50ea26f?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k3Ook2oZXSY34WcnextMCE39J8X6JaMdMay12EaHFZ7muDrUC83UAsnewcoKGl4P4ingK92q6EumgyOSaeXUhbQZR1uVZBqQdOwl~XWB2bUmZC7I66Q2VggTIgmCLYBl43UFVHeL33wxkQIbQQ~jAxRMMz2Jmsuvb667XOfcbYohFREIeYXyu0LpgPxbsExTPHf2Nsd9gao~24zTeqt3Jr89mLkOrKKhNDXlYwCRIXMpBSjQzu~8RNiQFbMixkWUy2qz~yDMGbn5VoV4YF8wFLOop9aT2vunc6qufpUdls51SxnBg1qB1eASn9FfNUzFXaGVJbVBH3Vn8AIDpL0kvw__" alt="" />
                        <p className='text-sm'> As we all know that Du’a is an essential part of our life as a Muslim. Du’a is also included in our app </p>
                    </div>
                    <div className='bg-[#FFCD4B] text-white px-3 py-7 text-center rounded-md '>
                        <img className='h-14 w-16 rounded-sm mx-auto mb-4' src="https://s3-alpha-sig.figma.com/img/ce0b/b403/7df7cc49a886b4b8502f1a1fbec4d83d?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iCf7dUNPy0VZX74FCyCHS6UaO4kN4DKC2cdJfxYz2KPwTojqAGEEjL4cMyJqTNrgZRJry~VBYpLaDQNFEzKpOHt9xhsrr0-2k0teLh~gU0hsNbOpzEV0OJ~c1HAgWSWBsQJjwN1n5sRVVItPjJV-zBFQZ86Zs31gxYfBf4YUeXEjf9f214Mf88xZiOGJ70KIMq536PXM1we1z607SgzrRcNO2iXyedn7s4ot3DaYsqHLxIfWyef3s72xvoj5nrGpbuok4Z1y6Ngp6~haFDXQ9bx7vDJz~TNG6ZPTJFET5CKNbHeLsn-TNgRoYXF81jvvDg1FkgI~YrGNiA2PLlxZ0Q__" alt="" />
                        <p className='text-sm'> Our app contains the 99 Names of Allah  </p>
                    </div>
                </div>
            </div>

            <div className='px-3'>
               <Teachings/>
            </div>
            <div className='bg-[#FF4B91] md:flex flex py-7 px-7 md:py-9 mt-16 justify-between'>
                <div className='md:w-1/2 md:px-40'>
                    <p className='font-bold text-xl text-white '>
                        The Prophet (S.A.W) said “Seeking knowledge is an obligation upon every Muslim”
                    </p>
                    <button className='text-[#FF4B91] flex justify-around rounded bg-white md:py-1 py-4 px-2 md:px-5 mt-5'>
                        <p> Get started with us </p> <i className="bi ms-3 text-md bi-arrow-right"></i></button>
                </div>
                <div className='md:w-1/2'>
                    <img className='md:h-52 rounded mx-auto' src="https://s3-alpha-sig.figma.com/img/b1d7/0295/355078eed907ef2987eb3fdb24ab7b34?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QOdiXSDCoYz88XR3N7~BlIJeahUejNaJzgO~XzcZD9osT~M9UiqvdVFy1pxqBZKqITIsWnFAAFGAkAg6CFm7YeSjEtBKl4G-iJwb8EQhfHbqAnVwXwFXiBPEpndfjlnXxxi59ToDvj3dovrqCBYWcU1x6US1m3k7DKNHOnZZxAcWcPcM8fEs6iBA1ycyeT5TmW0F3O4sebT3w7kLIiGHf2UiU1CQ385FJLL7TOwweEaYRvryGRqwtWPBG8uJeSt8Oxp~NbH2-rKknHNZcpbZFsT9JdAyo61pMmnUzB0PxhQrsuzzNaUdKpvZgerhn0mfr1CGTeRTpgBQMC8XFiYixQ__" alt="" />
                </div>
            </div>
            <Footer/>

        </>
    )
}

export default Home