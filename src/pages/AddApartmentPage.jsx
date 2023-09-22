// src/pages/AddApartmentPage.jsx
import { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom"; // <== IMPORT

function AddApartmentPage() {
  const [headline, setHeadline] = useState("");
  const [price, setPrice] = useState(1);

  const navigate = useNavigate(); // <==  ADD

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = { title: headline, pricePerDay: price };

    axios
      .post("https://ironbnb-m3.herokuapp.com/apartments", body)
      .then((response) => {
        // Reset the state
        setHeadline("");
        setPrice(1);

        // Navigate to the `/` page
        navigate("/"); // <== ADD
      });
  };

  return (
    <div className="AddApartmentPage">
      <h3>Add New Apartment</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          name="headline"
          onChange={(e) => setHeadline(e.target.value)}
          value={headline}
        />

        <label>Price per Day</label>
        <input
          type="number"
          name="pricePerDay"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
        <button type="submit">Create Apartment</button>
      </form>
    </div>
  );
}

export default AddApartmentPage;
