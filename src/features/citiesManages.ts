import {citiesLocalStorageParam, CityI} from "../types";

export const getCities: () => string | "" = () => localStorage.getItem(citiesLocalStorageParam) || ""

export const setCities = (data: CityI | Array<CityI>) => {
    const cities = getCities()

    if (Array.isArray(data)) {
        localStorage.setItem(citiesLocalStorageParam, JSON.stringify(data))
    } else {
        localStorage.setItem(citiesLocalStorageParam, JSON.stringify([...JSON.parse(cities), data]))
    }
}
