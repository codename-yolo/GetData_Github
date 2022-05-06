const decodeBase64 = (string) => {
  return decodeURIComponent(escape(window.atob(string)))
}
export default decodeBase64
