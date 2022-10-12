import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='text-3xl bg-blue-300 mt-4 lg:mx-20 md:mx-16 sm:mx-8 lg:p-10 md:p-6 sm:p-3 p-2 rounded-md'>
                <h1 className='bg-white rounded-md'>Question 1: What is the purpose of React Router</h1>
                <p className='bg-gray-200 md:w-3/4 sm:w-full rounded-md md:p-3 sm:p-2 p-2 my-4 mx-auto relative'>Answer: React Router is a standard library for routing in React.Its very helpful to user experience.Its create a navigation root to among views of various components in a React Applicatio </p>
            </div>
            <div className='text-3xl bg-blue-300 mt-4 lg:mx-20 md:mx-16 sm:mx-8 lg:p-10 md:p-6 sm:p-3 p-2 rounded-md'>
                <h1 className='bg-white rounded-md'>Question 2: How Does Context Api Works</h1>
                <p className='bg-gray-200 md:w-3/4 sm:w-full rounded-md md:p-3 sm:p-2 p-2 my-4 mx-auto relative'>Answer: Context provides a way to pass data through the component tree without having to pass props down manually at every level.Its the easyest way to get data one component to another.This is the alternative to "prop drilling". </p>
            </div>
            <div className='text-3xl bg-blue-300 mt-4 lg:mx-20 md:mx-16 sm:mx-8 lg:p-10 md:p-6 sm:p-3 p-2 rounded-md'>
                <h1 className='bg-white rounded-md'>Question 3: What do You mean Useref</h1>
                <p className='bg-gray-200 md:w-3/4 sm:w-full rounded-md md:p-3 sm:p-2 p-2 my-4 mx-auto relative'>Answer: The useRef Hook allows you to persist values between renders.It can be used to store a mutable value that does not cause a re-render when updated.It can be used to access a DOM element directly.If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.To avoid this, we can use the useRef Hook.</p>
            </div>
        </div>
    );
};

export default Blog;