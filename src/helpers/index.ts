import moment from "moment";
import "moment/locale/ru"
import {openweatherImageUrl} from "../config.json";
import {WeatherTabsIds} from "../types";

moment().locale("ru")

const toFixedTimeLength = (time: number) => (("0" + time.toString()).slice(-2))

export const getDate = (initDate: number | undefined) => {
    let date
    let time
    if (initDate) {
        date = moment(initDate * 1000).format("DD MMMM")
        time = toFixedTimeLength(moment(initDate * 1000).hour()) + ":" + toFixedTimeLength(moment(initDate * 1000).minutes())
    }

    return {date, time}
}

export const parseIconUrl = (icon: string) => openweatherImageUrl + icon + ".png"

interface ParsePrecipitationProps {
    snow?: {
        "3h": number
    }
    rain?: {
        "3h": number
    }
}

export const parsePrecipitation: (params: ParsePrecipitationProps) => string = (params) => {
    const {rain, snow} = params
    if (rain) return rain["3h"] + "мм"
    if (snow) return snow["3h"] + "мм"
    return "Без осадков"
}