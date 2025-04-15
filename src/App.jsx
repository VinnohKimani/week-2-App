import { useState } from "react";
import "./App.css";

import { Cars } from "./Components/Cars";

const initialValues = {
  username: "",
  email: "",
  password: "",
};

function App() {
  const [formData, setFormData] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // reseting the form by setting empty values to the state
    setFormData(initialValues);
  };
  console.log(formData);

  return (
    <form onSubmit={handleSubmit}>
      <div className="p-6 bg-blue-300 w-50 grid grid-rows-1 ">
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          placeholder="Username"
        />
        <br />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
        />
        <br />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Password"
        />
        <br />
        <button type="submit" onSubmit={handleSubmit}>
          Submit
        </button>
      </div>
      <div className="flex-[50px]">
        <Cars />
      </div>
    </form>
  );
}

export default App;
