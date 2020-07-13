import React from 'react'
import styled from 'styled-components';

const CountryStyle = styled.div`
    width:264px;
    /* border: 1px solid rebeccapurple; */
    text-align:left;
    border-radius:5px;
    margin:1em;
    overflow:hidden;
    box-shadow: 0 0 7px 3px rgba(0,0,0,0.03);
    img{
        width:100%;
        height:160px;
        object-fit:cover;
    }
    .details{
        padding:1.5rem;
    }
    h2{
        margin:0;
        margin-bottom:1rem;
        font-size:18px;
    }
    p{
        font-size:.9em;
        margin-bottom:.5rem;
    }
`

export const Country = ({flag, name, population, region, capital}) => {
    return (
        <CountryStyle>
            <img src={flag} alt="flag"/>
                <div className="details">
                    <h2>{name}</h2>
                    <p><strong>Población:</strong>{population}</p>
                    <p><strong>Región:</strong>{region}</p>
                    <p><strong>Capital:</strong>{capital}</p>
                </div>
        </CountryStyle>
    )
}
