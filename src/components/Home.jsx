import React, { useState, useEffect } from "react";
import { Country, City } from "country-state-city";
import axios from "axios";

const Home = () => {
  const [allCountries, setAllCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  // Fetch country list on component mount
  useEffect(() => {
    setAllCountries(
      Country.getAllCountries().map((country) => ({
        value: country.isoCode,
        label: country.name,
      }))
    );
  }, []);

  // Fetch city list when a country is selected
  const handleCountryChange = (e) => {
    const countryIso = e.target.value;
    setSelectedCountry(countryIso);
    setCities(
      City.getCitiesOfCountry(countryIso).map((city) => ({
        value: city,
        label: city.name,
      }))
    );
  };

  const handleCityChange = (e) => {
    const selectedCity = cities.find((city) => city.label === e.target.value);
    setSelectedCity(selectedCity);
  };

  const fetchWeatherData = async () => {
    if (!selectedCity) return;

    const { latitude, longitude } = selectedCity.value;
    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,windspeed_10m_max&timezone=auto`;

    try {
      const response = await axios.get(apiUrl);
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6 h-screen overflow-y-scroll scrollbar-hide">
      <h1 className="text-3xl font-bold mb-6">Weather Application</h1>

      <div className="flex space-x-4 mb-6">
        <select
          onChange={handleCountryChange}
          className="p-2 rounded border border-gray-300"
          value={selectedCountry}
        >
          <option value="">Select Country</option>
          {allCountries.map((country) => (
            <option key={country.value} value={country.value}>
              {country.label}
            </option>
          ))}
        </select>

        <select
          onChange={handleCityChange}
          className="p-2 rounded border border-gray-300"
          disabled={!selectedCountry}
        >
          <option value="">Select City</option>
          {cities.map((city) => (
            <option key={city.label} value={city.label}>
              {city.label}
            </option>
          ))}
        </select>

        <button
          onClick={fetchWeatherData}
          className="bg-teal-500 text-white px-4 py-2 rounded"
        >
          Get Weather
        </button>
      </div>

      {weatherData && (
        <div className="flex space-x-6 mt-6">
          <div className="bg-white shadow p-6 rounded text-center">
            <p>Max Temp</p>
            <h2 className="text-xl text-red-500 font-bold">
              {weatherData.daily.temperature_2m_max[0]}°C
            </h2>
          </div>
          <div className="bg-white shadow p-6 rounded text-center">
            <p>Min Temp</p>
            <h2 className="text-xl text-blue-500 font-bold">
              {weatherData.daily.temperature_2m_min[0]}°C
            </h2>
          </div>
          <div className="bg-white shadow p-6 rounded text-center">
            <p>Wind Speed</p>
            <h2 className="text-xl text-green-500 font-bold">
              {weatherData.daily.windspeed_10m_max[0]} km/h
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
