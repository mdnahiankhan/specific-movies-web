import React from 'react';
import Students from '../assets/Students.jpg'
const Home = () => {
    return (
        <section>
            <div className="bg-gray-100">
                <div className="container flex flex-col items-center pb-24 mx-auto text-center lg:pb-56 md:py-30 md:px-10 lg:px-25 text-gray-900">
                    <h1 className='text-xl'>Wellcome to Learnign website to know something.</h1>
                    <p>First to show our rules and regulation.</p>
                </div>
            </div>
            <img
                src={Students}
                alt=""
                className="w-3/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 bg-gray-500"
            />

        </section>
    );
};

export default Home;