import React from 'react';
import styled from 'styled-components';
import { Country } from './Country';
import { useEffect } from 'react';
import { useState } from 'react';


const CountryListStyle  = styled.div`
    display:grid;
    grid-row-gap:2.3em;
    border:1px solid red;
    /* grid-template-columns:1fr 1fr 1fr; */
    background-color:var(--bg);
    padding:4em 2em;

`

export const CountryList = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                console.log(data);
                setCountries(data);
            })
            .catch(() => {
                console.log('hubo un error');
            })
    }, [])
    
    return (
        <CountryListStyle>
            {
                countries.map(({name, alpha3Code, capital, flag,population, region }) =>{
                    return(
                        <Country
                            key={alpha3Code}
                            flag={flag}
                            name={name}
                            population={population}
                            region={region}
                            capital={capital}
                        />
                    )
                    
                })
               
            }
             
        </CountryListStyle>
    )
}
