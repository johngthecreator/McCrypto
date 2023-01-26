import React, { useEffect, useState } from 'react';
import axios from 'axios'

function Crypto(props) {
    const yesterday = new Date(new Date());
    yesterday.setDate(yesterday.getDate()-1);
    const allAssets = ["ETH","BTC","LTC","SOL","ADA","LINK","MATIC","DOT","QNT","DESO","DOGE","XLM","ATOM","BCH","EOS","COMP","CRO","MKR"]
    const [cryptoData, setCryptoData] = useState([]);
    useEffect(()=>{
        fetchAllCrypto();
    },[])
    const fetchAllCrypto = () => {
        for( let x in allAssets){
            if (cryptoData.length < 6){
                axios.get(`https://api.coinbase.com/v2/prices/${allAssets[x]}-USD/spot?date=${yesterday.getFullYear()}-${yesterday.getMonth()+1}-${yesterday.getDate()}`)
                .then(res=>{
                    let currAsset = res.data.data.base;
                    let oldPrice = res.data.data.amount;
                    let currency = res.data.data.currency;
                    axios.get(`https://api.coinbase.com/v2/prices/${allAssets[x]}-USD/buy`)
                    .then(res=>{
                        let currPrice = res.data.data.amount
                        setCryptoData(prevData => ([...prevData, {"cryptoAsset":currAsset,"currPrice":currPrice, "currency":currency, "oldPrice":oldPrice}]));
                    })
                    .then(e=>{console.log(e)})
                })
                .catch(e=>{console.log(e)})
            }
        }
    }
    return (
        <div className='m-4 flex flex-wrap justify-center text-left'>
            {cryptoData.map((asset)=>{
                return(
                    <div className='p-4 m-3 bg-black rounded-xl shadow-lg border-solid border-[#ea00d9] border-2'>
                        <h1 className='font-bold text-xl text-white'>{asset.cryptoAsset}</h1>
                        <h1 className="text-white">${asset.currPrice}</h1>
                        <h1 className="text-white">Recommended Meal:</h1>
                        <img className="h-[100px] w-[200px]" src={(asset.oldPrice > asset.currPrice) ? "./sausageMcMuffin.webp" : "./baconEggNCheese.webp"} />
                    </div>
                )
            })}
        </div>
    );
}

export default Crypto;