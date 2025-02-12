import {Link} from 'react-router-dom';
import React from 'react';

const Navbar =()=>{
    return(
        <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">Sukoon</h1>
            <div>
                <Link to="/" className="px-4">Home</Link>
                <Link to="/login" className="px-4">Login</Link>
                    <Link to="/register" className="px-4">Register</Link>
            </div>
        </nav>
    );
};


export default Navbar;