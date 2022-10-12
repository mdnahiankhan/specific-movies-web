import React, { useContext, useState } from 'react';
import { DataContext } from './Root';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Statistics = () => {
    const element = useContext(DataContext);
    const { id, name, total, } = element;
    console.log(element);
    const data = [

    ]
    return (
        <div>
            <h1>This is Statistics</h1>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart height={400} width={600} data={data}>
                    <Line type="monotone" dataKey='total' stroke="#8884d8" activeDot={{ r: 8 }} />
                    <XAxis dataKey="name " />
                    <YAxis />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;