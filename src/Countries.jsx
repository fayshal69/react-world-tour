import { useEffect, useState } from "react";
import Country from "./Country";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [markCountry, setMarkCountry] = useState([]);
    const [visitedFlag, setVisitedFlag] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[]);

    const handleMarkCountry = (country) => { 
        const newMarkCountry = [...markCountry, country];
        setMarkCountry(newMarkCountry);
    }

    const handleVisitedFlag = (country) => {
        const newFlag = [...visitedFlag, country];
        setVisitedFlag(newFlag);
    }
    

    return (
        <div>
            <div style={{border:'2px solid yellow', padding:'10px'}}>
                <h3>Total Country : {countries.length}</h3>
                <p>Visited Country : {markCountry.length}</p>
                <ul>
                    {
                        markCountry.map(c => <li key={c.cca3}>{c.name.common}</li>)
                    }
                </ul>
                <p>Visited Flag : {visitedFlag.length}</p>
                <div style={{display:'grid', gap:'5px', gridTemplateColumns:'repeat(6, 1fr)'}}>
                    {
                        visitedFlag.map(c => <img key={c.cca3} src={c.flags.png} style={{width:'100%'}}></img>)
                    }
                </div>
            </div>
            <div style={{border:'2px solid blue', padding:'10px', display:'grid', gap:'10px', gridTemplateColumns:'repeat(3, 1fr)'}}>
                {
                    countries.map((country) => <Country 
                    handleMarkCountry={handleMarkCountry} 
                    handleVisitedFlag={handleVisitedFlag}
                    key={country.cca3} 
                    country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;