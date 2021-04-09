import React, { useState } from "react";
/* Form requires ambassador id title descrition, cost, location(lon,lat) */

const EventForm = () => {
  const [errors, setErrors] = useState([]);
  const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [cost, setCost] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

  };

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
          name="description"
          type="description"
          placeholder="Description"
          value={description}
          onChange={(e)=> setDescription(e.target.value)}
        />
        <button type="submit">Next</button>
      </div>
    </form>
  );
};

export default EventForm;
