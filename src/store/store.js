import { createStore, combineReducers } from "redux";
import calculatorReducer from "./Calculator/Calculator.reducer";

const rootReducer = combineReducers({
  calculator: calculatorReducer,
});

export const store = createStore(rootReducer);

export default store;
