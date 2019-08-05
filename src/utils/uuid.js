export default (() => {
  const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
  let increase = 0
  let now = Date.now()
  return () => 'uuid' + now + s4() + s4() + increase++
})()
