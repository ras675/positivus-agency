import React from 'react'
import test from '../utils/test'
import { BsChatQuote } from 'react-icons/bs'
import { IoArrowBack } from 'react-icons/io5'
import { IoMdArrowForward } from 'react-icons/io'

const Test = () => {
  return (
    <section className='pt-24 pb-8 bg-white ' id="test">
        <div className='max-w-7xl mx-auto px-8 sm:px-6 lg:px-8 relative'>
        <div className='flex flex-col md:flex-row gap-4 mb-12'>
                <div className='flex-shrink-0 bg-primary text-black py-2 px-16 rounded-md'>
                    <h2 className='text-2xl font-bold'>Testimonials</h2>

                </div>
                <div className='md:w-2/3'>
                <p className='text-secondary md:w-2/3'>
                Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
                </p>

                </div>

            </div>

            <div className='relative mb-12'>
                <div className='flex flex-col md:flex-row max-w-7xl mx-auto gap-3 overflow-hidden' >
                {
                    test.slice(0,3).map((test,index) => (
                        <div key={index} className='w-full relative py-5 md:max-w-md px-2'>
                            <div className='absolute top-0 left-0 z-30'>
                                <BsChatQuote className='size-8' />
                            </div>
                            <div className=' h-48  bg-white hover:bg-primary rounded-lg border
                            hover:border-primary shadow-lg p-6 cursor-pointer transition-all
                            duration-300'>
                                <p className='text-base font-medium mb-4'>{test.text}</p>
                                <p className='text-sm font-semibold text-gray-700'>{test.author}</p>
                            </div>

                        </div>
                    ))
                }

            </div>
            <div className='absolute mt-5 left-1/2 transform -translate-x-1/2 flex items-center 
            space-x-5 z-10'>
                <button className='text-black'>
                    <IoArrowBack/>
                </button>
                <div>
                    dots
                </div>
                <button className='text-black' >
                    <IoMdArrowForward/>
                </button>


            </div>
            </div>
            
        </div>

    </section>
  )
}

export default Test