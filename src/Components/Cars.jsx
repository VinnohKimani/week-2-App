import React, { useEffect, useState } from "react";

export const Cars = () => {
  const [input, setInput] = useState("");
  const [cars, setCars] = useState([]);

  /* useEffect(() => {
    console.log("First useEffect runnig");
  });

  useEffect(() => {
    console.log("Second useEffect running");
  }, []);*/

  // runs once but reruns when user is typing something inside the input
  useEffect(() => {
    fetch("http://localhost:3000/cars")
      .then((response) => response.json())
      .then((data) => {
        setCars(data);
        console.log("Fetched cars:", data);
      });
  }, []);

  return (
    <div>
      <input type="text" onChange={(e) => setInput(e.target.value)} />

      {cars.map((car) => {
        return (
          <div key={car.id}>
            <h3>{car.make}</h3>
            <p>{car.model}</p>
          </div>
        );
      })}
    </div>
  );
};
