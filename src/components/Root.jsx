
import { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from './Footer';

import Header from './Header';


export const DataContext = createContext([])


const Root = () => {
    const { data } = useLoaderData();
    return (
        <DataContext.Provider value={data}>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </DataContext.Provider>

    );
};

export default Root;