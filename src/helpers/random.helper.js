export function randomString() {
  let baseArray = new Uint32Array(5)
  crypto.getRandomValues(baseArray)
  return Array.from(baseArray).map(num => num.toString(36)).join('')
}
