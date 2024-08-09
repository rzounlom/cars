import { useDispatch, useSelector } from "react-redux";

import { removeCar } from "../store";

function CarList() {
  const dispatch = useDispatch();
  const { cars, name } = useSelector(({ cars: { cars, searchTerm }, form }) => {
    const filteredCars = cars.filter((car) => car.name.includes(searchTerm));

    return {
      cars: filteredCars,
      name: form.name,
    };
  });

  const handleRemoveCar = (id) => {
    dispatch(removeCar(id));
  };

  const renderedCars = cars.map((car) => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

    return (
      <div key={car.id} className={`panel ${bold && "bold"}`}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => handleRemoveCar(car.id)}
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <div className="car-list">
      {renderedCars}
      <hr />
    </div>
  );
}

export default CarList;
