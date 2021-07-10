import {useCallback, useEffect} from "react";
import {axiosRequest} from "../../../axios";
import {useGetCity} from "./useGetCity";
import {useWeatherActionCreators} from "../../../redux/slices/weatherSlice";

export const useFetchWeather: () => void = () => {
    const {cityId, cityName} = useGetCity()
    const {successFetch, failFetch, startFetch, reset} = useWeatherActionCreators()

    const fetch = useCallback(() => {
        startFetch()
        axiosRequest({
            onSuccess: successFetch,
            onError: () => failFetch(),
            cityName, cityId
        })
    }, [cityId, cityName, successFetch, failFetch, startFetch])

    useEffect(() => {
        fetch()
        return () => {
            reset()
        }
    }, [])
}