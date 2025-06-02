import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import weatherData from "../mockWeatherData";
import "../App.css"; 

const CityForecast = () => {
  const { cityName } = useParams(); // Get city from URL
  const [forecast, setForecast] = useState(null);
  const detailsRef = useRef(null); // For scrollinng smoothly to the details section
   const [showDetails, setShowDetails] = useState(false); // State to manage the visibility of details

  useEffect(() => {
    const data = weatherData[cityName]; // Get the data for the selected city
    if(data) {
      setForecast(data); 
    }else {
      setForecast(null);
    }
},[cityName]);

const scrollToDetails= () => {
  setShowDetails(true);
  if(detailsRef.current) {
    detailsRef.current.scrollIntoView({ behavior: "smooth" });  
  }
};

return (
   <div className="container">
      {forecast ? (
        <>
          <h2>{cityName} Forecast</h2>
          <p>{forecast.summary}</p>
          <button onClick={scrollToDetails} className="btn">View Details</button>
          {showDetails && (
            <div ref={detailsRef} className="details">
            <p>{forecast.details}</p>
          </div>
          )}<br />
          <a href="/" className="back-link">← Back to City List</a>
        </>
      ) : (
        <p>City not found. Please go back and try again.</p>
      )}
    </div>
);
}

export default CityForecast;