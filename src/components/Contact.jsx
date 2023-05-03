import React from 'react'

const Contact = () => {
    return (
        <>
            {/* <section className="text-gray-600 body-font relative">
                <div className="container px-5 pb-16 mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Contact Us</h1>
                        <div className="flex mt-6 justify-center">
                            <div className="w-16 h-1 rounded-full bg-red-500 inline-flex"></div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlhtmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                                    <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlhtmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                    <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlhtmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                                    <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300  h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <button className="flex mx-auto text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}


            <section className="text-gray-600 body-font relative">
                <div className="text-center mt-24 mb-16">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Get In Touch</h1>
                    <div className="flex mt-6 justify-center">
                        <div className="w-16 h-1 rounded-full bg-red-500 inline-flex"></div>
                    </div>
                </div>
                <div className="w-full md:w-10/12 px-5 pb-10 mx-auto flex sm:flex-nowrap flex-wrap">

                    <div className="md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">

                        <iframe width="100%" height="100%" className="absolute inset-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448193.951015035!2d76.76357497207219!3d28.644287357064808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi%2C%20India!5e0!3m2!1sen!2sbd!4v1683036191362!5m2!1sen!2sbd" style={{ filter: 'grayscale(0.2)  opacity(0.9)' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                                <p className="mt-1">C 5/42, Safdarjung Devp Area, Delhi, 110016, India</p>
                            </div>
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                                <a className="text-red-500 leading-relaxed">chefrecipe@email.com</a>
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                                <p className="leading-relaxed">123-456-7890</p>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">

                        <h2 className="text-gray-900 text-2xl mb-4 font-medium title-font">What you want to Know ?</h2>

                        <div className="relative mb-4">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                            <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                            <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                        </div>
                        <button className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Send Message</button>


                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact