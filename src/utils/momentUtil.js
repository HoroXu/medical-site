import moment from 'moment'

export function disabledThirty(current) {
  return current < moment().subtract(90, 'days')
}

export function disabledAgo(current) {
  return current && current < moment().subtract(1, 'days')
}

export function disabled4Week(current) {
  return current && current < moment().day(-1)
}

export function disabled4Month(current) {
  return current && current < moment().startOf('month')
}

export function disabledOtherYear(current) {
  return current > moment(moment().add(1, 'year').format('YYYY')+'-01-01') || current < moment(moment().format('YYYY')+'-01-01')
}
