import React, { useState } from 'react';
 import Conditions from '../Conditions/Conditions';
 import classes from './Forecast.module.css';

const Forecast = () => {

    let [responseObj, setResponseObj] = useState({});
    let [city, setCity] = useState('');
    let [unit, setUnit] = useState('metric');
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);

    
   function getForecast(e) {
    e.preventDefault();

    if (city.length === 0) {
        return setError(true);
    }

    // Clear state in preparation for new data
   setError(false);
   setResponseObj({});

   setLoading(true);

   let uriEncodedCity = encodeURIComponent(city);


    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
            'X-RapidAPI-Key': process.env.REACT_APP_API_KEY
        }
    };
    
    fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}&lang=null`, options)
        //  .then(response => console.log(response))
        //  .catch(err => console.error(err))
        .then(response => response.json())
        .then(response => {
            if (response.cod !== 200) {
                throw new Error()
            }
            setResponseObj(response);
            setLoading(false);
        })
        .catch(err => {
            setError(true);
            setLoading(false);
            console.log(err.message);
        });

   }

   return (
    <div>
    <h2>Find Current Weather Conditions</h2>
    
    <form onSubmit={getForecast}>
        <div>
                <input
                    type="text"
                    placeholder="Enter City"
                    maxLength="50"
                    className={classes.textInput}
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    size='40'
                    />
                <label className={classes.Radio}>
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "imperial"}
                        value="imperial"
                        onChange={(e) => setUnit(e.target.value)}
                        />
                    Fahrenheit
                </label>
                <label className={classes.Radio}>
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "metric"}
                        value="metric"
                        onChange={(e) => setUnit(e.target.value)}
                        />
                    Celcius
                </label>
            </div>    
                <button className={classes.Button} type="submit">Get Forecast</button>
            </form>

            <Conditions
              responseObj={responseObj}
              error={error} //new
              loading={loading} //new
              />
    </div>
   )
}

export default Forecast;