import moment from "moment";
import "moment/locale/ru"
import "moment-timezone"
import {openweatherImageUrl} from "../config.json";

moment().locale("ru")

const toFixedTimeLength: (time: number) => string = (time) => (("0" + time.toString()).slice(-2))

export const getDate: (dt_txt?: string, dt?: number) => {date?: string, time?: string} = (dt_txt, dt) => {
    let date
    let time
    if (dt_txt) {
        date = moment(dt_txt).format("DD MMMM")
        time = toFixedTimeLength(moment(dt_txt).hour()) + ":" + toFixedTimeLength(moment(dt_txt).minutes())
    } else if (dt) {
        date = moment(dt * 1000).format("DD MMMM")
        time = toFixedTimeLength(moment(dt * 1000).hour()) + ":" + toFixedTimeLength(moment(dt * 1000).minutes())
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
    if (rain) return "Осадки: " + rain["3h"] + "мм"
    if (snow) return "Осадки: " + snow["3h"] + "мм"
    return "Без осадков"
}

export const toCapitalizeCollocation: (value: string) => string = (value) => value[0].toUpperCase() + value.slice(1)

export const getWindIndex: (deg: number) => number = (deg) => deg >= 315 ? 0 : Math.round(+(deg / 45))