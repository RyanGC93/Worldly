import React, { useState } from "react";
/* Form requires ambassador id title descrition, cost, location(lon,lat) */

const EventForm = () => {
  const [errors, setErrors] = useState([]);
  const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [cost, setCost] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
  
  const geoHandler = async (e) => {
    e.preventDefault()
    let replacedCity = city.replaceAll(' ', '+')
    let replacedCountry = country.replaceAll(' ', '+')

    let url = `https://maps.googleapis.com/maps/api/geocode/json?&address=${replacedCity}%${replacedCountry}&key=${process.env.REACT_APP_GOOGLE_GEO_KEY}`
    const response = await fetch(url)
    if (!response.ok) return
    let data = await response.json();
  }
  
  const onSubmit = async (e) => {
    e.preventDefault();

  };
  const check = (e) => {

  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        {errors.map((error) => (
          <div>{error}</div>
        ))}
      </div>
      <div>
        <label htmlFor="title">Title</label>
        <input
          required
          name="title"
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value) }
        />
          </div>
          <div>
        <label htmlFor="cost">cost</label>
        <input
          required
          name="cost"
          type="text"
          placeholder="cost"
          value={cost}
          onChange={(e) => setCost(e.target.value) }
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input
          required
          name="description"
          type="description"
          placeholder="Description"
          value={description}
          onChange={(e)=> setDescription(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="city">City</label>
        <input
          required
          name="city"
          type="city"
          placeholder="City"
          value={city}
          onChange={(e)=> setCity(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="country">Country</label>
        <input
          required
          name="country"
          type="country"
          placeholder="Country"
          value={country}
          onChange={check}
          // onChange={(e)=> setCountry(e.target.value)}
        />
      </div>
          <div onClick={geoHandler}>Geo test</div>
        <button type="submit">Next</button>
    </form>
  );
};

export default EventForm;
