import moment from 'moment'

const dateFormat = 'YYYY-MM-DD[T]HH:mm:ss[Z]'

export const timeDifference = (dateTime) => {
  const deviant = moment(dateTime, dateFormat).fromNow()
  return deviant
}
