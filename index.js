function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log(shout(string))
}
function logWhisper(string) {
  console.log(whisper(string))
}
function sayHiToGrandma(string) {
  if (`${string}`.toUpperCase()===`${string}`) {
    console.log('YES INDEED!')}}
