import React from 'react';
import Crypto from '../components/Crypto';
import Nav from '../components/Nav';

function Stock(props) {
    return(
        <div className='w-screen h-screen overflow-scroll bg-gradient-to-t from-[#ea00d9] via-black to-black'>
        <Nav/>
        <Crypto/>
        </div>
    )
}

export default Stock;