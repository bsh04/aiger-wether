import axios from "axios";
import {openweatherAPIkey, openweatherBaseUrl} from "../config.json"

interface AxiosRequestProps {
    cityName?: string
    cityId?: number
    onError?: (error: any) => void
    onSuccess?: (response: any) => void
    baseUrl?: string
}

export const axiosRequest: (params: AxiosRequestProps) => void = async (params) => {
    const {cityId, cityName, onError, onSuccess, baseUrl} = params
    try {
        let response
        response = await axios.get(`${baseUrl || openweatherBaseUrl}?${requestParse(cityName, cityId)}&appid=${openweatherAPIkey}&lang=ru&units=metric&cnt=5`)
        onSuccess && onSuccess(response.data)
    } catch (err) {
        onError && onError(err)
    }

}

const requestParse = (name?: string, id?: number) => {
    if (!id && !name) return undefined
    if (!!id && !name) return `id=${id}`
    if (!id && !!name) return `q=${name}`
    if (!!id && !!name) return `q=${name}&id=${id}`
}