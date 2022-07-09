import moment from "moment"

const withDateYearMonthPatter = 'MMM DD YYYY'
const witMonthYear = 'MMM YYYY'

const time = 'H:mm'

export const formatDateWithDateYearMonth = (dateValue: string) => {
    return moment(dateValue).format(withDateYearMonthPatter)
}

export const formatDateWithMonthYear = (dateValue:string) => { 
    return moment(dateValue).format(witMonthYear)
}

export const formatTime = (value:string) => {
    return moment(value).format(time)
}