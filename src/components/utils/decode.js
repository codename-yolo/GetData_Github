const decodeBase64 = (string) => {
  const decodeString = decodeURIComponent(escape(window.atob(string)))
  return decodeString
}
export default decodeBase64
