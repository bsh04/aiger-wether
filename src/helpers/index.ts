import moment from "moment";
import "moment/locale/ru"

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