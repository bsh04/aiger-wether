import {bindActionCreators, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RequestStatus, WeathersList} from "../../types";
import {useDispatch} from "react-redux";

interface SliceState {
    status: RequestStatus,
    data?: WeathersList
}

const initialState: SliceState = {
    status: RequestStatus.Init
}

export const weatherSlice = createSlice({
    name: "weatherSlice",
    initialState,
    reducers: {
        startFetch(state: SliceState) {
            state.status = RequestStatus.Loading
        },
        failFetch(state: SliceState) {
            state.status = RequestStatus.Fail
        },
        successFetch(state: SliceState, action: PayloadAction<WeathersList>) {
            state.data = action.payload
            state.status = RequestStatus.Success
        },
        reset() {
            return initialState
        }
    }
})

interface Store {
    weather: SliceState
}

export const weatherSelectors = {
    getStatus: () => (state: Store) => state.weather.status,
    getData: () => (state: Store) => state.weather.data,
}

export const useWeatherActionCreators = () => {
    const dispatch = useDispatch()
    return bindActionCreators({...weatherSlice.actions}, dispatch)
}

