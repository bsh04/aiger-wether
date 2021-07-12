export interface DefaultItemProps {
    id: number
    name: string
}

export enum RequestStatus {
    Init = "Init",
    Loading = "Loading",
    Success = "Success",
    Fail = "Fail",
}

export enum WeatherTabsIds {
    Now = "now",
    Today = "today",
    TwoDay = "two_day"
}

export enum SearchParams {
    selectedTab = "selected_tab"
}

export const citiesLocalStorageParam = "cities"

export const WeatherTabsView = {
    [WeatherTabsIds.Now]: "Сейчас",
    [WeatherTabsIds.Today]: "На день вперед",
    [WeatherTabsIds.TwoDay]: "На два дня вперед",
}

export interface CityI extends DefaultItemProps {}

export interface WeatherTabsItemI {
    id: WeatherTabsIds
    name: string
    sectionsCount: number
}

export interface DataCityI extends DefaultItemProps {
    timezone: number
}

export interface WeathersList {
    section: WeatherTabsIds
    city: DataCityI
    list: Array<CityDataI>
}

export interface WeatherI {
    description: string
    icon: string
    id: number
    main: string
}

export interface CityDataI {
    id: number
    name: string
    timezone: number
    main: {
        feels_like: number
        grnd_level: number
        humidity: number
        pressure: number
        sea_level: number
        temp: number
        temp_max: number
        temp_min: number
    }
    rain?: {
        "3h": number
    }
    snow?: {
        "3h": number
    }
    wind: {
        deg: number
        gust: number
        speed: number
    }
    weather: Array<WeatherI>
    sys: {
        type: number
        id: number
        country: string
        sunrise: number
        sunset: number
    }
    dt: number
    dt_txt: string
}