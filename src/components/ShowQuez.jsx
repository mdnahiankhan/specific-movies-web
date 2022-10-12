import React from 'react';
import { toast } from 'react-toastify';
import Option from './Option';

const ShowQuez = ({ data }) => {
    const { question, correctAnswer, options, id } = data;
    console.log(data);

    const checkhandler = (options) => {
        const Answer = options.find(existanswer => existanswer === existanswer.correctAnswer)
        if (Answer) {
            toast.success('The answer is correct', { autoClose: 500 })
        }
        else {
            toast.error('the answer is wrong!', { autoClose: 500 })
        }
    }
    return (
        <div className='bg-slate-300 mt-4 lg:mx-20 md:mx-16 sm:mx-8 lg:p-10 md:p-6 sm:p-3 p-2 rounded-md'>
            <div className='bg-gray-500 md:3/4 sm:w-full rounded-md lg:p-5 md:p-3 sm:p-2 my-4 mx-auto relative'>
                <p className='bg-gray-200 md:w-3/4 sm:w-full rounded-md md:p-3 sm:p-2 p-2 my-4 mx-auto relative'>{question}</p>
            </div>

            <div className='grid md:grid-cols-2 grid-cols-1 gap-4 my-3'>
                {
                    options.map(option => <Option key={option.id} option={option} checkhandler={checkhandler}></Option>)
                }
            </div>
        </div>
    );
};

export default ShowQuez;