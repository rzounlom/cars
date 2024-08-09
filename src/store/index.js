import {
  addCar,
  carReducer,
  changeSearchTerm,
  removeCar,
} from "./slices/carsSlice";
import { changeCost, changeName, formReducer } from "./slices/formSlice";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    cars: carReducer,
    form: formReducer,
  },
});

export { store, addCar, changeSearchTerm, removeCar, changeName, changeCost };
