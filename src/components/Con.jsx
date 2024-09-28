import React from 'react'

const Con = () => {
  return (
    <section className='pt-24 pb-16 bg-white' id='contact'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex flex-col md:flex-row gap-4 mb-12'>
                <div className='flex-shrink-0 bg-primary text-black py-2 px-16 rounded-md'>
                    <h2 className='text-2xl font-bold'>Contact Us</h2>

                </div>
                <div className='md:w-2/3'>
                <p className='text-secondary md:w-2/3'>
                Connect with Us: <br/> Let's Discuss Your Digital Marketing Needs 
                </p>

                </div>
                </div>

                <div className='flex flex-col md:flex-row justfiy-between bg-tertiary 
                rounded-lg md:p-8 p-4'>
                    <div className='w-full md:w-1/2 p-4'>
                        <form className='space-y-4'>
                            <div className='flex flex-col md:flex-row md:space-x-4 items-start
                            justify-start'>
                                <label className='flex items-center'>
                                    <input type="radio" name="contact-type" className='mr-2'
                                    value="hi"/>
                                    Say Hi
                                </label>
                                <label className='flex items-center mt-2 md:mt-0'>
                                <input type="radio" name="contact-type" className='mr-2'
                                    value="quote"/>
                                    Get a Quote
                                </label>
                            </div>

                            <div>
                                <label className='block text-sm font-medium text-gray-700'>Name</label>
                                <input type="text" name="name" id="name" className='mt-2 py-2.5px-4
                                block w-full rounded-md shadow-sm focus:outline-none focus:ring
                                focus:ring-primary' placeholder='Mr. X'/>
                            </div>    

                             

                                <div>
                                <label className='block text-sm font-medium text-gray-700'>Email*</label>
                                <input type="email" name="email" id="email" className='mt-2 py-2.5px-4
                                block w-full rounded-md shadow-sm focus:outline-none focus:ring
                                focus:ring-primary' placeholder='Enter your email'/>
                                
                                    </div>         

                                    <div>
                                    <label className='block text-sm font-medium text-gray-700'>Message*</label>
                                <textarea rows="6" type="message" name="message" id="message" className='mt-2 py-2.5px-4
                                block w-full rounded-md shadow-sm focus:outline-none focus:ring
                                focus:ring-primary' placeholder='Enter your message...'/>


                                        
                                        </div>   
                                        <button type='submit' className='inline-block px-7 py-3 bg-black text-white font-semibold rounded-md hover:bg-primary hover:text-black transition-all duration-300'>Send Message</button>         
                        </form>
                    </div>
                </div>

            </div>
    </section>
  )
}

export default Con