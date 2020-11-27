import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';

export default function Btc() {

    const [informations, setInformations] = useState([]);
    const [eurInformation, setEurInformations] = useState([]);
    const [usdInformation, setUsdInformations] = useState([]);
    const [gbpInformation, setGbpInformations] = useState([]);

    useEffect(() => {

        if(informations.length === 0) {
            axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
                .then(response => {
                    setInformations(response.data.bpi);
                });
            }

        
        if(informations.length !== 0) {

            setEurInformations(informations.EUR)
            setUsdInformations(informations.USD)
            setGbpInformations(informations.GBP)
        }
        
        
    })
    return (

        <div className="btc-page">
            <div className="btc-content">
                <h1>BitCoin Quotation</h1>

                <ul className="btc-information">
                   
                        <li key={eurInformation.code} className="btc-card">
                            <h2>{eurInformation.code}</h2>                            
                            <h2> € </h2>
                            <h2>{eurInformation.rate}</h2>
                            <h2>{eurInformation.description}</h2>
                        </li>

                        <li key={usdInformation.code} className="btc-card">
                            <h2>{usdInformation.code}</h2> 
                            <h2>$</h2>
                            <h2>{usdInformation.rate}</h2>  
                            <h2>{usdInformation.description}</h2>
                            
                        </li>
                        
                        <li key={gbpInformation.code} className="btc-card">
                            <h2>{gbpInformation.code}</h2>
                            
                            <h2>£</h2>
                            <h2>{gbpInformation.rate}</h2>
                            <h2>{gbpInformation.description}</h2>
                            
                        </li>
        
                </ul>
            </div>
        </div>
    )
}