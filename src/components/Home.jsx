import React, { useContext } from 'react';
import Students from '../assets/Students.jpg'
import { DataContext } from './Root';
import Topics from './Topics';

const Home = () => {
    const data = useContext(DataContext);
    return (
        <section>
            <div className="bg-gray-100">
                <div className="container flex flex-col items-center pb-24 mx-auto text-center lg:pb-56 md:py-30 md:px-10 lg:px-25 text-gray-900">
                    <h1 className='text-3xl text-blue-800 md:px-10'>Wellcome to Learning website to know something.</h1>
                    <p className='text-xl text-green-600 md:px-10'>Its very Helpfull to know CSE in different Way.</p>
                </div>
            </div>
            <img
                src={Students}
                alt=""
                className="w-3/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 bg-gray-500"
            />
            <Topics></Topics>
        </section>
    );
};

export default Home;