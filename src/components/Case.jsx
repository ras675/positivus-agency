import React from 'react';
import caseS from '../utils/caseS';
import { MdOutlineArrowOutward } from 'react-icons/md';

const Case = () => {
  return (
    <section className='pt-24 pb-16 bg-white' id='use-cases'>
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row gap-4 mb-12'>
            <div className='flex-shrink-0 bg-primary text-black py-2 px-8 rounded-md'>
                <h2 className='text-2xl font-bold'>Case Studies</h2>

            </div>
            <div className='md:w-2/3'>
            <p className='text-secondary md:w-1/2'>
            Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
            </p>
            </div>
      </div>
            <div className='bg-black text-white p-8 rounded-md'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                    {
                        caseS.map((study,index) => (
                            <div key={index} className='p-4 border border-gray-700 rounded-md'>
                                <h3 className='text-xl font-semibold mb-2'>{study.title}</h3>
                                <p className='mb-4'>{study.description}</p>
                                <a href="#" className='text-primary flex items-center
                                hover:underline'>
                                    Learn More <MdOutlineArrowOutward className='ml-2'/>
                                </a>
                            </div>

                        ))
                    }
                </div>
            </div>
    
    </div>

</section>
  );
}

export default Case;
