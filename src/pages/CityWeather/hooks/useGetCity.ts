import {useParams} from "react-router-dom"

export const useGetCity: () => ({cityId?: number, cityName?: string}) = () => {
    const {city} = useParams<{city?: string}>()

    if (!isNaN(Number(city))) return {cityId: Number(city)}
    else return {cityName: city}
}