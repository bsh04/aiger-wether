import {combineReducers} from "redux";
import {weatherSlice} from "../slices/weatherSlice";

export const rootReducer = combineReducers({
    weather: weatherSlice.reducer,
})
