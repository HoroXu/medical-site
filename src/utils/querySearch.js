export default (str) => {
  return str.slice(1).split('&').reduce((prev, item) => {
    const arr = item.split('=')
    return {[arr[0]]: arr[1], ...prev}
  }, {})
}
