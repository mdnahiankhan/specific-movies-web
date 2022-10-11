import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowQuez from './ShowQuez';

const Quez = () => {
    const { data } = useLoaderData();
    const { name, id, questions } = data;
    return (
        <div>
            <h1 className='text-4xl text-blue-400'>Question For {name}</h1>
            {
                questions.map(data => <ShowQuez key={data.id} data={data}></ShowQuez>)
            }
        </div>
    );
};

export default Quez;