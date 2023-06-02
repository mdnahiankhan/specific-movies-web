import React, { useEffect, useState } from 'react';

const Quez = () => {
    const [selectedShow, setSelectedShow] = useState(null);

    useEffect(() => {
        const storedSelectedShow = localStorage.getItem('selectedShow');
        if (storedSelectedShow) {
            setSelectedShow(JSON.parse(storedSelectedShow));
        }
    }, []);
    console.log(selectedShow);
    return (
        <div className='bg-dark-900'>
            <h1 className='text-4xl text-black-900 shadow-lg px-4 bg-white w-1/2 mx-auto mb-6 mt-8'>Movies Name: {selectedShow?.name}</h1>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className='text-center'>
                        <h1 className="text-5xl font-bold py-2">Box Office News</h1>
                        <h1 className='font-bold text-lg'>Movies Live Link: {selectedShow?.officialSite}</h1>
                        <p className="py-2 text-blue-900 font-bold">{selectedShow?.summary}</p>
                        <h1 className='font-semibold text-red-600'>Average Runtime: {selectedShow?.averageRuntime}</h1>
                        <h1>Movie Rating: {selectedShow?.rating.average}</h1>
                        <button className="btn btn-primary bg-green-900 text-white btn-xl">Buy Tickets</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quez;