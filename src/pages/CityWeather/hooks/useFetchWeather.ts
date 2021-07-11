import {useCallback} from "react";
import {axiosRequest} from "../../../axios";
import {useGetCity} from "./useGetCity";
import {useWeatherActionCreators, weatherSelectors} from "../../../redux/slices/weatherSlice";
import {weatherTabs} from "../../../static";
import {useQuery} from "./useQuery";
import {useDispatch, useSelector} from "react-redux";
import {RequestStatus, WeathersList, WeatherTabsIds} from "../../../types";

export const useFetchWeather: () => { fetch: () => void, data?: WeathersList, status: RequestStatus } = () => {
    const {cityId, cityName} = useGetCity()
    const {successFetch, failFetch, startFetch, setStatusOnSuccess} = useWeatherActionCreators()
    const {selectedTab} = useQuery()

    const data = useSelector(weatherSelectors.getOpenedCity(selectedTab as WeatherTabsIds, cityId, cityName))
    const status = useSelector(weatherSelectors.getStatus())

    const fetch = () => {
        const sectionsCount = (weatherTabs.find(({id}) => id === selectedTab) || weatherTabs[0]).sectionsCount
        startFetch()
        if (!data) {
            axiosRequest({
                onSuccess: (response) => successFetch({...response, section: selectedTab}),
                onError: () => failFetch(),
                cityName, cityId, sectionsCount
            })
        } else if ((data.city.id === cityId && selectedTab === data.section) || (data.city.name === cityName && selectedTab === data.section)) {
            setStatusOnSuccess()
        }
    }

    return {fetch, data, status}
}