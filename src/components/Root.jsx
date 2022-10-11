
import { createContext, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from './Header';


export const DataContext = createContext([])

const Quezcontext = createContext([]);
const Root = () => {
    const { data } = useLoaderData();
    const [quez, setquez] = useState([]);
    return (
        <DataContext.Provider value={data}>
            <Quezcontext.Provider value={[quez, setquez]}>
                <Header></Header>
                <Outlet></Outlet>
            </Quezcontext.Provider>
        </DataContext.Provider>

    );
};

export default Root;