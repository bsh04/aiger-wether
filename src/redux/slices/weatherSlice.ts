import {
    bindActionCreators,
    createSlice,
    PayloadAction, Slice,
} from "@reduxjs/toolkit";
import {RequestStatus, WeathersList, WeatherTabsIds} from "../../types";
import {useDispatch} from "react-redux";

interface SliceState {
    isReset: boolean
    status: RequestStatus,
    data?: Array<WeathersList>
}

const initialState: SliceState = {
    isReset: false,
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
        setIsReset(state: SliceState) {
            state.isReset = true
        },
        setStatusOnSuccess(state: SliceState) {
            state.status = RequestStatus.Success
        },
        successFetch(state: SliceState, action: PayloadAction<WeathersList>) {
            state.data = [...(state.data || []), action.payload]
            state.status = RequestStatus.Success
        },
        reset() {
            return initialState
        }
    },
})

interface Store {
    weather: SliceState
}

export const weatherSelectors = {
    getStatus: () => (state: Store) => state.weather.status,
    getData: () => (state: Store) => state.weather.data,
    getIsReset: () => (state: Store) => state.weather.isReset,
    getOpenedCity: (section: WeatherTabsIds, id?: number, name?: string) => (state: Store) =>
        state.weather.data?.find((item) => (item.city.id === id && section === item.section) || (item.city.name === name && section === item.section)),
}

export const useWeatherActionCreators = () => {
    const dispatch = useDispatch()
    return bindActionCreators({...weatherSlice.actions}, dispatch)
}

