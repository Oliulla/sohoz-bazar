import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    
    return (
        <div className='text-yellow-500 w-full h-auto p-20 bg-gray-900 
            flex flex-col md:flex-row md:justify-evenly gap-8' 
        >
            <div>
                <p className='hover:underline cursor-pointer'>Social Links</p>
                <p className='hover:underline cursor-pointer'>Fund Us</p>
                <p className='hover:underline cursor-pointer'>Explore</p>
                <p className='hover:underline cursor-pointer'>New Topics</p>
            </div>
            <div>
                <p className='hover:underline cursor-pointer'>Follow Us</p>
                <p className='hover:underline cursor-pointer'>Explore New</p>
                <p className='hover:underline cursor-pointer'>Technologies</p>
                <p className='hover:underline cursor-pointer'>Others</p>
            </div>
            <div>
                <p className='hover:underline cursor-pointer'>Settings & Privacies</p>
                <p className='hover:underline cursor-pointer'>Tearms and Conditions</p>
                <p className='hover:underline cursor-pointer'>Social Links</p>
                <small>Copyright © 2018-2022. All Rights Reserved To <Link to='/' className='hover:underline cursor-pointer text-orange-800 font-bold text-xl'><em>Sohoz Bazar</em></Link>.</small>
            </div>
        </div>
    );
};

export default Footer;