import {useCallback} from "react";
import {axiosRequest} from "../../../axios";
import {useGetCity} from "./useGetCity";
import {useWeatherActionCreators, weatherSelectors} from "../../../redux/slices/weatherSlice";
import {weatherTabs} from "../../../static";
import {useQuery} from "./useQuery";
import {useSelector} from "react-redux";
import {CityDataI, RequestStatus, WeathersList, WeatherTabsIds} from "../../../types";
// @ts-ignore
import {openweatherBaseUrl, openweatherCurrentBaseUrl} from "../../../config.json"

export const useFetchWeather: () => { fetch: () => void, data?: WeathersList, status: RequestStatus } = () => {
    const {cityId, cityName} = useGetCity()
    const {successFetch, failFetch, startFetch, setStatusOnSuccess} = useWeatherActionCreators()
    const {selectedTab} = useQuery()

    const data = useSelector(weatherSelectors.getOpenedCity(selectedTab as WeatherTabsIds, cityId, cityName))
    const status = useSelector(weatherSelectors.getStatus())

    const handleParseResponse = useCallback((response: CityDataI) => {
        successFetch({
            section: selectedTab as WeatherTabsIds,
            city: {...response},
            list: [{...response}]
        })
    }, [selectedTab, successFetch])

    const fetch = useCallback(() => {
        const weatherOnNow = selectedTab === WeatherTabsIds.Now // When loading at the moment, the answer is different
        const sectionsCount = (weatherTabs.find(({id}) => id === selectedTab) || weatherTabs[0]).sectionsCount
        startFetch()
        if (!data) {
            axiosRequest({
                onSuccess: (response) => !weatherOnNow
                    ? successFetch({...response, section: selectedTab})
                    : handleParseResponse(response),
                onError: () => failFetch(),
                cityName,
                cityId,
                sectionsCount,
                baseUrl: weatherOnNow ? openweatherCurrentBaseUrl : openweatherBaseUrl
            })
        } else if ( // If the weather of this city is already in the store
            (data.city.id === cityId && selectedTab === data.section)
            || (data.city.name.toLowerCase() === cityName?.toLowerCase() && selectedTab === data.section)
        ) {
            setStatusOnSuccess()
        }
    }, [cityId, cityName, data, failFetch, selectedTab, setStatusOnSuccess, startFetch, successFetch, handleParseResponse])

    return {fetch, data, status}
}