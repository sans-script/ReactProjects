import { useState } from "react";

function MyComponent() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  function handleAddCar() {
    const newCar = { year: carYear, make: carMake, model: carModel };

    setCars((c) => [...c, newCar]);
    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  }

  function handleRemoveCar(index) {
    setCars((c) => c.filter((_, i) => i !== index));
  }

  function handleYearChange(event) {
    setCarYear(event.target.value);
  }

  function handleMakeChange(event) {
    setCarMake(event.target.value);
  }

  function handleModelChange(event) {
    setCarModel(event.target.value);
  }

  return (
    <>
      <div>
        <h2>List of Car Objects</h2>
        <ul>
          {cars.map((car, index) => (
            <li key={index} onClick={() => handleRemoveCar(index)}>
              {car.year} {car.make} {car.model}
            </li>
          ))}
        </ul>
        <input
          type="number"
          name=""
          value={carYear}
          onChange={handleYearChange}
        />
        <br />
        <input
          type="text"
          name=""
          value={carMake}
          placeholder="Enter car make"
          onChange={handleMakeChange}
        />
        <br />
        <input
          type="text"
          name=""
          value={carModel}
          placeholder="Enter car model"
          onChange={handleModelChange}
        />
        <br />
        <button onClick={handleAddCar}>Add car</button>
      </div>
    </>
  );
}
export default MyComponent;
