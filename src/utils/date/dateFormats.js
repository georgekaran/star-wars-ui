import moment from 'moment'

export const defaultFormat = (date) => moment(date).format('DD/MM/YYYY')

export const getYearFromDate = (date) => moment(date).format('YYYY')