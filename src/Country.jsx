import { useState } from "react";

const Country = ({country, handleMarkCountry, handleVisitedFlag}) => {
    const {name, capital, cca3, flags} = country;
    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }

    return (
        <div style={{border:'1px solid red', padding:'10px', backgroundColor:visited && 'aqua'}}>
            <h3>Country : {name.common}</h3>
            <h5>Capital : {capital}</h5>
            <p><small>Code : {cca3}</small></p>
            <img src={flags.png} alt="" /> <br />
            <button onClick={() => handleVisited()}>{visited?'Visited':'Going'}</button> <br />
            <button onClick={() => handleMarkCountry(country)}>Mark Visited</button> <br />
            <button onClick={() => handleVisitedFlag(country)}>Visited Flag</button>
        </div>
    );
};

export default Country;