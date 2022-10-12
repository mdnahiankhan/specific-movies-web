
import { createContext, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from './Header';


export const DataContext = createContext([])


const Root = () => {
    const { data } = useLoaderData();
    console.log(data);
    return (
        <DataContext.Provider value={data}>
            <Header></Header>
            <Outlet></Outlet>
        </DataContext.Provider>

    );
};

export default Root;