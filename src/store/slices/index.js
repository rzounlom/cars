import { addCar, carReducer, changeSearchTerm, removeCar } from "./carsSlice";
import { changeCost, changeName, formReducer } from "./formSlice";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    cars: carReducer,
    form: formReducer,
  },
});

export { store, addCar, changeSearchTerm, removeCar, changeName, changeCost };
