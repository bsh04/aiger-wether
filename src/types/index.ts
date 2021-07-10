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

export interface WeathersList {
    city: DefaultItemProps
    list: Array<CityDataI>
}

export interface WeatherI {
    description: string
    icon: string
    id: number
    main: string
}

export interface CityDataI {
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