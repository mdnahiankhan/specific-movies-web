import React, { useContext, useState } from 'react';
import { DataContext } from './Root';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {

    const data = useContext(DataContext);
    console.log(data);
    return (
        <div>
            <h1 className='text-bold bg-slate-600 rounded-md px-6 py-6 text-white text-4xl w-100'>Show the Statistics</h1>
            <div className='mx-auto text-center p-7' >
                <LineChart
                    width={900}
                    height={500}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </div>
        </div>
    );
};

export default Statistics;