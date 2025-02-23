import { useEffect, useState } from "react";

function Weather() {
    const [weathers, setWeathers] = useState(null); 
    const [city, setCity] = useState("Cairo");
    const [searched, setSearched] = useState(""); 

   
    async function getWeather() {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=ad317905a1194d02968152651250602&q=${city}&aqi=no`);
        const body = await response.json();
        setWeathers(body);
    }

    
    useEffect(() => {
        getWeather();
    }, [city]);

    
    const handleSearch = () => {
        setCity(searched);
    };

    return (
        <>
        <h1 className="text-center text-white bg-secondary py-3">Weather News</h1>
        <div className="py-5">
            <div className="container-md d-flex justify-content-center">
                <input className="form-control w-50"type="search"onChange={(event) => setSearched(event.target.value)}/>
                <button onClick={handleSearch} className="btn btn-primary ms-2"> Search</button>
            </div>
            {weathers ? (
                <div className="container-md d-flex justify-content-center">
                    <table className="table table-hover table-border">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Region</th>
                                <th>Country</th>
                                <th>Temperature</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{weathers.location.name}</td>
                                <td>{weathers.location.region}</td>
                                <td>{weathers.location.country}</td>
                                <td>{weathers.current.temp_c}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="text-center">Loading weather...</p>
            )}
            </div>
        </>
    );
}

export default Weather;
