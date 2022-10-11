import React from 'react';
import Option from './Option';

const ShowQuez = ({ data }) => {
    const { question, correctAnswer, options } = data
    return (
        <div>
            <div className='bg-gray-500 md:3/4 sm:w-full rounded-md lg:p-5 md:p-3 sm:p-2 my-4 mx-auto relative'>
                <p>{question}</p>
            </div>

            <div className='grid md:grid-cols-2 grid-cols-1 gap-4 my-3'>
                {
                    options.map(option => <Option key={option.id} option={option}></Option>)
                }
            </div>
        </div>
    );
};

export default ShowQuez;