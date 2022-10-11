import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex justify-between h-16 mx-auto">
                    <Link rel="noopener noreferrer" aria-label="Back to homepage" className="flex items-center p-2">
                        <h1 className='text-3xl'>Question Answering Website</h1></Link>
                    <ul className="items-stretch hidden space-x-3 md:flex">
                        <li className="flex">
                            <Link to='/' rel="noopener noreferrer" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Home
                            </Link>
                        </li>
                        <li className="flex">
                            <Link to='/body' rel="noopener noreferrer" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">   Topics
                            </Link>
                        </li>
                        <li className="flex">
                            <Link to='/statistics'
                                rel="noopener noreferrer" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Statistics </Link>
                        </li>
                        <li className="flex">
                            <Link to='/blog' rel="noopener noreferrer" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400">BLog</Link>
                        </li>
                    </ul>
                </div>
            </header >
        </div >
    );
};

export default Header;