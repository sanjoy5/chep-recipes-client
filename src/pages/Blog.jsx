import React, { useRef } from 'react'
import Pdf from "react-to-pdf";

const Blog = () => {

    const ref = useRef();

    return (
        <div className='w-100 md:w-10/12 mx-auto'>

            <div className="blogs py-16 rounded  w-full">
                <div className="flex items-center flex-col gap-6">
                    <h2 className="text-4xl font-bold text-white">Ours <span className="text-red-500">Blogs </span></h2>
                    <Pdf targetRef={ref} filename="blogs.pdf">
                        {({ toPdf }) => (<button onClick={toPdf} className="py-2 px-6 text-lg font-semibold rounded text-white bg-red-500 hover:bg-red-600">Download PDF</button>)}
                    </Pdf>
                </div>
            </div>

            <div ref={ref}>
                <div className="py-10 md:py-16  px-4">

                    <div className="mb-5">
                        <h2 className="text-2xl md:text-3xl font-semibold"><span className="text-red-500">Qus: </span> Differences between uncontrolled and controlled components ?</h2>

                        <p className="text-lg text-gray-600 mt-5 text-justify"> <span className="text-red-500">Answer: </span> Controlled components have their value controlled by the parent, while uncontrolled components control their own value. Controlled components are more commonly used in React applications because they provide better control and flexibility over the data flow between components. However, uncontrolled components can be useful in certain situations where you don't need to synchronize the component's value with the rest of your application's state.</p>
                    </div>


                    <div className="mb-5">
                        <h2 className="text-2xl md:text-3xl font-semibold"><span className="text-red-500">Qus: </span> How to validate React props using PropTypes ?</h2>

                        <p className="text-lg text-gray-600 mt-5 text-justify"> <span className="text-red-500">Answer: </span> In React, PropTypes is a package that provides a way to validate the props of a component to ensure that they have the correct data type and structure. This helps to prevent errors and bugs in your application by providing an easy way to check that the data being passed between components is of the expected type.</p>
                    </div>


                    <div className="mb-5">
                        <h2 className="text-2xl md:text-3xl font-semibold"><span className="text-red-500">Qus: </span> Difference between nodejs and express js ?</h2>

                        <p className="text-lg text-gray-600 mt-5 text-justify"> <span className="text-red-500">Answer: </span> Node.js is a JavaScript runtime that allows developers to run JavaScript code outside of a web browser. It provides a platform for building server-side applications using JavaScript. Express.js, on the other hand, is a web framework built on top of Node.js that simplifies the process of building web applications by providing a set of features and tools.</p>
                    </div>



                    <div className="mb-5">
                        <h2 className="text-2xl md:text-3xl font-semibold"><span className="text-red-500">Qus: </span> What is a custom hook, and why will you create a custom hook?</h2>

                        <p className="text-lg text-gray-600 mt-5 text-justify"> <span className="text-red-500">Answer: </span> In React, a custom hook is a function that allows you to reuse logic across multiple components. Custom hooks are a way to abstract away complex logic and provide a simple interface for components to use.
                            <br />
                            You might create a custom hook if you find yourself repeating a certain pattern of behavior in your components. For example, if you have several components that need to fetch data from an API and handle loading and error states, you could create a custom hook that encapsulates that logic.
                        </p>
                    </div>




                </div>
            </div>

        </div>
    )
}

export default Blog