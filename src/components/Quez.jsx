import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowQuez from './ShowQuez';

const Quez = () => {
    const { data } = useLoaderData();
    const { name, questions } = data;
    return (
        <div>
            <h1 className='text-4xl text-blue-100 shadow-lg px-4 bg-gray-600 w-1/2 mx-auto mb-6 mt-8'>Question For {name}</h1>
            {
                questions.map(data => <ShowQuez key={data.id} data={data} Answer={data.correctAnswer}></ShowQuez>)
            }
        </div>
    );
};

export default Quez;