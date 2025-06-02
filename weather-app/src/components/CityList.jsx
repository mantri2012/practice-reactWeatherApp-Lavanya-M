import React from "react";
import weatherData from "../mockWeatherData";
import "../App.css"; // Importing CSS file for styling

const CityList = () => {
  const cityNames = Object.keys(weatherData); // ['NewYork', 'London', 'Tokyo'] Object.keys() is an inbuilt method returning an array of given object's keys only 

  return (
    <div className= "container">
      <h1>Weather App</h1>
    <div className= "city-list">
      <h2>Select a City</h2>
      <ul>
        {cityNames.map((city) => (
          <li key={city}>
            <a href={`/forecast/${city}`} className= "city-link">{city}</a>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};
export default CityList;