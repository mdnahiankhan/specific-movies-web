
import { createContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

import Header from './Header';


export const DataContext = createContext([])


const Root = () => {
    const [shows, setShows] = useState([]);
    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then(response => response.json())
            .then(data => {
                setShows(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);
    return (
        <DataContext.Provider value={shows}>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </DataContext.Provider>

    );
};

export default Root;