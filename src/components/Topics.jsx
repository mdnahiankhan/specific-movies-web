import React, { useContext } from 'react';
import { DataContext } from './Root';
import Topicitem from './Topicitem';

const Topics = () => {
    const datas = useContext(DataContext)
    return (
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
            <div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-4 lg:row-gap-8'>
                {
                    datas.map(data => <Topicitem
                        key={data.id}
                        data={data}
                    ></Topicitem>)
                }
            </div>
        </div>
    );
};

export default Topics;