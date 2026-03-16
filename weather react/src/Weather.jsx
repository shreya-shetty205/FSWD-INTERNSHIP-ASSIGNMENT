
import React, { useState } from "react";
import "./Weather.css";

function Weather({ goHome }) {

const [city, setCity] = useState("");
const [weather, setWeather] = useState(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");

const API_KEY = "a2d82ba86ffe14e347677b07a9002248";



const getWeather = async () => {

if(city.trim() === ""){
setError("Please enter city name");
return;
}

setLoading(true);
setError("");
setWeather(null);

try{

const response = await fetch(
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
);

const data = await response.json();

if(data.cod !== 200){
throw new Error(data.message);
}

setWeather(data);

}
catch(err){
setError(err.message);
}
finally{
setLoading(false);
}

};

const clearWeather = () => {
setCity("");
setWeather(null);
setError("");
};

return (

<div className="weather-container">

{/* Home Button */}

<button className="home-btn" onClick={goHome}>
Home
</button>

<h2>Weather Dashboard</h2>

<input
type="text"
placeholder="Enter city"
value={city}
onChange={(e)=>setCity(e.target.value)}
/>

<div className="button-group">

<button className="weather-btn" onClick={getWeather}>
Get Weather
</button>

<button className="clear-btn" onClick={clearWeather}>
Clear
</button>

</div>

{loading && <p>Loading weather data...</p>}

{error && <p className="error">{error}</p>}

{weather && (

<div className="weather-box">

<h3>{weather.name}</h3>

<p>Temperature: {weather.main.temp}°C</p>

<p>Condition: {weather.weather[0].main}</p>

<p>Humidity: {weather.main.humidity}%</p>

</div>

)}

</div>

);

}

export default Weather;