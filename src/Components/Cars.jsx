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

  const carList = cars.map((car) => {
    // const stringifyCars = JSON.stringify(car);
    // console.log(stringifyCars);

    // const parseCars = JSON.parse(stringifyCars);
    // console.log(parseCars);
    return (
      <li key={car.id}>
        <h3>Car Make:{car.make}</h3>
        <p>
          Model:{car.model}
          <br />
          Year:{car.year}
          <br />
          Color:{car.color}
          <br />
          Price:{car.price}
          <br />
          Fuel Type:{car.fuelType}
        </p>
        <br />
      </li>
    );
  });

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        className="outline-2 rounded-sm"
      />

      <div className="bg-blue-600 rounded-xl mr-200 pt-2 text-shadow-white">
        <ol>{carList}</ol>
      </div>
    </div>
  );
};
