import React, { useState } from 'react'
import {process} from '../utils/process'
import { FaMinus, FaPlus } from 'react-icons/fa';

const Wp = () => {
    const [openIndex,setOpenIndex] = useState(0);
    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? -1 : index)
    }
  return (
    <section className='pt-12 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row gap-4 mb-12'>
                <div className='flex-shrink-0 bg-primary text-black py-2 px-16 rounded-md'>
                    <h2 className='text-2xl font-bold'>Our Working Process </h2>

                </div>
                <div className='md:w-2/3'>
                <p className='text-secondary md:w-1/3'>
                Step-by-Step Guide to Achieving Your Business Goals
                </p>

                </div>

            </div>

        <div>
            {
                process.map((step,i) => (
                    <div key={i} className={`border rounded-md mb-4 overflow-hidden ${openIndex === i ? "border-primary" : "border-gray-300"}`}>
                        <button onClick={() => handleToggle(i)}
                        
                        className={`w-full text-left p-4 flex justify-between items-center $
                            {openIndex === i ? 'bg-primary' : 'bg-tertiary' }`}>
                            <div className='flex items-center'>
                                <span className='text-secondary font-extrabold text-2xl mr-4'>{step.number}</span>
                                <h3 className='text-lg font-semibold'>{step.question}</h3>
                            </div>

                            <div className='bg-white text-black border p-1.5 rounded-full'>
                                {
                                    openIndex === i ? (<FaMinus/>) : (<FaPlus/>)
                                }
                            </div>
                        </button>
                        {
                            openIndex === i &&(
                                <div className='p-4 bg-primary text-secondary'>
                                    <hr className='mt-0 mb-5 border-black'/>
                                    <p>{step.answer} </p> 
                                </div>
                            )
                        }

                    </div>

                ))
            }

        </div>

        </div>
         </section>
  ) 
}

export default Wp