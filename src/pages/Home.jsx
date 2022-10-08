import React from 'react';
import Nav from '../components/Nav';

function Home(props) {
    return (
        <div className='w-screen h-screen overflow-scroll bg-gradient-to-t from-[#ea00d9] via-black to-black'>
            <Nav/>
            <div className='grid justify-items-center m-4'>
                <h1 className='text-white text-[40px] md:text-[50px] font-extrabold text-center'>let <span className='text-[#ea00d9]'>crypto</span> choose your meal...</h1>
                <img src='./cryptoAssets.svg' alt="crypto coins" className='w-[300px] mt-7 md:w-1/3'/>
                <div className='flex flex-col m-4 md:flex-row items-center'>
                    <img src='./cryptoBuffett.png' className='md:w-1/3'/>
                    <p className='text-white text-xl font-bold text-center md:text-left'>Warren Buffet is known as the 5th richest man in the World. The success of his investing firm, Berkshire Hathaway, is attributed to his almost superhuman ability to beat the market. Legends claim that his superpower comes from his odd choice of a morning breakfast. When the market is up, Buffett is known to eat a Bacon Egg and Cheese Biscuit from fast-food franchise McDonalds. Though when the market is down, Buffett opts for the cheaper Sausage McMuffin from McDonalds.</p>
                </div>
                <div className='grid p-4 mb-[75px]'>
                    <h1 className='text-white my-[40px] text-center font-extrabold text-[40px] md:text-[50px]'>What does McCrypto do?</h1>
                    <p className='text-white text-xl font-bold text-center'>McCrypto makes it simple to keep track of rapidly changing crypto prices. McCrypto compares the prices of a crypto asset from the day before to its current price now. If the price of the asset increased from the day before, McCrypto will recommend a Bacon Egg and Cheese Biscuit. If the price of the asset decreased from the day before, McCrypto will recommend a Sausage McMuffin.</p>
                </div>
            </div>
        </div>
    );
}

export default Home;